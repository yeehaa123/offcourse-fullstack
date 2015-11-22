(ns offcourse.views.components.collections-navigation
  (:require [offcourse.helpers.css :as css]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.components.labels :refer [Labels]]))

(defn Collection-Panel [type title labels {:keys [onClick highlight]}]
  (let [highlight (partial highlight type)]
    (d/section {:className "dashboard-section"}
               (d/h1 {:className "title"} title)
               (Labels labels {:onClick onClick
                               :highlight highlight}))))

(defn Collections-Navigation [{:keys [flags tags users]}
                              {:keys [go-to-tag-collection
                                      go-to-user-collection
                                      highlight-label
                                      go-to-collection]}]
  (d/section {:className "dashboard"}
             (Collection-Panel :flags "Flags"
                               flags {:onClick go-to-collection
                                      :highlight highlight-label})
             (Collection-Panel :tags "Tags"
                               tags {:onClick go-to-tag-collection
                                     :highlight highlight-label})
             (Collection-Panel :users "Users"
                               users {:onClick go-to-user-collection
                                     :highlight highlight-label})))
