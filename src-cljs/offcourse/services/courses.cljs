(ns offcourse.services.courses
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [offcourse.channels :as channels]
            [cljs.core.async :refer [>!]]
            [offcourse.services.fake-data :refer [courses]]))

(def store (atom courses))

(defn fetch-collection [collection-name]
  (let [collection-ids {:featured [0 1 2 3]
                        :popular [0 2]
                        :new [1]}
        collection (->> collection-ids
                        collection-name
                        (map (fn [id] [id (get courses id)]))
                        (into {}))]
    (go
      (>! channels/api-out {:type :refresh-collection
                            :payload {:collection-name collection-name
                                      :collection-ids (collection-name collection-ids)
                                      :collection collection}}))))

(defn fetch-course [course-id]
  (let [course (get courses course-id)]
    (go
      (>! channels/api-out {:type :refresh-course
                            :payload {:course course}}))))
