(ns offcourse.api.service
  (:require [offcourse.services.fake-data :as fake-data]
            [offcourse.models.action :refer [respond]]))

(defn fetch-collection [{collection-name :collection-name}]
  (let [collections {:featured [0 1 2 3]
                     :popular [0 2]
                     :new [1]}
        collection-ids (collection-name collections)
        collection (->> collection-ids
                        (map (fn [id] [id (get fake-data/courses id)]))
                        (into {}))]
    (respond :refresh-collection
             :collection-name collection-name
             :collection-ids collection-ids
             :collection collection)))

(defn fetch-course [{course-id :course-id}]
  (let [course (get fake-data/courses course-id)]
    (respond :refresh-course
             :course course)))

(defn fetch-resource [{:keys [course-id checkpoint]}]
  (let [checkpoint-id (:id checkpoint)
        url (:url checkpoint)
        resource (get fake-data/resources url)]
    (respond :augment-checkpoint
             :course-id course-id
             :checkpoint-id checkpoint-id
             :resource resource)))
