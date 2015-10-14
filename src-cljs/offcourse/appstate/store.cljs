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
      (case type
        :requested-resource     (do
                                  (>! output (model/get-data payload))
                                  (model/set-level store payload))
        :requested-level        (>! output (model/switch-route payload))
        :requested-done-toggle  (>! output (model/toggle-done payload))
        :requested-mode-toggle  (model/toggle-mode store)
        :requested-mode-switch  (model/set-mode store payload)
        :updated-course         (viewmodel/refresh store payload)
        :updated-checkpoint     (viewmodel/refresh store payload)
        :checked-datastore      (viewmodel/refresh store payload)
        (println type)))
    (recur)))

(defn init [config]
  (listen-for-actions config))


(defn new []
  (model/new-appstate))
