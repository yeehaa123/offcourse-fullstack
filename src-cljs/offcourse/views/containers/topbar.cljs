(ns offcourse.views.containers.topbar)

(defn topbar []
  [:section.topbar
   [:nav.breadcrumbs
    [:ul
     [:li.btn.btn-level "Goal"]
     [:li.btn.btn-level "Task"]
     [:li.btn.btn-level.btn-is-active "Resource"]]]
   [:li.btn.btn-feedback "Feedback"]])
