(ns offcourse.appstate.model
  (:require [offcourse.models.action :refer [respond]]
            [offcourse.models.course :as co]
            [offcourse.models.courses :as cs]
            [offcourse.appstate.viewmodel :as vm]))

(defrecord AppState [level mode course-collections viewmodel])

(defn new-appstate []
  (map->AppState {:user-id     :unknown
                  :level       {:type :collection}
                  :mode        :learn
                  :viewmodel   {}}))

(defn set-viewmodel [appstate viewmodel]
  (assoc-in appstate [:viewmodel] viewmodel))

(defn update-viewmodel [appstate fn]
  (update-in appstate [:viewmodel] fn))

(defn set-mode [mode appstate]
  (assoc-in appstate [:mode] mode))

(defn set-user-id [user-id appstate]
  (assoc-in appstate [:user-id] user-id))

(defn set-level [level appstate]
  (let [viewmodel (vm/select level)]
    (assoc appstate :level level :viewmodel viewmodel)))

(defn toggle-mode [appstate]
  (update-in appstate [:mode] #(if (= %1 :learn) :curate :learn)))

#_(defn add-checkpoint [appstate course]
    (let [checkpoint (cp/new)
          course (co/add-temp-checkpoint course checkpoint)]
      (set-viewmodel appstate (vm/new-checkpoint course (:checkpoint-id checkpoint) {}))))

#_(defn update-checkpoint [appstate course checkpoint-id resources]
  (if (= :new checkpoint-id)
    (add-checkpoint appstate course)
    (refresh-checkpoint appstate course resources)))

(defn highlight-checkpoint [course-id checkpoint-id highlight appstate]
  (update-viewmodel appstate #(vm/toggle-highlight %1 course-id checkpoint-id highlight)))

(defn highlight-label [label-name label-type highlight appstate]
  (update-viewmodel appstate #(vm/toggle-highlight-label %1 label-name label-type highlight)))

(defn refresh [store appstate]
  (update-viewmodel appstate #(vm/refresh %1 store)))

(defn unknown-data [{:keys [viewmodel]}]
  (let [errors  (vm/check viewmodel)
        unknown-fields (keys errors)
        unknown-field (first unknown-fields)]
    (println "ERROR:" errors)
    (when unknown-field
      [unknown-field viewmodel])))
