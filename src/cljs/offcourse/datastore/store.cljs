(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
            [offcourse.datastore.services.query :as query]
            [offcourse.datastore.services.update :as update]))

(def store (atom (model/new-datastore)))

(update/init store)
(query/init store)

(defn update-datastore [payload]
  (update/update-datastore payload))

(defn get-data [payload]
  (query/get-data payload))

(defn commit-data [{type :type :as payload}]
  (case type
    :checkpoint (update/save-checkpoint store payload)))

(defn toggle-done [payload]
  (update/toggle-done payload))
