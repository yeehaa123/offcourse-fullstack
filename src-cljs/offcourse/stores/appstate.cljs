(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.models.viewmodel :as viewmodel]
            [offcourse.models.appstate :as model]
            [offcourse.services.api :as api]
            [offcourse.services.history :as history]
            [offcourse.actions.index :as actions]
            [cljs.core.async :refer [chan alts! <! >!]]))

(defonce appstate (r/atom {:level "unchanged"
                           :mode :learn
                           :course-collections [:featured :popular :new]
                           :viewmodel {:cards []
                                       :sidebar {}
                                       :topbar {}}}))

(defn handle-client-actions [{type :type payload :payload}]
  (case type
    :go-to (history/nav! payload)
    :get-courses (api/get-courses payload)
    :get-course (api/get-course payload)
    :toggle-done (api/toggle-done! payload)
    :toggle-mode (model/toggle-mode! appstate)
    :set-mode (model/set-mode! appstate payload)))

(defn handle-api-actions [{type :type payload :payload}]
  (do
    (case type
      :collection (viewmodel/refresh-courses appstate payload)
      :item (viewmodel/refresh-course appstate payload)
      :update (viewmodel/update-course appstate payload)))
    (model/update-level appstate type))

(defn listen-for-actions []
  (go-loop []
    (let [channels [actions/channel api/channel]
          [action port] (alts! channels)]
      (cond
        (= port actions/channel) (handle-client-actions action)
        (= port api/channel)     (handle-api-actions action)))
      (recur)))

(defn init []
 (listen-for-actions))
