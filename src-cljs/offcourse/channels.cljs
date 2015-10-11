(ns offcourse.channels
  (:require [cljs.core.async :refer [chan]]))

(def appstate-in (chan))
(def appstate-out (chan))
