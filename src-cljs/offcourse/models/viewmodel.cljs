(ns offcourse.models.viewmodel
  (:require [offcourse.stores.courses :as ds]))

(defn update-cards [courses course]
  (let [courses (remove #(== (course :id) (:id %1)) courses)]
    (conj courses (assoc course :type :course))))

(defn refresh-viewmodel [appstate viewmodel]
  (swap! appstate assoc-in [:viewmodel] viewmodel))

(defn refresh-checkpoint [appstate]
  (let [level (:level @appstate)
        course-id (:course-id level)
        checkpoint-id (:checkpoint-id level)
        course (@ds/store course-id)
        checkpoint (get (course :checkpoints) checkpoint-id)
        viewmodel {:cards nil
                   :sidebar checkpoint
                   :topbar [(course :goal) (checkpoint :task)]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-course [appstate]
  (let [course-id (:course-id (:level @appstate))
        course (@ds/store course-id)
        viewmodel {:cards (map #(assoc %1 :type :checkpoint) (vals (course :checkpoints)))
                   :sidebar course
                   :topbar [(course :goal)]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-collection [appstate]
  (let [collection-name (:collection-name (:level @appstate))
        courses (ds/choose-collection collection-name)
        viewmodel {:cards (map #(assoc %1 :type :course) courses)
                   :sidebar nil
                   :topbar [collection-name]}]
    (refresh-viewmodel appstate viewmodel)))

(defn update-viewmodel [appstate]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (refresh-collection appstate)
      :course (refresh-course appstate)
      :checkpoint (refresh-checkpoint appstate))))
