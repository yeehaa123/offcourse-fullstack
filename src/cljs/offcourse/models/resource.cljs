(ns offcourse.models.resource
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [medley.core :as medley]))

(schema/defrecord Resource
    [resource-url  :- schema/Str
     resource-type :- schema/Keyword
     title         :- schema/Str
     authors       :- #{schema/Str}
     tags          :- #{schema/Keyword}
     content       :- schema/Str])

(def check (schema/checker Resource))

(extend-type Resource
  Validatable
  (check [collection]
    (check collection)))

(defn ->resource [url]
  (->Resource url nil nil nil nil nil))

(defn coerce-from-map [{:keys [resource-type authors tags] :as resource}]
  (map->Resource (assoc resource :authors (into #{} authors)
                                 :resource-type (keyword resource-type)
                                 :tags (into #{} (map keyword tags)))))
