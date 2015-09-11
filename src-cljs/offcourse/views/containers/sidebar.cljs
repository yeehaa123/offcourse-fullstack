(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.actions.index :as actions]))

(defn textbar [text handler]
  [:button {:on-click handler :class (css/classes "textbar")} text])

(defn logo [handler]
  [:section {:class (css/classes "logo")}
   [textbar "_Offcourse" handler]])

(defn sidebar []
  [:section {:class (css/classes "sidebar")}
   [logo actions/toggle-mode!]])
