(ns offcourse.stores.appstate
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as r]
            [offcourse.models.viewmodel :as viewmodel]
            [offcourse.models.appstate :as model]
            [offcourse.services.history :as history]
            [offcourse.actions.index :as actions]
            [offcourse.actions.api :as api-actions]
            [cljs.core.async :refer [chan alts! <! >!]]))

(defonce appstate (r/atom {:level {:type :initial}
                           :mode :learn
                           :course-collections [:featured :popular :new]
                           :viewmodel {:cards []
                                       :sidebar {}
                                       :topbar {}}}))

(defn listen-for-actions []
  (go-loop []
    (let [{type :type payload :payload} (<! actions/channel)]
      (case type
        :go-to             (history/nav! payload)
        :set-level         (do (model/set-level appstate payload)
                               (api-actions/get-data payload))
        :toggle-done       (api-actions/toggle-done payload)
        :toggle-mode       (model/toggle-mode! appstate)
        :set-mode          (model/set-mode! appstate payload)
        :refresh-viewmodel (viewmodel/update-viewmodel appstate payload)))
      (recur)))

(defn init []
  (listen-for-actions))
