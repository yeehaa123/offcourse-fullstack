(ns offcourse.stores.viewmodel
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.services.api :as api]
            [offcourse.models.course :as course]
            [cljs.core.async :refer [chan <! >!]]))

(def cards (r/atom []))
(def topbar (r/atom [:none]))
(def sidebar (r/atom {}))

(def channel (chan))

(defn handle-collection [name data]
  (do (reset! cards (map #(assoc %1 :type :course) data))
      (reset! sidebar nil)
      (reset! topbar [name])))

(defn handle-update [name course]
  (let [id (course :id)
        card-ids (map #(%1 :id) @cards)
        in-cards (some #(= id %1) card-ids)]
    (cond
      (= in-cards) (swap! cards course/update-course course))))

(defn handle-new [name course]
  (do (reset! cards (map #(assoc %1 :type :checkpoint) (course :checkpoints)))
      (reset! sidebar course)
      (reset! topbar [(course :goal)])))

(defn update-viewmodel [{type :type name :name data :data}]
  (case type
    :collection (handle-collection name data)
    :update (handle-update name data)
    :new (handle-new name data)))

(defn listen-for-changes []
  (go-loop []
      (update-viewmodel (<! api/channel))
    (recur)))
