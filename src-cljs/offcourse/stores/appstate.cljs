(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.models.viewmodel :as viewmodel]
            [offcourse.models.appstate :as model]
            [offcourse.services.history :as history]
            [offcourse.actions.data :as data-actions]
            [cljs.core.async :refer [chan alts! <! >!]]))

(defn listen-for-actions [{appstate :appstate
                           channels :channels}]
  (go-loop []
    (let [[{type :type payload :payload}] (alts! channels)]
      (case type
        :go-to             (history/nav! payload)
        :set-level         (do
                             (data-actions/get-data payload)
                             (model/set-level appstate payload))
        :toggle-done       (data-actions/toggle-done payload)
        :toggle-mode       (model/toggle-mode! appstate)
        :set-mode          (model/set-mode! appstate payload)
        :refresh-viewmodel (viewmodel/update-viewmodel appstate payload)))
      (recur)))

(defn init [config]
  (listen-for-actions config))
