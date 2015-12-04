(ns offcourse.appstate.viewmodels.course
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.protocols.highlightable :refer [Highlightable]]
            [offcourse.protocols.refreshable :refer [Refreshable]]
            [offcourse.models.course :as co :refer [Course]]
            [offcourse.models.resource :as rs :refer [Resource]]
            [offcourse.models.label :as label :refer [LabelCollection]]
            [offcourse.models.resource :as r]))

(schema/defrecord CourseViewmodel
    [level :- Keyword
     course :- Course
     labels :- {Keyword LabelCollection}
     resources :- {schema/Str Resource}])

(def check (schema/checker CourseViewmodel))

(defn ->viewmodel
  ([course] (->CourseViewmodel :course course nil nil))
  ([course labels resources] (->CourseViewmodel :course course labels resources)))

(extend-type CourseViewmodel
  Highlightable
  (highlight-checkpoint [viewmodel {:keys [checkpoint-id highlight]}]
    (assoc-in viewmodel [:course :checkpoints checkpoint-id :highlighted] highlight))
  (highlight-label [viewmodel {:keys [label-name label-type highlight]}]
    (assoc-in viewmodel [:labels label-type label-name :highlighted?] highlight))
  Validatable
  (check [viewmodel]
    (check viewmodel))
  (valid? [viewmodel]
    (let [errors (check viewmodel)]
      (if errors false true)))
  Refreshable
  (refresh [{:keys [level course]} {:keys [courses resources collections]}]
    (let [course (get courses (:course-id course))
          labels {:tags (label/->labelCollection (:tags course))}
          resource-urls (co/get-urls course)
          resources (->> resource-urls
                         (map (fn [url]
                                [url (or (get resources url) (rs/->resource url))]))
                         (into {}))]
      (->viewmodel course labels resources))))
