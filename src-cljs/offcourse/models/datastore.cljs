(ns offcourse.models.datastore
  (:require [offcourse.models.action :refer [respond]]))

(defrecord DataStore [collections courses])

(defn new-datastore []
  (atom(->DataStore {} {})))

(defn update-collections [store {collection-name :collection-name
                                 collection-ids :collection-ids}]
  (do
    (swap! store assoc-in [:collections collection-name] collection-ids)
    (respond :collection-updated
             :collection-name collection-name
             :course-ids collection-ids)))

(defn update-course [store {course :course}]
  (do
    (swap! store assoc-in [:courses (:id course)] course)
    (respond :course-updated
             :course-id (:id course)
             :store store)))

(defn toggle-done [store {course-id :course-id
                          checkpoint-id :checkpoint-id}]
  (do
    (swap! store update-in [:courses course-id :checkpoints checkpoint-id :completed] not)
    (respond :checkpoint-updated
             :course-id course-id
             :checkpoint-id checkpoint-id
             :store store)))

(defn augment-checkpoint [store {course-id :course-id
                                 checkpoint-id :checkpoint-id
                                 resource :resource}]
  (do
    (swap! store update-in [:courses course-id :checkpoints checkpoint-id]
           #(assoc %1 :url (:url resource)
                   :resource resource))
    (respond :checkpoint-updated
             :checkpoint-id checkpoint-id
             :course-id course-id
             :store store)))

(defn get-course [store {course-id :course-id}]
  (let [course (get (:courses @store) course-id)]
    (if-not course
      (respond :course-not-found
               :course-id course-id)
      (respond :datastore-checked
               :store store))))

(defn get-collection [store {collection-name :collection-name}]
  (let [collections (:collections @store)]
    (if-not (collection-name collections)
      (respond :collection-not-found
               :collection-name collection-name)
      (respond :datastore-checked
               :store store))))

(defn get-data [store {type :type :as payload}]
  (case type
    :collection (get-collection store payload)
    :course     (get-course store payload)
    :checkpoint (get-course store payload)))
