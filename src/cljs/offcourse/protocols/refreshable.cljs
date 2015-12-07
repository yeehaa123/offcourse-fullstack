(ns offcourse.protocols.refreshable)

(defprotocol Refreshable
  (refresh [model store] [store type field]))
