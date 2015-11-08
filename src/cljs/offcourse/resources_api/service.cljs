(ns offcourse.resources-api.service
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require        [cljs.core.async :refer [chan timeout <! >!]]
                   [markdown.core :refer [md->html]]
                   [offcourse.fake-data.index :as fake-data]
                   [offcourse.models.resource :as r]
                   [offcourse.models.action :refer [respond]]))

(def all-resources
  (->> fake-data/urls
       (map-indexed (fn [index url]
                        [url (r/new url (str "fake-resource " index))]))
       (into {})))

(defn fetch-resources [{:keys [urls]}]
  (let [resources (map (fn [url] [url (all-resources url)]) urls)]
    (respond :fetched-data
             :type :resources
             :resources resources)))

(defn fetch [{:keys [type] :as payload}]
  (case type
    :tags       (respond :ignore)
    :collection-names (respond :ignore)
    :collection (respond :ignore)
    :courses (respond :ignore)
    :course  (respond :ignore)
    :resources (fetch-resources payload)))
