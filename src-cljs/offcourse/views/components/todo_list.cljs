(ns offcourse.views.components.todo-list
  (:require [offcourse.helpers.css :as css]
            [offcourse.helpers.actions :refer [bind-handlers]]))

(defn checkbox [completed handlers]
  (let [status (if completed :complete :incomplete)
        check-done (handlers :check-done)
        classes (css/classes "checkbox" status)]
    [:span {:class classes :on-click #(check-done)}]))

(defn todo-list-item [item handlers]
  [:li.todolist_item
   [:p
    [checkbox
     (item :completed)
     (bind-handlers handlers (item :id))]
    [:span (item :task)]]])

(defn todo-list [items handlers]
  [:ul.todolist
   (map-indexed
    (fn [index item] ^{:key index} [todo-list-item item handlers])
    items)])
