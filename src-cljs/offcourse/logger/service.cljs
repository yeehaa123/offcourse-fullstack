(ns offcourse.logger.service
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [>! <!]]
            [ajax.core :refer [PUT]]))


(def log-index (atom 0))

(defn store-logs [action]
  (let [url (str "https://cth-logs.firebaseio.com/" (.getTime (js/Date.)) ".json")
        payload (:payload action)]
    (swap! log-index inc)
    (PUT url {:format :json
              :keywords? true
              :params {:type (:type action)
                       :collection-name (:collection-name payload)
                       :course-id (:course-id payload)
                       :checkpoint-id (:checkpoint-id payload)}})))

(defn listen-for-actions [{input :channel-in}]
  (go-loop [index 0 chunk []]
    (let [action (<! input)]
      (if (< index 1)
        (recur (inc index) (conj chunk action)))
      (do
        (store-logs action)
        (recur 0 [])))))


(defn init [config]
  (listen-for-actions config))
