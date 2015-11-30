(ns offcourse.fake-data.api
  (:require [offcourse.fake-data.index :as fake-data]
            [schema.core :as schema :include-macros true]
            [offcourse.models.collection :as cl :refer [Collection CollectionNames]]
            [clojure.set :as set]
            [offcourse.models.course :as co]
            [offcourse.api.responder :as r]))

(defmulti fetch
  (fn [collection-type _] collection-type))

(defmethod fetch :users [_ user-name]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (= (name user-name) (:curator course))
                                   (conj acc id)
                                   acc))
                               #{} fake-data/courses)]
    (cl/->collection :users user-name collection-ids)))

(defmethod fetch :flags [_ flag]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (co/has-flag? course flag)
                                   (conj acc id)
                                   acc))
                               #{} fake-data/courses)]
    (cl/->collection. :flags flag collection-ids)))

(defmethod fetch :tags [_ tag]
  (let [collection-ids (reduce (fn [acc [id course]]
                                 (if (co/has-tag? course (name tag))
                                   (conj acc id)
                                   acc))
                               #{} fake-data/courses)]
    (cl/->collection. :tags tag collection-ids)))

(defmulti fetch-names
  (fn [type] type))

(defmethod fetch-names :tags [_]
  (apply set/union (map #(co/get-tags %1) (vals fake-data/courses))))

(defmethod fetch-names :users [_]
  (into #{} (map #(co/get-user %1) (vals fake-data/courses))))

(defmethod fetch-names :flags [_]
  (apply set/union (map #(co/get-flags %1) (vals fake-data/courses))))
