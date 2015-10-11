(ns offcourse.views.components.logo
  (:require [offcourse.helpers.css :as css]
            [clojure.string :as string]
            [offcourse.actions.index :as actions]))

(defn textbar [text {on-click :on-click}]
  [:button {:on-click on-click
            :class (css/classes "textbar")} text])

(defn logo [handlers]
  [:section {:class (css/classes "logo")}
   [textbar "Offcourse_" handlers]])
