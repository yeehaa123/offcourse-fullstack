(ns offcourse.views.components.collection-view
  (:require [quiescent.dom :as d]
            [offcourse.views.components.course-card :refer [CourseCard]]
            [offcourse.helpers.css :as css]))

(defn CollectionView [{:keys [collection courses]} handlers]
  (let [{:keys [collection-name collection-type]} collection
        courses (vals courses)]
    (d/section {:className "cards"}
               (if (= collection-type :tag-collection)
                 (map #(CourseCard %1 collection-name handlers) courses)
                 (map #(CourseCard %1 handlers) courses)))))
