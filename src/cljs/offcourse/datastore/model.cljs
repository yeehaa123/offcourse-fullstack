(ns offcourse.datastore.model
  (:require [clojure.set :as set]
            [offcourse.models.action :refer [respond]]))

(defrecord DataStore [collections courses resources])

(defn new-datastore []
  (->DataStore nil nil nil))

(defmulti present?
  (fn [store type data] type))

(defmethod present? :collection-ids [store _ {:keys [collection-name collection-type]}]
  (get-in store [:collections collection-type collection-name :collection-ids]))

(defmethod present? :courses [store _ course-ids]
  (->> course-ids
       (keep #(get-in store [:courses %1]))))

(defmethod present? :course-ids [store _ course-ids]
  (->> course-ids
       (present? store :courses)
       (map :course-id)
       (into #{})))

(defmethod present? :course [store _ course-id]
  (get-in store [:courses course-id]))

(defmulti missing?
  (fn [store type data] type))

(defmethod missing? :course-ids [store _ course-ids]
  (let [present-ids (present? store :course-ids course-ids)]
    (set/difference course-ids present-ids)))
