(ns offcourse.appstate.store
  (:require [offcourse.appstate.model :as model]
            [offcourse.appstate.viewmodel :as vm]
            [offcourse.appstate.responder :as res]
            [offcourse.models.course :as co]))

(defonce appstate (atom (model/->appstate)))

(defn evaluate-proposal [proposal]
  (do
    (swap! appstate model/refresh-proposal proposal)
    (let [unknown-field (model/unknown-data (:proposed @appstate))]
      (if unknown-field
        (do
          (swap! appstate model/lock-state)
          (res/respond-resource-required unknown-field))
        (do
          (swap! appstate model/unlock-state)
          (res/respond-update @appstate))))))

(defn update-current! [viewmodel]
  (swap! appstate model/refresh-current viewmodel)
  (res/respond-update @appstate))

(defn highlight-label [payload]
  (update-current! (vm/highlight-label (:current @appstate) payload)))

(defn highlight-checkpoint [payload]
  (update-current! (vm/highlight-checkpoint (:current @appstate) payload)))

(defn set-level [payload]
  (evaluate-proposal (vm/select payload)))

(defn refresh-viewmodel [{:keys [store]}]
  (evaluate-proposal (vm/refresh (:proposed @appstate) store)))

(defn force-refresh []
  (res/respond-update @appstate))

(defn set-user [{:keys [user-id]}]
  (println "SET USER"))

(defn set-mode [payload]
  (println "SET MODE"))

(defn commit-data [payload]
  (println "COMMIT DATA"))
