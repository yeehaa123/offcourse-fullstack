(ns offcourse.routes
  (:require [clojure.string :as string]
            [offcourse.actions.index :as actions]
            [secretary.core :as secretary
             :include-macros true
             :refer-macros [defroute]]))


(defroute "/courses/:id" {id :id}
  (actions/get-course (js/parseInt id)))

(defroute "/:name" {name :name}
  (let [keyword (keyword name)]
    (actions/get-courses keyword)))

(defroute "/" []
  (actions/toggle-mode!))
