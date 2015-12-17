(ns offcourse.api.service
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan alts! mult tap merge timeout <! >!]]
            [offcourse.protocols.validatable :refer [check]]
            [offcourse.protocols.fetchable :as fa]
            [offcourse.api.adapters.pouchdb.index :as pouchdb]
            [offcourse.api.adapters.fakedb.index :as fakedb]
            [offcourse.api.responder :as r]))

(def courses-db (pouchdb/init "sample" "http://localhost:5984"))
(def resources-db (fakedb/init "sample"))

(defn check-and-respond [type data]
  (let [invalid? (check data)]
    (println "API" invalid?)
    (when-not invalid?
      (r/respond-fetched type data))))

(def db-hierarchy (-> (make-hierarchy)
                      (derive :collection-names :courses-db)
                      (derive :collection :courses-db)
                      (derive :courses :courses-db)
                      (derive :course :courses-db)
                      (derive :resources :resources-db)
                      (derive :resource :resources-db)))

(defmulti fetch
  (fn [{:keys [type]}] type)
  :hierarchy #'db-hierarchy)

(defmethod fetch :courses-db [{:keys [type] :as payload}]
  (go
    (let [response (<! (fa/fetch courses-db payload))]
      (check-and-respond type response))))

(defmethod fetch :resources-db [{:keys [type] :as payload}]
  (go
    (let [response (<! (fa/fetch resources-db payload))]
      (check-and-respond type response))))
