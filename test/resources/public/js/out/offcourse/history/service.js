// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.history.service');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
offcourse.history.service.get_token = (function offcourse$history$service$get_token(){
return [cljs.core.str(window.location.pathname),cljs.core.str(window.location.search)].join('');
});
offcourse.history.service.make_history = (function offcourse$history$service$make_history(){
var G__27251 = (new goog.history.Html5History());
G__27251.setPathPrefix([cljs.core.str(window.location.protocol),cljs.core.str("//"),cljs.core.str(window.location.host)].join(''));

G__27251.setUseFragment(false);

return G__27251;
});
offcourse.history.service.handle_url_change = (function offcourse$history$service$handle_url_change(e){
if(cljs.core.truth_(e.isNavigation)){
} else {
window.scrollTo((0),(0));
}

return secretary.core.dispatch_BANG_.call(null,offcourse.history.service.get_token.call(null));
});
offcourse.history.service.history;
offcourse.history.service.course_token = (function offcourse$history$service$course_token(location_data){
return [cljs.core.str("courses/"),cljs.core.str(new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(location_data))].join('');
});
offcourse.history.service.checkpoint_token = (function offcourse$history$service$checkpoint_token(location_data){
return [cljs.core.str(offcourse.history.service.course_token.call(null,location_data)),cljs.core.str("/checkpoints/"),cljs.core.str(new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839).cljs$core$IFn$_invoke$arity$1(location_data))].join('');
});
offcourse.history.service.create_token = (function offcourse$history$service$create_token(p__27252){
var map__27256 = p__27252;
var map__27256__$1 = ((((!((map__27256 == null)))?((((map__27256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27256):map__27256);
var location_data = map__27256__$1;
var level = cljs.core.get.call(null,map__27256__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var G__27258 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__27258) {
case "collection":
return cljs.core.name.call(null,new cljs.core.Keyword(null,"collection-name","collection-name",600435477).cljs$core$IFn$_invoke$arity$1(location_data));

break;
case "course":
return offcourse.history.service.course_token.call(null,location_data);

break;
case "checkpoint":
return offcourse.history.service.checkpoint_token.call(null,location_data);

break;
case "home":
return null;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(level)].join('')));

}
});
offcourse.history.service.nav_BANG_ = (function offcourse$history$service$nav_BANG_(location_data){
var token = [cljs.core.str("/"),cljs.core.str(offcourse.history.service.create_token.call(null,location_data))].join('');
return offcourse.history.service.history.setToken(token);
});
offcourse.history.service.listen_for_actions = (function offcourse$history$service$listen_for_actions(p__27260){
var map__27336 = p__27260;
var map__27336__$1 = ((((!((map__27336 == null)))?((((map__27336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27336):map__27336);
var input = cljs.core.get.call(null,map__27336__$1,new cljs.core.Keyword(null,"channel-in","channel-in",-470630247));
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,map__27336,map__27336__$1,input){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,map__27336,map__27336__$1,input){
return (function (state_27378){
var state_val_27379 = (state_27378[(1)]);
if((state_val_27379 === (7))){
var inst_27356 = (state_27378[(2)]);
var state_27378__$1 = state_27378;
if(cljs.core.truth_(inst_27356)){
var statearr_27380_27411 = state_27378__$1;
(statearr_27380_27411[(1)] = (11));

} else {
var statearr_27381_27412 = state_27378__$1;
(statearr_27381_27412[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (1))){
var state_27378__$1 = state_27378;
var statearr_27382_27413 = state_27378__$1;
(statearr_27382_27413[(2)] = null);

(statearr_27382_27413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (4))){
var inst_27341 = (state_27378[(7)]);
var inst_27341__$1 = (state_27378[(2)]);
var inst_27343 = (inst_27341__$1 == null);
var inst_27344 = cljs.core.not.call(null,inst_27343);
var state_27378__$1 = (function (){var statearr_27383 = state_27378;
(statearr_27383[(7)] = inst_27341__$1);

return statearr_27383;
})();
if(inst_27344){
var statearr_27384_27414 = state_27378__$1;
(statearr_27384_27414[(1)] = (5));

} else {
var statearr_27385_27415 = state_27378__$1;
(statearr_27385_27415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (15))){
var inst_27363 = (state_27378[(8)]);
var inst_27364 = offcourse.history.service.nav_BANG_.call(null,inst_27363);
var state_27378__$1 = state_27378;
var statearr_27386_27416 = state_27378__$1;
(statearr_27386_27416[(2)] = inst_27364);

(statearr_27386_27416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (13))){
var inst_27361 = (state_27378[(2)]);
var inst_27362 = cljs.core.get.call(null,inst_27361,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_27363 = cljs.core.get.call(null,inst_27361,new cljs.core.Keyword(null,"payload","payload",-383036092));
var state_27378__$1 = (function (){var statearr_27387 = state_27378;
(statearr_27387[(8)] = inst_27363);

return statearr_27387;
})();
var G__27388_27417 = (((inst_27362 instanceof cljs.core.Keyword))?inst_27362.fqn:null);
switch (G__27388_27417) {
case "requested-route":
var statearr_27389_27419 = state_27378__$1;
(statearr_27389_27419[(1)] = (15));


break;
case "not-found-resource":
var statearr_27390_27420 = state_27378__$1;
(statearr_27390_27420[(1)] = (16));


break;
default:
var statearr_27391_27421 = state_27378__$1;
(statearr_27391_27421[(1)] = (17));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (6))){
var state_27378__$1 = state_27378;
var statearr_27392_27422 = state_27378__$1;
(statearr_27392_27422[(2)] = false);

(statearr_27392_27422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (17))){
var state_27378__$1 = state_27378;
var statearr_27393_27423 = state_27378__$1;
(statearr_27393_27423[(2)] = null);

(statearr_27393_27423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (3))){
var inst_27376 = (state_27378[(2)]);
var state_27378__$1 = state_27378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27378__$1,inst_27376);
} else {
if((state_val_27379 === (12))){
var inst_27341 = (state_27378[(7)]);
var state_27378__$1 = state_27378;
var statearr_27394_27424 = state_27378__$1;
(statearr_27394_27424[(2)] = inst_27341);

(statearr_27394_27424[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (2))){
var state_27378__$1 = state_27378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27378__$1,(4),input);
} else {
if((state_val_27379 === (11))){
var inst_27341 = (state_27378[(7)]);
var inst_27358 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27341);
var state_27378__$1 = state_27378;
var statearr_27395_27425 = state_27378__$1;
(statearr_27395_27425[(2)] = inst_27358);

(statearr_27395_27425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (9))){
var state_27378__$1 = state_27378;
var statearr_27396_27426 = state_27378__$1;
(statearr_27396_27426[(2)] = false);

(statearr_27396_27426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (5))){
var inst_27341 = (state_27378[(7)]);
var inst_27346 = inst_27341.cljs$lang$protocol_mask$partition0$;
var inst_27347 = (inst_27346 & (64));
var inst_27348 = inst_27341.cljs$core$ISeq$;
var inst_27349 = (inst_27347) || (inst_27348);
var state_27378__$1 = state_27378;
if(cljs.core.truth_(inst_27349)){
var statearr_27397_27427 = state_27378__$1;
(statearr_27397_27427[(1)] = (8));

} else {
var statearr_27398_27428 = state_27378__$1;
(statearr_27398_27428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (14))){
var inst_27373 = (state_27378[(2)]);
var state_27378__$1 = (function (){var statearr_27399 = state_27378;
(statearr_27399[(9)] = inst_27373);

return statearr_27399;
})();
var statearr_27400_27429 = state_27378__$1;
(statearr_27400_27429[(2)] = null);

(statearr_27400_27429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (16))){
var inst_27366 = [new cljs.core.Keyword(null,"level","level",1290497552)];
var inst_27367 = [new cljs.core.Keyword(null,"home","home",-74557309)];
var inst_27368 = cljs.core.PersistentHashMap.fromArrays(inst_27366,inst_27367);
var inst_27369 = offcourse.history.service.nav_BANG_.call(null,inst_27368);
var state_27378__$1 = state_27378;
var statearr_27401_27430 = state_27378__$1;
(statearr_27401_27430[(2)] = inst_27369);

(statearr_27401_27430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (10))){
var inst_27353 = (state_27378[(2)]);
var state_27378__$1 = state_27378;
var statearr_27402_27431 = state_27378__$1;
(statearr_27402_27431[(2)] = inst_27353);

(statearr_27402_27431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27379 === (8))){
var state_27378__$1 = state_27378;
var statearr_27403_27432 = state_27378__$1;
(statearr_27403_27432[(2)] = true);

(statearr_27403_27432[(1)] = (10));


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
});})(c__22242__auto__,map__27336,map__27336__$1,input))
;
return ((function (switch__22177__auto__,c__22242__auto__,map__27336,map__27336__$1,input){
return (function() {
var offcourse$history$service$listen_for_actions_$_state_machine__22178__auto__ = null;
var offcourse$history$service$listen_for_actions_$_state_machine__22178__auto____0 = (function (){
var statearr_27407 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27407[(0)] = offcourse$history$service$listen_for_actions_$_state_machine__22178__auto__);

(statearr_27407[(1)] = (1));

return statearr_27407;
});
var offcourse$history$service$listen_for_actions_$_state_machine__22178__auto____1 = (function (state_27378){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_27378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e27408){if((e27408 instanceof Object)){
var ex__22181__auto__ = e27408;
var statearr_27409_27433 = state_27378;
(statearr_27409_27433[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27434 = state_27378;
state_27378 = G__27434;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$history$service$listen_for_actions_$_state_machine__22178__auto__ = function(state_27378){
switch(arguments.length){
case 0:
return offcourse$history$service$listen_for_actions_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$history$service$listen_for_actions_$_state_machine__22178__auto____1.call(this,state_27378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$history$service$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$history$service$listen_for_actions_$_state_machine__22178__auto____0;
offcourse$history$service$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$history$service$listen_for_actions_$_state_machine__22178__auto____1;
return offcourse$history$service$listen_for_actions_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,map__27336,map__27336__$1,input))
})();
var state__22244__auto__ = (function (){var statearr_27410 = f__22243__auto__.call(null);
(statearr_27410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_27410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,map__27336,map__27336__$1,input))
);

return c__22242__auto__;
});
offcourse.history.service.init_BANG_ = (function offcourse$history$service$init_BANG_(config){
if(typeof offcourse.history.service.history !== 'undefined'){
} else {
offcourse.history.service.history = (function (){var G__27437 = offcourse.history.service.make_history.call(null);
goog.events.listen(G__27437,goog.history.EventType.NAVIGATE,((function (G__27437){
return (function (p1__27435_SHARP_){
return offcourse.history.service.handle_url_change.call(null,p1__27435_SHARP_);
});})(G__27437))
);

G__27437.setEnabled(true);

return G__27437;
})();
}

return offcourse.history.service.listen_for_actions.call(null,config);
});

//# sourceMappingURL=service.js.map