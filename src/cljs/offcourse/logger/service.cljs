(ns offcourse.logger.service
  (:require [cljs.core.async :refer [>! tap chan <! merge]]
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
                       :location (:location payload)
                       :ip (:ip payload)
                       :checkpoint-id (:checkpoint-id payload)}})))
