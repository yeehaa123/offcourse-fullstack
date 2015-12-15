(ns offcourse.datastore.implementations.refreshable
  (:require [offcourse.models.collection :as cl]
            [offcourse.datastore.responder :as r]))

(defn empty-collections [collection-names]
  (->> collection-names
       (map (fn [[category collections]]
              [category (->> collections
                             (map (fn [name]
                                    [(keyword name) (cl/->collection category name)]))
                             (into {}))]))
       (into {})))

(defn add-course [store {:keys [course-id version] :as course}]
  (assoc-in store [:courses (str course-id "-v" version)] course))

(defmulti refresh
  (fn [_ type _] type))

(defmethod refresh :collection-names [store _ collection-names]
  (let [collections (empty-collections collection-names)]
    (assoc-in store [:collections] collections)))

(defmethod refresh :collection
  [store _ {:keys [collection-name collection-type] :as collection}]
  (assoc-in store [:collections collection-type
                   collection-name] collection))

(defmethod refresh :course [store _ course]
  (add-course store course))

(defmethod refresh :courses [store _ courses]
  (reduce add-course store courses))

(defmethod refresh :resource [store _ {:keys [resource-url] :as resource}]
  (assoc-in store [:resources resource-url] resource))

(defmethod refresh :resources [store _ resources]
  (let [resources (->> resources
                       (map (fn [{:keys [resource-url] :as resource}] [resource-url resource])))]
    (update-in store [:resources] #(merge %1 resources))))
