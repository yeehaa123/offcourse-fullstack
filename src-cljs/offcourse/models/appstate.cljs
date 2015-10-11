(ns offcourse.models.appstate
  (:require [reagent.core :as reagent]
            [offcourse.models.action :refer [respond]]))

(defrecord AppState [level mode course-collections viewmodel])

(defn new-appstate []
  (reagent/atom (map->AppState {:level {:type :initial}
                                 :mode :learn
                                 :course-collections [:featured :popular :new]
                                 :viewmodel {:cards []
                                             :sidebar {}
                                             :topbar {}}})))

(defn toggle-mode [mode]
  (if (= mode :learn) :curate :learn))

(defn set-level [appstate payload]
  (swap! appstate assoc :level payload))

(defn toggle-done [payload]
  {:type :toggle-done
   :payload payload})

(defn set-course-collections! [appstate collections]
  (swap! appstate assoc-in [:course-collections] collections))

(defn set-mode! [appstate {mode :mode}]
  (swap! appstate assoc-in [:mode] mode))

(defn toggle-mode! [appstate]
  (swap! appstate update-in [:mode] toggle-mode))

(defn get-data [payload]
  {:type :get-data
   :payload payload})
