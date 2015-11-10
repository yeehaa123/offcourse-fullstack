(ns offcourse.appstate.viewmodel
  (:require [offcourse.models.course :as co]
            [offcourse.models.checkpoint :as cp]
            [offcourse.models.collection :as cl]
            [offcourse.appstate.collection-viewmodel :as cl-vm]
            [offcourse.models.courses :as cs]))

(defrecord CheckpointViewmodel [level course checkpoint-id])
(defrecord CourseViewmodel [course resources])

(defn new-checkpoint
  ([course-id checkpoint-id]
   (map->CheckpointViewmodel {:level :checkpoint
                              :course (co/new course-id :unknown :unknown :unknown)
                              :checkpoint (cp/new {:checkpoint-id checkpoint-id})
                              :resource :unknown
                              :load-order [:course]}))
   ([course checkpoint-id resources]
    (map->CheckpointViewmodel {:level :checkpoint
                               :course course
                               :checkpoint (co/find-checkpoint course checkpoint-id)
                               :resource :unknown
                               :load-order [:course]})))

(defn new-course
  ([course-id]
   (map->CourseViewmodel {:level :course
                          :course (co/new course-id :unknown :unknown :unknown)
                          :resources :unknown
                          :load-order [:course]}))
  ([course resources]
   (map->CourseViewmodel {:level :course
                          :course course
                          :resources resources})))

(defn highlight-course [viewmodel checkpoint-id highlight]
  (update-in viewmodel [:course]
             #(co/highlight %1 checkpoint-id highlight)))

(defn highlight-collection [viewmodel course-id checkpoint-id highlight]
  (update-in viewmodel [:collection]
             #(cs/highlight %1 course-id checkpoint-id highlight)))

(defn select [{:keys [type course-id checkpoint-id collection-type collection-name]}]
  (case type
    :collection (cl-vm/new-collection)
    :course (new-course course-id)
    :checkpoint (new-checkpoint course-id checkpoint-id)))
