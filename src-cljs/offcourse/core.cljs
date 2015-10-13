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
  (let [actions            actions/channel
        api-out            (chan)
        datastore-out      (chan)
        datastore-out-mult (mult datastore-out)
        appstate-data      (chan)
        appstate-in        (merge [actions appstate-data])
        api-in             (chan)
        appstate-out       (chan)
        history-in         (chan)
        data-appstate      (chan)
        appstate-out-mult  (mult appstate-out)]

    (tap datastore-out-mult api-in)
    (tap datastore-out-mult appstate-data)

    (tap appstate-out-mult data-appstate)
    (tap appstate-out-mult history-in)

    (appstate-store/init {:store        appstate
                          :channel-in   appstate-in
                          :channel-out  appstate-out})
    (data-store/init     {:store        data
                          :channel-in   (merge [data-appstate api-out])
                          :channel-out  datastore-out})
    (api/init            {:channel-in   api-in
                          :channel-out  api-out})
    (history/init!       {:channel-in   history-in})
    (views/mount-components appstate)))

(defn reload []
  (views/mount-components appstate))
