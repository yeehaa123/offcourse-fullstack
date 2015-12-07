(ns offcourse.protocols.queryable
  (:require [offcourse.protocols.taggable :as tb]))

(defmulti has-prop?
  (fn [selector _ _] selector))

(defmethod has-prop? :tag [_ course tag]
  (let [tags (tb/get-tags course)]
    (contains? tags (keyword tag))))

(defmethod has-prop? :flag [_ {:keys [flags]} flag]
  (contains? flags flag))

(defmethod has-prop? :user [_ {:keys [curator]} user]
  (= (keyword curator) user))

(defprotocol Queryable
  (has? [this selector field])
  (available [this selector field])
  (unavailable [this selector field]))

(extend-protocol Queryable
  PersistentArrayMap
  (has? [this selector field]
    (has-prop? selector this field)))
