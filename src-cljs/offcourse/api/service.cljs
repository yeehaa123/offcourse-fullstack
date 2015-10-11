(ns offcourse.api.service
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan >!]]
             [offcourse.services.fake-data :as fake-data]
             [offcourse.models.action :refer [respond]]))


(def internal (chan))

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

(defn fetch-resource [{:keys [course-id checkpoint-id checkpoint-url]}]
  (let [resource (get fake-data/resources checkpoint-url)]
    (respond :augment-checkpoint
             :course-id course-id
             :checkpoint-id checkpoint-id
             :resource resource)))

(defn fetch-resources [input {:keys [course-id checkpoints]}]
  (doseq [checkpoint checkpoints]
    (go
      (>! internal (respond :fetch-resource
                         :course-id course-id
                         :checkpoint-id (:id checkpoint)
                         :checkpoint-url (:url checkpoint))))))
