(ns offcourse.server
  (:require [com.calvinfroedge.clutch :as clutch]
            [environ.core :refer [env]]
            [offcourse.handler :refer [app]]
            [ring.adapter.jetty :refer [run-jetty]]))

 (defn -main [& args]
   (let [port (Integer/parseInt (or (env :port) "3000"))]
     (run-jetty app {:port port :join? false})))
