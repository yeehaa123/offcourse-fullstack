(ns offcourse.api.services.collections
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl :refer [map->Collection]]
            [offcourse.api.responder :as r]))

(defn fetch-collection [collection-type collection-name]
  (r/respond-fetched-collection
   (cl/fetch collection-type fake-data/courses collection-name)))

(defn fetch-collection-names []
  (let  [collections (->> [:users :flags :tags]
                          (map (fn [type] [type (cl/fetch-names type fake-data/courses)]))
                          (into {}))]
    (r/respond-fetched-collection-names collections)))
