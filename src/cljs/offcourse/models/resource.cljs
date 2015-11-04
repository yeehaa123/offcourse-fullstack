(ns offcourse.models.resource
  (:require [offcourse.fake-data.index :as fake-data]))

(defrecord Resource [url title content])

(defn new
  ([resource] (map->Resource resource))
  ([url _]
   (let [{:keys [title text]} (fake-data/generate-content)]
     (Resource. url title text)))
  ([url title content] (Resource. url title content)))

(defn find-resource [collection url]
  (get collection url))

(defn find-resources [collection urls]
  (->> urls
       (map (fn [url][url (get collection url)]))
       (into {})))
