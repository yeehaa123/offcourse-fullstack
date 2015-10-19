(ns offcourse.views.containers.app
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.containers.sidebar :refer [Sidebar]]
            [quiescent.dom :as d]))

(defn App [handlers appstate]
  (d/section {:className (css/classes "app" (:mode appstate) "waypoints")}
             (d/div {:className "layout-sidebar"}
                    (Sidebar (:sidebar (:viewmodel appstate))
                             handlers))
             (d/div {:className "layout-main"})))
