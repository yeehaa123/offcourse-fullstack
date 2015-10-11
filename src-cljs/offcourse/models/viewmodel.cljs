(ns offcourse.models.viewmodel)

(defn update-cards [courses course]
  (let [courses (remove #(== (course :id) (:id %1)) courses)]
    (conj courses (assoc course :type :course))))

(defn refresh-viewmodel [appstate viewmodel]
  (swap! appstate assoc-in [:viewmodel] viewmodel))

(defn refresh-checkpoint [appstate store]
  (let [level (:level @appstate)
        course-id (:course-id level)
        checkpoint-id (:checkpoint-id level)
        course ((:courses @store) course-id)
        checkpoint (get (course :checkpoints) checkpoint-id)
        viewmodel {:cards nil
                   :sidebar checkpoint
                   :topbar [(course :goal) (checkpoint :task)]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-course [appstate store]
  (let [course-id (:course-id (:level @appstate))
        course ((:courses @store) course-id)
        viewmodel {:cards (map #(assoc %1 :type :checkpoint) (vals (course :checkpoints)))
                   :sidebar course
                   :topbar [(course :goal)]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-collection [appstate store]
  (let [level (:level @appstate)
        collection-name (:collection-name level)
        collection      (->> @store
                             :collections
                             collection-name
                             (map #(get (:courses @store) %1)))
        viewmodel {:cards (map #(assoc %1 :type :course) collection)
                   :sidebar nil
                   :topbar [collection-name]}]
    (refresh-viewmodel appstate viewmodel)))

(defn update-viewmodel [appstate {store :store}]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (refresh-collection appstate store)
      :course (refresh-course appstate store)
      :checkpoint (refresh-checkpoint appstate store))))
