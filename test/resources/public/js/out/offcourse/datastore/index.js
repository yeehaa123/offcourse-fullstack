// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.index');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('offcourse.datastore.store');
offcourse.datastore.index.listen_for_actions = (function offcourse$datastore$index$listen_for_actions(p__26744){
var map__26833 = p__26744;
var map__26833__$1 = ((((!((map__26833 == null)))?((((map__26833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26833):map__26833);
var input = cljs.core.get.call(null,map__26833__$1,new cljs.core.Keyword(null,"channel-in","channel-in",-470630247));
var output = cljs.core.get.call(null,map__26833__$1,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906));
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,map__26833,map__26833__$1,input,output){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,map__26833,map__26833__$1,input,output){
return (function (state_26884){
var state_val_26885 = (state_26884[(1)]);
if((state_val_26885 === (7))){
var inst_26853 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
if(cljs.core.truth_(inst_26853)){
var statearr_26886_26921 = state_26884__$1;
(statearr_26886_26921[(1)] = (11));

} else {
var statearr_26887_26922 = state_26884__$1;
(statearr_26887_26922[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (20))){
var inst_26871 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26888_26923 = state_26884__$1;
(statearr_26888_26923[(2)] = inst_26871);

(statearr_26888_26923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (1))){
var state_26884__$1 = state_26884;
var statearr_26889_26924 = state_26884__$1;
(statearr_26889_26924[(2)] = null);

(statearr_26889_26924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (4))){
var inst_26838 = (state_26884[(7)]);
var inst_26838__$1 = (state_26884[(2)]);
var inst_26840 = (inst_26838__$1 == null);
var inst_26841 = cljs.core.not.call(null,inst_26840);
var state_26884__$1 = (function (){var statearr_26890 = state_26884;
(statearr_26890[(7)] = inst_26838__$1);

return statearr_26890;
})();
if(inst_26841){
var statearr_26891_26925 = state_26884__$1;
(statearr_26891_26925[(1)] = (5));

} else {
var statearr_26892_26926 = state_26884__$1;
(statearr_26892_26926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (15))){
var inst_26860 = (state_26884[(8)]);
var inst_26861 = offcourse.datastore.store.get_data.call(null,inst_26860);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26884__$1,(16),output,inst_26861);
} else {
if((state_val_26885 === (21))){
var inst_26860 = (state_26884[(8)]);
var inst_26873 = offcourse.datastore.store.toggle_done.call(null,inst_26860);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26884__$1,(22),output,inst_26873);
} else {
if((state_val_26885 === (13))){
var inst_26858 = (state_26884[(2)]);
var inst_26859 = cljs.core.get.call(null,inst_26858,new cljs.core.Keyword(null,"type","type",1174270348));
var inst_26860 = cljs.core.get.call(null,inst_26858,new cljs.core.Keyword(null,"payload","payload",-383036092));
var state_26884__$1 = (function (){var statearr_26893 = state_26884;
(statearr_26893[(8)] = inst_26860);

return statearr_26893;
})();
var G__26894_26927 = (((inst_26859 instanceof cljs.core.Keyword))?inst_26859.fqn:null);
switch (G__26894_26927) {
case "requested-data":
var statearr_26895_26929 = state_26884__$1;
(statearr_26895_26929[(1)] = (15));


break;
case "requested-commit":
var statearr_26896_26930 = state_26884__$1;
(statearr_26896_26930[(1)] = (17));


break;
case "fetched-data":
var statearr_26897_26931 = state_26884__$1;
(statearr_26897_26931[(1)] = (19));


break;
case "requested-toggle-done":
var statearr_26898_26932 = state_26884__$1;
(statearr_26898_26932[(1)] = (21));


break;
default:
var statearr_26899_26933 = state_26884__$1;
(statearr_26899_26933[(1)] = (23));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (22))){
var inst_26875 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26900_26934 = state_26884__$1;
(statearr_26900_26934[(2)] = inst_26875);

(statearr_26900_26934[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (6))){
var state_26884__$1 = state_26884;
var statearr_26901_26935 = state_26884__$1;
(statearr_26901_26935[(2)] = false);

(statearr_26901_26935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (17))){
var inst_26860 = (state_26884[(8)]);
var inst_26865 = offcourse.datastore.store.commit_data.call(null,inst_26860);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26884__$1,(18),output,inst_26865);
} else {
if((state_val_26885 === (3))){
var inst_26882 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26884__$1,inst_26882);
} else {
if((state_val_26885 === (12))){
var inst_26838 = (state_26884[(7)]);
var state_26884__$1 = state_26884;
var statearr_26902_26936 = state_26884__$1;
(statearr_26902_26936[(2)] = inst_26838);

(statearr_26902_26936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (2))){
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(4),input);
} else {
if((state_val_26885 === (23))){
var state_26884__$1 = state_26884;
var statearr_26903_26937 = state_26884__$1;
(statearr_26903_26937[(2)] = null);

(statearr_26903_26937[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (19))){
var inst_26860 = (state_26884[(8)]);
var inst_26869 = offcourse.datastore.store.update_datastore.call(null,inst_26860);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26884__$1,(20),output,inst_26869);
} else {
if((state_val_26885 === (11))){
var inst_26838 = (state_26884[(7)]);
var inst_26855 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26838);
var state_26884__$1 = state_26884;
var statearr_26904_26938 = state_26884__$1;
(statearr_26904_26938[(2)] = inst_26855);

(statearr_26904_26938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (9))){
var state_26884__$1 = state_26884;
var statearr_26905_26939 = state_26884__$1;
(statearr_26905_26939[(2)] = false);

(statearr_26905_26939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (5))){
var inst_26838 = (state_26884[(7)]);
var inst_26843 = inst_26838.cljs$lang$protocol_mask$partition0$;
var inst_26844 = (inst_26843 & (64));
var inst_26845 = inst_26838.cljs$core$ISeq$;
var inst_26846 = (inst_26844) || (inst_26845);
var state_26884__$1 = state_26884;
if(cljs.core.truth_(inst_26846)){
var statearr_26906_26940 = state_26884__$1;
(statearr_26906_26940[(1)] = (8));

} else {
var statearr_26907_26941 = state_26884__$1;
(statearr_26907_26941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (14))){
var inst_26879 = (state_26884[(2)]);
var state_26884__$1 = (function (){var statearr_26908 = state_26884;
(statearr_26908[(9)] = inst_26879);

return statearr_26908;
})();
var statearr_26909_26942 = state_26884__$1;
(statearr_26909_26942[(2)] = null);

(statearr_26909_26942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (16))){
var inst_26863 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26910_26943 = state_26884__$1;
(statearr_26910_26943[(2)] = inst_26863);

(statearr_26910_26943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (10))){
var inst_26850 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26911_26944 = state_26884__$1;
(statearr_26911_26944[(2)] = inst_26850);

(statearr_26911_26944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (18))){
var inst_26867 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
var statearr_26912_26945 = state_26884__$1;
(statearr_26912_26945[(2)] = inst_26867);

(statearr_26912_26945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26885 === (8))){
var state_26884__$1 = state_26884;
var statearr_26913_26946 = state_26884__$1;
(statearr_26913_26946[(2)] = true);

(statearr_26913_26946[(1)] = (10));


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
});})(c__22242__auto__,map__26833,map__26833__$1,input,output))
;
return ((function (switch__22177__auto__,c__22242__auto__,map__26833,map__26833__$1,input,output){
return (function() {
var offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto__ = null;
var offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto____0 = (function (){
var statearr_26917 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26917[(0)] = offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto__);

(statearr_26917[(1)] = (1));

return statearr_26917;
});
var offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto____1 = (function (state_26884){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_26884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e26918){if((e26918 instanceof Object)){
var ex__22181__auto__ = e26918;
var statearr_26919_26947 = state_26884;
(statearr_26919_26947[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26948 = state_26884;
state_26884 = G__26948;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto__ = function(state_26884){
switch(arguments.length){
case 0:
return offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto____0.call(this);
case 1:
return offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto____1.call(this,state_26884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto____0;
offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto____1;
return offcourse$datastore$index$listen_for_actions_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,map__26833,map__26833__$1,input,output))
})();
var state__22244__auto__ = (function (){var statearr_26920 = f__22243__auto__.call(null);
(statearr_26920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_26920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,map__26833,map__26833__$1,input,output))
);

return c__22242__auto__;
});
offcourse.datastore.index.init = (function offcourse$datastore$index$init(config){
return offcourse.datastore.index.listen_for_actions.call(null,config);
});

//# sourceMappingURL=index.js.map