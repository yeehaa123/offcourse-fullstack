(ns offcourse.models.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.fake-data.index :as fake-data]))

(schema/defrecord Checkpoint
    [checkpoint-id :- schema/Num
     task :- schema/Str
     resource-url :- schema/Str
     completed :- schema/Bool
     tags :- #{schema/Keyword}])

(def check (schema/checker Checkpoint))

(defn ->checkpoint
  ([checkpoint-id] (->Checkpoint checkpoint-id nil nil nil nil)))

(extend-type Checkpoint
  Validatable
  (check [course]
    (check course))
  (valid? [course]
    (if-not (check course) true false)))

(defn coerce-from-map [{:keys [tags] :as checkpoint}]
  (let [tags (->> tags
                  (map #(keyword %1))
                  (into #{}))
        checkpoint (assoc checkpoint :tags tags)]
    (map->Checkpoint checkpoint)))
