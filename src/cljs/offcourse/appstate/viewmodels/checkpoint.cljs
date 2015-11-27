(ns offcourse.appstate.viewmodels.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.label :as label]
            [offcourse.models.resource :as r]))

(schema/defrecord CheckpointViewmodel
    [level :- Keyword
     course :- Course
     checkpoint-id :- schema/Int])

(defn add-tag-labels [{:keys [checkpoints] :as course} checkpoint-id]
  (->> (get-in checkpoints [checkpoint-id :tags])
       label/->labelCollection
       (assoc-in course [:checkpoints checkpoint-id :tags])))

(defn ->viewmodel [course checkpoint-id]
  (->CheckpointViewmodel :checkpoint course checkpoint-id))

(defn check [viewmodel]
  (schema/check CheckpointViewmodel viewmodel))

(defmulti highlight-label
  (fn [_ {:keys [label-type]}] label-type))

(defmethod highlight-label :tags [{:keys [checkpoint-id] :as viewmodel} {:keys [label-name highlight]}]
  (assoc-in viewmodel [:course :checkpoints checkpoint-id :tags label-name :highlighted?] highlight))

(defn refresh [{:keys [course checkpoint-id]}{:keys [courses resources]}]
  (let  [{:keys [course-id]} course
         course (get courses course-id)
         {:keys [url]} (co/find-checkpoint course checkpoint-id)
         course (add-tag-labels course checkpoint-id)
         resource (r/find-resource resources url)]
    (->viewmodel course checkpoint-id)))
