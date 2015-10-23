(ns offcourse.datastore.index
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [>! <!]]
            [offcourse.datastore.store :as store]))

(defn listen-for-actions [{input  :channel-in
                                 output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-data             (>! output (store/get-data payload))
        :requested-commit           (>! output (store/commit-data payload))
        :fetched-collection         (>! output (store/update-collections payload))
        :fetched-course             (>! output (store/update-course payload))
        :fetched-resource           (>! output (store/augment-checkpoint payload))
        :requested-toggle-done      (>! output (store/toggle-done payload))
        :requested-toggle-highlight (>! output (store/toggle-highlight payload))
        nil))
    (recur)))

(defn init [config]
  (listen-for-actions config))
