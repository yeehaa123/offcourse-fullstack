(ns offcourse.views.containers.topbar
  (:require [offcourse.views.components.breadcrumbs :refer [breadcrumbs]]
            [clojure.string :as string]))

(defn topbar [appstate]
  (let [crumbs (:topbar (:viewmodel @appstate))]
    [:section.topbar
     [breadcrumbs crumbs]
     [:div.btn.btn-feedback "Feedback"]]))
