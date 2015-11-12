(ns offcourse.appstate.viewmodels.collection
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.collection
             :refer [map->Collection Collection Collections]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.courses :as cs]))

(schema/defrecord CollectionViewmodel
    [level :- Keyword
     collection-names :- #{schema/Keyword}
     tag-names :- #{schema/Str}
     user-names :- #{schema/Str}
     collection :- Collection
     courses :- {schema/Int Course}])

(defn new-collection
  ([] (map->CollectionViewmodel {:level :collection}))
  ([collection-names tag-names user-names collection courses]
   (map->CollectionViewmodel {:level :collection
                              :tag-names tag-names
                              :user-names user-names
                              :collection-names collection-names
                              :collection (map->Collection collection)
                              :courses courses})))

(defn check[viewmodel]
  (schema/check CollectionViewmodel viewmodel))

(defn highlight-checkpoint [viewmodel course-id checkpoint-id highlight]
  (update-in viewmodel [:courses]
             #(cs/highlight %1 course-id checkpoint-id highlight)))
