(ns offcourse.models.resource
  (:require [offcourse.models.fake-data :as fake-data]))

(defrecord Resource [url title content])

(defn new
  ([resource] (map->Resource resource))
  ([url title] (Resource. url title fake-data/text))
  ([url title content] (Resource. url title content)))

