(ns offcourse.datastore.store
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [>! <!]]
            [offcourse.datastore.model :as model]))

(defn listen-for-actions [store {input  :channel-in
                                 output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-data        (>! output (model/get-data store payload))
        :fetched-collection    (>! output (model/update-collections store payload))
        :fetched-course        (>! output (model/update-course store payload))
        :fetched-resource      (>! output (model/augment-checkpoint store payload))
        :requested-toggle-done (>! output (model/toggle-done store payload))
        nil))
    (recur)))

(defn init [config]
  (let [store (model/new-datastore)]
    (listen-for-actions store config)))

(defn new []

  (model/new-datastore))
