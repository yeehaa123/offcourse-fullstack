(ns offcourse.appstate.collection-viewmodel
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.collection
             :refer [map->Collection Collection Collections]]))

(schema/defrecord CollectionViewmodel
    [level :- Keyword
     collection-names :- #{schema/Keyword}
     collection :- Collection
     courses :- {schema/Int schema/Any}])

(defn new-collection
  ([] (map->CollectionViewmodel {:level :collection}))
  ([collection-names collection courses]
   (map->CollectionViewmodel {:level :collection
                              :collection-names collection-names
                              :collection (map->Collection collection)
                              :courses courses})))

(defn check[viewmodel]
  (schema/check CollectionViewmodel viewmodel))
