// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.components.collections_navigation');
goog.require('cljs.core');
goog.require('offcourse.helpers.css');
goog.require('clojure.string');
goog.require('quiescent.dom');
offcourse.views.components.collections_navigation.Collection_Button = (function offcourse$views$components$collections_navigation$Collection_Button(collection_name,p__24799){
var map__24802 = p__24799;
var map__24802__$1 = ((((!((map__24802 == null)))?((((map__24802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24802):map__24802);
var on_click = cljs.core.get.call(null,map__24802__$1,new cljs.core.Keyword(null,"go-to-collection","go-to-collection",-593537030));
return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-inverse browse",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24802,map__24802__$1,on_click){
return (function (){
return on_click.call(null,collection_name);
});})(map__24802,map__24802__$1,on_click))
], null),clojure.string.capitalize.call(null,cljs.core.name.call(null,collection_name)));
});
offcourse.views.components.collections_navigation.Collections_Navigation = (function offcourse$views$components$collections_navigation$Collections_Navigation(collection_names,handlers){
return quiescent.dom.nav.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.ul.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19934__auto__ = (function offcourse$views$components$collections_navigation$Collections_Navigation_$_iter__24808(s__24809){
return (new cljs.core.LazySeq(null,(function (){
var s__24809__$1 = s__24809;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24809__$1);
if(temp__4425__auto__){
var s__24809__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24809__$2)){
var c__19932__auto__ = cljs.core.chunk_first.call(null,s__24809__$2);
var size__19933__auto__ = cljs.core.count.call(null,c__19932__auto__);
var b__24811 = cljs.core.chunk_buffer.call(null,size__19933__auto__);
if((function (){var i__24810 = (0);
while(true){
if((i__24810 < size__19933__auto__)){
var collection_name = cljs.core._nth.call(null,c__19932__auto__,i__24810);
cljs.core.chunk_append.call(null,b__24811,quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),collection_name], null),offcourse.views.components.collections_navigation.Collection_Button.call(null,collection_name,handlers)));

var G__24812 = (i__24810 + (1));
i__24810 = G__24812;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24811),offcourse$views$components$collections_navigation$Collections_Navigation_$_iter__24808.call(null,cljs.core.chunk_rest.call(null,s__24809__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24811),null);
}
} else {
var collection_name = cljs.core.first.call(null,s__24809__$2);
return cljs.core.cons.call(null,quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),collection_name], null),offcourse.views.components.collections_navigation.Collection_Button.call(null,collection_name,handlers)),offcourse$views$components$collections_navigation$Collections_Navigation_$_iter__24808.call(null,cljs.core.rest.call(null,s__24809__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19934__auto__.call(null,collection_names);
})()));
});

//# sourceMappingURL=collections_navigation.js.map