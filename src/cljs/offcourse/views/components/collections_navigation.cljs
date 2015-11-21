(ns offcourse.views.components.collections-navigation
  (:require [offcourse.helpers.css :as css]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.components.tags :refer [Tags]]))

(defn Collection-Panel [type title labels handler]
  (d/section {:className "dashboard-section"}
             (d/h1 {:className "title"} title)
             (Tags labels {:onClick handler})))

(defn Collections-Navigation [{:keys [flags tags users]}
                              {:keys [go-to-tag-collection
                                      go-to-user-collection
                                      go-to-collection]}]
  (d/section {:className "dashboard"}
             (Collection-Panel :flags "Flags"
                               flags go-to-collection)
             (Collection-Panel :tags "Tags"
                               tags go-to-tag-collection)
             (Collection-Panel :users "Users"
                               users go-to-user-collection)))
