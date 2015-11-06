(ns offcourse.views.containers.topbar
  (:require [offcourse.views.components.breadcrumbs :refer [Breadcrumbs]]
            [offcourse.helpers.css :as css]
            [clojure.string :as str]
            [quiescent.dom :as d]))

(defn AuthenticationButton [user {:keys [go-to-user-collection get-authorized]}]
  (if (= user :unknown)
    (d/div {:className "btn btn-light btn-right"
            :onClick #(get-authorized)}
           "Log In")
    (d/div {:className "btn btn-light btn-right"
           :onClick #(go-to-user-collection user %1)}
           (str/capitalize user))))

(defn Topbar [viewmodel user-id handlers]
  (d/section {:className (css/classes "topbar")}
             (Breadcrumbs viewmodel handlers)
             (AuthenticationButton user-id handlers)))
