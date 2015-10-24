(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
             [offcourse.models.action :refer [respond]]))

(def store (atom (model/new-datastore)))

(defn- update-datastore! [fn]
  (do
    (swap! store fn)))

(defn update-collections [{collection-name :collection-name
                           collection-ids :collection-ids}]
  (do
    (update-datastore! #(model/update-collections %1 collection-name collection-ids))
    (respond :updated-collection
             :collection-name collection-name
             :course-ids collection-ids)))

(defn update-course [{course :course}]
  (do
    (update-datastore! #(model/update-course %1 course))
    (respond :updated-course
             :course-id (:id course)
             :store store)))

(defn update-courses [{courses :courses}]
  (do
    (update-datastore! #(model/update-courses %1 courses))
    (respond :updated-courses
             :courses courses
             :store store)))

(defn toggle-done [{course-id :course-id
                    checkpoint-id :checkpoint-id}]
  (do
    (update-datastore! #(model/toggle-done %1 course-id checkpoint-id))
    (respond :updated-checkpoint
             :course-id course-id
             :checkpoint-id checkpoint-id
             :store store)))

(defn augment-checkpoint [{:keys [course-id checkpoint-id resource]}]
  (do
    (update-datastore! #(model/augment-checkpoint %1 course-id checkpoint-id resource))
    (respond :updated-checkpoint
             :checkpoint-id checkpoint-id
             :course-id course-id
             :store store)))

(defn update-datastore [{:keys [type] :as payload}]
  (case type
    :collection (update-collections payload)
    :course     (update-course payload)
    :courses    (update-courses payload)
    :resource   (augment-checkpoint payload)))

(defn get-course [{course-id :course-id}]
  (let [course (get (:courses @store) course-id)
        has-no-resources? (not-any? :resource (:checkpoints course))]
    (if-not course
      (respond :not-found-course
               :course-id course-id)
      (if has-no-resources?
        (respond :updated-course
                 :course-id course-id
                 :store store)
        (respond :checked-datastore
                 :store store)))))

(defn get-collection [{collection-name :collection-name}]
  (let [collections (:collections @store)]
    (if-not (collection-name collections)
      (respond :not-found-collection
               :collection-name collection-name)
      (respond :checked-datastore
               :store store))))

(defn add-checkpoint [{:keys [course-id checkpoint]}]
  (let [course (get (:courses @store) course-id)
        max-id (apply max (keys (:checkpoints course)))
        id     (inc max-id)]
    (do
      (update-datastore! #(model/add-checkpoint %1 course-id id checkpoint))
      (respond :added-checkpoint
               :checkpoint-id id
               :course-id course-id
               :store store))))

(defn save-checkpoint [{:keys [checkpoint-id] :as payload}]
  (if (= checkpoint-id :new)
    (add-checkpoint payload)
    (respond :ignore)))

(defn commit-data [{type :type :as payload}]
  (case type
    :checkpoint (save-checkpoint payload)))

(defn get-data [{type :type :as payload}]
  (case type
    :collection (get-collection payload)
    :course     (get-course payload)
    :checkpoint (get-course payload)))
