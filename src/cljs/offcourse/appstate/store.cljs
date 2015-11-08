(ns offcourse.appstate.store
  (:require [offcourse.appstate.model :as model]
            [offcourse.appstate.viewmodel :as vm]
            [offcourse.models.course :as co]
            [offcourse.models.courses :as cs]
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
        checkpoint (co/find-checkpoint course checkpoint-id)]
    (if (or checkpoint (= checkpoint-id :new))
      (update-appstate! #(model/update-checkpoint %1 course checkpoint-id resources))
      (respond :not-found-resource))))

(defn- refresh-tags [{:keys [tags courses]}]
  (update-appstate! #(model/refresh-tags %1 tags courses)))

(defn- refresh-collection [{:keys [collections courses]}]
  (let [{:keys [collection-type collection-name]} (:level @appstate)
        course-ids (get-in collections [collection-type collection-name])
        collection (cs/find-courses courses course-ids)]
    (update-appstate! #(model/refresh-collection %1 collection))))

(defn- refresh-course [{:keys [courses resources]}]
  (let [{:keys [course-id checkpoint-id]} (:level @appstate)
        course (get courses course-id)
        resources (or resources {})]
    (if course
      (update-appstate! #(model/refresh-course %1 course resources))
      (respond :not-found-resource))))

;; Public API

(defn set-mode [{mode :mode}]
  (update-appstate! #(model/set-mode %1 mode)))

(defn toggle-mode []
  (update-appstate! #(model/toggle-mode %1)))

(defn set-level [payload]
  (let [new-appstate (swap! appstate #(model/set-level %1 payload))
        new-level (:level @appstate)
        type (:type new-level)]
    (case type
      :collection (let [missing-data (vm/missing-data (:viewmodel @appstate))]
                    (respond :requested-data
                             :data missing-data))
      :tags (let [missing-data (vm/missing-data (:viewmodel @appstate))]
              (respond :requested-data
                       :data missing-data))
      :course (let [missing-data (vm/missing-data (:viewmodel @appstate))]
                (println missing-data)
              (respond :requested-data
                       :data missing-data))
      (respond :requested-data
               :data [new-level]))))

(defn refresh [{:keys [store] :as payload}]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :tags (refresh-tags store)
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
