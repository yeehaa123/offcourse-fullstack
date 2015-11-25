(ns offcourse.history.service
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events]
            [cljs.core.async :refer [>! tap merge chan <!]])
(:import [goog.history Html5History EventType]))

(defn get-token []
  (str js/window.location.pathname js/window.location.search))

(defn make-history []
  (doto (Html5History.)
    (.setPathPrefix (str js/window.location.protocol
                         "//"
                         js/window.location.host))
    (.setUseFragment false)))

(defn handle-url-change [e]
  ;; log the event object to console for inspection
  ;; (js/console.log e)
  ;; and let's see the token
  ;; (js/console.log (str "Navigating: " (get-token)))
  ;; we are checking if this event is due to user action,
  ;; such as click a link, a back button, etc.
  ;; as opposed to programmatically setting the URL with the API
  (when-not (.-isNavigation e)
    ;; in this case, we're setting it
    ;; (js/console.log "Token set programmatically")
    ;; let's scroll to the top to simulate a navigation
    (js/window.scrollTo 0 0))
  (secretary/dispatch! (get-token)))

(declare history)


(defn course-token [location-data]
  (str "courses/" (:course-id location-data)))

(defn checkpoint-token [location-data]
  (str (course-token location-data)
       "/checkpoints/" (:checkpoint-id location-data)))

(defn collection-token [{:keys [collection-name collection-type]}]
  (if (= collection-type :flags)
    (str (name collection-name))
    (str (name collection-type) "/" (name collection-name))))

(defn create-token [{level :level :as location-data}]
  (case level
    :collection (collection-token location-data)
    :course (course-token location-data)
    :checkpoint (checkpoint-token location-data)
    :home nil))

(defn nav! [location-data]
  (let [token (str "/" (create-token location-data))]
    (.setToken history token)))

(defn listen-for-actions [input]
  (go-loop []
    (let [{type :type payload :payload} (<! input)]
      (case type
        :requested-route (nav! payload)
        :not-found-resource (nav! {:level :home})
        nil))
    (recur)))

(defn init [inputs]
  (let [inputs (map #(tap %1 (chan)) inputs)
        input (merge inputs)]
    (defonce history
      (doto (make-history)
        (goog.events/listen EventType.NAVIGATE
                            ;; wrap in a fn to allow live reloading
                            #(handle-url-change %))
        (.setEnabled true)))
    (listen-for-actions input)))
