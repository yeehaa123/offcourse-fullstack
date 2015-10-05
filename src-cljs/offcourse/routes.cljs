(ns offcourse.routes
  (:require [clojure.string :as string]
            [offcourse.actions.index :as actions]
            [secretary.core :as secretary
             :include-macros true
             :refer-macros [defroute]]))

(defroute "/courses/:course-id/checkpoints/:checkpoint-id" {course-id :course-id
                                                            checkpoint-id :checkpoint-id}
  (apply actions/get-checkpoint (map js/parseInt [course-id checkpoint-id])))

(defroute "/courses/:id" {id :id}
  (actions/get-course (js/parseInt id)))

(defroute "/:collection-name" {collection-name :collection-name}
  (actions/get-courses {:collection-name (keyword collection-name)}))

(defroute "/" []
  (actions/get-courses {:collection-name :featured}))
