(ns offcourse.services.api
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout <! >!]]
            [offcourse.models.course :as course]
            [offcourse.stores.data :as ds]
            [offcourse.services.fake-data :refer [courses]]))

(defn get-course [{course-id :id}]
  (do
    (ds/send-course course-id :refresh-course)
    (ds/fetch-resources course-id :update-course)))

(defn get-checkpoint [{:keys [course-id checkpoint-id]}]
  (do
    (ds/send-checkpoint :refresh-checkpoint course-id checkpoint-id)
    (ds/fetch-resource :refresh-checkpoint course-id checkpoint-id)))

(defn get-courses [{collection-name :collection-name}]
  (ds/send-courses collection-name))

(defn toggle-done! [{:keys [course-id checkpoint-id]}]
  (ds/update-course! course-id
                     (partial course/toggle-done course-id checkpoint-id)))

(defn update-goal! [{:keys [course-id new-goal]}]
  (ds/update-course! course-id
                     (partial course/update-goal course-id new-goal)))

(defn update-task! [{:keys [course-id checkpoint-id new-task]}]
  (ds/update-course! course-id
                     (partial course/update-task course-id checkpoint-id new-task)))
