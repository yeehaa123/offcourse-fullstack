(ns offcourse.views.containers.app
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [offcourse.actions.index :as actions]
            [offcourse.views.css-helpers :as css]))

(defn app []
  (let [this (r/current-component)
        [sidebar main] (r/children this)]
    [:section {:class (css/classes "app" (session/get :mode) "waypoints")}
     [:div.layout-sidebar sidebar]
     [:div.layout-main main]]))
