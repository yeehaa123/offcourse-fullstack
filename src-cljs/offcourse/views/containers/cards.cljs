(ns offcourse.views.containers.cards
  (:require [reagent.session :as session]
            [offcourse.views.components.card :refer [card]]))

(defn cards []
  (let [collection (session/get :collection)]
  [:section.cards
   (for [item collection] ^{:key (item :goal)}[card item])]))
