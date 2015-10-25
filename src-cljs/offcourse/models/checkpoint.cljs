(ns offcourse.models.checkpoint)

(defrecord Checkpoint [id task url])

(defn new-checkpoint []
  (map->Checkpoint {:id :new
                    :task "Do Something Different"
                    :url "bla.com"}))
