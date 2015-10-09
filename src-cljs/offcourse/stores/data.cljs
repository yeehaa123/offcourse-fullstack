(ns offcourse.stores.data
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [cljs.core.async :refer [chan timeout alts! <! >!]]
            [offcourse.models.datastore :as model]
            [offcourse.stores.resources :as resources]
            [offcourse.stores.courses :as courses]
            [offcourse.actions.api :as actions]))

(def store (atom {:collections {}
                  :courses {}}))

(defn get-collection [{collection-name :collection-name}]
  (let [collection (collection-name (:collections @store))]
    (when-not collection
      (courses/fetch-collection collection-name))))

(defn get-course [{course-id :course-id}]
  (let [course ((:courses @store) course-id)]
    (if-not course
      (courses/fetch-course course-id)
      (resources/get-course-resources {:course course}))))

(defn get-data [{type :type :as payload}]
  (case type
    :collection (get-collection payload)
    (get-course payload)))

(defn listen-for-actions []
  (go-loop []
    (let [channels [actions/channel courses/channel resources/channel]
          [{type :type payload :payload}] (alts! channels)]
      (case type
        :get-data           (get-data payload)
        :refresh-collection (model/refresh-collection store payload)
        :refresh-course     (do
                              (model/refresh-course store payload)
                              (resources/get-course-resources payload))
        :toggle-done        (model/toggle-done store payload)
        :augment-checkpoint (model/augment-checkpoint store payload)))
    (recur)))


(defn init []
  (listen-for-actions))
