(ns offcourse.api.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [timeout <! >!]]
            [offcourse.api.service :as service :refer [internal]]))

(defn listen-for-actions [{input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [[{type :type payload :payload}] (alts! [input internal])]
      (case type
        :updated-data         (>! output (service/fetch-data payload))
        :not-found-data       (>! output (service/find-data payload))
        :requested-resource   (>! output (service/fetch-resource payload))
        nil))
    (recur)))

(defn init [config]
  (listen-for-actions config))
