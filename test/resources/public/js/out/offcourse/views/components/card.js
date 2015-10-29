// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.components.card');
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('offcourse.views.components.todo_list');
goog.require('offcourse.helpers.css');
offcourse.views.components.card.Button = (function offcourse$views$components$card$Button(var_args){
var args24754 = [];
var len__20220__auto___24763 = arguments.length;
var i__20221__auto___24764 = (0);
while(true){
if((i__20221__auto___24764 < len__20220__auto___24763)){
args24754.push((arguments[i__20221__auto___24764]));

var G__24765 = (i__20221__auto___24764 + (1));
i__20221__auto___24764 = G__24765;
continue;
} else {
}
break;
}

var G__24756 = args24754.length;
switch (G__24756) {
case 2:
return offcourse.views.components.card.Button.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return offcourse.views.components.card.Button.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24754.length)].join('')));

}
});

offcourse.views.components.card.Button.cljs$core$IFn$_invoke$arity$2 = (function (course_id,p__24757){
var map__24758 = p__24757;
var map__24758__$1 = ((((!((map__24758 == null)))?((((map__24758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24758):map__24758);
var go_to_course = cljs.core.get.call(null,map__24758__$1,new cljs.core.Keyword(null,"go-to-course","go-to-course",-1292054466));
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-inverse browse",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24758,map__24758__$1,go_to_course){
return (function (){
return go_to_course.call(null,course_id);
});})(map__24758,map__24758__$1,go_to_course))
], null),"Open");
});

offcourse.views.components.card.Button.cljs$core$IFn$_invoke$arity$3 = (function (course_id,checkpoint_id,p__24760){
var map__24761 = p__24760;
var map__24761__$1 = ((((!((map__24761 == null)))?((((map__24761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24761):map__24761);
var go_to_checkpoint = cljs.core.get.call(null,map__24761__$1,new cljs.core.Keyword(null,"go-to-checkpoint","go-to-checkpoint",-566006961));
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-inverse browse",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24761,map__24761__$1,go_to_checkpoint){
return (function (){
return go_to_checkpoint.call(null,course_id,checkpoint_id);
});})(map__24761,map__24761__$1,go_to_checkpoint))
], null),"Open");
});

offcourse.views.components.card.Button.cljs$lang$maxFixedArity = 3;
offcourse.views.components.card.AddCheckpointButton = (function offcourse$views$components$card$AddCheckpointButton(course_id,p__24767){
var map__24770 = p__24767;
var map__24770__$1 = ((((!((map__24770 == null)))?((((map__24770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24770):map__24770);
var go_to_checkpoint = cljs.core.get.call(null,map__24770__$1,new cljs.core.Keyword(null,"go-to-checkpoint","go-to-checkpoint",-566006961));
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-inverse browse",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24770,map__24770__$1,go_to_checkpoint){
return (function (){
return go_to_checkpoint.call(null,course_id,"new");
});})(map__24770,map__24770__$1,go_to_checkpoint))
], null),"Add Checkpoint");
});
offcourse.views.components.card.CommitCheckpointButton = (function offcourse$views$components$card$CommitCheckpointButton(course_id,checkpoint_id,p__24772){
var map__24775 = p__24772;
var map__24775__$1 = ((((!((map__24775 == null)))?((((map__24775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24775):map__24775);
var commit_checkpoint = cljs.core.get.call(null,map__24775__$1,new cljs.core.Keyword(null,"commit-checkpoint","commit-checkpoint",1757077978));
if(cljs.core._EQ_.call(null,checkpoint_id,new cljs.core.Keyword(null,"new","new",-2085437848))){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"btn btn-inverse browse",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24775,map__24775__$1,commit_checkpoint){
return (function (){
return commit_checkpoint.call(null,course_id,(cljs.core.truth_(checkpoint_id)?checkpoint_id:new cljs.core.Keyword(null,"new","new",-2085437848)));
});})(map__24775,map__24775__$1,commit_checkpoint))
], null),"Add To Course");
} else {
return null;
}
});
offcourse.views.components.card.Title = (function offcourse$views$components$card$Title(title){
return quiescent.dom.h1.call(null,cljs.core.PersistentArrayMap.EMPTY,title);
});
offcourse.views.components.card.Map = (function offcourse$views$components$card$Map(){
return quiescent.dom.div.call(null);
});
offcourse.views.components.card.Checkbox = (function offcourse$views$components$card$Checkbox(course_id,checkbox_id,completed_QMARK_,p__24777){
var map__24780 = p__24777;
var map__24780__$1 = ((((!((map__24780 == null)))?((((map__24780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24780):map__24780);
var toggle_done = cljs.core.get.call(null,map__24780__$1,new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994));
var completed = (cljs.core.truth_(completed_QMARK_)?"complete":"incomplete");
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),completed,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (completed,map__24780,map__24780__$1,toggle_done){
return (function (){
return toggle_done.call(null,course_id,checkbox_id);
});})(completed,map__24780,map__24780__$1,toggle_done))
], null));
});
offcourse.views.components.card.CardSection = (function offcourse$views$components$card$CardSection(index,p__24782,item,handlers){
var vec__24785 = p__24782;
var type = cljs.core.nth.call(null,vec__24785,(0),null);
var data_key = cljs.core.nth.call(null,vec__24785,(1),null);
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.type_classes.call(null,"card_section",type)], null),(function (){var G__24786 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24786) {
case "map":
return offcourse.views.components.card.Map.call(null);

break;
case "checkbox":
return offcourse.views.components.card.Checkbox.call(null,new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),data_key.call(null,item),handlers);

break;
case "title":
return offcourse.views.components.card.Title.call(null,data_key.call(null,item));

break;
case "info":
return offcourse.views.components.card.Title.call(null,data_key.call(null,new cljs.core.Keyword(null,"resource","resource",251898836).cljs$core$IFn$_invoke$arity$1(item)));

break;
case "list":
return offcourse.views.components.todo_list.TodoList.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),data_key.call(null,item),handlers);

break;
case "course-button":
return offcourse.views.components.card.Button.call(null,data_key.call(null,item),handlers);

break;
case "checkpoint-button":
return offcourse.views.components.card.Button.call(null,new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(item),data_key.call(null,item),handlers);

break;
case "add-checkpoint-button":
return offcourse.views.components.card.AddCheckpointButton.call(null,data_key.call(null,item),handlers);

break;
case "commit-checkpoint-button":
return offcourse.views.components.card.CommitCheckpointButton.call(null,new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(item),data_key.call(null,item),handlers);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})());
});
offcourse.views.components.card.Card = (function offcourse$views$components$card$Card(schema,item,handlers){
var highlighted = (cljs.core.truth_(new cljs.core.Keyword(null,"highlighted","highlighted",1723498733).cljs$core$IFn$_invoke$arity$1(item))?"highlighted":"not-highlighted");
return quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"card",highlighted)], null),cljs.core.map_indexed.call(null,((function (highlighted){
return (function (p1__24788_SHARP_,p2__24789_SHARP_){
return offcourse.views.components.card.CardSection.call(null,p1__24788_SHARP_,p2__24789_SHARP_,item,handlers);
});})(highlighted))
,schema));
});

//# sourceMappingURL=card.js.map