// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.views.containers.sidebar');
goog.require('cljs.core');
goog.require('offcourse.views.css_helpers');
goog.require('offcourse.actions.index');
offcourse.views.containers.sidebar.textbar = (function offcourse$views$containers$sidebar$textbar(text,handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),handler,new cljs.core.Keyword(null,"class","class",-2030961996),offcourse.views.css_helpers.classes.call(null,"textbar")], null),text], null);
});
offcourse.views.containers.sidebar.logo = (function offcourse$views$containers$sidebar$logo(handler){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),offcourse.views.css_helpers.classes.call(null,"logo")], null),offcourse.views.containers.sidebar.textbar.call(null,"_Offcourse",handler)], null);
});
offcourse.views.containers.sidebar.sidebar = (function offcourse$views$containers$sidebar$sidebar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),offcourse.views.css_helpers.classes.call(null,"sidebar")], null),offcourse.views.containers.sidebar.logo.call(null,offcourse.actions.index.toggle_mode_BANG_)], null);
});
