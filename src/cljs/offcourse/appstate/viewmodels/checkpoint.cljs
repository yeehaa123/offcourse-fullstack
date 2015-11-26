(ns offcourse.appstate.viewmodels.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [map->Course Course]]
            [offcourse.models.resource :as r]))

(schema/defrecord CheckpointViewmodel
    [level :- Keyword
     course :- Course
     checkpoint-id :- schema/Int])

(defn ->viewmodel [course checkpoint-id]
  (->CheckpointViewmodel :checkpoint course checkpoint-id))

(defn check [viewmodel]
  (schema/check CheckpointViewmodel viewmodel))

(defn refresh [{:keys [course checkpoint-id]}{:keys [courses resources]}]
  (let  [{:keys [course-id]} course
         course (get courses course-id)
         {:keys [url]} (co/find-checkpoint course checkpoint-id)
         course (co/add-tags course {})
         resource (r/find-resource resources url)]
    (->viewmodel course checkpoint-id)))
