// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.stores.viewmodel');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('offcourse.services.api');
goog.require('offcourse.models.course');
goog.require('cljs.core.async');
offcourse.stores.viewmodel.viewmodel = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cards","cards",169174038),null,new cljs.core.Keyword(null,"topbar","topbar",-1854882644),null,new cljs.core.Keyword(null,"sidebar","sidebar",35784458),null], null));
offcourse.stores.viewmodel.channel = cljs.core.async.chan.call(null);
offcourse.stores.viewmodel.handle_collection = (function offcourse$stores$viewmodel$handle_collection(name,data){
return cljs.core.swap_BANG_.call(null,offcourse.stores.viewmodel.viewmodel,cljs.core.assoc,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.map.call(null,(function (p1__43283_SHARP_){
return cljs.core.assoc.call(null,p1__43283_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"course","course",1455432948));
}),data),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),null,new cljs.core.Keyword(null,"topbar","topbar",-1854882644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null));
});
offcourse.stores.viewmodel.handle_update = (function offcourse$stores$viewmodel$handle_update(name,course){
var id = course.call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
var card_ids = cljs.core.map.call(null,((function (id){
return (function (p1__43284_SHARP_){
return p1__43284_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
});})(id))
,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(offcourse.stores.viewmodel.viewmodel));
var in_cards = cljs.core.some.call(null,((function (id,card_ids){
return (function (p1__43285_SHARP_){
return cljs.core._EQ_.call(null,id,p1__43285_SHARP_);
});})(id,card_ids))
,card_ids);
if(cljs.core._EQ_.call(null,in_cards)){
cljs.core.swap_BANG_.call(null,offcourse.stores.viewmodel.viewmodel,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),offcourse.models.course.update_course,course);

return cljs.core.swap_BANG_.call(null,offcourse.stores.viewmodel.viewmodel,cljs.core.assoc,new cljs.core.Keyword(null,"sidebar","sidebar",35784458),course);
} else {
return null;
}
});
offcourse.stores.viewmodel.handle_item = (function offcourse$stores$viewmodel$handle_item(name,course){
return cljs.core.swap_BANG_.call(null,offcourse.stores.viewmodel.viewmodel,cljs.core.assoc,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.map.call(null,(function (p1__43286_SHARP_){
return cljs.core.assoc.call(null,p1__43286_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002));
}),course.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145))),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),course,new cljs.core.Keyword(null,"topbar","topbar",-1854882644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [course.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501))], null));
});
offcourse.stores.viewmodel.update_viewmodel = (function offcourse$stores$viewmodel$update_viewmodel(p__43287){
var map__43291 = p__43287;
var map__43291__$1 = ((((!((map__43291 == null)))?((((map__43291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43291):map__43291);
var type = cljs.core.get.call(null,map__43291__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__43291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.call(null,map__43291__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__43293 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43293) {
case "collection":
return offcourse.stores.viewmodel.handle_collection.call(null,name,data);

break;
case "update":
return offcourse.stores.viewmodel.handle_update.call(null,name,data);

break;
case "item":
return offcourse.stores.viewmodel.handle_item.call(null,name,data);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
offcourse.stores.viewmodel.listen_for_changes = (function offcourse$stores$viewmodel$listen_for_changes(){
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__){
return (function (state_43323){
var state_val_43324 = (state_43323[(1)]);
if((state_val_43324 === (1))){
var state_43323__$1 = state_43323;
var statearr_43325_43335 = state_43323__$1;
(statearr_43325_43335[(2)] = null);

(statearr_43325_43335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43324 === (2))){
var state_43323__$1 = state_43323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43323__$1,(4),offcourse.services.api.channel);
} else {
if((state_val_43324 === (3))){
var inst_43321 = (state_43323[(2)]);
var state_43323__$1 = state_43323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43323__$1,inst_43321);
} else {
if((state_val_43324 === (4))){
var inst_43317 = (state_43323[(2)]);
var inst_43318 = offcourse.stores.viewmodel.update_viewmodel.call(null,inst_43317);
var state_43323__$1 = (function (){var statearr_43326 = state_43323;
(statearr_43326[(7)] = inst_43318);

return statearr_43326;
})();
var statearr_43327_43336 = state_43323__$1;
(statearr_43327_43336[(2)] = null);

(statearr_43327_43336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__37657__auto__))
;
return ((function (switch__37592__auto__,c__37657__auto__){
return (function() {
var offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto__ = null;
var offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto____0 = (function (){
var statearr_43331 = [null,null,null,null,null,null,null,null];
(statearr_43331[(0)] = offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto__);

(statearr_43331[(1)] = (1));

return statearr_43331;
});
var offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto____1 = (function (state_43323){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_43323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e43332){if((e43332 instanceof Object)){
var ex__37596__auto__ = e43332;
var statearr_43333_43337 = state_43323;
(statearr_43333_43337[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43338 = state_43323;
state_43323 = G__43338;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto__ = function(state_43323){
switch(arguments.length){
case 0:
return offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto____1.call(this,state_43323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto____0;
offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto____1;
return offcourse$stores$viewmodel$listen_for_changes_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__))
})();
var state__37659__auto__ = (function (){var statearr_43334 = f__37658__auto__.call(null);
(statearr_43334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_43334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__))
);

return c__37657__auto__;
});
