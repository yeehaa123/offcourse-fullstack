(ns offcourse.api.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [offcourse.api.service :as service]
            [offcourse.api.responder :as responder]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :not-found-data (go
                          #_(<! (timeout (rand-int 1000)))
                          (service/fetch payload))
        nil))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (responder/init channel)
    (listen-for-actions input)))
