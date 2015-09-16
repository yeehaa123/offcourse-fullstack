// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.services.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('offcourse.models.course');
offcourse.services.api.raw_courses = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Become a Frontend Ninja",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Install React",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Build a Component",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Create and App",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Improve your Backend Chops",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Install Node",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Set up a Route",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Add some Middleware",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Build an API",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Get More Street Cred",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Talk Dirty with Reika",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Pair with Greg",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Scheme with Charlotte",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Brawl with Yeehaa",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Make DevOps Your Thing",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Tame the Command Line",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Just Git It",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Try a PAAS",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Make Containers",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Do it All",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null)], null);
offcourse.services.api.index_course = (function offcourse$services$api$index_course(course,index){
var checkpoints = cljs.core.map_indexed.call(null,(function (p1__43023_SHARP_,p2__43022_SHARP_){
return cljs.core.assoc.call(null,p2__43022_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),p1__43023_SHARP_);
}),course.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)));
return cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"id","id",-1388402092),index,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoints);
});
offcourse.services.api.indexed_courses = (function offcourse$services$api$indexed_courses(courses){
return cljs.core.map_indexed.call(null,(function (p1__43025_SHARP_,p2__43024_SHARP_){
return offcourse.services.api.index_course.call(null,p2__43024_SHARP_,p1__43025_SHARP_);
}),courses);
});
offcourse.services.api.collection_channel = cljs.core.async.chan.call(null);
offcourse.services.api.model_channel = cljs.core.async.chan.call(null);
offcourse.services.api.courses = offcourse.services.api.indexed_courses.call(null,offcourse.services.api.raw_courses);
offcourse.services.api.get_courses = (function offcourse$services$api$get_courses(keyword){
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__){
return (function (state_43094){
var state_val_43095 = (state_43094[(1)]);
if((state_val_43095 === (1))){
var state_43094__$1 = state_43094;
var G__43096_43110 = (((keyword instanceof cljs.core.Keyword))?keyword.fqn:null);
switch (G__43096_43110) {
case "new":
var statearr_43097_43112 = state_43094__$1;
(statearr_43097_43112[(1)] = (3));


break;
case "popular":
var statearr_43098_43113 = state_43094__$1;
(statearr_43098_43113[(1)] = (5));


break;
case "featured":
var statearr_43099_43114 = state_43094__$1;
(statearr_43099_43114[(1)] = (7));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(keyword)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43095 === (2))){
var inst_43092 = (state_43094[(2)]);
var state_43094__$1 = state_43094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43094__$1,inst_43092);
} else {
if((state_val_43095 === (3))){
var inst_43068 = [new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43069 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43070 = cljs.core.first.call(null,offcourse.services.api.courses);
var inst_43071 = [inst_43070];
var inst_43072 = (new cljs.core.PersistentVector(null,1,(5),inst_43069,inst_43071,null));
var inst_43073 = [new cljs.core.Keyword(null,"new","new",-2085437848),inst_43072];
var inst_43074 = cljs.core.PersistentHashMap.fromArrays(inst_43068,inst_43073);
var state_43094__$1 = state_43094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43094__$1,(4),offcourse.services.api.collection_channel,inst_43074);
} else {
if((state_val_43095 === (4))){
var inst_43076 = (state_43094[(2)]);
var state_43094__$1 = state_43094;
var statearr_43100_43115 = state_43094__$1;
(statearr_43100_43115[(2)] = inst_43076);

(statearr_43100_43115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43095 === (5))){
var inst_43078 = [new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43079 = cljs.core.rest.call(null,offcourse.services.api.courses);
var inst_43080 = [new cljs.core.Keyword(null,"popular","popular",-752193652),inst_43079];
var inst_43081 = cljs.core.PersistentHashMap.fromArrays(inst_43078,inst_43080);
var state_43094__$1 = state_43094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43094__$1,(6),offcourse.services.api.collection_channel,inst_43081);
} else {
if((state_val_43095 === (6))){
var inst_43083 = (state_43094[(2)]);
var state_43094__$1 = state_43094;
var statearr_43101_43116 = state_43094__$1;
(statearr_43101_43116[(2)] = inst_43083);

(statearr_43101_43116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43095 === (7))){
var inst_43085 = [new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43086 = [new cljs.core.Keyword(null,"featured","featured",1584623723),offcourse.services.api.courses];
var inst_43087 = cljs.core.PersistentHashMap.fromArrays(inst_43085,inst_43086);
var state_43094__$1 = state_43094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43094__$1,(8),offcourse.services.api.collection_channel,inst_43087);
} else {
if((state_val_43095 === (8))){
var inst_43089 = (state_43094[(2)]);
var state_43094__$1 = state_43094;
var statearr_43102_43117 = state_43094__$1;
(statearr_43102_43117[(2)] = inst_43089);

(statearr_43102_43117[(1)] = (2));


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
});})(c__37657__auto__))
;
return ((function (switch__37592__auto__,c__37657__auto__){
return (function() {
var offcourse$services$api$get_courses_$_state_machine__37593__auto__ = null;
var offcourse$services$api$get_courses_$_state_machine__37593__auto____0 = (function (){
var statearr_43106 = [null,null,null,null,null,null,null];
(statearr_43106[(0)] = offcourse$services$api$get_courses_$_state_machine__37593__auto__);

(statearr_43106[(1)] = (1));

return statearr_43106;
});
var offcourse$services$api$get_courses_$_state_machine__37593__auto____1 = (function (state_43094){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_43094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e43107){if((e43107 instanceof Object)){
var ex__37596__auto__ = e43107;
var statearr_43108_43118 = state_43094;
(statearr_43108_43118[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43119 = state_43094;
state_43094 = G__43119;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$services$api$get_courses_$_state_machine__37593__auto__ = function(state_43094){
switch(arguments.length){
case 0:
return offcourse$services$api$get_courses_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$services$api$get_courses_$_state_machine__37593__auto____1.call(this,state_43094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$get_courses_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$get_courses_$_state_machine__37593__auto____0;
offcourse$services$api$get_courses_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$get_courses_$_state_machine__37593__auto____1;
return offcourse$services$api$get_courses_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__))
})();
var state__37659__auto__ = (function (){var statearr_43109 = f__37658__auto__.call(null);
(statearr_43109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_43109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__))
);

return c__37657__auto__;
});
offcourse.services.api.get_course = (function offcourse$services$api$get_course(id){
var course = offcourse.models.course.find_course.call(null,offcourse.services.api.courses,id);
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__,course){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__,course){
return (function (state_43143){
var state_val_43144 = (state_43143[(1)]);
if((state_val_43144 === (1))){
var inst_43136 = [new cljs.core.Keyword(null,"model-name","model-name",1141274783),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43137 = course.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var inst_43138 = [inst_43137,course];
var inst_43139 = cljs.core.PersistentHashMap.fromArrays(inst_43136,inst_43138);
var state_43143__$1 = state_43143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43143__$1,(2),offcourse.services.api.model_channel,inst_43139);
} else {
if((state_val_43144 === (2))){
var inst_43141 = (state_43143[(2)]);
var state_43143__$1 = state_43143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43143__$1,inst_43141);
} else {
return null;
}
}
});})(c__37657__auto__,course))
;
return ((function (switch__37592__auto__,c__37657__auto__,course){
return (function() {
var offcourse$services$api$get_course_$_state_machine__37593__auto__ = null;
var offcourse$services$api$get_course_$_state_machine__37593__auto____0 = (function (){
var statearr_43148 = [null,null,null,null,null,null,null];
(statearr_43148[(0)] = offcourse$services$api$get_course_$_state_machine__37593__auto__);

(statearr_43148[(1)] = (1));

return statearr_43148;
});
var offcourse$services$api$get_course_$_state_machine__37593__auto____1 = (function (state_43143){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_43143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e43149){if((e43149 instanceof Object)){
var ex__37596__auto__ = e43149;
var statearr_43150_43152 = state_43143;
(statearr_43150_43152[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43153 = state_43143;
state_43143 = G__43153;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$services$api$get_course_$_state_machine__37593__auto__ = function(state_43143){
switch(arguments.length){
case 0:
return offcourse$services$api$get_course_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$services$api$get_course_$_state_machine__37593__auto____1.call(this,state_43143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$get_course_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$get_course_$_state_machine__37593__auto____0;
offcourse$services$api$get_course_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$get_course_$_state_machine__37593__auto____1;
return offcourse$services$api$get_course_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__,course))
})();
var state__37659__auto__ = (function (){var statearr_43151 = f__37658__auto__.call(null);
(statearr_43151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_43151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__,course))
);

return c__37657__auto__;
});
