(ns offcourse.views.containers.cards
  (:require [reagent.session :as session]
            [offcourse.stores.viewmodel :refer [viewmodel]]
            [offcourse.actions.index :as actions]
            [offcourse.views.components.card :refer [card]]))

(defn cards []
  (let [collection (sort-by :id (:cards @viewmodel))
        handlers {:check-done actions/check-done
                  :go-to-course! actions/go-to-course!}]
    [:section.cards
     (for [item collection] ^{:key (item :id)}[card item handlers :cards])]))
