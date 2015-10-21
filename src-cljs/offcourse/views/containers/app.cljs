(ns offcourse.views.containers.app
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.containers.sidebar :refer [Sidebar]]
            [offcourse.views.containers.topbar :refer [Topbar]]
            [offcourse.views.containers.cards :refer [Cards]]
            [quiescent.dom :as d]))

(defn App [handlers appstate]
  (d/section {:className (css/classes "app" (:mode appstate) "waypoints")}
             (d/div {:className "layout-sidebar"}
                    (Sidebar (:sidebar (:viewmodel appstate))
                             handlers))
             (d/div {:className "layout-right"}
                    (d/div {:className "layout-topbar"}
                           (Topbar (:topbar (:viewmodel appstate))
                                   handlers))
                    (d/div {:className "layout-main"}
                           (Cards (:main (:viewmodel appstate))
                                  handlers)))))
