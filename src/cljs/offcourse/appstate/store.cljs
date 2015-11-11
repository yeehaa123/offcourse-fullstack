(ns offcourse.appstate.store
  (:require [offcourse.appstate.model :as model]
            [offcourse.appstate.viewmodel :as vm]
            [offcourse.appstate.responder :as res]
            [offcourse.models.course :as co]))

(def appstate (atom (model/new-appstate)))

(defn update? []
  (let [unknown-field (model/unknown-data @appstate)]
    (if unknown-field
      (res/respond-resource-required unknown-field)
      (res/respond-update @appstate))))

(defn update! []
  (res/respond-update @appstate))

(defn set-mode [{mode :mode}]
  (do
    (swap! appstate #(model/set-mode %1 mode))
    (update!)))

(defn toggle-mode []
  (do
    (swap! appstate #(model/toggle-mode %1))
    (update!)))

(defn set-user [{:keys [user-id]}]
  (do
    (swap! appstate #(model/set-user-id %1 user-id))
    (update!)))

(defn set-level [payload]
  (do
    (swap! appstate #(model/set-level %1 payload))
    (update?)))

(defn refresh [{:keys [store] :as payload}]
  (do
    (swap! appstate #(model/refresh %1 store))
    (update?)))

(defn toggle-highlight [payload]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (do
                    (swap! appstate #(model/highlight-collection %1 payload))
                    (res/respond-update @appstate))
      :course (do
                (swap! appstate #(model/highlight-course %1 payload))
                (res/respond-update @appstate)))))

(defn commit-data [{:keys [course-id checkpoint-id] :as payload}]
  (let [course (:course (:viewmodel @appstate))
        checkpoint (co/find-checkpoint course checkpoint-id)]
    (res/respond-commit payload course-id checkpoint)))

(defn force-refresh []
  (res/respond-update appstate))
