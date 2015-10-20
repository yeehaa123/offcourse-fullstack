(ns offcourse.appstate.viewmodel
  (:require [offcourse.models.action :refer [respond]]))

(defn update-cards [courses course]
  (let [courses (remove #(== (course :id) (:id %1)) courses)]
    (conj courses (assoc course :type :course))))

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
        checkpoint (get (course :checkpoints) checkpoint-id)
        viewmodel {:cards nil
                   :sidebar {:level :checkpoint
                             :item (assoc checkpoint :course-id course-id)
                             :schema {:checkbox :completed
                                      :title :task}}
                   :topbar [{:level :course
                             :title (course :goal)
                             :course-id course-id
                             :link true}
                            {:level :checkpoint
                             :title (checkpoint :task)
                             :checkpoint-id checkpoint-id}]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-course [appstate {store :store}]
  (let [course-id (:course-id (:level @appstate))
        course ((:courses @store) course-id)
        viewmodel {:cards (map #(assoc %1 :type :checkpoint) (vals (course :checkpoints)))
                   :sidebar {:level :course
                             :item course
                             :schema {:map nil
                                       :title :goal
                                       :list :checkpoints}}
                   :topbar [{:level :course
                             :title (course :goal)
                             :course-id course-id}]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-collection [appstate {store :store}]
  (let [level (:level @appstate)
        collection-name (:collection-name level)
        collection      (->> @store
                             :collections
                             collection-name
                             (map #(get (:courses @store) %1)))]
    (if (every? identity (map :id collection))
      (refresh-viewmodel appstate {:cards (map #(assoc %1 :type :course) collection)
                                   :sidebar {:level :collection
                                             :collection-names [:featured :new :popular]}
                                   :topbar [{:level :collection
                                            :title collection-name
                                             :collection-name collection-name}]})
      (respond :ignore))))

(defn refresh [appstate payload]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (refresh-collection appstate payload)
      :course (refresh-course appstate payload)
      :checkpoint (refresh-checkpoint appstate payload))))
