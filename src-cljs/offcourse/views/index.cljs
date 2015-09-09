(ns offcourse.views.index
  (:require [reagent.session :as session]
            [offcourse.views.containers.app :refer [app]]
            [offcourse.views.containers.main :refer [main]]
            [offcourse.views.containers.topbar :refer [topbar]]
            [offcourse.views.containers.sidebar :refer [sidebar]]
            [offcourse.views.containers.cards :refer [cards]]))

(defn home-page []
  [app
   [sidebar]
   [main
    [topbar]
    [cards]]])
