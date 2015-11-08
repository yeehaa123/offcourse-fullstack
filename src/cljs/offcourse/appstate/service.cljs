(ns offcourse.appstate.service
  (:require [offcourse.models.action :refer [respond]]))

(defn switch-route [payload]
  (respond :requested-route
           :payload payload))

(defn toggle-done [payload]
  (respond :requested-toggle-done
           :payload payload))

(defn return-to-course [payload]
  (switch-route (assoc payload :level :course)))

(defn request-authentication [payload]
  (respond :requested-authentication
           :user-id "yeehaa"))
