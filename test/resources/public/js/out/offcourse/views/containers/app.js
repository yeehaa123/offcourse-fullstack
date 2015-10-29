// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.containers.app');
goog.require('cljs.core');
goog.require('offcourse.helpers.css');
goog.require('offcourse.views.containers.sidebar');
goog.require('offcourse.views.containers.topbar');
goog.require('offcourse.views.containers.cards');
goog.require('quiescent.dom');
offcourse.views.containers.app.App = (function offcourse$views$containers$app$App(handlers,p__24871){
var map__24874 = p__24871;
var map__24874__$1 = ((((!((map__24874 == null)))?((((map__24874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24874):map__24874);
var viewmodel = cljs.core.get.call(null,map__24874__$1,new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292));
var mode = cljs.core.get.call(null,map__24874__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
return quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"app",mode,"waypoints")], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"layout-sidebar"], null),offcourse.views.containers.sidebar.Sidebar.call(null,viewmodel,handlers)),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"layout-right"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"layout-topbar"], null),offcourse.views.containers.topbar.Topbar.call(null,viewmodel,handlers)),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"layout-main"], null),offcourse.views.containers.cards.Cards.call(null,viewmodel,handlers))));
});

//# sourceMappingURL=app.js.map