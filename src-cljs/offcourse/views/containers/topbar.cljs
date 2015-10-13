(ns offcourse.views.containers.topbar
  (:require [offcourse.views.components.breadcrumbs :refer [breadcrumbs]]
            [offcourse.actions.index :as actions]
            [clojure.string :as string]))

(defn topbar [appstate]
  (let [crumbs (:topbar (:viewmodel @appstate))]
    [:section.topbar
     [breadcrumbs crumbs {:on-click actions/go-to}]
     [:div.btn.btn-feedback "Feedback"]]))
