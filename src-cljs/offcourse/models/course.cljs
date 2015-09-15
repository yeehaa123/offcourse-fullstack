(ns offcourse.models.course)

(defn find-course [courses id]
  (first (filter #(== id (:id %1)) courses)))
