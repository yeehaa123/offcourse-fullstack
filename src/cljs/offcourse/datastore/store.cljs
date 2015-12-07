(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
            [offcourse.datastore.responder :as r]
            [offcourse.protocols.refreshable :refer [refresh]]
            [offcourse.protocols.validatable :refer [check]]
            [offcourse.datastore.services.modify :refer [modify]]))

(defonce store (atom (model/->datastore)))

(defn refresh-store [payload]
  (let [type (:type payload)
        data (type payload)]
    (do
      (swap! store #(refresh %1 type data))
      (r/respond-updated store))))

(defn check-store [{:keys [type data]}]
  (let [type (:type data)
        data (type data)
        missing-data (check @store type data)]
    (if missing-data
      (apply r/respond-not-found missing-data)
      (r/respond-checked store))))

(defn toggle-done [payload]
  (modify :toggle-done store payload))
