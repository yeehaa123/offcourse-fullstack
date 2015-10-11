(ns offcourse.models.action)

(defrecord Action [type payload])

(defn respond [type & payload]
  (map->Action {:type type
                :payload payload}))
