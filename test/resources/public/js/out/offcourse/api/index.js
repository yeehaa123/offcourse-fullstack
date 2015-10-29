// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.api.index');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('offcourse.api.service');
offcourse.api.index.listen_for_actions = (function offcourse$api$index$listen_for_actions(p__25302){
var map__25391 = p__25302;
var map__25391__$1 = ((((!((map__25391 == null)))?((((map__25391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25391):map__25391);
var input = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"channel-in","channel-in",-470630247));
var output = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906));
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,map__25391,map__25391__$1,input,output){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,map__25391,map__25391__$1,input,output){
return (function (state_25444){
var state_val_25445 = (state_25444[(1)]);
if((state_val_25445 === (7))){
var inst_25416 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25416)){
var statearr_25446_25479 = state_25444__$1;
(statearr_25446_25479[(1)] = (11));

} else {
var statearr_25447_25480 = state_25444__$1;
(statearr_25447_25480[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (20))){
var inst_25435 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25448_25481 = state_25444__$1;
(statearr_25448_25481[(2)] = inst_25435);

(statearr_25448_25481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (1))){
var state_25444__$1 = state_25444;
var statearr_25449_25482 = state_25444__$1;
(statearr_25449_25482[(2)] = null);

(statearr_25449_25482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (4))){
var inst_25401 = (state_25444[(7)]);
var inst_25400 = (state_25444[(2)]);
var inst_25401__$1 = cljs.core.nth.call(null,inst_25400,(0),null);
var inst_25403 = (inst_25401__$1 == null);
var inst_25404 = cljs.core.not.call(null,inst_25403);
var state_25444__$1 = (function (){var statearr_25450 = state_25444;
(statearr_25450[(7)] = inst_25401__$1);

return statearr_25450;
})();
if(inst_25404){
var statearr_25451_25483 = state_25444__$1;
(statearr_25451_25483[(1)] = (5));

} else {
var statearr_25452_25484 = state_25444__$1;
(statearr_25452_25484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (15))){
var inst_25423 = (state_25444[(8)]);
var inst_25425 = offcourse.api.service.find_data.call(null,inst_25423);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25444__$1,(16),output,inst_25425);
} else {
if((state_val_25445 === (21))){
var state_25444__$1 = state_25444;
var statearr_25453_25485 = state_25444__$1;
(statearr_25453_25485[(2)] = null);

(statearr_25453_25485[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (13))){
var inst_25421 = (state_25444[(2)]);
var inst_25422 = cljs.core.get.call(null,inst_25421,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_25423 = cljs.core.get.call(null,inst_25421,new cljs.core.Keyword(null,"payload","payload",-383036092));
var inst_25424 = cljs.core.println.call(null,inst_25422);
var state_25444__$1 = (function (){var statearr_25454 = state_25444;
(statearr_25454[(8)] = inst_25423);

(statearr_25454[(9)] = inst_25424);

return statearr_25454;
})();
var G__25455_25486 = (((inst_25422 instanceof cljs.core.Keyword))?inst_25422.fqn:null);
switch (G__25455_25486) {
case "not-found-data":
var statearr_25456_25488 = state_25444__$1;
(statearr_25456_25488[(1)] = (15));


break;
case "requested-data":
var statearr_25457_25489 = state_25444__$1;
(statearr_25457_25489[(1)] = (17));


break;
case "checked-datastore":
var statearr_25458_25490 = state_25444__$1;
(statearr_25458_25490[(1)] = (19));


break;
default:
var statearr_25459_25491 = state_25444__$1;
(statearr_25459_25491[(1)] = (21));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (6))){
var state_25444__$1 = state_25444;
var statearr_25460_25492 = state_25444__$1;
(statearr_25460_25492[(2)] = false);

(statearr_25460_25492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (17))){
var inst_25423 = (state_25444[(8)]);
var inst_25429 = offcourse.api.service.fetch_resource.call(null,inst_25423);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25444__$1,(18),output,inst_25429);
} else {
if((state_val_25445 === (3))){
var inst_25442 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25444__$1,inst_25442);
} else {
if((state_val_25445 === (12))){
var inst_25401 = (state_25444[(7)]);
var state_25444__$1 = state_25444;
var statearr_25461_25493 = state_25444__$1;
(statearr_25461_25493[(2)] = inst_25401);

(statearr_25461_25493[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (2))){
var inst_25396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25397 = [input,offcourse.api.service.internal];
var inst_25398 = (new cljs.core.PersistentVector(null,2,(5),inst_25396,inst_25397,null));
var state_25444__$1 = state_25444;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25444__$1,(4),inst_25398);
} else {
if((state_val_25445 === (19))){
var inst_25423 = (state_25444[(8)]);
var inst_25433 = offcourse.api.service.fetch_updates.call(null,inst_25423);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25444__$1,(20),output,inst_25433);
} else {
if((state_val_25445 === (11))){
var inst_25401 = (state_25444[(7)]);
var inst_25418 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25401);
var state_25444__$1 = state_25444;
var statearr_25462_25494 = state_25444__$1;
(statearr_25462_25494[(2)] = inst_25418);

(statearr_25462_25494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (9))){
var state_25444__$1 = state_25444;
var statearr_25463_25495 = state_25444__$1;
(statearr_25463_25495[(2)] = false);

(statearr_25463_25495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (5))){
var inst_25401 = (state_25444[(7)]);
var inst_25406 = inst_25401.cljs$lang$protocol_mask$partition0$;
var inst_25407 = (inst_25406 & (64));
var inst_25408 = inst_25401.cljs$core$ISeq$;
var inst_25409 = (inst_25407) || (inst_25408);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25409)){
var statearr_25464_25496 = state_25444__$1;
(statearr_25464_25496[(1)] = (8));

} else {
var statearr_25465_25497 = state_25444__$1;
(statearr_25465_25497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (14))){
var inst_25439 = (state_25444[(2)]);
var state_25444__$1 = (function (){var statearr_25466 = state_25444;
(statearr_25466[(10)] = inst_25439);

return statearr_25466;
})();
var statearr_25467_25498 = state_25444__$1;
(statearr_25467_25498[(2)] = null);

(statearr_25467_25498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (16))){
var inst_25427 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25468_25499 = state_25444__$1;
(statearr_25468_25499[(2)] = inst_25427);

(statearr_25468_25499[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (10))){
var inst_25413 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25469_25500 = state_25444__$1;
(statearr_25469_25500[(2)] = inst_25413);

(statearr_25469_25500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (18))){
var inst_25431 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25470_25501 = state_25444__$1;
(statearr_25470_25501[(2)] = inst_25431);

(statearr_25470_25501[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (8))){
var state_25444__$1 = state_25444;
var statearr_25471_25502 = state_25444__$1;
(statearr_25471_25502[(2)] = true);

(statearr_25471_25502[(1)] = (10));


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
}
}
}
}
});})(c__22242__auto__,map__25391,map__25391__$1,input,output))
;
return ((function (switch__22177__auto__,c__22242__auto__,map__25391,map__25391__$1,input,output){
return (function() {
var offcourse$api$index$listen_for_actions_$_state_machine__22178__auto__ = null;
var offcourse$api$index$listen_for_actions_$_state_machine__22178__auto____0 = (function (){
var statearr_25475 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25475[(0)] = offcourse$api$index$listen_for_actions_$_state_machine__22178__auto__);

(statearr_25475[(1)] = (1));

return statearr_25475;
});
var offcourse$api$index$listen_for_actions_$_state_machine__22178__auto____1 = (function (state_25444){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_25444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e25476){if((e25476 instanceof Object)){
var ex__22181__auto__ = e25476;
var statearr_25477_25503 = state_25444;
(statearr_25477_25503[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25504 = state_25444;
state_25444 = G__25504;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$api$index$listen_for_actions_$_state_machine__22178__auto__ = function(state_25444){
switch(arguments.length){
case 0:
return offcourse$api$index$listen_for_actions_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$api$index$listen_for_actions_$_state_machine__22178__auto____1.call(this,state_25444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$api$index$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$api$index$listen_for_actions_$_state_machine__22178__auto____0;
offcourse$api$index$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$api$index$listen_for_actions_$_state_machine__22178__auto____1;
return offcourse$api$index$listen_for_actions_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,map__25391,map__25391__$1,input,output))
})();
var state__22244__auto__ = (function (){var statearr_25478 = f__22243__auto__.call(null);
(statearr_25478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_25478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,map__25391,map__25391__$1,input,output))
);

return c__22242__auto__;
});
offcourse.api.index.init = (function offcourse$api$index$init(config){
return offcourse.api.index.listen_for_actions.call(null,config);
});

//# sourceMappingURL=index.js.map