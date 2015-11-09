(ns offcourse.collection-api.service
  (:require [cljs.core.match :refer-macros [match]]
            [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl]
            [offcourse.models.action :refer [respond]]))

(defn fetch-collection-names [_]
  (respond :fetched-data
           :type :collection-names
           :collection-names [:featured :new :popular]))

(defn fetch-named-collection [collection-name]
  (respond :fetched-data
           :type :collection
           :collection (cl/named-collection collection-name)))

(defn fetch-user-collection [collection-name]
  (respond :fetched-data
           :type :collection
           :collection (cl/find-user-collection fake-data/courses collection-name)))

(defn fetch-tags-collection [collection-name]
  (respond :fetched-data
           :type :collection
           :collection (cl/find-tag-collection fake-data/courses collection-name)))

(defn fetch-collection [{:keys [collection-type collection-name]}]
  (case collection-type
    :user-collection (fetch-user-collection collection-name)
    :named-collection (fetch-named-collection collection-name)
    :tag-collection (fetch-tags-collection collection-name)))

(defn fetch [{:keys [type] :as payload}]
  (case type
    :tags (respond :ignore)
    :collection-names (fetch-collection-names payload)
    :collection (fetch-collection payload)
    :courses (respond :ignore)
    :course  (respond :ignore)
    :resources (respond :ignore)))
