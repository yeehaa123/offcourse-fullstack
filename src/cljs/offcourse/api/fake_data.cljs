(ns offcourse.api.fake-data
  (:require [offcourse.models.checkpoint :as checkpoint-model]
            [offcourse.models.course :as course-model]
            [offcourse.models.resource :as resource-model]))

(def urls ["facebook.com"
           "google.com"
           "yahoo.com"
           "offcourse.io"])

(def user-ids  ["yeehaa"
                "greg"])

(def raw-courses [{:goal "Become a Frontend Ninja"
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

(defn index-checkpoint [index {:keys [task completed]}]
  [index (checkpoint-model/new index task (rand-nth urls) completed)])

(defn index-checkpoints [checkpoints]
  (->> checkpoints
       (map-indexed #(index-checkpoint %1 %2))
       (into {})))

(defn index-course [{:keys [goal checkpoints]} index]
  (let [checkpoints (index-checkpoints checkpoints)]
    [index (course-model/new index (rand-nth user-ids) goal checkpoints)]))

(def courses
  (->> raw-courses
       (map-indexed #(index-course %2 %1))
       (into {})))

(def resources
  (->> urls
       (map-indexed (fn [index url]
                      (if (= url "google.com")
                        [url (resource-model/new "offcourse.io" (str "fake-resource " index))]
                        [url (resource-model/new url (str "fake-resource " index))])))
       (into {})))
