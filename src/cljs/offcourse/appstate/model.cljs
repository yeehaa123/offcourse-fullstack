(ns offcourse.appstate.model
  (:require [schema.core :as schema :include-macros true]
            [offcourse.appstate.viewmodels.collection :refer [CollectionViewmodel]]
            [offcourse.appstate.viewmodel :as vm]
            [offcourse.models.action :refer [respond]]
            [offcourse.models.collection :as cl :refer [Collection]]
            [offcourse.models.label :as label :refer [Label LabelCollection]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.courses :as cs]))

(schema/defrecord AppState
    [locked :- schema/Bool
     current :- {}
     proposed :- CollectionViewmodel])

(defn ->appstate []
  (->AppState false nil nil))

(defn refresh-current [appstate viewmodel]
  (assoc-in appstate [:current] viewmodel))

(defn refresh-proposal [appstate proposal]
  (assoc-in appstate [:proposed] proposal))

(defn unknown-data [viewmodel]
  (let [errors (vm/check viewmodel)
        unknown-fields (keys errors)
        unknown-field (first unknown-fields)]
    (println "ERROR:" errors)
    (when unknown-field
      [unknown-field viewmodel])))

(defn lock-state [appstate]
  (assoc-in appstate [:locked] true))

(defn unlock-state [{:keys [proposed] :as appstate}]
  (assoc appstate :locked false
                  :current proposed))
