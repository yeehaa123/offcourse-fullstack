(ns offcourse.appstate.viewmodels.collection
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.collection
             :refer [map->Collection Collection Collections]]
            [offcourse.models.label :as label :refer [new LabelCollection]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.courses :as cs]))

(schema/defrecord CollectionViewmodel
    [level :- Keyword
     collection-names :- LabelCollection
     tag-names :- LabelCollection
     user-names :- LabelCollection
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

(defn labels
  ([names] (labels names nil))
  ([names selected]
   (->> names
        (map (fn [name] [name (label/new name selected)]))
        (into {}))))

(defn refresh [{:keys [collection]} {:keys [collections tags users courses]}]
  (let [{:keys [collection-name collection-type]} collection
        collection-names (labels (keys (:named-collection collections)))
        collection-name (if (= collection-name :unknown)
                          (second (keys collection-names))
                          collection-name)
        tag-names (if tags (labels (map keyword tags) collection-name) :unknown)
        user-names (if users (labels (map keyword users)) :unknown)
        {:keys [collection-ids]} (get-in collections [collection-type collection-name])
        collection (assoc collection :collection-ids collection-ids)
        found-courses (cs/find-courses courses collection-ids)
        courses (if (not-any? nil? (vals found-courses))
                  (cs/add-tags found-courses tag-names)
                  :unknown)]
    (new-collection collection-names tag-names user-names collection courses)))
