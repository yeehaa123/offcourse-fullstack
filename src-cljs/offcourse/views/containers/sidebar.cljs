(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [Logo]]
            [offcourse.views.components.card :refer [Card]]
            [offcourse.views.components.collections-navigation :refer [Collections-Navigation]]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.actions :as actions]))

(comment (defn sidebar [appstate]
  (let [collection-names (keys (:collections @appstate))
        item (:sidebar (:viewmodel @appstate))
        level (:type (:level @appstate))]
    [:section {:class (css/classes "sidebar")}
     [logo {:on-click #(actions/go-to-collection :featured)}]
     (case level
       :collection [course-collection-buttons collection-names {:on-click actions/go-to-collection}]
       :course [card (assoc item :type :course) {:check-done actions/toggle-done} :sidebar]
       :checkpoint [card (assoc item :type :checkpoint) {} :sidebar]
       :initial nil)])))

(defn Sidebar [{:keys [level collection-names schema item]} handlers]
  (d/section {:className (css/classes "sidebar")}
             (Logo handlers)
             (case level
               :collection (Collections-Navigation collection-names handlers)
               :course (Card schema item handlers)
               :checkpoint (Card schema item handlers))))
