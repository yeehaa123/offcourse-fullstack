(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [logo]]
            [reagent.session :as session]
            [clojure.string :as string]
            [offcourse.actions.index :as actions]))

(defn collection-name-button [collection-name {on-click :on-click}]
  [:li.btn.btn-inverse.browse
   {:on-click #(on-click collection-name)}
   (string/capitalize (name collection-name))])

(defn collection-name-buttons [collection-names handlers]
  [:nav.card
   [:ul.card_section
    (for [route-name collection-names]
      ^{:key route-name}[collection-name-button route-name handlers])]])

(defn sidebar []
  (let [collection-names (session/get :course-collections)]
    [:section {:class (css/classes "sidebar")}
     [logo {:on-click actions/toggle-mode!}]
     [collection-name-buttons collection-names {:on-click actions/go-to!}]]))
