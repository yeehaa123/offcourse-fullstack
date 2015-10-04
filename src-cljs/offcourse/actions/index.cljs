(ns offcourse.actions.index
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.session :as session]
            [cljs.core.async :refer [chan <! >!]]
            [ajax.core :refer [GET POST]]))

(def channel (chan))

(defn send-action [type payload]
  (go
    (let [action {:type type
                  :payload payload}]
      (>! channel action))))

(defn set-mode! [mode]
  (send-action :set-mode {:mode mode}))

(defn toggle-mode! []
  (send-action :toggle-mode))

(defn fetch-docs! []
  (GET "/docs" {:handler #(session/put! :docs %)}))

(defn check-done [course-id checkpoint-id]
  (send-action :toggle-done
               {:course-id course-id
                :checkpoint-id checkpoint-id}))

(defn get-courses [keyword]
  (send-action :get-courses {:keyword keyword}))

(defn get-course [id]
  (send-action :get-course {:id id}))

(defn go-to! [location]
  (send-action :go-to {:location location}))

(defn go-to-course! [id]
  (let [location (str "courses/" id)]
    (go-to! location)))
