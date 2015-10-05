(ns offcourse.views.containers.cards
  (:require [reagent.session :as session]
            [offcourse.stores.appstate :refer [appstate]]
            [offcourse.actions.index :as actions]
            [offcourse.views.components.card :refer [card]]))

(defn cards []
  (let [collection (sort-by :id (:cards (:viewmodel @appstate)))
        handlers {:check-done actions/toggle-done
                  :go-to-course actions/go-to-course
                  :go-to-checkpoint (partial actions/go-to-checkpoint 0)}]
    [:section.cards
     (for [item collection] ^{:key (item :id)}[card item handlers :cards])]))
