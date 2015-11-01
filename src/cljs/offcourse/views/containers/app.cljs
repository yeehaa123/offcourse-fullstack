(ns offcourse.views.containers.app
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.containers.sidebar :refer [Sidebar]]
            [offcourse.views.containers.topbar :refer [Topbar]]
            [offcourse.views.containers.cards :refer [Cards]]
            [quiescent.dom :as d]))

(defn Viewer [checkpoint]
  (d/section {:className "viewer"}
             (if-let [content (:content (:resource checkpoint))]
               (d/article {:className "content"
                       :dangerouslySetInnerHTML {:__html content}})
               (d/div {} "Waiting"))))

(defn App [{:keys [viewmodel user-id mode]} handlers]
  (d/section {:className (css/classes "app" mode "waypoints")}
             (d/div {:className "layout-sidebar"}
                    (Sidebar viewmodel handlers))
             (d/div {:className "layout-right"}
                    (d/div {:className "layout-topbar"}
                           (Topbar viewmodel user-id handlers))
                    (d/div {:className "layout-main"}
                           (let [{:keys [checkpoint-id course]} viewmodel
                                 checkpoints (:checkpoints course)
                                 checkpoint (get checkpoints checkpoint-id)]
                             (case (:level viewmodel)
                               :checkpoint (Viewer checkpoint)
                               (Cards viewmodel handlers)))))))
