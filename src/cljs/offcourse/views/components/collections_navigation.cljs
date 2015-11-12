(ns offcourse.views.components.collections-navigation
  (:require [offcourse.helpers.css :as css]
            [clojure.string :as string]
            [quiescent.dom :as d]
            [offcourse.views.components.temp-components :refer [Tags]]))


(defn Collection-Panel [{:keys [collection-name collection-type]} type title names handler]
  (d/section {:className "dashboard-section"}
             (d/h1 {:className "title"} title)
             (if (= collection-type type)
               (Tags names collection-name {:onClick handler})
               (Tags names {:onClick handler}))))

(defn Collections-Navigation [collection collection-names tag-names user-names {:keys [go-to-tag-collection
                                                                            go-to-user-collection
                                                                            go-to-collection]}]
  (d/section {:className "dashboard"}
             (Collection-Panel collection :named-collection "Collections" (map name collection-names) go-to-collection)
             (Collection-Panel collection :tag-collection "Tags" (sort tag-names) go-to-tag-collection)
             (Collection-Panel collection :user-collection "Users" (sort user-names) go-to-user-collection)))
