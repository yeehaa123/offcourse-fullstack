(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
            [offcourse.models.course :as c]
            [offcourse.models.collection :as cl]
            [clojure.set :as set]
            [cljs.core.match :refer-macros [match]]
            [offcourse.models.action :refer [respond]]
            [offcourse.datastore.helpers :as helpers]))

(def store (atom (model/new-datastore)))

(helpers/init store)

(defn- update-datastore! [fn]
  (swap! store fn))

(defn- update-and-respond! [fn]
  (do
    (update-datastore! fn)
    (helpers/respond-updated)))

(defn- add-and-respond! [fn course-id]
  (do
    (update-datastore! fn)
    (helpers/respond-added course-id)))

(defn update-tags [tags]
  (update-and-respond! #(model/update-tags %1 tags)))

(defn update-resources [{:keys [resources]}]
  (update-and-respond! #(model/update-resources %1 resources)))

(defn- update-collections [collections]
  (println collections)
  (update-and-respond! #(model/update-collections %1 collections)))

(defn- update-collection [collection]
  (update-and-respond! #(model/update-collection %1 collection)))

(defn- update-course [course]
  (update-and-respond! #(model/update-course %1 course)))

(defn- update-courses [{:keys [courses]}]
  (update-and-respond! #(model/update-courses %1 courses)))

(defn update-users [users]
  (update-and-respond! #(model/update-users %1 users)))

(defn- toggle-done [{:keys [course-id checkpoint-id]}]
  (update-and-respond! #(model/toggle-done %1 course-id checkpoint-id)))

(defn- add-checkpoint [{:keys [course-id checkpoint]}]
  (let [course (model/find-course @store course-id)]
    (add-and-respond! #(model/add-checkpoint %1 course-id checkpoint) course-id)))

(defn- save-checkpoint [{:keys [checkpoint-id] :as payload}]
  (if (= checkpoint-id :new)
    (add-checkpoint payload)
    (helpers/respond-ignore)))

(defn- get-collection-names []
  (let [collection-names (cl/collection-names (get-in @store [:collections :flags]))]
    (if-not collection-names
      (helpers/respond-not-found :collections)
      (helpers/respond-checked :collections))))

(defn- get-collection [{:keys [collection-type collection-name collection-ids] :as collection}]
  (let [store-collection-ids (model/get-collection-ids @store collection-type collection-name)]
    (if-not (or collection-ids store-collection-ids)
      (helpers/respond-not-found :collection collection)
      (helpers/respond-not-found :courses {:course-ids collection-ids}))))

(defn- get-tags []
  (let [tags (:tags @store)]
    (if tags
      (helpers/respond-checked :tags)
      (helpers/respond-not-found :tags))))

(defn- get-users []
  (let [users (:users @store)]
    (if users
      (helpers/respond-checked :users)
      (helpers/respond-not-found :users))))

(defn- get-course [{:keys [course-id]}]
  (let [course (model/find-course @store course-id)]
    (if course
      (helpers/respond-checked :course {:course-id course-id})
      (helpers/respond-not-found :course {:course-id course-id}))))

(defn fetch-resources [course-id]
  (let [course (model/find-course @store course-id)
        checkpoints (vals (:checkpoints course))
        course-urls (into #{} (map :url checkpoints))
        store-urls (into #{} (map :url (vals (:resources @store))))
        missing-urls (set/difference course-urls store-urls)]
    (if course
      (if (empty? missing-urls)
        (helpers/respond-checked :course {:course-id (:course-id course)})
        (helpers/respond-not-found :resources {:urls missing-urls}))
      (helpers/respond-not-found :course {:course-id course-id}))))

;; Public API

(defn commit-data [{type :type :as payload}]
  (case type
    :checkpoint (save-checkpoint payload)))

(defn get-labels-data [labels]
  (let [label (->> labels
                   (filter #(= :unknown (val %1)))
                   first
                   key)]
    (case label
      :flags (get-collection-names)
      :tags (get-tags)
      :users (get-users))))

(defn get-data [{:keys [data]}]
  (let [{:keys [type course labels]} data]
    (case type
      :labels (get-labels-data labels)
      :collection-names (get-collection-names)
      :tag-names        (get-tags)
      :user-names       (get-users)
      :collection       (get-collection (type data))
      :course           (get-course (type data))
      :checkpoint       (get-course data))))

(defn update-datastore [{:keys [type course tags users collection collections collection-names] :as payload}]
  (case type
    :collections (update-collections collections)
    :tags        (update-tags tags)
    :collection  (update-collection collection)
    :course      (update-course course)
    :users       (update-users users)
    :courses     (update-courses payload)
    :resources   (update-resources payload)))
