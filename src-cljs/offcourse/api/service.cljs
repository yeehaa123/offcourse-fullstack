(ns offcourse.api.service
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [timeout <! >!]]
             [offcourse.api.fake-data :as fake-data]
             [offcourse.models.action :refer [respond]]))

(defn fetch-collection [{collection-name :collection-name}]
  (let [collections {:featured [0 1 2 3]
                     :popular [0 2]
                     :new [1]}
        collection-ids (collection-name collections)]
    (respond :fetched-collection
             :collection-name collection-name
             :collection-ids collection-ids)))

(defn fetch-course [{course-id :course-id}]
  (let [course (get fake-data/courses course-id)]
    (respond :fetched-course
             :course course)))

(defn fetch-courses [output {course-ids :course-ids}]
  (doseq [course-id course-ids]
    (go
      (>! output (fetch-course {:course-id course-id})))))

(defn fetch-resource [{:keys [course-id checkpoint]}]
  (let [checkpoint-id (:id checkpoint)
        checkpoint-url (:url checkpoint)
        resource (get fake-data/resources checkpoint-url)]
    (respond :fetched-resource
             :course-id course-id
             :checkpoint-id checkpoint-id
             :resource resource)))

(defn fetch-resources [output {:keys [course-id store] :as payload}]
  (let [checkpoints (vals (:checkpoints (get (:courses @store) course-id)))]
    (doseq [checkpoint checkpoints]
      (go
        (>! output (fetch-resource {:course-id course-id
                                    :checkpoint checkpoint}))))))

(defn listen-for-actions [{input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (println "api: " type)
      (case type
        :collection-updated   (fetch-courses output payload)
        :course-updated       (fetch-resources output payload)
        :collection-not-found (>! output (fetch-collection payload))
        :course-not-found     (>! output (fetch-course payload))
        nil))
    (recur)))

(defn init [config]
  (listen-for-actions config))
