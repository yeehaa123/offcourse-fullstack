(ns offcourse.models.course)

(defn add-checkpoint [course checkpoint]
  (assoc-in course [:checkpoints :new] checkpoint))
