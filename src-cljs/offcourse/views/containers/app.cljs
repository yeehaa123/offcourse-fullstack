(ns offcourse.views.containers.app
  (:require [reagent.core :as r]
            [offcourse.actions.index :as actions]
            [offcourse.views.css-helpers :as css]))

(defn app []
  (let [this (r/current-component)
        mode ((r/props this) :mode)
        [[sidebar][main]] (r/children this)]
    [:section {:class (css/classes "app" mode "waypoints")}
     [:div.layout-sidebar
      [sidebar]]
     [:div.layout-main
      [main]]]))


