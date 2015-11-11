(ns offcourse.appstate.model
  (:require [offcourse.models.action :refer [respond]]
            [offcourse.models.course :as co]
            [offcourse.models.courses :as cs]
            [offcourse.models.checkpoint :as cp]
            [offcourse.appstate.viewmodels.collection :as cl-vm]
            [offcourse.appstate.viewmodels.course :as co-vm]
            [offcourse.appstate.viewmodels.checkpoint :as cp-vm]
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

(defn set-level [appstate {:keys [type] :as level}]
  (let [viewmodel (vm/select level)]
    (assoc appstate :level level :viewmodel viewmodel)))

(defn toggle-mode [appstate]
  (update-in appstate [:mode]
             #(if (= %1 :learn) :curate :learn)))

(defn add-checkpoint [appstate course]
  #_(let [checkpoint (cp/new)
        course (co/add-temp-checkpoint course checkpoint)]
    (set-viewmodel appstate (vm/new-checkpoint course (:checkpoint-id checkpoint) {}))))

(defn refresh-checkpoint [{:keys [level] :as appstate}
                          {:keys [courses resources]}]
  (let  [{:keys [course-id checkpoint-id]} level
         course (get courses course-id)
         {:keys [url]} (co/find-checkpoint course checkpoint-id)
         resource (r/find-resource resources url)]
    (println course)
    (set-viewmodel appstate (cp-vm/new-checkpoint course checkpoint-id resource))))

(defn refresh-collection [{:keys [level] :as appstate} {:keys [collections tags users courses]}]
  (let [{:keys [collection-name collection-type]} level
        collection-names (into #{} (keys (:named-collection collections)))
        tag-names (if tags (into #{} tags) :unknown)
        user-names (if users (into #{} users) :unknown)
        collection-name (if (= collection-name :unknown) (second collection-names) collection-name)
        {:keys [collection-ids] :as collection} (get-in collections [collection-type collection-name])
        collection {:collection-name collection-name
                    :collection-type collection-type
                    :collection-ids collection-ids}
        found-courses (cs/find-courses courses collection-ids)
        courses (if (not-any? nil? (vals found-courses))
                  found-courses
                  :unknown)]
    (set-viewmodel appstate (cl-vm/new-collection collection-names tag-names user-names collection courses))))

(defn refresh-course [{:keys [viewmodel] :as appstate} {:keys [courses resources]}]
  (let [course-id (get-in viewmodel [:course :course-id])
        course (get courses course-id)
        urls (into #{} (co/get-resource-urls course))
        resources (r/find-resources resources urls)]
    (set-viewmodel appstate (co-vm/new-course course resources))))

#_(defn update-checkpoint [appstate course checkpoint-id resources]
  (if (= :new checkpoint-id)
    (add-checkpoint appstate course)
    (refresh-checkpoint appstate course resources)))

(defn highlight-collection [appstate {:keys [course-id checkpoint-id highlight]}]
  (update-viewmodel appstate
                    #(vm/highlight-collection %1 course-id checkpoint-id highlight)))

(defn highlight-course [appstate {:keys [checkpoint-id highlight]}]
  (update-viewmodel appstate
                    #(vm/highlight-course %1 checkpoint-id highlight)))
