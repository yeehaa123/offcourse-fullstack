(ns offcourse.models.fake-data
  (:require [clojure.string :as str]
            [faker.lorem :as lorem]))

(def checkpoint {:checkpoint-id :new
                 :task "Do Something Different"
                 :url "bla.com"
                 :completed false})

(defn rand-int-between [min max]
  (let [dev (- max min)]
    (+ (rand-int dev) min)))

(defn make-title []
  (->> (lorem/words)
       (take (rand-int-between 3 8))
       (map #(str/capitalize %1))
       (str/join " ")))

(def body
  (->> (lorem/paragraphs (rand-int-between 8 15))
       (take (rand-int-between 10 40))))

(defn make-text [title]
  (->> (conj body (str "# " title))
       (str/join "\n\n")))

(defn content []
  (let [title (make-title)
        text (make-text title)]
    {:title title
     :text text}))

(def courses [{:goal "Become a Frontend Ninja"
               :checkpoints [{:task "Install React"
                              :completed true}
                             {:task "Build a Component"
                              :completed false}
                             {:task "Create an App"
                              :completed false}]}
              {:goal "Improve your Backend Chops"
               :checkpoints [{:task "Install Node"
                              :completed true}
                             {:task "Set up a Route"
                              :completed false}
                             {:task "Add some Middleware"
                              :completed false}
                             {:task "Build an API"
                              :completed false}]}
              {:goal "Get More Street Cred"
               :checkpoints [{:task "Talk Dirty with Reika"
                              :completed false}
                             {:task "Pair with Greg"
                              :completed false}
                             {:task "Scheme with Charlotte"
                              :completed false}
                             {:task "Brawl with Yeehaa"
                              :completed false}]}
              {:goal "Make DevOps Your Thing"
               :checkpoints [{:task "Tame the Command Line"
                              :completed false}
                             {:task "Just Git It"
                              :completed false}
                             {:task "Try a PAAS"
                              :completed false}
                             {:task "Make Containers"
                              :completed false}
                             {:task "Do it All"
                              :completed false}]}])

(def urls ["facebook.com"
           "google.com"
           "yahoo.com"
           "offcourse.io"])
