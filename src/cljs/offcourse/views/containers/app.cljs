(ns offcourse.views.containers.app
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.containers.sidebar :refer [Sidebar]]
            [offcourse.views.containers.topbar :refer [Topbar]]
            [offcourse.views.containers.cards :refer [Cards]]
            [offcourse.views.components.collection-view :refer [CollectionView]]
            [offcourse.views.components.course-view :refer [CourseView]]
            [offcourse.views.components.viewer :refer [Viewer]]
            [markdown.core :refer [md->html]]
            [quiescent.dom :as d]))

(defn App [{:keys [viewmodel user-id mode]} handlers]
  (d/section {:className (css/classes "app" mode "waypoints")}
             (d/div {:className "layout-sidebar"}
                    (Sidebar viewmodel handlers))
             (d/div {:className "layout-right"}
                    (d/div {:className "layout-topbar"}
                           (Topbar viewmodel user-id handlers))
                    (d/div {:className "layout-main"}
                           (let [{:keys [course resource]} viewmodel]
                             (case (:level viewmodel)
                               :tags (CollectionView viewmodel handlers)
                               :collection (CollectionView viewmodel handlers)
                               :course (CourseView viewmodel handlers)
                               :checkpoint (Viewer resource)))))))
