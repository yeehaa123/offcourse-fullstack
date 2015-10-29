// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.user.service');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('offcourse.models.action');
offcourse.user.service.user = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ip","ip",58378915),null,new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.PersistentArrayMap.EMPTY], null));
offcourse.user.service.listen_for_actions = (function offcourse$user$service$listen_for_actions(p__25932){
var map__25991 = p__25932;
var map__25991__$1 = ((((!((map__25991 == null)))?((((map__25991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25991):map__25991);
var input = cljs.core.get.call(null,map__25991__$1,new cljs.core.Keyword(null,"channel-in","channel-in",-470630247));
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,map__25991,map__25991__$1,input){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,map__25991,map__25991__$1,input){
return (function (state_26024){
var state_val_26025 = (state_26024[(1)]);
if((state_val_26025 === (7))){
var inst_26011 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_26011)){
var statearr_26026_26049 = state_26024__$1;
(statearr_26026_26049[(1)] = (11));

} else {
var statearr_26027_26050 = state_26024__$1;
(statearr_26027_26050[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (1))){
var state_26024__$1 = state_26024;
var statearr_26028_26051 = state_26024__$1;
(statearr_26028_26051[(2)] = null);

(statearr_26028_26051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (4))){
var inst_25996 = (state_26024[(7)]);
var inst_25996__$1 = (state_26024[(2)]);
var inst_25998 = (inst_25996__$1 == null);
var inst_25999 = cljs.core.not.call(null,inst_25998);
var state_26024__$1 = (function (){var statearr_26029 = state_26024;
(statearr_26029[(7)] = inst_25996__$1);

return statearr_26029;
})();
if(inst_25999){
var statearr_26030_26052 = state_26024__$1;
(statearr_26030_26052[(1)] = (5));

} else {
var statearr_26031_26053 = state_26024__$1;
(statearr_26031_26053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (13))){
var inst_26016 = (state_26024[(2)]);
var inst_26017 = cljs.core.get.call(null,inst_26016,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_26018 = cljs.core.get.call(null,inst_26016,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_26019 = cljs.core.println.call(null,inst_26018);
var state_26024__$1 = (function (){var statearr_26032 = state_26024;
(statearr_26032[(8)] = inst_26017);

(statearr_26032[(9)] = inst_26019);

return statearr_26032;
})();
var statearr_26033_26054 = state_26024__$1;
(statearr_26033_26054[(2)] = null);

(statearr_26033_26054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (6))){
var state_26024__$1 = state_26024;
var statearr_26034_26055 = state_26024__$1;
(statearr_26034_26055[(2)] = false);

(statearr_26034_26055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (3))){
var inst_26022 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26024__$1,inst_26022);
} else {
if((state_val_26025 === (12))){
var inst_25996 = (state_26024[(7)]);
var state_26024__$1 = state_26024;
var statearr_26035_26056 = state_26024__$1;
(statearr_26035_26056[(2)] = inst_25996);

(statearr_26035_26056[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (2))){
var state_26024__$1 = state_26024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26024__$1,(4),input);
} else {
if((state_val_26025 === (11))){
var inst_25996 = (state_26024[(7)]);
var inst_26013 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25996);
var state_26024__$1 = state_26024;
var statearr_26036_26057 = state_26024__$1;
(statearr_26036_26057[(2)] = inst_26013);

(statearr_26036_26057[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (9))){
var state_26024__$1 = state_26024;
var statearr_26037_26058 = state_26024__$1;
(statearr_26037_26058[(2)] = false);

(statearr_26037_26058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (5))){
var inst_25996 = (state_26024[(7)]);
var inst_26001 = inst_25996.cljs$lang$protocol_mask$partition0$;
var inst_26002 = (inst_26001 & (64));
var inst_26003 = inst_25996.cljs$core$ISeq$;
var inst_26004 = (inst_26002) || (inst_26003);
var state_26024__$1 = state_26024;
if(cljs.core.truth_(inst_26004)){
var statearr_26038_26059 = state_26024__$1;
(statearr_26038_26059[(1)] = (8));

} else {
var statearr_26039_26060 = state_26024__$1;
(statearr_26039_26060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (10))){
var inst_26008 = (state_26024[(2)]);
var state_26024__$1 = state_26024;
var statearr_26040_26061 = state_26024__$1;
(statearr_26040_26061[(2)] = inst_26008);

(statearr_26040_26061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26025 === (8))){
var state_26024__$1 = state_26024;
var statearr_26041_26062 = state_26024__$1;
(statearr_26041_26062[(2)] = true);

(statearr_26041_26062[(1)] = (10));


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
});})(c__22242__auto__,map__25991,map__25991__$1,input))
;
return ((function (switch__22177__auto__,c__22242__auto__,map__25991,map__25991__$1,input){
return (function() {
var offcourse$user$service$listen_for_actions_$_state_machine__22178__auto__ = null;
var offcourse$user$service$listen_for_actions_$_state_machine__22178__auto____0 = (function (){
var statearr_26045 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26045[(0)] = offcourse$user$service$listen_for_actions_$_state_machine__22178__auto__);

(statearr_26045[(1)] = (1));

return statearr_26045;
});
var offcourse$user$service$listen_for_actions_$_state_machine__22178__auto____1 = (function (state_26024){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_26024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e26046){if((e26046 instanceof Object)){
var ex__22181__auto__ = e26046;
var statearr_26047_26063 = state_26024;
(statearr_26047_26063[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26064 = state_26024;
state_26024 = G__26064;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$user$service$listen_for_actions_$_state_machine__22178__auto__ = function(state_26024){
switch(arguments.length){
case 0:
return offcourse$user$service$listen_for_actions_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$user$service$listen_for_actions_$_state_machine__22178__auto____1.call(this,state_26024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$user$service$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$user$service$listen_for_actions_$_state_machine__22178__auto____0;
offcourse$user$service$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$user$service$listen_for_actions_$_state_machine__22178__auto____1;
return offcourse$user$service$listen_for_actions_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,map__25991,map__25991__$1,input))
})();
var state__22244__auto__ = (function (){var statearr_26048 = f__22243__auto__.call(null);
(statearr_26048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_26048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,map__25991,map__25991__$1,input))
);

return c__22242__auto__;
});
offcourse.user.service.handle_location = (function offcourse$user$service$handle_location(channel,position){
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__){
return (function (state_26092){
var state_val_26093 = (state_26092[(1)]);
if((state_val_26093 === (1))){
var inst_26083 = [new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.Keyword(null,"latitude","latitude",394867543)];
var inst_26084 = position.coords.longitude;
var inst_26085 = position.coords.latitude;
var inst_26086 = [inst_26084,inst_26085];
var inst_26087 = cljs.core.PersistentHashMap.fromArrays(inst_26083,inst_26086);
var inst_26088 = offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"found-location","found-location",542167243),new cljs.core.Keyword(null,"location","location",1815599388),inst_26087);
var state_26092__$1 = state_26092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26092__$1,(2),channel,inst_26088);
} else {
if((state_val_26093 === (2))){
var inst_26090 = (state_26092[(2)]);
var state_26092__$1 = state_26092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26092__$1,inst_26090);
} else {
return null;
}
}
});})(c__22242__auto__))
;
return ((function (switch__22177__auto__,c__22242__auto__){
return (function() {
var offcourse$user$service$handle_location_$_state_machine__22178__auto__ = null;
var offcourse$user$service$handle_location_$_state_machine__22178__auto____0 = (function (){
var statearr_26097 = [null,null,null,null,null,null,null];
(statearr_26097[(0)] = offcourse$user$service$handle_location_$_state_machine__22178__auto__);

(statearr_26097[(1)] = (1));

return statearr_26097;
});
var offcourse$user$service$handle_location_$_state_machine__22178__auto____1 = (function (state_26092){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_26092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e26098){if((e26098 instanceof Object)){
var ex__22181__auto__ = e26098;
var statearr_26099_26101 = state_26092;
(statearr_26099_26101[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26102 = state_26092;
state_26092 = G__26102;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$user$service$handle_location_$_state_machine__22178__auto__ = function(state_26092){
switch(arguments.length){
case 0:
return offcourse$user$service$handle_location_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$user$service$handle_location_$_state_machine__22178__auto____1.call(this,state_26092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$user$service$handle_location_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$user$service$handle_location_$_state_machine__22178__auto____0;
offcourse$user$service$handle_location_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$user$service$handle_location_$_state_machine__22178__auto____1;
return offcourse$user$service$handle_location_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__))
})();
var state__22244__auto__ = (function (){var statearr_26100 = f__22243__auto__.call(null);
(statearr_26100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_26100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__))
);

return c__22242__auto__;
});
offcourse.user.service.handle_ip = (function offcourse$user$service$handle_ip(channel,response){
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__){
return (function (state_26122){
var state_val_26123 = (state_26122[(1)]);
if((state_val_26123 === (1))){
var inst_26117 = new cljs.core.Keyword(null,"ip","ip",58378915).cljs$core$IFn$_invoke$arity$1(response);
var inst_26118 = offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"found-ip","found-ip",1191998980),new cljs.core.Keyword(null,"ip","ip",58378915),inst_26117);
var state_26122__$1 = state_26122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26122__$1,(2),channel,inst_26118);
} else {
if((state_val_26123 === (2))){
var inst_26120 = (state_26122[(2)]);
var state_26122__$1 = state_26122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26122__$1,inst_26120);
} else {
return null;
}
}
});})(c__22242__auto__))
;
return ((function (switch__22177__auto__,c__22242__auto__){
return (function() {
var offcourse$user$service$handle_ip_$_state_machine__22178__auto__ = null;
var offcourse$user$service$handle_ip_$_state_machine__22178__auto____0 = (function (){
var statearr_26127 = [null,null,null,null,null,null,null];
(statearr_26127[(0)] = offcourse$user$service$handle_ip_$_state_machine__22178__auto__);

(statearr_26127[(1)] = (1));

return statearr_26127;
});
var offcourse$user$service$handle_ip_$_state_machine__22178__auto____1 = (function (state_26122){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_26122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e26128){if((e26128 instanceof Object)){
var ex__22181__auto__ = e26128;
var statearr_26129_26131 = state_26122;
(statearr_26129_26131[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26132 = state_26122;
state_26122 = G__26132;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$user$service$handle_ip_$_state_machine__22178__auto__ = function(state_26122){
switch(arguments.length){
case 0:
return offcourse$user$service$handle_ip_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$user$service$handle_ip_$_state_machine__22178__auto____1.call(this,state_26122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$user$service$handle_ip_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$user$service$handle_ip_$_state_machine__22178__auto____0;
offcourse$user$service$handle_ip_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$user$service$handle_ip_$_state_machine__22178__auto____1;
return offcourse$user$service$handle_ip_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__))
})();
var state__22244__auto__ = (function (){var statearr_26130 = f__22243__auto__.call(null);
(statearr_26130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_26130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__))
);

return c__22242__auto__;
});
offcourse.user.service.init = (function offcourse$user$service$init(p__26133){
var map__26136 = p__26133;
var map__26136__$1 = ((((!((map__26136 == null)))?((((map__26136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26136):map__26136);
var config = map__26136__$1;
var output = cljs.core.get.call(null,map__26136__$1,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906));
var handle_ip = cljs.core.partial.call(null,offcourse.user.service.handle_ip,output);
var handle_location = cljs.core.partial.call(null,offcourse.user.service.handle_location,output);
offcourse.user.service.listen_for_actions.call(null,config);

ajax.core.GET.call(null,"https://api.ipify.org?format=json",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),handle_ip], null));

return navigator.geolocation.getCurrentPosition(handle_location);
});

//# sourceMappingURL=service.js.map