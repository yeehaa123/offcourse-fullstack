(ns offcourse.views.components.labels
  (:require [clojure.string :as str]
            [quiescent.dom :as d]
            [offcourse.helpers.css :as css]
            [cljs.core.match :refer-macros [match]]))

(defn Label [{:keys [label-name selected? highlighted?] :as label} {:keys [onClick highlight]}]
  (let [selected (if selected? "selected" "not-selected")
        highlighted (if highlighted? "highlighted" "not-highlighted")
        highlight (partial highlight label-name)]
    (d/span {:key label-name
             :onClick #(onClick (name label-name) %1)
             :onMouseEnter #(highlight true)
             :onMouseLeave #(highlight false)
             :className (css/classes "tag" highlighted selected)}
            (name label-name))))

(defn Labels [tags handlers]
  (d/p {}
       (map #(Label (val %1) handlers) tags)))