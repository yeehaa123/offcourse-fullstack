(ns offcourse.appstate.model
  (:require [reagent.core :as reagent]
            [offcourse.models.action :refer [respond]]))

(defrecord AppState [level mode course-collections viewmodel])

(defn new-appstate []
  (map->AppState {:level {:type :initial}
                  :mode :learn
                  :collections {:featured []
                                :popular []
                                :new []}
                  :viewmodel {:cards []
                              :sidebar {}
                              :topbar {}}}))

(defn set-mode [appstate mode]
  (assoc-in appstate [:mode] mode))

(defn set-level [appstate level]
  (assoc appstate :level level))

(defn toggle-mode [appstate]
  (update-in appstate [:mode] #(if (= %1 :learn) :curate :learn)))

(defn add-checkpoint [appstate course]
  (let [viewmodel {:level :checkpoint
                   :course (assoc-in course [:checkpoints :new]
                                     {:task "Do Something new"
                                      :url "bla.com"})
                   :checkpoint-id :new}]
    (assoc-in appstate [:viewmodel] viewmodel)))

(defn refresh-checkpoint [{:keys [level] :as appstate} course]
  (let  [checkpoint-id (:checkpoint-id level)
         viewmodel {:level :checkpoint
                    :course course
                    :checkpoint-id checkpoint-id}]
    (if (= :new checkpoint-id)
      (add-checkpoint appstate course)
      (assoc-in appstate [:viewmodel] viewmodel))))

(defn update-checkpoint [{:keys [level] :as appstate} course]
  (let  [checkpoint-id (:checkpoint-id level)]
    (if (= :new checkpoint-id)
      (add-checkpoint appstate course)
      (refresh-checkpoint appstate course))))

;; collection-names shouldn't be hard-coded

(defn refresh-collection [{:keys [level] :as appstate} collection]
  (let [collection-name (:collection-name level)
        viewmodel       {:level :collection
                         :collection-name collection-name
                         :collection collection
                         :collection-names [:featured :new :popular]}]
    (assoc-in appstate [:viewmodel] viewmodel)))

(defn refresh-course [appstate course]
  (let [viewmodel {:level :course
                   :course course}]
    (assoc-in appstate [:viewmodel] viewmodel)))


(defn highlight-collection [appstate {:keys [course-id checkpoint-id highlight]}]
  (update-in appstate [:viewmodel :collection course-id :checkpoints checkpoint-id :highlighted] (fn [] highlight)))

(defn highlight-course [appstate {:keys [course-id checkpoint-id highlight]}]
  (update-in appstate [:viewmodel :course :checkpoints checkpoint-id :highlighted] (fn [] highlight)))

(defn update-collections [appstate {:keys [collection-name course-ids]}]
  (update-in appstate [:collections collection-name] (fn [_] course-ids)))
