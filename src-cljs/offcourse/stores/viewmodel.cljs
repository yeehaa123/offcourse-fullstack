(ns offcourse.stores.viewmodel
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.services.api :as api]
            [offcourse.models.course :refer [update-course]]
            [cljs.core.async :refer [chan <! >!]]))

(def viewmodel (r/atom {:cards nil
                        :topbar nil
                        :sidebar nil}))

(def channel (chan))

(defn handle-collection [name data]
  (do (swap! viewmodel assoc :cards (map #(assoc %1 :type :course) data)
                             :sidebar nil
                             :topbar [name])))

(defn handle-update [name course]
  (let [id (course :id)
        card-ids (map #(%1 :id) (:cards viewmodel))
        in-cards (some #(= id %1) card-ids)]
    (cond
      (= in-cards) (do
                     (swap! viewmodel update-in [:cards] update-course course)
                     (swap! viewmodel assoc :sidebar course)))))

(defn handle-item [name course]
  (do (swap! viewmodel assoc :cards (map #(assoc %1 :type :checkpoint) (course :checkpoints))
                             :sidebar course
                             :topbar [(course :goal)])))

(defn update-viewmodel [{type :type name :name data :data}]
  (case type
    :collection (handle-collection name data)
    :update (handle-update name data)
    :item (handle-item name data)))

(defn listen-for-changes []
  (go-loop []
      (update-viewmodel (<! api/channel))
    (recur)))
