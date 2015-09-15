(ns offcourse.services.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [chan <! >!]]
            [offcourse.models.course :as course]))

(def raw-courses [{:goal "Become a Frontend Ninja"
               :checkpoints [{:task "Install React"
                              :completed true
                              :url "http://facebook.com"}
                             {:task "Build a Component"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Create and App"
                              :completed false
                              :url "http://facebook.com"}]}
              {:goal "Improve your Backend Chops"
               :checkpoints [{:task "Install Node"
                              :completed true
                              :url "http://facebook.com"}
                             {:task "Set up a Route"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Add some Middleware"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Build an API"
                              :completed false
                              :url "http://facebook.com"}]}
              {:goal "Get More Street Cred"
               :checkpoints [{:task "Talk Dirty with Reika"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Pair with Greg"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Scheme with Charlotte"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Brawl with Yeehaa"
                              :completed false
                              :url "http://facebook.com"}]}
              {:goal "Make DevOps Your Thing"
               :checkpoints [{:task "Tame the Command Line"
                              :completed true
                              :url "http://facebook.com"}
                             {:task "Just Git It"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Try a PAAS"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Make Containers"
                              :completed false
                              :url "http://facebook.com"}
                             {:task "Do it All"
                              :completed true
                              :url "http://facebook.com"}]}])

(defn index-course [course index]
  (let [checkpoints (map-indexed #(assoc %2 :id %1) (course :checkpoints))]
    (assoc course :id index :checkpoints checkpoints)))

(defn indexed-courses [courses]
  (map-indexed #(index-course %2 %1) courses))

(def collection-channel (chan))
(def model-channel (chan))

(def courses (indexed-courses raw-courses))

(defn get-courses [keyword]
  (go
    (case keyword
      :new (>! collection-channel {:collection-name :new
                                   :data (vector (first courses))})
      :popular (>! collection-channel {:collection-name :popular
                                       :data (rest courses)})
      :featured (>! collection-channel {:collection-name :featured
                                        :data courses}))))

(defn get-course [id]
  (let [course (course/find-course courses id)]
    (go
      (>! model-channel {:model-name  (course :goal)
                         :data course}))))
