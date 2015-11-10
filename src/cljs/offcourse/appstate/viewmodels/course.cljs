(ns offcourse.appstate.viewmodels.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :refer [map->Course Course]]))

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
