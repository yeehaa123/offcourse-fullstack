(ns offcourse.services.fake-data)

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
  (let [checkpoints (map-indexed #(assoc %2 :id (+ %1 100)) (course :checkpoints))]
    (assoc course :id index :checkpoints checkpoints)))

(defn indexed-courses [courses]
  (map-indexed #(index-course %2 %1) courses))

(def courses (indexed-courses raw-courses))
