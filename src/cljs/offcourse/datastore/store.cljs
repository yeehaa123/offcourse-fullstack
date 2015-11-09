(ns offcourse.datastore.store
  (:require [offcourse.datastore.model :as model]
            [offcourse.models.course :as c]
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
  (let [courses (:courses @store)]
    (if (empty? courses)
      (do
        (update-datastore! #(model/update-tags %1 tags))
        (helpers/respond-not-found :courses {:course-ids :all}))
      (update-and-respond! #(model/update-tags %1 tags)))))

(defn update-resources [{:keys [resources]}]
  (update-and-respond! #(model/update-resources %1 resources)))

(defn- update-collection-names [collection-names]
  (update-and-respond! #(model/update-collection-names %1 collection-names)))

(defn- update-collections [{:keys [collection-ids] :as collection}]
  (update-and-respond! #(model/update-collections %1 collection)))

(defn- update-course [course]
  (update-and-respond! #(model/update-course %1 course)))

(defn- update-courses [{:keys [courses]}]
  (update-and-respond! #(model/update-courses %1 courses)))

(defn- toggle-done [{:keys [course-id checkpoint-id]}]
  (update-and-respond! #(model/toggle-done %1 course-id checkpoint-id)))

(defn- add-checkpoint [{:keys [course-id checkpoint]}]
  (let [course (model/find-course @store course-id)]
    (add-and-respond! #(model/add-checkpoint %1 course-id checkpoint) course-id)))

(defn- save-checkpoint [{:keys [checkpoint-id] :as payload}]
  (if (= checkpoint-id :new)
    (add-checkpoint payload)
    (helpers/respond-ignore)))

(defn get-collection-names []
  (let [collection-names (keys (get-in @store [:collections]))]
    (if (empty? collection-names)
      (helpers/respond-not-found :collection-names)
      (helpers/respond-checked :collection-names))))

(defn- get-collection [{:keys [collection-type collection-name] :as payload}]
  (let [collections (:collections @store)
        collection (get-in collections [collection-type collection-name])]
    (if (empty? collection)
      (helpers/respond-not-found :collection {:collection-type collection-type
                                              :collection-name collection-name})
      (helpers/respond-checked :collection {:collection-type collection-type
                                            :collection-name collection-name}))))
(defn- get-tags [payload]
  (let [tags (:tags @store)]
    (if tags
      (helpers/respond-checked :tags)
      (helpers/respond-not-found :tags))))

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

(defn get-data [{:keys [data]}]
  (let [{:keys [type] :as payload} (first data)]
    (case type
      :collection-names (get-collection-names)
      :tags       (get-tags payload)
      :collection (get-collection payload)
      :course     (get-course payload)
      :checkpoint (get-course payload))))

(defn update-datastore [{:keys [type course tags collection collection-names] :as payload}]
  (case type
    :collection-names (update-collection-names collection-names)
    :tags       (update-tags tags)
    :collection (update-collections collection)
    :course     (update-course course)
    :courses    (update-courses payload)
    :resources  (update-resources payload)))
