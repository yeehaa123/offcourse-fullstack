(ns offcourse.server
  (:require [offcourse.handler :refer [app]]
            [environ.core :refer [env]]
            [com.calvinfroedge.clutch :as clutch]
            [offcourse.models.course :as co]
            [ring.adapter.jetty :refer [run-jetty]])

  (:gen-class))

 (defn -main [& args]
   (let [port (Integer/parseInt (or (env :port) "3000"))]
     (run-jetty app {:port port :join? false})))


(defn init-db []
  (co/->course 1))

