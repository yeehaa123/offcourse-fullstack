(ns offcourse.appstate.viewmodel
  (:require [offcourse.models.course :as co]
            [offcourse.models.courses :as cs]))

(defrecord CheckpointViewmodel [level course checkpoint-id])
(defrecord CourseViewmodel [level course])
(defrecord CollectionViewmodel [level collection collection-name collection-names])

(defn new-checkpoint [course checkpoint-id & resource]
  (map->CheckpointViewmodel {:level :checkpoint
                             :course course
                             :checkpoint (co/find-checkpoint course checkpoint-id)
                             :resource (or (first resource) :unknown)}))

(defn new-course [course resources]
  (map->CheckpointViewmodel {:level :course
                             :course course
                             :resources resources}))

(defn new-collection [collection-name collection]
  (map->CollectionViewmodel {:level :collection
                             :collection collection
                             :collection-name collection-name
                             :collection-names [:featured :new :popular]}))

(defn highlight-course [viewmodel checkpoint-id highlight]
  (update-in viewmodel [:course]
             #(co/highlight %1 checkpoint-id highlight)))

(defn highlight-collection [viewmodel course-id checkpoint-id highlight]
  (update-in viewmodel [:collection]
             #(cs/highlight %1 course-id checkpoint-id highlight)))
