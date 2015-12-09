(ns offcourse.api.adapters.pouchdb
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [cljsjs.pouchdb]))

(def channel (chan))

(def db (js/PouchDB. "sample"))
#_(def remote-db (js/PouchDB. "http://localhost:5984/sample"))

#_(-> db
    (.sync remote-db (clj->js {:live true,
                               :retry true})))

(defn -respond [channel message]
  (go
    (>! channel message)))

(defn respond [promise]
  (let [channel (chan)]
    (-> promise
        (.then #(-respond channel %1)))
    channel))

(defn info []
  (respond (.info db)))

(defn put [{:keys [id version] :as doc}]
  (let [doc (-> (assoc doc
                       :_id (str id "-" version)
                       :version version)
                (clj->js))]
    (respond (.put db doc))))

(defn post []
  (let [sample (clj->js {:msg "HELLO"})]
    (respond (.post db sample))))

(defn get [id]
  (respond (.get db id)))

(defn get-all []
  (respond (.allDocs db (clj->js {:include_docs true}))))
