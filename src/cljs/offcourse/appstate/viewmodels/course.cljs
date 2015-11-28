(ns offcourse.appstate.viewmodels.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.appstate.viewmodels.helpers :as helpers]
            [offcourse.models.resource :as r]))

(schema/defrecord CourseViewmodel
    [level :- Keyword
     course :- Course
     resources :- schema/Any])

(defn ->viewmodel
  ([course] (->CourseViewmodel :course course nil))
  ([course resources] (->CourseViewmodel :course course resources)))

(defn check [viewmodel]
(schema/check CourseViewmodel viewmodel))

(defn highlight-checkpoint [viewmodel {:keys [checkpoint-id highlight]}]
  (assoc-in viewmodel [:course :checkpoints checkpoint-id :highlighted] highlight))

(defmulti highlight-label
  (fn [_ {:keys [label-type]}] label-type))

(defmethod highlight-label :tags
  [{:keys [course] :as viewmodel} {:keys [label-name highlight]}]
  (let [course (helpers/highlight-checkpoints-labels course label-name highlight)
        course (helpers/add-tag-labels-to-course course)]
    (assoc-in viewmodel [:course] course)))

(defn refresh [{:keys [level course]} {:keys [courses resources collections]}]
  (let [{:keys [course-id]} course
        course (get courses course-id)
        course (helpers/add-tag-labels-to-checkpoints course)
        course (helpers/add-tag-labels-to-course course)
        urls (into #{} (co/get-resource-urls course))
        resources (r/find-resources resources urls)]
    (->viewmodel course resources)))
