// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.services.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('offcourse.models.course');
goog.require('offcourse.services.fake_data');
goog.require('offcourse.models.checkpoint');
offcourse.services.api.channel = cljs.core.async.chan.call(null);
offcourse.services.api.resources_channel = cljs.core.async.chan.call(null);
offcourse.services.api.courses_store = cljs.core.atom.call(null,offcourse.services.fake_data.courses);
offcourse.services.api.response = (function offcourse$services$api$response(type,name,data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
});
offcourse.services.api.send_response = (function offcourse$services$api$send_response(response){
var c__37229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37229__auto__){
return (function (){
var f__37230__auto__ = (function (){var switch__37208__auto__ = ((function (c__37229__auto__){
return (function (state_57820){
var state_val_57821 = (state_57820[(1)]);
if((state_val_57821 === (1))){
var state_57820__$1 = state_57820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57820__$1,(2),offcourse.services.api.channel,response);
} else {
if((state_val_57821 === (2))){
var inst_57818 = (state_57820[(2)]);
var state_57820__$1 = state_57820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57820__$1,inst_57818);
} else {
return null;
}
}
});})(c__37229__auto__))
;
return ((function (switch__37208__auto__,c__37229__auto__){
return (function() {
var offcourse$services$api$send_response_$_state_machine__37209__auto__ = null;
var offcourse$services$api$send_response_$_state_machine__37209__auto____0 = (function (){
var statearr_57825 = [null,null,null,null,null,null,null];
(statearr_57825[(0)] = offcourse$services$api$send_response_$_state_machine__37209__auto__);

(statearr_57825[(1)] = (1));

return statearr_57825;
});
var offcourse$services$api$send_response_$_state_machine__37209__auto____1 = (function (state_57820){
while(true){
var ret_value__37210__auto__ = (function (){try{while(true){
var result__37211__auto__ = switch__37208__auto__.call(null,state_57820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37211__auto__;
}
break;
}
}catch (e57826){if((e57826 instanceof Object)){
var ex__37212__auto__ = e57826;
var statearr_57827_57829 = state_57820;
(statearr_57827_57829[(5)] = ex__37212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57830 = state_57820;
state_57820 = G__57830;
continue;
} else {
return ret_value__37210__auto__;
}
break;
}
});
offcourse$services$api$send_response_$_state_machine__37209__auto__ = function(state_57820){
switch(arguments.length){
case 0:
return offcourse$services$api$send_response_$_state_machine__37209__auto____0.call(this);
case 1:
return offcourse$services$api$send_response_$_state_machine__37209__auto____1.call(this,state_57820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$send_response_$_state_machine__37209__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$send_response_$_state_machine__37209__auto____0;
offcourse$services$api$send_response_$_state_machine__37209__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$send_response_$_state_machine__37209__auto____1;
return offcourse$services$api$send_response_$_state_machine__37209__auto__;
})()
;})(switch__37208__auto__,c__37229__auto__))
})();
var state__37231__auto__ = (function (){var statearr_57828 = f__37230__auto__.call(null);
(statearr_57828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37229__auto__);

return statearr_57828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37231__auto__);
});})(c__37229__auto__))
);

return c__37229__auto__;
});
offcourse.services.api.choose_response = (function offcourse$services$api$choose_response(courses,keyword){
var G__57832 = (((keyword instanceof cljs.core.Keyword))?keyword.fqn:null);
switch (G__57832) {
case "new":
return offcourse.services.api.response.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),keyword,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,courses)],null)));

break;
case "popular":
return offcourse.services.api.response.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),keyword,cljs.core.rest.call(null,courses));

break;
case "featured":
return offcourse.services.api.response.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),keyword,courses);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(keyword)].join('')));

}
});
offcourse.services.api.send_courses = (function offcourse$services$api$send_courses(keyword){
return offcourse.services.api.send_response.call(null,offcourse.services.api.choose_response.call(null,cljs.core.vec.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,offcourse.services.api.courses_store))),keyword));
});
offcourse.services.api.send_course = (function offcourse$services$api$send_course(id,type){
var course = cljs.core.get.call(null,cljs.core.deref.call(null,offcourse.services.api.courses_store),id);
var response = offcourse.services.api.response.call(null,type,course.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501)),course);
return offcourse.services.api.send_response.call(null,response);
});
offcourse.services.api.update_course_BANG_ = (function offcourse$services$api$update_course_BANG_(id,cb){
cljs.core.swap_BANG_.call(null,offcourse.services.api.courses_store,(function (p1__57834_SHARP_){
return cb.call(null,p1__57834_SHARP_);
}));

return offcourse.services.api.send_course.call(null,id,new cljs.core.Keyword(null,"update","update",1045576396));
});
offcourse.services.api.listen_for_resources = (function offcourse$services$api$listen_for_resources(){
var c__37229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37229__auto__){
return (function (){
var f__37230__auto__ = (function (){var switch__37208__auto__ = ((function (c__37229__auto__){
return (function (state_57871){
var state_val_57872 = (state_57871[(1)]);
if((state_val_57872 === (1))){
var state_57871__$1 = state_57871;
var statearr_57873_57883 = state_57871__$1;
(statearr_57873_57883[(2)] = null);

(statearr_57873_57883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57872 === (2))){
var state_57871__$1 = state_57871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57871__$1,(4),offcourse.services.api.resources_channel);
} else {
if((state_val_57872 === (3))){
var inst_57869 = (state_57871[(2)]);
var state_57871__$1 = state_57871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57871__$1,inst_57869);
} else {
if((state_val_57872 === (4))){
var inst_57862 = (state_57871[(2)]);
var inst_57863 = cljs.core.nth.call(null,inst_57862,(0),null);
var inst_57864 = cljs.core.nth.call(null,inst_57862,(1),null);
var inst_57865 = cljs.core.partial.call(null,offcourse.models.course.augment,inst_57863,inst_57864);
var inst_57866 = offcourse.services.api.update_course_BANG_.call(null,inst_57863,inst_57865);
var state_57871__$1 = (function (){var statearr_57874 = state_57871;
(statearr_57874[(7)] = inst_57866);

return statearr_57874;
})();
var statearr_57875_57884 = state_57871__$1;
(statearr_57875_57884[(2)] = null);

(statearr_57875_57884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__37229__auto__))
;
return ((function (switch__37208__auto__,c__37229__auto__){
return (function() {
var offcourse$services$api$listen_for_resources_$_state_machine__37209__auto__ = null;
var offcourse$services$api$listen_for_resources_$_state_machine__37209__auto____0 = (function (){
var statearr_57879 = [null,null,null,null,null,null,null,null];
(statearr_57879[(0)] = offcourse$services$api$listen_for_resources_$_state_machine__37209__auto__);

(statearr_57879[(1)] = (1));

return statearr_57879;
});
var offcourse$services$api$listen_for_resources_$_state_machine__37209__auto____1 = (function (state_57871){
while(true){
var ret_value__37210__auto__ = (function (){try{while(true){
var result__37211__auto__ = switch__37208__auto__.call(null,state_57871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37211__auto__;
}
break;
}
}catch (e57880){if((e57880 instanceof Object)){
var ex__37212__auto__ = e57880;
var statearr_57881_57885 = state_57871;
(statearr_57881_57885[(5)] = ex__37212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57886 = state_57871;
state_57871 = G__57886;
continue;
} else {
return ret_value__37210__auto__;
}
break;
}
});
offcourse$services$api$listen_for_resources_$_state_machine__37209__auto__ = function(state_57871){
switch(arguments.length){
case 0:
return offcourse$services$api$listen_for_resources_$_state_machine__37209__auto____0.call(this);
case 1:
return offcourse$services$api$listen_for_resources_$_state_machine__37209__auto____1.call(this,state_57871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$listen_for_resources_$_state_machine__37209__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$listen_for_resources_$_state_machine__37209__auto____0;
offcourse$services$api$listen_for_resources_$_state_machine__37209__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$listen_for_resources_$_state_machine__37209__auto____1;
return offcourse$services$api$listen_for_resources_$_state_machine__37209__auto__;
})()
;})(switch__37208__auto__,c__37229__auto__))
})();
var state__37231__auto__ = (function (){var statearr_57882 = f__37230__auto__.call(null);
(statearr_57882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37229__auto__);

return statearr_57882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37231__auto__);
});})(c__37229__auto__))
);

return c__37229__auto__;
});
offcourse.services.api.listen_for_resources.call(null);
offcourse.services.api.fetch_resources = (function offcourse$services$api$fetch_resources(id){
var c__37229__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37229__auto__){
return (function (){
var f__37230__auto__ = (function (){var switch__37208__auto__ = ((function (c__37229__auto__){
return (function (state_57933){
var state_val_57934 = (state_57933[(1)]);
if((state_val_57934 === (1))){
var inst_57915 = cljs.core.async.timeout.call(null,(1000));
var state_57933__$1 = state_57933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57933__$1,(2),inst_57915);
} else {
if((state_val_57934 === (2))){
var inst_57917 = (state_57933[(2)]);
var inst_57918 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57919 = [(100),(101)];
var inst_57920 = [new cljs.core.Keyword(null,"title","title",636505583)];
var inst_57921 = ["This is Awesome!"];
var inst_57922 = cljs.core.PersistentHashMap.fromArrays(inst_57920,inst_57921);
var inst_57923 = [new cljs.core.Keyword(null,"title","title",636505583)];
var inst_57924 = ["Really Amazing!"];
var inst_57925 = cljs.core.PersistentHashMap.fromArrays(inst_57923,inst_57924);
var inst_57926 = [inst_57922,inst_57925];
var inst_57927 = cljs.core.PersistentHashMap.fromArrays(inst_57919,inst_57926);
var inst_57928 = [id,inst_57927];
var inst_57929 = (new cljs.core.PersistentVector(null,2,(5),inst_57918,inst_57928,null));
var state_57933__$1 = (function (){var statearr_57935 = state_57933;
(statearr_57935[(7)] = inst_57917);

return statearr_57935;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57933__$1,(3),offcourse.services.api.resources_channel,inst_57929);
} else {
if((state_val_57934 === (3))){
var inst_57931 = (state_57933[(2)]);
var state_57933__$1 = state_57933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57933__$1,inst_57931);
} else {
return null;
}
}
}
});})(c__37229__auto__))
;
return ((function (switch__37208__auto__,c__37229__auto__){
return (function() {
var offcourse$services$api$fetch_resources_$_state_machine__37209__auto__ = null;
var offcourse$services$api$fetch_resources_$_state_machine__37209__auto____0 = (function (){
var statearr_57939 = [null,null,null,null,null,null,null,null];
(statearr_57939[(0)] = offcourse$services$api$fetch_resources_$_state_machine__37209__auto__);

(statearr_57939[(1)] = (1));

return statearr_57939;
});
var offcourse$services$api$fetch_resources_$_state_machine__37209__auto____1 = (function (state_57933){
while(true){
var ret_value__37210__auto__ = (function (){try{while(true){
var result__37211__auto__ = switch__37208__auto__.call(null,state_57933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37211__auto__;
}
break;
}
}catch (e57940){if((e57940 instanceof Object)){
var ex__37212__auto__ = e57940;
var statearr_57941_57943 = state_57933;
(statearr_57941_57943[(5)] = ex__37212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57944 = state_57933;
state_57933 = G__57944;
continue;
} else {
return ret_value__37210__auto__;
}
break;
}
});
offcourse$services$api$fetch_resources_$_state_machine__37209__auto__ = function(state_57933){
switch(arguments.length){
case 0:
return offcourse$services$api$fetch_resources_$_state_machine__37209__auto____0.call(this);
case 1:
return offcourse$services$api$fetch_resources_$_state_machine__37209__auto____1.call(this,state_57933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$fetch_resources_$_state_machine__37209__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$fetch_resources_$_state_machine__37209__auto____0;
offcourse$services$api$fetch_resources_$_state_machine__37209__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$fetch_resources_$_state_machine__37209__auto____1;
return offcourse$services$api$fetch_resources_$_state_machine__37209__auto__;
})()
;})(switch__37208__auto__,c__37229__auto__))
})();
var state__37231__auto__ = (function (){var statearr_57942 = f__37230__auto__.call(null);
(statearr_57942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37229__auto__);

return statearr_57942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37231__auto__);
});})(c__37229__auto__))
);

return c__37229__auto__;
});
offcourse.services.api.get_course = (function offcourse$services$api$get_course(id){
offcourse.services.api.send_course.call(null,id,new cljs.core.Keyword(null,"item","item",249373802));

return offcourse.services.api.fetch_resources.call(null,id);
});
offcourse.services.api.get_courses = (function offcourse$services$api$get_courses(keyword){
return offcourse.services.api.send_courses.call(null,keyword);
});
offcourse.services.api.toggle_done_BANG_ = (function offcourse$services$api$toggle_done_BANG_(course_id,checkpoint_id){
return offcourse.services.api.update_course_BANG_.call(null,course_id,cljs.core.partial.call(null,offcourse.models.course.toggle_done,course_id,checkpoint_id));
});
offcourse.services.api.update_goal_BANG_ = (function offcourse$services$api$update_goal_BANG_(course_id,new_goal){
return offcourse.services.api.update_course_BANG_.call(null,course_id,cljs.core.partial.call(null,offcourse.models.course.update_goal,course_id,new_goal));
});
offcourse.services.api.update_task_BANG_ = (function offcourse$services$api$update_task_BANG_(course_id,checkpoint_id,new_task){
return offcourse.services.api.update_course_BANG_.call(null,course_id,cljs.core.partial.call(null,offcourse.models.course.update_task,course_id,checkpoint_id,new_task));
});
