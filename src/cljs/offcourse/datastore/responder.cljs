(ns offcourse.datastore.responder
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [offcourse.protocols.validatable :refer [valid? check]]
            [offcourse.models.action :refer [respond]]))

(defn init [channel]

  (defn -respond [& response]
    (go
      (>! channel  (apply respond response))))

  (defn respond-updated [store]
    (if (valid? @store)
      (-respond :updated-data
                :store @store)
      (println "DS ERRORS " (check @store))))

  (defn respond-checked [store]
    (-respond :checked-datastore
              :store @store))

  (defn respond-not-found [type payload]
    (-respond :not-found-data
              :type type
              type payload)))
