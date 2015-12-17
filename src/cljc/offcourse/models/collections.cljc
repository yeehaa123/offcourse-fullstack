(ns offcourse.models.collections
  (:require [offcourse.protocols.validatable :refer [Validatable]]
            [schema.core :as schema :include-macros true]))

(schema/defrecord Collections
    [curators :- #{schema/Keyword}
     flags :- #{schema/Keyword}
     tags :- #{schema/Keyword}])

(def check (schema/checker Collections))

(extend-type Collections
  Validatable
  (check [collection]
    (check collection)))

(defn coerce-from-map [collections]
  (map->Collections collections))
