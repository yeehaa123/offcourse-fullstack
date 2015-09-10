(ns offcourse.views.components.todo-list)

(defn todo-list-item [item handlers]
  [:li.todolist_item
   [:p
    [:span [:input.checkbox {:type "checkbox"
                             :on-change (handlers :check-done)
                             :checked (item :completed)}]]
    [:span (item :task)]]])

(defn todo-list [items handlers]
  [:ul.todolist
   (map-indexed
    (fn [index item] ^{:key index} [todo-list-item item handlers]) items)])
