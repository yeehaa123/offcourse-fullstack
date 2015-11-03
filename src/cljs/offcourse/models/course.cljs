(ns offcourse.models.course
  (:require [offcourse.models.checkpoint :as cp]
            [offcourse.models.fake-data :as fake-data]))

(defrecord Course [id curator-id goal checkpoints date-created date-modified])

(defn index-checkpoint [index {:keys [task completed]}]
  [index (cp/new index task (rand-nth fake-data/urls) completed)])

(defn index-checkpoints [checkpoints]
  (->> checkpoints
       (map-indexed #(index-checkpoint %1 %2))
       (into {})))

(defn generate-fake-course []
  (-> fake-data/courses
      rand-nth
      (assoc :id :new)
      (assoc :curator (rand-nth ["yeehaa" "greg"]))
      (update-in [:checkpoints] index-checkpoints)))

(defn new
  ([] (generate-fake-course))
  ([course id] (assoc course :id id))
  ([id curator-id goal checkpoints]
   (let [now (.getTime (js/Date.))]
     (Course. id curator-id goal checkpoints now now))))

(defn add-temp-checkpoint [course checkpoint]
  (assoc-in course [:checkpoints :new] checkpoint))

(defn next-checkpoint-id [course]
  (inc (apply max (keys (:checkpoints course)))))

(defn add-checkpoint [course checkpoint]
  (let [checkpoint (cp/new checkpoint (next-checkpoint-id course))]
    (assoc-in course [:checkpoints (:id checkpoint)] checkpoint)))

(defn find-checkpoint [course checkpoint-id]
  (get (:checkpoints course) checkpoint-id))

(defn needs-resources? [course]
  (not (every? :resource (vals (:checkpoints course)))))

(defn toggle-done [course checkpoint-id]
  (update-in course [:checkpoints checkpoint-id] #(cp/toggle-done %1)))

(defn augment-checkpoint [course checkpoint-id resource]
  (update-in course [:checkpoints checkpoint-id] #(cp/add-resource %1 resource)))

(defn augment-checkpoints [course resources]
  (update-in course [:checkpoints] #(into {} (cp/add-resources %1 resources))))

(defn highlight [course checkpoint-id highlight]
  (update-in course [:checkpoints checkpoint-id :highlighted] (fn [] highlight)))
