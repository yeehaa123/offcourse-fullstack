(ns offcourse.appstate.viewmodels.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.appstate.viewmodels.helpers :as helpers]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.resource :as r]))

(schema/defrecord CheckpointViewmodel
    [level :- Keyword
     course :- Course
     checkpoint-id :- schema/Int])

(defn ->viewmodel [course checkpoint-id]
  (->CheckpointViewmodel :checkpoint course checkpoint-id))

(defn check [viewmodel]
  (schema/check CheckpointViewmodel viewmodel))

(defmulti highlight-label
  (fn [_ {:keys [label-type]}] label-type))

(defmethod highlight-label :tags
  [{:keys [checkpoint-id] :as viewmodel} {:keys [label-name highlight]}]
  (assoc-in viewmodel [:course :checkpoints checkpoint-id :tags label-name :highlighted?] highlight))

(defn refresh [{:keys [course checkpoint-id]}{:keys [courses resources]}]
  (let  [{:keys [course-id]} course
         course (get courses course-id)
         {:keys [url]} (co/find-checkpoint course checkpoint-id)
         course (helpers/add-tag-labels-to-checkpoints course)
         resource (r/find-resource resources url)]
    (->viewmodel course checkpoint-id)))
