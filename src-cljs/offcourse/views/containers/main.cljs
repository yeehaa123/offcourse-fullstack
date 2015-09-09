(ns offcourse.views.containers.main
  (:require [reagent.core :as r]
            [reagent.session :as session]))

(defn main []
  (let [this (r/current-component)
        [topbar content] (r/children this)]
    [:section
     [:div.layout-topbar topbar]
     [:div.layout-content content]]))
