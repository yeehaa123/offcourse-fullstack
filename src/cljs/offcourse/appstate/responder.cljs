(ns offcourse.appstate.responder
  (:require [offcourse.models.action :refer [respond]]))

(def counter (atom 0))

(defn respond-resource-required [[field {:keys [course collection]}]]
  (swap! counter inc)
  (let [resource-data (case field
                        :collection-names {:type field}
                        :tag-names {:type field}
                        :user-names {:type field}
                        :collection  {:type :collection
                                      :collection collection}
                        :courses     {:type :collection
                                      :collection collection}
                        :course    {:type :course
                                    :course course})]
    (when (< @counter 10)
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

