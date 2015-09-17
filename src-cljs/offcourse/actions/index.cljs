(ns offcourse.actions.index
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.session :as session]
            [offcourse.stores.appstate :as appstate]
            [offcourse.services.api :as api]
            [offcourse.services.history :as history]
            [cljs.core.async :refer [chan <! >!]]
            [ajax.core :refer [GET POST]]))

(defn set-mode! [mode]
  (appstate/set-mode! mode))

(defn toggle-mode! []
  (appstate/toggle-mode!))

(defn fetch-docs! []
  (GET "/docs" {:handler #(session/put! :docs %)}))


(defn check-done [course-id checkpoint-id]
  (api/check-done course-id checkpoint-id))


(defn get-courses [keyword]
  (api/get-courses keyword))

(defn get-course [id]
  (api/get-course id))

(defn go-to! [location]
  (history/nav! location))

(defn go-to-course! [id]
  (let [location (str "courses/" id)]
    (go-to! location)))
