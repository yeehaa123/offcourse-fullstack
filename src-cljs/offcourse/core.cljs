(ns offcourse.core
  (:require [offcourse.api.index :as api]
            [cljs.core.async :refer [merge chan mult tap]]
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
  (let [actions        actions/channel
        api-out        (chan)
        datastore-out  (chan)
        datastore-mult (mult datastore-out)
        appstate-data  (chan)
        appstate-in    (merge [actions appstate-data])
        api-in         (chan)
        appstate-out   (chan)
        datastore-in   (merge [appstate-out api-out])]

    (tap datastore-mult api-in)
    (tap datastore-mult appstate-data)

    (appstate-store/init {:store        appstate
                          :channel-in   appstate-in
                          :channel-out  appstate-out})
    (data-store/init     {:store        data
                          :channel-in   datastore-in
                          :channel-out  datastore-out})
    (api/init            {:channel-in   api-in
                          :channel-out  api-out}))
    (history/init!)
    (views/mount-components appstate))

(defn reload []
  (views/mount-components appstate))
