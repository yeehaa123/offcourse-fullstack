(ns offcourse.api.services.collections
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl :refer [map->Collection]]
            [offcourse.api.responder :as r]))


(defn fetch-named-collections [_]
  (r/respond-fetched-collections fake-data/named-collections))

(defn fetch-named-collection [collection-name]
  (r/respond-fetched-collection (map->Collection (cl/named-collection collection-name))))

(defn fetch-user-collection [collection-name]
  (r/respond-fetched-collection (map->Collection (cl/find-user-collection fake-data/courses collection-name))))

(defn fetch-tags-collection [collection-name]
  (r/respond-fetched-collection (map->Collection (cl/find-tag-collection fake-data/courses collection-name))))

(defn fetch-collection [{:keys [collection-type collection-name] :as c}]
  (println "TYPE API" collection-type)
  (println "NAME API " collection-name)
  (case collection-type
    :user-collection (fetch-user-collection collection-name)
    :flag-collection (fetch-named-collection collection-name)
    :tag-collection (fetch-tags-collection collection-name)))
