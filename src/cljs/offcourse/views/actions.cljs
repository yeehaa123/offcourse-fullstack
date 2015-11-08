(ns offcourse.views.actions
  (:require [offcourse.models.action :refer [>>!]]))

(defn init [output]
  (let [>>! (partial >>! output)]

    {:set-mode          (fn [mode]
                          (>>! :requested-mode-switch
                               :mode mode))

     :toggle-mode       (fn []
                          (>>! :requested-mode-toggle))

     :toggle-done       (fn [course-id checkpoint-id event]
                          (do
                            (.stopPropagation event)
                            (>>! :requested-done-toggle
                                 :course-id course-id
                                 :checkpoint-id checkpoint-id)))

     :highlight         (fn [course-id checkpoint-id highlight]
                          (>>! :requested-highlight-toggle
                               :course-id course-id
                               :checkpoint-id checkpoint-id
                               :highlight highlight))

     :go-to-collection  (fn [collection-name]
                          (>>! :requested-level
                               :level :collection
                               :collection-type :named-collection
                               :collection-name collection-name))

     :go-to-user-collection  (fn [user-name event]
                               (.stopPropagation event)
                               (>>! :requested-level
                                    :level :collection
                                    :collection-type :user-collection
                                    :collection-name (str "users/" user-name)))

     :go-to-tag-collection      (fn [tag event]
                                  (.stopPropagation event)
                                  (>>! :requested-level
                                       :level :collection
                                       :collection-type :tag-collection
                                       :collection-name (str "tags/" tag)))

     :go-to-course      (fn [course-id event]
                          (.stopPropagation event)
                          (>>! :requested-level
                               :level :course
                               :course-id course-id))

     :go-to-checkpoint  (fn [course-id checkpoint-id event]
                          (.stopPropagation event)
                          (>>! :requested-level
                               :level :checkpoint
                               :course-id course-id
                               :checkpoint-id checkpoint-id))


     :commit-checkpoint (fn [course-id checkpoint-id]
                          (>>! :requested-commit
                               :type :checkpoint
                               :course-id course-id
                               :checkpoint-id checkpoint-id))

     :get-authorized    (fn [user-id]
                          (>>! :requested-authentication))

     :go-to             (fn [payload]
                          (>>! :requested-level
                               :payload payload))}))
