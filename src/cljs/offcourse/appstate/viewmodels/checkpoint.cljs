(ns offcourse.appstate.viewmodels.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable unknown-field]]
            [offcourse.protocols.highlightable :refer [Highlightable]]
            [offcourse.protocols.refreshable :refer [Refreshable]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.label :as label :refer [LabelCollection]]
            [offcourse.models.resource :as r]))

(schema/defrecord CheckpointViewmodel
    [level :- Keyword
     course :- Course
     checkpoint-id :- schema/Int
     resource :- schema/Str
     labels :- {Keyword LabelCollection}])

(defn ->viewmodel
  ([course checkpoint-id]
   (->CheckpointViewmodel :checkpoint course checkpoint-id nil nil))
  ([course checkpoint-id resource labels]
   (->CheckpointViewmodel :checkpoint course checkpoint-id resource labels)))

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
  (refresh [{:keys [course checkpoint-id]} {:keys [courses resources]}]
    (let  [{:keys [course-id]} course
           course (get courses course-id)
           course (assoc course :tags (co/get-tags course))
           labels {:tags (label/->labelCollection (:tags course))}
           {:keys [url]} (get-in course [:checkpoint checkpoint-id])
           resource (r/find-resource resources url)]
      (->viewmodel course checkpoint-id nil labels))))
