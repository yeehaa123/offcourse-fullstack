(ns offcourse.models.course)

(defn add-course [courses course]
  (conj courses course))

(defn find-course [courses id]
  (first (filter #(== id (:id %1)) courses)))

(defn remove-course [courses id]
  (remove #(== id (:id %1)) courses))

(defn update-checkpoints [course checkpoints]
  (assoc course :checkpoints checkpoints))
