(ns offcourse.appstate.store
  (:require [offcourse.appstate.model :as model]
            [offcourse.appstate.viewmodel :as vm]
            [offcourse.appstate.responder :as res]
            [offcourse.models.course :as co]))

(defonce appstate (atom (model/->appstate)))

(defn update-and-maybe-respond! [proposal]
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

(defn highlight-label [{:keys [label-name label-type highlight]}]
  (println "HIGHLIGHT LB"))

(defn highlight-checkpoint [{:keys [course-id checkpoint-id highlight]}]
  (println "HIGHLIGHT CP"))

(defn set-user [{:keys [user-id]}]
  (println "SET USER"))

(defn set-level [payload]
  (update-and-maybe-respond! (vm/select payload)))

(defn refresh-viewmodel [{:keys [store]}]
  (update-and-maybe-respond! (vm/refresh (:proposed @appstate) store)))

(defn force-refresh []
  (res/respond-update appstate))
