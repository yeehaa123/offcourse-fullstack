(ns offcourse.models.datastore
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [offcourse.actions.index :as actions]
            [cljs.core.async :refer [>!]]
            [offcourse.models.action :refer [respond]]
            [offcourse.actions.index :as actions]))

(defrecord DataStore [collections courses])

(defn new-datastore []
  (atom(->DataStore {} {})))

(defn refresh-collection [store {collection-name :collection-name
                                 collection-ids :collection-ids
                                 collection :collection}]
  (do
    (swap! store assoc-in [:collections collection-name] collection-ids)
    (swap! store update-in [:courses] (fn [courses] (into courses collection)))
    (actions/refresh-viewmodel store)))

(defn refresh-course [store {course :course}]
  (do
    (swap! store assoc-in [:courses (:id course)] course)
    (actions/refresh-viewmodel store)))

(defn toggle-done [store {course-id :course-id
                          checkpoint-id :checkpoint-id}]
  (do
    (swap! store update-in [:courses course-id :checkpoints checkpoint-id :completed] not)
    (actions/refresh-viewmodel store)))

(defn augment-checkpoint [store {course-id :course-id
                                 checkpoint-id :checkpoint-id
                                 resource :resource}]
  (do
    (swap! store update-in [:courses course-id :checkpoints checkpoint-id]
           #(assoc %1 :url (:url resource)
                      :resource resource))
    (actions/refresh-viewmodel store)))

(defn get-resources [store {{course-id :id} :course}]
  (let [course (get (:courses @store) course-id)
        checkpoints (vals (:checkpoints course))]
    (respond :fetch-resources
             :course-id course-id
             :checkpoints checkpoints)))

(defn get-course [{courses :courses :as store}
                  {course-id :course-id}]
  (let [course (get courses course-id)]
    (if-not course
      (respond :fetch-course
               :course-id course-id)
      (do
        (actions/refresh-viewmodel store)
        (respond :ignore)))))

(defn get-collection [{collections :collections :as store}
                      {collection-name :collection-name}]
  (if-not (collection-name collections)
    (respond :fetch-collection
             :collection-name collection-name)
    (do
      (actions/refresh-viewmodel store)
      (respond :ignore))))

(defn get-data [store {type :type :as payload}]
  (case type
    :collection (get-collection store payload)
    (get-course store payload)))
