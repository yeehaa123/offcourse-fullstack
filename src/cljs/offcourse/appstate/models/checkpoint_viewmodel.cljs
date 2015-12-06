(ns offcourse.appstate.models.checkpoint-viewmodel
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable valid? unknown-field]]
            [offcourse.protocols.highlightable :refer [Highlightable]]
            [offcourse.protocols.refreshable :refer [Refreshable]]
            [offcourse.protocols.augmentable :as ab]
            [offcourse.models.label :as label :refer [LabelCollection]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.checkpoint :as cp :refer [Checkpoint]]
            [offcourse.models.resource :as rs :refer [Resource]]))

(schema/defrecord CheckpointViewmodel
    [level :- Keyword
     course :- Course
     checkpoint :- Checkpoint
     resource :- Resource
     labels :- {Keyword LabelCollection}])

(defn ->viewmodel
  ([course checkpoint]
   (->CheckpointViewmodel :checkpoint course checkpoint nil nil))
  ([course checkpoint resource labels]
   (->CheckpointViewmodel :checkpoint course checkpoint resource labels)))

(def check (schema/checker CheckpointViewmodel))

(extend-type CheckpointViewmodel
  Highlightable
  (highlight-label [viewmodel {:keys [label-name label-type highlight]}]
    (assoc-in viewmodel [:labels label-type label-name :highlighted?] highlight))
  (highlight-checkpoint [viewmodel _] viewmodel)
  Validatable
  (check [viewmodel]
    (check viewmodel))
  (valid? [viewmodel]
    (let [errors (check viewmodel)
          unknown-field (unknown-field errors)]
      (if (or (=  unknown-field :resource) (not errors)) true false)))
  Refreshable
  (refresh [{:keys [course checkpoint]} {:keys [courses resources]}]
    (let [course (get-in courses [(:course-id course)])
          checkpoint (get-in course [:checkpoints (:checkpoint-id checkpoint)])
          labels {:tags (label/->labelCollection (:tags checkpoint))}
          resource-url (get-in course [:checkpoints (:checkpoint-id checkpoint) :resource-url])
          resource (or (get resources resource-url) (rs/->resource resource-url))]
      (->viewmodel course checkpoint resource labels))))
