(ns offcourse.appstate.model
  (:require [schema.core :as schema :include-macros true]
            [offcourse.appstate.viewmodel :as vm]
            [offcourse.models.action :refer [respond]]
            [offcourse.models.collection :as cl :refer [Collection]]
            [offcourse.models.label :as label :refer [Label LabelCollection]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.courses :as cs]
            [schema.core :as schema]))

(schema/defrecord AppState
    [locked :- schema/Bool
     current :- {}
     proposed :- Viewmodel])

(defn ->appstate []
  (->AppState false (->viewmodel) (->viewmodel)))

(schema/defrecord Viewmodel
    [level :- Keyword
     labels :- {Keyword LabelCollection}
     collection :- Collection
     courses :- {schema/Int Course}])

(defn ->viewmodel
  ([] (->Viewmodel nil nil nil nil))
  ([level collection] (->Viewmodel level nil collection nil))
  ([level labels collection] (->Viewmodel level labels collection nil))
  ([level labels collection courses] (->Viewmodel level labels collection courses)))

;; DON'T BELONG HERE

(defn collections->labelCollection [collections]
  (->> collections
       (map (fn [[collection-name _]]
              [collection-name (label/new-label collection-name)]))
       (into {})))

(defn collections->labelCollections [all-collections]
  (->> all-collections
       (map (fn [[category collections]]
              [category (collections->labelCollection collections)]))
       (into {})))

(defn set-proposal [{:keys [level collection-type collection-name] :as payload} appstate]
  (let [collection-name (or collection-name :featured)
        collection (cl/->collection collection-type collection-name)]
    (assoc-in appstate [:proposed] (->viewmodel level collection))))

(defn unknown-data [viewmodel]
  (let [errors  (schema/check Viewmodel viewmodel)
        unknown-fields (keys errors)
        unknown-field (first unknown-fields)]
    (println "ERROR:" errors)
    (when unknown-field
      [unknown-field viewmodel])))

(defn lock-state [appstate]
  (assoc-in appstate [:locked] true))

(defn unlock-state [appstate]
  (assoc-in appstate [:locked] false))

(defn select-courses [courses ids tag-labels]
  (let [courses (cs/find-courses courses ids)]
    (if-not (empty? courses)
      (cs/add-tags courses tag-labels)
      :unknown)))

(defn refresh [{:keys [collections courses] :as store} {:keys [proposed] :as appstate}]
  (let [{:keys [level collection]} proposed
        {:keys [collection-name collection-type]} collection
        labels (collections->labelCollections collections)
        new-collection (cl/find-collection collections collection-type collection-name)
        collection (or new-collection collection)
        courses (select-courses courses (:collection-ids collection) (:tags labels))]
    (assoc-in appstate [:proposed] (->viewmodel level labels collection courses))))
