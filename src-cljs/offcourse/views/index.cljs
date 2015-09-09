(ns offcourse.views.index
  (:require [reagent.session :as session]
            [offcourse.views.containers.app :refer [app]]
            [offcourse.views.containers.sidebar :refer [sidebar]]
            [offcourse.views.containers.topbar :refer [topbar]]
            [offcourse.views.containers.main :refer [main]]))

(defn home-page []
  [app
   [sidebar]
   [main
    [topbar]
    [:h2 "ho"]]])
