(ns offcourse.routes
  (:require [cljs.core.async :refer [>! chan mult alts!]]
            [clojure.string :as string]
            [offcourse.actions.index :as actions]
            [secretary.core :as secretary
             :include-macros true
             :refer-macros [defroute]]
            [offcourse.models.action :refer [>>!]]))

(def channel (chan))
(def out (mult channel))

(def route-names {:home       "/"
                  :checkpoint "/courses/:course-id/checkpoints/:checkpoint-id"
                  :course     "/courses/:course-id"
                  :flag-collection "/:collection-name"
                  :curator-collection "/curators/:curator-name"
                  :tag-collection "/tags/:tag"})

(defn to-id [id]
  (cond
    (= "new" id) (keyword id)
    (= nil id) nil
    :default id))

(defn response [type & args]
  (let [payload (assoc (apply hash-map args) :level type)]
    (>>! channel :requested-level
         :payload payload)))

(defn init []

  (defroute (:checkpoint route-names) {course-id :course-id checkpoint-id :checkpoint-id}
    (response :checkpoint
              :course-id (to-id course-id)
              :checkpoint-id (to-id checkpoint-id)))

  (defroute (:course route-names) {course-id :course-id}
    (response :course
              :course-id (to-id course-id)))

  (defroute (:flag-collection route-names) {collection-name :collection-name}
    (response :collection
              :collection-type :flags
              :collection-name (keyword collection-name)))

  (defroute (:curator-collection route-names) {curator-name :curator-name}
    (response :collection
              :collection-type :curators
              :collection-name (keyword curator-name)))

  (defroute (:tag-collection route-names) {tag :tag}
    (response :collection
              :collection-type :tags
              :collection-name (keyword tag)))

  (defroute (:home route-names) []
    (response :collection
              :collection-type :flags)))
