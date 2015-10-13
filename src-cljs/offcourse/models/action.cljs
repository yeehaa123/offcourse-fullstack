(ns offcourse.models.action)

(defrecord Action [type payload])

(defn respond [type & payload]
  (let [args    (apply hash-map payload)
        payload (or (:payload args) args)]
    (map->Action {:type type
                  :payload payload})))
