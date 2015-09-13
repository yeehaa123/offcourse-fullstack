(ns offcourse.core
  (:require [reagent.core :as reagent :refer [atom]]
            [offcourse.views.index :as views]
            [offcourse.stores.appstate :as appstate]
            [offcourse.routes]
            [offcourse.actions.index :as actions]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]])
  (:import goog.History))

(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          EventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

(defn mount-components []
  (reagent/render [#'views/home-page] (.querySelector js/document ".container")))

(defn init! []
  (appstate/init)
  (hook-browser-navigation!)
  (mount-components))
