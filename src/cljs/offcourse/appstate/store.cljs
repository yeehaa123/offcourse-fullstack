(ns offcourse.appstate.store
  (:require [offcourse.appstate.model :as model]
            [offcourse.models.course :as co]
            [offcourse.models.collection :as cl]
            [offcourse.models.action :refer [respond]]))

(def appstate (atom (model/new-appstate)))

(defn- update-appstate! [fn]
  (do
    (swap! appstate fn)
    (respond :updated-appstate
             :appstate @appstate)))

(defn- refresh-checkpoint [{:keys [courses resources]}]
  (let [{:keys [course-id checkpoint-id]} (:level @appstate)
        course (get courses course-id)
        {:keys [url] :as checkpoint} (co/find-checkpoint course checkpoint-id)
        resource (or (get resources url) :unknown)
        course (co/augment-checkpoint course checkpoint-id resource)]
    (if (or checkpoint (= checkpoint-id :new))
      (update-appstate! #(model/update-checkpoint %1 course checkpoint-id))
      (respond :not-found-resource))))

(defn- refresh-collection [{:keys [collections courses]}]
  (let [{:keys [collection-name]} (:level @appstate)
        course-ids (collection-name collections)
        collection (cl/find-courses courses course-ids)]
    (update-appstate! #(model/refresh-collection %1 collection))))

(defn- refresh-course [{:keys [courses resources]}]
  (let [{:keys [course-id checkpoint-id]} (:level @appstate)
        course (get courses course-id)
        course (co/augment-checkpoints course resources)
        resources (or resources {})]
    (if course
      (update-appstate! #(model/refresh-course %1 course))
      (respond :not-found-resource))))

;; Public API

(defn set-mode [{mode :mode}]
  (update-appstate! #(model/set-mode %1 mode)))

(defn toggle-mode []
  (update-appstate! #(model/toggle-mode %1)))

(defn set-level [payload]
  (update-appstate! #(model/set-level %1 payload)))

(defn refresh [{:keys [store] :as payload}]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (refresh-collection store)
      :course (refresh-course store)
      :checkpoint (refresh-checkpoint store))))

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
