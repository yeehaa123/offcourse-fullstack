(ns offcourse.datastore.services.modify
  (:require [offcourse.datastore.responder :as r]))

(defn- update-and-respond! [store fn]
  (do
    (swap! store fn)
    (r/respond-updated store)))

(defmulti modify
  (fn [type _] type))

(defmethod modify :toggle-done [_ store {:keys [course-id checkpoint-id]}]
  (update-and-respond! store #(update-in %1 [:courses course-id
                                             :checkpoints checkpoint-id :completed] not)))
