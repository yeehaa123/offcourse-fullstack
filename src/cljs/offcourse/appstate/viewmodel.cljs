(ns offcourse.appstate.viewmodel
  (:require [offcourse.models.course :as co]
            [offcourse.models.checkpoint :as cp]
            [offcourse.models.collection :as cl]
            [offcourse.models.courses :as cs]))

(defrecord CheckpointViewmodel [level course checkpoint-id])
(defrecord CourseViewmodel [course resources])
(defrecord TagsViewmodel [level tags collection])
(defrecord CollectionViewmodel [level collections collection courses load-order])

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

(defn bootstrap-collection []
  (map->CollectionViewmodel {:level :collection
                             :collections :unknown
                             :collection :unknown
                             :courses :unknown
                             :load-order [:collections :courses]}))

(defn new-collection [collections collection courses]
  (map->CollectionViewmodel {:level :collection
                             :collections collections
                             :collection collection
                             :courses courses
                             :load-order [:collections :courses]}))

(defn new-tags [courses tags]
  (map->TagsViewmodel {:level :tags
                       :tags tags
                       :courses courses}))

(defn highlight-course [viewmodel checkpoint-id highlight]
  (update-in viewmodel [:course]
             #(co/highlight %1 checkpoint-id highlight)))

(defn highlight-collection [viewmodel course-id checkpoint-id highlight]
  (update-in viewmodel [:collection]
             #(cs/highlight %1 course-id checkpoint-id highlight)))

(defn select [{:keys [type course-id checkpoint-id collection-type collection-name]}]
  (case type
    :collection (bootstrap-collection)
    :tags (new-tags :unknown :unknown)
    :course (new-course course-id)
    :checkpoint (new-checkpoint course-id checkpoint-id)))

(defn is-known? [field viewmodel]
  (if (= :unknown (field viewmodel)) field false))

(defn next-unknown-resource [viewmodel]
  (let [load-order (:load-order viewmodel)
        missing-resources (remove false? (map #(is-known? %1 viewmodel) load-order))
        next-field (first missing-resources)]
    (case next-field
      :collections {:type next-field
                    next-field (next-field viewmodel)}
      :courses {:type :collection
                :collection (:collection viewmodel)}
      false)))
