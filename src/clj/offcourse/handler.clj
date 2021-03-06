(ns offcourse.handler
  (:require [compojure.core :refer [GET defroutes]]
            [compojure.route :refer [not-found resources]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [hiccup.core :refer [html]]
            [hiccup.page :refer [include-js include-css]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.response :as resp]
            [environ.core :refer [env]]))

(def mount-target
  [:div#app
      [:h3 "ClojureScript has not been compiled!"]
      [:p "please run "
       [:b "lein figwheel"]
       " in order to start the compiler"]])

(def home-page
  (html
   [:html
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:name "viewport"
             :content "width=device-width, initial-scale=1"}]
     (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))]
    [:body
     mount-target
     (include-js "/js/app.js")]]))

(def cards-page
  (html
   [:html
    [:head
     [:meta {:charset "utf-8"}]]
    [:body
     mount-target
     (include-js "/js/app_devcards.js")]]))

(defroutes routes
  (GET "/" [] home-page)
  (GET "/cards" [] cards-page)
  (GET "/*" [] home-page)
  (resources "/"))



(def app
  (let [handler (wrap-defaults #'routes site-defaults)]
        (if (env :dev) (-> handler
                           wrap-exceptions
                           wrap-reload) handler)))

