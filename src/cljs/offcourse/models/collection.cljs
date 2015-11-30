(ns offcourse.models.collection
  (:require [offcourse.models.course :as co]
            [schema.core :as schema :include-macros true]
            [clojure.set :as set]))

(schema/defrecord Collection
    [collection-type :- schema/Keyword
     collection-name :- schema/Keyword
     collection-ids :- #{schema/Num}])

(defn ->collection
  ([collection-type collection-name]
   (Collection. collection-type collection-name nil))
  ([collection-type collection-name collection-ids]
   (Collection. collection-type collection-name collection-ids)))
