(ns offcourse.appstate.viewmodel
  (:require [offcourse.models.course :as co]
            [offcourse.models.checkpoint :as cp]
            [offcourse.models.collection :as cl]
            [offcourse.models.courses :as cs]
            [cljs.core.match :refer-macros [match]]))

(defrecord CheckpointViewmodel [level course checkpoint-id])
(defrecord CourseViewmodel [course resources])
(defrecord TagsViewmodel [level tags collection])
(defrecord CollectionViewmodel [level collection courses])

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

(defn new-collection [collection-type collection-name courses]
  (map->CollectionViewmodel {:level :collection
                             :collection-names ["new"]
                             :collection (cl/new-collection collection-type
                                                            collection-name
                                                            :unknown)
                             :courses courses
                             :load-order [:collection]}))

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
    :collection (new-collection collection-type collection-name :unknown)
    :tags (new-tags :unknown :unknown)
    :course (new-course course-id)
    :checkpoint (new-checkpoint course-id checkpoint-id)))

(defn add-field [field {:keys [collection] :as vm} store]
  (case field
    :collection-names (if (get-in store [:collection-names])
                        {:type field}
                        nil)
    :collection (let [{:keys [collection-type collection-name]} collection]
                  (if-not (get-in store [:collections collection-type collection-name])
                    (assoc (field vm) :type field)
                    nil))))

(defn missing-data [{:keys [load-order] :as vm} store]
  (->> load-order
       (map #(add-field %1 vm store))
       (remove nil?)))
