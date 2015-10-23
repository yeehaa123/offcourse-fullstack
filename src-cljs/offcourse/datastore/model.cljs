(ns offcourse.datastore.model
  (:require [offcourse.models.action :refer [respond]]))

(defrecord DataStore [collections courses])

(defn new-datastore []
  (->DataStore {} {}))

(defn update-collections [store collection-name collection-ids]
  (assoc-in store [:collections collection-name] collection-ids))

(defn update-course [store course]
  (assoc-in store [:courses (:id course)] course))

(defn add-checkpoint [store course-id checkpoint-id checkpoint]
    (assoc-in store [:courses course-id :checkpoints checkpoint-id] checkpoint))

(defn toggle-done [store course-id checkpoint-id]
  (update-in store [:courses course-id :checkpoints checkpoint-id :completed] not))

(defn add-resource [checkpoint resource]
  (assoc checkpoint :url (:url resource)
                    :resource resource))

(defn augment-checkpoint [store course-id checkpoint-id resource]
  (update-in store [:courses course-id :checkpoints checkpoint-id] #(add-resource %1 resource)))
