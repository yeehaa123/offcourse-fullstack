(ns offcourse.datastore.model
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.protocols.queryable :refer [Queryable]]
            [offcourse.models.course :refer [Course]]
            [offcourse.models.resource :refer [Resource]]
            [clojure.set :as set]))

(def Collection
    {:collection-type schema/Keyword
     :collection-name schema/Keyword
     :collection-ids (schema/maybe #{schema/Num})})

(def CollectionSet
  {schema/Keyword Collection})

(schema/defrecord DataStore
    [collections :- (schema/maybe {(schema/enum :flags :tags :users) CollectionSet})
     courses :- (schema/maybe {schema/Int Course})
     resources :- (schema/maybe {schema/Str Resource})])

(def check (schema/checker DataStore))

(defn ->datastore []
  (->DataStore nil nil nil))

(defmulti -available
  (fn [_ type _] type))

(defmethod -available :collection-ids [store _ {:keys [collection-name collection-type]}]
  (get-in store [:collections collection-type collection-name :collection-ids]))

(defmethod -available :courses [store _ course-ids]
  (->> course-ids
       (keep #(get-in store [:courses %1]))))

(defmethod -available :course-ids [store _ course-ids]
  (->> course-ids
       (-available store :courses)
       (map :course-id)
       (into #{})))

(defmethod -available :course [store _ course-id]
  (get-in store [:courses course-id]))

(defmulti -unavailable
  (fn [store type data] type))

(defmethod -unavailable :course-ids [store _ course-ids]
  (let [present-ids (-available store :course-ids course-ids)]
    (set/difference course-ids present-ids)))

(extend-type DataStore
  Validatable
  (check [datastore]
    (check datastore))
  (valid? [datastore]
    (if-not (check datastore) true false))
  Queryable
  (available [this selector field]
    (-available this selector field))
  (unavailable [this selector field]
    (-unavailable this selector field)))

