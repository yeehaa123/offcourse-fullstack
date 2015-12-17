(ns offcourse.protocols.fetchable)

(defprotocol Fetchable
  (fetch [this query]))
