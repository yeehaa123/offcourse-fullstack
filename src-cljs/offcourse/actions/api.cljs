(ns offcourse.actions.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [offcourse.channels :as channels]
            [cljs.core.async :refer [chan <! >!]]
            [ajax.core :refer [GET POST]]))

(defn send-action
  ([type](send-action type {}))
  ([type payload](go
                   (let [action {:type type
                                 :payload payload}]
                     (>! channels/datastore-in action)))))

(defn toggle-done [payload]
  (send-action :toggle-done payload))

(defn get-data [payload]
  (send-action :get-data payload))

(defn refresh-course [payload]
  (send-action :refresh-course payload))

(defn refresh-collection [payload]
  (send-action :refresh-collection payload))
