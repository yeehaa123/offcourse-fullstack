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

(defn browse-checkpoint-button [{on-click :on-click}]
  [:div.btn.btn-inverse.browse
   {:on-click #(on-click)} "Open"])

(defn sidebar-cards [item handlers]
  (let [id (item :id)
        type (item :type)
        handlers (bind-handlers handlers id)]
    (case type
      :course      [layout
                    ^{:type :map}    [:div]
                    ^{:type :title}  [:h1 (item :goal)]
                    ^{:type :list}   [todo-list (sort-by :id (vals (item :checkpoints))) handlers]]
      :checkpoint  [layout
                    ^{:type :map}    [:div {:class (if (:completed item) "complete" "incomplete")}]
                    ^{:type :title}  [:h1 (item :task)]
                    ^{:type :title}  [:h1 (:title (:resource item))]
                    ^{:type :url}    [:p (:url (:resource item))]])))

(defn main-cards [item handlers]
  (let [id (item :id)
        type (item :type)
        handlers (bind-handlers handlers id)]
  (case type
    :course      [layout
                  ^{:type :map}    [:div]
                  ^{:type :title}  [:h1 (item :goal)]
                  ^{:type :list}   [todo-list (sort-by :id (vals (item :checkpoints))) handlers]
                  ^{:type :button} [browse-course-button {:on-click (handlers :go-to-course)}]]
    :checkpoint  [layout
                  ^{:type :map}    [:div {:class (if (:completed item) "complete" "incomplete")}]
                  ^{:type :title}  [:h1 (item :task)]
                  ^{:type :title}  [:h1 (:title (:resource item))]
                  ^{:type :url}    [:p (:url (:resource item))]
                  ^{:type :button} [browse-checkpoint-button {:on-click (:go-to-checkpoint handlers)}]])))

(defn card [item handlers context]
    (case context
      :sidebar (sidebar-cards item handlers)
      :cards (main-cards item handlers)))
