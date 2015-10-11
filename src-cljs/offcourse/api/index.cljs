(ns offcourse.api.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [>! <! timeout alts!]]
            [offcourse.api.service :as service]))

(defn listen-for-actions [{inputs :channels-in
                           output :channel-out}]
  (go-loop []
    (let [[{type :type payload :payload}] (alts! inputs)]
      (case type
        :fetch-collection (>! output (service/fetch-collection payload))
        :fetch-course     (>! output (service/fetch-course payload))
        :fetch-resource   (do
                            (<! (timeout (rand-int 3000)))
                            (>! output (service/fetch-resource payload)))))
    (recur)))

(defn init [config]
  (listen-for-actions config))
