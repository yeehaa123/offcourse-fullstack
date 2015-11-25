(ns offcourse.appstate.store
  (:require [offcourse.appstate.model :as model]
            [offcourse.appstate.responder :as res]
            [offcourse.models.course :as co]))

(defonce appstate (atom (model/->appstate)))

(defn update-and-maybe-respond! [f]
  (do
    (swap! appstate #(f %1))
    (let [unknown-field (model/unknown-data (:proposed @appstate))]
      (if unknown-field
        (do
          (swap! appstate model/lock-state)
          (res/respond-resource-required unknown-field))
        (do
          (swap! appstate model/unlock-state)
          (res/respond-update @appstate))))))

(defn update-and-respond! [f]
  (do
    (swap! appstate #(f %1))
    (res/respond-update @appstate)))

(defn set-mode [{mode :mode}]
  (if mode
    (update-and-respond! (partial model/set-mode mode))
    (update-and-respond! model/toggle-mode)))

(defn highlight-label [{:keys [label-name label-type highlight]}]
  (update-and-maybe-respond! (partial model/highlight-label label-name label-type highlight)))

(defn highlight-checkpoint [{:keys [course-id checkpoint-id highlight]}]
  (if course-id
    (update-and-maybe-respond! (partial model/highlight-checkpoint course-id checkpoint-id highlight))
    (update-and-maybe-respond! (partial model/highlight-checkpoint checkpoint-id highlight))))

(defn set-user [{:keys [user-id]}]
  (update-and-respond! (partial model/set-user-id user-id)))

(defn set-level [payload]
  (update-and-maybe-respond! (partial model/set-proposal payload)))

(defn refresh [{:keys [store]}]
  (update-and-maybe-respond! (partial model/refresh store)))

(defn commit-data [{:keys [course-id checkpoint-id] :as payload}]
  (let [course (:course (:viewmodel @appstate))
        checkpoint (co/find-checkpoint course checkpoint-id)]
    (res/respond-commit payload course-id checkpoint)))

(defn force-refresh []
  (res/respond-update appstate))
