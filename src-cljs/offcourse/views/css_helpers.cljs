(ns offcourse.views.css-helpers
  (:require [clojure.string :as string]))

(defn state-classes [base-class states]
  (for [state states] (str base-class"-is-"(name state))))

(defn classes [base-class & states]
  (let [classes (state-classes base-class states)]
    (string/join " " (conj classes base-class))))
