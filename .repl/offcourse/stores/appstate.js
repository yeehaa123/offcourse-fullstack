// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.stores.appstate');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('cljs.core.async');
goog.require('offcourse.stores.collection');
offcourse.stores.appstate.listen_for_changes = (function offcourse$stores$appstate$listen_for_changes(){
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__){
return (function (state_42830){
var state_val_42831 = (state_42830[(1)]);
if((state_val_42831 === (7))){
var inst_42816 = (state_42830[(2)]);
var state_42830__$1 = state_42830;
if(cljs.core.truth_(inst_42816)){
var statearr_42832_42855 = state_42830__$1;
(statearr_42832_42855[(1)] = (11));

} else {
var statearr_42833_42856 = state_42830__$1;
(statearr_42833_42856[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (1))){
var state_42830__$1 = state_42830;
var statearr_42834_42857 = state_42830__$1;
(statearr_42834_42857[(2)] = null);

(statearr_42834_42857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (4))){
var inst_42801 = (state_42830[(7)]);
var inst_42801__$1 = (state_42830[(2)]);
var inst_42803 = (inst_42801__$1 == null);
var inst_42804 = cljs.core.not.call(null,inst_42803);
var state_42830__$1 = (function (){var statearr_42835 = state_42830;
(statearr_42835[(7)] = inst_42801__$1);

return statearr_42835;
})();
if(inst_42804){
var statearr_42836_42858 = state_42830__$1;
(statearr_42836_42858[(1)] = (5));

} else {
var statearr_42837_42859 = state_42830__$1;
(statearr_42837_42859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (13))){
var inst_42821 = (state_42830[(2)]);
var inst_42822 = cljs.core.get.call(null,inst_42821,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var inst_42823 = cljs.core.get.call(null,inst_42821,new cljs.core.Keyword(null,"collection","collection",-683361892));
var inst_42824 = reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),inst_42822);
var inst_42825 = reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),inst_42823);
var state_42830__$1 = (function (){var statearr_42838 = state_42830;
(statearr_42838[(8)] = inst_42825);

(statearr_42838[(9)] = inst_42824);

return statearr_42838;
})();
var statearr_42839_42860 = state_42830__$1;
(statearr_42839_42860[(2)] = null);

(statearr_42839_42860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (6))){
var state_42830__$1 = state_42830;
var statearr_42840_42861 = state_42830__$1;
(statearr_42840_42861[(2)] = false);

(statearr_42840_42861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (3))){
var inst_42828 = (state_42830[(2)]);
var state_42830__$1 = state_42830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42830__$1,inst_42828);
} else {
if((state_val_42831 === (12))){
var inst_42801 = (state_42830[(7)]);
var state_42830__$1 = state_42830;
var statearr_42841_42862 = state_42830__$1;
(statearr_42841_42862[(2)] = inst_42801);

(statearr_42841_42862[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (2))){
var state_42830__$1 = state_42830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42830__$1,(4),offcourse.stores.collection.channel);
} else {
if((state_val_42831 === (11))){
var inst_42801 = (state_42830[(7)]);
var inst_42818 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42801);
var state_42830__$1 = state_42830;
var statearr_42842_42863 = state_42830__$1;
(statearr_42842_42863[(2)] = inst_42818);

(statearr_42842_42863[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (9))){
var state_42830__$1 = state_42830;
var statearr_42843_42864 = state_42830__$1;
(statearr_42843_42864[(2)] = false);

(statearr_42843_42864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (5))){
var inst_42801 = (state_42830[(7)]);
var inst_42806 = inst_42801.cljs$lang$protocol_mask$partition0$;
var inst_42807 = (inst_42806 & (64));
var inst_42808 = inst_42801.cljs$core$ISeq$;
var inst_42809 = (inst_42807) || (inst_42808);
var state_42830__$1 = state_42830;
if(cljs.core.truth_(inst_42809)){
var statearr_42844_42865 = state_42830__$1;
(statearr_42844_42865[(1)] = (8));

} else {
var statearr_42845_42866 = state_42830__$1;
(statearr_42845_42866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (10))){
var inst_42813 = (state_42830[(2)]);
var state_42830__$1 = state_42830;
var statearr_42846_42867 = state_42830__$1;
(statearr_42846_42867[(2)] = inst_42813);

(statearr_42846_42867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42831 === (8))){
var state_42830__$1 = state_42830;
var statearr_42847_42868 = state_42830__$1;
(statearr_42847_42868[(2)] = true);

(statearr_42847_42868[(1)] = (10));


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
});})(c__37657__auto__))
;
return ((function (switch__37592__auto__,c__37657__auto__){
return (function() {
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__ = null;
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____0 = (function (){
var statearr_42851 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42851[(0)] = offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__);

(statearr_42851[(1)] = (1));

return statearr_42851;
});
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____1 = (function (state_42830){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_42830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e42852){if((e42852 instanceof Object)){
var ex__37596__auto__ = e42852;
var statearr_42853_42869 = state_42830;
(statearr_42853_42869[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42870 = state_42830;
state_42830 = G__42870;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__ = function(state_42830){
switch(arguments.length){
case 0:
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____1.call(this,state_42830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____0;
offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____1;
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__))
})();
var state__37659__auto__ = (function (){var statearr_42854 = f__37658__auto__.call(null);
(statearr_42854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_42854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__))
);

return c__37657__auto__;
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

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"featured","featured",1584623723));

offcourse.stores.appstate.set_course_collections_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"featured","featured",1584623723),new cljs.core.Keyword(null,"popular","popular",-752193652),new cljs.core.Keyword(null,"new","new",-2085437848)], null));

return offcourse.stores.appstate.initialize_listeners.call(null);
});
