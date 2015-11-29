(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
            [offcourse.datastore.services.query :refer [check]]
            [offcourse.datastore.services.refresh :refer [refresh]]
            [offcourse.datastore.services.update :refer [modify]]))

(def store (atom (model/new-datastore)))

(defn refresh-store [payload]
  (let [type (:type payload)
        data (type payload)]
  (refresh store type data)))

(defn check-store [{:keys [type data]}]
  (let [type (:type data)
        data (type data)]
    (check store type data)))

(defn toggle-done [payload]
  (modify :toggle-done store payload))
