(ns offcourse.routes
  (:require [clojure.string :as string]
            [offcourse.actions.index :as actions]
            [secretary.core :as secretary
             :include-macros true
             :refer-macros [defroute]]))

(defroute "/" []
  (actions/toggle-mode!))

(defroute "/:name" {name :name}
  (let [keyword (keyword name)]
    (actions/fetch-courses keyword)))
