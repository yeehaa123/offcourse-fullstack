(ns offcourse.views.components.tags
  (:require [clojure.string :as str]
            [quiescent.dom :as d]
            [offcourse.helpers.css :as css]
            [cljs.core.match :refer-macros [match]]))

(defn Tag [{:keys [label-name selected?] :as label} {:keys [onClick]}]
  (let [highlighted (if selected? "selected" "not-selected")]
    (d/span {:key label-name
             :onClick #(onClick (name label-name) %1)
             :className (css/classes "tag" highlighted)}
            (name label-name))))

(defn Tags [tags handlers]
  (d/p {}
       (map #(Tag (val %1) handlers) tags)))
