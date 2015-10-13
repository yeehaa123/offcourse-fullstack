(ns offcourse.models.viewmodel)

(defn update-cards [courses course]
  (let [courses (remove #(== (course :id) (:id %1)) courses)]
    (conj courses (assoc course :type :course))))

(defn refresh-viewmodel [appstate viewmodel]
  (swap! appstate assoc-in [:viewmodel] viewmodel))

(defn refresh-checkpoint [appstate {store :store}]
  (let [level (:level @appstate)
        course-id (:course-id level)
        checkpoint-id (:checkpoint-id level)
        course ((:courses @store) course-id)
        checkpoint (get (course :checkpoints) checkpoint-id)
        viewmodel {:cards nil
                   :sidebar checkpoint
                   :topbar [(course :goal) (checkpoint :task)]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-course [appstate {store :store}]
  (let [course-id (:course-id (:level @appstate))
        course ((:courses @store) course-id)
        viewmodel {:cards (map #(assoc %1 :type :checkpoint) (vals (course :checkpoints)))
                   :sidebar course
                   :topbar [(course :goal)]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-collection [appstate {store :store}]
  (let [level (:level @appstate)
        collection-name (:collection-name level)
        collection      (->> @store
                             :collections
                             collection-name
                             (map #(get (:courses @store) %1)))]
    (when (every? identity (map :id collection))
      (refresh-viewmodel appstate {:cards (map #(assoc %1 :type :course) collection)
                                   :sidebar nil
                                   :topbar [collection-name]}))))

(defn update-viewmodel [appstate payload]
  (let [{type :type :as level} (:level @appstate)]
    (case type
      :collection (refresh-collection appstate payload)
      :course (refresh-course appstate payload)
      :checkpoint (refresh-checkpoint appstate payload))))
