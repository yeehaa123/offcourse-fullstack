(ns offcourse.protocols.validatable)

(defprotocol Validatable
  (check [this] [this type data])
  (valid? [this]))

(defn unknown-field [errors]
  (-> errors
      keys
      first))
