(ns offcourse.views.components.card
  (:require [offcourse.views.components.todo-list :refer [todo-list]]
            [offcourse.actions.index :as actions]))

(defn card [item]
  [:section.card
   [:h1.title (item :goal)]
   [todo-list (item :checkpoints) {:check-done actions/check-done}]])
