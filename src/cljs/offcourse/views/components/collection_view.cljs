(ns offcourse.views.components.collection-view
  (:require [quiescent.dom :as d]
            [offcourse.views.components.course-card :refer [CourseCard]]
            [offcourse.helpers.css :as css]))

(defn CollectionView [{:keys [level collection courses]} handlers]
  (let [collection (sort-by :course-id (vals courses))]
    (d/section {:className "cards"}
               (map #(CourseCard %1 handlers) collection))))
