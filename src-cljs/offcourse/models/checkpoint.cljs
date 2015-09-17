(ns offcourse.models.checkpoint)

(defn find-checkpoint [checkpoints id]
  (first (filter #(== id (:id %1)) checkpoints)))

(defn remove-checkpoint [checkpoints id]
  (remove #(= (%1 :id) id) checkpoints))

(defn add-checkpoint [checkpoints checkpoint]
  (conj checkpoints checkpoint))

(defn toggle-done [checkpoints id]
  (-> checkpoints
      (find-checkpoint id)
      (update-in [:completed] not)))

(defn update-checkpoints [checkpoints checkpoint]
  (let [checkpoints (remove #(== (checkpoint :id) (:id %1)) checkpoints)]
    (conj checkpoints checkpoint)))
