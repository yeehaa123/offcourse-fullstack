(ns offcourse.models.viewmodel)

(defn update-cards [courses course]
  (let [courses (remove #(== (course :id) (:id %1)) courses)]
    (conj courses (assoc course :type :course))))

(defn refresh-viewmodel [appstate viewmodel]
  (swap! appstate assoc-in [:viewmodel] viewmodel))

(defn refresh-checkpoint [appstate {checkpoint :checkpoint}]
  (let [viewmodel {:cards nil
                   :sidebar checkpoint
                   :topbar [(checkpoint :course-goal) (checkpoint :task)]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-course [appstate {course :course}]
  (let [viewmodel {:cards (map #(assoc %1 :type :checkpoint) (vals (course :checkpoints)))
                   :sidebar course
                   :topbar [(course :goal)]}]
    (refresh-viewmodel appstate viewmodel)))

(defn refresh-courses [appstate {collection-name :collection-name courses :courses}]
  (let [viewmodel {:cards (map #(assoc %1 :type :course) courses)
                   :sidebar nil
                   :topbar [collection-name]}]
    (refresh-viewmodel appstate viewmodel)))

(defn update-course [appstate {name :name course :course :as payload}]
  (let [id (course :id)
        card-ids (map #(%1 :id) (:cards (:viewmodel @appstate)))
        in-cards (some #(= id %1) card-ids)]
    (if in-cards
      (swap! appstate update-in [:viewmodel :cards] #(update-cards %1 course))
      (refresh-course appstate payload))))
