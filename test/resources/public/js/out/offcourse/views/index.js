// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.index');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('quiescent.core');
goog.require('quiescent.dom');
goog.require('offcourse.views.actions');
goog.require('offcourse.views.containers.app');
offcourse.views.index.render = (function offcourse$views$index$render(handlers,appstate){
return quiescent.core.render.call(null,offcourse.views.containers.app.App.call(null,handlers,appstate),document.querySelector("#app"));
});
offcourse.views.index.listen_for_actions = (function offcourse$views$index$listen_for_actions(p__24946){
var map__25021 = p__24946;
var map__25021__$1 = ((((!((map__25021 == null)))?((((map__25021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25021):map__25021);
var input = cljs.core.get.call(null,map__25021__$1,new cljs.core.Keyword(null,"channel-in","channel-in",-470630247));
var output = cljs.core.get.call(null,map__25021__$1,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906));
var handlers = cljs.core.get.call(null,map__25021__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,map__25021,map__25021__$1,input,output,handlers){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,map__25021,map__25021__$1,input,output,handlers){
return (function (state_25062){
var state_val_25063 = (state_25062[(1)]);
if((state_val_25063 === (7))){
var inst_25041 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
if(cljs.core.truth_(inst_25041)){
var statearr_25064_25095 = state_25062__$1;
(statearr_25064_25095[(1)] = (11));

} else {
var statearr_25065_25096 = state_25062__$1;
(statearr_25065_25096[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (1))){
var state_25062__$1 = state_25062;
var statearr_25066_25097 = state_25062__$1;
(statearr_25066_25097[(2)] = null);

(statearr_25066_25097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (4))){
var inst_25026 = (state_25062[(7)]);
var inst_25026__$1 = (state_25062[(2)]);
var inst_25028 = (inst_25026__$1 == null);
var inst_25029 = cljs.core.not.call(null,inst_25028);
var state_25062__$1 = (function (){var statearr_25067 = state_25062;
(statearr_25067[(7)] = inst_25026__$1);

return statearr_25067;
})();
if(inst_25029){
var statearr_25068_25098 = state_25062__$1;
(statearr_25068_25098[(1)] = (5));

} else {
var statearr_25069_25099 = state_25062__$1;
(statearr_25069_25099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (15))){
var inst_25048 = (state_25062[(8)]);
var inst_25049 = new cljs.core.Keyword(null,"appstate","appstate",-602713426).cljs$core$IFn$_invoke$arity$1(inst_25048);
var inst_25050 = offcourse.views.index.render.call(null,handlers,inst_25049);
var state_25062__$1 = state_25062;
var statearr_25070_25100 = state_25062__$1;
(statearr_25070_25100[(2)] = inst_25050);

(statearr_25070_25100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (13))){
var inst_25046 = (state_25062[(2)]);
var inst_25047 = cljs.core.get.call(null,inst_25046,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_25048 = cljs.core.get.call(null,inst_25046,new cljs.core.Keyword(null,"payload","payload",-383036092));
var state_25062__$1 = (function (){var statearr_25071 = state_25062;
(statearr_25071[(8)] = inst_25048);

return statearr_25071;
})();
var G__25072_25101 = (((inst_25047 instanceof cljs.core.Keyword))?inst_25047.fqn:null);
switch (G__25072_25101) {
case "updated-appstate":
var statearr_25073_25103 = state_25062__$1;
(statearr_25073_25103[(1)] = (15));


break;
case "reloaded-appstate":
var statearr_25074_25104 = state_25062__$1;
(statearr_25074_25104[(1)] = (16));


break;
default:
var statearr_25075_25105 = state_25062__$1;
(statearr_25075_25105[(1)] = (17));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (6))){
var state_25062__$1 = state_25062;
var statearr_25076_25106 = state_25062__$1;
(statearr_25076_25106[(2)] = false);

(statearr_25076_25106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (17))){
var state_25062__$1 = state_25062;
var statearr_25077_25107 = state_25062__$1;
(statearr_25077_25107[(2)] = null);

(statearr_25077_25107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (3))){
var inst_25060 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25062__$1,inst_25060);
} else {
if((state_val_25063 === (12))){
var inst_25026 = (state_25062[(7)]);
var state_25062__$1 = state_25062;
var statearr_25078_25108 = state_25062__$1;
(statearr_25078_25108[(2)] = inst_25026);

(statearr_25078_25108[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (2))){
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25062__$1,(4),input);
} else {
if((state_val_25063 === (11))){
var inst_25026 = (state_25062[(7)]);
var inst_25043 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25026);
var state_25062__$1 = state_25062;
var statearr_25079_25109 = state_25062__$1;
(statearr_25079_25109[(2)] = inst_25043);

(statearr_25079_25109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (9))){
var state_25062__$1 = state_25062;
var statearr_25080_25110 = state_25062__$1;
(statearr_25080_25110[(2)] = false);

(statearr_25080_25110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (5))){
var inst_25026 = (state_25062[(7)]);
var inst_25031 = inst_25026.cljs$lang$protocol_mask$partition0$;
var inst_25032 = (inst_25031 & (64));
var inst_25033 = inst_25026.cljs$core$ISeq$;
var inst_25034 = (inst_25032) || (inst_25033);
var state_25062__$1 = state_25062;
if(cljs.core.truth_(inst_25034)){
var statearr_25081_25111 = state_25062__$1;
(statearr_25081_25111[(1)] = (8));

} else {
var statearr_25082_25112 = state_25062__$1;
(statearr_25082_25112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (14))){
var inst_25057 = (state_25062[(2)]);
var state_25062__$1 = (function (){var statearr_25083 = state_25062;
(statearr_25083[(9)] = inst_25057);

return statearr_25083;
})();
var statearr_25084_25113 = state_25062__$1;
(statearr_25084_25113[(2)] = null);

(statearr_25084_25113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (16))){
var inst_25048 = (state_25062[(8)]);
var inst_25052 = new cljs.core.Keyword(null,"appstate","appstate",-602713426).cljs$core$IFn$_invoke$arity$1(inst_25048);
var inst_25053 = offcourse.views.index.render.call(null,handlers,inst_25052);
var state_25062__$1 = state_25062;
var statearr_25085_25114 = state_25062__$1;
(statearr_25085_25114[(2)] = inst_25053);

(statearr_25085_25114[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (10))){
var inst_25038 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25086_25115 = state_25062__$1;
(statearr_25086_25115[(2)] = inst_25038);

(statearr_25086_25115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (8))){
var state_25062__$1 = state_25062;
var statearr_25087_25116 = state_25062__$1;
(statearr_25087_25116[(2)] = true);

(statearr_25087_25116[(1)] = (10));


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
}
}
}
}
});})(c__22242__auto__,map__25021,map__25021__$1,input,output,handlers))
;
return ((function (switch__22177__auto__,c__22242__auto__,map__25021,map__25021__$1,input,output,handlers){
return (function() {
var offcourse$views$index$listen_for_actions_$_state_machine__22178__auto__ = null;
var offcourse$views$index$listen_for_actions_$_state_machine__22178__auto____0 = (function (){
var statearr_25091 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25091[(0)] = offcourse$views$index$listen_for_actions_$_state_machine__22178__auto__);

(statearr_25091[(1)] = (1));

return statearr_25091;
});
var offcourse$views$index$listen_for_actions_$_state_machine__22178__auto____1 = (function (state_25062){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_25062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e25092){if((e25092 instanceof Object)){
var ex__22181__auto__ = e25092;
var statearr_25093_25117 = state_25062;
(statearr_25093_25117[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25118 = state_25062;
state_25062 = G__25118;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$views$index$listen_for_actions_$_state_machine__22178__auto__ = function(state_25062){
switch(arguments.length){
case 0:
return offcourse$views$index$listen_for_actions_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$views$index$listen_for_actions_$_state_machine__22178__auto____1.call(this,state_25062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$views$index$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$views$index$listen_for_actions_$_state_machine__22178__auto____0;
offcourse$views$index$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$views$index$listen_for_actions_$_state_machine__22178__auto____1;
return offcourse$views$index$listen_for_actions_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,map__25021,map__25021__$1,input,output,handlers))
})();
var state__22244__auto__ = (function (){var statearr_25094 = f__22243__auto__.call(null);
(statearr_25094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_25094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,map__25021,map__25021__$1,input,output,handlers))
);

return c__22242__auto__;
});
offcourse.views.index.init = (function offcourse$views$index$init(config){
var handlers = offcourse.views.actions.init.call(null,config);
var config__$1 = cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers);
return offcourse.views.index.listen_for_actions.call(null,config__$1);
});

//# sourceMappingURL=index.js.map