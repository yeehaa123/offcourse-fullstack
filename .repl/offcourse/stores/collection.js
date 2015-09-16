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
offcourse.stores.collection.handle_update_collection = (function offcourse$stores$collection$handle_update_collection(p__42873){
var map__42894 = p__42873;
var map__42894__$1 = ((((!((map__42894 == null)))?((((map__42894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42894):map__42894);
var name = cljs.core.get.call(null,map__42894__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var data = cljs.core.get.call(null,map__42894__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__,map__42894,map__42894__$1,name,data){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__,map__42894,map__42894__$1,name,data){
return (function (state_42904){
var state_val_42905 = (state_42904[(1)]);
if((state_val_42905 === (1))){
var inst_42896 = offcourse.stores.collection.update_collection.call(null,data);
var inst_42897 = [new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"collection","collection",-683361892)];
var inst_42898 = cljs.core.deref.call(null,offcourse.stores.collection.collection);
var inst_42899 = [name,inst_42898];
var inst_42900 = cljs.core.PersistentHashMap.fromArrays(inst_42897,inst_42899);
var state_42904__$1 = (function (){var statearr_42906 = state_42904;
(statearr_42906[(7)] = inst_42896);

return statearr_42906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42904__$1,(2),offcourse.stores.collection.channel,inst_42900);
} else {
if((state_val_42905 === (2))){
var inst_42902 = (state_42904[(2)]);
var state_42904__$1 = state_42904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42904__$1,inst_42902);
} else {
return null;
}
}
});})(c__37657__auto__,map__42894,map__42894__$1,name,data))
;
return ((function (switch__37592__auto__,c__37657__auto__,map__42894,map__42894__$1,name,data){
return (function() {
var offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto__ = null;
var offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto____0 = (function (){
var statearr_42910 = [null,null,null,null,null,null,null,null];
(statearr_42910[(0)] = offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto__);

(statearr_42910[(1)] = (1));

return statearr_42910;
});
var offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto____1 = (function (state_42904){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_42904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e42911){if((e42911 instanceof Object)){
var ex__37596__auto__ = e42911;
var statearr_42912_42914 = state_42904;
(statearr_42912_42914[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42915 = state_42904;
state_42904 = G__42915;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto__ = function(state_42904){
switch(arguments.length){
case 0:
return offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto____1.call(this,state_42904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto____0;
offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto____1;
return offcourse$stores$collection$handle_update_collection_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__,map__42894,map__42894__$1,name,data))
})();
var state__37659__auto__ = (function (){var statearr_42913 = f__37658__auto__.call(null);
(statearr_42913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_42913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__,map__42894,map__42894__$1,name,data))
);

return c__37657__auto__;
});
offcourse.stores.collection.listen_for_changes = (function offcourse$stores$collection$listen_for_changes(){
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__){
return (function (state_42987){
var state_val_42988 = (state_42987[(1)]);
if((state_val_42988 === (7))){
var inst_42982 = (state_42987[(2)]);
var state_42987__$1 = (function (){var statearr_42989 = state_42987;
(statearr_42989[(7)] = inst_42982);

return statearr_42989;
})();
var statearr_42990_43008 = state_42987__$1;
(statearr_42990_43008[(2)] = null);

(statearr_42990_43008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42988 === (1))){
var state_42987__$1 = state_42987;
var statearr_42991_43009 = state_42987__$1;
(statearr_42991_43009[(2)] = null);

(statearr_42991_43009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42988 === (4))){
var inst_42970 = (state_42987[(8)]);
var inst_42968 = (state_42987[(2)]);
var inst_42969 = cljs.core.nth.call(null,inst_42968,(0),null);
var inst_42970__$1 = cljs.core.nth.call(null,inst_42968,(1),null);
var inst_42971 = cljs.core._EQ_.call(null,inst_42970__$1,offcourse.services.api.collection_channel);
var state_42987__$1 = (function (){var statearr_42992 = state_42987;
(statearr_42992[(9)] = inst_42969);

(statearr_42992[(8)] = inst_42970__$1);

return statearr_42992;
})();
if(inst_42971){
var statearr_42993_43010 = state_42987__$1;
(statearr_42993_43010[(1)] = (5));

} else {
var statearr_42994_43011 = state_42987__$1;
(statearr_42994_43011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42988 === (6))){
var inst_42970 = (state_42987[(8)]);
var inst_42975 = cljs.core._EQ_.call(null,inst_42970,offcourse.services.api.model_channel);
var state_42987__$1 = state_42987;
if(inst_42975){
var statearr_42995_43012 = state_42987__$1;
(statearr_42995_43012[(1)] = (8));

} else {
var statearr_42996_43013 = state_42987__$1;
(statearr_42996_43013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42988 === (3))){
var inst_42985 = (state_42987[(2)]);
var state_42987__$1 = state_42987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42987__$1,inst_42985);
} else {
if((state_val_42988 === (2))){
var inst_42964 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42965 = [offcourse.services.api.collection_channel,offcourse.services.api.model_channel];
var inst_42966 = (new cljs.core.PersistentVector(null,2,(5),inst_42964,inst_42965,null));
var state_42987__$1 = state_42987;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42987__$1,(4),inst_42966);
} else {
if((state_val_42988 === (9))){
var state_42987__$1 = state_42987;
var statearr_42997_43014 = state_42987__$1;
(statearr_42997_43014[(2)] = null);

(statearr_42997_43014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42988 === (5))){
var inst_42969 = (state_42987[(9)]);
var inst_42973 = offcourse.stores.collection.handle_update_collection.call(null,inst_42969);
var state_42987__$1 = state_42987;
var statearr_42998_43015 = state_42987__$1;
(statearr_42998_43015[(2)] = inst_42973);

(statearr_42998_43015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42988 === (10))){
var inst_42980 = (state_42987[(2)]);
var state_42987__$1 = state_42987;
var statearr_42999_43016 = state_42987__$1;
(statearr_42999_43016[(2)] = inst_42980);

(statearr_42999_43016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42988 === (8))){
var inst_42977 = cljs.core.println.call(null,"ji");
var state_42987__$1 = state_42987;
var statearr_43000_43017 = state_42987__$1;
(statearr_43000_43017[(2)] = inst_42977);

(statearr_43000_43017[(1)] = (10));


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
});})(c__37657__auto__))
;
return ((function (switch__37592__auto__,c__37657__auto__){
return (function() {
var offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto__ = null;
var offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto____0 = (function (){
var statearr_43004 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43004[(0)] = offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto__);

(statearr_43004[(1)] = (1));

return statearr_43004;
});
var offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto____1 = (function (state_42987){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_42987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e43005){if((e43005 instanceof Object)){
var ex__37596__auto__ = e43005;
var statearr_43006_43018 = state_42987;
(statearr_43006_43018[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43019 = state_42987;
state_42987 = G__43019;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto__ = function(state_42987){
switch(arguments.length){
case 0:
return offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto____1.call(this,state_42987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto____0;
offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto____1;
return offcourse$stores$collection$listen_for_changes_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__))
})();
var state__37659__auto__ = (function (){var statearr_43007 = f__37658__auto__.call(null);
(statearr_43007[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_43007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__))
);

return c__37657__auto__;
});
