(ns offcourse.api.service
  (:require [offcourse.fake-data.api :as api]
            [schema.core :as schema :include-macros true]
            [offcourse.models.collection :as cl :refer [check Collection Collections]]
            [offcourse.api.responder :as r]
            [offcourse.models.course :as co]))

(defmulti fetch
  (fn [{:keys [type]}] type))

(defn check-and-respond [data]
  (let [invalid? (check data)]
    (when-not invalid?
      (r/respond-fetched-collection data))))

(defmethod fetch :collection-names [_]
  (let  [collections (api/fetch :names)
         invalid? (schema/check Collections collections)]
    (when-not invalid?
      (r/respond-fetched-collection-names collections))))

(defmethod fetch :collection [{:keys [collection-type collection-name]}]
  (let [collection (->> (api/fetch :collection collection-type collection-name)
                        (cl/coerce-from-map))]
    (check-and-respond collection)))

(defmethod fetch :courses [{:keys [course-ids]}]
  (let [courses (->> course-ids
                     (api/fetch :courses nil)
                     (map #(co/coerce-from-map %1)))]
    (r/respond-fetched-courses courses)))

(defmethod fetch :course [{:keys [course-id]}]
  (let [course (->> course-id
                    (api/fetch :course nil)
                    (co/coerce-from-map))]
    (r/respond-fetched-course course)))

(defmethod fetch :resources [{:keys [urls]}]
  (let [resources (api/fetch :resources urls)]
    (r/respond-fetched-resources resources)))
