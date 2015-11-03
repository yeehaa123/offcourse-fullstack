(ns offcourse.views.components.card
  (:require [clojure.string :as str]
            [offcourse.helpers.css :as css]
            [offcourse.views.components.todo-list :refer [TodoList]]
            [quiescent.dom :as d]))

(defn Button
  ([course-id {:keys [go-to-course]}]
   (d/div {:className "btn btn-inverse browse"
           :onClick #(go-to-course course-id)} "Open"))
  ([course-id checkpoint-id {:keys [go-to-checkpoint]}]
   (d/div {:className "btn btn-inverse browse"
           :onClick #(go-to-checkpoint course-id checkpoint-id)} "Open")))

(defn AddCheckpointButton [course-id {:keys [go-to-checkpoint]}]
   (d/div {:className "btn btn-inverse browse"
           :onClick #(go-to-checkpoint course-id "new" %1)} "Add Checkpoint"))

(defn CommitCheckpointButton [course-id checkpoint-id {:keys [commit-checkpoint]}]
  (when (= checkpoint-id :new)
    (d/div {:className "btn btn-inverse browse"
            :onClick #(commit-checkpoint course-id (if checkpoint-id checkpoint-id :new))}
           "Add To Course")))

(defn Title [title]
  (d/h1 {} title))

(defn Meta [key item]
  (when item
    (d/div {}
           (d/p {}
                (d/em {} (str (str/capitalize (name key)) ": "))
                (str/capitalize item)))))

(defn Tags []
  (d/p {}
       (map-indexed #(d/span {:key %1
                              :className "tag"} %2)
                    ["React" "DevOps" "CSS"])))
(defn Map []
  (d/div))

(defn Checkbox [course-id checkbox-id completed? {:keys [toggle-done]}]
  (let [completed (if completed? "complete" "incomplete")]
    (d/div {:className completed
            :onClick #(toggle-done course-id checkbox-id %1)})))

(defn CardSection [index [type data-key] item handlers]
  (d/div {:key index
          :className (css/type-classes "card_section" type)}
         (case type
           :map (Map)
           :checkbox (Checkbox (:course-id item) (:id item ) (data-key item) handlers)
           :title (Title (data-key item))
           :info (Title (data-key (:resource item)))
           :meta (Meta data-key (or (data-key item) (data-key (:resource item))))
           :list (TodoList (:id item) (data-key item) handlers)
           :tags (Tags)
           :course-button (Button (data-key item) handlers)
           :checkpoint-button (Button (:course-id item) (data-key item) handlers)
           :add-checkpoint-button (AddCheckpointButton (data-key item) handlers)
           :commit-checkpoint-button (CommitCheckpointButton (:course-id item)
                                                             (data-key item) handlers))))

(defn Card [schema {:keys [highlighted course-id id] :as item}
            {:keys [go-to-course go-to-checkpoint] :as handlers}]
  (let [highlighted (if highlighted "highlighted" "not-highlighted")
        go-to (if course-id (partial go-to-checkpoint course-id id) (partial go-to-course id))]
    (d/section {:key (:id item)
                :className (css/classes "card" highlighted)
                :onClick go-to}
               (map-indexed #(CardSection %1 %2 item handlers) schema))))
