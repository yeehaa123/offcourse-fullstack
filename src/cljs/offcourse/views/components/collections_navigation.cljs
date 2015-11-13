(ns offcourse.views.components.collections-navigation
  (:require [offcourse.helpers.css :as css]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.components.tags :refer [Tags]]))

(defn Collection-Panel [{:keys [collection-name collection-type]} type title labels handler]
  (d/section {:className "dashboard-section"}
             (d/h1 {:className "title"} title)
             (if (= collection-type type)
               (Tags labels collection-name {:onClick handler})
               (Tags labels {:onClick handler}))))

(defn Collections-Navigation [collection named-collections tags users
                              {:keys [go-to-tag-collection
                                      go-to-user-collection
                                      go-to-collection]}]
  (d/section {:className "dashboard"}
             (Collection-Panel collection :named-collection "Collections"
                               named-collections go-to-collection)
             (Collection-Panel collection :tag-collection "Tags"
                               tags go-to-tag-collection)
             (Collection-Panel collection :user-collection "Users"
                               users go-to-user-collection)))
