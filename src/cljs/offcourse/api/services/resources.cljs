(ns offcourse.api.services.resources
(:require [offcourse.fake-data.index :as fake-data]
          [offcourse.models.resource :as rs]
          [offcourse.api.responder :as r]))

(def all-resources
  (->> fake-data/urls
       (map-indexed (fn [index url]
                      [url (rs/new url (str "fake-resource " index))]))
       (into {})))

(defn fetch-resources [urls]
  (let [resources (map (fn [url] [url (all-resources url)]) urls)]
    (r/respond-fetched-resources resources)))
