(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.session :as session]
            [cljs.core.async :refer [chan <! >!]]
            [offcourse.stores.collection :as collection]))

(defn listen-for-changes []
  (go-loop []
    (let [collection (<! collection/channel)]
      (session/put! :collection collection))
    (recur)))

(defn initialize-listeners []
  (collection/listen-for-changes)
  (listen-for-changes))

(defn init []
  (initialize-listeners))

(defn set-mode! [mode]
  (session/put! :mode mode))

(defn toggle-mode! []
  (let [current-mode (session/get :mode)]
    (if (= current-mode :learn)
      (set-mode! :curate)
      (set-mode! :learn))))
