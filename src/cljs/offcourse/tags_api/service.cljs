(ns offcourse.tags-api.service
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as co]
            [offcourse.models.action :refer [respond]]))

(defn find-data [payload]
  (println payload)
  (respond :ignore))
