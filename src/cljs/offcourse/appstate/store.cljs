(ns offcourse.appstate.store
  (:require [offcourse.appstate.model :as model]
            [offcourse.appstate.viewmodel :as vm]
            [offcourse.appstate.viewmodels.collection :as cl-vm]
            [offcourse.appstate.viewmodels.course :as co-vm]
            [offcourse.models.course :as co]
            [offcourse.models.action :refer [respond]]
            [cljs.core.match :refer-macros [match]]))

(def counter (atom 0))
(def appstate (atom (model/new-appstate)))

(defn respond-resource-required [field {:keys [course collection]}]
  (swap! counter inc)
  (let [resource-data (case field
                        :collection-names {:type field}
                        :tag-names {:type field}
                        :user-names {:type field}
                        :collection  {:type :collection
                                      :collection collection}
                        :courses     {:type :collection
                                      :collection collection}
                        :course    {:type :course
                                    :course course})]
    (when (< @counter 1000)
      (respond :requested-data
               :data resource-data))))

(defn- update-appstate! [fn]
  (do
    (swap! appstate fn)
    (respond :updated-appstate
             :appstate @appstate)))

(defn- respond-appstate [appstate]
  (let [[unknown-field viewmodel] (model/unknown-data appstate)]
    (if unknown-field
      (respond-resource-required unknown-field viewmodel)
      (respond :updated-appstate
               :appstate appstate))))

;; Public API

(defn set-mode [{mode :mode}]
  (update-appstate! #(model/set-mode %1 mode)))

(defn toggle-mode []
  (update-appstate! #(model/toggle-mode %1)))

(defn set-level [payload]
  (let [appstate (swap! appstate #(model/set-level %1 payload))]
    (respond-appstate appstate)))

(defn refresh [{:keys [store] :as payload}]
  (let [appstate (swap! appstate #(model/refresh %1 store))]
    (respond-appstate appstate)))

(defn toggle-highlight [payload]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (update-appstate! #(model/highlight-collection %1 payload))
      :course (update-appstate! #(model/highlight-course %1 payload)))))

(defn commit-data [{:keys [course-id checkpoint-id] :as payload}]
  (let [course (:course (:viewmodel @appstate))
        checkpoint (co/find-checkpoint course checkpoint-id)
        payload (assoc payload :course-id course-id
                               :checkpoint checkpoint)]
    (respond :requested-commit
             :payload payload)))

(defn force-refresh []
  (respond :reloaded-appstate
           :appstate @appstate))

(defn set-user [{:keys [user-id]}]
  (update-appstate! #(model/set-user-id %1 user-id)))
