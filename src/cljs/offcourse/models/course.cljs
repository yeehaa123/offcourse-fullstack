(ns offcourse.models.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
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

(def check (schema/checker Course))

(extend-type Course
  Validatable
  (check [collection]
    (check collection)))

(defn ->course
  ([course-id] (->Course course-id nil nil nil nil nil)))

(defn coerce-from-map [{:keys [curator checkpoints] :as course}]
  (let [checkpoints (medley/map-vals map->Checkpoint checkpoints)
        course      (assoc course :checkpoints checkpoints)]
    (map->Course course)))

(defn get-tags [{:keys [checkpoints]}]
  (->> checkpoints
       (reduce (fn [acc [_ {:keys [tags]}]]
                 (into acc (map keyword tags))) (sorted-set))))

(defmulti has?
  (fn [selector _ _] selector))

(defmethod has? :tag [_ course tag]
  (let [tags (get-tags course)]
    (contains? tags (keyword tag))))

(defmethod has? :flag [_ {:keys [flags]} flag]
  (contains? flags flag))

(defmethod has? :user [_ {:keys [curator]} user]
  (= (keyword curator) user))
