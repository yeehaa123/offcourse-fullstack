(ns offcourse.resources-api.service
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require        [cljs.core.async :refer [chan timeout <! >!]]
                   [markdown.core :refer [md->html]]
                   [offcourse.models.resource :as r]
                   [offcourse.models.action :refer [respond]]))

(def urls ["facebook.com"
           "google.com"
           "yahoo.com"
           "offcourse.io"])

(def all-resources
  (->> urls
       (map-indexed (fn [index url]
                      (if (= url "google.com")
                        [url (r/new "offcourse.io" (str "fake-resource " index))]
                        [url (r/new url (str "fake-resource " index))])))
       (into {})))

(defn fetch-resources [{:keys [urls]}]
  (let [resources (map (fn [url] [url (all-resources url)]) urls)]
    (respond :fetched-data
             :type :resources
             :resources resources)))

(defn fetch [{:keys [type] :as payload}]
  (case type
    :resources (fetch-resources payload)
    (respond :ignore)))
