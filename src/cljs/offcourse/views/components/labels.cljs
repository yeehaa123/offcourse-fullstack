(ns offcourse.views.components.labels
  (:require [clojure.string :as str]
            [quiescent.dom :as d]
            [offcourse.helpers.css :as css]
            [cljs.core.match :refer-macros [match]]))

(defn Label
  ([label-name labels handlers]
   (Label ((keyword label-name) labels) handlers))
  ([{:keys [label-name selected? highlighted?] :as label} {:keys [onClick highlight]}]
   (let [selected (if selected? "selected" "not-selected")
         highlighted (if highlighted? "highlighted" "not-highlighted")
         highlight (partial highlight label-name)]
     (d/span {:key label-name
              :onClick #(onClick (name label-name) %1)
              :onMouseEnter #(highlight true %1)
              :onMouseLeave #(highlight false %1)
              :className (css/classes "tag" highlighted selected)}
             (name label-name)))))

(defn Labels
  ([labels handlers]
   (d/p {}
        (map #(Label (val %1) handlers) labels)))
  ([label-names labels handlers]
   (d/p {}
        (map #(Label %1 labels handlers) label-names))))
