(ns offcourse.models.label
  (:require [schema.core :as schema :include-macros true]))

(schema/defrecord Label
    [label-name :- (schema/cond-pre schema/Keyword schema/Str)
     selected? :- schema/Bool
     highlighted? :- schema/Bool])

(def LabelCollection
  {schema/Keyword Label})

(defn ->label
  ([name] (->Label (keyword name) false false))
  ([name selected]
   (let [selected? (= name selected)]
     (->Label (keyword name) selected? false))))

(defn ->labelCollection
  ([names]
   (->labelCollection names nil))
  ([names selected]
   (->> names
        (map (fn [name] [(keyword name) (->label name selected)]))
        (into (sorted-map)))))
