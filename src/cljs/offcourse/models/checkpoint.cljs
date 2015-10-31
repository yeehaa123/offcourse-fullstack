(ns offcourse.models.checkpoint
  (:require [offcourse.models.fake-data :as fake-data]))

(defrecord Checkpoint [id task url completed])

(defn new
  ([] (map->Checkpoint fake-data/checkpoint))
  ([checkpoint] (map->Checkpoint checkpoint))
  ([checkpoint checkpoint-id] (map->Checkpoint (assoc checkpoint :id checkpoint-id)))
  ([id task url completed] (Checkpoint. id task url completed)))

(defn toggle-done [checkpoint]
  (update-in checkpoint [:completed] not))

(defn add-resource [checkpoint resource]
  (assoc checkpoint
         :url (:url resource)
         :resource resource))
