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

(defn render [appstate handlers]
  (q/render (App (assoc appstate :mode :learn
                                 :user-id :unknown) handlers)
            (.querySelector js/document "#app"))
  (respond :rendered-view))

(defn- listen-for-actions [input]
  (go-loop []
    (let [{:keys [type payload]} (<! input)]
      (case type
        :updated-appstate  (>! channel (render (:appstate payload) handlers))
        :reloaded-appstate (>! channel (render (:appstate payload) handlers))
        nil))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (listen-for-actions input)))
