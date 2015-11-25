(ns offcourse.datastore.services.update
  (:require [offcourse.datastore.model :as model]
            [offcourse.models.collection :as cl]
            [clojure.set :as set]
            [offcourse.datastore.responder :as r]))


(defn init [store]

  (defn- update-datastore! [fn]
    (swap! store fn))

  (defn- update-and-respond! [fn]
    (do
      (update-datastore! fn)
      (r/respond-updated store)))

  (defn- add-and-respond! [fn course-id]
    (do
      (update-datastore! fn)
      (r/respond-added store course-id)))

  (defn update-collections [collection-names]
    (let [empty-collections
          (->> collection-names
               (map (fn [[category collections]]
                      [category (->> collections
                                     (map (fn [name]
                                            [(keyword name) (cl/->collection category name)]))
                                     (into {}))]))
               (into {}))]
      (update-and-respond! #(model/update-collections %1 empty-collections))))

  (defn update-resources [{:keys [resources]}]
    (update-and-respond! #(model/update-resources %1 resources)))

  (defn- update-collection [collection]
    (println collection)
    (update-and-respond! #(model/update-collection %1 collection)))

  (defn- update-course [course]
    (update-and-respond! #(model/update-course %1 course)))

  (defn- update-courses [{:keys [courses]}]
    (update-and-respond! #(model/update-courses %1 courses)))

  (defn- add-checkpoint [{:keys [course-id checkpoint]}]
    (let [course (model/find-course @store course-id)]
      (add-and-respond! #(model/add-checkpoint %1 course-id checkpoint) course-id)))

  (defn- save-checkpoint [store {:keys [checkpoint-id] :as payload}]
    (if (= checkpoint-id :new)
      (add-checkpoint payload)
      (r/respond-ignore)))

  ;; Public API

  (defn toggle-done [{:keys [course-id checkpoint-id]}]
    (update-and-respond! #(model/toggle-done %1 course-id checkpoint-id)))

  (defn update-datastore [{:keys [type course collection collection-names collection-names] :as payload}]
    (case type
      :collection-names (update-collections collection-names)
      :collection       (update-collection collection)
      :course           (update-course course)
      :courses          (update-courses payload)
      :resources        (update-resources payload))))