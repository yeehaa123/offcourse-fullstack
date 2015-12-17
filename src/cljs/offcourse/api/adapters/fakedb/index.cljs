(ns offcourse.api.adapters.fakedb.index
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.fetchable :as proto :refer [Fetchable]]
            [offcourse.api.adapters.fakedb.implementations.fetchable :as fa]))

(schema/defrecord DB
    [db :- schema/Str])

(defn init [db-name]
  (->DB db-name))

(extend-type DB
  Fetchable
  (fetch [_ {:keys [type] :as payload}]
    (fa/fetch type (type payload))))
