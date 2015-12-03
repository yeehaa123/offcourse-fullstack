(ns offcourse.appstate.viewmodel
  (:require [schema.core :as schema :include-macros true]
            [offcourse.appstate.viewmodels.collection :as clvm :refer [CollectionViewmodel]]
            [offcourse.appstate.viewmodels.course :as covm :refer [CourseViewmodel]]
            [offcourse.appstate.viewmodels.checkpoint :as cpvm :refer [CheckpointViewmodel]]
            [offcourse.models.collection :as cl]
            [offcourse.models.course :as co :refer [Course]]))

(defmulti select
  (fn [{:keys [level]}] level))

(defmethod select :collection [{:keys [level collection-type collection-name]}]
  (let [collection-name (or collection-name :featured)
        collection (cl/->collection collection-type collection-name)]
    (clvm/->viewmodel level collection)))

(defmethod select :course [{:keys [course-id]}]
  (covm/->viewmodel (co/->course course-id)))

(defmethod select :checkpoint [{:keys [course-id checkpoint-id]}]
  (cpvm/->viewmodel (co/->course course-id) checkpoint-id))
