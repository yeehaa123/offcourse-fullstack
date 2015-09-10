// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.views.index');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('offcourse.views.containers.app');
goog.require('offcourse.views.containers.main');
goog.require('offcourse.views.containers.topbar');
goog.require('offcourse.views.containers.sidebar');
goog.require('offcourse.views.containers.cards');
offcourse.views.index.home_page = (function offcourse$views$index$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [offcourse.views.containers.app.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [offcourse.views.containers.sidebar.sidebar], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [offcourse.views.containers.main.main,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [offcourse.views.containers.topbar.topbar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [offcourse.views.containers.cards.cards], null)], null)], null);
});
