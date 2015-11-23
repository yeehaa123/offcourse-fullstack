(ns offcourse.appstate.responder
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [offcourse.models.action :refer [respond]]))

(def counter (atom 0))

(defn init [channel]
  (defn respond-resource-required [[field data]]
    (swap! counter inc)
    (let [resource-data (if-not (= field :courses)
                          {:type field
                           field (field data)}
                          {:type :collection
                           :collection (:collection data)})]
      (when (< @counter 200)
        (go
          (>! channel  (respond :requested-data
                                :data resource-data))))))

  (defn respond-commit [payload course-id checkpoint]
    (go
      (let [payload (assoc payload
                           :course-id course-id
                           :checkpoint checkpoint)]
        (>! channel  (respond :requested-commit
                              :payload payload)))))


  (defn respond-update [appstate]
    (go
      (>! channel  (respond :updated-appstate
                            :appstate appstate)))))
