(ns offcourse.api.service
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require        [cljs.core.async :refer [timeout <! >!]]
                   [offcourse.api.fake-data :as fake-data]
                   [offcourse.models.action :refer [respond]]))

(defn fetch-collection [{collection-name :collection-name}]
  (let [collections {:featured [0 1 2 3]
                     :popular [0 2]
                     :new [1]}
        collection-ids (collection-name collections)]
    (respond :fetched-data
             :type :collection
             :collection-name collection-name
             :collection-ids collection-ids)))

(defn fetch-course [{course-id :course-id}]
  (let [course (get fake-data/courses course-id)]
    (respond :fetched-data
             :type :course
             :course course)))

(defn fetch-courses [{course-ids :course-ids}]
  (let [courses (map #(get fake-data/courses %1) course-ids)]
    (respond :fetched-data
             :type :courses
             :courses courses)))

(defn fetch-resource [{:keys [course-id checkpoint]}]
  (let [checkpoint-id (:id checkpoint)
        checkpoint-url (:url checkpoint)
        resource (get fake-data/resources checkpoint-url)]
    (respond :fetched-data
             :type :resource
             :course-id course-id
             :checkpoint-id checkpoint-id
             :resource resource)))

(defn fetch-resources [output {:keys [course-id store] :as payload}]
  (let [checkpoints (vals (:checkpoints (get (:courses @store) course-id)))]
    (doseq [checkpoint checkpoints]
      (go
        (>! output (fetch-resource {:course-id course-id
                                    :checkpoint checkpoint}))))))
