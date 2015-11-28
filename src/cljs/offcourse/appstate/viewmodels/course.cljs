(ns offcourse.appstate.viewmodels.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.label :as label :refer [LabelCollection]]
            [offcourse.models.resource :as r]))

(schema/defrecord CourseViewmodel
    [level :- Keyword
     course :- Course
     labels :- {Keyword LabelCollection}
     resources :- schema/Any])

(defn ->viewmodel
  ([course] (->CourseViewmodel :course course nil nil))
  ([course labels resources] (->CourseViewmodel :course course labels resources)))

(defn check [viewmodel]
(schema/check CourseViewmodel viewmodel))

(defn highlight-checkpoint [viewmodel {:keys [checkpoint-id highlight]}]
  (assoc-in viewmodel [:course :checkpoints checkpoint-id :highlighted] highlight))

(defn highlight-label [viewmodel {:keys [label-name label-type highlight]}]
  (assoc-in viewmodel [:labels label-type label-name :highlighted?] highlight))

(defn refresh [{:keys [level course]} {:keys [courses resources collections]}]
  (let [{:keys [course-id]} course
        course (get courses course-id)
        course (assoc course :tags (co/get-tags course))
        labels {:tags (label/->labelCollection (:tags course))}
        urls (into #{} (co/get-resource-urls course))
        resources (r/find-resources resources urls)]
    (->viewmodel course labels resources)))
