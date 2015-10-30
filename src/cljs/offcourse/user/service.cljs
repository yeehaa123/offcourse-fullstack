(ns offcourse.user.service
  (:require [offcourse.models.action :refer [respond]]))

(defn authenticate [payload]
  (respond :authenticated-user
           :payload payload))
