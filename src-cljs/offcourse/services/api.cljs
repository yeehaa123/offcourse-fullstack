(ns offcourse.services.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.services.fake-data :refer [courses]]
            [offcourse.models.checkpoint :as checkpoint]))

(def channel (chan))
(def courses-store (atom courses))

(defn construct-response [keyword]
  (let [response {:type :collection
                  :name keyword}
        courses (vec (vals @courses-store))]
  (case keyword
    :new (assoc response :data (vector (first courses)))
    :popular (assoc response :data (rest courses))
    :featured (assoc response :data courses))))

(defn get-courses [keyword]
  (go
    (>! channel (construct-response keyword))))

(defn fetch-course [id]
  (let [course (get @courses-store id)]
    {:type :item
     :name  (course :goal)
     :data course}))

(comment
  (defn augment-course [id]
    (let [course (-> (swap! courses-store assoc-in [id :checkpoints 100 :title] "important")
                     (get id))]
      (println course)
      {:type :item
       :name  (course :goal)
       :data course})))

(defn get-course [id]
  (let [course (course/find-course @courses-store id)]
    (go
      (>! channel (fetch-course id))
      (comment
        (<! (timeout 1000))
        (>! channel (augment-course id))))))

(defn check-done [course-id checkpoint-id]
  (go
    (swap! courses-store
           update-in [course-id :checkpoints checkpoint-id :completed]
           #(not %1))
    (let [course (@courses-store course-id)]
      (>! channel {:type :update
                   :name (course :goal)
                   :data course}))))
