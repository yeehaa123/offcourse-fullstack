// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.viewmodel');
goog.require('cljs.core');
goog.require('offcourse.appstate.viewmodels.collection');
goog.require('offcourse.appstate.viewmodels.course');
goog.require('offcourse.appstate.viewmodels.checkpoint');
offcourse.appstate.viewmodel.select = (function offcourse$appstate$viewmodel$select(p__50608,labels){
var map__50612 = p__50608;
var map__50612__$1 = ((((!((map__50612 == null)))?((((map__50612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50612):map__50612);
var type = cljs.core.get.call(null,map__50612__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var course_id = cljs.core.get.call(null,map__50612__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__50612__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
var collection_type = cljs.core.get.call(null,map__50612__$1,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118));
var collection_name = cljs.core.get.call(null,map__50612__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var G__50614 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__50614) {
case "collection":
return offcourse.appstate.viewmodels.collection.__GT_collection.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),collection_type,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name], null),labels);

break;
case "course":
return offcourse.appstate.viewmodels.course.new_course.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id], null));

break;
case "checkpoint":
return offcourse.appstate.viewmodels.checkpoint.new_checkpoint.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id], null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
offcourse.appstate.viewmodel.check = (function offcourse$appstate$viewmodel$check(p__50616){
var map__50620 = p__50616;
var map__50620__$1 = ((((!((map__50620 == null)))?((((map__50620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50620):map__50620);
var viewmodel = map__50620__$1;
var level = cljs.core.get.call(null,map__50620__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var G__50622 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__50622) {
case "collection":
return offcourse.appstate.viewmodels.collection.check.call(null,viewmodel);

break;
case "course":
return offcourse.appstate.viewmodels.course.check.call(null,viewmodel);

break;
case "checkpoint":
return offcourse.appstate.viewmodels.checkpoint.check.call(null,viewmodel);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
});
offcourse.appstate.viewmodel.toggle_highlight_label = (function offcourse$appstate$viewmodel$toggle_highlight_label(p__50624,label_name,label_type,highlight){
var map__50627 = p__50624;
var map__50627__$1 = ((((!((map__50627 == null)))?((((map__50627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50627):map__50627);
var viewmodel = map__50627__$1;
var level = cljs.core.get.call(null,map__50627__$1,new cljs.core.Keyword(null,"level","level",1290497552));
return offcourse.appstate.viewmodels.collection.highlight_label.call(null,viewmodel,label_name,label_type,highlight);
});
offcourse.appstate.viewmodel.toggle_highlight = (function offcourse$appstate$viewmodel$toggle_highlight(p__50629,course_id,checkpoint_id,highlight){
var map__50633 = p__50629;
var map__50633__$1 = ((((!((map__50633 == null)))?((((map__50633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50633):map__50633);
var viewmodel = map__50633__$1;
var level = cljs.core.get.call(null,map__50633__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var G__50635 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__50635) {
case "collection":
return offcourse.appstate.viewmodels.collection.highlight_checkpoint.call(null,viewmodel,course_id,checkpoint_id,highlight);

break;
case "course":
return offcourse.appstate.viewmodels.course.highlight_checkpoint.call(null,viewmodel,checkpoint_id,highlight);

break;
case "checkpoint":
return offcourse.appstate.viewmodels.course.highlight_checkpoint.call(null,viewmodel,checkpoint_id,highlight);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
});
offcourse.appstate.viewmodel.refresh = (function offcourse$appstate$viewmodel$refresh(p__50637,store){
var map__50641 = p__50637;
var map__50641__$1 = ((((!((map__50641 == null)))?((((map__50641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50641):map__50641);
var viewmodel = map__50641__$1;
var level = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var course = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var collection = cljs.core.get.call(null,map__50641__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
var G__50643 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__50643) {
case "collection":
return offcourse.appstate.viewmodels.collection.refresh.call(null,collection,store);

break;
case "course":
return offcourse.appstate.viewmodels.course.refresh.call(null,course,store);

break;
case "checkpoint":
return offcourse.appstate.viewmodels.checkpoint.refresh.call(null,viewmodel,store);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
});
