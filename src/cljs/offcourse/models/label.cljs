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

(defn from-string [[tag-name _ :as tag] tags]
  (let [tag-name (if (instance? Keyword tag-name) tag-name tag)]
    (if-not (empty? tags)
      [(keyword tag-name) ((keyword tag-name) tags)]
      [(keyword tag-name) (new-label (keyword tag-name))])))

(defn from-set
  ([names] (from-set names nil))
  ([names selected]
   (->> names
        (map (fn [name] [name (new-label name selected)]))
        (into (sorted-map)))))

(defn ->collection [collection selection]
  (if-not (empty? collection)
    (from-set collection selection)
    :unknown))

(defn highlight [collection label-name highlight]
  (assoc-in collection [label-name :highlighted?] highlight))
