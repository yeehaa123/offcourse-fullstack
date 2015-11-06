(ns offcourse.tags-api.service
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.action :refer [respond]]))

(defn find-data [payload]
  (respond :ignore))
