// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.views.containers.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('offcourse.actions.index');
goog.require('offcourse.views.css_helpers');
offcourse.views.containers.app.app = (function offcourse$views$containers$app$app(){
var this$ = reagent.core.current_component.call(null);
var vec__57196 = reagent.core.children.call(null,this$);
var sidebar = cljs.core.nth.call(null,vec__57196,(0),null);
var main = cljs.core.nth.call(null,vec__57196,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),offcourse.views.css_helpers.classes.call(null,"app",reagent.session.get.call(null,new cljs.core.Keyword(null,"mode","mode",654403691)),"waypoints")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layout-sidebar","div.layout-sidebar",879155135),sidebar], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.layout-main","div.layout-main",-824705564),main], null)], null);
});
