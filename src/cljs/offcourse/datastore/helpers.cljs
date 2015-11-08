(ns offcourse.datastore.helpers
  (:require [offcourse.models.action :refer [respond]]
            [cljs.core.match :refer-macros [match]]))

(defn init [store]
  (defn respond-updated []
    (respond :updated-data
             :store @store))

  (defn respond-added [course-id]
    (respond :added-checkpoint
             :course-id course-id
             :store @store))

  (defn respond-not-found
    ([type] (respond-not-found type {}))
    ([type {:keys [course-id course-ids user-name collection-type collection-name urls] :as payload}]
      (case type
        :tags       (respond :not-found-data
                             :type type)
        :collection (respond :not-found-data
                             :type type
                             :collection-type collection-type
                             :collection-name collection-name
                             :store @store)
        :courses    (respond :not-found-data
                             :type type
                             :course-ids course-ids
                             :store @store)
        :course     (respond :not-found-data
                             :type type
                             :course-id course-id
                             :store @store)
        :resources  (respond :not-found-data
                             :type type
                             :urls urls))))

  (defn respond-checked
    ([type] (respond-checked type {}))
    ([type {:keys [course-id user-name collection-name] :as payload}]
       (case type
         :tags       (respond :checked-datastore
                              :type type
                              :store @store)
         :collection (respond :checked-datastore
                              :type type
                              :collection-name collection-name
                              :user-name user-name
                              :store @store)
         :course     (respond :checked-datastore
                              :type type
                              :course-id course-id
                              :store @store))))

  (defn respond-ignore []
    respond :ignore))
