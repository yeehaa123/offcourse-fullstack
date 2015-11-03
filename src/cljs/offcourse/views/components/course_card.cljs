(ns offcourse.views.components.course-card
  (:require [quiescent.dom :as d]
            [offcourse.views.components.todo-list :refer [TodoList]]
            [offcourse.views.components.temp-components
             :refer [Map Title Meta Tags CardSection]]
            [offcourse.helpers.css :as css]))

(defn CourseCard [{:keys [highlighted checkpoints goal curator id]}
            {:keys [go-to-course] :as handlers}]
  (let [highlighted (if highlighted "highlighted" "not-highlighted")
        sections [[:map (Map)]
                  [:title (Title goal)]
                  [:meta (Meta :curator curator
                               :learners 123
                               :forks 23)]
                  [:list (TodoList id checkpoints handlers)]
                  [:tags (Tags ["React" "Angular" "FrontEnd"])]]]

    (d/section {:key id
                :className (css/classes "card" highlighted)
                :onClick #(go-to-course id)}
               (map-indexed #(CardSection %1 %2) sections))))
