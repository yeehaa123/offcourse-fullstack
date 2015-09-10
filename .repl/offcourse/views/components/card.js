// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.views.components.card');
goog.require('cljs.core');
offcourse.views.components.card.card = (function offcourse$views$components$card$card(item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.card","section.card",819631465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),item.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todolist","ul.todolist",-293717408)], null),(function (){var iter__34970__auto__ = (function offcourse$views$components$card$card_$_iter__57216(s__57217){
return (new cljs.core.LazySeq(null,(function (){
var s__57217__$1 = s__57217;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__57217__$1);
if(temp__4425__auto__){
var s__57217__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__57217__$2)){
var c__34968__auto__ = cljs.core.chunk_first.call(null,s__57217__$2);
var size__34969__auto__ = cljs.core.count.call(null,c__34968__auto__);
var b__57219 = cljs.core.chunk_buffer.call(null,size__34969__auto__);
if((function (){var i__57218 = (0);
while(true){
if((i__57218 < size__34969__auto__)){
var checkpoint = cljs.core._nth.call(null,c__34968__auto__,i__57218);
cljs.core.chunk_append.call(null,b__57219,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todolist_item","li.todolist_item",540191828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.checkbox","input.checkbox",383977155),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__57218,checkpoint,c__34968__auto__,size__34969__auto__,b__57219,s__57217__$2,temp__4425__auto__){
return (function (){
return window.alert("hiho");
});})(i__57218,checkpoint,c__34968__auto__,size__34969__auto__,b__57219,s__57217__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"checked","checked",-50955819),checkpoint.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),checkpoint.call(null,new cljs.core.Keyword(null,"task","task",-1476607993))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),checkpoint.call(null,new cljs.core.Keyword(null,"task","task",-1476607993))], null)));

var G__57220 = (i__57218 + (1));
i__57218 = G__57220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57219),offcourse$views$components$card$card_$_iter__57216.call(null,cljs.core.chunk_rest.call(null,s__57217__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57219),null);
}
} else {
var checkpoint = cljs.core.first.call(null,s__57217__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.todolist_item","li.todolist_item",540191828),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.checkbox","input.checkbox",383977155),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (checkpoint,s__57217__$2,temp__4425__auto__){
return (function (){
return window.alert("hiho");
});})(checkpoint,s__57217__$2,temp__4425__auto__))
,new cljs.core.Keyword(null,"checked","checked",-50955819),checkpoint.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),checkpoint.call(null,new cljs.core.Keyword(null,"task","task",-1476607993))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),checkpoint.call(null,new cljs.core.Keyword(null,"task","task",-1476607993))], null)),offcourse$views$components$card$card_$_iter__57216.call(null,cljs.core.rest.call(null,s__57217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__34970__auto__.call(null,item.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)));
})()], null);
});
