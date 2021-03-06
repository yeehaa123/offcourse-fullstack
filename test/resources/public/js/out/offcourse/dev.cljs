(ns ^:figwheel-no-load offcourse.dev
  (:require [offcourse.core :as core]
            [figwheel.client :as figwheel :include-macros true]))

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :on-jsload core/reload)

(core/init!)
