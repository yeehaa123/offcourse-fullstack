(ns offcourse.actions.index
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan <! >!]]
            [ajax.core :refer [GET POST]]
            [offcourse.models.action :refer [respond]]))

(def channel (chan))

(defn send-action [response]
  (go
    (>! channel response)))

(defn set-mode! [mode]
  (respond :mode-switch-requested
           :mode mode))

(defn toggle-mode! []
  (send-action (respond :mode-toggle-requested)))


(defn toggle-done [course-id checkpoint-id]
  (send-action (respond :done-toggle-requested
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn get-courses [{collection-name :collection-name}]
  (send-action (respond :resource-requested
                        :type :collection
                        :collection-name collection-name)))

(defn get-course [id]
  (send-action (respond :resource-requested
                        :type :course
                        :course-id id)))

(defn get-checkpoint [course-id checkpoint-id]
  (send-action (respond :resource-requested
                        :type :checkpoint
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn go-to-collection [collection-name]
  (send-action (respond :level-requested
                        :level :collection
                        :collection-name collection-name)))

(defn go-to-course [course-id]
  (send-action (respond :level-requested
                        :level :course
                        :course-id course-id)))

(defn go-to-checkpoint [course-id checkpoint-id]
  (send-action (respond :level-requested
                        :level :checkpoint
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn go-to [payload]
  (send-action {:type :level-requested
                :payload payload}))
