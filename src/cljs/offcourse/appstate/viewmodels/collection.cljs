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
  ([] (map->CollectionViewmodel {:level :collection
                                 :collection :unknown}))
  ([collection] (map->CollectionViewmodel {:level :collection
                                 :collection collection}))
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

(defn refresh [{:keys [collection]} {:keys [collections tags users courses]}]
  (let [{:keys [collection-name collection-type]} collection
        collection-names (into #{} (keys (:named-collection collections)))
        tag-names (if tags (into #{} tags) :unknown)
        user-names (if users (into #{} users) :unknown)
        collection-name (if (= collection-name :unknown) (second collection-names) collection-name)
        {:keys [collection-ids]} (get-in collections [collection-type collection-name])
        collection (assoc collection :collection-ids collection-ids)
        found-courses (cs/find-courses courses collection-ids)
        courses (if (not-any? nil? (vals found-courses))
                  found-courses
                  :unknown)]
    (new-collection collection-names tag-names user-names collection courses)))
