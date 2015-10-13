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
        :go-to               (history/nav! payload)
        :set-level           (do
                               (>! output (model/get-data payload))
                               (model/set-level store payload))
        :toggle-done         (>! output (model/toggle-done payload))
        :toggle-mode         (model/toggle-mode! store)
        :set-mode            (model/set-mode! store payload)
        :updated-course      (viewmodel/update-viewmodel store payload)
        :updated-checkpoint  (viewmodel/update-viewmodel store payload)
        :checked-courses     (viewmodel/update-viewmodel store payload)
        nil))
      (recur)))

(defn init [config]
  (listen-for-actions config))
