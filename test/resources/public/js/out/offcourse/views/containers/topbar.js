// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.containers.topbar');
goog.require('cljs.core');
goog.require('offcourse.views.components.breadcrumbs');
goog.require('offcourse.helpers.css');
goog.require('quiescent.dom');
offcourse.views.containers.topbar.Topbar = (function offcourse$views$containers$topbar$Topbar(topbar_data,handlers){
return quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"topbar")], null),offcourse.views.components.breadcrumbs.Breadcrumbs.call(null,topbar_data,handlers),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-authenticate"], null),"Authenticate"));
});

//# sourceMappingURL=topbar.js.map