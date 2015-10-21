(ns offcourse.views.components.card
  (:require [quiescent.dom :as d]
            [offcourse.views.components.todo-list :refer [TodoList]]
            [offcourse.helpers.css :as css]))


(comment (defn browse-course-button [{on-click :on-click}]
           [:div.btn.btn-inverse.browse
            {:on-click #(on-click)} "Open"])

         (defn browse-checkpoint-button [{on-click :on-click}]
           [:div.btn.btn-inverse.browse
            {:on-click #(on-click)} "Open"]))

(defn Title [title]
  (d/h1 {} title))

(defn Map []
  (d/div))

(defn Checkbox [course-id checkbox-id completed? {:keys [toggle-done]}]
  (let [completed (if completed? "complete" "incomplete")]
    (d/div {:className completed
            :onClick #(toggle-done course-id checkbox-id)})))

(defn CardSection [index [type data-key] item handlers]
  (d/div {:key index
          :className (css/type-classes "card_section" type)}
         (case type
           :map (Map)
           :checkbox (Checkbox (:course-id item) (:id item ) (data-key item) handlers)
           :title (Title (data-key item))
           :list (TodoList (:id item) (data-key item) handlers))))

(defn Card [schema item handlers]
  (d/section {:key (:id item)
              :className (css/classes "card")}
             (map-indexed #(CardSection %1 %2 item handlers) schema)))
