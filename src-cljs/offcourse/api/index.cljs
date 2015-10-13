(ns offcourse.api.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [>! <! timeout alts!]]
            [offcourse.api.service :as service]))

(defn listen-for-actions [{input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :fetch-collection (>! output (service/fetch-collection payload))
        :fetch-course     (>! output (service/fetch-course payload))
        :fetch-resources  (service/fetch-resources input payload)
        :fetch-resource   (>! output (service/fetch-resource payload))
        nil))
    (recur)))

(defn init [config]
  (listen-for-actions config))
