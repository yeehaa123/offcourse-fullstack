(ns offcourse.stores.courses
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.actions.index :as actions]
            [offcourse.services.fake-data :as fake-data]
            [offcourse.models.checkpoint :as checkpoint]))

(def channel (chan 10))

(defn fetch-collection [collection-name]
  (let [collection-ids {:featured [0 1 2 3]
                        :popular [0 2]
                        :new [1]}
        collection (->> collection-ids
                        collection-name
                        (map (fn [id] [id (get fake-data/courses id)]))
                        (into {}))]
    (go
      (>! channel {:type :refresh-collection
                   :payload {:collection-name collection-name
                             :collection-ids (collection-name collection-ids)
                             :collection collection}}))))

(defn fetch-course [course-id]
  (let [course (get fake-data/courses course-id)]
    (go
      (>! channel {:type :refresh-course
                   :payload {:course course}}))))
