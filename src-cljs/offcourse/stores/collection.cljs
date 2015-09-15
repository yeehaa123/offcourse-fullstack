(ns offcourse.stores.collection
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.session :as session]
            [offcourse.services.api :as api]
            [cljs.core.async :refer [chan <! >!]]))

(def collection (atom))
(def channel (chan))

(defn update-collection [api-data]
  (reset! collection api-data))

(defn handle-update-collection [{name :collection-name data :data}]
  (go
    (update-collection data)
    (>! channel {:collection-name name
                 :collection @collection})))

(defn listen-for-changes []
  (go-loop []
    (let [[data channel] (alts! [api/collection-channel api/model-channel])]
      (cond
        (= channel api/collection-channel) (do (handle-update-collection data))
        (= channel api/model-channel) (do (println "ji"))))
    (recur)))

