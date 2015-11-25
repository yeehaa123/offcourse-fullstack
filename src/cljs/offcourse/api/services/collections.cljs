(ns offcourse.api.services.collections
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl :refer [map->Collection]]
            [offcourse.api.responder :as r]))


#_(defn fetch-all-tags []
  (r/respond-fetched-tags (cl/fetch-tags fake-data/courses)))

(defn fetch-all-flags []
  (r/respond-fetched-flags (cl/fetch-flags fake-data/courses)))

(defn fetch-flag-collection [collection-name]
  (r/respond-fetched-collection (map->Collection (cl/find-flag-collection fake-data/courses collection-name))))

(defn fetch-user-collection [collection-name]
  (r/respond-fetched-collection (map->Collection (cl/find-user-collection fake-data/courses collection-name))))

(defn fetch-tag-collection [collection-name]
  (r/respond-fetched-collection (map->Collection (cl/find-tag-collection fake-data/courses collection-name))))

(defn fetch-collection [{:keys [collection-type collection-name] :as c}]
  (case collection-type
    :users (fetch-user-collection collection-name)
    :flags (fetch-flag-collection collection-name)
    :tags (fetch-tag-collection collection-name)))
