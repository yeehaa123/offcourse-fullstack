(ns offcourse.views.containers.sidebar
  (:require [offcourse.helpers.css :as css]
            [offcourse.views.components.logo :refer [logo]]
            [offcourse.views.components.card :refer [card]]
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

(defn Collection-Button [collection-name {on-click :on-click}]
  (d/button {:className "btn btn-inverse browse"
             :onClick #(on-click collection-name)}
            (string/capitalize (name collection-name))))

(defn Collections-Navigation [collection-names handlers]
  (d/nav {}
         (d/ul {}
               (for [collection-name collection-names]
                 (d/li {:key collection-name}
                       (Collection-Button collection-name handlers))))))

(defn Sidebar [viewmodel]
  (d/section {:className (css/classes "sidebar")}
             (d/section {:className (css/classes "logo")}
                        (d/button {:className (css/classes "textbar")}
                                  "Offcourse_"))
             (Collections-Navigation (:collection-names viewmodel)
                                     {:on-click actions/go-to-collection})))
