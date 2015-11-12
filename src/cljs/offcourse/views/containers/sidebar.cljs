(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [Logo]]
            [offcourse.views.components.card :refer [Card]]
            [offcourse.views.components.collections-navigation :refer [Collections-Navigation]]
            [offcourse.views.components.course-card :refer [CourseCard]]
            [offcourse.views.components.tags-card :refer [TagsCard]]
            [offcourse.views.components.checkpoint-card :refer [CheckpointCard]]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.actions :as actions]))

(defn Sidebar [{:keys [level tag-names user-names collection-names
                       course resource collection checkpoint-id] :as vm} handlers]
  (d/section {:className (css/classes "sidebar")}
             (d/div {:className "sidebar-logo"}
                    (Logo handlers))
             (case level
               :collection (Collections-Navigation collection collection-names tag-names user-names handlers)
               :course (CourseCard course handlers)
               :checkpoint (CheckpointCard checkpoint-id course resource handlers true))))
