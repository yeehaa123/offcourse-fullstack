// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.responder');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('offcourse.models.action');
offcourse.datastore.responder.init = (function offcourse$datastore$responder$init(channel){
offcourse.datastore.responder._respond = (function offcourse$datastore$responder$init_$__respond(var_args){
var args__20231__auto__ = [];
var len__20224__auto___57422 = arguments.length;
var i__20225__auto___57423 = (0);
while(true){
if((i__20225__auto___57423 < len__20224__auto___57422)){
args__20231__auto__.push((arguments[i__20225__auto___57423]));

var G__57424 = (i__20225__auto___57423 + (1));
i__20225__auto___57423 = G__57424;
continue;
} else {
}
break;
}

var argseq__20232__auto__ = ((((0) < args__20231__auto__.length))?(new cljs.core.IndexedSeq(args__20231__auto__.slice((0)),(0))):null);
return offcourse.datastore.responder._respond.cljs$core$IFn$_invoke$arity$variadic(argseq__20232__auto__);
});

offcourse.datastore.responder._respond.cljs$core$IFn$_invoke$arity$variadic = (function (response){
var c__22246__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22246__auto__){
return (function (){
var f__22247__auto__ = (function (){var switch__22181__auto__ = ((function (c__22246__auto__){
return (function (state_57413){
var state_val_57414 = (state_57413[(1)]);
if((state_val_57414 === (1))){
var inst_57409 = cljs.core.apply.call(null,offcourse.models.action.respond,response);
var state_57413__$1 = state_57413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57413__$1,(2),channel,inst_57409);
} else {
if((state_val_57414 === (2))){
var inst_57411 = (state_57413[(2)]);
var state_57413__$1 = state_57413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57413__$1,inst_57411);
} else {
return null;
}
}
});})(c__22246__auto__))
;
return ((function (switch__22181__auto__,c__22246__auto__){
return (function() {
var offcourse$datastore$responder$init_$_state_machine__22182__auto__ = null;
var offcourse$datastore$responder$init_$_state_machine__22182__auto____0 = (function (){
var statearr_57418 = [null,null,null,null,null,null,null];
(statearr_57418[(0)] = offcourse$datastore$responder$init_$_state_machine__22182__auto__);

(statearr_57418[(1)] = (1));

return statearr_57418;
});
var offcourse$datastore$responder$init_$_state_machine__22182__auto____1 = (function (state_57413){
while(true){
var ret_value__22183__auto__ = (function (){try{while(true){
var result__22184__auto__ = switch__22181__auto__.call(null,state_57413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22184__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22184__auto__;
}
break;
}
}catch (e57419){if((e57419 instanceof Object)){
var ex__22185__auto__ = e57419;
var statearr_57420_57425 = state_57413;
(statearr_57420_57425[(5)] = ex__22185__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22183__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57426 = state_57413;
state_57413 = G__57426;
continue;
} else {
return ret_value__22183__auto__;
}
break;
}
});
offcourse$datastore$responder$init_$_state_machine__22182__auto__ = function(state_57413){
switch(arguments.length){
case 0:
return offcourse$datastore$responder$init_$_state_machine__22182__auto____0.call(this);
case 1:
return offcourse$datastore$responder$init_$_state_machine__22182__auto____1.call(this,state_57413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$datastore$responder$init_$_state_machine__22182__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$datastore$responder$init_$_state_machine__22182__auto____0;
offcourse$datastore$responder$init_$_state_machine__22182__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$datastore$responder$init_$_state_machine__22182__auto____1;
return offcourse$datastore$responder$init_$_state_machine__22182__auto__;
})()
;})(switch__22181__auto__,c__22246__auto__))
})();
var state__22248__auto__ = (function (){var statearr_57421 = f__22247__auto__.call(null);
(statearr_57421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22246__auto__);

return statearr_57421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22248__auto__);
});})(c__22246__auto__))
);

return c__22246__auto__;
});

offcourse.datastore.responder._respond.cljs$lang$maxFixedArity = (0);

offcourse.datastore.responder._respond.cljs$lang$applyTo = (function (seq57408){
return offcourse.datastore.responder._respond.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57408));
});

offcourse.datastore.responder.respond_updated = (function offcourse$datastore$responder$init_$_respond_updated(store){
return offcourse.datastore.responder._respond.call(null,new cljs.core.Keyword(null,"updated-data","updated-data",-1759098368),new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.deref.call(null,store));
});

offcourse.datastore.responder.respond_added = (function offcourse$datastore$responder$init_$_respond_added(store,course_id){
return offcourse.datastore.responder._respond.call(null,new cljs.core.Keyword(null,"added-checkpoint","added-checkpoint",-1192635317),new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.deref.call(null,store));
});
});
