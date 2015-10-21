(ns offcourse.views.containers.cards
  (:require [offcourse.views.components.card :refer [Card]]
            [quiescent.dom :as d]))

(defn Cards [cards-data handlers]
  (let [level (:level cards-data)
        course-id (:id (:course cards-data))
        collection (case level
                     :collection (sort-by :id (:courses cards-data))
                     :course (map #(assoc %1 :course-id course-id)
                                  (vals (:checkpoints (:course cards-data))))
                     nil)
        handlers {:toggle-done (:toggle-done handlers)
                  :go-to-course (:go-to-course handlers)
                  :highlight (:highlight handlers)
                  :go-to-checkpoint (:go-to-checkpoint handlers)}]
    (d/section {:className "cards"}
               (for [item collection]
                 (Card (:schema cards-data) item handlers)))))
