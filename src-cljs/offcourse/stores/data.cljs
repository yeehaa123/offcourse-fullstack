(ns offcourse.stores.data
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.stores.resources :as resources]
            [offcourse.actions.api :as actions]
            [offcourse.stores.courses :as ds]
            [offcourse.services.fake-data :refer [courses]]))

(defn get-collection [{collection-name :collection-name}]
  (ds/send-courses collection-name))

(defn get-course [{course-id :course-id}]
  (do
    (ds/send-course)
    (let [checkpoint-ids (ds/get-checkpoint-ids course-id)]
      (resources/fetch-resources course-id checkpoint-ids))))

(defn get-checkpoint [{:keys [course-id checkpoint-id]}]
  (do
    (ds/send-checkpoint)
    (resources/fetch-resource course-id checkpoint-id)))

(defn toggle-done! [{:keys [course-id checkpoint-id]}]
  (ds/update-course! course-id
                     (partial course/toggle-done course-id checkpoint-id)))

(defn get-data [{type :type :as payload}]
  (case type
    :collection (get-collection payload)
    :course (get-course payload)
    :checkpoint (get-checkpoint payload)))

(defn listen-for-actions []
  (go-loop []
    (let [{type :type payload :payload} (<! actions/channel)]
      (case type
        :get-data (get-data payload)
        :toggle-done (toggle-done! payload)))
    (recur)))

(defn init []
  (listen-for-actions))
