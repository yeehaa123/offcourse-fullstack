(ns offcourse.models.datastore
  (:require [offcourse.actions.index :as actions]))

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
    (swap! store assoc-in [:courses course-id :checkpoints checkpoint-id :resource] resource)
    (actions/refresh-viewmodel store)))
