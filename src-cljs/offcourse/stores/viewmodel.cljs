(ns offcourse.stores.viewmodel
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.session :as session]
            [offcourse.services.api :as api]
            [cljs.core.async :refer [chan <! >!]]))

(def collection (atom))
(def topbar (atom [:none]))

(def model (atom))
(def channel (chan))

(defn update-viewmodel [{type :type name :name data :data}]
  (let [new-collection (case type
                         :collection data
                         :model (data :checkpoints))
        new-model (case type
                    :collection nil
                    :model data)]
    (reset! collection new-collection)
    (reset! model new-model)
    (reset! topbar [name])))

(defn listen-for-changes []
  (go-loop []
      (update-viewmodel (<! api/channel))
      (>! channel {:sidebar @model
                   :topbar @topbar
                   :main @collection})
    (recur)))
