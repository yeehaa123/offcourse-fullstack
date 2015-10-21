(ns offcourse.views.containers.cards
  (:require [offcourse.views.components.card :refer [Card]]
            [quiescent.dom :as d]))

(def schema
  {:course         {:checkbox :completed
                    :title :task}
   :collection     {:map nil
                    :title :goal
                    :list :checkpoints}})

(defn Cards [{:keys [level course collection]} handlers]
  (let [course-id (:id course)
        collection (vals collection)
        collection (case level
                     :collection (sort-by :id collection)
                     :course (reverse (sort-by :highlighted
                                               (map #(assoc %1 :course-id course-id)
                                                    (vals (:checkpoints course)))))
                     nil)]
    (d/section {:className "cards"}
               (for [item collection]
                 (Card (level schema) item handlers)))))
