(ns offcourse.appstate.viewmodels.collection
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.collection
             :as cl
             :refer [map->Collection Collection Collections]]
            [offcourse.models.label :as label :refer [from-set LabelCollection]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.courses :as cs]))

(schema/defrecord LabelCollections
  [flags :- LabelCollection
   tags  :- LabelCollection
   users :- LabelCollection])

(schema/defrecord CollectionViewmodel
    [level :- Keyword
     labels :- LabelCollections
     collection :- Collection
     courses :- {schema/Int Course}])

(def blank-lc
  (LabelCollections. :unknown :unknown :unknown))

(def blank-vm
  (CollectionViewmodel. :collection blank-lc :unknown :unknown))

(defn new-collection
  ([] (map->CollectionViewmodel blank-vm))
  ([collection] (map->CollectionViewmodel
                 (CollectionViewmodel. :collection blank-lc collection :unknown)))
  ([labels collection courses]
   (map->CollectionViewmodel {:level :collection
                              :labels labels
                              :collection (map->Collection collection)
                              :courses courses})))

(defn check[viewmodel]
  (schema/check CollectionViewmodel viewmodel))

(defn highlight-checkpoint [viewmodel course-id checkpoint-id highlight]
  (update-in viewmodel [:courses]
             #(cs/highlight %1 course-id checkpoint-id highlight)))

(defn select-collection-name [name type names]
  (if-not name
    [(second names) :flags]
    [name type]))

(defn update-collection [collection-name collection-type collection-names collections]
  (let [[collection-name collection-type] (select-collection-name collection-name collection-type collection-names)
        collection-ids (get-in collections [collection-type collection-name :collection-ids])]
    (cl/->collection collection-type collection-name collection-ids)))

(defn create-label-collections [selection collection-names tags users]
  (let [flag-labels (if collection-names (label/from-set collection-names selection) :unknown)
        tag-labels (if tags (label/from-set (map keyword tags) selection) :unknown)
        user-labels (if users (label/from-set (map keyword users) selection) :unknown)]
    (LabelCollections. flag-labels tag-labels user-labels)))

(defn update-courses [courses ids tag-labels]
  (let [courses (cs/find-courses courses ids)]
    (if (not-any? nil? (vals courses))
      (cs/add-tags courses tag-labels)
      :unknown)))

(defn refresh [{:keys [collection-name collection-type]} {:keys [collections tags users courses]}]
  (let [collection-names (keys (get-in collections [:flags]))
        {:keys [collection-name collection-ids] :as collection} (update-collection collection-name collection-type collection-names collections)
        labels (create-label-collections collection-name collection-names tags users)
        courses (update-courses courses collection-ids (:tags labels))]
    (println collection-name)
    (println collection-ids)
    (new-collection labels collection courses)))

