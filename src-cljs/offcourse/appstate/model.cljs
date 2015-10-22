(ns offcourse.appstate.model
  (:require [reagent.core :as reagent]
            [offcourse.models.action :refer [respond]]))

(defrecord AppState [level mode course-collections viewmodel])

(defn new-appstate []
  (reagent/atom (map->AppState {:level {:type :initial}
                                :mode :learn
                                :collections {:featured []
                                              :popular []
                                              :new []}
                                :viewmodel {:cards []
                                            :sidebar {}
                                            :topbar {}}})))

(defn set-level [appstate payload]
  (swap! appstate assoc :level payload))

(defn toggle-done [payload]
  (respond :requested-toggle-done
           :payload payload))

(defn set-mode [appstate {mode :mode}]
  (swap! appstate assoc-in [:mode] mode)
  (respond :updated-appstate
           :appstate appstate))

(defn toggle-mode [appstate]
  (swap! appstate update-in [:mode] #(if (= %1 :learn) :curate :learn)))

(defn get-data [payload]
  (respond :requested-data
           :payload payload))

(defn commit-data [appstate {:keys [course-id checkpoint-id] :as payload}]
  (let [course (:course (:viewmodel @appstate))
        checkpoint (get (:checkpoints course) checkpoint-id)]
    (respond :requested-commit
             :payload (assoc payload :course-id (:id course) :checkpoint checkpoint))))

(defn update-collections [appstate {:keys [collection-name course-ids]}]
  (let [collections (:collections @appstate)]
    (swap! appstate update-in [:collections collection-name] (fn [_] course-ids))))

(defn switch-route [payload]
  (respond :requested-route
            :payload payload))

(defn force-refresh [appstate]
  (respond :updated-viewmodel
           :appstate appstate))

(defn refresh-viewmodel [appstate viewmodel]
  (do
    (swap! appstate assoc-in [:viewmodel] viewmodel)
    (respond :updated-viewmodel
             :appstate appstate)))

(defn refresh-checkpoint [appstate {store :store}]
  (let [level (:level @appstate)
        checkpoint-id (:checkpoint-id level)
        course-id (:course-id level)
        course ((:courses @store) course-id)
        viewmodel {:level :checkpoint
                   :course course
                   :checkpoint-id checkpoint-id}]
    (if (get-in course [:checkpoints checkpoint-id])
      (refresh-viewmodel appstate viewmodel)
      (respond :redirect))))

(defn add-new-checkpoint [appstate {store :store}]
  (let [level (:level @appstate)
        checkpoint-id (:checkpoint-id level)
        course-id (:course-id level)
        course ((:courses @store) course-id)
        viewmodel {:level :checkpoint
                   :course (assoc-in course [:checkpoints :new]
                                     {:task "Do Something new"
                                      :url "bla.com"})
                   :checkpoint-id checkpoint-id}]
    (do
      (swap! appstate assoc-in [:viewmodel] viewmodel)
      (swap! appstate assoc :mode :curate)
      (respond :updated-appstate
               :appstate appstate))))

(defn update-checkpoint [appstate payload]
  (let [level (:level @appstate)
        checkpoint-id (:checkpoint-id level)]
    (if (= :new checkpoint-id)
      (add-new-checkpoint appstate payload)
      (refresh-checkpoint appstate payload))))

(defn refresh-course [appstate {store :store}]
  (let [course-id (:course-id (:level @appstate))
        course ((:courses @store) course-id)
        viewmodel {:level :course
                   :course course}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-collection [appstate {store :store}]
  (let [level (:level @appstate)
        collection-name (:collection-name level)
        collection      (->> @store
                             :collections
                             collection-name
                             (map (fn [id] [id (get (:courses @store) id)]))
                             (into {}))
        viewmodel       {:level :collection
                         :collection-name collection-name
                         :collection collection
                         :collection-names [:featured :new :popular]}]
    (if (every? identity (map :id (vals collection)))
      (refresh-viewmodel appstate viewmodel)
      (respond :ignore))))

(defn highlight-collection [appstate {:keys [course-id checkpoint-id highlight]}]
  (let [viewmodel (:viewmodel @appstate)
        viewmodel (update-in viewmodel [:collection course-id :checkpoints
                                        checkpoint-id :highlighted] (fn [] highlight))]
    (refresh-viewmodel appstate viewmodel)))

(defn highlight-course [appstate {:keys [course-id checkpoint-id highlight]}]
  (let [viewmodel (:viewmodel @appstate)
        viewmodel (update-in viewmodel [:course :checkpoints
                                        checkpoint-id :highlighted] (fn [] highlight))]
    (refresh-viewmodel appstate viewmodel)))

(defn toggle-highlight [appstate payload]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (highlight-collection appstate payload)
      :course (highlight-course appstate payload))))

(defn refresh [appstate payload]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (refresh-collection appstate payload)
      :course (refresh-course appstate payload)
      :checkpoint (update-checkpoint appstate payload))))
