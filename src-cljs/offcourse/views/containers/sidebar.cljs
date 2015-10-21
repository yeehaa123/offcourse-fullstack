(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [Logo]]
            [offcourse.views.components.card :refer [Card]]
            [offcourse.views.components.collections-navigation :refer [Collections-Navigation]]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.actions :as actions]))

(defn Sidebar [{:keys [level collection-names schema item]} handlers]
  (d/section {:className (css/classes "sidebar")}
             (Logo handlers)
             (case level
               :collection (Collections-Navigation collection-names handlers)
               :course (Card schema item handlers)
               :checkpoint (Card schema item handlers))))
