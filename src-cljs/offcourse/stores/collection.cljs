(ns offcourse.stores.collection
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.session :as session]
            [offcourse.services.api :as api]
            [cljs.core.async :refer [chan <! >!]]))

(def collection (atom))
(def channel (chan))

(defn update-collection [api-data]
  (reset! collection api-data))

(defn listen-for-changes []
  (go-loop []
    (let [api-data (<! api/channel)]
      (update-collection api-data)
      (>! channel @collection))))
