(ns offcourse.services.history
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events])
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
  (js/console.log e)
  ;; and let's see the token
  (js/console.log (str "Navigating: " (get-token)))
  ;; we are checking if this event is due to user action,
  ;; such as click a link, a back button, etc.
  ;; as opposed to programmatically setting the URL with the API
  (when-not (.-isNavigation e)
    ;; in this case, we're setting it
    (js/console.log "Token set programmatically")
    ;; let's scroll to the top to simulate a navigation
    (js/window.scrollTo 0 0))
  ;; dispatch on the token
  (secretary/dispatch! (get-token)))

(declare history)

(defn nav! [{location :location}]
  (let [token (str "/" (name location))]
    (.setToken history token)))

(defn init! []
  (defonce history
    (doto (make-history)
      (goog.events/listen EventType.NAVIGATE
                          ;; wrap in a fn to allow live reloading
                          #(handle-url-change %))
      (.setEnabled true))))
