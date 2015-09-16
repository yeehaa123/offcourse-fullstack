(ns offcourse.views.containers.topbar
  (:require [reagent.session :as session]
            [offcourse.views.components.breadcrumbs :refer [breadcrumbs]]
            [clojure.string :as string]))

(defn topbar []
  (let [crumbs (session/get-in [:viewmodel :topbar])]
    (println crumbs)
    [:section.topbar
     [breadcrumbs crumbs]
     [:div.btn.btn-feedback "Feedback"]]))
