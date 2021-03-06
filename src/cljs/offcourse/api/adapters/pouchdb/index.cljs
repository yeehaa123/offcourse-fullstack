(ns offcourse.api.adapters.pouchdb.index
  (:require-macros [offcourse.macros :as macro])
  (:require [schema.core :as schema :include-macros true]
            [dd]
            [offcourse.protocols.fetchable :as proto :refer [Fetchable]]
            [offcourse.api.adapters.pouchdb.implementations.fetchable :as fa]
            [offcourse.api.adapters.pouchdb.wrapper :as pouch]))

(schema/defrecord DB
    [db :- schema/Str])

(defn init [db-name remote-url]
  (let [local-db (pouch/init-db db-name)
        remote-db (pouch/init-db (str remote-url "/" db-name))]
    (do
      (pouch/sync local-db remote-db)
      (->DB local-db))))

(defn update-design-doc []
  (pouch/update-design-doc (.-doc js/dd)))

(extend-type DB
  Fetchable
  (fetch [_ {:keys [type] :as payload}]
    (fa/fetch type (type payload))))
