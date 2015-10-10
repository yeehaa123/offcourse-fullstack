(ns offcourse.core
  (:require [reagent.core :as reagent]
            [offcourse.views.index :as views]
            [offcourse.stores.appstate :as appstate-store]
            [offcourse.stores.data :as data-store]
            [offcourse.routes]
            [offcourse.services.history :as history]
            [offcourse.services.courses :as courses-service]
            [offcourse.services.resources :as resources-service]
            [offcourse.actions.index :as actions]
            [offcourse.actions.data :as data-actions]))

(defn mount-components [appstate]
  (reagent/render [#'views/home-page appstate]
                  (.querySelector js/document ".container")))

(defonce appstate (reagent/atom {:level {:type :initial}
                                 :mode :learn
                                 :course-collections [:featured :popular :new]
                                 :viewmodel {:cards []
                                             :sidebar {}
                                             :topbar {}}}))

(defrecord DataStore [collections courses])

(defn init! []

  (appstate-store/init {:appstate appstate
                        :channels [actions/channel]})

  (data-store/init     {:store (atom (->DataStore {} {}))
                        :channels [data-actions/channel
                                   courses-service/channel
                                   resources-service/channel]})
  (history/init!)
  (mount-components appstate))
