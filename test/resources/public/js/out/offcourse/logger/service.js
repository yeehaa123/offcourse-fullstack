// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.logger.service');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
offcourse.logger.service.log_index = cljs.core.atom.call(null,(0));
offcourse.logger.service.store_logs = (function offcourse$logger$service$store_logs(action){
var url = [cljs.core.str("https://cth-logs.firebaseio.com/"),cljs.core.str((new Date()).getTime()),cljs.core.str(".json")].join('');
var payload = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(action);
cljs.core.swap_BANG_.call(null,offcourse.logger.service.log_index,cljs.core.inc);

return ajax.core.PUT.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"collection-name","collection-name",600435477).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"ip","ip",58378915),new cljs.core.Keyword(null,"ip","ip",58378915).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839).cljs$core$IFn$_invoke$arity$1(payload)], null)], null));
});
offcourse.logger.service.listen_for_actions = (function offcourse$logger$service$listen_for_actions(p__26951){
var map__27009 = p__26951;
var map__27009__$1 = ((((!((map__27009 == null)))?((((map__27009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27009):map__27009);
var input = cljs.core.get.call(null,map__27009__$1,new cljs.core.Keyword(null,"channel-in","channel-in",-470630247));
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,map__27009,map__27009__$1,input){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,map__27009,map__27009__$1,input){
return (function (state_27041){
var state_val_27042 = (state_27041[(1)]);
if((state_val_27042 === (7))){
var inst_27029 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
if(cljs.core.truth_(inst_27029)){
var statearr_27043_27066 = state_27041__$1;
(statearr_27043_27066[(1)] = (11));

} else {
var statearr_27044_27067 = state_27041__$1;
(statearr_27044_27067[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (1))){
var state_27041__$1 = state_27041;
var statearr_27045_27068 = state_27041__$1;
(statearr_27045_27068[(2)] = null);

(statearr_27045_27068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (4))){
var inst_27014 = (state_27041[(7)]);
var inst_27014__$1 = (state_27041[(2)]);
var inst_27016 = (inst_27014__$1 == null);
var inst_27017 = cljs.core.not.call(null,inst_27016);
var state_27041__$1 = (function (){var statearr_27046 = state_27041;
(statearr_27046[(7)] = inst_27014__$1);

return statearr_27046;
})();
if(inst_27017){
var statearr_27047_27069 = state_27041__$1;
(statearr_27047_27069[(1)] = (5));

} else {
var statearr_27048_27070 = state_27041__$1;
(statearr_27048_27070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (13))){
var inst_27034 = (state_27041[(2)]);
var inst_27035 = cljs.core.get.call(null,inst_27034,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_27036 = cljs.core.println.call(null,inst_27035);
var state_27041__$1 = (function (){var statearr_27049 = state_27041;
(statearr_27049[(8)] = inst_27036);

return statearr_27049;
})();
var statearr_27050_27071 = state_27041__$1;
(statearr_27050_27071[(2)] = null);

(statearr_27050_27071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (6))){
var state_27041__$1 = state_27041;
var statearr_27051_27072 = state_27041__$1;
(statearr_27051_27072[(2)] = false);

(statearr_27051_27072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (3))){
var inst_27039 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27041__$1,inst_27039);
} else {
if((state_val_27042 === (12))){
var inst_27014 = (state_27041[(7)]);
var state_27041__$1 = state_27041;
var statearr_27052_27073 = state_27041__$1;
(statearr_27052_27073[(2)] = inst_27014);

(statearr_27052_27073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (2))){
var state_27041__$1 = state_27041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27041__$1,(4),input);
} else {
if((state_val_27042 === (11))){
var inst_27014 = (state_27041[(7)]);
var inst_27031 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27014);
var state_27041__$1 = state_27041;
var statearr_27053_27074 = state_27041__$1;
(statearr_27053_27074[(2)] = inst_27031);

(statearr_27053_27074[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (9))){
var state_27041__$1 = state_27041;
var statearr_27054_27075 = state_27041__$1;
(statearr_27054_27075[(2)] = false);

(statearr_27054_27075[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (5))){
var inst_27014 = (state_27041[(7)]);
var inst_27019 = inst_27014.cljs$lang$protocol_mask$partition0$;
var inst_27020 = (inst_27019 & (64));
var inst_27021 = inst_27014.cljs$core$ISeq$;
var inst_27022 = (inst_27020) || (inst_27021);
var state_27041__$1 = state_27041;
if(cljs.core.truth_(inst_27022)){
var statearr_27055_27076 = state_27041__$1;
(statearr_27055_27076[(1)] = (8));

} else {
var statearr_27056_27077 = state_27041__$1;
(statearr_27056_27077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (10))){
var inst_27026 = (state_27041[(2)]);
var state_27041__$1 = state_27041;
var statearr_27057_27078 = state_27041__$1;
(statearr_27057_27078[(2)] = inst_27026);

(statearr_27057_27078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27042 === (8))){
var state_27041__$1 = state_27041;
var statearr_27058_27079 = state_27041__$1;
(statearr_27058_27079[(2)] = true);

(statearr_27058_27079[(1)] = (10));


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
}
}
}
}
}
});})(c__22242__auto__,map__27009,map__27009__$1,input))
;
return ((function (switch__22177__auto__,c__22242__auto__,map__27009,map__27009__$1,input){
return (function() {
var offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto__ = null;
var offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto____0 = (function (){
var statearr_27062 = [null,null,null,null,null,null,null,null,null];
(statearr_27062[(0)] = offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto__);

(statearr_27062[(1)] = (1));

return statearr_27062;
});
var offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto____1 = (function (state_27041){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_27041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e27063){if((e27063 instanceof Object)){
var ex__22181__auto__ = e27063;
var statearr_27064_27080 = state_27041;
(statearr_27064_27080[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27081 = state_27041;
state_27041 = G__27081;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto__ = function(state_27041){
switch(arguments.length){
case 0:
return offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto____1.call(this,state_27041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto____0;
offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto____1;
return offcourse$logger$service$listen_for_actions_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,map__27009,map__27009__$1,input))
})();
var state__22244__auto__ = (function (){var statearr_27065 = f__22243__auto__.call(null);
(statearr_27065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_27065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,map__27009,map__27009__$1,input))
);

return c__22242__auto__;
});
offcourse.logger.service.init = (function offcourse$logger$service$init(config){
return offcourse.logger.service.listen_for_actions.call(null,config);
});

//# sourceMappingURL=service.js.map