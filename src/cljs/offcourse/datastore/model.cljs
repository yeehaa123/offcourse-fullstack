(ns offcourse.datastore.model
  (:require [offcourse.models.action :refer [respond]]
            [clojure.set :as set]
            [offcourse.models.courses :as cs]))

(defrecord DataStore [collections courses resources tags users])

(defn new-datastore []
  (->DataStore nil nil nil nil nil))

(defn update-tags [store tags]
  (update-in store [:tags] #(into %1 tags)))

(defn update-users [store users]
  (update-in store [:users] #(into %1 users)))

(defn update-resources [store resources]
  (update-in store [:resources] #(into %1 resources)))

(defn update-collections [store collections]
  (assoc-in store [:collections :flags] collections))

(defn update-collection [store {:keys [collection-name collection-type] :as collection}]
  (assoc-in store [:collections collection-type collection-name] collection))

(defn update-cache [store fn]
  (update-in store [:courses] fn))

(defn update-course [store course]
  (update-cache store #(cs/update-course %1 course)))

(defn update-courses [store courses]
  (update-cache store #(cs/update-courses %1 courses)))

(defn add-checkpoint [store course-id checkpoint]
  (update-cache store #(cs/add-checkpoint %1 course-id checkpoint)))

(defn toggle-done [store course-id checkpoint-id]
  (update-cache store #(cs/toggle-done %1 course-id checkpoint-id)))

(defn find-course [store course-id]
  (cs/find-course (:courses store) course-id))

(defn missing-ids [store collection-ids]
  (let [courses-ids (into #{} (keys (:courses @store)))]
    (set/difference collection-ids courses-ids)))

(defn get-collection-ids [store collection-type collection-name]
  (get-in store [:collections collection-type collection-name :collection-ids]))
