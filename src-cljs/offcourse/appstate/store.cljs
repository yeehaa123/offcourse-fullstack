(ns offcourse.appstate.store
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [offcourse.appstate.model :as model]
            [cljs.core.async :refer [>! <!]]))

(defn listen-for-actions [appstate {input :channel-in
                                 output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :added-checkpoint           (>! output (model/switch-route
                                                (assoc payload :level :course)))
        :requested-resource         (do
                                      (>! output (model/get-data payload))
                                      (model/set-level appstate payload))
        :requested-commit           (>! output (model/commit-data appstate payload))
        :requested-level            (>! output (model/switch-route payload))
        :requested-done-toggle      (>! output (model/toggle-done payload))
        :requested-highlight-toggle (>! output (model/toggle-highlight appstate payload))
        :requested-mode-toggle      (model/toggle-mode appstate)
        :requested-mode-switch      (model/set-mode appstate payload)
        :updated-course             (>! output (model/refresh appstate payload))
        :updated-checkpoint         (>! output (model/refresh appstate payload))
        :checked-datastore          (>! output (model/refresh appstate payload))
        :refresh                    (>! output (model/force-refresh appstate))
        nil))
    (recur)))

(defn init [config]
  (let [appstate (model/new-appstate)]
  (listen-for-actions appstate config)))
