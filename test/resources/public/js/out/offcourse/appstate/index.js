// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.index');
goog.require('cljs.core');
goog.require('offcourse.appstate.store');
goog.require('offcourse.appstate.service');
goog.require('cljs.core.async');
offcourse.appstate.index.listen_for_actions = (function offcourse$appstate$index$listen_for_actions(p__26277){
var map__26406 = p__26277;
var map__26406__$1 = ((((!((map__26406 == null)))?((((map__26406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26406):map__26406);
var input = cljs.core.get.call(null,map__26406__$1,new cljs.core.Keyword(null,"channel-in","channel-in",-470630247));
var output = cljs.core.get.call(null,map__26406__$1,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906));
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,map__26406,map__26406__$1,input,output){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,map__26406,map__26406__$1,input,output){
return (function (state_26482){
var state_val_26483 = (state_26482[(1)]);
if((state_val_26483 === (7))){
var inst_26426 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
if(cljs.core.truth_(inst_26426)){
var statearr_26484_26534 = state_26482__$1;
(statearr_26484_26534[(1)] = (11));

} else {
var statearr_26485_26535 = state_26482__$1;
(statearr_26485_26535[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (20))){
var inst_26445 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26486_26536 = state_26482__$1;
(statearr_26486_26536[(2)] = inst_26445);

(statearr_26486_26536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (27))){
var inst_26433 = (state_26482[(7)]);
var inst_26459 = offcourse.appstate.store.refresh.call(null,inst_26433);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(28),output,inst_26459);
} else {
if((state_val_26483 === (1))){
var state_26482__$1 = state_26482;
var statearr_26487_26537 = state_26482__$1;
(statearr_26487_26537[(2)] = null);

(statearr_26487_26537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (24))){
var inst_26453 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26488_26538 = state_26482__$1;
(statearr_26488_26538[(2)] = inst_26453);

(statearr_26488_26538[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (4))){
var inst_26411 = (state_26482[(8)]);
var inst_26411__$1 = (state_26482[(2)]);
var inst_26413 = (inst_26411__$1 == null);
var inst_26414 = cljs.core.not.call(null,inst_26413);
var state_26482__$1 = (function (){var statearr_26489 = state_26482;
(statearr_26489[(8)] = inst_26411__$1);

return statearr_26489;
})();
if(inst_26414){
var statearr_26490_26539 = state_26482__$1;
(statearr_26490_26539[(1)] = (5));

} else {
var statearr_26491_26540 = state_26482__$1;
(statearr_26491_26540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (15))){
var inst_26433 = (state_26482[(7)]);
var inst_26434 = offcourse.appstate.service.get_data.call(null,inst_26433);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(16),output,inst_26434);
} else {
if((state_val_26483 === (21))){
var inst_26433 = (state_26482[(7)]);
var inst_26447 = offcourse.appstate.service.toggle_done.call(null,inst_26433);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(22),output,inst_26447);
} else {
if((state_val_26483 === (31))){
var inst_26433 = (state_26482[(7)]);
var inst_26467 = offcourse.appstate.service.return_to_course.call(null,inst_26433);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(32),output,inst_26467);
} else {
if((state_val_26483 === (32))){
var inst_26469 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26492_26541 = state_26482__$1;
(statearr_26492_26541[(2)] = inst_26469);

(statearr_26492_26541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (33))){
var inst_26471 = offcourse.appstate.store.force_refresh.call(null);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(34),output,inst_26471);
} else {
if((state_val_26483 === (13))){
var inst_26431 = (state_26482[(2)]);
var inst_26432 = cljs.core.get.call(null,inst_26431,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_26433 = cljs.core.get.call(null,inst_26431,new cljs.core.Keyword(null,"payload","payload",-383036092));
var state_26482__$1 = (function (){var statearr_26493 = state_26482;
(statearr_26493[(7)] = inst_26433);

return statearr_26493;
})();
var G__26494_26542 = (((inst_26432 instanceof cljs.core.Keyword))?inst_26432.fqn:null);
switch (G__26494_26542) {
case "updated-data":
var statearr_26495_26544 = state_26482__$1;
(statearr_26495_26544[(1)] = (27));


break;
case "checked-datastore":
var statearr_26496_26545 = state_26482__$1;
(statearr_26496_26545[(1)] = (29));


break;
case "requested-mode-switch":
var statearr_26497_26546 = state_26482__$1;
(statearr_26497_26546[(1)] = (26));


break;
case "requested-commit":
var statearr_26498_26547 = state_26482__$1;
(statearr_26498_26547[(1)] = (17));


break;
case "requested-resource":
var statearr_26499_26548 = state_26482__$1;
(statearr_26499_26548[(1)] = (15));


break;
case "requested-done-toggle":
var statearr_26500_26549 = state_26482__$1;
(statearr_26500_26549[(1)] = (21));


break;
case "added-checkpoint":
var statearr_26501_26550 = state_26482__$1;
(statearr_26501_26550[(1)] = (31));


break;
case "requested-level":
var statearr_26502_26551 = state_26482__$1;
(statearr_26502_26551[(1)] = (19));


break;
case "requested-highlight-toggle":
var statearr_26503_26552 = state_26482__$1;
(statearr_26503_26552[(1)] = (23));


break;
case "requested-mode-toggle":
var statearr_26504_26553 = state_26482__$1;
(statearr_26504_26553[(1)] = (25));


break;
case "reloaded-code":
var statearr_26505_26554 = state_26482__$1;
(statearr_26505_26554[(1)] = (33));


break;
default:
var statearr_26506_26555 = state_26482__$1;
(statearr_26506_26555[(1)] = (35));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (22))){
var inst_26449 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26507_26556 = state_26482__$1;
(statearr_26507_26556[(2)] = inst_26449);

(statearr_26507_26556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (29))){
var inst_26433 = (state_26482[(7)]);
var inst_26463 = offcourse.appstate.store.refresh.call(null,inst_26433);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(30),output,inst_26463);
} else {
if((state_val_26483 === (6))){
var state_26482__$1 = state_26482;
var statearr_26508_26557 = state_26482__$1;
(statearr_26508_26557[(2)] = false);

(statearr_26508_26557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (28))){
var inst_26461 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26509_26558 = state_26482__$1;
(statearr_26509_26558[(2)] = inst_26461);

(statearr_26509_26558[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (25))){
var inst_26455 = offcourse.appstate.store.toggle_mode.call(null);
var state_26482__$1 = state_26482;
var statearr_26510_26559 = state_26482__$1;
(statearr_26510_26559[(2)] = inst_26455);

(statearr_26510_26559[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (34))){
var inst_26473 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26511_26560 = state_26482__$1;
(statearr_26511_26560[(2)] = inst_26473);

(statearr_26511_26560[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (17))){
var inst_26433 = (state_26482[(7)]);
var inst_26439 = offcourse.appstate.store.commit_data.call(null,inst_26433);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(18),output,inst_26439);
} else {
if((state_val_26483 === (3))){
var inst_26480 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26482__$1,inst_26480);
} else {
if((state_val_26483 === (12))){
var inst_26411 = (state_26482[(8)]);
var state_26482__$1 = state_26482;
var statearr_26512_26561 = state_26482__$1;
(statearr_26512_26561[(2)] = inst_26411);

(statearr_26512_26561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (2))){
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26482__$1,(4),input);
} else {
if((state_val_26483 === (23))){
var inst_26433 = (state_26482[(7)]);
var inst_26451 = offcourse.appstate.store.toggle_highlight.call(null,inst_26433);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(24),output,inst_26451);
} else {
if((state_val_26483 === (35))){
var state_26482__$1 = state_26482;
var statearr_26513_26562 = state_26482__$1;
(statearr_26513_26562[(2)] = null);

(statearr_26513_26562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (19))){
var inst_26433 = (state_26482[(7)]);
var inst_26443 = offcourse.appstate.service.switch_route.call(null,inst_26433);
var state_26482__$1 = state_26482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26482__$1,(20),output,inst_26443);
} else {
if((state_val_26483 === (11))){
var inst_26411 = (state_26482[(8)]);
var inst_26428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26411);
var state_26482__$1 = state_26482;
var statearr_26514_26563 = state_26482__$1;
(statearr_26514_26563[(2)] = inst_26428);

(statearr_26514_26563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (9))){
var state_26482__$1 = state_26482;
var statearr_26515_26564 = state_26482__$1;
(statearr_26515_26564[(2)] = false);

(statearr_26515_26564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (5))){
var inst_26411 = (state_26482[(8)]);
var inst_26416 = inst_26411.cljs$lang$protocol_mask$partition0$;
var inst_26417 = (inst_26416 & (64));
var inst_26418 = inst_26411.cljs$core$ISeq$;
var inst_26419 = (inst_26417) || (inst_26418);
var state_26482__$1 = state_26482;
if(cljs.core.truth_(inst_26419)){
var statearr_26516_26565 = state_26482__$1;
(statearr_26516_26565[(1)] = (8));

} else {
var statearr_26517_26566 = state_26482__$1;
(statearr_26517_26566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (14))){
var inst_26477 = (state_26482[(2)]);
var state_26482__$1 = (function (){var statearr_26518 = state_26482;
(statearr_26518[(9)] = inst_26477);

return statearr_26518;
})();
var statearr_26519_26567 = state_26482__$1;
(statearr_26519_26567[(2)] = null);

(statearr_26519_26567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (26))){
var inst_26433 = (state_26482[(7)]);
var inst_26457 = offcourse.appstate.store.set_mode.call(null,inst_26433);
var state_26482__$1 = state_26482;
var statearr_26520_26568 = state_26482__$1;
(statearr_26520_26568[(2)] = inst_26457);

(statearr_26520_26568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (16))){
var inst_26433 = (state_26482[(7)]);
var inst_26436 = (state_26482[(2)]);
var inst_26437 = offcourse.appstate.store.set_level.call(null,inst_26433);
var state_26482__$1 = (function (){var statearr_26521 = state_26482;
(statearr_26521[(10)] = inst_26436);

return statearr_26521;
})();
var statearr_26522_26569 = state_26482__$1;
(statearr_26522_26569[(2)] = inst_26437);

(statearr_26522_26569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (30))){
var inst_26465 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26523_26570 = state_26482__$1;
(statearr_26523_26570[(2)] = inst_26465);

(statearr_26523_26570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (10))){
var inst_26423 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26524_26571 = state_26482__$1;
(statearr_26524_26571[(2)] = inst_26423);

(statearr_26524_26571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (18))){
var inst_26441 = (state_26482[(2)]);
var state_26482__$1 = state_26482;
var statearr_26525_26572 = state_26482__$1;
(statearr_26525_26572[(2)] = inst_26441);

(statearr_26525_26572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26483 === (8))){
var state_26482__$1 = state_26482;
var statearr_26526_26573 = state_26482__$1;
(statearr_26526_26573[(2)] = true);

(statearr_26526_26573[(1)] = (10));


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
});})(c__22242__auto__,map__26406,map__26406__$1,input,output))
;
return ((function (switch__22177__auto__,c__22242__auto__,map__26406,map__26406__$1,input,output){
return (function() {
var offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto__ = null;
var offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto____0 = (function (){
var statearr_26530 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26530[(0)] = offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto__);

(statearr_26530[(1)] = (1));

return statearr_26530;
});
var offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto____1 = (function (state_26482){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_26482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e26531){if((e26531 instanceof Object)){
var ex__22181__auto__ = e26531;
var statearr_26532_26574 = state_26482;
(statearr_26532_26574[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26575 = state_26482;
state_26482 = G__26575;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto__ = function(state_26482){
switch(arguments.length){
case 0:
return offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto____1.call(this,state_26482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto____0;
offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto____1;
return offcourse$appstate$index$listen_for_actions_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,map__26406,map__26406__$1,input,output))
})();
var state__22244__auto__ = (function (){var statearr_26533 = f__22243__auto__.call(null);
(statearr_26533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_26533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,map__26406,map__26406__$1,input,output))
);

return c__22242__auto__;
});
offcourse.appstate.index.init = (function offcourse$appstate$index$init(config){
return offcourse.appstate.index.listen_for_actions.call(null,config);
});

//# sourceMappingURL=index.js.map