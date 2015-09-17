(ns offcourse.views.containers.topbar
  (:require [offcourse.stores.viewmodel :as viewmodel]
            [offcourse.views.components.breadcrumbs :refer [breadcrumbs]]
            [clojure.string :as string]))

(defn topbar []
  (let [crumbs @viewmodel/topbar]
    (println crumbs)
    [:section.topbar
     [breadcrumbs crumbs]
     [:div.btn.btn-feedback "Feedback"]]))
