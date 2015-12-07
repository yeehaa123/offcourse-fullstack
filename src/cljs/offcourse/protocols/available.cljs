(ns offcourse.protocols.available)

(defprotocol Available
  (has? [this selector field])
  (available [this selector field])
  (unavailable [this selector field]))

