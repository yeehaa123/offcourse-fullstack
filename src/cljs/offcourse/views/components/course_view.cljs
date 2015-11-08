(ns offcourse.views.components.course-view
  (:require [quiescent.dom :as d]
            [offcourse.views.components.checkpoint-card :refer [CheckpointCard]]
            [offcourse.helpers.css :as css]))

(defn CourseView [{:keys [level course resources]} handlers]
  (println "hi" course)
  (let [{:keys [course-id goal]} course
        collection (vals (:checkpoints course))]
    (d/section {:className "cards"}
               (map #(CheckpointCard %1
                                     course
                                     (get resources (:url %1))
                                     handlers)
                    collection))))
