(ns offcourse.fake-db
  (:require [com.calvinfroedge.clutch :as clutch]
            [clj-uuid :as uuid]
            [offcourse.protocols.taggable :as ta]
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

(defn all-courses []
  (clutch/all-documents db {:include_docs true}))

(defn all-tags []
  (->> (clutch/get-view "sample" "jsviews" :course-tags {:group true})
       (map :key)
       (into #{})))

(defn get-collection [collection-type collection-name]
  (let [options {:reduce false :key (name collection-name)}
        viewname :course-tags
        ids (->> (clutch/get-view "sample" "jsviews" viewname options)
                (map :id)
                (into #{}))]
      {:collection-name collection-name
       :collection-type collection-type
       :collection-ids ids}))


(defn first-view []
  (clutch/save-view "sample" "jsviews"
                    (clutch/view-server-fns :javascript
                                            {:type-counts
                                             {:map "function(doc) {emit('hi', null)}"}})))

