(ns offcourse.actions.index
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan <! >!]]
            [offcourse.channels :as channels]
            [ajax.core :refer [GET POST]]))

(defn send-action
  ([type](send-action type {}))
  ([type payload](go
                   (let [action {:type type
                                 :payload payload}]
                     (>! channels/appstate-in action)))))

(defn set-mode! [mode]
  (send-action :set-mode {:mode mode}))

(defn toggle-mode! []
  (send-action :toggle-mode))


(defn toggle-done [course-id checkpoint-id]
  (send-action :toggle-done
               {:course-id course-id
                :checkpoint-id checkpoint-id}))

(defn get-courses [{collection-name :collection-name}]
  (send-action :set-level {:type :collection
                           :collection-name collection-name}))

(defn get-course [id]
  (send-action :set-level {:type :course
                           :course-id id}))

(defn get-checkpoint [course-id checkpoint-id]
  (send-action :set-level {:type :checkpoint
                           :course-id course-id
                           :checkpoint-id checkpoint-id}))

(defn go-to-collection [collection-name]
  (send-action :go-to {:level :collection
                       :collection-name collection-name}))

(defn go-to-course [course-id]
  (send-action :go-to {:level :course
                       :course-id course-id}))

(defn go-to-checkpoint [course-id checkpoint-id]
  (send-action :go-to {:level :checkpoint
                       :course-id course-id
                       :checkpoint-id checkpoint-id}))

(defn refresh-viewmodel [store]
  (send-action :refresh-viewmodel {:store store}))
