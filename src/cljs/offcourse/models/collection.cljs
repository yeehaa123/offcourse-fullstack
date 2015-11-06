(ns offcourse.models.collection)

(defrecord Collection [collection-type collection-name collection-ids])

(defn find-user-collection [courses user-name]
  (let [collection-ids (->> courses
                            (reduce (fn [acc [id course]]
                                      (if (= (name user-name) (:curator course)) (conj acc id) acc)
                                      ) #{}))]
    (Collection. :user-collection user-name collection-ids)))

(defn named-collection [collection-name]
  (let [collections {:featured (into #{} (take 10 (iterate inc 1)))
                        :popular (into #{} (take 5 (iterate inc 2)))
                     :new (into #{} (take 4 (iterate inc 4)))}
        collection-ids (collection-name collections)]
    (Collection. :named-collection collection-name collection-ids)))
