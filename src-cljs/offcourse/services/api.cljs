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

(defn response [type name data]
  {:type type
   :name name
   :data data})

(defn send-response [response]
  (go (>! channel response)))

(defn choose-response [courses keyword]
  (case keyword
    :new (response :collection keyword (vector (first courses)))
    :popular (response :collection keyword (rest courses))
    :featured (response :collection keyword courses)))

(defn send-courses [keyword]
  (send-response (choose-response (vec (vals @courses-store)) keyword)))

(defn send-course [id type]
  (let [course (get @courses-store id)
        response (response type (course :goal) course)]
    (send-response response)))

(defn update-course! [id cb]
  (do
    (swap! courses-store #(cb %1))
    (send-course id :update)))

(defn listen-for-resources []
  (go-loop []
    (let [[course-id resources] (<! resources-channel)]
      (update-course! course-id (partial course/augment course-id resources)))
    (recur)))

(listen-for-resources)

;--------------- PUBLIC API------------------------------------------------------

(defn fetch-resources [id]
  (go
    (<! (timeout 1000))
    (>! resources-channel [id {100 {:title "This is Awesome!"}
                               101 {:title "Really Amazing!"}}])))

(defn get-course [id]
  (do
    (send-course id :item)
    (fetch-resources id)))

(defn get-courses [keyword]
  (send-courses keyword))

(defn toggle-done! [course-id checkpoint-id]
  (update-course! course-id
                  (partial course/toggle-done course-id checkpoint-id)))

(defn update-goal! [course-id new-goal]
  (update-course! course-id
                  (partial course/update-goal course-id new-goal)))

(defn update-task! [course-id checkpoint-id new-task]
  (update-course! course-id
                  (partial course/update-task course-id checkpoint-id new-task)))
