(ns offcourse.models.viewmodel)

(defn update-cards [courses course]
  (let [courses (remove #(== (course :id) (:id %1)) courses)]
    (conj courses (assoc course :type :course))))

(defn refresh-course [name course]
  {:cards (map #(assoc %1 :type :checkpoint) (vals (course :checkpoints)))
   :sidebar course
   :topbar [(course :goal)]})

(defn refresh-courses [name courses]
  {:cards (map #(assoc %1 :type :course) courses)
   :sidebar nil
   :topbar [name]})

(defn update-course [name course viewmodel]
  (let [id (course :id)
        card-ids (map #(%1 :id) (:cards viewmodel))
        in-cards (some #(= id %1) card-ids)]
    (if in-cards
      (update-in viewmodel [:cards] update-cards course)
      (refresh-course name course))))

(defn update-viewmodel [appstate {type :type name :name data :data}]
  (case type
    :collection (swap! appstate assoc-in [:viewmodel] (refresh-courses name data))
    :item (swap! appstate assoc-in [:viewmodel] (refresh-course name data))
    :update (swap! appstate update-in [:viewmodel] #(update-course name data %1))))
