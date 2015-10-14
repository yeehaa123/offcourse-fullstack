(ns offcourse.actions.index
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan <! >!]]
            [offcourse.models.action :refer [respond]]))

(def channel (chan))

(defn send-action [response]
  (go
    (>! channel response)))

(defn set-mode! [mode]
  (respond :requested-mode-switch
           :mode mode))

(defn toggle-mode! []
  (send-action (respond :requested-mode-toggle)))


(defn toggle-done [course-id checkpoint-id]
  (send-action (respond :requested-done-toggle
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn get-courses [{collection-name :collection-name}]
  (send-action (respond :requested-resource
                        :type :collection
                        :collection-name collection-name)))

(defn get-course [id]
  (send-action (respond :requested-resource
                        :type :course
                        :course-id id)))

(defn get-checkpoint [course-id checkpoint-id]
  (send-action (respond :requested-resource
                        :type :checkpoint
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn go-to-collection [collection-name]
  (send-action (respond :requested-level
                        :level :collection
                        :collection-name collection-name)))

(defn go-to-course [course-id]
  (send-action (respond :requested-level
                        :level :course
                        :course-id course-id)))

(defn go-to-checkpoint [course-id checkpoint-id]
  (send-action (respond :requested-level
                        :level :checkpoint
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn go-to [payload]
  (send-action {:type :requested-level
                :payload payload}))
