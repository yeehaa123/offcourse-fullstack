(ns offcourse.stores.data
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.services.fake-data :refer [courses]]
            [offcourse.models.checkpoint :as checkpoint]))

; probably move sending actions to separate module...

(def channel (chan))

(def resources-channel (chan))

(def courses-store (atom courses))

(defn send-response [type payload]
  (go
    (>! channel {:type type
                 :payload payload})))

(defn choose-collection [collection-name]
  (let [courses (vec (vals @courses-store))]
    (collection-name {:new (vector (first courses))
                      :popular (rest courses)
                      :featured courses})))

(defn send-courses [collection-name]
  (send-response :refresh-courses
                 {:collection-name collection-name
                  :courses (choose-collection collection-name)}))

(defn send-course [id type]
  (send-response type
                 {:course (@courses-store id)}))

(defn send-checkpoint [type course-id checkpoint-id]
  (let [course (@courses-store course-id)
        checkpoints (:checkpoints course)
        checkpoint (assoc (checkpoints checkpoint-id)
                          :course-id course-id
                          :course-goal (course :goal))]
    (send-response type
                   {:checkpoint checkpoint})))

(defn update-checkpoint! [type course-id checkpoint-id cb]
  (do
    (swap! courses-store #(cb %1))
    (case type
      :refresh-checkpoint (send-checkpoint type course-id checkpoint-id)
      :update-course (send-course course-id :update-course))))

(defn update-course! [id cb]
  (do
    (swap! courses-store #(cb %1))
    (send-course id :update-course)))

(defn fetch-resource [type course-id checkpoint-id]
  (go
    (<! (timeout 1000))
    (>! resources-channel [type course-id checkpoint-id {:title "BlaBla"
                                                         :url "http://facebook.com"}])))

(defn fetch-resources [course-id type]
  (let [course (@courses-store course-id)
        checkpoints (vals (course :checkpoints))
        checkpoint-ids (map :id checkpoints)
        fetch-resource (partial fetch-resource type course-id)]
    (doseq [checkpoint-id checkpoint-ids]
      (fetch-resource checkpoint-id))))

(defn listen-for-resources []
  (go-loop []
    (let [[type course-id checkpoint-id resource] (<! resources-channel)]
      (update-checkpoint! type
                          course-id
                          checkpoint-id
                          (partial course/add-data-to-checkpoint course-id
                                                                 checkpoint-id
                                                                 resource)))
    (recur)))

(listen-for-resources)
