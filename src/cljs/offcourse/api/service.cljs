(ns offcourse.api.service
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan alts! mult tap merge timeout <! >!]]
            [offcourse.fake-data.api :as api]
            [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [check]]
            [offcourse.models.collection :as cl]
            [offcourse.models.collections :as cls]
            [offcourse.models.course :as co]
            [offcourse.models.courses :as cs]
            [offcourse.models.resource :as rs]
            [offcourse.models.resources :as rss]
            [offcourse.api.adapters.pouchdb.wrapper :as pouch]
            [offcourse.api.responder :as r]))

(defmulti fetch
  (fn [{:keys [type]}] type))

(defn check-and-respond [type data]
  (let [invalid? (check data)]
    (println "API" invalid?)
    (when-not invalid?
      (r/respond-fetched type data))))

(defmethod fetch :collection-names [{:keys [type]}]
  (go
    (let [collections  (<! (pouch/fetch :collection-names))]
      (check-and-respond type collections))))

(defmethod fetch :collection [{:keys [type collection]}]
  (go
    (let [collection (<! (pouch/fetch :collection collection))]
      (check-and-respond type collection))))

(defmethod fetch :courses [{:keys [type courses]}]
  (go
    (let [courses (<! (pouch/fetch :courses courses))]
      (check-and-respond type courses))))

(defmethod fetch :course [{:keys [type course]}]
  (let [course (->> (api/fetch type (:course-id course))
                    (co/coerce-from-map))]
    (check-and-respond type course)))

(defmethod fetch :resources [{:keys [type resources]}]
  (let [resources (->> (:resource-urls resources)
                       (api/fetch type)
                       (map #(rs/coerce-from-map %1))
                       (rss/->resources))]
    (check-and-respond type resources)))

(defmethod fetch :resource [{:keys [type resource] :as payload}]
  (let [resource (rs/coerce-from-map (api/fetch type (:resource-url resource)))]
    (check-and-respond type resource)))
