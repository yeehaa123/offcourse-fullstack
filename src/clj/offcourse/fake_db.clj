(ns offcourse.fake-db
  (:require [com.calvinfroedge.clutch :as clutch]
            [clj-uuid :as uuid]
            [offcourse.fake-data.index :as fake-data]
            [offcourse.models.course :as co]))

(def db (clutch/get-database "sample"))

(defn reset []
  (clutch/delete-database db))

(defn add-db-id [{:keys [course-id version] :as course}]
  (assoc course :_id (str course-id "-v" version)))

(defn generate-course []
  (let [course-id (uuid/v1)]
    (-> (fake-data/generate-course course-id "yeehaa")
        add-db-id)))

(defn add-course []
    (clutch/put-document db (generate-course)))

(defn seed-db []
  (let [courses (->> (repeatedly 30 generate-course))]
    (clutch/bulk-update db courses)))



