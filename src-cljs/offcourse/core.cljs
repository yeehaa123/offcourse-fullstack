(ns offcourse.core
  (:require [offcourse.api.service :as api]
            [cljs.core.async :refer [merge chan mult tap]]
            [offcourse.views.index :as views]
            [offcourse.actions.index :as actions]
            [offcourse.appstate.store :as appstate-store]
            [offcourse.datastore.store :as datastore]
            [offcourse.history.service :as history]))

(defonce appstate (appstate-store/new))
(defonce data (datastore/new))

(defn init! []
  (let [actions            actions/channel
        api-out            (chan)
        datastore-out      (chan)
        appstate-data      (chan)
        api-in             (chan)
        appstate-out       (chan)
        history-in         (chan)
        data-appstate      (chan)
        datastore-out-mult (mult datastore-out)
        appstate-out-mult  (mult appstate-out)]

    (tap appstate-out-mult data-appstate)
    (tap appstate-out-mult history-in)

    (tap datastore-out-mult api-in)
    (tap datastore-out-mult appstate-data)

    (appstate-store/init {:store        appstate
                          :channel-in   (merge [actions appstate-data])
                          :channel-out  appstate-out})
    (datastore/init     {:store        data
                          :channel-in   (merge [data-appstate api-out])
                          :channel-out  datastore-out})
    (api/init            {:channel-in   api-in
                          :channel-out  api-out})
    (history/init!       {:channel-in   history-in})

    (views/mount-components appstate)))

(defn reload []
  (views/mount-components appstate))
