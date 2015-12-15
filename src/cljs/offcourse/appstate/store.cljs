(ns offcourse.appstate.store
  (:require [offcourse.protocols.highlightable :as hl]
            [offcourse.protocols.validatable :refer [valid?]]
            [offcourse.protocols.refreshable :refer [refresh]]
            [offcourse.appstate.model :as model]
            [offcourse.appstate.viewmodel :as vm]
            [offcourse.appstate.responder :as res]))

(defonce appstate (atom (model/->appstate)))

(defn evaluate-proposal [proposal]
  (do
    (swap! appstate model/refresh-proposal proposal)
    (let [unknown-field (model/unknown-data (:proposed @appstate))
          valid? (valid? (:proposed @appstate))]
      (cond
        (and valid? unknown-field)
        (do
          #_(println "valid and missing field")
          (swap! appstate model/unlock-state)
          (res/respond-resource-required unknown-field)
          (res/respond-update @appstate))
        (= valid? true)
        (do
          #_(println "valid")
          (swap! appstate model/unlock-state)
          (res/respond-update @appstate))
        (not valid?)
        (do
          #_(println "invalid")
          (swap! appstate model/lock-state)
          (res/respond-resource-required unknown-field))))))

(defn update-current! [viewmodel]
  (swap! appstate model/refresh-current viewmodel)
  (res/respond-update @appstate))

(defn highlight-label [payload]
  (update-current! (hl/highlight-label (:current @appstate) payload)))

(defn highlight-checkpoint [payload]
  (update-current! (hl/highlight-checkpoint (:current @appstate) payload)))

(defn set-level [payload]
  (evaluate-proposal (vm/select payload)))

(defn refresh-viewmodel [{:keys [store]}]
  (evaluate-proposal (refresh (:proposed @appstate) store)))

(defn force-refresh []
  (res/respond-update @appstate))

(defn set-user [{:keys [user-id]}]
  (println "SET USER"))

(defn set-mode [payload]
  (println "SET MODE"))

(defn commit-data [payload]
  (println "COMMIT DATA"))
