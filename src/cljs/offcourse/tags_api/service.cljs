(ns offcourse.tags-api.service
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl]
            [offcourse.models.action :refer [respond]]))

(defn fetch-all-tags [collection]
  (let [tags (cl/fetch-tags collection)]
    (respond :fetched-data
             :type :tags
             :tags tags)))

(defn fetch [{:keys [type] :as payload}]
  (case type
    :tags (fetch-all-tags fake-data/courses)
    :collections (respond :ignore)
    :collection (respond :ignore)
    :courses (respond :ignore)
    :course  (respond :ignore)
    :resources (respond :ignore)))
