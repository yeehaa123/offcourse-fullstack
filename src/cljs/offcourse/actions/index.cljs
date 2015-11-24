(ns offcourse.actions.index
  (:require [cljs.core.async :refer [>! chan mult alts!]]
            [offcourse.models.action :refer [>>!]]))

(def channel (chan))
(def out (mult channel))

(defn init []
  (let [>>! (partial >>! channel)]

    (defn refresh []
      (>>! :reloaded-code))))
