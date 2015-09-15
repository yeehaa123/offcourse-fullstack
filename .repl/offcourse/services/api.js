// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.services.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('offcourse.models.course');
offcourse.services.api.raw_courses = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Become a Frontend Ninja",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Install React",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Build a Component",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Create and App",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Improve your Backend Chops",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Install Node",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Set up a Route",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Add some Middleware",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Build an API",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Acquire Street Cred for Bla",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Install Node",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Set up a Route",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Add some Middleware",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Build an API",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Make DevOps Your Thing",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Tame the Command Line",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Just Git It",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Try a PAAS",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Make Containers",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Do it All",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null)], null);
offcourse.services.api.index_course = (function offcourse$services$api$index_course(course,index){
var checkpoints = cljs.core.map_indexed.call(null,(function (p1__67324_SHARP_,p2__67323_SHARP_){
return cljs.core.assoc.call(null,p2__67323_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),p1__67324_SHARP_);
}),course.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)));
return cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"id","id",-1388402092),index,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoints);
});
offcourse.services.api.indexed_courses = (function offcourse$services$api$indexed_courses(courses){
return cljs.core.map_indexed.call(null,(function (p1__67326_SHARP_,p2__67325_SHARP_){
return offcourse.services.api.index_course.call(null,p2__67325_SHARP_,p1__67326_SHARP_);
}),courses);
});
offcourse.services.api.channel = cljs.core.async.chan.call(null);
offcourse.services.api.courses = offcourse.services.api.indexed_courses.call(null,offcourse.services.api.raw_courses);
offcourse.services.api.get_courses = (function offcourse$services$api$get_courses(keyword){
var c__37548__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto__){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto__){
return (function (state_67377){
var state_val_67378 = (state_67377[(1)]);
if((state_val_67378 === (1))){
var state_67377__$1 = state_67377;
var G__67379_67393 = (((keyword instanceof cljs.core.Keyword))?keyword.fqn:null);
switch (G__67379_67393) {
case "new":
var statearr_67380_67395 = state_67377__$1;
(statearr_67380_67395[(1)] = (3));


break;
case "popular":
var statearr_67381_67396 = state_67377__$1;
(statearr_67381_67396[(1)] = (5));


break;
case "featured":
var statearr_67382_67397 = state_67377__$1;
(statearr_67382_67397[(1)] = (7));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(keyword)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (2))){
var inst_67375 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67377__$1,inst_67375);
} else {
if((state_val_67378 === (3))){
var inst_67360 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67361 = cljs.core.first.call(null,offcourse.services.api.courses);
var inst_67362 = [inst_67361];
var inst_67363 = (new cljs.core.PersistentVector(null,1,(5),inst_67360,inst_67362,null));
var state_67377__$1 = state_67377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67377__$1,(4),offcourse.services.api.channel,inst_67363);
} else {
if((state_val_67378 === (4))){
var inst_67365 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
var statearr_67383_67398 = state_67377__$1;
(statearr_67383_67398[(2)] = inst_67365);

(statearr_67383_67398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (5))){
var inst_67367 = cljs.core.rest.call(null,offcourse.services.api.courses);
var state_67377__$1 = state_67377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67377__$1,(6),offcourse.services.api.channel,inst_67367);
} else {
if((state_val_67378 === (6))){
var inst_67369 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
var statearr_67384_67399 = state_67377__$1;
(statearr_67384_67399[(2)] = inst_67369);

(statearr_67384_67399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67378 === (7))){
var state_67377__$1 = state_67377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67377__$1,(8),offcourse.services.api.channel,offcourse.services.api.courses);
} else {
if((state_val_67378 === (8))){
var inst_67372 = (state_67377[(2)]);
var state_67377__$1 = state_67377;
var statearr_67385_67400 = state_67377__$1;
(statearr_67385_67400[(2)] = inst_67372);

(statearr_67385_67400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__37548__auto__))
;
return ((function (switch__37483__auto__,c__37548__auto__){
return (function() {
var offcourse$services$api$get_courses_$_state_machine__37484__auto__ = null;
var offcourse$services$api$get_courses_$_state_machine__37484__auto____0 = (function (){
var statearr_67389 = [null,null,null,null,null,null,null];
(statearr_67389[(0)] = offcourse$services$api$get_courses_$_state_machine__37484__auto__);

(statearr_67389[(1)] = (1));

return statearr_67389;
});
var offcourse$services$api$get_courses_$_state_machine__37484__auto____1 = (function (state_67377){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_67377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e67390){if((e67390 instanceof Object)){
var ex__37487__auto__ = e67390;
var statearr_67391_67401 = state_67377;
(statearr_67391_67401[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67402 = state_67377;
state_67377 = G__67402;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
offcourse$services$api$get_courses_$_state_machine__37484__auto__ = function(state_67377){
switch(arguments.length){
case 0:
return offcourse$services$api$get_courses_$_state_machine__37484__auto____0.call(this);
case 1:
return offcourse$services$api$get_courses_$_state_machine__37484__auto____1.call(this,state_67377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$get_courses_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$get_courses_$_state_machine__37484__auto____0;
offcourse$services$api$get_courses_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$get_courses_$_state_machine__37484__auto____1;
return offcourse$services$api$get_courses_$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto__))
})();
var state__37550__auto__ = (function (){var statearr_67392 = f__37549__auto__.call(null);
(statearr_67392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto__);

return statearr_67392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto__))
);

return c__37548__auto__;
});
offcourse.services.api.get_course = (function offcourse$services$api$get_course(id){
var c__37548__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto__){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto__){
return (function (state_67426){
var state_val_67427 = (state_67426[(1)]);
if((state_val_67427 === (1))){
var inst_67419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67420 = course.find.call(null,offcourse.services.api.courses,id);
var inst_67421 = [inst_67420];
var inst_67422 = (new cljs.core.PersistentVector(null,1,(5),inst_67419,inst_67421,null));
var state_67426__$1 = state_67426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67426__$1,(2),offcourse.services.api.channel,inst_67422);
} else {
if((state_val_67427 === (2))){
var inst_67424 = (state_67426[(2)]);
var state_67426__$1 = state_67426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67426__$1,inst_67424);
} else {
return null;
}
}
});})(c__37548__auto__))
;
return ((function (switch__37483__auto__,c__37548__auto__){
return (function() {
var offcourse$services$api$get_course_$_state_machine__37484__auto__ = null;
var offcourse$services$api$get_course_$_state_machine__37484__auto____0 = (function (){
var statearr_67431 = [null,null,null,null,null,null,null];
(statearr_67431[(0)] = offcourse$services$api$get_course_$_state_machine__37484__auto__);

(statearr_67431[(1)] = (1));

return statearr_67431;
});
var offcourse$services$api$get_course_$_state_machine__37484__auto____1 = (function (state_67426){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_67426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e67432){if((e67432 instanceof Object)){
var ex__37487__auto__ = e67432;
var statearr_67433_67435 = state_67426;
(statearr_67433_67435[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67436 = state_67426;
state_67426 = G__67436;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
offcourse$services$api$get_course_$_state_machine__37484__auto__ = function(state_67426){
switch(arguments.length){
case 0:
return offcourse$services$api$get_course_$_state_machine__37484__auto____0.call(this);
case 1:
return offcourse$services$api$get_course_$_state_machine__37484__auto____1.call(this,state_67426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$get_course_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$get_course_$_state_machine__37484__auto____0;
offcourse$services$api$get_course_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$get_course_$_state_machine__37484__auto____1;
return offcourse$services$api$get_course_$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto__))
})();
var state__37550__auto__ = (function (){var statearr_67434 = f__37549__auto__.call(null);
(statearr_67434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto__);

return statearr_67434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto__))
);

return c__37548__auto__;
});
