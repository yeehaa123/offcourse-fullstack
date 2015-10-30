(ns offcourse.core
  (:require [offcourse.api.index :as api]
            [cljs.core.async :refer [merge pipeline chan mult tap]]
            [offcourse.views.index :as views]
            [offcourse.actions.index :as actions]
            [offcourse.appstate.index :as appstate]
            [offcourse.datastore.index :as datastore]
            [offcourse.logger.service :as logger]
            [offcourse.user.service :as user]
            [offcourse.routes :as router]
            [offcourse.history.service :as history]))

(defn init! []
  (actions/init)

  (router/init)

  (appstate/init       [router/out
                        actions/out
                        datastore/out
                        views/out])

  (user/init           [appstate/out])

  (datastore/init      [appstate/out
                        api/out])

  (api/init            [datastore/out])

  (history/init!       [appstate/out])

  (views/init          [appstate/out])

  (logger/init         [actions/out
                        router/out
                        api/out
                        user/out
                        appstate/out
                        views/out
                        datastore/out]))
(defn reload []
  (actions/refresh))
