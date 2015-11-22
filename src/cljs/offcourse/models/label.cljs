(ns offcourse.models.label
  (:require [schema.core :as schema :include-macros true]))

(schema/defrecord Label
    [label-name :- (schema/cond-pre schema/Keyword schema/Str)
     selected? :- schema/Bool
     highlighted? :- schema/Bool])

(def LabelCollection
  {schema/Keyword Label})

(defn new-label
  ([name] (->Label name false false))
  ([name selected]

   (let [selected? (= name selected)]
     (->Label name selected? false))))

(defn from-string [tag-name tags]
  (if-not (empty? tags)
    [(keyword tag-name) ((keyword tag-name) tags)]
    [(keyword tag-name) (new-label tag-name)]))

(defn from-set
  ([names] (from-set names nil))
  ([names selected]
   (->> names
        (map (fn [name] [name (new-label name selected)]))
        (into {}))))
