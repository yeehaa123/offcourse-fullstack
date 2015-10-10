(ns offcourse.views.index
  (:require [offcourse.views.containers.app :refer [app]]
            [offcourse.views.containers.main :refer [main]]
            [offcourse.views.containers.topbar :refer [topbar]]
            [offcourse.views.containers.sidebar :refer [sidebar]]
            [offcourse.views.containers.cards :refer [cards]]))

(defn home-page [appstate]
  [app appstate
   [sidebar appstate]
   [main
    [topbar appstate]
    [cards appstate]]])
