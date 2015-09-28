(ns offcourse.views.containers.topbar
  (:require [offcourse.stores.viewmodel :refer [viewmodel]]
            [offcourse.views.components.breadcrumbs :refer [breadcrumbs]]
            [clojure.string :as string]))

(defn topbar []
  (let [crumbs (:topbar @viewmodel)]
    [:section.topbar
     [breadcrumbs crumbs]
     [:div.btn.btn-feedback "Feedback"]]))
