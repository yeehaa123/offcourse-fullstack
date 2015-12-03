(ns offcourse.api.service
 (:require [offcourse.fake-data.api :as api]
            [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [check]]
            [offcourse.models.collection :as cl]
            [offcourse.models.name-collections :as cls]
            [offcourse.models.course :as co]
            [offcourse.models.courses :as cs]
            [offcourse.api.responder :as r]))

(defmulti fetch
  (fn [{:keys [type]}] type))

(defn check-and-respond [type data]
  (let [invalid? (check data)]
    (when-not invalid?
      (r/respond-fetched type data))))

(defmethod fetch :collection-names [{:keys [type]}]
  (let  [collections (-> (api/fetch type)
                         (cls/coerce-from-map))]
    (check-and-respond type collections)))

(defmethod fetch :collection [{:keys [type collection-type collection-name]}]
  (let [collection (->> (api/fetch type collection-type collection-name)
                        (cl/coerce-from-map))]
    (check-and-respond type collection)))

(defmethod fetch :courses [{:keys [type course-ids]}]
  (let [courses (->> (api/fetch type course-ids)
                     (map #(co/coerce-from-map %1))
                     cs/->courses)]
    (check-and-respond type courses)))

(defmethod fetch :course [{:keys [type course-id]}]
  (let [course (->> (api/fetch type course-id)
                    (co/coerce-from-map))]
    (check-and-respond type course)))

(defmethod fetch :resources [{:keys [type urls]}]
  (let [resources (api/fetch :resources urls)]
    (r/respond-fetched-resources resources)))
