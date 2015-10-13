(ns offcourse.views.components.breadcrumbs
  (:require [clojure.string :as string]))

(defn breadcrumb [crumb {on-click :on-click}]
  (let [title (as-> crumb $
                (:title $)
                (name $)
                (string/split $ #" ")
                (map string/capitalize $)
                (string/join " " $))
        link? (:link crumb)]
    (if link?
      [:li.btn.btn-level {:on-click #(on-click crumb)} title]
      [:li.btn.btn-level title])))

(defn breadcrumbs [crumbs handlers]
  [:nav.breadcrumbs
   [:ul
    (for [crumb crumbs]
      ^{:key (:level crumb)} [breadcrumb crumb handlers])]])
