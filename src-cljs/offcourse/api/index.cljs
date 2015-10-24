(ns offcourse.api.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [timeout <! >!]]
            [offcourse.api.service :as service]))

(defn listen-for-actions [{input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :updated-collection   (>! output (service/fetch-courses payload))
        :updated-course       (service/fetch-resources output payload)
        :not-found-collection (>! output (service/fetch-collection payload))
        :not-found-course     (>! output (service/fetch-course payload))
        nil))
    (recur)))

(defn init [config]
  (listen-for-actions config))
