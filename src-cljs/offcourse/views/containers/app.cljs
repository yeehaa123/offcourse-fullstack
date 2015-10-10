(ns offcourse.views.containers.app
  (:require [reagent.core :as r]
            [offcourse.actions.index :as actions]
            [offcourse.helpers.css :as css]))

(defn app []
  (let [this (r/current-component)
        [appstate sidebar main] (r/children this)]
    [:section {:class (css/classes "app" (:mode @appstate) "waypoints")}
     [:div.layout-sidebar sidebar]
     [:div.layout-main main]]))
