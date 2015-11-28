(ns offcourse.models.label
  (:require [schema.core :as schema :include-macros true]
            [medley.core :as medley]))

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

(defn collections->labelCollection
  ([collections] (collections->labelCollection collections nil))
  ([collections selected] (medley/map-vals
                           (fn [{:keys [collection-name]}]
                             (->label collection-name selected)) collections)))

(defn collections->labelCollections [all-collections collection-type collection-name]
  (->> all-collections
       (map (fn [[category collections]]
              (if (= collection-type category)
                [category (collections->labelCollection collections collection-name)]
                [category (collections->labelCollection collections)])))
       (into {})))
