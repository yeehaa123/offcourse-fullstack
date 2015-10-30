(ns offcourse.api.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [offcourse.api.service :as service :refer [internal]]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [[{type :type payload :payload}] (alts! [input internal])]
      (case type
        :not-found-data       (>! channel (service/find-data payload))
        :requested-data       (>! channel (service/fetch-resource payload))
        :checked-datastore    (>! channel (service/fetch-updates payload))
        nil))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (listen-for-actions input)))
