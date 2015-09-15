(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [logo]]
            [reagent.session :as session]
            [clojure.string :as string]
            [offcourse.actions.index :as actions]))

(defn course-collection-button [collection-name {on-click :on-click}]
  [:li.btn.btn-inverse.browse
   {:on-click #(on-click collection-name)}
   (string/capitalize (name collection-name))])

(defn course-collection-buttons [collection-names handlers]
  [:nav.card
   [:ul.card_section
    (for [route-name collection-names]
      ^{:key route-name}[course-collection-button route-name handlers])]])

(defn sidebar []
  (let [collection-names (session/get :course-collections)]
    [:section {:class (css/classes "sidebar")}
     [logo {:on-click actions/toggle-mode!}]
     [course-collection-buttons collection-names {:on-click actions/go-to!}]]))
