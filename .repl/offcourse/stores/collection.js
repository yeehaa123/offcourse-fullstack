// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.stores.collection');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('offcourse.services.api');
goog.require('cljs.core.async');
offcourse.stores.collection.collection = cljs.core.atom.call(null);
offcourse.stores.collection.channel = cljs.core.async.chan.call(null);
offcourse.stores.collection.update_collection = (function offcourse$stores$collection$update_collection(api_data){
return cljs.core.reset_BANG_.call(null,offcourse.stores.collection.collection,api_data);
});
offcourse.stores.collection.listen_for_changes = (function offcourse$stores$collection$listen_for_changes(){
var c__37548__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto__){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto__){
return (function (state_67304){
var state_val_67305 = (state_67304[(1)]);
if((state_val_67305 === (1))){
var state_67304__$1 = state_67304;
var statearr_67306_67317 = state_67304__$1;
(statearr_67306_67317[(2)] = null);

(statearr_67306_67317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67305 === (2))){
var state_67304__$1 = state_67304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67304__$1,(4),offcourse.services.api.channel);
} else {
if((state_val_67305 === (3))){
var inst_67302 = (state_67304[(2)]);
var state_67304__$1 = state_67304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67304__$1,inst_67302);
} else {
if((state_val_67305 === (4))){
var inst_67295 = (state_67304[(2)]);
var inst_67296 = offcourse.stores.collection.update_collection.call(null,inst_67295);
var inst_67297 = cljs.core.deref.call(null,offcourse.stores.collection.collection);
var state_67304__$1 = (function (){var statearr_67307 = state_67304;
(statearr_67307[(7)] = inst_67296);

return statearr_67307;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67304__$1,(5),offcourse.stores.collection.channel,inst_67297);
} else {
if((state_val_67305 === (5))){
var inst_67299 = (state_67304[(2)]);
var state_67304__$1 = (function (){var statearr_67308 = state_67304;
(statearr_67308[(8)] = inst_67299);

return statearr_67308;
})();
var statearr_67309_67318 = state_67304__$1;
(statearr_67309_67318[(2)] = null);

(statearr_67309_67318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__37548__auto__))
;
return ((function (switch__37483__auto__,c__37548__auto__){
return (function() {
var offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto__ = null;
var offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto____0 = (function (){
var statearr_67313 = [null,null,null,null,null,null,null,null,null];
(statearr_67313[(0)] = offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto__);

(statearr_67313[(1)] = (1));

return statearr_67313;
});
var offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto____1 = (function (state_67304){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_67304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e67314){if((e67314 instanceof Object)){
var ex__37487__auto__ = e67314;
var statearr_67315_67319 = state_67304;
(statearr_67315_67319[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67320 = state_67304;
state_67304 = G__67320;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto__ = function(state_67304){
switch(arguments.length){
case 0:
return offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto____0.call(this);
case 1:
return offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto____1.call(this,state_67304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto____0;
offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto____1;
return offcourse$stores$collection$listen_for_changes_$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto__))
})();
var state__37550__auto__ = (function (){var statearr_67316 = f__37549__auto__.call(null);
(statearr_67316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto__);

return statearr_67316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto__))
);

return c__37548__auto__;
});
