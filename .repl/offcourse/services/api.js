// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.services.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('offcourse.models.course');
goog.require('offcourse.models.checkpoint');
offcourse.services.api.raw_courses = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Become a Frontend Ninja",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Install React",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Build a Component",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Create and App",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Improve your Backend Chops",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Install Node",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Set up a Route",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Add some Middleware",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Build an API",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Get More Street Cred",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Talk Dirty with Reika",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Pair with Greg",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Scheme with Charlotte",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Brawl with Yeehaa",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"goal","goal",-2073396501),"Make DevOps Your Thing",new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Tame the Command Line",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Just Git It",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Try a PAAS",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Make Containers",new cljs.core.Keyword(null,"completed","completed",-486056503),false,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"task","task",-1476607993),"Do it All",new cljs.core.Keyword(null,"completed","completed",-486056503),true,new cljs.core.Keyword(null,"url","url",276297046),"http://facebook.com"], null)], null)], null)], null);
offcourse.services.api.index_course = (function offcourse$services$api$index_course(course,index){
var checkpoints = cljs.core.map_indexed.call(null,(function (p1__43342_SHARP_,p2__43341_SHARP_){
return cljs.core.assoc.call(null,p2__43341_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),(p1__43342_SHARP_ + (100)));
}),course.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)));
return cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"id","id",-1388402092),index,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoints);
});
offcourse.services.api.indexed_courses = (function offcourse$services$api$indexed_courses(courses){
return cljs.core.map_indexed.call(null,(function (p1__43344_SHARP_,p2__43343_SHARP_){
return offcourse.services.api.index_course.call(null,p2__43343_SHARP_,p1__43344_SHARP_);
}),courses);
});
offcourse.services.api.channel = cljs.core.async.chan.call(null);
offcourse.services.api.courses_store = cljs.core.atom.call(null,offcourse.services.api.indexed_courses.call(null,offcourse.services.api.raw_courses));
offcourse.services.api.construct_response = (function offcourse$services$api$construct_response(keyword){
var response = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"name","name",1843675177),keyword], null);
var G__43346 = (((keyword instanceof cljs.core.Keyword))?keyword.fqn:null);
switch (G__43346) {
case "new":
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"data","data",-232669377),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first.call(null,cljs.core.deref.call(null,offcourse.services.api.courses_store))],null)));

break;
case "popular":
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.rest.call(null,cljs.core.deref.call(null,offcourse.services.api.courses_store)));

break;
case "featured":
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.deref.call(null,offcourse.services.api.courses_store));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(keyword)].join('')));

}
});
offcourse.services.api.get_courses = (function offcourse$services$api$get_courses(keyword){
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__){
return (function (state_43365){
var state_val_43366 = (state_43365[(1)]);
if((state_val_43366 === (1))){
var inst_43361 = offcourse.services.api.construct_response.call(null,keyword);
var state_43365__$1 = state_43365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43365__$1,(2),offcourse.services.api.channel,inst_43361);
} else {
if((state_val_43366 === (2))){
var inst_43363 = (state_43365[(2)]);
var state_43365__$1 = state_43365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43365__$1,inst_43363);
} else {
return null;
}
}
});})(c__37657__auto__))
;
return ((function (switch__37592__auto__,c__37657__auto__){
return (function() {
var offcourse$services$api$get_courses_$_state_machine__37593__auto__ = null;
var offcourse$services$api$get_courses_$_state_machine__37593__auto____0 = (function (){
var statearr_43370 = [null,null,null,null,null,null,null];
(statearr_43370[(0)] = offcourse$services$api$get_courses_$_state_machine__37593__auto__);

(statearr_43370[(1)] = (1));

return statearr_43370;
});
var offcourse$services$api$get_courses_$_state_machine__37593__auto____1 = (function (state_43365){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_43365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e43371){if((e43371 instanceof Object)){
var ex__37596__auto__ = e43371;
var statearr_43372_43374 = state_43365;
(statearr_43372_43374[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43375 = state_43365;
state_43365 = G__43375;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$services$api$get_courses_$_state_machine__37593__auto__ = function(state_43365){
switch(arguments.length){
case 0:
return offcourse$services$api$get_courses_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$services$api$get_courses_$_state_machine__37593__auto____1.call(this,state_43365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$get_courses_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$get_courses_$_state_machine__37593__auto____0;
offcourse$services$api$get_courses_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$get_courses_$_state_machine__37593__auto____1;
return offcourse$services$api$get_courses_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__))
})();
var state__37659__auto__ = (function (){var statearr_43373 = f__37658__auto__.call(null);
(statearr_43373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_43373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__))
);

return c__37657__auto__;
});
offcourse.services.api.get_course = (function offcourse$services$api$get_course(id){
var course = offcourse.models.course.find_course.call(null,cljs.core.deref.call(null,offcourse.services.api.courses_store),id);
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__,course){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__,course){
return (function (state_43399){
var state_val_43400 = (state_43399[(1)]);
if((state_val_43400 === (1))){
var inst_43392 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43393 = course.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var inst_43394 = [new cljs.core.Keyword(null,"item","item",249373802),inst_43393,course];
var inst_43395 = cljs.core.PersistentHashMap.fromArrays(inst_43392,inst_43394);
var state_43399__$1 = state_43399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43399__$1,(2),offcourse.services.api.channel,inst_43395);
} else {
if((state_val_43400 === (2))){
var inst_43397 = (state_43399[(2)]);
var state_43399__$1 = state_43399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43399__$1,inst_43397);
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
var statearr_43404 = [null,null,null,null,null,null,null];
(statearr_43404[(0)] = offcourse$services$api$get_course_$_state_machine__37593__auto__);

(statearr_43404[(1)] = (1));

return statearr_43404;
});
var offcourse$services$api$get_course_$_state_machine__37593__auto____1 = (function (state_43399){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_43399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e43405){if((e43405 instanceof Object)){
var ex__37596__auto__ = e43405;
var statearr_43406_43408 = state_43399;
(statearr_43406_43408[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43409 = state_43399;
state_43399 = G__43409;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$services$api$get_course_$_state_machine__37593__auto__ = function(state_43399){
switch(arguments.length){
case 0:
return offcourse$services$api$get_course_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$services$api$get_course_$_state_machine__37593__auto____1.call(this,state_43399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$get_course_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$get_course_$_state_machine__37593__auto____0;
offcourse$services$api$get_course_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$get_course_$_state_machine__37593__auto____1;
return offcourse$services$api$get_course_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__,course))
})();
var state__37659__auto__ = (function (){var statearr_43407 = f__37658__auto__.call(null);
(statearr_43407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_43407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__,course))
);

return c__37657__auto__;
});
offcourse.services.api.check_done = (function offcourse$services$api$check_done(course_id,checkpoint_id){
var course = offcourse.models.course.find_course.call(null,cljs.core.deref.call(null,offcourse.services.api.courses_store),course_id);
var checkpoint = offcourse.models.checkpoint.toggle_done.call(null,course.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)),checkpoint_id);
var checkpoints = offcourse.models.checkpoint.update_checkpoints.call(null,course.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)),checkpoint);
var course__$1 = offcourse.models.course.update_checkpoints.call(null,course,checkpoints);
cljs.core.swap_BANG_.call(null,offcourse.services.api.courses_store,offcourse.models.course.update_course,course__$1);

var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__,course,checkpoint,checkpoints,course__$1){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__,course,checkpoint,checkpoints,course__$1){
return (function (state_43433){
var state_val_43434 = (state_43433[(1)]);
if((state_val_43434 === (1))){
var inst_43426 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43427 = course__$1.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var inst_43428 = [new cljs.core.Keyword(null,"update","update",1045576396),inst_43427,course__$1];
var inst_43429 = cljs.core.PersistentHashMap.fromArrays(inst_43426,inst_43428);
var state_43433__$1 = state_43433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43433__$1,(2),offcourse.services.api.channel,inst_43429);
} else {
if((state_val_43434 === (2))){
var inst_43431 = (state_43433[(2)]);
var state_43433__$1 = state_43433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43433__$1,inst_43431);
} else {
return null;
}
}
});})(c__37657__auto__,course,checkpoint,checkpoints,course__$1))
;
return ((function (switch__37592__auto__,c__37657__auto__,course,checkpoint,checkpoints,course__$1){
return (function() {
var offcourse$services$api$check_done_$_state_machine__37593__auto__ = null;
var offcourse$services$api$check_done_$_state_machine__37593__auto____0 = (function (){
var statearr_43438 = [null,null,null,null,null,null,null];
(statearr_43438[(0)] = offcourse$services$api$check_done_$_state_machine__37593__auto__);

(statearr_43438[(1)] = (1));

return statearr_43438;
});
var offcourse$services$api$check_done_$_state_machine__37593__auto____1 = (function (state_43433){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_43433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e43439){if((e43439 instanceof Object)){
var ex__37596__auto__ = e43439;
var statearr_43440_43442 = state_43433;
(statearr_43440_43442[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43443 = state_43433;
state_43433 = G__43443;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$services$api$check_done_$_state_machine__37593__auto__ = function(state_43433){
switch(arguments.length){
case 0:
return offcourse$services$api$check_done_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$services$api$check_done_$_state_machine__37593__auto____1.call(this,state_43433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$services$api$check_done_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$services$api$check_done_$_state_machine__37593__auto____0;
offcourse$services$api$check_done_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$services$api$check_done_$_state_machine__37593__auto____1;
return offcourse$services$api$check_done_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__,course,checkpoint,checkpoints,course__$1))
})();
var state__37659__auto__ = (function (){var statearr_43441 = f__37658__auto__.call(null);
(statearr_43441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_43441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__,course,checkpoint,checkpoints,course__$1))
);

return c__37657__auto__;
});
