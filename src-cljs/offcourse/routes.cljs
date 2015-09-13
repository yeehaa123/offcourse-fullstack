(ns offcourse.routes
  (:require [offcourse.actions.index :as actions]
            [secretary.core :as secretary :include-macros true]))

(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (actions/toggle-mode!))
