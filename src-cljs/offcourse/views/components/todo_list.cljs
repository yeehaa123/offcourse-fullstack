(ns offcourse.views.components.todo-list
  (:require [offcourse.helpers.css :as css]
            [quiescent.dom :as d]))

(defn Checkbox [completed {:keys [toggle-done]}]
  (let [completed (if completed "complete" "incomplete")]
    (d/span {:className (css/classes "checkbox" completed)
             :onClick #(toggle-done)})))

(defn TodoListItem [[id completed title] {:keys [toggle-done]}]
  (let [toggle-done (partial toggle-done id)]
    (d/li {:key id
           :className (css/classes "todolist_item")}
          (d/p {}
               (Checkbox completed {:toggle-done toggle-done})
               (d/span {} title)))))

(defn TodoList [id items {:keys [toggle-done]}]
  (let [toggle-done (partial toggle-done id)]
    (d/ul {:className (css/classes "todolist")}
          (for [[_ {:keys [id completed task]}] items]
            (TodoListItem [id completed task] {:toggle-done toggle-done})))))
