(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.session :as session]
            [reagent.core :as r]
            [offcourse.models.viewmodel :as viewmodel]
            [offcourse.services.api :as api]
            [cljs.core.async :refer [chan <! >!]]))

(defonce appstate (r/atom {:level "unchanged"
                           :mode :learn
                           :course-collections [:featured :popular :new]
                           :viewmodel {:cards []
                                       :sidebar {}
                                       :topbar []}}))

(defn update-level [appstate type]
  (if-not (= type :update)
    (swap! appstate assoc :level type)))

(defn listen-for-changes []
  (go-loop []
    (let [{type :type :as changes} (<! api/channel)]
      (viewmodel/update-viewmodel appstate changes)
      (update-level appstate type))
    (recur)))

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
  (set-mode! :learn)
  (set-course-collections! [:featured :popular :new])
  (listen-for-changes))
