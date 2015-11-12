(ns offcourse.appstate.store
  (:require [offcourse.appstate.model :as model]
            [offcourse.appstate.responder :as res]
            [offcourse.models.course :as co]))

(def appstate (atom (model/new-appstate)))

(defn update-and-maybe-respond! [f]
  (do
    (swap! appstate #(f %1))
    (let [unknown-field (model/unknown-data @appstate)]
      (if unknown-field
        (res/respond-resource-required unknown-field)
        (res/respond-update @appstate)))))

(defn update-and-respond! [f]
  (do
    (swap! appstate #(f %1))
    (res/respond-update @appstate)))

(defn set-mode [{mode :mode}]
  (update-and-respond! (partial model/set-mode mode)))

(defn toggle-mode []
  (update-and-respond! model/toggle-mode))

(defn toggle-highlight [{:keys [course-id checkpoint-id highlight]}]
  (if course-id
    (update-and-respond! (partial model/toggle-highlight course-id checkpoint-id highlight))
    (update-and-respond! (partial model/toggle-highlight checkpoint-id highlight))))

(defn set-user [{:keys [user-id]}]
  (update-and-respond! (partial model/set-user-id user-id)))

(defn set-level [level]
  (update-and-maybe-respond! (partial model/set-level level)))

(defn refresh [{:keys [store] :as payload}]
  (update-and-maybe-respond! (partial model/refresh store)))

(defn commit-data [{:keys [course-id checkpoint-id] :as payload}]
  (let [course (:course (:viewmodel @appstate))
        checkpoint (co/find-checkpoint course checkpoint-id)]
    (res/respond-commit payload course-id checkpoint)))

(defn force-refresh []
  (res/respond-update appstate))
