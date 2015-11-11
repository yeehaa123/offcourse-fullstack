(ns offcourse.models.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.fake-data.index :as fake-data]))

(schema/defrecord Checkpoint
    [checkpoint-id :- schema/Num
     task :- schema/Str
     url :- schema/Str
     completed :- schema/Bool
     tags :- #{schema/Str}])

(defn new
  ([] (map->Checkpoint fake-data/checkpoint))
  ([checkpoint] (map->Checkpoint checkpoint))
  ([checkpoint checkpoint-id] (map->Checkpoint (assoc checkpoint :checkpoint-id checkpoint-id)))
  ([checkpoint-id task url completed]
   (Checkpoint. checkpoint-id task url completed (fake-data/set-of-buzzwords 0 5))))

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
