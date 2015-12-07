(ns offcourse.datastore.index
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require        [cljs.core.async :refer [>! chan tap merge mult <!]]
                   [offcourse.datastore.store :as store]
                   [offcourse.datastore.responder :as r]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-data             (store/check-store payload)
        :requested-toggle-done      (store/modify-store :toggle-done payload)
        :fetched-data               (store/refresh-store payload)
        nil))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (r/init channel)
    (listen-for-actions input)))
