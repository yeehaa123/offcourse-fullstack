// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.actions');
goog.require('cljs.core');
goog.require('offcourse.models.action');
offcourse.views.actions.init = (function offcourse$views$actions$init(p__24523){
var map__24526 = p__24523;
var map__24526__$1 = ((((!((map__24526 == null)))?((((map__24526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24526):map__24526);
var output = cljs.core.get.call(null,map__24526__$1,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906));
var _GT__GT__BANG_ = cljs.core.partial.call(null,offcourse.models.action._GT__GT__BANG_,output);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"highlight","highlight",-800930873),new cljs.core.Keyword(null,"toggle-done","toggle-done",-77894994),new cljs.core.Keyword(null,"toggle-mode","toggle-mode",-1732182225),new cljs.core.Keyword(null,"go-to-checkpoint","go-to-checkpoint",-566006961),new cljs.core.Keyword(null,"go-to","go-to",-1675511688),new cljs.core.Keyword(null,"commit-checkpoint","commit-checkpoint",1757077978),new cljs.core.Keyword(null,"go-to-collection","go-to-collection",-593537030),new cljs.core.Keyword(null,"set-mode","set-mode",782436988),new cljs.core.Keyword(null,"go-to-course","go-to-course",-1292054466)],[((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (course_id,checkpoint_id,highlight){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-highlight-toggle","requested-highlight-toggle",-1030677938),new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id,new cljs.core.Keyword(null,"highlight","highlight",-800930873),highlight);
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
,((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (course_id,checkpoint_id){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-done-toggle","requested-done-toggle",-1651907094),new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id);
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
,((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-mode-toggle","requested-mode-toggle",-1456022633));
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
,((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (course_id,checkpoint_id){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-level","requested-level",-1036005907),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id);
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
,((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (payload){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-level","requested-level",-1036005907),new cljs.core.Keyword(null,"payload","payload",-383036092),payload);
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
,((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (course_id,checkpoint_id){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-commit","requested-commit",-1329203769),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id);
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
,((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (collection_name){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-level","requested-level",-1036005907),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name);
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
,((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (mode){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-mode-switch","requested-mode-switch",-271430362),new cljs.core.Keyword(null,"mode","mode",654403691),mode);
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
,((function (_GT__GT__BANG_,map__24526,map__24526__$1,output){
return (function (course_id){
return _GT__GT__BANG_.call(null,new cljs.core.Keyword(null,"requested-level","requested-level",-1036005907),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id);
});})(_GT__GT__BANG_,map__24526,map__24526__$1,output))
]);
});

//# sourceMappingURL=actions.js.map