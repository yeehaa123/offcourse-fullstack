(ns offcourse.appstate.viewmodels.helpers
  (:require [offcourse.models.label :as label]
            [offcourse.models.course :as co]))

(defn add-tag-labels-to-checkpoint [{:keys [tags] :as checkpoint} selected]
  (let [tags (-> tags
                 (label/->labelCollection selected))]
        (assoc-in checkpoint [:tags] tags)))

(defn add-tag-labels-to-checkpoints
  ([course] (add-tag-labels-to-checkpoints course nil))
  ([{:keys [checkpoints] :as course} selected]
   (->> checkpoints
        (map (fn [[id checkpoint]] [id (add-tag-labels-to-checkpoint checkpoint selected)]))
        (into {})
        (assoc-in course [:checkpoints]))))

(defn add-tag-labels-to-course [{:keys [checkpoints] :as course}]
  (->> checkpoints
       (reduce (fn [tag-acc [_ {:keys [tags]}]] (into tag-acc tags)) {})
       (assoc course :tags)))

(defn add-tag-labels-to-courses [courses tag-labels]
  (->> courses
       (map (fn [[id course]]
              [id (when course
                    (let [tag-names (co/get-tags course)
                          tags (label/->labelCollection tag-names)]
                      (assoc-in course [:tags] tags)))]))
       (into {})))

(defn highlight-checkpoint-labels [{:keys [tags] :as checkpoint} label-name highlight]
  (if (label-name tags)
    (assoc-in checkpoint [:tags label-name :highlighted?] highlight)
    checkpoint))

(defn highlight-checkpoints-labels [{:keys [checkpoints] :as course} label-name highlight]
  (->> checkpoints
       (map (fn [[id checkpoint]] [id (highlight-checkpoint-labels
                                       checkpoint label-name highlight)]))
       (into {})
       (assoc-in course [:checkpoints])))
;;;
