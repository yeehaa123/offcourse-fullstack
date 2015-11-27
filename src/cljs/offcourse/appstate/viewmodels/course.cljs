(ns offcourse.appstate.viewmodels.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.label :as label]
            [offcourse.models.resource :as r]))

(schema/defrecord CourseViewmodel
    [level :- Keyword
     course :- Course
     resources :- schema/Any])

(defn ->viewmodel
  ([course] (->CourseViewmodel :course course nil))
  ([course resources] (->CourseViewmodel :course course resources)))

(defn check[viewmodel]
  (schema/check CourseViewmodel viewmodel))

(defn highlight-checkpoint [viewmodel {:keys [checkpoint-id highlight]}]
  (assoc-in viewmodel [:course :checkpoints checkpoint-id :highlighted] highlight))

;; TO LABEL MODEL

(defn add-tag-labels-to-checkpoint [{:keys [tags] :as checkpoint}]
  (->> tags
       label/->labelCollection
       (assoc-in checkpoint [:tags])))

(defn add-tag-labels-to-checkpoints [{:keys [checkpoints] :as course}]
  (->> checkpoints
       (map (fn [[id checkpoint]] [id (add-tag-labels-to-checkpoint checkpoint)]))
       (into {})
       (assoc-in course [:checkpoints])))

(defn add-tag-labels-to-course [{:keys [checkpoints] :as course}]
  (->> checkpoints
       (reduce (fn [tag-acc [_ {:keys [tags]}]] (into tag-acc tags)) {})
       (assoc course :tags)))

;;;

(defn refresh [{:keys [level course]} {:keys [courses resources collections]}]
  (let [{:keys [course-id]} course
        course (get courses course-id)
        course (add-tag-labels-to-checkpoints course)
        course (add-tag-labels-to-course course)
        urls (into #{} (co/get-resource-urls course))
        resources (r/find-resources resources urls)]
    (->viewmodel course resources)))
