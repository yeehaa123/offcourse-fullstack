// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.views.components.logo');
goog.require('cljs.core');
goog.require('offcourse.helpers.css');
goog.require('reagent.session');
goog.require('clojure.string');
goog.require('offcourse.actions.index');
offcourse.views.components.logo.textbar = (function offcourse$views$components$logo$textbar(text,p__43780){
var map__43783 = p__43780;
var map__43783__$1 = ((((!((map__43783 == null)))?((((map__43783.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43783.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43783):map__43783);
var on_click = cljs.core.get.call(null,map__43783__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),offcourse.helpers.css.classes.call(null,"textbar")], null),text], null);
});
offcourse.views.components.logo.logo = (function offcourse$views$components$logo$logo(handlers){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),offcourse.helpers.css.classes.call(null,"logo")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [offcourse.views.components.logo.textbar,"Offcourse_",handlers], null)], null);
});
