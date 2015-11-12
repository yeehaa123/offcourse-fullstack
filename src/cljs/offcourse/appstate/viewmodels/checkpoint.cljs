(ns offcourse.appstate.viewmodels.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [map->Course Course]]
            [offcourse.models.resource :as r]))

(schema/defrecord CheckpointViewmodel
    [level :- Keyword
     course :- Course
     checkpoint-id :- schema/Int])



(defn new-checkpoint
  ([{:keys [course-id checkpoint-id] :as checkpoint}]
   (map->CheckpointViewmodel {:level :checkpoint
                              :course {:course-id course-id}
                              :checkpoint-id checkpoint-id}))
  ([course checkpoint-id resource]
   (map->CheckpointViewmodel {:level :checkpoint
                              :course course
                              :checkpoint-id checkpoint-id})))

(defn refresh [{:keys [course checkpoint-id]}{:keys [courses resources]}]
  (let  [{:keys [course-id]} course
         course (get courses course-id)
         {:keys [url]} (co/find-checkpoint course checkpoint-id)
         resource (r/find-resource resources url)]
    (new-checkpoint course checkpoint-id resource)))

(defn check [viewmodel]
  (schema/check CheckpointViewmodel viewmodel))
