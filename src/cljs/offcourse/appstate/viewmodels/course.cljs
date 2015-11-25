(ns offcourse.appstate.viewmodels.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [map->Course Course]]
            [offcourse.models.resource :as r]))

(schema/defrecord CourseViewmodel
    [level :- Keyword
     course :- Course
     resources :- schema/Any])

(defn new-course
  ([] (map->CourseViewmodel {:level :course
                             :course :unknown}))
  ([course]
   (map->CourseViewmodel {:level :course
                          :course course}))
   ([course resources]
    (map->CourseViewmodel {:level :course
                           :course course
                           :resources resources})))

(defn check[viewmodel]
  (schema/check CourseViewmodel viewmodel))

(defn highlight-checkpoint [viewmodel checkpoint-id highlight]
  (update-in viewmodel [:course]
             #(co/highlight %1 checkpoint-id highlight)))

(defn refresh [{:keys [course-id]} {:keys [courses resources collections] :as store}]
  (let [course (get courses course-id)
        course (co/add-tags course #{})
        urls (into #{} (co/get-resource-urls course))
        resources (r/find-resources resources urls)]
    (new-course course resources)))
