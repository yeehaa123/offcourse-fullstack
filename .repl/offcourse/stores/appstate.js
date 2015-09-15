// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.stores.appstate');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('offcourse.stores.collection');
offcourse.stores.appstate.listen_for_changes = (function offcourse$stores$appstate$listen_for_changes(){
var c__37548__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto__){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto__){
return (function (state_67251){
var state_val_67252 = (state_67251[(1)]);
if((state_val_67252 === (1))){
var state_67251__$1 = state_67251;
var statearr_67253_67263 = state_67251__$1;
(statearr_67253_67263[(2)] = null);

(statearr_67253_67263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67252 === (2))){
var state_67251__$1 = state_67251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67251__$1,(4),offcourse.stores.collection.channel);
} else {
if((state_val_67252 === (3))){
var inst_67249 = (state_67251[(2)]);
var state_67251__$1 = state_67251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67251__$1,inst_67249);
} else {
if((state_val_67252 === (4))){
var inst_67245 = (state_67251[(2)]);
var inst_67246 = reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),inst_67245);
var state_67251__$1 = (function (){var statearr_67254 = state_67251;
(statearr_67254[(7)] = inst_67246);

return statearr_67254;
})();
var statearr_67255_67264 = state_67251__$1;
(statearr_67255_67264[(2)] = null);

(statearr_67255_67264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__37548__auto__))
;
return ((function (switch__37483__auto__,c__37548__auto__){
return (function() {
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto__ = null;
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto____0 = (function (){
var statearr_67259 = [null,null,null,null,null,null,null,null];
(statearr_67259[(0)] = offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto__);

(statearr_67259[(1)] = (1));

return statearr_67259;
});
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto____1 = (function (state_67251){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_67251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e67260){if((e67260 instanceof Object)){
var ex__37487__auto__ = e67260;
var statearr_67261_67265 = state_67251;
(statearr_67261_67265[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67266 = state_67251;
state_67251 = G__67266;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto__ = function(state_67251){
switch(arguments.length){
case 0:
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto____0.call(this);
case 1:
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto____1.call(this,state_67251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto____0;
offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto____1;
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto__))
})();
var state__37550__auto__ = (function (){var statearr_67262 = f__37549__auto__.call(null);
(statearr_67262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto__);

return statearr_67262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto__))
);

return c__37548__auto__;
});
offcourse.stores.appstate.initialize_listeners = (function offcourse$stores$appstate$initialize_listeners(){
offcourse.stores.collection.listen_for_changes.call(null);

return offcourse.stores.appstate.listen_for_changes.call(null);
});
offcourse.stores.appstate.set_mode_BANG_ = (function offcourse$stores$appstate$set_mode_BANG_(mode){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691),mode);
});
offcourse.stores.appstate.set_course_collections_BANG_ = (function offcourse$stores$appstate$set_course_collections_BANG_(collections){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"course-collections","course-collections",753072947),collections);
});
offcourse.stores.appstate.toggle_mode_BANG_ = (function offcourse$stores$appstate$toggle_mode_BANG_(){
var current_mode = reagent.session.get.call(null,new cljs.core.Keyword(null,"mode","mode",654403691));
if(cljs.core._EQ_.call(null,current_mode,new cljs.core.Keyword(null,"learn","learn",307520095))){
return offcourse.stores.appstate.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"curate","curate",976755582));
} else {
return offcourse.stores.appstate.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"learn","learn",307520095));
}
});
offcourse.stores.appstate.init = (function offcourse$stores$appstate$init(){
offcourse.stores.appstate.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"learn","learn",307520095));

offcourse.stores.appstate.set_course_collections_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"featured","featured",1584623723),new cljs.core.Keyword(null,"popular","popular",-752193652),new cljs.core.Keyword(null,"new","new",-2085437848)], null));

return offcourse.stores.appstate.initialize_listeners.call(null);
});
