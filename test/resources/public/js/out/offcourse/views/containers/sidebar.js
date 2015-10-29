// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.containers.sidebar');
goog.require('cljs.core');
goog.require('offcourse.views.components.card');
goog.require('offcourse.helpers.css');
goog.require('offcourse.views.components.logo');
goog.require('offcourse.views.components.collections_navigation');
goog.require('offcourse.views.actions');
goog.require('quiescent.dom');
goog.require('clojure.string');
offcourse.views.containers.sidebar.schema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"commit-checkpoint-button","commit-checkpoint-button",71481920),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"add-checkpoint-button","add-checkpoint-button",321775580),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null);
offcourse.views.containers.sidebar.Sidebar = (function offcourse$views$containers$sidebar$Sidebar(p__24815,handlers){
var map__24819 = p__24815;
var map__24819__$1 = ((((!((map__24819 == null)))?((((map__24819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24819):map__24819);
var level = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var collection_names = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"collection-names","collection-names",1083533386));
var course = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var checkpoint_id = cljs.core.get.call(null,map__24819__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
return quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"sidebar")], null),offcourse.views.components.logo.Logo.call(null,handlers),(function (){var G__24821 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__24821) {
case "collection":
return offcourse.views.components.collections_navigation.Collections_Navigation.call(null,collection_names,handlers);

break;
case "course":
return offcourse.views.components.card.Card.call(null,level.call(null,offcourse.views.containers.sidebar.schema),course,handlers);

break;
case "checkpoint":
return offcourse.views.components.card.Card.call(null,level.call(null,offcourse.views.containers.sidebar.schema),cljs.core.assoc.call(null,cljs.core.get_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id], null)),new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course)),handlers);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
})());
});

//# sourceMappingURL=sidebar.js.map