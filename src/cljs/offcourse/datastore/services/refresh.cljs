(ns offcourse.datastore.services.refresh
  (:require [offcourse.models.collection :as cl]
            [offcourse.datastore.responder :as r]))

(defn- update-and-respond! [store fn]
  (do
    (swap! store fn)
    (r/respond-updated store)))

(defn empty-collections [collection-names]
  (->> collection-names
       (map (fn [[category collections]]
              [category (->> collections
                             (map (fn [name]
                                    [(keyword name) (cl/->collection category name)]))
                             (into {}))]))
       (into {})))

(defn add-course [store {:keys [course-id] :as course}]
  (assoc-in store [:courses course-id] course))

(defmulti refresh
  (fn [_ type _] type))

(defmethod refresh :collection-names [store _ collection-names]
  (let [collections (empty-collections collection-names)]
    (update-and-respond! store #(assoc-in %1 [:collections] collections))))

(defmethod refresh :collection
  [store _ {:keys [collection-name collection-type] :as collection}]
  (update-and-respond! store #(assoc-in %1 [:collections collection-type
                                            collection-name] collection)))

(defmethod refresh :course [store _ course]
  (update-and-respond! store #(add-course %1 course)))

(defmethod refresh :courses [store _ courses]
  (update-and-respond! store #(reduce add-course %1 courses)))

(defmethod refresh :resource [store _ {:keys [resource-url] :as resource}]
  (update-and-respond! store #(assoc-in %1 [:resources resource-url] resource)))

(defmethod refresh :resources [store _ resources]
  (let [resources (->> resources
                       (map (fn [{:keys [resource-url] :as resource}] [resource-url resource])))]
    (update-and-respond! store (fn [store] (update-in store [:resources] #(merge %1 resources))))))
