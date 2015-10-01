(ns offcourse.services.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan <! >!]]
            [offcourse.models.course :as course]
            [offcourse.services.fake-data :refer [courses]]
            [offcourse.models.checkpoint :as checkpoint]))

(def channel (chan))
(def courses-store (atom courses))

(defn construct-response [keyword]
  (let [response {:type :collection
                  :name keyword}]
  (case keyword
    :new (assoc response :data (vector (first @courses-store)))
    :popular (assoc response :data (rest @courses-store))
    :featured (assoc response :data @courses-store))))

(defn get-courses [keyword]
  (go
    (>! channel (construct-response keyword))))

(defn get-course [id]
  (let [course (course/find-course @courses-store id)]
    (go
      (>! channel {:type :item
                   :name  (course :goal)
                   :data course}))))

(defn check-done [course-id checkpoint-id]
  (let [course (course/find-course @courses-store course-id)
        checkpoint (checkpoint/toggle-done (course :checkpoints) checkpoint-id)
        checkpoints (checkpoint/update-checkpoints (course :checkpoints) checkpoint)
        course (course/update-checkpoints course checkpoints)]
    (swap! courses-store course/update-course course)
    (go
      (>! channel {:type :update
                   :name (course :goal)
                   :data course}))))
