(ns offcourse.api.services.collections
  (:require [offcourse.fake-data.api :as api]
            [schema.core :as schema :include-macros true]
            [offcourse.models.collection :refer [Collection]]
            [offcourse.api.responder :as r]))

(defn fetch-collection-names []
  (let  [collections (->> [:users :flags :tags]
                          (map (fn [type] [type (api/fetch-names type)]))
                          (into {}))
         schema {schema/Keyword #{schema/Keyword}}
         invalid? (schema/check schema collections)]
    (when-not invalid?
      (r/respond-fetched-collection-names collections))))

(defn fetch-collection [collection-type collection-name]
  (let [collection (api/fetch collection-type collection-name)
        invalid? (schema/check Collection collection)]
    (when-not invalid?
      (r/respond-fetched-collection collection))))
