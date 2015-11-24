(ns offcourse.datastore.responder
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [offcourse.models.action :refer [respond]]))

(defn init [channel]

  (defn -respond [& response]
    (go
      (>! channel  (apply respond response))))

  (defn respond-updated [store]
    (-respond :updated-data
              :store @store))

  (defn respond-added [store course-id]
    (-respond :added-checkpoint
              :course-id course-id
              :store @store))

  (defn respond-ignore []
    respond :ignore)

  (defn respond-not-found
    ([type] (respond-not-found type {}))
    ([type {:keys [course-id course-ids user-name collection-type collection-name urls] :as payload}]
     (let [response (partial -respond :not-found-data
                       :type type)]
       (case type
         :tags                (response)
         :users               (response)
         :collections         (response)
         :collection          (response :collection-type collection-type
                                        :collection-name collection-name)
         :courses             (response :course-ids course-ids)
         :course              (response :course-id course-id)
         :resources           (response :urls urls)))))

  (defn respond-checked [store]
    (println (keys @store))
    (respond :checked-datastore
           :store @store)))
