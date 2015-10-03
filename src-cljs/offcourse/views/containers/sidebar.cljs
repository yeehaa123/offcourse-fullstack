(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [logo]]
            [offcourse.views.components.card :refer [card]]
            [offcourse.stores.appstate :refer [appstate]]
            [reagent.session :as session]
            [clojure.string :as string]
            [offcourse.actions.index :as actions]))

(defn course-collection-button [collection-name {on-click :on-click}]
  [:li.btn.btn-inverse.browse
   {:on-click #(on-click collection-name)}
   (string/capitalize (name collection-name))])

(defn course-collection-buttons [collection-names handlers]
  [:nav
   [:ul
    (for [route-name collection-names]
      ^{:key route-name}[course-collection-button route-name handlers])]])

(defn sidebar []
  (let [collection-names (session/get :course-collections)
        item (assoc (:sidebar (:viewmodel @appstate)) :type :course)
        level (:level @appstate)]
    [:section {:class (css/classes "sidebar")}
     [logo {:on-click #(actions/go-to! "featured")}]
     (case level
       :collection [course-collection-buttons collection-names {:on-click actions/go-to!}]
       :item [card item {:check-done actions/check-done} :sidebar]
       nil)]))
