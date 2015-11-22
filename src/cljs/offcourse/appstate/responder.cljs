(ns offcourse.appstate.responder
  (:require [offcourse.models.action :refer [respond]]))

(def counter (atom 0))

(defn respond-resource-required [[field {:keys [course collection labels]}]]
  (swap! counter inc)
  (let [resource-data (case field
                        :labels      {:type field
                                      :labels labels}
                        :collection  {:type :collection
                                      :collection collection}
                        :courses     {:type :collection
                                      :collection collection}
                        :course    {:type :course
                                    :course course})]
    (when (< @counter 200)
      (respond :requested-data
               :data resource-data))))

(defn respond-update [appstate]
  (respond :updated-appstate
           :appstate appstate))

(defn respond-commit [payload course-id checkpoint]
  (let [payload (assoc payload :course-id course-id
                       :checkpoint checkpoint)]
    (respond :requested-commit
             :payload payload)))

