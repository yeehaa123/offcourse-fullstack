(ns offcourse.views.index
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [<!]]
            [offcourse.helpers.css :as css]
            [quiescent.core :as q]
            [offcourse.views.containers.sidebar :refer [Sidebar]]
            [offcourse.views.actions :as actions]
            [quiescent.dom :as d]))

(defn App [appstate]
  (d/section {:className (css/classes "app" (:mode appstate) "waypoints")}
             (d/div {:className "layout-sidebar"}
                    (Sidebar (:sidebar (:viewmodel appstate))))
             (d/div {:className "layout-main"})))

(defn rerender [appstate]
  (q/render (App @appstate)
            (.querySelector js/document ".container")))

(defn listen-for-actions [{input :channel-in
                           output :channel-out}]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :updated-viewmodel (rerender (:appstate payload))
        nil))
    (recur)))

(defn init [config]
  (actions/init config)
  (listen-for-actions config))
