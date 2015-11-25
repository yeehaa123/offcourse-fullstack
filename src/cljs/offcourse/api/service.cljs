(ns offcourse.api.service
  (:require [offcourse.api.services.collections :as cls]
            [offcourse.api.services.courses :as cos]
            [offcourse.api.services.tags :as tas]
            [offcourse.api.services.users :as uss]
            [offcourse.api.services.resources :as rss]
            [offcourse.models.action :refer [respond]]))

(defn fetch [{:keys [type] :as payload}]
  (case type
    :collection-names (cls/fetch-collection-names)
    :collection       (cls/fetch-collection payload)
    :courses          (cos/fetch-courses payload)
    :course           (cos/fetch-course payload)
    :resources        (rss/fetch-resources payload)))
