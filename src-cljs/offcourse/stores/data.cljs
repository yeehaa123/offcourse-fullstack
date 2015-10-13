(ns offcourse.stores.data
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [>! <!]]
            [offcourse.models.datastore :as model]))

(defn listen-for-actions [{store  :store
                           input  :channel-in
                           output :channel-out}]

  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (println "data: " type)
      (case type
        :data-requested        (>! output (model/get-data store payload))
        :fetched-collection    (>! output (model/update-collections store payload))
        :fetched-course        (>! output (model/update-course store payload))
        :fetched-resource      (>! output (model/augment-checkpoint store payload))
        :done-toggle-requested (>! output (model/toggle-done store payload))
        nil))
    (recur)))


(defn init [config]
  (listen-for-actions config))
