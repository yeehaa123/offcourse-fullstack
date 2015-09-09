(ns offcourse.views.index
  (:require [offcourse.views.containers.app :refer [app]]
            [offcourse.views.containers.sidebar :refer [sidebar]]
            [offcourse.views.containers.main :refer [main]]))

(defn home-page [mode]
  [app {:mode mode}
   [sidebar]
   [main]])
