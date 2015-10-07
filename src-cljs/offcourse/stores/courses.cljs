(ns offcourse.stores.courses
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.actions.index :as actions]
            [offcourse.stores.resources :as resources]
            [offcourse.services.fake-data :refer [courses]]
            [offcourse.models.checkpoint :as checkpoint]))

(def store (atom courses))

(defn get-checkpoint-ids [course-id]
  (let [course (@store course-id)
        checkpoints (vals (course :checkpoints))]
    (map :id checkpoints)))

(defn choose-collection [collection-name]
  (let [courses (vec (vals @store))]
    (collection-name {:new (vector (first courses))
                      :popular (rest courses)
                      :featured courses})))

(defn send-courses [collection-name]
  (actions/refresh-viewmodel))

(defn send-course []
  (actions/refresh-viewmodel))

(defn send-checkpoint []
  (actions/refresh-viewmodel))

(defn update-checkpoint! [course-id checkpoint-id cb]
  (do
    (swap! store #(cb %1))
    (actions/refresh-viewmodel)))

(defn update-course! [id cb]
  (do
    (swap! store #(cb %1))
    (actions/refresh-viewmodel)))

(defn listen-for-resources []
  (go-loop []
    (let [[course-id checkpoint-id resource] (<! resources/channel)]
      (update-checkpoint! course-id
                             checkpoint-id
                             (partial course/add-data-to-checkpoint course-id
                                      checkpoint-id
                                      resource)))
    (recur)))

(listen-for-resources)
