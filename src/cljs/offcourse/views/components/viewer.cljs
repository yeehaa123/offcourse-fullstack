(ns offcourse.views.components.viewer
  (:require [offcourse.helpers.css :as css]
            [markdown.core :refer [md->html]]
            [quiescent.dom :as d]))


(defn Viewer [resource]
  (d/section {:className "viewer"}
             (if-let [content (:content resource)]
               (d/article {:className "content"
                           :dangerouslySetInnerHTML {:__html (md->html content)}})
               (d/div {} "Waiting"))))
