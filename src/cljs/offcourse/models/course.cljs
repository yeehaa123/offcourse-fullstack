(ns offcourse.models.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.protocols.augmentable :refer [Augmentable]]
            [offcourse.protocols.linkable :as lb :refer [Linkable]]
            [offcourse.protocols.taggable :as tb :refer [Taggable]]
            [offcourse.protocols.queryable :as qb :refer [Queryable]]
            [offcourse.models.checkpoint :as cp :refer [Checkpoint]]
            [medley.core :as medley]))

(schema/defrecord Course
    [course-id :- schema/Num
     curator :- schema/Str
     goal :- schema/Str
     flags :- #{schema/Keyword}
     checkpoints :- {schema/Int Checkpoint}]
  {(schema/optional-key :tags) #{schema/Keyword}
   (schema/optional-key :resource-urls) #{schema/Str}})

(def check (schema/checker Course))

(defn ->course
  ([course-id] (->Course course-id nil nil nil nil)))

(defn coerce-from-map [{:keys [curator checkpoints] :as course}]
  (let [checkpoints (medley/map-vals cp/coerce-from-map checkpoints)
        course      (assoc course :checkpoints checkpoints)]
    (map->Course course)))

(extend-type Course
  Validatable
  (check [course]
    (check course))
  (valid? [course]
    (if-not (check course) true false))
  Taggable
  (get-tags [{:keys [checkpoints]}]
    (->> (vals checkpoints)
         (mapcat :tags)
         (into (sorted-set))))
  Linkable
  (get-urls [{:keys [checkpoints]}]
    (->> (vals checkpoints)
         (map :resource-url)
         (into #{})))
  Augmentable
  (augment [course]
    (merge course {:tags (tb/get-tags course)
                   :resource-urls (lb/get-urls course)}))
  Queryable
  (has? [course selector field]
    (qb/has-prop? selector course field)))
