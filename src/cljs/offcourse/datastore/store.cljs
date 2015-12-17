(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
            [offcourse.datastore.responder :as r]
            [offcourse.protocols.refreshable :refer [refresh]]
            [offcourse.protocols.modifiable :refer [modify]]
            [offcourse.protocols.validatable :refer [check]]))

(defonce store (atom (model/->datastore)))

(defn refresh-store [payload]
  (let [type (:type payload)
        data (type payload)]
    (do
      (swap! store #(refresh %1 type data))
      (r/respond-updated store))))

(defn check-store [{:keys [_ data]}]
  (let [type (:type data)
        data (type data)
        missing-data (check @store type data)]
    (println "DS" missing-data)
    (if missing-data
      (apply r/respond-not-found missing-data)
      (r/respond-checked store))))

(defn modify-store [type payload]
  (do
    (swap! store #(modify %1 type payload))
    (r/respond-updated store)))
