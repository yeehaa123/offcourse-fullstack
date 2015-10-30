(ns offcourse.logger.index
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [>! tap chan <! merge]]
            [offcourse.logger.service :as service]))

(defonce context (atom {:user-id :unknown}))

(defn set-user [{:keys [user-id]}]
  (println "user-id:" user-id)
  (swap! context assoc :user-id user-id))

(defn set-location [{:keys [location]}]
  (println "location:" location)
  (swap! context assoc :location location))

(defn set-ip [{:keys [ip]}]
  (println "ip:" ip)
  (swap! context assoc :ip ip))

(defn listen-for-actions [input]
  (go-loop []
    (let [{:keys [type payload] :as action} (<! input)]
      (do
        (case type
          :authenticated-user (set-user payload)
          :found-location     (set-location payload)
          :found-ip           (set-ip payload)
          nil)))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs 10)]
    (listen-for-actions input)))
