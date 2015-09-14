(ns offcourse.routes
  (:require [offcourse.actions.index :as actions]
            [secretary.core :as secretary
             :include-macros true
             :refer-macros [defroute]]))

(defroute "/" []
  (actions/toggle-mode!))

(defroute "/:name" {name :name}
  (println name)
  (actions/toggle-mode!))
