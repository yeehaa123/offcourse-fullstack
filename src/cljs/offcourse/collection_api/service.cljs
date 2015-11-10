(ns offcourse.collection-api.service
  (:require [cljs.core.match :refer-macros [match]]
            [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl :refer [map->Collection]]
            [offcourse.models.action :refer [respond]]))

(defn fetch-named-collections [_]
  (let [collections (->> fake-data/named-collections
                         (map (fn [[id collection]]
                                [id (map->Collection collection)]))
                         (into {}))]
  (respond :fetched-data
           :type :collections
           :collections collections)))

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
    :collections (fetch-named-collections payload)
    :collection (fetch-collection payload)
    :courses (respond :ignore)
    :course  (respond :ignore)
    :resources (respond :ignore)))
