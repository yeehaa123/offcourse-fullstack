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
  (respond :set-mode :mode mode))

(defn toggle-mode! []
  (send-action (respond :toggle-mode)))


(defn toggle-done [course-id checkpoint-id]
  (send-action (respond :toggle-done
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn get-courses [{collection-name :collection-name}]
  (send-action (respond :set-level
                        :type :collection
                        :collection-name collection-name)))

(defn get-course [id]
  (send-action (respond :set-level
                        :type :course
                        :course-id id)))

(defn get-checkpoint [course-id checkpoint-id]
  (send-action (respond :set-level
                        :type :checkpoint
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn go-to-collection [collection-name]
  (send-action (respond :go-to
                        :level :collection
                        :collection-name collection-name)))

(defn go-to-course [course-id]
  (send-action (respond :go-to
                        :level :course
                        :course-id course-id)))

(defn go-to-checkpoint [course-id checkpoint-id]
  (send-action (respond :go-to
                        :level :checkpoint
                        :course-id course-id
                        :checkpoint-id checkpoint-id)))

(defn refresh-viewmodel [store]
  (send-action (respond :refresh-viewmodel
                        :store store)))
