(ns offcourse.models.courses
  (:require [offcourse.models.course :as co]))

(defn find-courses [collection course-ids]
  (->> course-ids
       (keep (fn [id] [id (get collection id)]))
       (into {})))
