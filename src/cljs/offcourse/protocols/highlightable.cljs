(ns offcourse.protocols.highlightable)

(defprotocol Highlightable
  (highlight-checkpoint [this payload])
  (highlight-label [this payload]))
