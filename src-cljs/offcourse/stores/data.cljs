(ns offcourse.stores.data
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout alts! <! >!]]
            [offcourse.models.datastore :as model]))

(defn listen-for-actions [{store  :store
                           input  :channel-in
                           output :channel-out}]

  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :get-data           (>! output (model/get-data store payload))
        :refresh-collection (>! output (model/refresh-collection store payload))
        :refresh-course     (do
                              (>! output (model/refresh-course store payload))
                              (>! output (model/get-resources store payload)))
        :toggle-done        (>! output (model/toggle-done store payload))
        :augment-checkpoint (>! output (model/augment-checkpoint store payload))))
    (recur)))


(defn init [config]
  (listen-for-actions config))
