(ns offcourse.views.components.course-view
  (:require [quiescent.dom :as d]
            [offcourse.views.components.checkpoint-card :refer [CheckpointCard]]
            [offcourse.helpers.css :as css]))

(defn CourseView [{:keys [level course resources]} handlers]
  (let [{:keys [id goal]} course
        course (assoc course :course-id id)
        collection (vals (:checkpoints course))]
    (d/section {:className "cards"}
               (map #(CheckpointCard %1 course (get resources (:url %1)) handlers) collection))))
