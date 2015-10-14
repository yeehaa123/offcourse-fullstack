(ns offcourse.core
  (:require [offcourse.api.service :as api]
            [cljs.core.async :refer [merge pipeline chan mult tap]]
            [offcourse.views.index :as views]
            [offcourse.actions.index :as actions]
            [offcourse.appstate.store :as appstate-store]
            [offcourse.datastore.store :as datastore]
            [offcourse.logger.service :as logger]
            [offcourse.history.service :as history]))

(defonce appstate (appstate-store/new))
(defonce data (datastore/new))

(defn init! []
  (let [actions-appstate   (chan)
        actions-log        (chan)
        actions-out-mult   (mult actions/channel)

        appstate-datastore (chan)
        appstate-log       (chan)
        appstate-out       (chan)
        appstate-out-mult  (mult appstate-out)

        datastore-appstate (chan)
        datastore-api      (chan)
        datastore-log      (chan)
        datastore-out      (chan)
        datastore-out-mult (mult datastore-out)

        api-datastore      (chan)
        api-log            (chan)
        api-out            (chan)
        api-out-mult       (mult api-out)

        history-in         (chan)
        appstate-in        (merge [actions-appstate datastore-appstate])
        datastore-in       (merge [appstate-datastore api-datastore])
        api-in             datastore-api

        logger-in          (merge [actions-log api-log appstate-log datastore-log] 10)]

    (tap actions-out-mult actions-appstate)
    (tap actions-out-mult actions-log)

    (tap appstate-out-mult appstate-datastore)
    (tap appstate-out-mult history-in)
    (tap appstate-out-mult appstate-log)

    (tap datastore-out-mult datastore-api)
    (tap datastore-out-mult datastore-appstate)
    (tap datastore-out-mult datastore-log)

    (tap api-out-mult api-datastore)
    (tap api-out-mult api-log)

    (appstate-store/init {:store        appstate
                          :channel-in   appstate-in
                          :channel-out  appstate-out})

    (datastore/init      {:store        data
                          :channel-in   datastore-in
                          :channel-out  datastore-out})

    (api/init            {:channel-in   api-in
                          :channel-out  api-out})

    (history/init!       {:channel-in   history-in})

    (logger/init         {:channel-in   logger-in})

    (views/mount-components appstate)))

(defn reload []
  (views/mount-components appstate))
