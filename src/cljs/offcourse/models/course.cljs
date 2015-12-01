(ns offcourse.models.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.checkpoint :as cp :refer [map->Checkpoint Checkpoint]]
            [medley.core :as medley]
            [offcourse.fake-data.index :as fake-data]))

(schema/defrecord Course
    [course-id :- schema/Num
     curator :- schema/Str
     goal :- schema/Str
     flags :- #{schema/Keyword}
     checkpoints :- {schema/Int Checkpoint}
     tags :- schema/Any])

(defn ->course
  ([course-id] (->Course course-id nil nil nil nil nil)))

(defn coerce-from-map [{:keys [checkpoints] :as course}]
  (let [checkpoints (medley/map-vals map->Checkpoint checkpoints)
        course      (assoc course :checkpoints checkpoints)]
    (map->Course course)))

(defn get-tags [{:keys [checkpoints]}]
  (reduce (fn [tag-acc [_ {:keys [tags]}]] (into tag-acc (map keyword tags))) (sorted-set) checkpoints))

(defmulti has?
  (fn [selector _ _] selector))

(defmethod has? :tag [_ course tag]
  (let [tags (get-tags course)]
    (contains? tags (keyword tag))))

(defmethod has? :flag [_ {:keys [flags]} flag]
  (contains? flags flag))

(defmethod has? :user [_ {:keys [curator]} user]
  (= curator user))
