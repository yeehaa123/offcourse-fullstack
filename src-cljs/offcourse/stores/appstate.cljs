(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [offcourse.models.viewmodel :as viewmodel]
            [offcourse.models.appstate :as model]
            [offcourse.services.history :as history]
            [cljs.core.async :refer [>! <!]]))

(defn listen-for-actions [{store :store
                           input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (println "appstate:" type)
      (case type
        :route-switch-requested (>! output (model/switch-route payload))
        :level-switch-requested (do
                                  (>! output (model/get-data payload))
                                  (model/set-level store payload))
        :done-toggle-requested  (>! output (model/toggle-done payload))
        :mode-toggle-requested  (model/toggle-mode! store)
        :mode-switch-requested  (model/set-mode! store payload)
        :course-updated         (viewmodel/update-viewmodel store payload)
        :checkpoint-updated     (viewmodel/update-viewmodel store payload)
        :datastore-checked      (viewmodel/update-viewmodel store payload)
        nil))
    (recur)))

(defn init [config]
  (listen-for-actions config))
