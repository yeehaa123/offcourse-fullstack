(ns offcourse.core
  (:require [offcourse.api.index :as api]
            [cljs.core.async :refer [merge chan]]
            [offcourse.views.index :as views]
            [offcourse.actions.index :as actions]
            [offcourse.stores.appstate :as appstate-store]
            [offcourse.stores.data :as data-store]
            [offcourse.services.history :as history]
            [offcourse.models.datastore :refer [new-datastore]]
            [offcourse.models.appstate :refer [new-appstate]]))

(defonce appstate (new-appstate))
(defonce data (new-datastore))

(defn init! []
  (let [appstate-in   actions/channel
        api-out       (chan)
        datastore-out (chan)
        appstate-out  (chan)
        datastore-in  (merge [appstate-out api-out])]

    (appstate-store/init {:store        appstate
                          :channel-in   appstate-in
                          :channel-out  appstate-out})
    (data-store/init     {:store        data
                          :channel-in   datastore-in
                          :channel-out  datastore-out})
    (api/init            {:channel-in   datastore-out
                          :channel-out  api-out}))
    (history/init!)
    (views/mount-components appstate))

(defn reload []
  (views/mount-components appstate))
