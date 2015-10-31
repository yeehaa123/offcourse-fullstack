(ns offcourse.models.resource
  (:require [offcourse.models.fake-data :as fake-data]))

(defrecord Resource [url title content])

(defn new [url title]
  (Resource. url title fake-data/text))
