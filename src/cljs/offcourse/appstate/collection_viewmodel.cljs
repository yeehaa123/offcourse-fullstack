(ns offcourse.appstate.collection-viewmodel
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.collection
             :refer [map->Collection Collection Collections]]))

(schema/defrecord CollectionViewmodel
    [level :- Keyword
     collections :- Collections
     collection :- Collection
     courses :- {schema/Int schema/Any}
     load-order :- [Keyword]])

(defn new-collection
  ([] (map->CollectionViewmodel {:level :collection
                                 :load-order [:collections :courses]}))
  ([collections collection courses]
   (map->CollectionViewmodel {:level :collection
                              :collections collections
                              :collection (map->Collection collection)
                              :courses courses
                              :load-order [:collections :courses]})))

(defn check[viewmodel]
  (schema/check CollectionViewmodel viewmodel))
