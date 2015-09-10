(ns offcourse.actions.index
  (:require [reagent.session :as session]
            [ajax.core :refer [GET POST]]))

(defn set-mode! [mode]
  (session/put! :mode mode))

(defn toggle-mode! []
  (let [current-mode (session/get :mode)]
    (if (= current-mode :learn)
      (set-mode! :curate)
      (set-mode! :learn))))

(defn set-text! [text]
  (session/put! :text text))

(defn fetch-docs! []
  (GET "/docs" {:handler #(session/put! :docs %)}))

(defn check-done []
  (.alert js/window "hi ha ho"))
