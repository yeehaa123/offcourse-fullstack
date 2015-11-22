(ns offcourse.api.services.users
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl]
            [offcourse.api.responder :as r]))

(defn fetch-all-users []
  (r/respond-fetched-users (cl/fetch-users fake-data/courses)))
