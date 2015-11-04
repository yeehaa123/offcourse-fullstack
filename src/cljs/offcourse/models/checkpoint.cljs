(ns offcourse.models.checkpoint
  (:require [offcourse.models.fake-data :as fake-data]))

(defrecord Checkpoint [checkpoint-id task url completed])

(defn new
  ([] (map->Checkpoint fake-data/checkpoint))
  ([checkpoint] (map->Checkpoint checkpoint))
  ([checkpoint checkpoint-id] (map->Checkpoint (assoc checkpoint :checkpoint-id checkpoint-id)))
  ([checkpoint-id task url completed] (Checkpoint. checkpoint-id task url completed)))

(defn toggle-done [checkpoint]
  (update-in checkpoint [:completed] not))

(defn add-resource [checkpoint resource]
  (assoc checkpoint
         :url (:url resource)
         :resource resource))

(defn add-resources [checkpoints resources]
  (map (fn [[checkpoint-id checkpoint]]
         (let [url (:url checkpoint)
               resource (get resources url)]
           [checkpoint-id (assoc checkpoint :resource resource)]))
       checkpoints))
