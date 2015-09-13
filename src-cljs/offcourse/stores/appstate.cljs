(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.session :as session]
            [cljs.core.async :refer [chan <! >!]]
            [offcourse.actions.index :as actions]
            [offcourse.stores.collection :as collection]))

(defn listen-for-changes []
  (go-loop []
    (let [collection (<! collection/channel)]
      (session/put! :collection collection))))

(defn initialize-listeners []
  (collection/listen-for-changes)
  (listen-for-changes))

(defn init []
  (actions/fetch-docs!)
  (actions/fetch-courses)
  (initialize-listeners))

(defn set-mode! [mode]
  (session/put! :mode mode))

(defn toggle-mode! []
  (let [current-mode (session/get :mode)]
    (if (= current-mode :learn)
      (set-mode! :curate)
      (set-mode! :learn))))
