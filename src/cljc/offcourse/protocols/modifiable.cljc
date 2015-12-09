(ns offcourse.protocols.modifiable)

(defprotocol Modifiable
  (modify [this type payload]))
