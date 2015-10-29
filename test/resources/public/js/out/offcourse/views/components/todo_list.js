// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.components.todo_list');
goog.require('cljs.core');
goog.require('offcourse.helpers.css');
goog.require('quiescent.dom');
offcourse.views.components.todo_list.Checkbox = (function offcourse$views$components$todo_list$Checkbox(completed,p__24701){
var map__24704 = p__24701;
var map__24704__$1 = ((((!((map__24704 == null)))?((((map__24704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24704):map__24704);
var toggle_done = cljs.core.get.call(null,map__24704__$1,new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994));
var completed__$1 = (cljs.core.truth_(completed)?"complete":"incomplete");
return quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"checkbox",completed__$1),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),toggle_done], null));
});
offcourse.views.components.todo_list.TodoListItem = (function offcourse$views$components$todo_list$TodoListItem(p__24706,p__24707){
var vec__24711 = p__24706;
var id = cljs.core.nth.call(null,vec__24711,(0),null);
var completed = cljs.core.nth.call(null,vec__24711,(1),null);
var highlighted = cljs.core.nth.call(null,vec__24711,(2),null);
var title = cljs.core.nth.call(null,vec__24711,(3),null);
var map__24712 = p__24707;
var map__24712__$1 = ((((!((map__24712 == null)))?((((map__24712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24712):map__24712);
var toggle_done = cljs.core.get.call(null,map__24712__$1,new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994));
var go_to_checkpoint = cljs.core.get.call(null,map__24712__$1,new cljs.core.Keyword(null,"go-to-checkpoint","go-to-checkpoint",-566006961));
var highlight = cljs.core.get.call(null,map__24712__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var highlighted__$1 = (cljs.core.truth_(highlighted)?"highlighted":"not-highlighted");
var toggle_done__$1 = cljs.core.partial.call(null,toggle_done,id);
var go_to_checkpoint__$1 = cljs.core.partial.call(null,go_to_checkpoint,id);
var highlight__$1 = cljs.core.partial.call(null,highlight,id);
return quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"todolist_item",highlighted__$1),new cljs.core.Keyword(null,"onMouseEnter","onMouseEnter",-1535281844),((function (highlighted__$1,toggle_done__$1,go_to_checkpoint__$1,highlight__$1,vec__24711,id,completed,highlighted,title,map__24712,map__24712__$1,toggle_done,go_to_checkpoint,highlight){
return (function (){
return highlight__$1.call(null,true);
});})(highlighted__$1,toggle_done__$1,go_to_checkpoint__$1,highlight__$1,vec__24711,id,completed,highlighted,title,map__24712,map__24712__$1,toggle_done,go_to_checkpoint,highlight))
,new cljs.core.Keyword(null,"onMouseLeave","onMouseLeave",1446726903),((function (highlighted__$1,toggle_done__$1,go_to_checkpoint__$1,highlight__$1,vec__24711,id,completed,highlighted,title,map__24712,map__24712__$1,toggle_done,go_to_checkpoint,highlight){
return (function (){
return highlight__$1.call(null,false);
});})(highlighted__$1,toggle_done__$1,go_to_checkpoint__$1,highlight__$1,vec__24711,id,completed,highlighted,title,map__24712,map__24712__$1,toggle_done,go_to_checkpoint,highlight))
], null),quiescent.dom.p.call(null,cljs.core.PersistentArrayMap.EMPTY,offcourse.views.components.todo_list.Checkbox.call(null,completed,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),toggle_done__$1], null)),quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),go_to_checkpoint__$1], null),title)));
});
offcourse.views.components.todo_list.TodoList = (function offcourse$views$components$todo_list$TodoList(id,items,p__24714){
var map__24733 = p__24714;
var map__24733__$1 = ((((!((map__24733 == null)))?((((map__24733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24733):map__24733);
var toggle_done = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994));
var go_to_checkpoint = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"go-to-checkpoint","go-to-checkpoint",-566006961));
var highlight = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var toggle_done__$1 = cljs.core.partial.call(null,toggle_done,id);
var go_to_checkpoint__$1 = cljs.core.partial.call(null,go_to_checkpoint,id);
var highlight__$1 = cljs.core.partial.call(null,highlight,id);
return quiescent.dom.ul.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"todolist")], null),(function (){var iter__19934__auto__ = ((function (toggle_done__$1,go_to_checkpoint__$1,highlight__$1,map__24733,map__24733__$1,toggle_done,go_to_checkpoint,highlight){
return (function offcourse$views$components$todo_list$TodoList_$_iter__24735(s__24736){
return (new cljs.core.LazySeq(null,((function (toggle_done__$1,go_to_checkpoint__$1,highlight__$1,map__24733,map__24733__$1,toggle_done,go_to_checkpoint,highlight){
return (function (){
var s__24736__$1 = s__24736;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24736__$1);
if(temp__4425__auto__){
var s__24736__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24736__$2)){
var c__19932__auto__ = cljs.core.chunk_first.call(null,s__24736__$2);
var size__19933__auto__ = cljs.core.count.call(null,c__19932__auto__);
var b__24738 = cljs.core.chunk_buffer.call(null,size__19933__auto__);
if((function (){var i__24737 = (0);
while(true){
if((i__24737 < size__19933__auto__)){
var vec__24745 = cljs.core._nth.call(null,c__19932__auto__,i__24737);
var _ = cljs.core.nth.call(null,vec__24745,(0),null);
var map__24746 = cljs.core.nth.call(null,vec__24745,(1),null);
var map__24746__$1 = ((((!((map__24746 == null)))?((((map__24746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24746):map__24746);
var id__$1 = cljs.core.get.call(null,map__24746__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var completed = cljs.core.get.call(null,map__24746__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var highlighted = cljs.core.get.call(null,map__24746__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));
var task = cljs.core.get.call(null,map__24746__$1,new cljs.core.Keyword(null,"task","task",-1476607993));
cljs.core.chunk_append.call(null,b__24738,offcourse.views.components.todo_list.TodoListItem.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,completed,highlighted,task], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),toggle_done__$1,new cljs.core.Keyword(null,"go-to-checkpoint","go-to-checkpoint",-566006961),go_to_checkpoint__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873),highlight__$1], null)));

var G__24751 = (i__24737 + (1));
i__24737 = G__24751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24738),offcourse$views$components$todo_list$TodoList_$_iter__24735.call(null,cljs.core.chunk_rest.call(null,s__24736__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24738),null);
}
} else {
var vec__24748 = cljs.core.first.call(null,s__24736__$2);
var _ = cljs.core.nth.call(null,vec__24748,(0),null);
var map__24749 = cljs.core.nth.call(null,vec__24748,(1),null);
var map__24749__$1 = ((((!((map__24749 == null)))?((((map__24749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24749):map__24749);
var id__$1 = cljs.core.get.call(null,map__24749__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var completed = cljs.core.get.call(null,map__24749__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
var highlighted = cljs.core.get.call(null,map__24749__$1,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733));
var task = cljs.core.get.call(null,map__24749__$1,new cljs.core.Keyword(null,"task","task",-1476607993));
return cljs.core.cons.call(null,offcourse.views.components.todo_list.TodoListItem.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,completed,highlighted,task], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),toggle_done__$1,new cljs.core.Keyword(null,"go-to-checkpoint","go-to-checkpoint",-566006961),go_to_checkpoint__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873),highlight__$1], null)),offcourse$views$components$todo_list$TodoList_$_iter__24735.call(null,cljs.core.rest.call(null,s__24736__$2)));
}
} else {
return null;
}
break;
}
});})(toggle_done__$1,go_to_checkpoint__$1,highlight__$1,map__24733,map__24733__$1,toggle_done,go_to_checkpoint,highlight))
,null,null));
});})(toggle_done__$1,go_to_checkpoint__$1,highlight__$1,map__24733,map__24733__$1,toggle_done,go_to_checkpoint,highlight))
;
return iter__19934__auto__.call(null,items);
})());
});

//# sourceMappingURL=todo_list.js.map