(ns offcourse.appstate.viewmodel
  (:require [offcourse.models.course :as co]
            [offcourse.models.checkpoint :as cp]
            [offcourse.models.collection :as cl]
            [offcourse.appstate.viewmodels.collection :as cl-vm]
            [offcourse.appstate.viewmodels.course :as co-vm]
            [offcourse.appstate.viewmodels.checkpoint :as cp-vm]
            [offcourse.models.courses :as cs]))

(defrecord CheckpointViewmodel [level course checkpoint-id])
(defrecord CourseViewmodel [course resources])

(defn highlight-course [viewmodel checkpoint-id highlight]
  (update-in viewmodel [:course]
             #(co/highlight %1 checkpoint-id highlight)))

(defn highlight-collection [viewmodel course-id checkpoint-id highlight]
  (update-in viewmodel [:courses]
             #(cs/highlight %1 course-id checkpoint-id highlight)))

(defn select [{:keys [type course-id checkpoint-id collection-type collection-name]}]
  (case type
    :collection (cl-vm/new-collection)
    :course (co-vm/new-course {:course-id course-id})
    :checkpoint (cp-vm/new-checkpoint {:course-id course-id
                                       :checkpoint-id checkpoint-id})))

(defn check[{:keys [level] :as viewmodel}]
  (case level
    :collection (cl-vm/check viewmodel)
    :course (co-vm/check viewmodel)
    :checkpoint (cp-vm/check viewmodel)))
