(ns offcourse.channels
  (:require [cljs.core.async :refer [chan]]))

(def appstate-in (chan))
(def datastore-in (chan))
(def api-out (chan))
(def api-in (chan))
