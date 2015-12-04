(ns offcourse.models.resources
  (:require [schema.core :as schema :include-macros true]
            [offcourse.protocols.validatable :refer [Validatable]]
            [offcourse.models.resource :as co :refer [Resource]]))

(def ResourcesSchema
  [Resource])

(def check (schema/checker ResourcesSchema))

(defn ->resources [resources]
  (specify! resources
    Validatable
    (check [resources]
      (check resources))))
