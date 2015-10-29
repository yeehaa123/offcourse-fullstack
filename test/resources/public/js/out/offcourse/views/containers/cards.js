// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.containers.cards');
goog.require('cljs.core');
goog.require('offcourse.views.components.card');
goog.require('quiescent.dom');
offcourse.views.containers.cards.schema = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"map","map",1371690461),null,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"course-button","course-button",1931566465),new cljs.core.Keyword(null,"id","id",-1388402092)], null),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"checkpoint-button","checkpoint-button",-1265804660),new cljs.core.Keyword(null,"id","id",-1388402092)], null)], null);
offcourse.views.containers.cards.Cards = (function offcourse$views$containers$cards$Cards(p__24826,handlers){
var map__24834 = p__24826;
var map__24834__$1 = ((((!((map__24834 == null)))?((((map__24834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24834):map__24834);
var level = cljs.core.get.call(null,map__24834__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var course = cljs.core.get.call(null,map__24834__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var collection = cljs.core.get.call(null,map__24834__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
var course_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course);
var collection__$1 = cljs.core.vals.call(null,collection);
var collection__$2 = (function (){var G__24836 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__24836) {
case "collection":
return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),collection__$1);

break;
case "course":
return cljs.core.map.call(null,((function (G__24836,course_id,collection__$1,map__24834,map__24834__$1,level,course,collection){
return (function (p1__24825_SHARP_){
return cljs.core.assoc.call(null,p1__24825_SHARP_,new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id);
});})(G__24836,course_id,collection__$1,map__24834,map__24834__$1,level,course,collection))
,cljs.core.vals.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course)));

break;
default:
return null;

}
})();
return quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"cards"], null),(function (){var iter__19934__auto__ = ((function (course_id,collection__$1,collection__$2,map__24834,map__24834__$1,level,course,collection){
return (function offcourse$views$containers$cards$Cards_$_iter__24837(s__24838){
return (new cljs.core.LazySeq(null,((function (course_id,collection__$1,collection__$2,map__24834,map__24834__$1,level,course,collection){
return (function (){
var s__24838__$1 = s__24838;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24838__$1);
if(temp__4425__auto__){
var s__24838__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24838__$2)){
var c__19932__auto__ = cljs.core.chunk_first.call(null,s__24838__$2);
var size__19933__auto__ = cljs.core.count.call(null,c__19932__auto__);
var b__24840 = cljs.core.chunk_buffer.call(null,size__19933__auto__);
if((function (){var i__24839 = (0);
while(true){
if((i__24839 < size__19933__auto__)){
var item = cljs.core._nth.call(null,c__19932__auto__,i__24839);
cljs.core.chunk_append.call(null,b__24840,offcourse.views.components.card.Card.call(null,level.call(null,offcourse.views.containers.cards.schema),item,handlers));

var G__24842 = (i__24839 + (1));
i__24839 = G__24842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24840),offcourse$views$containers$cards$Cards_$_iter__24837.call(null,cljs.core.chunk_rest.call(null,s__24838__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24840),null);
}
} else {
var item = cljs.core.first.call(null,s__24838__$2);
return cljs.core.cons.call(null,offcourse.views.components.card.Card.call(null,level.call(null,offcourse.views.containers.cards.schema),item,handlers),offcourse$views$containers$cards$Cards_$_iter__24837.call(null,cljs.core.rest.call(null,s__24838__$2)));
}
} else {
return null;
}
break;
}
});})(course_id,collection__$1,collection__$2,map__24834,map__24834__$1,level,course,collection))
,null,null));
});})(course_id,collection__$1,collection__$2,map__24834,map__24834__$1,level,course,collection))
;
return iter__19934__auto__.call(null,collection__$2);
})());
});

//# sourceMappingURL=cards.js.map