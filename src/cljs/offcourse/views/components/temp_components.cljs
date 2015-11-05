(ns offcourse.views.components.temp-components
  (:require [clojure.string :as str]
            [quiescent.dom :as d]
            [offcourse.helpers.css :as css]))

(defn Checkbox [course-id checkbox-id completed? {:keys [toggle-done]}]
  (let [completed (if completed? "complete" "incomplete")]
    (d/div {:className completed
            :onClick #(toggle-done course-id checkbox-id %1)})))

(defn Map []
  (d/div))

(defn Title [title]
  (d/h1 {} title))

(defn MetaField [index [key item]]
  (d/p {:key index}
       (d/em {} (str (str/capitalize (name key)) ": "))
       (str/capitalize (str item))))

(defn Meta [& data]
  (let [args (apply sorted-map data)
        {:keys [go-to-user-collection]} (:handlers args)
        fields (dissoc args :handlers)
        user (:curator fields)]
    (d/div {:onClick #(go-to-user-collection user %1)}
           (map-indexed #(MetaField %1 %2) fields))))

(defn Tags [tags]
  (d/p {}
       (map-indexed #(d/span {:key %1
                              :className "tag"} %2) tags)))

(defn CardSection [index [type component]]
  (d/div {:key index
          :className (css/type-classes "card_section" type)}
         component))

(defn GoToButton
  ([course-id {:keys [go-to-course]}]
   (d/div {:className "btn btn-inverse browse"
           :onClick #(go-to-course course-id %1)} "Go To Course"))
  ([course-id checkpoint-id {:keys [go-to-checkpoint]}]
   (d/div {:className "btn btn-inverse browse"
           :onClick #(go-to-checkpoint course-id checkpoint-id %1)} "Open")))
