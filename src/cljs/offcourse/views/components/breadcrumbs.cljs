(ns offcourse.views.components.breadcrumbs
  (:require [clojure.string :as string]
            [quiescent.dom :as d]))

(defn Breadcrumb [crumb {on-click :go-to}]
  (let [title (as-> crumb $
                (:title $)
                (name $)
                (string/split $ #" ")
                (map string/capitalize $)
                (string/join " " $))
        link? (:link crumb)
        options {:key (:level crumb)
                 :className "btn btn-light btn-level"}
        options (if link?
                  (assoc options :onClick #(on-click crumb))
                  options)]
      (d/li options title)))

(defn createCrumbs [{:keys [level collection course checkpoint-id] :as vm}]
  (case level
    :tags       nil
    :collection [{:level level
                  :title (:collection-name collection)
                  :collection-name (:collection-name collection)}]
    :course     [{:level level
                  :title (:goal course)
                  :course-id (:course-id course)}]
    :checkpoint [{:level :course
                  :title (:goal course)
                  :course-id (:course-id course)
                  :link true}
                 {:level level
                  :title (get-in course [:checkpoints checkpoint-id :task])
                  :checkpoint-id checkpoint-id}]))

(defn Breadcrumbs [viewmodel handlers]
  (let [crumbs (createCrumbs viewmodel)]
    (d/nav {:className "breadcrumbs"}
           (d/ul {}
               (map #(Breadcrumb %1 handlers) crumbs)))))
