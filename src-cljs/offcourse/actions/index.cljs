(ns offcourse.actions.index
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.session :as session]
            [offcourse.stores.appstate :as appstate]
            [offcourse.services.api :as api]
            [cljs.core.async :refer [chan <! >!]]
            [ajax.core :refer [GET POST]]))

(defn set-mode! [mode]
  (appstate/set-mode! mode))

(defn toggle-mode! []
  (appstate/toggle-mode!))

(defn fetch-docs! []
  (GET "/docs" {:handler #(session/put! :docs %)}))

(defn toggle-done-checkpoints [course id]
  (let [checkpoints (course :checkpoints)
        [checkpoint] (filter #(= (%1 :id) id) checkpoints)
        checkpoint (update-in checkpoint [:completed] not)
        checkpoints (remove #(= (%1 :id) id) checkpoints)]
    (conj checkpoints checkpoint)))

(defn toggle-done-courses [courses course-id checkpoint-id]
  (let [[course _] (filter #(= (%1 :id) course-id) courses)
        courses (remove #(= (%1 :id) course-id) courses)
        checkpoints (toggle-done-checkpoints course checkpoint-id)
        course (assoc course :checkpoints checkpoints)]
   (conj courses course)))

(defn check-done
  ([id] (println id))
  ([course-id checkpoint-id]
   (session/update-in! [:collection] toggle-done-courses course-id checkpoint-id)))

(defn fetch-courses []
    (api/courses))
