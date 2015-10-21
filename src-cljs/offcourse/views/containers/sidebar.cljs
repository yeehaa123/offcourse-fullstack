(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [Logo]]
            [offcourse.views.components.card :refer [Card]]
            [offcourse.views.components.collections-navigation :refer [Collections-Navigation]]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.actions :as actions]))

(def schema
  {:checkpoint {:checkbox :completed
                :title :task}
   :course     {:map nil
                :title :goal
                :list :checkpoints}})

(defn Sidebar [{:keys [level collection-names course checkpoint-id]} handlers]
    (d/section {:className (css/classes "sidebar")}
               (Logo handlers)
               (case level
                 :collection (Collections-Navigation collection-names handlers)
                 :course (Card (level schema) course handlers)
                 :checkpoint (Card (level schema) (get-in course [:checkpoints checkpoint-id]) handlers))))
