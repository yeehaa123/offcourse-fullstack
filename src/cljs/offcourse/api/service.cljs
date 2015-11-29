(ns offcourse.api.service
  (:require [offcourse.api.services.collections :as cls]
            [offcourse.api.services.courses :as cos]
            [offcourse.api.services.users :as uss]
            [offcourse.api.services.resources :as rss]))

(defmulti fetch
  (fn [{:keys [type]}] type))

(defmethod fetch :collection-names [_]
  (cls/fetch-collection-names))

(defmethod fetch :collection [{:keys [collection-type collection-name]}]
  (cls/fetch-collection collection-type collection-name))

(defmethod fetch :courses [{:keys [course-ids]}]
  (cos/fetch-courses course-ids))

(defmethod fetch :course [{:keys [course-id]}]
  (cos/fetch-course course-id))

(defmethod fetch :resources [{:keys [urls]}]
  (rss/fetch-resources urls))
