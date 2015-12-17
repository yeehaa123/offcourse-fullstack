(ns offcourse.datastore.model
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.protocols.available :refer [Available]]
            [offcourse.protocols.refreshable :refer [Refreshable]]
            [offcourse.protocols.modifiable :refer [Modifiable]]
            [offcourse.datastore.implementations.available :as av-impl]
            [offcourse.datastore.implementations.refreshable :as rf-impl]
            [offcourse.datastore.implementations.validatable :as va-impl]
            [offcourse.datastore.implementations.modifiable :as ma-impl]
            [offcourse.models.course :refer [Course]]
            [offcourse.models.resource :refer [Resource]]))

(def Collection
    {:collection-type schema/Keyword
     :collection-name schema/Keyword
     :collection-ids (schema/maybe #{schema/Str})})

(def CollectionSet
  {schema/Keyword Collection})

(schema/defrecord DataStore
    [collections :- (schema/maybe
                     {(schema/enum :flags :tags :curators) CollectionSet})
     courses :- (schema/maybe {schema/Str Course})
     resources :- (schema/maybe {schema/Str Resource})])

(def check (schema/checker DataStore))

(defn ->datastore []
  (->DataStore nil nil nil))

(extend-type DataStore
  Validatable
  ;; distinguish between check and available
  (check
    ([store] (check store))
    ([store type data]
     (va-impl/check store type data)))
  (valid? [store]
    (if-not (check store) true false))
  Available
  (available [store selector field]
    (av-impl/available store selector field))
  (unavailable [store selector field]
    (av-impl/unavailable store selector field))
  Modifiable
  (modify [store type payload]
    (ma-impl/modify store type payload))
  Refreshable
  (refresh [store type field]
    (rf-impl/refresh store type field)))
