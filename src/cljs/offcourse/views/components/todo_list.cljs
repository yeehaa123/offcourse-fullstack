(ns offcourse.views.components.todo-list
  (:require [offcourse.helpers.css :as css]
            [quiescent.dom :as d]))


(defn Checkbox [completed {:keys [toggle-done]}]
  (let [completed (if completed "complete" "incomplete")]
    (d/span {:className (css/classes "checkbox" completed)
             :onClick toggle-done})))

(defn TodoListItem [[checkpoint-id completed highlighted title]
                    {:keys [toggle-done go-to-checkpoint highlight]}]
  (let [highlighted (if highlighted "highlighted" "not-highlighted")
        toggle-done (partial toggle-done checkpoint-id)
        go-to-checkpoint (partial go-to-checkpoint checkpoint-id)
        highlight (partial highlight checkpoint-id)]
    (d/li {:key checkpoint-id
           :className (css/classes "todolist_item" highlighted)
           :onMouseEnter #(highlight true)
           :onMouseLeave #(highlight false)}
          (d/p {}
               (Checkbox completed {:toggle-done toggle-done})
               (d/span {:onClick go-to-checkpoint} title)))))


(defn TodoList [course-id items {:keys [toggle-done go-to-checkpoint highlight]}]
  (let [toggle-done (partial toggle-done course-id)
        go-to-checkpoint (partial go-to-checkpoint course-id)
        highlight (partial highlight course-id)]
    (d/ul {:className (css/classes "todolist")}
          (for [[_ {:keys [checkpoint-id completed highlighted task]}] items]
            (TodoListItem [checkpoint-id completed highlighted task]
                          {:toggle-done toggle-done
                           :go-to-checkpoint go-to-checkpoint
                           :highlight highlight})))))
