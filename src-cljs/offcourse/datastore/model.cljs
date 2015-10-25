(ns offcourse.datastore.model
  (:require [offcourse.models.action :refer [respond]]
            [offcourse.models.course :as co]
            [offcourse.models.checkpoint :as cp]))

(defrecord DataStore [collections courses])

(defn new-datastore []
  (->DataStore {} {}))

(defn update-collections [store collection-name collection-ids]
  (assoc-in store [:collections collection-name] collection-ids))

(defn update-course [store course]
  (assoc-in store [:courses (:id course)] course))

(defn update-courses [store courses]
  (reduce update-course store courses))

(defn add-checkpoint [store course-id checkpoint]
  (update-in store [:courses course-id] #(co/add-checkpoint %1 checkpoint)))

(defn toggle-done [store course-id checkpoint-id]
  (update-in store [:courses course-id] #(co/toggle-done %1 checkpoint-id)))

(defn augment-checkpoint [store course-id checkpoint-id resource]
  (update-in store [:courses course-id] #(co/augment-checkpoint %1 checkpoint-id resource)))

(defn find-course [store course-id]
  (get (:courses store) course-id))
