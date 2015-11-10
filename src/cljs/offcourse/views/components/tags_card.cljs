(ns offcourse.views.components.tags-card
  (:require [quiescent.dom :as d]
            [offcourse.views.components.todo-list :refer [TodoList]]
            [offcourse.views.components.temp-components
             :refer [Map Title Meta Tags CardSection]]
            [offcourse.helpers.css :as css]))

(defn TagsCard [tags handlers]
  (let [highlighted (if false "highlighted" "not-highlighted")
        sections [[:tags (Tags tags handlers)]]]
    (d/section {:className (css/classes "card" highlighted)}
               (map-indexed #(CardSection %1 %2) sections))))
