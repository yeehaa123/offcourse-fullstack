(ns offcourse.fake-data.api
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl :refer [Collection]]
            [offcourse.protocols.taggable :as tb]
            [offcourse.protocols.available :as av]
            [offcourse.fake-data.implementations.available]
            [clojure.set :as set]
            [offcourse.models.course :as co]))

(defn- collect-ids [acc courses name selector]
  (reduce (fn [acc [id course]]
            (if (av/has? course selector name) (conj acc id) acc))
          acc courses))

(defmulti fetch
  (fn [collection-type _ _] collection-type))

(defmethod fetch :collection-names [_]
  (->> [:users :flags :tags]
       (map (fn [type] [type (fetch :name type)]))
       (into {})))

(defmethod fetch :name [_ type]
  (case type
    :tags (apply set/union (map #(tb/get-tags %1) (vals fake-data/courses)))
    :users (into #{} (map #(keyword (:curator %1)) (vals fake-data/courses)))
    :flags (apply set/union (map :flags (vals fake-data/courses)))))

(defmethod fetch :collection [_ collection-type collection-name]
  (let [singular {:users :user
                  :tags :tag
                  :flags :flag}
        collection-ids (collect-ids #{} fake-data/courses collection-name
                                    (collection-type singular))]
    (cl/->collection (name collection-type) (name collection-name) collection-ids)))

(defmethod fetch :courses [_ course-ids]
  (map #(get-in fake-data/courses [%1]) course-ids))

(defmethod fetch :course [_ course-id]
  (get-in fake-data/courses [course-id]))


(defmethod fetch :resource [_ url]
  (fake-data/create-resource url))

(defmethod fetch :resources [_ urls]
  (->> urls
       (map #(fake-data/create-resource %1))))
