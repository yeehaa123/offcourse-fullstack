(ns offcourse.datastore.services.update
  (:require [offcourse.datastore.responder :as r]))

(defn- update-and-respond! [store fn]
  (do
    (swap! store fn)
    (r/respond-updated store)))

(defn toggle-done [store {:keys [course-id checkpoint-id]}]
  (update-and-respond! store #(update-in %1 [:courses course-id
                                             :checkpoints checkpoint-id :completed] not)))
