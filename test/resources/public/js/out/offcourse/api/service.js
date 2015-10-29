// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.api.service');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('offcourse.api.fake_data');
goog.require('offcourse.models.collection');
goog.require('offcourse.models.action');
offcourse.api.service.internal = cljs.core.async.chan.call(null);
offcourse.api.service.fetch_resource = (function offcourse$api$service$fetch_resource(p__25156){
var map__25159 = p__25156;
var map__25159__$1 = ((((!((map__25159 == null)))?((((map__25159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25159):map__25159);
var course_id = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002));
var checkpoint_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(checkpoint);
var checkpoint_url = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(checkpoint);
var resource = cljs.core.get.call(null,offcourse.api.fake_data.resources,checkpoint_url);
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"fetched-data","fetched-data",2038521880),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id,new cljs.core.Keyword(null,"resource","resource",251898836),resource);
});
offcourse.api.service.fetch_resources = (function offcourse$api$service$fetch_resources(course){
var checkpoints = cljs.core.vals.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course));
var seq__25203 = cljs.core.seq.call(null,checkpoints);
var chunk__25204 = null;
var count__25205 = (0);
var i__25206 = (0);
while(true){
if((i__25206 < count__25205)){
var checkpoint = cljs.core._nth.call(null,chunk__25204,i__25206);
var c__22242__auto___25245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__25203,chunk__25204,count__25205,i__25206,c__22242__auto___25245,checkpoint,checkpoints){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (seq__25203,chunk__25204,count__25205,i__25206,c__22242__auto___25245,checkpoint,checkpoints){
return (function (state_25216){
var state_val_25217 = (state_25216[(1)]);
if((state_val_25217 === (1))){
var inst_25207 = cljs.core.rand_int.call(null,(1000));
var inst_25208 = cljs.core.async.timeout.call(null,inst_25207);
var state_25216__$1 = state_25216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25216__$1,(2),inst_25208);
} else {
if((state_val_25217 === (2))){
var inst_25210 = (state_25216[(2)]);
var inst_25211 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course);
var inst_25212 = offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"requested-data","requested-data",-1737870093),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"course-id","course-id",-390190405),inst_25211,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),checkpoint);
var state_25216__$1 = (function (){var statearr_25218 = state_25216;
(statearr_25218[(7)] = inst_25210);

return statearr_25218;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25216__$1,(3),offcourse.api.service.internal,inst_25212);
} else {
if((state_val_25217 === (3))){
var inst_25214 = (state_25216[(2)]);
var state_25216__$1 = state_25216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25216__$1,inst_25214);
} else {
return null;
}
}
}
});})(seq__25203,chunk__25204,count__25205,i__25206,c__22242__auto___25245,checkpoint,checkpoints))
;
return ((function (seq__25203,chunk__25204,count__25205,i__25206,switch__22177__auto__,c__22242__auto___25245,checkpoint,checkpoints){
return (function() {
var offcourse$api$service$fetch_resources_$_state_machine__22178__auto__ = null;
var offcourse$api$service$fetch_resources_$_state_machine__22178__auto____0 = (function (){
var statearr_25222 = [null,null,null,null,null,null,null,null];
(statearr_25222[(0)] = offcourse$api$service$fetch_resources_$_state_machine__22178__auto__);

(statearr_25222[(1)] = (1));

return statearr_25222;
});
var offcourse$api$service$fetch_resources_$_state_machine__22178__auto____1 = (function (state_25216){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_25216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e25223){if((e25223 instanceof Object)){
var ex__22181__auto__ = e25223;
var statearr_25224_25246 = state_25216;
(statearr_25224_25246[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25247 = state_25216;
state_25216 = G__25247;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$api$service$fetch_resources_$_state_machine__22178__auto__ = function(state_25216){
switch(arguments.length){
case 0:
return offcourse$api$service$fetch_resources_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$api$service$fetch_resources_$_state_machine__22178__auto____1.call(this,state_25216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$api$service$fetch_resources_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$api$service$fetch_resources_$_state_machine__22178__auto____0;
offcourse$api$service$fetch_resources_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$api$service$fetch_resources_$_state_machine__22178__auto____1;
return offcourse$api$service$fetch_resources_$_state_machine__22178__auto__;
})()
;})(seq__25203,chunk__25204,count__25205,i__25206,switch__22177__auto__,c__22242__auto___25245,checkpoint,checkpoints))
})();
var state__22244__auto__ = (function (){var statearr_25225 = f__22243__auto__.call(null);
(statearr_25225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___25245);

return statearr_25225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(seq__25203,chunk__25204,count__25205,i__25206,c__22242__auto___25245,checkpoint,checkpoints))
);


var G__25248 = seq__25203;
var G__25249 = chunk__25204;
var G__25250 = count__25205;
var G__25251 = (i__25206 + (1));
seq__25203 = G__25248;
chunk__25204 = G__25249;
count__25205 = G__25250;
i__25206 = G__25251;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25203);
if(temp__4425__auto__){
var seq__25203__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25203__$1)){
var c__19965__auto__ = cljs.core.chunk_first.call(null,seq__25203__$1);
var G__25252 = cljs.core.chunk_rest.call(null,seq__25203__$1);
var G__25253 = c__19965__auto__;
var G__25254 = cljs.core.count.call(null,c__19965__auto__);
var G__25255 = (0);
seq__25203 = G__25252;
chunk__25204 = G__25253;
count__25205 = G__25254;
i__25206 = G__25255;
continue;
} else {
var checkpoint = cljs.core.first.call(null,seq__25203__$1);
var c__22242__auto___25256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__25203,chunk__25204,count__25205,i__25206,c__22242__auto___25256,checkpoint,seq__25203__$1,temp__4425__auto__,checkpoints){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (seq__25203,chunk__25204,count__25205,i__25206,c__22242__auto___25256,checkpoint,seq__25203__$1,temp__4425__auto__,checkpoints){
return (function (state_25235){
var state_val_25236 = (state_25235[(1)]);
if((state_val_25236 === (1))){
var inst_25226 = cljs.core.rand_int.call(null,(1000));
var inst_25227 = cljs.core.async.timeout.call(null,inst_25226);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25235__$1,(2),inst_25227);
} else {
if((state_val_25236 === (2))){
var inst_25229 = (state_25235[(2)]);
var inst_25230 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course);
var inst_25231 = offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"requested-data","requested-data",-1737870093),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"resource","resource",251898836),new cljs.core.Keyword(null,"course-id","course-id",-390190405),inst_25230,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),checkpoint);
var state_25235__$1 = (function (){var statearr_25237 = state_25235;
(statearr_25237[(7)] = inst_25229);

return statearr_25237;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25235__$1,(3),offcourse.api.service.internal,inst_25231);
} else {
if((state_val_25236 === (3))){
var inst_25233 = (state_25235[(2)]);
var state_25235__$1 = state_25235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25235__$1,inst_25233);
} else {
return null;
}
}
}
});})(seq__25203,chunk__25204,count__25205,i__25206,c__22242__auto___25256,checkpoint,seq__25203__$1,temp__4425__auto__,checkpoints))
;
return ((function (seq__25203,chunk__25204,count__25205,i__25206,switch__22177__auto__,c__22242__auto___25256,checkpoint,seq__25203__$1,temp__4425__auto__,checkpoints){
return (function() {
var offcourse$api$service$fetch_resources_$_state_machine__22178__auto__ = null;
var offcourse$api$service$fetch_resources_$_state_machine__22178__auto____0 = (function (){
var statearr_25241 = [null,null,null,null,null,null,null,null];
(statearr_25241[(0)] = offcourse$api$service$fetch_resources_$_state_machine__22178__auto__);

(statearr_25241[(1)] = (1));

return statearr_25241;
});
var offcourse$api$service$fetch_resources_$_state_machine__22178__auto____1 = (function (state_25235){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_25235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e25242){if((e25242 instanceof Object)){
var ex__22181__auto__ = e25242;
var statearr_25243_25257 = state_25235;
(statearr_25243_25257[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25258 = state_25235;
state_25235 = G__25258;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$api$service$fetch_resources_$_state_machine__22178__auto__ = function(state_25235){
switch(arguments.length){
case 0:
return offcourse$api$service$fetch_resources_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$api$service$fetch_resources_$_state_machine__22178__auto____1.call(this,state_25235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$api$service$fetch_resources_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$api$service$fetch_resources_$_state_machine__22178__auto____0;
offcourse$api$service$fetch_resources_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$api$service$fetch_resources_$_state_machine__22178__auto____1;
return offcourse$api$service$fetch_resources_$_state_machine__22178__auto__;
})()
;})(seq__25203,chunk__25204,count__25205,i__25206,switch__22177__auto__,c__22242__auto___25256,checkpoint,seq__25203__$1,temp__4425__auto__,checkpoints))
})();
var state__22244__auto__ = (function (){var statearr_25244 = f__22243__auto__.call(null);
(statearr_25244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___25256);

return statearr_25244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(seq__25203,chunk__25204,count__25205,i__25206,c__22242__auto___25256,checkpoint,seq__25203__$1,temp__4425__auto__,checkpoints))
);


var G__25259 = cljs.core.next.call(null,seq__25203__$1);
var G__25260 = null;
var G__25261 = (0);
var G__25262 = (0);
seq__25203 = G__25259;
chunk__25204 = G__25260;
count__25205 = G__25261;
i__25206 = G__25262;
continue;
}
} else {
return null;
}
}
break;
}
});
offcourse.api.service.fetch_collection = (function offcourse$api$service$fetch_collection(p__25263){
var map__25266 = p__25263;
var map__25266__$1 = ((((!((map__25266 == null)))?((((map__25266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25266):map__25266);
var collection_name = cljs.core.get.call(null,map__25266__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var collections = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"featured","featured",1584623723),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [(0),null,(1),null,(3),null,(2),null], null), null),new cljs.core.Keyword(null,"popular","popular",-752193652),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(0),null,(2),null], null), null),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null)], null);
var collection_ids = collection_name.call(null,collections);
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"fetched-data","fetched-data",2038521880),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385),collection_ids);
});
offcourse.api.service.fetch_course = (function offcourse$api$service$fetch_course(p__25268){
var map__25271 = p__25268;
var map__25271__$1 = ((((!((map__25271 == null)))?((((map__25271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25271):map__25271);
var payload = map__25271__$1;
var course_id = cljs.core.get.call(null,map__25271__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var course = cljs.core.get.call(null,offcourse.api.fake_data.courses,course_id);
offcourse.api.service.fetch_resources.call(null,course);

return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"fetched-data","fetched-data",2038521880),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"course","course",1455432948),course);
});
offcourse.api.service.fetch_courses = (function offcourse$api$service$fetch_courses(p__25274){
var map__25277 = p__25274;
var map__25277__$1 = ((((!((map__25277 == null)))?((((map__25277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25277):map__25277);
var course_ids = cljs.core.get.call(null,map__25277__$1,new cljs.core.Keyword(null,"course-ids","course-ids",-859730893));
var courses = cljs.core.map.call(null,((function (map__25277,map__25277__$1,course_ids){
return (function (p1__25273_SHARP_){
return cljs.core.get.call(null,offcourse.api.fake_data.courses,p1__25273_SHARP_);
});})(map__25277,map__25277__$1,course_ids))
,course_ids);
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"fetched-data","fetched-data",2038521880),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"courses","courses",-428279222),new cljs.core.Keyword(null,"courses","courses",-428279222),courses);
});
offcourse.api.service.fetch_data = (function offcourse$api$service$fetch_data(p__25279){
var map__25283 = p__25279;
var map__25283__$1 = ((((!((map__25283 == null)))?((((map__25283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25283):map__25283);
var payload = map__25283__$1;
var type = cljs.core.get.call(null,map__25283__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__25285 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25285) {
case "collection":
return offcourse.api.service.fetch_courses.call(null,payload);

break;
case "course":
offcourse.api.service.fetch_resources.call(null,payload);

return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"ignore","ignore",-1631542033));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
offcourse.api.service.find_data = (function offcourse$api$service$find_data(p__25287){
var map__25291 = p__25287;
var map__25291__$1 = ((((!((map__25291 == null)))?((((map__25291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25291):map__25291);
var payload = map__25291__$1;
var type = cljs.core.get.call(null,map__25291__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var store = cljs.core.get.call(null,map__25291__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var course_id = cljs.core.get.call(null,map__25291__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var G__25293 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25293) {
case "collection":
return offcourse.api.service.fetch_collection.call(null,payload);

break;
case "courses":
return offcourse.api.service.fetch_courses.call(null,payload);

break;
case "course":
return offcourse.api.service.fetch_course.call(null,payload);

break;
case "resources":
var course = cljs.core.get.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)),course_id);
offcourse.api.service.fetch_resources.call(null,course);

return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"ignore","ignore",-1631542033));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
offcourse.api.service.fetch_updates = (function offcourse$api$service$fetch_updates(p__25295){
var map__25298 = p__25295;
var map__25298__$1 = ((((!((map__25298 == null)))?((((map__25298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25298):map__25298);
var payload = map__25298__$1;
var type = cljs.core.get.call(null,map__25298__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var store = cljs.core.get.call(null,map__25298__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var course_id = cljs.core.get.call(null,map__25298__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var course = offcourse.models.collection.find_course.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)),course_id);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"course","course",1455432948))){
offcourse.api.service.fetch_resources.call(null,course);
} else {
}

return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"ignore","ignore",-1631542033));
});

//# sourceMappingURL=service.js.map