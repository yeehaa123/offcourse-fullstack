(ns offcourse.views.containers.cards
  (:require [reagent.session :as session]
            [offcourse.actions.index :as actions]
            [offcourse.views.components.card :refer [card]]))

(defn cards []
  (let [collection (sort-by :id (session/get :collection))
        handlers {:check-done actions/check-done}]
  [:section.cards
   (for [item collection] ^{:key (item :goal)}[card item handlers])]))
