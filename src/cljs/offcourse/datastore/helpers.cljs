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
     (let [response (partial respond :not-found-data
                             :type type
                             :store @store)]
       (case type
         :tags                (response)
         :collection-names    (response)
         :collection          (response :collection-type collection-type
                                        :collection-name collection-name)
         :courses             (response :course-ids course-ids)
         :course              (response :course-id course-id)
         :resources           (response :urls urls)))))

  (defn respond-checked
    ([type] (respond-checked type {}))
    ([type {:keys [course-id user-name collection-name] :as payload}]
     (let [response (partial respond :checked-datastore
                             :type type
                             :store @store)]
      (case type
        :tags       (response)
        :collection-names (response)
        :collection (response)
        :course     (response)))))

  (defn respond-ignore []
    respond :ignore))
