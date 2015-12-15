(ns offcourse.api.adapters.pouchdb
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [cljsjs.pouchdb]))

(def channel (chan))

(def db (js/PouchDB. "sample"))
(def remote-db (js/PouchDB. "http://localhost:5984/sample"))

(.. db -replicate (from remote-db (clj->js {:live true})))

(defn -respond [channel message]
  (go
    (>! channel message)))

(defn respond [promise]
  (let [channel (chan)]
    (-> promise
        (.then #(-respond channel (js->clj %1 :keywordize-keys true))))
    channel))

(defn respond2 [promise cb]
  (let [channel (chan)]
    (-> promise
        (.then #(-respond channel (cb %1))))
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

(defn handle-response [res]
  (-> res
      (js->clj :keywordize-keys true)
      :rows))

(defn extract-collection-names [res]
  (->> res
       handle-response
       (map #(keyword (:key %1)))
       (into #{})))

(defn remove-design-docs [res]
  (->> res
       handle-response
       (remove #(re-find #"_design" (:id %1)))))

(defn query [viewname cb]
  (let  [options (clj->js {:group true})
         view    (str "query/" (name viewname))]
    (respond2 (.query db view options) cb)))

(defn fetch-collection-names [viewname]
  (query viewname extract-collection-names))

(defn get-all []
  (let  [options (clj->js {:group true
                           :include_docs true})]
    (respond2 (.allDocs db options)
              remove-design-docs)))
