(ns offcourse.models.collection
  (:require [offcourse.models.course :as co]
            [schema.core :as schema :include-macros true]
            [clojure.set :as set]))


(schema/defrecord Collection
    [collection-type :- Keyword
     collection-name :- Keyword
     collection-ids :- #{schema/Num}])

(def Collections
  {schema/Any {schema/Any Collection}})

(defn ->collection
  ([collection-type collection-name]
   (Collection. collection-type (keyword collection-name) nil))
  ([collection-type collection-name collection-ids]
   (Collection. collection-type (keyword collection-name) collection-ids)))

(defmulti fetch
  (fn [collection-type _ _] collection-type))

(defmethod fetch :users [_ courses user-name]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (= (name user-name) (:curator course))
                                   (conj acc id)
                                   acc))
                               #{} courses)]
    (->collection :users user-name collection-ids)))

(defmethod fetch :flags [_ courses flag]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (co/has-flag? course flag)
                                   (conj acc id)
                                   acc)) #{} courses)]
    (->collection. :flags flag collection-ids)))

(defmethod fetch :tags [_ courses tag]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (co/has-tag? course (name tag))
                                   (conj acc id)
                                   acc)) #{} courses)]
    (->collection. :tags tag collection-ids)))

(defn find-collection [collections collection-type collection-name]
  (get-in collections [collection-type collection-name]))

(defmulti fetch-names
  (fn [type _] type))

(defmethod fetch-names :tags [_ collection]
  (apply set/union (map #(co/get-tags %1) (vals collection))))

(defmethod fetch-names :users [_ collection]
  (into #{} (map #(co/get-user %1) (vals collection))))

(defmethod fetch-names :flags [_ collection]
  (apply set/union (map #(co/get-flags %1) (vals collection))))

(defn collection-names [collection]
  (keys collection))
