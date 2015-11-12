(ns offcourse.views.components.checkpoint-card
  (:require [quiescent.dom :as d]
            [offcourse.views.components.temp-components
             :refer [Map Checkbox Title Meta Tags CardSection GoToButton]]
            [offcourse.helpers.css :as css]))

(defn CheckpointCard
  ([checkpoint-id course resource handlers]
   (CheckpointCard checkpoint-id course resource handlers false))
  ([checkpoint-id
    {:keys [course-id goal] :as course}
    {:keys [url title content]}
    {:keys [go-to-checkpoint
            go-to-tag-collection] :as handlers}
    in-sidebar?]
   (let [checkpoint (get-in course [:checkpoints checkpoint-id])
         {:keys [highlighted completed task checkpoint-id tags]} checkpoint
         highlighted (if highlighted "highlighted" "not-highlighted")
         basic   [[:checkbox (Checkbox course-id checkpoint-id completed handlers)]
                  [:title (Title task)]
                  [:meta (if in-sidebar?
                           (Meta :title title
                                 :url url
                                 :goal goal)
                           (Meta :title title
                                 :url url))]
                  [:tags (Tags tags {:onClick go-to-tag-collection})]]
         extra    [:course-button (GoToButton course-id handlers)]
         sections (if in-sidebar? (conj basic extra) basic)]

     (d/section {:key checkpoint-id
                 :className (css/classes "card" highlighted)
                 :onClick #(go-to-checkpoint course-id checkpoint-id %1)}
                (map-indexed #(CardSection %1 %2) sections)))))
