(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.models.viewmodel :as viewmodel]
            [offcourse.models.appstate :as model]
            [offcourse.services.api :as api]
            [offcourse.stores.data :as ds]
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
    :get-checkpoint (api/get-checkpoint payload)
    :toggle-done (api/toggle-done! payload)
    :toggle-mode (model/toggle-mode! appstate)
    :set-mode (model/set-mode! appstate payload)))

(defn handle-ds-actions [{type :type payload :payload trigger :trigger}]
  (do
    (case type
      :refresh-courses (viewmodel/refresh-courses appstate payload)
      :refresh-course (viewmodel/refresh-course appstate payload)
      :refresh-checkpoint (viewmodel/refresh-checkpoint appstate payload)
      :update-course (viewmodel/update-course appstate payload)))
    (model/update-level appstate type))

(defn listen-for-actions []
  (go-loop []
    (let [channels [actions/channel ds/channel]
          [action port] (alts! channels)]
      (cond
        (= port actions/channel) (handle-client-actions action)
        (= port ds/channel)     (handle-ds-actions action)))
      (recur)))

(defn init []
  (actions/fetch-docs!)
  (history/init!)
  (listen-for-actions))
