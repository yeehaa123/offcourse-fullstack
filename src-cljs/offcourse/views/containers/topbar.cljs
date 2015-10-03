(ns offcourse.views.containers.topbar
  (:require [offcourse.stores.appstate :refer [appstate]]
            [offcourse.views.components.breadcrumbs :refer [breadcrumbs]]
            [clojure.string :as string]))

(defn topbar []
  (let [crumbs (:topbar (:viewmodel @appstate))]
    [:section.topbar
     [breadcrumbs crumbs]
     [:div.btn.btn-feedback "Feedback"]]))
