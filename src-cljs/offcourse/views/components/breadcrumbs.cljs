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
                 :className "btn btn-level"}
        options (if link?
                  (assoc options :onClick #(on-click crumb))
                  options)]
      (d/li options title)))

(defn Breadcrumbs [crumbs handlers]
  (d/nav {:className "breadcrumbs"}
         (d/ul {}
               (for [crumb crumbs]
                 (Breadcrumb crumb handlers)))))
