(ns offcourse.server
  (:require [com.calvinfroedge.clutch :as clutch]
            [environ.core :refer [env]]
            [offcourse.handler :refer [app]]
            [offcourse.models.course :as co]
            [ring.adapter.jetty :refer [run-jetty]]))

 (defn -main [& args]
   (let [port (Integer/parseInt (or (env :port) "3000"))]
     (run-jetty app {:port port :join? false})))

(defn init-db []
  (let [db     (clutch/get-database "sample")
        course (co/coerce-from-map {:course-id 1
                                    :curator "yeehaa"
                                    :goal "DO This"
                                    :checkpoints {}
                                    :flags [:featured]})]
    (println (clutch/put-document db (assoc course :_id "123-1")))))


