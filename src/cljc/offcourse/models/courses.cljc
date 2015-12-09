(ns offcourse.models.courses
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.models.course :as co :refer [Course]]))

(def CoursesSchema
  [Course])

(def check (schema/checker CoursesSchema))

(defn ->courses [courses]
  (specify! courses
    Validatable
    (check [courses]
      (check courses))))

(defn find-courses [collection course-ids]
  (->> course-ids
       (keep (fn [id] [id (get collection id)]))
       (into {})))
