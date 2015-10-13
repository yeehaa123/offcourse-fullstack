(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.models.viewmodel :as viewmodel]
            [offcourse.models.appstate :as model]
            [offcourse.services.history :as history]
            [offcourse.actions.data :as data-actions]
            [cljs.core.async :refer [chan alts! <! >!]]))

(defn listen-for-actions [{store :store
                           input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :go-to             (history/nav! payload)
        :set-level         (do
                             (>! output (model/get-data payload))
                             (model/set-level store payload))
        :toggle-done       (>! output (model/toggle-done payload))
        :toggle-mode       (model/toggle-mode! store)
        :set-mode          (model/set-mode! store payload)
        :refresh-viewmodel (viewmodel/update-viewmodel store payload)
        nil))
      (recur)))

(defn init [config]
  (listen-for-actions config))
