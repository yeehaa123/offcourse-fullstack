(ns offcourse.appstate.model
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [check unknown-field]]
            [offcourse.appstate.viewmodels.collection :refer [CollectionViewmodel]]))

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
  (let [errors (check viewmodel)
        unknown-field (unknown-field errors)]
    (println "ERROR:" errors)
    (when unknown-field
      [unknown-field viewmodel])))

(defn lock-state [appstate]
  (assoc-in appstate [:locked] true))

(defn unlock-state [{:keys [proposed] :as appstate}]
  (assoc appstate :locked false
                  :current proposed))
