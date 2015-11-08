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
  ([course-id checkpoint-id] {:level :checkpoint
                              :course (co/new course-id :unknown :unknown :unknown)
                              :checkpoint (cp/new {:checkpoint-id checkpoint-id})
                              :resource :unknown})
  ([course checkpoint-id resources]
   (map->CheckpointViewmodel {:level :checkpoint
                              :course course
                              :checkpoint (co/find-checkpoint course checkpoint-id)
                              :resource :unknown})))

(defn new-course
  ([course-id]
   (map->CourseViewmodel {:level :course
                          :course (co/new course-id :unknown :unknown :unknown)
                          :resources :unknown}))
  ([course resources]
   (map->CourseViewmodel {:level :course
                          :course course
                          :resources resources})))

(defn new-collection [collection-type collection-name courses]
  (map->CollectionViewmodel {:level :collection
                             :collection (cl/new-collection collection-type
                                                            collection-name
                                                            :unknown)
                             :collection-names ["new" "featured"]
                             :courses courses}))

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

(defn missing-data? [key item]
  (let [missing (remove nil? (map #(when (= :unknown %1) %1) (vals item)))]
    (if-not (empty? missing)
      (assoc item :type key)
      nil)))

(defn missing? [[key value :as item]]
  (match item
         [:collection _] (missing-data? key value)
         [:course _] (missing-data? key value)
         [_ :unknown] {:type key}
         [_ _] nil))

(defn missing-data [viewmodel]
  (->> viewmodel
       (map missing?)
       (remove nil?)))
