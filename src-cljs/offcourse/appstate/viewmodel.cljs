(ns offcourse.appstate.viewmodel
  (:require [offcourse.models.action :refer [respond]]))

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
        course-id (:course-id level)
        checkpoint-id (:checkpoint-id level)
        course ((:courses @store) course-id)
        viewmodel {:level :checkpoint
                   :course course
                   :checkpoint-id checkpoint-id}]
    (refresh-viewmodel appstate viewmodel)))

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

(defn highlight-collection [appstate {:keys [course-id checkpoint-id]}]
  (let [viewmodel (:viewmodel @appstate)
        viewmodel (update-in viewmodel [:collection course-id :checkpoints
                                        checkpoint-id :highlighted] not)]
    (refresh-viewmodel appstate viewmodel)))

(defn highlight-course [appstate {:keys [course-id checkpoint-id]}]
  (let [viewmodel (:viewmodel @appstate)
        viewmodel (update-in viewmodel [:course :checkpoints
                                        checkpoint-id :highlighted] not)]
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
      :checkpoint (refresh-checkpoint appstate payload))))
