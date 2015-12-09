(ns offcourse.models.collection
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]))

(schema/defrecord Collection
    [collection-type :- schema/Keyword
     collection-name :- schema/Keyword
     collection-ids :- #{schema/Num}])

(def check (schema/checker Collection))

(extend-type Collection
  Validatable
  (check [collection]
    (check collection)))

(defn ->collection
  ([collection-type collection-name]
   (Collection. collection-type collection-name nil))
  ([collection-type collection-name collection-ids]
   (Collection. collection-type collection-name collection-ids)))

(defn coerce-from-map [{:keys [collection-type collection-name collection-ids] :as collection}]
  (->collection (keyword collection-type) (keyword collection-name) collection-ids))
