(ns offcourse.datastore.implementations.available
  (:require [clojure.set :as set]))

(defmulti available
  (fn [_ type _] type))

(defmethod available :collection-ids [store _ {:keys [collection-name collection-type]}]
  (get-in store [:collections collection-type collection-name :collection-ids]))

(defmethod available :courses [store _ course-ids]
  (->> course-ids
       (keep #(get-in store [:courses %1]))))

(defmethod available :course-ids [store _ course-ids]
  (->> course-ids
       (available store :courses)
       (map :course-id)
       (into #{})))

(defmethod available :course [store _ course-id]
  (get-in store [:courses course-id]))

(defmulti unavailable
  (fn [store type data] type))

(defmethod unavailable :course-ids [store _ course-ids]
  (let [present-ids (available store :course-ids course-ids)]
    (set/difference course-ids present-ids)))
