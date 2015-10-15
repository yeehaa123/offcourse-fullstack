(ns offcourse.actions.index
  (:require [offcourse.models.action :refer [>>!]]))

(defn init [{output :channel-out}]
  (let [>>! (partial >>! output)]

    (defn set-mode! [mode]
      (>>! :requested-mode-switch
           :mode mode))

    (defn toggle-mode! []
      (>>! :requested-mode-toggle))

    (defn toggle-done [course-id checkpoint-id]
      (>>! :requested-done-toggle
           :course-id course-id
           :checkpoint-id checkpoint-id))

    (defn go-to-collection [collection-name]
      (>>! :requested-level
           :level :collection
           :collection-name collection-name))

    (defn go-to-course [course-id]
      (>>! :requested-level
           :level :course
           :course-id course-id))

    (defn go-to-checkpoint [course-id checkpoint-id]
      (>>! :requested-level
           :level :checkpoint
           :course-id course-id
           :checkpoint-id checkpoint-id))

    (defn go-to [payload]
      (>>! :requested-level
           :payload payload))))
