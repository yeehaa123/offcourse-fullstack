(ns offcourse.appstate.viewmodel
  (:require [offcourse.appstate.viewmodels.collection :as cl-vm]
            [offcourse.appstate.viewmodels.course :as co-vm]
            [offcourse.appstate.viewmodels.checkpoint :as cp-vm]))


(defn select [{:keys [type course-id checkpoint-id collection-type collection-name]} labels]
  (case type
    :collection (cl-vm/->collection {:collection-type collection-type
                                     :collection-name collection-name}
                                    labels)
    :course     (co-vm/new-course {:course-id course-id})
    :checkpoint (cp-vm/new-checkpoint {:course-id course-id
                                       :checkpoint-id checkpoint-id})))

(defn check[{:keys [level] :as viewmodel}]
  (case level
    :collection (cl-vm/check viewmodel)
    :course     (co-vm/check viewmodel)
    :checkpoint (cp-vm/check viewmodel)))

(defn toggle-highlight-label [{:keys [level] :as viewmodel} label-name label-type highlight]
  (cl-vm/highlight-label viewmodel label-name label-type highlight))

(defn toggle-highlight [{:keys [level] :as viewmodel} course-id checkpoint-id highlight]
  (case level
    :collection (cl-vm/highlight-checkpoint viewmodel course-id checkpoint-id highlight)
    :course     (co-vm/highlight-checkpoint viewmodel checkpoint-id highlight)
    :checkpoint (co-vm/highlight-checkpoint viewmodel checkpoint-id highlight)))

(defn refresh [{:keys [level collection] :as viewmodel} store]
  (case level
    :collection (cl-vm/refresh collection store)
    :course     (co-vm/refresh viewmodel store)
    :checkpoint (cp-vm/refresh viewmodel store)))
