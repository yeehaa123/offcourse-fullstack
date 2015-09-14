(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [clojure.string :as string]
            [offcourse.actions.index :as actions]))

(defn textbar [text {on-click :on-click}]
  [:button {:on-click on-click
            :class (css/classes "textbar")} text])

(defn logo [handlers]
  [:section {:class (css/classes "logo")}
   [textbar "_Offcourse" handlers]])

(defn home-route-button [route-name {on-click :on-click}]
  [:li.btn.btn-inverse.browse
   {:on-click #(on-click route-name)}
   (string/capitalize (name route-name))])

(defn home-route-buttons [route-names handlers]
  [:nav.card
   [:ul.card_section
    (for [route-name route-names]
      ^{:key route-name}[home-route-button route-name handlers])]])

(defn sidebar []
  [:section {:class (css/classes "sidebar")}
   [logo {:on-click actions/toggle-mode!}]
   [home-route-buttons
    [:featured :latest :best]
    {:on-click actions/go-to}]])
