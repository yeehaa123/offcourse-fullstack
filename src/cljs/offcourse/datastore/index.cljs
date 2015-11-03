(ns offcourse.datastore.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require        [cljs.core.async :refer [>! chan tap merge mult <!]]
                   [offcourse.datastore.store :as store]
                   [offcourse.api.index :as api]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-data             (go
                                      (>! channel (store/get-data payload))
                                      (>! channel (store/check-resources payload)))
        :requested-commit           (>! channel (store/commit-data payload))
        :fetched-data               (go
                                      (>! channel (store/update-datastore payload))
                                      (>! channel (store/check-resources payload)))
        :requested-toggle-done      (>! channel (store/toggle-done payload))
        nil))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (listen-for-actions input)))
