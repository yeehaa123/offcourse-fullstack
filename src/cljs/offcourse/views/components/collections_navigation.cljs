(ns offcourse.views.components.collections-navigation
  (:require [offcourse.helpers.css :as css]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.components.temp-components :refer [Tags]]))

(defn Collection-Button [collection-name {on-click :go-to-collection}]
  (d/button {:className "btn btn-inverse btn-full btn-nav btn-browse"
             :onClick #(on-click collection-name %1)}
            (string/capitalize (name collection-name))))

(defn User-Button [user-name {on-click :go-to-user-collection}]
  (d/button {:className "btn btn-inverse btn-full btn-nav btn-browse"
             :onClick #(on-click user-name %1)}
            (string/capitalize (name user-name))))

(defn Collections-Navigation [collection-names tag-names user-names {:keys [go-to-tag-collection
                                                                            go-to-user-collection
                                                                            go-to-collection]}]
  (d/section {:className "dashboard"}
             (d/section {:className "dashboard-section"}
                        (d/h1 {:className "title"} "Collections")
                        (Tags (map name collection-names) {:onClick go-to-collection}))
             (d/section {:className "dashboard-section"}
                        (d/h1 {:className "title"} "Tags")
                        (Tags (sort tag-names) {:onClick go-to-tag-collection}))
             (d/section {:className "dashboard-section"}
                        (d/h1 {:className "title"} "Users")
                        (Tags (sort user-names) {:onClick go-to-user-collection}))))
