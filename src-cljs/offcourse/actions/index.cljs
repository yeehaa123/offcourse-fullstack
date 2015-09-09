(ns offcourse.actions.index
  (:require [reagent.session :as session]
            [ajax.core :refer [GET POST]]))

(defn get-mode []
  (session/get :mode))

(defn set-mode! [mode]
  (session/put! :mode mode))

(defn toggle-mode! []
  (let [current-mode (session/get :mode)]
    (if (= current-mode :learn)
      (set-mode! :curate)
      (set-mode! :learn))))

(defn set-page! [page]
  (session/put! :page page))

(defn get-page []
  (session/get :page))

(defn fetch-docs! []
  (GET "/docs" {:handler #(session/put! :docs %)}))
