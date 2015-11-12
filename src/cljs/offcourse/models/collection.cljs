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

(defn new-collection [collection-type collection-name collection-ids]
  (Collection. collection-type collection-name collection-ids))

(defn find-user-collection [courses user-name]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (= (name user-name) (:curator course))
                                   (conj acc id)
                                   acc))
                               #{} courses)]
    (Collection. :user-collection user-name collection-ids)))

(defn named-collection [collection-name]
  (let [collections {:featured (into #{} (take 10 (iterate inc 1)))
                        :popular (into #{} (take 5 (iterate inc 2)))
                     :new (into #{} (take 4 (iterate inc 4)))}
        collection-ids (collection-name collections)]
    (Collection. :named-collection collection-name collection-ids)))

(defn find-tag-collection [courses tag]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (co/has-tag? course (name tag))
                                   (conj acc id)
                                   acc)) #{} courses)]
    (Collection. :tag-collection tag collection-ids)))

(defn fetch-tags [collection]
  (apply set/union (map #(co/get-tags %1) (vals collection))))

(defn fetch-users [collection]
  (into #{} (map #(co/get-user %1) (vals collection))))

(defn collection-names [collection]
  (keys collection))

(def get-course-ids [collection]
  (get-in collection [:collections collection-type collection-name collection-ids]))
