(ns offcourse.api.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [>! <! timeout alts!]]
            [offcourse.api.service :as service]))

(defn listen-for-actions [{input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (println "api: " type)
      (case type
        :collection-updated   (service/fetch-courses output payload)
        :course-updated       (service/fetch-resources output payload)
        :collection-not-found (>! output (service/fetch-collection payload))
        :course-not-found     (>! output (service/fetch-course payload))
        nil))
    (recur)))

(defn init [config]
  (listen-for-actions config))
