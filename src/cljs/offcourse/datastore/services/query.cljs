(ns offcourse.datastore.services.query
  (:require [offcourse.datastore.model :as model :refer [missing? present?]]
            [medley.core :as medley]
            [offcourse.datastore.responder :as r]))

(defmulti check-present?
  (fn [_ type _] type))

(defmethod check-present? :collection [store _ {:keys [collection-type collection-name]
                                          :as collection}]
  (let [present-ids (present? @store :collection-ids collection)]
    (if present-ids
      (check-present? store :courses {:course-ids present-ids})
      (r/respond-not-found :collection collection))))

(defmethod check-present? :courses [store _ {:keys [course-ids]}]
  (let [missing-ids (missing? @store :course-ids course-ids)]
    (if-not missing-ids
      (r/respond-checked store)
      (r/respond-not-found :courses {:course-ids missing-ids}))))

(defmethod check-present? :course [store _ {:keys [course-id] :as course}]
  (let [present-course (present? @store :course course-id)]
    (if present-course
      (r/respond-checked store)
      (r/respond-not-found :course course))))

(defmethod check-present? :labels [_]
  (r/respond-not-found :collection-names))
