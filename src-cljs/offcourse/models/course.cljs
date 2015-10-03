(ns offcourse.models.course
  (:refer-clojure :exclude [update]))

(defn add-course [courses course]
  (conj courses course))

(defn find-course [courses id]
  (first (filter #(== id (:id %1)) courses)))

(defn remove-course [courses id]
  (remove #(== id (:id %1)) courses))

(defn update-checkpoints [course checkpoints]
  (assoc course :checkpoints checkpoints))

(defn update [path cb courses]
  (update-in courses path #(cb %1)))

(defn toggle-done [course-id checkpoint-id courses]
  (update [course-id :checkpoints checkpoint-id :completed] not courses))

(defn update-goal [id new-goal courses]
  (update [id :goal] (fn [_] new-goal) courses))

(defn update-task [course-id checkpoint-id new-task courses]
  (update [course-id :checkpoints checkpoint-id :task] (fn [_] new-task) courses))

(defn augment-checkpoint [[id checkpoint] resources]
  (let [resource (get resources id)]
    [id (merge checkpoint resource)]))

(defn augment-checkpoints [checkpoints resources]
  (->> checkpoints
       (map #(augment-checkpoint %1 resources))
       (into {})))

(defn augment [id resources courses]
  (update [id :checkpoints]
          (fn [checkpoints] (augment-checkpoints checkpoints resources))
          courses))
