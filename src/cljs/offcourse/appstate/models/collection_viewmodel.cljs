(ns offcourse.appstate.models.collection-viewmodel
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.protocols.highlightable :refer [Highlightable]]
            [offcourse.protocols.taggable :as tb]
            [offcourse.protocols.refreshable :refer [Refreshable]]
            [offcourse.models.collection :as cl :refer [Collection]]
            [offcourse.models.label :as label :refer [LabelCollection]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.courses :as cs]
            [medley.core :as medley]))

(schema/defrecord CollectionViewmodel
    [level :- Keyword
     labels :- {Keyword LabelCollection}
     collection :- Collection
     courses :- {schema/Int Course}])

(def check (schema/checker CollectionViewmodel))

(defn ->viewmodel
  ([] (->CollectionViewmodel nil nil nil nil))
  ([level collection] (->CollectionViewmodel level nil collection nil))
  ([level labels collection courses] (->CollectionViewmodel level labels collection courses)))

(extend-type CollectionViewmodel
  Highlightable
  (highlight-checkpoint [viewmodel {:keys [course-id checkpoint-id highlight]}]
    (assoc-in viewmodel [:courses course-id :checkpoints checkpoint-id :highlighted] highlight))
  (highlight-label [viewmodel {:keys [label-name label-type highlight]}]
    (assoc-in viewmodel [:labels label-type label-name :highlighted?] highlight))
  Validatable
  (check [viewmodel]
    (check viewmodel))
  (valid? [viewmodel]
    (let [errors (check viewmodel)]
      (if errors false true)))
  Refreshable
  (refresh [{:keys [level collection]} {:keys [collections courses] :as store}]
    (let [{:keys [collection-name collection-type]} collection
          labels (label/collections->labelCollections collections collection-type collection-name)
          new-collection (get-in collections [collection-type collection-name])
          collection (or new-collection collection)
          courses (cs/find-courses courses (:collection-ids collection))
          courses (medley/map-vals #(assoc %1 :tags (tb/get-tags %1)) courses)]
      (->viewmodel level labels collection courses))))
