(ns offcourse.views.components.collections-navigation
  (:require [offcourse.helpers.css :as css]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.components.labels :refer [Labels]]))

(defn Collection-Panel [type title labels {:keys [go-to-collection highlight]}]
  (let [highlight (partial highlight type)
        onClick (partial go-to-collection type)]
    (d/section {:className "dashboard-section"}
               (d/h1 {:className "title"} title)
               (Labels labels {:onClick onClick
                               :highlight highlight}))))

(defn Collections-Navigation [{:keys [flags tags users]}
                              {:keys [highlight-label
                                      go-to-collection]}]
  (d/section {:className "dashboard"}
             (Collection-Panel :flags "Flags"
                               flags {:go-to-collection go-to-collection
                                      :highlight highlight-label})
             (Collection-Panel :tags "Tags"
                               tags {:go-to-collection go-to-collection
                                     :highlight highlight-label})
             (Collection-Panel :users "Users"
                               users {:go-to-collection go-to-collection
                                      :highlight highlight-label})))
