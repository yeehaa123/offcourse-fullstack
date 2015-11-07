(ns offcourse.models.collection
  (:require [offcourse.models.course :as co]
            [clojure.set :as set]))

(defrecord Collection [collection-type collection-name collection-ids])

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
