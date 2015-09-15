(ns offcourse.views.components.card
  (:require [reagent.core :as r]
            [offcourse.helpers.css :as css]
            [offcourse.views.components.todo-list :refer [todo-list]]
            [offcourse.helpers.actions :refer [bind-handlers]]))

(defn section [child]
  (let [type (:type (meta child))]
    [:div
     {:class (css/type-classes "card_section" type)}
     child]))

(defn layout []
  (let [this (r/current-component)
        children (r/children this)]
    [:section.card
     (map-indexed (fn [index child]
                    ^{:key index} [section child])
                    children)]))

(defn browse-course-button [{on-click :on-click}]
  [:div.btn.btn-inverse.browse
   {:on-click #(on-click)} "Open"])

(defn card [item handlers]
  (let [handlers (bind-handlers handlers (item :id))]
    [layout
     ^{:type :title}  [:h1 (item :goal)]
     ^{:type :list}   [todo-list (sort-by :id (item :checkpoints)) handlers]
     ^{:type :button} [browse-course-button {:on-click (handlers :go-to-course!)}]]))



