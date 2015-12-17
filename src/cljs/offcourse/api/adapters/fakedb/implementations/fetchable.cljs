(ns offcourse.api.adapters.fakedb.implementations.fetchable
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan alts! mult tap merge timeout <! >!]]
            [offcourse.models.resource :as rs]
            [offcourse.models.resources :as rss]
            [offcourse.fake-data.api :as api]))

(defmulti fetch
  (fn [collection-type _ _]
    collection-type))

(defmethod fetch :resources [type {:keys [resource-urls]}]
  (let [channel (chan)
        resources (->> resource-urls
                       (api/fetch type)
                       (map #(rs/coerce-from-map %1))
                       (rss/->resources))]
    (go
      (>! channel resources))
    channel))


(defmethod fetch :resource [type {:keys [resource-url]}]
  (let [channel (chan)
        resource (rs/coerce-from-map (api/fetch type resource-url))]
    (go
      (>! channel resource))
    channel))
