(ns offcourse.api.adapters.pouchdb.wrapper
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan mult tap merge timeout <! >!]]
            [cljsjs.pouchdb]))

(def channel (chan))

(def db (js/PouchDB. "sample"))
(def remote-db (js/PouchDB. "http://localhost:5984/sample"))

(.. db -replicate (from remote-db (clj->js {:live true})))

(defn init-db [str]
  (js/PouchDB. str))

(defn sync [db remote-db]
  (.replicate js/PouchDB db remote-db (clj->js {:live true})))

(defn destroy-db [db]
  (.destroy js/PouchDB db))

(defn handle-promise [promise cb]
  (let [channel (chan)]
    (-> promise
        (.then #(go (>! channel (cb %1)))))
    channel))

(defn handle-response [res]
  (-> res
      (js->clj :keywordize-keys true)
      :rows))

(defn handle-single-response [res]
  (-> res
      (js->clj :keywordize-keys true)))

(defn remove-design-docs [res]
  (remove #(re-find #"_design" (:id %1)) res))

(defn put-doc
  ([doc] (put-doc doc identity))
  ([doc cb]
   (let [doc (clj->js doc)]
     (handle-promise (.put db doc) cb))))

(defn get-doc
  ([id] (get-doc id identity))
  ([id cb]
   (let [cb (comp cb handle-single-response)]
     (handle-promise (.get db id) cb))))

(defn delete-doc
  ([doc] (delete-doc doc identity))
  ([doc cb]
   (let [doc (clj->js doc)
         cb (comp cb handle-single-response)]
     (handle-promise (.remove db doc) cb))))

(defn update-design-doc [doc]
  (go
    (let [response (<! (put-doc doc handle-single-response))]
      (println response))))

(defn query
  ([options viewname] (query identity options viewname))
  ([cb options viewname]
   (let  [options (clj->js options)
          view    (str "query/" (name viewname))
          cb      (comp cb handle-response)]
     (handle-promise (.query db view options) cb))))

(defn get-all
  ([options] (get-all options identity))
  ([options cb]
   (let  [cb (comp cb remove-design-docs handle-response)]
     (handle-promise (.allDocs db options) cb))))
