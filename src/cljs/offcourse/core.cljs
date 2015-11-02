(ns offcourse.core
  (:require [offcourse.views.index :as views]
            [offcourse.actions.index :as actions]
            [offcourse.appstate.index :as appstate]
            [offcourse.datastore.index :as datastore]
            [offcourse.environment.index :as environment]
            [offcourse.logger.index :as logger]
            [offcourse.user.index :as user]
            [offcourse.routes :as router]
            [offcourse.api.index :as courses-api]
            [offcourse.resources-api.index :as resources-api]
            [offcourse.history.service :as history]))

(defn init! []
  (actions/init)

  (router/init)

  (environment/init    [appstate/out])

  (user/init           [appstate/out])

  (appstate/init       [router/out
                        actions/out
                        user/out
                        datastore/out
                        views/out])

  (datastore/init      [appstate/out
                        courses-api/out
                        resources-api/out])

  (courses-api/init    [datastore/out])

  (resources-api/init  [datastore/out])

  (history/init        [appstate/out])

  (views/init          [appstate/out])

  #_(logger/init         [actions/out
                          environment/out
                          router/out
                          api/out
                          user/out
                          appstate/out
                          views/out
                          datastore/out]))

(defn reload []
  (actions/refresh))
