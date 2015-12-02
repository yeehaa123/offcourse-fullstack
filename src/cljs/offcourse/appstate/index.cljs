(ns offcourse.appstate.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [offcourse.appstate.store :as store]
            [cljs.core.async :refer [>! chan tap mult merge]]
            [cljs.core.async :refer [>! <!]]
            [offcourse.appstate.responder :as responder]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :reloaded-code                  (store/force-refresh)
        :requested-level                (store/set-level payload)
        :requested-commit               (store/commit-data payload)
        :requested-route                (responder/switch-route payload)
        :requested-done-toggle          (responder/toggle-done payload)
        :requested-highlight-checkpoint (store/highlight-checkpoint payload)
        :requested-highlight-label      (store/highlight-label payload)
        :requested-mode-switch          (store/set-mode payload)
        :requested-authentication       (responder/request-authentication payload)
        :updated-data                   (store/refresh-viewmodel payload)
        :checked-datastore              (store/refresh-viewmodel payload)
        :added-checkpoint               (responder/return-to-course payload)
        :authenticated-user             (store/set-user payload)

        nil))
        (recur)))


(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (responder/init channel)
    (listen-for-actions input)))
