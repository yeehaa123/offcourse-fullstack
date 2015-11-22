(ns offcourse.appstate.viewmodels.collection
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.collection :as cl :refer [Collection Collections]]
            [offcourse.models.label :as label :refer [LabelCollection]]
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

(def blank-label-collections
  (LabelCollections. :unknown :unknown :unknown))

(def blank-vm
  (CollectionViewmodel. :collection blank-label-collections :unknown :unknown))

(defn- select-collection-name [name type names]
  (if-not name [(second names) :flags] [name type]))

(defn- update-collection [collection-name collection-type collection-names collections]
  (let [[collection-name collection-type] (select-collection-name collection-name collection-type collection-names)
        collection-ids (get-in collections [collection-type collection-name :collection-ids])]
    (cl/->collection collection-type collection-name collection-ids)))

(defn- create-label-collections [selection collection-names tags users]
  (let [flag-labels (label/->collection collection-names selection)
        tag-labels (label/->collection (map keyword tags) selection)
        user-labels (label/->collection (map keyword users) selection)]
    (LabelCollections. flag-labels tag-labels user-labels)))

(defn- update-courses [courses ids tag-labels]
  (let [courses (cs/find-courses courses ids)]
    (if-not (empty?  courses)
      (cs/add-tags courses tag-labels)
      :unknown)))

;; PUBLIC API

(defn ->collection
  ([] blank-vm)
  ([collection] (CollectionViewmodel. :collection blank-label-collections collection :unknown))
  ([collection courses labels]
   (CollectionViewmodel. :collection labels (cl/map->Collection collection) courses)))

(defn highlight-checkpoint [viewmodel course-id checkpoint-id highlight]
  (update-in viewmodel [:courses] #(cs/highlight %1 course-id checkpoint-id highlight)))

(defn check[viewmodel]
  (schema/check CollectionViewmodel viewmodel))

(defn refresh [{:keys [collection-name collection-type]} {:keys [collections tags users courses]}]
  (let [collection-names (keys (get-in collections [:flags]))
        {:keys [collection-name collection-ids] :as collection} (update-collection
                                                                 collection-name collection-type collection-names collections)
        labels (create-label-collections collection-name collection-names tags users)
        courses (update-courses courses collection-ids (:tags labels))]
    (->collection collection courses labels)))
