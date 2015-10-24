(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
            [clojure.set :as set]
            [offcourse.models.action :refer [respond]]))

(def store (atom (model/new-datastore)))

(defn respond-checked []
  (respond :checked-datastore
           :store store))

(defn- update-datastore! [fn & response]
  (do
    (swap! store fn)
    (if-not response
      (respond-checked)
      (apply respond response))))

(defn- update-collections [{collection-name :collection-name
                           collection-ids :collection-ids}]
  (let [courses-ids (into #{} (keys (:courses @store)))
        missing-ids (set/difference collection-ids courses-ids)]
    (if (empty? missing-ids)
      (update-datastore! #(model/update-collections %1 collection-name collection-ids))
      (update-datastore! #(model/update-collections %1 collection-name collection-ids)
                         :not-found-data
                         :type :courses
                         :course-ids missing-ids))))

(defn- update-course [{course :course}]
  (update-datastore! #(model/update-course %1 course)
                     :updated-course
                     :course-id (:id course)
                     :store store))

(defn- update-courses [{courses :courses}]
  (update-datastore! #(model/update-courses %1 courses)
                     :updated-courses
                     :courses courses
                     :store store))

(defn- toggle-done [{course-id :course-id
                    checkpoint-id :checkpoint-id}]
  (update-datastore! #(model/toggle-done %1 course-id checkpoint-id)
                     :updated-checkpoint
                     :course-id course-id
                     :checkpoint-id checkpoint-id
                     :store store))

(defn- augment-checkpoint [{:keys [course-id checkpoint-id resource]}]
  (update-datastore! #(model/augment-checkpoint %1 course-id checkpoint-id resource)
                     :updated-checkpoint
                     :checkpoint-id checkpoint-id
                     :course-id course-id
                     :store store))

(defn- add-checkpoint [{:keys [course-id checkpoint]}]
  (let [course (get (:courses @store) course-id)
        max-id (apply max (keys (:checkpoints course)))
        id     (inc max-id)]
    (update-datastore! #(model/add-checkpoint %1 course-id id checkpoint)
                       :added-checkpoint
                       :checkpoint-id id
                       :course-id course-id
                       :store store)))

(defn- save-checkpoint [{:keys [checkpoint-id] :as payload}]
  (if (= checkpoint-id :new)
    (add-checkpoint payload)
    (respond :ignore)))

(defn- get-course [{course-id :course-id}]
  (let [course (get (:courses @store) course-id)
        has-no-resources? (not-every? :resource (:checkpoints course))]
    (if course
      ;; move to api
      (if has-no-resources?
        (respond :not-found-data
                 :type :resources
                 :course-id course-id
                 :store store)
        (respond-checked))
      (respond :not-found-data
               :type :course
               :course-id course-id
               :store store))))

(defn- get-collection [{collection-name :collection-name}]
  (let [collections (:collections @store)]
    (if-not (collection-name collections)
      (respond :not-found-data
               :type :collection
               :collection-name collection-name
               :store store)
      (respond-checked))))

;; Public API

(defn commit-data [{type :type :as payload}]
  (case type
    :checkpoint (save-checkpoint payload)))

(defn get-data [{type :type :as payload}]
  (case type
    :collection (get-collection payload)
    :course     (get-course payload)
    :checkpoint (get-course payload)))

(defn update-datastore [{:keys [type] :as payload}]
  (case type
    :collection (update-collections payload)
    :course     (update-course payload)
    :courses    (update-courses payload)
    :resource   (augment-checkpoint payload)))
