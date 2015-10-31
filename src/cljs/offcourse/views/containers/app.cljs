(ns offcourse.views.containers.app
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.containers.sidebar :refer [Sidebar]]
            [offcourse.views.containers.topbar :refer [Topbar]]
            [offcourse.views.containers.cards :refer [Cards]]
            [markdown.core :refer [md->html]]
            [quiescent.dom :as d]))

(defn markdown [content]
  {:dangerouslySetInnerHTML {:__html (md->html content)}})

(defn Viewer [checkpoint]
  (if-let [content (:content (:resource checkpoint))]
    (d/section (markdown content))
    (d/section {} "Waiting")))

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
