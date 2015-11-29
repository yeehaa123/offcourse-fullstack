(ns offcourse.api.services.courses
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.courses :as cs]
            [offcourse.models.course :as co]
            [offcourse.api.responder :as r]))

(defn fetch-courses [course-ids]
  (let [courses (map #(cs/find-course fake-data/courses %1) course-ids)
        courses (map #(co/coerce-from-map %1) courses)]
    (r/respond-fetched-courses courses)))

(defn fetch-course [course-id]
  (let [course (co/coerce-from-map (cs/find-course fake-data/courses course-id))]
    (r/respond-fetched-course course)))
