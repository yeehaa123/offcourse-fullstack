(ns offcourse.datastore.implementations.modifiable)

(defmulti modify
  (fn [_ type _] type))

(defmethod modify :toggle-done [store _ {:keys [course-id checkpoint-id]}]
  (update-in store [:courses course-id
                    :checkpoints checkpoint-id :completed] not))
