(ns offcourse.protocols.validatable)

(defprotocol Validatable
  (check [this])
  (valid? [this]))

(defn unknown-field [errors]
  (-> errors
      keys
      first))
