(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.models.viewmodel :as viewmodel]
            [offcourse.models.appstate :as model]
            [offcourse.services.history :as history]
            [offcourse.actions.data :as data-actions]
            [cljs.core.async :refer [chan alts! <! >!]]))

(defn listen-for-actions [{store :store
                           channels :channels}]
  (go-loop []
    (let [[{type :type payload :payload}] (alts! channels)]
      (case type
        :go-to             (history/nav! payload)
        :set-level         (do
                             (data-actions/get-data payload)
                             (model/set-level store payload))
        :toggle-done       (data-actions/toggle-done payload)
        :toggle-mode       (model/toggle-mode! store)
        :set-mode          (model/set-mode! store payload)
        :refresh-viewmodel (viewmodel/update-viewmodel store payload)))
      (recur)))

(defn init [config]
  (listen-for-actions config))
