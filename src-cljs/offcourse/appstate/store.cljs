(ns offcourse.appstate.store
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [offcourse.appstate.viewmodel :as viewmodel]
            [offcourse.appstate.model :as model]
            [cljs.core.async :refer [>! <!]]))

(defn listen-for-actions [{store :store
                           input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (println "appstate:" type)
      (case type
        :resource-requested     (do
                                  (>! output (model/get-data payload))
                                  (model/set-level store payload))
        :level-requested        (>! output (model/switch-route payload))
        :done-toggle-requested  (>! output (model/toggle-done payload))
        :mode-toggle-requested  (model/toggle-mode store)
        :mode-switch-requested  (model/set-mode store payload)
        :course-updated         (viewmodel/refresh store payload)
        :checkpoint-updated     (viewmodel/refresh store payload)
        :datastore-checked      (viewmodel/refresh store payload)
        nil))
    (recur)))

(defn init [config]
  (listen-for-actions config))


(defn new []
  (model/new-appstate))
