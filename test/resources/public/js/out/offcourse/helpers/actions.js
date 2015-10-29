// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.helpers.actions');
goog.require('cljs.core');
offcourse.helpers.actions.map_object = (function offcourse$helpers$actions$map_object(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__19934__auto__ = (function offcourse$helpers$actions$map_object_$_iter__27450(s__27451){
return (new cljs.core.LazySeq(null,(function (){
var s__27451__$1 = s__27451;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27451__$1);
if(temp__4425__auto__){
var s__27451__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27451__$2)){
var c__19932__auto__ = cljs.core.chunk_first.call(null,s__27451__$2);
var size__19933__auto__ = cljs.core.count.call(null,c__19932__auto__);
var b__27453 = cljs.core.chunk_buffer.call(null,size__19933__auto__);
if((function (){var i__27452 = (0);
while(true){
if((i__27452 < size__19933__auto__)){
var vec__27456 = cljs.core._nth.call(null,c__19932__auto__,i__27452);
var k = cljs.core.nth.call(null,vec__27456,(0),null);
var v = cljs.core.nth.call(null,vec__27456,(1),null);
cljs.core.chunk_append.call(null,b__27453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null));

var G__27458 = (i__27452 + (1));
i__27452 = G__27458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27453),offcourse$helpers$actions$map_object_$_iter__27450.call(null,cljs.core.chunk_rest.call(null,s__27451__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27453),null);
}
} else {
var vec__27457 = cljs.core.first.call(null,s__27451__$2);
var k = cljs.core.nth.call(null,vec__27457,(0),null);
var v = cljs.core.nth.call(null,vec__27457,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null),offcourse$helpers$actions$map_object_$_iter__27450.call(null,cljs.core.rest.call(null,s__27451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19934__auto__.call(null,m);
})());
});
offcourse.helpers.actions.bind_handlers = (function offcourse$helpers$actions$bind_handlers(handlers,id){
return offcourse.helpers.actions.map_object.call(null,(function (p1__27459_SHARP_){
return cljs.core.partial.call(null,p1__27459_SHARP_,id);
}),handlers);
});

//# sourceMappingURL=actions.js.map