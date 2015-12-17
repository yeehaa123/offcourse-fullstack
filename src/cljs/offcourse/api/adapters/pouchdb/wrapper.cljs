(ns offcourse.api.adapters.pouchdb.wrapper
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [offcourse.models.course :as co]
            [offcourse.models.courses :as cs]
            [offcourse.models.collection :as cl]
            [offcourse.models.collections :as cls]
            [offcourse.api.adapters.pouchdb.base :as pouch]))

(defn extract-collection-names [res]
  (->> res
       (map #(keyword (:key %1)))
       (into #{})))

(defn extract-course [{:keys [doc]}]
  (-> doc
      (dissoc :_id :_rev)
      (co/coerce-from-map)))

(defn extract-ids [res]
  (->> res
       (map :id)
       (into #{})))

(defmulti fetch
  (fn [collection-type _ _] collection-type))

(defmethod fetch :collection [_ {:keys [collection-type collection-name]}]
  (let [channel (chan)
        options {:reduce false :key collection-name}
        collection-type (if (= collection-type :users) :curators collection-type)]
    (go
      (let [collection-ids (<! (pouch/query extract-ids options collection-type))
            collection {:collection-type collection-type
                        :collection-name collection-name
                        :collection-ids  collection-ids}]
      (>! channel  (cl/coerce-from-map collection))))
    channel))

(defmethod fetch :collection-names [_]
  (let [channel (chan)
        fetch-names (partial pouch/query extract-collection-names {:group true})]
    (go
      (let [output  {:tags (<! (fetch-names :tags))
                     :flags (<! (fetch-names :flags))
                     :curators (<! (fetch-names :curators))}]
        (>! channel (cls/coerce-from-map output))))
    channel))

(defmethod fetch :courses [_ {:keys [course-ids]}]
  (let  [options (clj->js {:group true
                           :keys (clj->js course-ids)
                           :include_docs true})]
    (pouch/get-all options (comp
                            cs/->courses
                            (partial map extract-course)))))

(defmethod fetch :course [_ {:keys [course-id]}]
  (pouch/get-doc course-id co/coerce-from-map))
