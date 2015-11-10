(ns offcourse.fake-data.index
  (:require [clojure.string :as str]
            [faker.lorem :as lorem]
            [offcourse.fake-data.buzzwords :refer [buzzwords]]
            [offcourse.fake-data.courses :refer [raw-courses]]))

(def checkpoint {:checkpoint-id :new
                 :task "Do Something Different"
                 :url "bla.com"
                 :completed false})

(def urls ["facebook.com"
           "google.com"
           "yahoo.com"
           "offcourse.io"])

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

(defn generate-content []
  (let [title (make-title)
        text (make-text title)]
    {:title title
     :text text}))

(defn set-of-buzzwords [min max]
  (->> buzzwords
       shuffle
       (take (rand-int-between 0 5))
       (map #(str/lower-case %1))
       (into #{})))

(def course (rand-nth raw-courses))

(defn generate-user []
  (rand-nth ["yeehaa" "greg" "r2j2" "reika" "charlotte" "marijn"]))

(defn- index-checkpoint [index {:keys [task completed]}]
  [index {:checkpoint-id index
          :task task
          :url (rand-nth urls)
          :completed completed
          :tags (set-of-buzzwords 0 5)}])

(defn- index-checkpoints [checkpoints]
  (->> checkpoints
       (map-indexed #(index-checkpoint %1 %2))))

(defn generate-course [id curator]
  (-> course
      (assoc :course-id id)
      (assoc :curator curator)
      (update-in [:checkpoints] index-checkpoints)))

(def courses
  (->> (take 30 (iterate inc 1))
       (map-indexed (fn [id _] [id (generate-course id (generate-user))]))
       (into {})))

(def raw-collections
  [[:featured (into #{} (take 10 (iterate inc 1)))]
   [:popular (into #{} (take 5 (iterate inc 2)))]
   [:new (into #{} (take 4 (iterate inc 4)))]])

(def named-collections
  (->> raw-collections
       (map (fn [[collection-name collection-ids]]
              [collection-name {:collection-name collection-name
                                :collection-type :named-collection
                                :collection-ids collection-ids}]))
       (into {})))

(defn named-collection [collection-name]
  (collection-name named-collections))
