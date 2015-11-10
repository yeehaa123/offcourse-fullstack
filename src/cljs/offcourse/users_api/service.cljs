(ns offcourse.users-api.service
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl]
            [offcourse.models.action :refer [respond]]))

(defn fetch-all-users [collection]
  (let [users (cl/fetch-users collection)]
    (respond :fetched-data
             :type :users
             :users users)))

(defn fetch [{:keys [type] :as payload}]
  (case type
    :tags (respond :ignore)
    :users (fetch-all-users fake-data/courses)
    :collections (respond :ignore)
    :collection (respond :ignore)
    :courses (respond :ignore)
    :course  (respond :ignore)
    :resources (respond :ignore)))
