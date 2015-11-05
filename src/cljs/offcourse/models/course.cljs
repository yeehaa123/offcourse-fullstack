(ns offcourse.models.course
  (:require [offcourse.models.checkpoint :as cp]
            [offcourse.fake-data.index :as fake-data]))

(defrecord Course [course-id curator-id goal checkpoints date-created date-modified])

(defn new
  ([curator] (fake-data/generate-course :new curator))
  ([course course-id] (assoc course :course-id course-id))
  ([course-id curator-id goal checkpoints]
   (let [now (.getTime (js/Date.))]
     (Course. course-id curator-id goal checkpoints now now))))

(defn add-temp-checkpoint [course checkpoint]
  (assoc-in course [:checkpoints :new] checkpoint))

(defn next-checkpoint-id [course]
  (inc (apply max (keys (:checkpoints course)))))

(defn add-checkpoint [course checkpoint]
  (let [checkpoint (cp/new checkpoint (next-checkpoint-id course))]
    (assoc-in course [:checkpoints (:id checkpoint)] checkpoint)))

(defn find-checkpoint [course checkpoint-id]
  (get (:checkpoints course) checkpoint-id))

(defn get-resource-urls [course]
  (->> course
       :checkpoints
       vals
       (map :url)
       (into #{})))

(defn needs-resources? [course]
  (not (every? :resource (vals (:checkpoints course)))))

(defn toggle-done [course checkpoint-id]
  (update-in course [:checkpoints checkpoint-id] #(cp/toggle-done %1)))

(defn highlight [course checkpoint-id highlight]
  (update-in course [:checkpoints checkpoint-id :highlighted] (fn [] highlight)))
