(ns offcourse.appstate.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [offcourse.appstate.store :as store]
            [cljs.core.async :refer [>! chan tap mult merge]]
            [offcourse.appstate.service :as service]
            [cljs.core.async :refer [>! <!]]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-resource         (go
                                      (store/set-level payload)
                                      (>! channel (store/get-data payload)))
        :requested-commit           (>! channel (store/commit-data payload))
        :requested-level            (>! channel (service/switch-route payload))
        :requested-done-toggle      (>! channel (service/toggle-done payload))
        :requested-highlight-toggle (>! channel (store/toggle-highlight payload))
        :requested-mode-toggle      (store/toggle-mode)
        :requested-mode-switch      (store/set-mode payload)
        :updated-data               (>! channel (store/refresh payload))
        :checked-datastore          (>! channel (store/refresh payload))
        :added-checkpoint           (>! channel (service/return-to-course payload))
        :reloaded-code              (>! channel (store/force-refresh))
        :requested-authentication   (>! channel (service/request-authentication payload))
        :authenticated-user         (>! channel (store/set-user payload))
        nil))
    (recur)))


(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (listen-for-actions input)))
