(ns offcourse.api.service
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require        [cljs.core.async :refer [chan timeout <! >!]]
                   [offcourse.api.fake-data :as fake-data]
                   [offcourse.models.collection :as co]
                   [markdown.core :refer [md->html]]
                   [offcourse.models.action :refer [respond]]))

(defn fetch-collection [{collection-name :collection-name}]
  (let [collections {:featured (into #{} (take 10 (iterate inc 1)))
                     :popular (into #{} (take 5 (iterate inc 2)))
                     :new (into #{} (take 4 (iterate inc 4)))}
        collection-ids (collection-name collections)]
    (respond :fetched-data
             :type :collection
             :collection-name collection-name
             :collection-ids collection-ids)))

(defn fetch-course [{course-id :course-id :as payload}]
  (let [course (co/find-course fake-data/courses course-id)]
    (respond :fetched-data
             :type :course
             :course course)))

(defn fetch-courses [{course-ids :course-ids}]
  (let [courses (map #(co/find-course fake-data/courses %1) course-ids)]
    (respond :fetched-data
             :type :courses
             :courses courses)))

(defn fetch-data [{:keys [type] :as payload}]
  (case type
    :collection (fetch-courses payload)
    (respond :ignore)))

(defn find-data [{:keys [type store course-id] :as payload}]
  (case type
    :collection (fetch-collection payload)
    :courses    (fetch-courses payload)
    :course     (fetch-course payload)
    :resources  (respond :ignore)))
