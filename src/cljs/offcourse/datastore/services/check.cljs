(ns offcourse.datastore.services.check
  (:require [offcourse.protocols.queryable :as qb]
            [offcourse.datastore.responder :as r]))

(defmulti check
  (fn [_ type _] type))

(defmethod check :collection [store _ {:keys [collection-type collection-name]
                                          :as collection}]
  (let [present-ids (qb/available @store :collection-ids collection)]
    (if present-ids
      (check store :courses {:course-ids present-ids})
      (r/respond-not-found :collection collection))))

(defmethod check :courses [store _ {:keys [course-ids]}]
  (let [missing-ids (qb/unavailable @store :course-ids course-ids)]
    (if-not missing-ids
      (r/respond-checked store)
      (r/respond-not-found :courses {:course-ids missing-ids}))))

(defmethod check :course [store _ {:keys [course-id] :as course}]
  (let [present-course (qb/available @store :course course-id)]
    (if present-course
      (r/respond-checked store)
      (r/respond-not-found :course course))))

(defmethod check :labels [_]
  (r/respond-not-found :collection-names))

(defmethod check :resource [store _ resource]
  (r/respond-not-found :resource resource))

(defmethod check :resources [store _ resources]
  (let [resource-urls (->> resources
                  keys
                  (into #{}))]
    (r/respond-not-found :resources {:resource-urls resource-urls})))
