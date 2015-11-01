(ns offcourse.models.resource
  (:require [offcourse.models.fake-data :as fake-data]))

(defrecord Resource [url title content])

(defn new
  ([resource] (map->Resource resource))
  ([url _]
   (let [{:keys [title text]} (fake-data/content)]
     (Resource. url title text)))
  ([url title content] (Resource. url title content)))

