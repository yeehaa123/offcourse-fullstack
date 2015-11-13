(ns offcourse.views.components.tags
  (:require [clojure.string :as str]
            [quiescent.dom :as d]
            [offcourse.helpers.css :as css]
            [cljs.core.match :refer-macros [match]]))

(defn Tag [[label-name label-object] selected {:keys [onClick]}]
  (let [selected (= selected label-name)
        highlighted (if selected "selected" "not-selected")]
    (d/span {:key label-name
             :onClick #(onClick (name label-name) %1)
             :className (css/classes "tag" highlighted)}
            (name label-name))))

(defn Tags
  ([tags handlers] (Tags tags nil handlers))
  ([tags selected handlers]
   (d/p {}
        (map #(Tag %1  selected handlers) tags))))
