(ns offcourse.api.responder
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [offcourse.models.action :refer [respond]]))

(defn init [channel]

  (defn respond-fetched [field data]
    (println field)
    (go
      (>! channel (respond :fetched-data
                           :type field
                           field data))))

  (def respond-fetched-courses
    (partial respond-fetched :courses))

  (def respond-fetched-course
    (partial respond-fetched :course))

  (def respond-fetched-flags
    (partial respond-fetched :flags))

  (def respond-fetched-collection-names
    (partial respond-fetched :collection-names))

  (def respond-fetched-collection
    (partial respond-fetched :collection))

  (def respond-fetched-users
    (partial respond-fetched :users))

  (def respond-fetched-resources
    (partial respond-fetched :resources))

  (def respond-fetched-tags
    (partial respond-fetched :tags)))
