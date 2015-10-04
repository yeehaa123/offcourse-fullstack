(ns offcourse.models.appstate)

(defn toggle-mode [mode]
  (if (= mode :learn) :curate :learn))

(defn update-level [appstate type]
  (if-not (= type :update)
    (swap! appstate assoc :level type)))

(defn set-course-collections! [appstate collections]
  (swap! appstate assoc-in [:course-collections] collections))

(defn set-mode! [appstate {mode :mode}]
  (swap! appstate assoc-in [:mode] mode))

(defn toggle-mode! [appstate]
  (swap! appstate update-in [:mode] toggle-mode))
