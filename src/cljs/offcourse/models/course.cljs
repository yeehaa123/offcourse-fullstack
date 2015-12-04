(ns offcourse.models.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.models.checkpoint :as cp :refer [map->Checkpoint Checkpoint]]
            [medley.core :as medley]))

(schema/defrecord Course
    [course-id :- schema/Num
     curator :- schema/Str
     goal :- schema/Str
     flags :- #{schema/Keyword}
     checkpoints :- {schema/Int Checkpoint}
     tags :- #{schema/Keyword}])

(def check (schema/checker Course))

(extend-type Course
  Validatable
  (check [course]
    (check course))
  (valid? [course]
    (if-not (check course) true false)))

(defn ->course
  ([course-id] (->Course course-id nil nil nil nil nil)))

(defn get-tags [{:keys [checkpoints]}]
  (->> checkpoints
       (reduce (fn [acc [_ {:keys [tags]}]]
                 (into acc (map keyword tags))) (sorted-set))))

(defn get-urls [{:keys [checkpoints]}]
  (map :resource-url (vals checkpoints)))

(defn coerce-from-map [{:keys [curator checkpoints] :as course}]
  (let [checkpoints (medley/map-vals map->Checkpoint checkpoints)
        tags        (get-tags course)
        course      (assoc course :checkpoints checkpoints
                           :tags tags)]
    (map->Course course)))

(defmulti has?
  (fn [selector _ _] selector))

(defmethod has? :tag [_ course tag]
  (let [tags (get-tags course)]
    (contains? tags (keyword tag))))

(defmethod has? :flag [_ {:keys [flags]} flag]
  (contains? flags flag))

(defmethod has? :user [_ {:keys [curator]} user]
  (= (keyword curator) user))
