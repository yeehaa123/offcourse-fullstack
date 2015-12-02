(ns offcourse.models.name-collections
  (:require [offcourse.protocols.validatable :refer [Validatable]]
            [schema.core :as schema :include-macros true]))

(schema/defrecord NameCollections
    [users :- #{schema/Keyword}
     flags :- #{schema/Keyword}
     tags :- #{schema/Keyword}])

(def check (schema/checker NameCollections))

(extend-type NameCollections
  Validatable
  (check [collection]
    (check collection)))

(defn coerce-from-map [collections]
  (map->NameCollections collections))
