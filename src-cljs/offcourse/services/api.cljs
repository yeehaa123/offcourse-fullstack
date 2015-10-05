(ns offcourse.services.api
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.services.fake-data :refer [courses]]
            [offcourse.models.checkpoint :as checkpoint]))

(def channel (chan))

;---------------PRIVATE API-------------------------------------------------------

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

(defn send-checkpoint [course-id checkpoint-id type]
  (let [course (@courses-store course-id)
        checkpoints (:checkpoints course)
        checkpoint (assoc (checkpoints checkpoint-id)
                          :course-id course-id
                          :course-goal (course :goal))]
    (send-response type {:checkpoint checkpoint})))

(defn update-course! [id cb]
  (do
    (swap! courses-store #(cb %1))
    (send-course id :update-course)))

(defn listen-for-resources []
  (go-loop []
    (let [[course-id resources] (<! resources-channel)]
      (update-course! course-id
                      (partial course/augment course-id resources)))
    (recur)))

(listen-for-resources)

;--------------- PUBLIC API------------------------------------------------------

(defn fetch-resources [id]
  (go
    (<! (timeout 1000))
    (>! resources-channel [id {100 {:title "This is Awesome!"}
                               101 {:title "Really Amazing!"}}])))

(defn get-course [{id :id}]
  (do
    (send-course id :refresh-course)
    (fetch-resources id)))

(defn get-checkpoint [{:keys [course-id checkpoint-id]}]
  (send-checkpoint course-id checkpoint-id :refresh-checkpoint))

(defn get-courses [{collection-name :collection-name}]
  (send-courses collection-name))

(defn toggle-done! [{:keys [course-id checkpoint-id]}]
  (update-course! course-id
                  (partial course/toggle-done course-id checkpoint-id)))

(defn update-goal! [{:keys [course-id new-goal]}]
  (update-course! course-id
                  (partial course/update-goal course-id new-goal)))

(defn update-task! [{:keys [course-id checkpoint-id new-task]}]
  (update-course! course-id
                  (partial course/update-task course-id checkpoint-id new-task)))
