(ns offcourse.courses-api.service
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.courses :as cs]
            [offcourse.models.course :as co]
            [offcourse.models.action :refer [respond]]))


(defn fetch-course [{course-id :course-id :as payload}]
  (let [course (cs/find-course fake-data/courses course-id)]
    (respond :fetched-data
             :type :course
             :course course)))

(defn fetch-courses [{course-ids :course-ids}]
  (let [courses (if (= :all course-ids)
                  (vals fake-data/courses)
                  (map #(cs/find-course fake-data/courses %1) course-ids))]
    (respond :fetched-data
             :type :courses
             :courses courses)))

(defn fetch-data [{:keys [type] :as payload}]
  (case type
    :collection (fetch-courses payload)
    (respond :ignore)))

(defn find-data [{:keys [type store course-id] :as payload}]
  (case type
    :tags             (respond :ignore)
    :collection-names (respond :ignore)
    :collection       (respond :ignore)
    :courses          (fetch-courses payload)
    :course           (fetch-course payload)
    :resources        (respond :ignore)))
