(ns offcourse.appstate.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [offcourse.appstate.store :as store]
            [cljs.core.async :refer [>! chan tap mult merge]]
            [offcourse.appstate.service :as service]
            [cljs.core.async :refer [>! <!]]
            [offcourse.appstate.responder :as responder]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-resource         (store/set-level payload)
        :requested-commit           (store/commit-data payload)
        :requested-level            (service/switch-route payload)
        :requested-done-toggle      (service/toggle-done payload)
        :requested-highlight-toggle (store/highlight-checkpoint payload)
        :requested-highlight-label  (store/highlight-label payload)
        :requested-mode-toggle      (store/toggle-mode)
        :requested-mode-switch      (store/set-mode payload)
        :updated-data               (store/refresh payload)
        :checked-datastore          (store/refresh payload)
        :added-checkpoint           (service/return-to-course payload)
        :reloaded-code              (store/force-refresh)
        :requested-authentication   (service/request-authentication payload)
        :authenticated-user         (store/set-user payload)
        nil))
        (recur)))


(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (responder/init channel)
    (listen-for-actions input)))
