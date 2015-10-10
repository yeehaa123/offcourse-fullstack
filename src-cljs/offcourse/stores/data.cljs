(ns offcourse.stores.data
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout alts! <! >!]]
            [offcourse.models.datastore :as model]))


(defn listen-for-actions [{store :store
                           channels :channels}]

  (go-loop []
    (let [[{type :type payload :payload}] (alts! channels)]
      (case type
        :get-data           (model/get-data store payload)
        :refresh-collection (model/refresh-collection store payload)
        :refresh-course     (do
                              (model/refresh-course store payload)
                              (model/get-resources store payload))
        :toggle-done        (model/toggle-done store payload)
        :augment-checkpoint (model/augment-checkpoint store payload)))
    (recur)))


(defn init [config]
  (listen-for-actions config))
