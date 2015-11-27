(ns offcourse.appstate.viewmodel
  (:require [schema.core :as schema :include-macros true]
            [offcourse.appstate.viewmodels.collection :as clvm :refer [CollectionViewmodel]]
            [offcourse.appstate.viewmodels.course :as covm :refer [CourseViewmodel]]
            [offcourse.appstate.viewmodels.checkpoint :as cpvm :refer [CheckpointViewmodel]]
            [offcourse.models.collection :as cl :refer [Collection]]
            [offcourse.models.label :as label :refer [Label LabelCollection]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.courses :as cs]))

(defprotocol VM
  (check [this])
  (refresh [this store])
  (highlight-checkpoint [this payload])
  (highlight-label [this payload]))

(extend-protocol VM
  CollectionViewmodel
  (check [viewmodel] (clvm/check viewmodel))
  (refresh [viewmodel store] (clvm/refresh viewmodel store))
  (highlight-checkpoint [viewmodel payload] (clvm/highlight-checkpoint viewmodel payload))
  (highlight-label [viewmodel payload] (println payload))
  CourseViewmodel
  (check [viewmodel] (covm/check viewmodel))
  (refresh [viewmodel store] (covm/refresh viewmodel store))
  (highlight-checkpoint [viewmodel payload] (covm/highlight-checkpoint viewmodel payload))
  (highlight-label [viewmodel payload] (println payload))
  CheckpointViewmodel
  (check [viewmodel] (cpvm/check viewmodel))
  (refresh [viewmodel store] (cpvm/refresh viewmodel store))
  (highlight-checkpoint [viewmodel payload] viewmodel)
  (highlight-label [viewmodel payload] (cpvm/highlight-label viewmodel payload)))

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
