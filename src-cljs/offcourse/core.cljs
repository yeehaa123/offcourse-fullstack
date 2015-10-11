(ns offcourse.core
  (:require [offcourse.channels :as channels]
            [offcourse.views.index :as views]
            [offcourse.stores.appstate :as appstate-store]
            [offcourse.stores.data :as data-store]
           [offcourse.services.history :as history]
            [offcourse.models.datastore :refer [new-datastore]]
            [offcourse.models.appstate :refer [new-appstate]]))

(defonce appstate (new-appstate))
(defonce data (new-datastore))

(defn init! []
  (appstate-store/init {:store    appstate
                        :channels [channels/appstate-in]})
  (data-store/init     {:store    data
                        :channels [channels/datastore-in
                                   channels/api-out]})
  (history/init!)
  (views/mount-components appstate))

(defn reload []
  (views/mount-components appstate))
