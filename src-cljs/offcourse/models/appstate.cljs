(ns offcourse.models.appstate)

(defn toggle-mode [mode]
  (if (= mode :learn) :curate :learn))

(defn set-level [appstate payload]
  (println appstate)
  (swap! appstate assoc :level payload))

(defn set-course-collections! [appstate collections]
  (swap! appstate assoc-in [:course-collections] collections))

(defn set-mode! [appstate {mode :mode}]
  (swap! appstate assoc-in [:mode] mode))

(defn toggle-mode! [appstate]
  (swap! appstate update-in [:mode] toggle-mode))
