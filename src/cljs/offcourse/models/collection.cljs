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
   (Collection. collection-type collection-name nil))
  ([collection-type collection-name collection-ids]
   (Collection. collection-type collection-name collection-ids)))

(defn find-user-collection [courses user-name]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (= (name user-name) (:curator course))
                                   (conj acc id)
                                   acc))
                               #{} courses)]
    (->collection :users user-name collection-ids)))

(defn find-flag-collection [courses flag]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (co/has-flag? course flag)
                                   (conj acc id)
                                   acc)) #{} courses)]
    (->collection. :flags flag collection-ids)))

(defn find-tag-collection [courses tag]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (co/has-tag? course (name tag))
                                   (conj acc id)
                                   acc)) #{} courses)]
    (->collection. :tags tag collection-ids)))

(defn find-collection [collections collection-type collection-name]
  (get-in collections [collection-type collection-name]))

(defn fetch-tags [collection]
  (apply set/union (map #(co/get-tags %1) (vals collection))))

(defn fetch-users [collection]
  (into #{} (map #(co/get-user %1) (vals collection))))

(defn fetch-flags [collection]
  (apply set/union (map #(co/get-flags %1) (vals collection))))

(defn collection-names [collection]
  (keys collection))
