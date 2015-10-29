// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.components.breadcrumbs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('quiescent.dom');
offcourse.views.components.breadcrumbs.Breadcrumb = (function offcourse$views$components$breadcrumbs$Breadcrumb(crumb,p__24845){
var map__24848 = p__24845;
var map__24848__$1 = ((((!((map__24848 == null)))?((((map__24848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24848):map__24848);
var on_click = cljs.core.get.call(null,map__24848__$1,new cljs.core.Keyword(null,"go-to","go-to",-1675511688));
var title = (function (){var $ = crumb;
var $__$1 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1($);
var $__$2 = cljs.core.name.call(null,$__$1);
var $__$3 = clojure.string.split.call(null,$__$2,/ /);
var $__$4 = cljs.core.map.call(null,clojure.string.capitalize,$__$3);
var $__$5 = clojure.string.join.call(null," ",$__$4);
return $__$5;
})();
var link_QMARK_ = new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(crumb);
var options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(crumb),new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-level"], null);
var options__$1 = (cljs.core.truth_(link_QMARK_)?cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (title,link_QMARK_,options,map__24848,map__24848__$1,on_click){
return (function (){
return on_click.call(null,crumb);
});})(title,link_QMARK_,options,map__24848,map__24848__$1,on_click))
):options);
return quiescent.dom.li.call(null,options__$1,title);
});
offcourse.views.components.breadcrumbs.createCrumbs = (function offcourse$views$components$breadcrumbs$createCrumbs(p__24850){
var map__24854 = p__24850;
var map__24854__$1 = ((((!((map__24854 == null)))?((((map__24854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24854):map__24854);
var level = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var collection_name = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var course = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var checkpoint_id = cljs.core.get.call(null,map__24854__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
var G__24856 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__24856) {
case "collection":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"title","title",636505583),collection_name,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name], null)], null);

break;
case "course":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(course),new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course)], null)], null);

break;
case "checkpoint":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(course),new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course),new cljs.core.Keyword(null,"link","link",-1769163468),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id], null))),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id], null)], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
});
offcourse.views.components.breadcrumbs.Breadcrumbs = (function offcourse$views$components$breadcrumbs$Breadcrumbs(viewmodel,handlers){
var crumbs = offcourse.views.components.breadcrumbs.createCrumbs.call(null,viewmodel);
return quiescent.dom.nav.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"breadcrumbs"], null),quiescent.dom.ul.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19934__auto__ = ((function (crumbs){
return (function offcourse$views$components$breadcrumbs$Breadcrumbs_$_iter__24862(s__24863){
return (new cljs.core.LazySeq(null,((function (crumbs){
return (function (){
var s__24863__$1 = s__24863;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24863__$1);
if(temp__4425__auto__){
var s__24863__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24863__$2)){
var c__19932__auto__ = cljs.core.chunk_first.call(null,s__24863__$2);
var size__19933__auto__ = cljs.core.count.call(null,c__19932__auto__);
var b__24865 = cljs.core.chunk_buffer.call(null,size__19933__auto__);
if((function (){var i__24864 = (0);
while(true){
if((i__24864 < size__19933__auto__)){
var crumb = cljs.core._nth.call(null,c__19932__auto__,i__24864);
cljs.core.chunk_append.call(null,b__24865,offcourse.views.components.breadcrumbs.Breadcrumb.call(null,crumb,handlers));

var G__24866 = (i__24864 + (1));
i__24864 = G__24866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24865),offcourse$views$components$breadcrumbs$Breadcrumbs_$_iter__24862.call(null,cljs.core.chunk_rest.call(null,s__24863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24865),null);
}
} else {
var crumb = cljs.core.first.call(null,s__24863__$2);
return cljs.core.cons.call(null,offcourse.views.components.breadcrumbs.Breadcrumb.call(null,crumb,handlers),offcourse$views$components$breadcrumbs$Breadcrumbs_$_iter__24862.call(null,cljs.core.rest.call(null,s__24863__$2)));
}
} else {
return null;
}
break;
}
});})(crumbs))
,null,null));
});})(crumbs))
;
return iter__19934__auto__.call(null,crumbs);
})()));
});

//# sourceMappingURL=breadcrumbs.js.map