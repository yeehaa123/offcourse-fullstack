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

(defn handle-client-action [{type :type :as msg}]
  (case type
    :go-to (history/nav! (:location msg))
    :get-courses (api/get-courses (:keyword msg))
    :get-course (api/get-course (:id msg))
    :toggle-done (api/toggle-done! (:course-id msg) (:checkpoint-id msg))
    :toggle-mode (model/toggle-mode! appstate)
    :set-mode (model/set-mode! appstate (:mode msg))))

(defn handle-server-action [{type :type name :name data :data :as action}]
  (do
    (case type
      :collection (viewmodel/refresh-courses appstate name data)
      :item (viewmodel/refresh-course appstate name data)
      :update (viewmodel/update-course appstate name data)))
    (model/update-level appstate type))

(defn listen-for-actions []
  (go-loop []
    (let [channels [actions/channel api/channel]
          [action port] (alts! channels)]
      (cond
        (= port actions/channel) (handle-client-action action)
        (= port api/channel)     (handle-server-action action)))
      (recur)))

(defn init []
 (listen-for-actions))
