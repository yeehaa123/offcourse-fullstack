// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.store');
goog.require('cljs.core');
goog.require('offcourse.appstate.model');
goog.require('offcourse.appstate.utils');
goog.require('offcourse.models.course');
goog.require('offcourse.models.action');
offcourse.appstate.store.appstate = cljs.core.atom.call(null,offcourse.appstate.model.new_appstate.call(null));
offcourse.appstate.store.update_appstate_BANG_ = (function offcourse$appstate$store$update_appstate_BANG_(fn){
cljs.core.swap_BANG_.call(null,offcourse.appstate.store.appstate,fn);

return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"updated-appstate","updated-appstate",1658664734),new cljs.core.Keyword(null,"appstate","appstate",-602713426),cljs.core.deref.call(null,offcourse.appstate.store.appstate));
});
offcourse.appstate.store.refresh_checkpoint = (function offcourse$appstate$store$refresh_checkpoint(p__26229){
var map__26232 = p__26229;
var map__26232__$1 = ((((!((map__26232 == null)))?((((map__26232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26232):map__26232);
var store = cljs.core.get.call(null,map__26232__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var level = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,offcourse.appstate.store.appstate));
var course = offcourse.appstate.utils.get_course.call(null,cljs.core.deref.call(null,offcourse.appstate.store.appstate),cljs.core.deref.call(null,store));
var checkpoint_id = new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,offcourse.appstate.store.appstate)));
var checkpoint = offcourse.models.course.find_checkpoint.call(null,course,checkpoint_id);
if(cljs.core.truth_((function (){var or__19162__auto__ = checkpoint;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return cljs.core._EQ_.call(null,checkpoint_id,new cljs.core.Keyword(null,"new","new",-2085437848));
}
})())){
return offcourse.appstate.store.update_appstate_BANG_.call(null,((function (level,course,checkpoint_id,checkpoint,map__26232,map__26232__$1,store){
return (function (p1__26228_SHARP_){
return offcourse.appstate.model.update_checkpoint.call(null,p1__26228_SHARP_,course);
});})(level,course,checkpoint_id,checkpoint,map__26232,map__26232__$1,store))
);
} else {
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"not-found-resource","not-found-resource",1485416066));
}
});
offcourse.appstate.store.refresh_collection = (function offcourse$appstate$store$refresh_collection(p__26235){
var map__26238 = p__26235;
var map__26238__$1 = ((((!((map__26238 == null)))?((((map__26238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26238):map__26238);
var store = cljs.core.get.call(null,map__26238__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var collection = offcourse.appstate.utils.get_collection.call(null,cljs.core.deref.call(null,offcourse.appstate.store.appstate),cljs.core.deref.call(null,store));
return offcourse.appstate.store.update_appstate_BANG_.call(null,((function (collection,map__26238,map__26238__$1,store){
return (function (p1__26234_SHARP_){
return offcourse.appstate.model.refresh_collection.call(null,p1__26234_SHARP_,collection);
});})(collection,map__26238,map__26238__$1,store))
);
});
offcourse.appstate.store.refresh_course = (function offcourse$appstate$store$refresh_course(p__26241){
var map__26244 = p__26241;
var map__26244__$1 = ((((!((map__26244 == null)))?((((map__26244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26244):map__26244);
var store = cljs.core.get.call(null,map__26244__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var course = offcourse.appstate.utils.get_course.call(null,cljs.core.deref.call(null,offcourse.appstate.store.appstate),cljs.core.deref.call(null,store));
if(cljs.core.truth_(course)){
return offcourse.appstate.store.update_appstate_BANG_.call(null,((function (course,map__26244,map__26244__$1,store){
return (function (p1__26240_SHARP_){
return offcourse.appstate.model.refresh_course.call(null,p1__26240_SHARP_,course);
});})(course,map__26244,map__26244__$1,store))
);
} else {
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"not-found-resource","not-found-resource",1485416066));
}
});
offcourse.appstate.store.set_mode = (function offcourse$appstate$store$set_mode(p__26247){
var map__26250 = p__26247;
var map__26250__$1 = ((((!((map__26250 == null)))?((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26250):map__26250);
var mode = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
return offcourse.appstate.store.update_appstate_BANG_.call(null,((function (map__26250,map__26250__$1,mode){
return (function (p1__26246_SHARP_){
return offcourse.appstate.model.set_mode.call(null,p1__26246_SHARP_,mode);
});})(map__26250,map__26250__$1,mode))
);
});
offcourse.appstate.store.toggle_mode = (function offcourse$appstate$store$toggle_mode(){
return offcourse.appstate.store.update_appstate_BANG_.call(null,(function (p1__26252_SHARP_){
return offcourse.appstate.model.toggle_mode.call(null,p1__26252_SHARP_);
}));
});
offcourse.appstate.store.set_level = (function offcourse$appstate$store$set_level(payload){
return offcourse.appstate.store.update_appstate_BANG_.call(null,(function (p1__26253_SHARP_){
return offcourse.appstate.model.set_level.call(null,p1__26253_SHARP_,payload);
}));
});
offcourse.appstate.store.refresh = (function offcourse$appstate$store$refresh(payload){
var map__26257 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,offcourse.appstate.store.appstate));
var map__26257__$1 = ((((!((map__26257 == null)))?((((map__26257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26257):map__26257);
var level = map__26257__$1;
var type = cljs.core.get.call(null,map__26257__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__26259 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26259) {
case "collection":
return offcourse.appstate.store.refresh_collection.call(null,payload);

break;
case "course":
return offcourse.appstate.store.refresh_course.call(null,payload);

break;
case "checkpoint":
return offcourse.appstate.store.refresh_checkpoint.call(null,payload);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
offcourse.appstate.store.toggle_highlight = (function offcourse$appstate$store$toggle_highlight(payload){
var map__26266 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,offcourse.appstate.store.appstate));
var map__26266__$1 = ((((!((map__26266 == null)))?((((map__26266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26266):map__26266);
var level = map__26266__$1;
var type = cljs.core.get.call(null,map__26266__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__26268 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26268) {
case "collection":
return offcourse.appstate.store.update_appstate_BANG_.call(null,((function (G__26268,map__26266,map__26266__$1,level,type){
return (function (p1__26261_SHARP_){
return offcourse.appstate.model.highlight_collection.call(null,p1__26261_SHARP_,payload);
});})(G__26268,map__26266,map__26266__$1,level,type))
);

break;
case "course":
return offcourse.appstate.store.update_appstate_BANG_.call(null,((function (G__26268,map__26266,map__26266__$1,level,type){
return (function (p1__26262_SHARP_){
return offcourse.appstate.model.highlight_course.call(null,p1__26262_SHARP_,payload);
});})(G__26268,map__26266,map__26266__$1,level,type))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
offcourse.appstate.store.commit_data = (function offcourse$appstate$store$commit_data(p__26270){
var map__26273 = p__26270;
var map__26273__$1 = ((((!((map__26273 == null)))?((((map__26273.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26273.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26273):map__26273);
var payload = map__26273__$1;
var course_id = cljs.core.get.call(null,map__26273__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__26273__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
var course = new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,offcourse.appstate.store.appstate)));
var checkpoint = offcourse.models.course.find_checkpoint.call(null,course,checkpoint_id);
var payload__$1 = cljs.core.assoc.call(null,payload,new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),checkpoint);
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"requested-commit","requested-commit",-1329203769),new cljs.core.Keyword(null,"payload","payload",-383036092),payload__$1);
});
offcourse.appstate.store.force_refresh = (function offcourse$appstate$store$force_refresh(){
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"reloaded-appstate","reloaded-appstate",-393641237),new cljs.core.Keyword(null,"appstate","appstate",-602713426),cljs.core.deref.call(null,offcourse.appstate.store.appstate));
});

//# sourceMappingURL=store.js.map