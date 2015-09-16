(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.session :as session]
            [cljs.core.async :refer [chan <! >!]]
            [offcourse.stores.viewmodel :as viewmodel]))

(defn listen-for-changes []
  (go-loop []
    (let [viewmodel (<! viewmodel/channel)]
      (println viewmodel)
      (session/put! :collection-name (viewmodel :collection-name))
      (session/put! :collection (viewmodel :collection))
      (session/put! :viewmodel viewmodel))
    (recur)))

(defn initialize-listeners []
  (viewmodel/listen-for-changes)
  (listen-for-changes))

(defn set-mode! [mode]
  (session/put! :mode mode))

(defn set-course-collections! [collections]
  (session/put! :course-collections collections))

(defn toggle-mode! []
  (let [current-mode (session/get :mode)]
    (if (= current-mode :learn)
      (set-mode! :curate)
      (set-mode! :learn))))

(defn init []
  (session/put! :collection-name :none)
  (set-mode! :learn)
  (set-course-collections! [:featured :popular :new])
  (initialize-listeners))
