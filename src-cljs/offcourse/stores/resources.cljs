(ns offcourse.stores.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.actions.index :as actions]
            [offcourse.services.fake-data :refer [courses]]
            [offcourse.models.checkpoint :as checkpoint]))

(def channel (chan))

(defn fetch-resource [course-id checkpoint-id]
  (go
    (<! (timeout (rand-int 3000)))
    (>! channel {:type :augment-checkpoint
                 :payload {:course-id course-id
                           :checkpoint-id checkpoint-id
                           :resource {:title "BlaBlaBla"
                                      :url "http://facebook.com"}}})))

(defn fetch-resources [course-id checkpoint-ids]
  (doseq [checkpoint-id checkpoint-ids]
    (fetch-resource course-id checkpoint-id)))

(defn get-course-resources [payload]
  (let [course (:course payload)
        checkpoint-ids (keys (:checkpoints course))]
    (fetch-resources (:id course) checkpoint-ids)))
