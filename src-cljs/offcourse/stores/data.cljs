(ns offcourse.stores.data
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout alts! <! >!]]
            [offcourse.stores.resources :as resources]
            [offcourse.stores.courses :as courses]
            [offcourse.models.datastore :as model]
            [offcourse.actions.api :as actions]))

(def store (atom {:collections {}
                  :courses {}}))

(defn listen-for-actions []
  (go-loop []
    (let [channels [actions/channel courses/channel resources/channel]
          [{type :type payload :payload}] (alts! channels)]
      (case type
        :get-data           (model/get-data store payload)
        :refresh-collection (model/refresh-collection store payload)
        :refresh-course     (do
                              (model/refresh-course store payload)
                              (model/get-resources store payload))
        :toggle-done        (model/toggle-done store payload)
        :augment-checkpoint (model/augment-checkpoint store payload)))
    (recur)))


(defn init []
  (listen-for-actions))
