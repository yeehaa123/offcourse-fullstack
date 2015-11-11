(ns offcourse.models.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.checkpoint :as cp :refer [map->Checkpoint Checkpoint]]
            [offcourse.fake-data.index :as fake-data]))

(schema/defrecord Course
    [course-id :- schema/Int
     curator :- schema/Str
     goal :- schema/Str
     checkpoints :- {schema/Int Checkpoint}])

(defn new
  ([curator] (fake-data/generate-course :new curator))
  ([course course-id] (assoc course :course-id course-id))
  ([course-id curator-id goal checkpoints]
   (Course. course-id curator-id goal checkpoints)))

(defn coerce-from-map [{:keys [checkpoints] :as course}]
  (let [checkpoints (->> checkpoints
                         (map (fn [[id checkpoint]]
                                [id (map->Checkpoint checkpoint)]))
                         (into {}))
        course      (assoc course :checkpoints checkpoints)]
    (map->Course course)))

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

(defn get-tags [{:keys [checkpoints]}]
  (reduce (fn [tag-acc [_ {:keys [tags]}]] (into tag-acc tags)) #{} checkpoints))

(defn has-tag? [course tag]
  (let [tags (get-tags course)]
    (contains? tags tag)))

(defn get-user [{:keys [curator] :as course}]
  curator)
