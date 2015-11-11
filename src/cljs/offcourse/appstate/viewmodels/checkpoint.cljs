(ns offcourse.appstate.viewmodels.checkpoint
  (:require [schema.core :as schema :include-macros true]
            [offcourse.models.course :refer [map->Course Course]]))

(schema/defrecord CheckpointViewmodel
    [level :- Keyword
     course :- Course
     checkpoint-id :- schema/Int])


(defn new-checkpoint
  ([{:keys [course-id checkpoint-id] :as checkpoint}]
   (map->CheckpointViewmodel {:level :checkpoint
                              :course {:course-id course-id}
                              :checkpoint-id checkpoint-id}))
  ([course checkpoint-id resource]
   (map->CheckpointViewmodel {:level :checkpoint
                              :course course
                              :checkpoint-id checkpoint-id})))

(defn check [viewmodel]
  (schema/check CheckpointViewmodel viewmodel))
