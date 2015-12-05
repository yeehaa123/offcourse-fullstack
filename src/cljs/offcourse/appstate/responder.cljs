(ns offcourse.appstate.responder
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [offcourse.models.action :refer [respond]]))

(def counter (atom 0))

(defn init [channel]

  (defn -respond [& response]
    (go
      (>! channel  (apply respond response))))

  (defn respond-resource-required [[field data]]
    (swap! counter inc)
    (let [resource-data (case field
                          :courses {:type :collection
                                    :collection (:collection data)}
                          {:type field
                           field (field data)})]
      (when (< @counter 40)
        (-respond :requested-data
                  :data resource-data))))

  (defn respond-commit [payload course-id checkpoint]
    (let [payload (assoc payload
                         :course-id course-id
                         :checkpoint checkpoint)]
      (-respond :requested-commit
                :payload payload)))


  (defn respond-update [appstate]
    (-respond :updated-appstate
              :appstate (:current appstate)))

  (defn switch-route [payload]
    (-respond :requested-route
              :payload payload))

  (defn toggle-done [payload]
    (-respond :requested-toggle-done
              :payload payload))

  (defn return-to-course [payload]
    (switch-route (assoc payload :level :course)))

  (defn request-authentication [payload]
    (-respond :requested-authentication
              :user-id "yeehaa")))
