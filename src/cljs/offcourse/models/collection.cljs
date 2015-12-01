(ns offcourse.models.collection
  (:require [offcourse.models.course :as co]
            [schema.core :as schema :include-macros true]
            [clojure.set :as set]))

(schema/defrecord Collection
    [collection-type :- schema/Keyword
     collection-name :- schema/Keyword
     collection-ids :- #{schema/Num}])

(def Collections
  {schema/Keyword #{schema/Keyword}})

(defn ->collection
  ([collection-type collection-name]
   (Collection. collection-type collection-name nil))
  ([collection-type collection-name collection-ids]
   (Collection. collection-type collection-name collection-ids)))

(defn coerce-from-map [{:keys [collection-type collection-name collection-ids] :as collection}]
  (->collection (keyword collection-type) (keyword collection-name) collection-ids))

(defn check [collection]
  (schema/check Collection collection))
