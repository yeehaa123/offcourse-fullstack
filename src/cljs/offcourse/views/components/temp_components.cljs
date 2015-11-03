(ns offcourse.views.components.temp-components
  (:require [clojure.string :as str]
            [quiescent.dom :as d]
            [offcourse.helpers.css :as css]))

(defn Map []
  (d/div))

(defn Title [title]
  (d/h1 {} title))

(defn MetaField [index [key item]]
  (d/p {:key index}
       (d/em {} (str (str/capitalize (name key)) ": "))
       (str/capitalize (str item))))

(defn Meta [& data]
  (let [fields (apply sorted-map data)]
    (d/div {}
           (map-indexed #(MetaField %1 %2) fields))))

(defn Tags [tags]
  (d/p {}
       (map-indexed #(d/span {:key %1
                              :className "tag"} %2) tags)))

(defn CardSection [index [type component]]
  (d/div {:key index
          :className (css/type-classes "card_section" type)}
         component))
