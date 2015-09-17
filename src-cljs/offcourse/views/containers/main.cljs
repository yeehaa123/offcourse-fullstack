(ns offcourse.views.containers.main
  (:require [reagent.core :as r]))

(defn main-layout
  ([content] [:section
             [:div.layout-content content]])
  ([topbar content] [:section
                    [:div.layout-topbar topbar]
                    [:div.layout-content content]]))

(defn main []
  (let [this (r/current-component)
        children (r/children this)]
       (apply main-layout children)))
