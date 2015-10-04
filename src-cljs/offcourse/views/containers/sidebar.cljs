(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [logo]]
            [offcourse.views.components.card :refer [card]]
            [offcourse.stores.appstate :refer [appstate]]
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
  (let [collection-names (:course-collections @appstate)
        item (assoc (:sidebar (:viewmodel @appstate)) :type :course)
        level (:level @appstate)]
    [:section {:class (css/classes "sidebar")}
     [logo {:on-click #(actions/go-to-collection :featured)}]
     (case level
       :refresh-courses [course-collection-buttons collection-names {:on-click actions/go-to-collection}]
       :refresh-course [card item {:check-done actions/toggle-done} :sidebar]
       nil)]))
