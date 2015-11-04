(ns offcourse.appstate.model
  (:require [offcourse.models.action :refer [respond]]
            [offcourse.models.course :as co]
            [offcourse.models.checkpoint :as cp]
            [offcourse.models.resource :as r]
            [offcourse.appstate.viewmodel :as vm]))

(defrecord AppState [level mode course-collections viewmodel])

(defn new-appstate []
  (map->AppState {:user-id     :unknown
                  :level       {:type :initial}
                  :mode        :learn
                  :viewmodel   {}}))

(defn set-viewmodel [appstate viewmodel]
  (assoc-in appstate [:viewmodel] viewmodel))

(defn update-viewmodel [appstate fn]
  (update-in appstate [:viewmodel] fn))

(defn set-mode [appstate mode]
  (assoc-in appstate [:mode] mode))

(defn set-user-id [appstate user-id]
  (assoc-in appstate [:user-id] user-id))

(defn set-level [appstate level]
  (assoc appstate :level level))

(defn toggle-mode [appstate]
  (update-in appstate [:mode]
             #(if (= %1 :learn) :curate :learn)))

(defn add-checkpoint [appstate course]
  (let [checkpoint (cp/new)
        course (co/add-temp-checkpoint course checkpoint)]
    (set-viewmodel appstate (vm/new-checkpoint course (:checkpoint-id checkpoint)))))

(defn refresh-checkpoint [{:keys [level] :as appstate} course resources]
  (let  [checkpoint-id (:checkpoint-id level)
         {:keys [url]} (co/find-checkpoint course checkpoint-id)
         resource (r/find-resource resources url)]
   (set-viewmodel appstate (vm/new-checkpoint course checkpoint-id resource))))

(defn update-checkpoint [appstate course checkpoint-id resources]
  (if (= :new checkpoint-id)
    (add-checkpoint appstate course)
    (refresh-checkpoint appstate course resources)))

(defn refresh-collection [{:keys [level] :as appstate} collection]
  (let [collection-name (:collection-name level)]
    (set-viewmodel appstate (vm/new-collection collection-name collection))))

(defn refresh-course [appstate course resources]
  (let [urls (into #{} (co/get-resource-urls course))
        resources (r/find-resources resources urls)]
    (assoc-in appstate [:viewmodel] (vm/new-course course resources))))

(defn highlight-collection [appstate {:keys [course-id checkpoint-id highlight]}]
  (update-viewmodel appstate
                    #(vm/highlight-collection %1 course-id checkpoint-id highlight)))

(defn highlight-course [appstate {:keys [checkpoint-id highlight]}]
  (update-viewmodel appstate
                    #(vm/highlight-course %1 checkpoint-id highlight)))
