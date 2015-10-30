(ns offcourse.views.index
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [chan tap merge mult <!]]
            [quiescent.core :as q]
            [quiescent.dom :as d]
            [offcourse.views.actions :as actions]
            [offcourse.views.containers.app :refer [App]]
            [offcourse.models.action :refer [respond]]))

(def channel (chan))
(def out (mult channel))
(def handlers (actions/init channel))

(defn- render [handlers appstate]
  (q/render (App handlers appstate)
            (.querySelector js/document "#app"))
  (respond :rendered-view))

(defn- listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :updated-appstate  (>! channel (render handlers (:appstate payload)))
        :reloaded-appstate (>! channel (render handlers (:appstate payload)))
        nil))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (listen-for-actions input)))
