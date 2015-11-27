(ns offcourse.views.components.course-card
  (:require [quiescent.dom :as d]
            [offcourse.models.course :as c]
            [offcourse.views.components.todo-list :refer [TodoList]]
            [offcourse.views.components.labels :refer [Labels]]
            [offcourse.views.components.temp-components
             :refer [Map Title Meta CardSection]]
            [offcourse.helpers.css :as css]))

(defn CourseCard
  ([course handlers](CourseCard course nil handlers))
  ([{:keys [highlighted checkpoints goal curator tags course-id] :as course}
    selected-tag
    {:keys [go-to-course highlight-label go-to-collection] :as handlers}]
  (let [highlighted (if highlighted "highlighted" "not-highlighted")
        sections [[:map (Map)]
                  [:title (Title goal)]
                  [:meta (Meta :curator curator
                               :learners 123
                               :handlers handlers)]
                  [:tags (Labels tags {:onClick (partial  go-to-collection :tags)
                                       :highlight (partial highlight-label :tags)})]
                  [:list (TodoList course-id checkpoints handlers)]]]
    (d/section {:key course-id
                :className (css/classes "card" highlighted)
                :onClick #(go-to-course course-id %1)}
               (map-indexed #(CardSection %1 %2) sections)))))
