(ns offcourse.api.services.courses
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [offcourse.protocols.validatable :as va]
            [offcourse.api.adapters.pouchdb.index :as pouch]
            [offcourse.api.responder :as r]))

(defmulti fetch
  (fn [{:keys [type]}] type))

(defn check-and-respond [type data]
  (let [invalid? (va/check data)]
    (println "API" invalid?)
    (when-not invalid?
      (r/respond-fetched type data))))

(defmethod fetch :collection-names [{:keys [type]}]
  (go
    (let [collections  (<! (pouch/fetch type))]
      (check-and-respond type collections))))

(defmethod fetch :collection [{:keys [type collection]}]
  (go
    (let [collection (<! (pouch/fetch type collection))]
      (check-and-respond type collection))))

(defmethod fetch :courses [{:keys [type courses]}]
  (go
    (let [courses (<! (pouch/fetch type courses))]
      (check-and-respond type courses))))

(defmethod fetch :course [{:keys [type course]}]
  (go
    (let [course (<! (pouch/fetch type course))]
      (check-and-respond type course))))
