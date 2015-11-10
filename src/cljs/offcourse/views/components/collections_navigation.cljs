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

(defn Collections-Navigation [collection-names tag-names user-names handlers]
  (d/nav {}
         (d/ul {}
               (for [collection-name collection-names]
                 (d/li {:key collection-name}
                       (Collection-Button collection-name handlers))))
         (Tags tag-names handlers)
         (d/ul {}
               (for [user-name user-names]
                 (d/li {:key user-name}
                       (User-Button user-name handlers))))))
