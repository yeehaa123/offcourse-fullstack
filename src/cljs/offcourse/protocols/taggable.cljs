(ns offcourse.protocols.taggable)

(defprotocol Taggable
  (get-tags [this]))

(extend-protocol Taggable
  PersistentArrayMap
  (get-tags [{:keys [checkpoints]}]
    (->> checkpoints
         (reduce (fn [acc [_ {:keys [tags]}]]
                   (into acc (map keyword tags))) (sorted-set))))
  nil
  (get-tags [_] (sorted-set)))
