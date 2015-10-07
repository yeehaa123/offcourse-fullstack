(ns offcourse.stores.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.actions.index :as actions]
            [offcourse.services.fake-data :refer [courses]]
            [offcourse.models.checkpoint :as checkpoint]))

(def channel (chan))

(defn fetch-resource [course-id checkpoint-id]
  (println course-id checkpoint-id)
  (go
    (<! (timeout 1000))
    (>! channel [course-id checkpoint-id {:title "BlaBlaBla"
                                          :url "http://facebook.com"}])))

(defn fetch-resources [course-id checkpoint-ids]
  (doseq [checkpoint-id checkpoint-ids]
    (fetch-resource course-id checkpoint-id)))
