(ns offcourse.api.fake-data
  (:require [offcourse.models.checkpoint :as cp]
            [offcourse.models.course :as co]
            [offcourse.models.resource :as r]))

(def urls ["facebook.com"
           "google.com"
           "yahoo.com"
           "offcourse.io"])

(def courses
  (->> (take 100 (iterate inc 1))
       (map-indexed (fn [id _] [id (assoc (co/generate-fake-course) :id id)]))
       (into {})))

(def resources
  (->> urls
       (map-indexed (fn [index url]
                      (if (= url "google.com")
                        [url (r/new "offcourse.io" (str "fake-resource " index))]
                        [url (r/new url (str "fake-resource " index))])))
       (into {})))
