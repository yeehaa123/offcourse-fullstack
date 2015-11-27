(ns offcourse.appstate.viewmodels.collection
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.collection :as cl :refer [Collection Collections]]
            [offcourse.models.label :as label :refer [LabelCollection]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.courses :as cs]))

(schema/defrecord CollectionViewmodel
    [level :- Keyword
     labels :- {Keyword LabelCollection}
     collection :- Collection
     courses :- {schema/Int Course}])

(defn ->viewmodel
  ([] (->CollectionViewmodel nil nil nil nil))
  ([level collection] (->CollectionViewmodel level nil collection nil))
  ([level labels collection courses] (->CollectionViewmodel level labels collection courses)))

(defn select-courses [courses ids tag-labels]
  (let [courses (cs/find-courses courses ids)]
    (if-not (empty? courses)
      (cs/add-tags courses tag-labels)
      :unknown)))

(defn highlight-checkpoint [viewmodel {:keys [course-id checkpoint-id highlight]}]
  (assoc-in viewmodel [:courses course-id :checkpoints checkpoint-id :highlighted] highlight))

(defn check [viewmodel]
  (schema/check CollectionViewmodel viewmodel))

(defn refresh [{:keys [level collection]} {:keys [collections courses] :as store}]
  (let [{:keys [collection-name collection-type]} collection
        labels (label/collections->labelCollections collections)
        new-collection (cl/find-collection collections collection-type collection-name)
        collection (or new-collection collection)
        courses (select-courses courses (:collection-ids collection) (:tags labels))]
    (->viewmodel level labels collection courses)))
