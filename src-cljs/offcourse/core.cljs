(ns offcourse.core
  (:require [reagent.core :as reagent :refer [atom]]
            [reagent.session :as session]
            [offcourse.views.index :as views]
            [offcourse.actions.index :as actions]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [markdown.core :refer [md->html]])
  (:import goog.History))


(defn page [] (views/home-page))

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (actions/set-text! "Hello World"))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          EventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app

(defn mount-components []
  (reagent/render [#'page] (.querySelector js/document ".container")))

(defn init! []
  (actions/fetch-docs!)
  (actions/set-mode! :curate)
  (hook-browser-navigation!)
  (mount-components))
