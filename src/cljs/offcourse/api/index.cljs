(ns offcourse.api.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan alts! mult tap merge timeout <! >!]]
            [offcourse.api.adapters.pouchdb :as p]
            [offcourse.api.service :as service]
            [offcourse.api.responder :as responder]))

(def channel (chan))
(def out (mult channel))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload :as val} (<! input)]
      (case type
        :not-found-data (go
                          #_(<! (timeout (rand-int 1000)))
                          (service/fetch payload))
        :updated-data nil
        (println val)))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (go
      (let [doc (-> (<! (p/get "123-2"))
                    (js->clj :keywordize-keys true))]
        (p/put (assoc doc :version (inc (:version doc))))
        (println (<! (p/get-all)))))
    (responder/init channel)
    (listen-for-actions input)))
