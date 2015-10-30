(ns offcourse.user.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [>! chan merge mult tap]]
            [offcourse.user.service :as service]
            [offcourse.models.action :refer [respond]]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-authentication (>! channel (service/authenticate payload))
        nil))
    (recur)))


(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (listen-for-actions input)))
