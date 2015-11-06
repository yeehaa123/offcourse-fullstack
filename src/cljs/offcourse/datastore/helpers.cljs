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

  (defn respond-not-found [type {:keys [course-id course-ids user-name collection-type collection-name urls] :as payload}]
      (case type
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
                             :urls urls)))

  (defn respond-checked [type {:keys [course-id user-name collection-name] :as payload}]
    (let [[collection-key collection-id] (match [payload]
                                                [{:collection-name _}] [:collection-name collection-name]
                                                [{:user-name _}] [:user-name user-name]
                                                [_] [nil nil])]
      (case type
        :collection (respond :checked-datastore
                             :type type
                             collection-key collection-id
                             :user-name user-name
                             :store @store)
        :course     (respond :checked-datastore
                             :type type
                             :course-id course-id
                             :store @store))))

  (defn respond-ignore []
    respond :ignore))
