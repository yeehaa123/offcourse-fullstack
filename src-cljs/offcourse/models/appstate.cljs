(ns offcourse.models.appstate
  (:require [reagent.core :as reagent]
            [offcourse.models.action :refer [respond]]))

(defrecord AppState [level mode course-collections viewmodel])

(defn new-appstate []
  (reagent/atom (map->AppState {:level {:type :initial}
                                :mode :learn
                                :collections {:featured []
                                              :popular []
                                              :new []}
                                :viewmodel {:cards []
                                            :sidebar {}
                                            :topbar {}}})))

(defn toggle-mode [mode]
  (if (= mode :learn) :curate :learn))

(defn set-level [appstate payload]
  (swap! appstate assoc :level payload))

(defn toggle-done [payload]
  {:type :done-toggle-requested
   :payload payload})

(defn set-mode! [appstate {mode :mode}]
  (swap! appstate assoc-in [:mode] mode))

(defn toggle-mode! [appstate]
  (swap! appstate update-in [:mode] toggle-mode))

(defn get-data [payload]
  {:type :data-requested
   :payload payload})

(defn update-collections [appstate {:keys [collection-name course-ids]}]
  (let [collections (:collections @appstate)]
    (swap! appstate update-in [:collections collection-name] (fn [_] course-ids))))

