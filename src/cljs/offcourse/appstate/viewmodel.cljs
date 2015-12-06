(ns offcourse.appstate.viewmodel
  (:require [schema.core :as schema :include-macros true]
            [offcourse.appstate.models.collection-viewmodel :as clvm :refer [CollectionViewmodel]]
            [offcourse.appstate.models.course-viewmodel :as covm :refer [CourseViewmodel]]
            [offcourse.appstate.models.checkpoint-viewmodel :as cpvm :refer [CheckpointViewmodel]]
            [offcourse.models.course :as co]
            [offcourse.models.collection :as cl]
            [offcourse.models.checkpoint :as cp]))

(defmulti select
  (fn [{:keys [level]}] level))

(defmethod select :collection [{:keys [level collection-type collection-name]}]
  (let [collection-name (or collection-name :featured)
        collection (cl/->collection collection-type collection-name)]
    (clvm/->viewmodel level collection)))

(defmethod select :course [{:keys [course-id]}]
  (covm/->viewmodel (co/->course course-id)))

(defmethod select :checkpoint [{:keys [course-id checkpoint-id]}]
  (cpvm/->viewmodel (co/->course course-id) (cp/->checkpoint checkpoint-id)))
