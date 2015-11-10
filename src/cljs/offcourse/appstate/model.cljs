(ns offcourse.appstate.model
  (:require [offcourse.models.action :refer [respond]]
            [offcourse.models.course :as co]
            [offcourse.models.courses :as cs]
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

(defn set-level [appstate {:keys [type] :as level}]
  (let [viewmodel (vm/select level)]
    (assoc appstate :level level :viewmodel viewmodel)))

(defn toggle-mode [appstate]
  (update-in appstate [:mode]
             #(if (= %1 :learn) :curate :learn)))

(defn add-checkpoint [appstate course]
  (let [checkpoint (cp/new)
        course (co/add-temp-checkpoint course checkpoint)]
    (set-viewmodel appstate (vm/new-checkpoint course (:checkpoint-id checkpoint) {}))))

(defn refresh-checkpoint [{:keys [level] :as appstate} course resources]
  (let  [checkpoint-id (:checkpoint-id level)
         {:keys [url]} (co/find-checkpoint course checkpoint-id)
         resource (r/find-resource resources url)]
   (set-viewmodel appstate (vm/new-checkpoint course checkpoint-id resource))))

(defn update-checkpoint [appstate course checkpoint-id resources]
  (if (= :new checkpoint-id)
    (add-checkpoint appstate course)
    (refresh-checkpoint appstate course resources)))

(defn refresh-tags [appstate tags collection]
  (assoc-in appstate [:viewmodel] (vm/new-tags collection tags)))

(defn refresh-collection [{:keys [level] :as appstate} {:keys [collections courses]}]
  (let [{:keys [collection-name collection-type]} level
        collection-names (keys (collection-type collections))
        collection-name (if (= collection-name :unknown)
                          (second collection-names)
                          collection-name)
        {:keys [collection-ids] :as collection} (get-in collections [collection-type collection-name])
        collection (assoc collection :collection-type collection-t)
        found-courses (cs/find-courses courses collection-ids)
        courses (if (not-any? nil? (vals found-courses))
                  found-courses
                  :unknown)]
    (println collection)
    (set-viewmodel appstate (vm/new-collection collections collection courses))))

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
