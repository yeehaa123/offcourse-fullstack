(ns offcourse.views.components.checkpoint-card
  (:require [quiescent.dom :as d]
            [offcourse.views.components.temp-components :refer [Map Title Meta Tags CardSection GoToButton]]
            [offcourse.helpers.css :as css]))

(defn CheckpointCard
  ([checkpoint course resource handlers] (CheckpointCard checkpoint course resource handlers false))
  ([{:keys [highlighted task id]}
    {:keys [course-id goal]}
    {:keys [url title content]}
    {:keys [go-to-checkpoint] :as handlers}
    in-sidebar?]
   (let [highlighted (if highlighted "highlighted" "not-highlighted")
         basic   [[:map (Map)]
                  [:title (Title task)]
                  [:meta (if in-sidebar?
                           (Meta :title title
                                 :url url
                                 :goal goal)
                           (Meta :title title
                                 :url url))]
                  [:tags (Tags ["React" "Angular" "FrontEnd"])]]
         extra    [:course-button (GoToButton course-id handlers)]
         sections (if in-sidebar? (conj basic extra) basic)]
     (d/section {:key id
                 :className (css/classes "card" highlighted)
                 :onClick #(go-to-checkpoint course-id id %1)}
                (map-indexed #(CardSection %1 %2) sections)))))
