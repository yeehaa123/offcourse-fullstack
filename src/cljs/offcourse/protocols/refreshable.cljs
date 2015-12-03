(ns offcourse.protocols.refreshable)

(defprotocol Refreshable
  (refresh [viewmodel store]))
