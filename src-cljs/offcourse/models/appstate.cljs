(ns offcourse.models.appstate)

(defn update-level [appstate type]
  (if-not (= type :update)
    (swap! appstate assoc :level type)))

(defn set-mode! [appstate mode]
  (swap! appstate assoc-in [:mode] mode))

(defn set-course-collections! [appstate collections]
  (swap! appstate assoc-in [:course-collections] collections))

(defn toggle-mode [mode]
  (if (= mode :learn) :curate :learn))

(defn toggle-mode! [appstate]
  (swap! appstate update-in [:mode] toggle-mode))
