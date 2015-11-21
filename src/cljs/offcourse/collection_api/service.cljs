(ns offcourse.collection-api.service
  (:require [cljs.core.match :refer-macros [match]]
            [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl :refer [map->Collection]]
            [offcourse.models.action :refer [respond]]))


(defn wrap-collections [collections]
  (->> collections
       (map (fn [[id collection]]
              [id (map->Collection collection)]))
       (into {})))

(defn fetch-named-collections [_]
  (respond :fetched-data
           :type :collections
           :collections (wrap-collections fake-data/named-collections)))

(defn fetch-named-collection [collection-name]
  (respond :fetched-data
           :type :collection
           :collection (wrap-collections (cl/named-collection collection-name))))

(defn fetch-user-collection [collection-name]
  (respond :fetched-data
           :type :collection
           :collection (map->Collection (cl/find-user-collection fake-data/courses collection-name))))

(defn fetch-tags-collection [collection-name]
  (let [collection (map->Collection (cl/find-tag-collection fake-data/courses collection-name))]
    (respond :fetched-data
             :type :collection
             :collection collection)))

(defn fetch-collection [{:keys [collection-type collection-name] :as c}]
  (case collection-type
    :user-collection (fetch-user-collection collection-name)
    :named-collection (fetch-named-collection collection-name)
    :tag-collection (fetch-tags-collection collection-name)))

(defn fetch [{:keys [type] :as payload}]
  (case type
    :tags (respond :ignore)
    :users (respond :ignore)
    :collections (fetch-named-collections payload)
    :collection (fetch-collection payload)
    :courses (respond :ignore)
    :course  (respond :ignore)
    :resources (respond :ignore)))
