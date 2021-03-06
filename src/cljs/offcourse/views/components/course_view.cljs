(ns offcourse.views.components.course-view
  (:require [quiescent.dom :as d]
            [offcourse.views.components.checkpoint-card :refer [CheckpointCard]]
            [offcourse.helpers.css :as css]))

(defn CourseView [{:keys [level course labels resources]} handlers]
  (let [{:keys [course-id goal]} course
        checkpoints (vals (:checkpoints course))]
    (d/section {:className "cards"}
               (map #(CheckpointCard %1
                                     course
                                     labels
                                     (get resources (:resource-url %1))
                                     handlers)
                    checkpoints))))
