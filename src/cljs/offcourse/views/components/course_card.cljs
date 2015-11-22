(ns offcourse.views.components.course-card
  (:require [quiescent.dom :as d]
            [offcourse.views.components.todo-list :refer [TodoList]]
            [offcourse.views.components.tags :refer [Tags]]
            [offcourse.views.components.temp-components
             :refer [Map Title Meta CardSection]]
            [offcourse.helpers.css :as css]))

(defn course-tags [checkpoints]
  (reduce (fn [acc [_ {:keys [tags]}]] (into acc tags)) #{} checkpoints))

(defn CourseCard
  ([course handlers](CourseCard course nil handlers))
  ([{:keys [highlighted checkpoints goal curator course-id] :as course}
    selected-tag
    {:keys [go-to-course
            go-to-tag-collection] :as handlers}]
  (let [highlighted (if highlighted "highlighted" "not-highlighted")
        tags (course-tags checkpoints)
        sections [[:map (Map)]
                  [:title (Title goal)]
                  [:meta (Meta :curator curator
                               :learners 123
                               :handlers handlers)]
                  [:tags (Tags tags {:onClick go-to-tag-collection})]
                  [:list (TodoList course-id checkpoints handlers)]]]
    (d/section {:key course-id
                :className (css/classes "card" highlighted)
                :onClick #(go-to-course course-id %1)}
               (map-indexed #(CardSection %1 %2) sections)))))
