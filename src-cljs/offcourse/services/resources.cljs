(ns offcourse.services.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [offcourse.channels :as channels]
            [cljs.core.async :refer [>! timeout]]
            [offcourse.services.fake-data :as fake-data]))

(defn fetch-resource [course-id checkpoint]
  (let [checkpoint-id (:id checkpoint)
        url (:url checkpoint)
        resource (get fake-data/resources url)]
    (go
      (<! (timeout (rand-int 3000)))
      (>! channels/api-out {:type :augment-checkpoint
                           :payload {:course-id course-id
                                     :checkpoint-id checkpoint-id
                                     :resource resource}}))))
