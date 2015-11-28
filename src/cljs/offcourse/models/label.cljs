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

(defn collections->labelCollection [collections]
  (->> collections
       (map (fn [[collection-name _]]
              [collection-name (->label collection-name)]))
       (into {})))

(defn collections->labelCollections [all-collections]
  (->> all-collections
       (map (fn [[category collections]]
              [category (collections->labelCollection collections)]))
       (into {})))
