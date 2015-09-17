(ns offcourse.stores.viewmodel
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.services.api :as api]
            [cljs.core.async :refer [chan <! >!]]))

(def cards (r/atom []))
(def topbar (r/atom [:none]))
(def sidebar (r/atom {}))

(def channel (chan))


(defn handle-collection [name data]
  (do (reset! cards (map #(assoc %1 :type :course) data))
      (reset! sidebar nil)
      (reset! topbar [name])))

(defn update-course [courses course]
  (let [courses (remove #(== (course :id) (:id %1)) courses)]
    (conj courses (assoc course :type :course))))

(defn handle-course [name course]
  (let [id (course :id)
        card-ids (map #(%1 :id) @cards)
        in-cards (some #(= id %1) card-ids)]
    (println in-cards)
    (if in-cards
      (swap! cards update-course course)
      (println "cool"))))

(defn update-viewmodel [{type :type name :name data :data}]
  (case type
    :collection (handle-collection name data)
    :course (handle-course name data)))

(defn listen-for-changes []
  (go-loop []
      (update-viewmodel (<! api/channel))
    (recur)))
