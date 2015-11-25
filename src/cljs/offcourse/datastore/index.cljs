(ns offcourse.datastore.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require        [cljs.core.async :refer [>! chan tap merge mult <!]]
                   [offcourse.datastore.store :as store]
                   [offcourse.datastore.responder :as r]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-data             (store/get-data payload)
        :requested-toggle-done      (store/toggle-done payload)
        :requested-commit           (store/commit-data payload)
        :fetched-data               (store/update-datastore payload)
        nil))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (r/init channel)
    (listen-for-actions input)))
