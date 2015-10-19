(ns offcourse.views.index
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [quiescent.core :as q]
            [quiescent.dom :as d]
            [offcourse.views.actions :as actions]
            [offcourse.views.containers.app :refer [App]]))

(defn- render [handlers appstate]
  (q/render (App handlers @appstate)
            (.querySelector js/document ".container")))

(defn- listen-for-actions [{input    :channel-in
                           output   :channel-out
                           handlers :handlers}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :updated-viewmodel (render handlers (:appstate payload))
        nil))
    (recur)))

(defn init [config]
  (let [handlers (actions/init config)
        config (assoc config :handlers handlers)]
    (listen-for-actions config)))
