(ns offcourse.models.course)

(defn find [courses id]
  (first (filter #(= (:id %1) id) courses)))
