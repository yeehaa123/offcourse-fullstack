(ns offcourse.models.course
  #?(:clj (:import [offcourse.models.checkpoint Checkpoint]))
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.protocols.augmentable :refer [Augmentable]]
            [offcourse.protocols.linkable :as lb :refer [Linkable]]
            [offcourse.protocols.taggable :as tb :refer [Taggable]]
            [offcourse.protocols.available :as av :refer [Available]]
            #?(:cljs [offcourse.models.checkpoint :as cp :refer [Checkpoint]]
               :clj [offcourse.models.checkpoint :as cp])
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

(defn coerce-from-map [{:keys [curator flags checkpoints] :as course}]
  (let [checkpoints (medley/map-vals cp/coerce-from-map checkpoints)
        flags (into #{} flags)
        course      (assoc course :checkpoints checkpoints
                                  :flags flags)]
    (map->Course course)))

(defmulti has-prop?
  (fn [selector _ _] selector))

(defmethod has-prop? :tag [_ course tag]
  (let [tags (tb/get-tags course)]
    (contains? tags (keyword tag))))

(defmethod has-prop? :flag [_ {:keys [flags]} flag]
  (contains? flags flag))

(defmethod has-prop? :user [_ {:keys [curator]} user]
  (= (keyword curator) user))

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
  Available
  (has? [course selector field]
    (has-prop? selector course field)))
