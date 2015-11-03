(ns offcourse.views.components.checkpoint-card
  (:require [quiescent.dom :as d]
            [offcourse.views.components.temp-components
             :refer [Map Title Meta Tags CardSection]]
            [offcourse.helpers.css :as css]))

(defn GoToButton
  ([course-id {:keys [go-to-course]}]
   (d/div {:className "btn btn-inverse browse"
           :onClick #(go-to-course course-id)} "Open"))
  ([course-id checkpoint-id {:keys [go-to-checkpoint]}]
   (d/div {:className "btn btn-inverse browse"
           :onClick #(go-to-checkpoint course-id checkpoint-id)} "Open")))

(defn CheckpointCard [{:keys [highlighted task id]}
                      {:keys [course-id course-goal]}
                      {:keys [url title content]}
                      {:keys [go-to-checkpoint] :as handlers}]
  (let [highlighted (if highlighted "highlighted" "not-highlighted")
        sections [[:map (Map)]
                  [:title (Title task)]
                  [:meta (Meta :title title)]
                  [:tags (Tags ["React" "Angular" "FrontEnd"])]]]
    (d/section {:key id
                :className (css/classes "card" highlighted)
                :onClick #(go-to-checkpoint course-id id %1)}
               (map-indexed #(CardSection %1 %2) sections))))
