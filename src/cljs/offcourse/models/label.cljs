(ns offcourse.models.label
  (:require [schema.core :as schema :include-macros true]))

(schema/defrecord Label
    [label-name :- (schema/cond-pre schema/Keyword schema/Str)
     selected? :- schema/Bool
     highlighted? :- schema/Bool])

(def LabelCollection
  {schema/Keyword Label})

(defn new
  ([name] (->Label name false false))
  ([name selected]
   (if (= name selected)
     (->Label name true false)
     (->Label name false false))))

(defn from-string [tag-name tags]
  (if-not (empty? tags)
    [(keyword tag-name) ((keyword tag-name) tags)]
    [(keyword tag-name) (new tag-name)]))
