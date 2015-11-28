(ns offcourse.models.courses
  (:require [offcourse.models.course :as co]))

(defn update-course [collection course]
  (assoc-in collection [(:course-id course)] course))

(defn update-courses [collection courses]
  (reduce update-course collection courses))

(defn add-checkpoint [collection course-id checkpoint]
  (update-in collection [course-id] #(co/add-checkpoint %1 checkpoint)))

(defn toggle-done [collection course-id checkpoint-id]
  (update-in collection [course-id] #(co/toggle-done %1 checkpoint-id)))

(defn find-course [collection course-id]
  (get collection course-id))

(defn highlight [collection course-id checkpoint-id highlight]
  (update-in collection [course-id :checkpoints checkpoint-id :highlighted] (fn [] highlight)))

(defn find-courses [collection course-ids]
  (->> course-ids
       (keep (fn [id] [id (get collection id)]))
       (into {})))
