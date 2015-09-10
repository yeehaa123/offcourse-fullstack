// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.views.containers.cards');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('offcourse.views.components.card');
offcourse.views.containers.cards.cards = (function offcourse$views$containers$cards$cards(){
var collection = reagent.session.get.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.cards","section.cards",-1367453406),(function (){var iter__34970__auto__ = ((function (collection){
return (function offcourse$views$containers$cards$cards_$_iter__57205(s__57206){
return (new cljs.core.LazySeq(null,((function (collection){
return (function (){
var s__57206__$1 = s__57206;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__57206__$1);
if(temp__4425__auto__){
var s__57206__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57206__$2)){
var c__34968__auto__ = cljs.core.chunk_first.call(null,s__57206__$2);
var size__34969__auto__ = cljs.core.count.call(null,c__34968__auto__);
var b__57208 = cljs.core.chunk_buffer.call(null,size__34969__auto__);
if((function (){var i__57207 = (0);
while(true){
if((i__57207 < size__34969__auto__)){
var item = cljs.core._nth.call(null,c__34968__auto__,i__57207);
cljs.core.chunk_append.call(null,b__57208,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offcourse.views.components.card.card,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501))], null)));

var G__57209 = (i__57207 + (1));
i__57207 = G__57209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57208),offcourse$views$containers$cards$cards_$_iter__57205.call(null,cljs.core.chunk_rest.call(null,s__57206__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57208),null);
}
} else {
var item = cljs.core.first.call(null,s__57206__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offcourse.views.components.card.card,item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501))], null)),offcourse$views$containers$cards$cards_$_iter__57205.call(null,cljs.core.rest.call(null,s__57206__$2)));
}
} else {
return null;
}
break;
}
});})(collection))
,null,null));
});})(collection))
;
return iter__34970__auto__.call(null,collection);
})()], null);
});
