(ns offcourse.views.components.course-card
  (:require [quiescent.dom :as d]
            [offcourse.views.components.todo-list :refer [TodoList]]
            [offcourse.views.components.temp-components
             :refer [Map Title Meta Tags CardSection]]
            [offcourse.helpers.css :as css]))

(defn course-tags [checkpoints]
  (reduce (fn [acc [_ {:keys [tags]}]] (into acc tags)) #{} checkpoints))

(defn CourseCard [{:keys [highlighted checkpoints goal curator course-id] :as course}
                  {:keys [go-to-course] :as handlers}]
  (let [highlighted (if highlighted "highlighted" "not-highlighted")
        tags (course-tags checkpoints)
        sections [[:map (Map)]
                  [:title (Title goal)]
                  [:meta (Meta :curator curator
                               :learners 123
                               :forks 23)]
                  [:list (TodoList course-id checkpoints handlers)]
                  [:tags (Tags tags)]]]
    (d/section {:key course-id
                :className (css/classes "card" highlighted)
                :onClick #(go-to-course course-id %1)}
               (map-indexed #(CardSection %1 %2) sections))))
