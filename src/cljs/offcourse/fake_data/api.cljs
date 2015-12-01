(ns offcourse.fake-data.api
  (:require [offcourse.fake-data.index :as fake-data]
            [offcourse.models.collection :as cl :refer [Collection]]
            [clojure.set :as set]
            [offcourse.models.course :as co]))

(defn- collect-ids [acc courses name selector]
  (reduce (fn [acc [id course]]
            (if (co/has? selector course name) (conj acc id) acc))
          acc courses))

(defmulti fetch
  (fn [collection-type _ _] collection-type))

(defmethod fetch :names [_]
  (->> [:users :flags :tags]
       (map (fn [type] [type (fetch :name type)]))
       (into {})))

(defmethod fetch :name [_ type]
  (case type
    :tags (apply set/union (map #(co/get-tags %1) (vals fake-data/courses)))
    :users (into #{} (map #(keyword (:curator %1)) (vals fake-data/courses)))
    :flags (apply set/union (map :flags (vals fake-data/courses)))))

(defmethod fetch :collection [_ collection-type collection-name]
  (let [singular {:users :user
                  :tags :tag
                  :flags :flag}
        collection-ids (collect-ids #{} fake-data/courses collection-name
                                    (collection-type singular))]
    (cl/->collection (name collection-type) (name collection-name) collection-ids)))

(defmethod fetch :courses [_ _ course-ids]
  (map #(get-in fake-data/courses [%1]) course-ids))

(defmethod fetch :course [_ _ course-id]
  (get-in fake-data/courses [course-id]))

(defmethod fetch :resources [_ urls]
  (map (fn [url] [url (fake-data/all-resources url)]) urls))
