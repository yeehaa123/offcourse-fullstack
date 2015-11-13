(ns offcourse.models.label
  (:require [schema.core :as schema :include-macros true]))

(schema/defrecord Label
    [label-name :- (schema/cond-pre schema/Keyword schema/Str)])

(def LabelCollection
  {schema/Keyword Label})

(defn from-string [tag-name tags]
  (if-not (empty? tags)
    [(keyword tag-name) ((keyword tag-name) tags)]
    [(keyword tag-name) (Label. tag-name)]))
