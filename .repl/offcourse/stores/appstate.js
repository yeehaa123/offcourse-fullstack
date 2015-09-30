// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.stores.appstate');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('offcourse.stores.viewmodel');
offcourse.stores.appstate.appstate = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
offcourse.stores.appstate.listen_for_changes = (function offcourse$stores$appstate$listen_for_changes(){
var c__37657__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37657__auto__){
return (function (){
var f__37658__auto__ = (function (){var switch__37592__auto__ = ((function (c__37657__auto__){
return (function (state_43762){
var state_val_43763 = (state_43762[(1)]);
if((state_val_43763 === (1))){
var state_43762__$1 = state_43762;
var statearr_43764_43774 = state_43762__$1;
(statearr_43764_43774[(2)] = null);

(statearr_43764_43774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43763 === (2))){
var state_43762__$1 = state_43762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43762__$1,(4),offcourse.stores.viewmodel.channel);
} else {
if((state_val_43763 === (3))){
var inst_43760 = (state_43762[(2)]);
var state_43762__$1 = state_43762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43762__$1,inst_43760);
} else {
if((state_val_43763 === (4))){
var inst_43755 = (state_43762[(2)]);
var inst_43756 = cljs.core.swap_BANG_.call(null,offcourse.stores.appstate.appstate,cljs.core.assoc,new cljs.core.Keyword(null,"level","level",1290497552),"changed");
var inst_43757 = reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292),inst_43755);
var state_43762__$1 = (function (){var statearr_43765 = state_43762;
(statearr_43765[(7)] = inst_43757);

(statearr_43765[(8)] = inst_43756);

return statearr_43765;
})();
var statearr_43766_43775 = state_43762__$1;
(statearr_43766_43775[(2)] = null);

(statearr_43766_43775[(1)] = (2));


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
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__ = null;
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____0 = (function (){
var statearr_43770 = [null,null,null,null,null,null,null,null,null];
(statearr_43770[(0)] = offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__);

(statearr_43770[(1)] = (1));

return statearr_43770;
});
var offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____1 = (function (state_43762){
while(true){
var ret_value__37594__auto__ = (function (){try{while(true){
var result__37595__auto__ = switch__37592__auto__.call(null,state_43762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37595__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37595__auto__;
}
break;
}
}catch (e43771){if((e43771 instanceof Object)){
var ex__37596__auto__ = e43771;
var statearr_43772_43776 = state_43762;
(statearr_43772_43776[(5)] = ex__37596__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43777 = state_43762;
state_43762 = G__43777;
continue;
} else {
return ret_value__37594__auto__;
}
break;
}
});
offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__ = function(state_43762){
switch(arguments.length){
case 0:
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____0.call(this);
case 1:
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____1.call(this,state_43762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____0;
offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto____1;
return offcourse$stores$appstate$listen_for_changes_$_state_machine__37593__auto__;
})()
;})(switch__37592__auto__,c__37657__auto__))
})();
var state__37659__auto__ = (function (){var statearr_43773 = f__37658__auto__.call(null);
(statearr_43773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37657__auto__);

return statearr_43773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37659__auto__);
});})(c__37657__auto__))
);

return c__37657__auto__;
});
offcourse.stores.appstate.initialize_listeners = (function offcourse$stores$appstate$initialize_listeners(){
offcourse.stores.viewmodel.listen_for_changes.call(null);

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

offcourse.stores.appstate.set_course_collections_BANG_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"featured","featured",1584623723),new cljs.core.Keyword(null,"popular","popular",-752193652),new cljs.core.Keyword(null,"new","new",-2085437848)], null));

return offcourse.stores.appstate.initialize_listeners.call(null);
});
