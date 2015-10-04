(ns offcourse.models.viewmodel)

(defn update-cards [courses course]
  (let [courses (remove #(== (course :id) (:id %1)) courses)]
    (conj courses (assoc course :type :course))))

(defn refresh-course [appstate name course]
  (let [viewmodel {:cards (map #(assoc %1 :type :checkpoint) (vals (course :checkpoints)))
                   :sidebar course
                   :topbar [(course :goal)]}]
    (swap! appstate assoc-in [:viewmodel] viewmodel)))

(defn refresh-courses [appstate name courses]
  (let [viewmodel {:cards (map #(assoc %1 :type :course) courses)
                   :sidebar nil
                   :topbar [name]}]
    (swap! appstate assoc-in [:viewmodel] viewmodel)))

(defn update-course [appstate name course]
  (let [id (course :id)
        card-ids (map #(%1 :id) (:cards (:viewmodel @appstate)))
        in-cards (some #(= id %1) card-ids)]
    (if in-cards
      (swap! appstate update-in [:viewmodel :cards] #(update-cards %1 course))
      (refresh-course appstate name course))))
