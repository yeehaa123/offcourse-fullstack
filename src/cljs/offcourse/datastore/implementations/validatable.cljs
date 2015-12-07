(ns offcourse.datastore.implementations.validatable
  (:require [offcourse.protocols.available :as av]
            [offcourse.datastore.responder :as r]))

(defmulti check
  (fn [_ type _] type))

(defmethod check :collection [store _ {:keys [collection-type collection-name]
                                          :as collection}]
  (let [present-ids (av/available store :collection-ids collection)]
    (if present-ids
      (check store :courses {:course-ids present-ids})
      [:collection collection])))

(defmethod check :courses [store _ {:keys [course-ids]}]
  (let [missing-ids (av/unavailable store :course-ids course-ids)]
    (if-not missing-ids nil [:courses {:course-ids missing-ids}])))

(defmethod check :course [store _ {:keys [course-id] :as course}]
  (let [present-course (av/available store :course course-id)]
    (if present-course nil [:course course])))

(defmethod check :labels [_]
  [:collection-names])

(defmethod check :resource [store _ resource]
  [:resource resource])

(defmethod check :resources [store _ resources]
  (let [resource-urls (->> resources
                  keys
                  (into #{}))]
    [:resources {:resource-urls resource-urls}]))
