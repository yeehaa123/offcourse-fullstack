(ns offcourse.appstate.viewmodels.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [map->Course Course]]
            [offcourse.models.resource :as r]))

(schema/defrecord CourseViewmodel
    [level :- Keyword
     course :- Course
     resources :- schema/Any])

(defn ->viewmodel
  ([course] (->CourseViewmodel :course course nil))
  ([course resources] (->CourseViewmodel :course course resources)))

(defn check[viewmodel]
  (schema/check CourseViewmodel viewmodel))

(defn highlight-checkpoint [viewmodel checkpoint-id highlight]
  (update-in viewmodel [:course]
             #(co/highlight %1 checkpoint-id highlight)))

(defn refresh [{:keys [level course]} {:keys [courses resources collections]}]
  (let [{:keys [course-id]} course
        course (get courses course-id)
        course (co/add-tags course #{})
        urls (into #{} (co/get-resource-urls course))
        resources (r/find-resources resources urls)]
    (->viewmodel course resources)))
