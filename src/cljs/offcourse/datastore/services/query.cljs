(ns offcourse.datastore.services.query
  (:require [offcourse.datastore.model :as model]
            [offcourse.models.collection :as cl]
            [clojure.set :as set]
            [offcourse.datastore.responder :as r]))

(defn init [store]

  (defn- get-flags []
    (let [flags (:flags @store)]
      (if-not flags
        (r/respond-not-found :flags)
        (r/respond-checked store))))

  (defn- get-tags []
    (let [tags (:tags @store)]
      (if tags
        (r/respond-checked store)
        (r/respond-not-found :tags))))

  (defn- get-users []
    (let [users (:users @store)]
      (if users
        (r/respond-checked store)
        (r/respond-not-found :users))))

  (defn- get-collection [{:keys [collection-type collection-name collection-ids] :as collection}]
    (let [store-collection-ids (model/get-collection-ids @store collection-type collection-name)]
      (if-not (or collection-ids store-collection-ids)
        (r/respond-not-found :collection collection)
        (r/respond-not-found :courses {:course-ids collection-ids}))))

  (defn- get-course [{:keys [course-id]}]
    (let [course (model/find-course @store course-id)]
      (if course
        (r/respond-checked store)
        (r/respond-not-found :course {:course-id course-id}))))

  (defn fetch-resources [course-id]
    (let [course (model/find-course @store course-id)
          checkpoints (vals (:checkpoints course))
          course-urls (into #{} (map :url checkpoints))
          store-urls (into #{} (map :url (vals (:resources @store))))
          missing-urls (set/difference course-urls store-urls)]
      (if course
        (if (empty? missing-urls)
          (r/respond-checked store)
          (r/respond-not-found :resources {:urls missing-urls}))
        (r/respond-not-found :course {:course-id course-id}))))

  (defn get-labels-data []
    (r/respond-not-found :collection-names))

  (defn get-data [{:keys [data]}]
    (let [{:keys [type course]} data]
      (case type
        :labels           (get-labels-data)
        :collection       (get-collection (type data))
        :course           (get-course (type data))
        :checkpoint       (get-course data)))))