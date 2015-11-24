(ns offcourse.views.actions
  (:require [offcourse.models.action :refer [>>!]]))

(defn init [output]
  (let [>>! (partial >>! output)]

    {:set-mode          (fn [mode event]
                          (.stopPropagation event)
                          (>>! :requested-mode-switch
                               :mode mode))

     :toggle-mode       (fn [event]
                          (.stopPropagation event)
                          (>>! :requested-mode-switch))

     :toggle-done       (fn [course-id checkpoint-id event]
                          (.stopPropagation event)
                          (>>! :requested-done-toggle
                               :course-id course-id
                               :checkpoint-id checkpoint-id))

     :highlight-checkpoint (fn [course-id checkpoint-id highlight event]
                             (.stopPropagation event)
                             (>>! :requested-highlight-checkpoint
                                  :course-id course-id
                                  :checkpoint-id checkpoint-id
                                  :highlight highlight))

     :highlight-label (fn [label-type label-name highlight event]
                        (.stopPropagation event)
                        (>>! :requested-highlight-label
                             :label-name label-name
                             :label-type label-type
                             :highlight highlight))

     :go-to-collection  (fn [collection-type collection-name event]
                          (.stopPropagation event)
                          (>>! :requested-level
                               :level :collection
                               :collection-type collection-type
                               :collection-name collection-name))

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


     :commit-checkpoint (fn [course-id checkpoint-id event]
                          (.stopPropagation event)
                          (>>! :requested-commit
                               :type :checkpoint
                               :course-id course-id
                               :checkpoint-id checkpoint-id))

     :get-authorized    (fn [user-id event]
                          (.stopPropagation event)
                          (>>! :requested-authentication))

     :go-to             (fn [payload event]
                          (.stopPropagation event)
                          (>>! :requested-level
                               :payload payload))}))
