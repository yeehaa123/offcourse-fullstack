(ns offcourse.collection-api.service
  (:require [cljs.core.match :refer-macros [match]]
            [offcourse.fake-data.index :as fake-data]
            [offcourse.models.action :refer [respond]]))

(defn fetch-named-collection [{:keys [collection-name]}]
  (let [collections {:featured (into #{} (take 10 (iterate inc 1)))
                     :popular (into #{} (take 5 (iterate inc 2)))
                     :new (into #{} (take 4 (iterate inc 4)))}
        collection-ids (collection-name collections)]
    (respond :fetched-data
             :type :collection
             :collection-id collection-name
             :collection-ids collection-ids)))

(defn fetch-user-collection [{:keys [user-name]}]
  (let [collection-ids (->> fake-data/courses
                            (reduce (fn [acc [id course]]
                                      (if (= (name user-name) (:curator course)) (conj acc id) acc)
                                      ) #{}))]
    (respond :fetched-data
             :type :collection
             :collection-id user-name
             :collection-ids collection-ids)))

(defn fetch-collection [payload]
  (match [payload]
         [{:collection-name _}] (fetch-named-collection payload)
         [{:user-name _}] (fetch-user-collection payload)))

(defn fetch [{:keys [type] :as payload}]
  (case type
    :collection (fetch-collection payload)
    :courses (respond :ignore)
    :course  (respond :ignore)
    :resources (respond :ignore)))
