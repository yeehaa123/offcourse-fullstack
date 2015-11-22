(ns offcourse.api.services.tags
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl]
            [offcourse.api.responder :as r]))

(defn fetch-all-tags []
  (r/respond-fetched-tags (cl/fetch-tags fake-data/courses)))
