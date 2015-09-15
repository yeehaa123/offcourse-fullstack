(ns offcourse.views.components.breadcrumbs
  (:require [clojure.string :as string]))

(defn breadcrumb [crumb]
  [:li.btn.btn-level
   (string/capitalize (name crumb))])

(defn breadcrumbs [crumbs]
  [:nav.breadcrumbs
   [:ul
    (for [crumb crumbs]
      ^{:key crumb} [breadcrumb crumb])]])
