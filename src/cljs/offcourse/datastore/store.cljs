(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
            [offcourse.datastore.services.query :as query]
            [offcourse.datastore.services.refresh :as refresh]
            [offcourse.datastore.services.update :as update]))

(def store (atom (model/new-datastore)))

(defn update-datastore [payload]
  (let [type (:type payload)
        data (type payload)]
  (refresh/refresh store type data)))

(defn check-present? [{:keys [type data]}]
  (let [type (:type data)
        data (type data)]
    (query/check-present? store type data)))

(defn toggle-done [payload]
  (update/toggle-done store payload))
