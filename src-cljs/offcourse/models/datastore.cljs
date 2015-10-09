(ns offcourse.models.datastore
  (:require [offcourse.actions.index :as actions]
            [offcourse.stores.resources :as resources]
            [offcourse.stores.courses :as courses]
            [offcourse.actions.index :as actions]))

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
    (comment (add action/get-resources here))
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
    (println (get-in @store [:courses course-id :checkpoints checkpoint-id]))
    (actions/refresh-viewmodel store)))

(defn get-resources [store {{course-id :id} :course}]
  (let [course (get (:courses @store) course-id)
        checkpoints (vals (:checkpoints course))]
    (doseq [checkpoint checkpoints]
      (when-not (:resource checkpoint)
        (resources/fetch-resource course-id checkpoint)))))

(defn get-course [{courses :courses :as store}
                  {course-id :course-id}]
  (let [course (get courses course-id)]
    (if-not course
      (courses/fetch-course course-id)
      (do
        (actions/refresh-viewmodel store)
        (get-resources store {:course course})))))

(defn get-collection [{collections :collections :as store}
                      {collection-name :collection-name}]
  (if-not (collection-name collections)
    (courses/fetch-collection collection-name)
    (actions/refresh-viewmodel store)))

(defn get-data [store {type :type :as payload}]
  (case type
    :collection (get-collection store payload)
    (get-course store payload)))
