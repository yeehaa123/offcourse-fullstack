(ns offcourse.appstate.viewmodels.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.label :as label :refer [LabelCollection]]
            [offcourse.models.resource :as r]))

(schema/defrecord CheckpointViewmodel
    [level :- Keyword
     course :- Course
     checkpoint-id :- schema/Int
     labels :- {Keyword LabelCollection}])

(defn ->viewmodel [course checkpoint-id labels]
  (->CheckpointViewmodel :checkpoint course checkpoint-id labels))

(defn check [viewmodel]
  (schema/check CheckpointViewmodel viewmodel))

(defn highlight-label [viewmodel {:keys [label-name label-type highlight]}]
  (assoc-in viewmodel [:labels label-type label-name :highlighted?] highlight))

(defn refresh [{:keys [course checkpoint-id]}{:keys [courses resources]}]
  (let  [{:keys [course-id]} course
         course (get courses course-id)
         course (assoc course :tags (co/get-tags course))
         labels {:tags (label/->labelCollection (:tags course))}
         {:keys [url]} (get-in course [:checkpoint checkpoint-id])
         resource (r/find-resource resources url)]
    (->viewmodel course checkpoint-id labels)))
