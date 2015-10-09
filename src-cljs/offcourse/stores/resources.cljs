(ns offcourse.stores.resources
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.actions.index :as actions]
            [offcourse.services.fake-data :as fake-data]
            [offcourse.models.checkpoint :as checkpoint]))

(def channel (chan))

(defn fetch-resource [course-id checkpoint]
  (let [checkpoint-id (:id checkpoint)
        url (:url checkpoint)
        resource (get fake-data/resources url)]
    (go
      (<! (timeout (rand-int 3000)))
      (>! channel {:type :augment-checkpoint
                   :payload {:course-id course-id
                             :checkpoint-id checkpoint-id
                             :resource resource}}))))
