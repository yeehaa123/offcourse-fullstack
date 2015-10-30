(ns offcourse.environment.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [>! chan merge mult tap]]
            [ajax.core :refer [GET]]
            [offcourse.models.action :refer [respond]]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      #_(println payload))
    (recur)))

(defn handle-location [position]
  (go
    (let [coords {:longitude (.-longitude js/position.coords)
                  :latitude (.-latitude js/position.coords)}]
      (>! channel (respond :found-location
                           :location coords)))))

(defn handle-ip [response]
  (go
    (>! channel (respond :found-ip
                         :ip (:ip response)))))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (do
      (listen-for-actions input)
      (GET "https://api.ipify.org?format=json" {:response-format :json
                                                :keywords? true
                                                :handler handle-ip})
      (.getCurrentPosition js/navigator.geolocation handle-location))))
