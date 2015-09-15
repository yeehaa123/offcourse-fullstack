(ns offcourse.core
  (:require [reagent.core :as reagent :refer [atom]]
            [offcourse.views.index :as views]
            [offcourse.stores.appstate :as appstate]
            [offcourse.routes]
            [offcourse.services.history :as history]
            [offcourse.actions.index :as actions]))

(defn mount-components []
  (reagent/render [#'views/home-page] (.querySelector js/document ".container")))

(defn init! []
  (appstate/init)
  (actions/fetch-docs!)
  (actions/fetch-courses :featured)
  (history/init!)
  (mount-components))
