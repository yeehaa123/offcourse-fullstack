(ns offcourse.models.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]))

(schema/defrecord Checkpoint
    [checkpoint-id :- schema/Num
     task :- schema/Str
     completed :- schema/Bool
     resource-url :- schema/Str
     tags :- #{schema/Keyword}])

(def check (schema/checker Checkpoint))

(defn ->checkpoint
  ([checkpoint-id] (->Checkpoint checkpoint-id nil nil nil nil)))

(defn coerce-from-map [{:keys [tags] :as checkpoint}]
  (let [tags (->> tags
                  (map #(keyword %1))
                  (into #{}))
        checkpoint (assoc checkpoint :tags tags)]
    (map->Checkpoint checkpoint)))

(extend-type Checkpoint
  Validatable
  (check [course]
    (check course))
  (valid? [course]
    (if-not (check course) true false)))


(def CheckpointSchema Checkpoint)
