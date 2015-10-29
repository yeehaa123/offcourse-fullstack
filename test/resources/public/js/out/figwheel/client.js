// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__33763 = cljs.core._EQ_;
var expr__33764 = (function (){var or__19162__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__33763.call(null,"true",expr__33764))){
return true;
} else {
if(cljs.core.truth_(pred__33763.call(null,"false",expr__33764))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33764)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33766__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33767__i = 0, G__33767__a = new Array(arguments.length -  0);
while (G__33767__i < G__33767__a.length) {G__33767__a[G__33767__i] = arguments[G__33767__i + 0]; ++G__33767__i;}
  args = new cljs.core.IndexedSeq(G__33767__a,0);
} 
return G__33766__delegate.call(this,args);};
G__33766.cljs$lang$maxFixedArity = 0;
G__33766.cljs$lang$applyTo = (function (arglist__33768){
var args = cljs.core.seq(arglist__33768);
return G__33766__delegate(args);
});
G__33766.cljs$core$IFn$_invoke$arity$variadic = G__33766__delegate;
return G__33766;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__33769){
var map__33772 = p__33769;
var map__33772__$1 = ((((!((map__33772 == null)))?((((map__33772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33772):map__33772);
var message = cljs.core.get.call(null,map__33772__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__33772__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__19162__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__19150__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__19150__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__19150__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22242__auto___33934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___33934,ch){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___33934,ch){
return (function (state_33903){
var state_val_33904 = (state_33903[(1)]);
if((state_val_33904 === (7))){
var inst_33899 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33905_33935 = state_33903__$1;
(statearr_33905_33935[(2)] = inst_33899);

(statearr_33905_33935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (1))){
var state_33903__$1 = state_33903;
var statearr_33906_33936 = state_33903__$1;
(statearr_33906_33936[(2)] = null);

(statearr_33906_33936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (4))){
var inst_33856 = (state_33903[(7)]);
var inst_33856__$1 = (state_33903[(2)]);
var state_33903__$1 = (function (){var statearr_33907 = state_33903;
(statearr_33907[(7)] = inst_33856__$1);

return statearr_33907;
})();
if(cljs.core.truth_(inst_33856__$1)){
var statearr_33908_33937 = state_33903__$1;
(statearr_33908_33937[(1)] = (5));

} else {
var statearr_33909_33938 = state_33903__$1;
(statearr_33909_33938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (15))){
var inst_33863 = (state_33903[(8)]);
var inst_33878 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33863);
var inst_33879 = cljs.core.first.call(null,inst_33878);
var inst_33880 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_33879);
var inst_33881 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_33880)].join('');
var inst_33882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_33881);
var state_33903__$1 = state_33903;
var statearr_33910_33939 = state_33903__$1;
(statearr_33910_33939[(2)] = inst_33882);

(statearr_33910_33939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (13))){
var inst_33887 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33911_33940 = state_33903__$1;
(statearr_33911_33940[(2)] = inst_33887);

(statearr_33911_33940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (6))){
var state_33903__$1 = state_33903;
var statearr_33912_33941 = state_33903__$1;
(statearr_33912_33941[(2)] = null);

(statearr_33912_33941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (17))){
var inst_33885 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33913_33942 = state_33903__$1;
(statearr_33913_33942[(2)] = inst_33885);

(statearr_33913_33942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (3))){
var inst_33901 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33903__$1,inst_33901);
} else {
if((state_val_33904 === (12))){
var inst_33862 = (state_33903[(9)]);
var inst_33876 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_33862,opts);
var state_33903__$1 = state_33903;
if(cljs.core.truth_(inst_33876)){
var statearr_33914_33943 = state_33903__$1;
(statearr_33914_33943[(1)] = (15));

} else {
var statearr_33915_33944 = state_33903__$1;
(statearr_33915_33944[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (2))){
var state_33903__$1 = state_33903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33903__$1,(4),ch);
} else {
if((state_val_33904 === (11))){
var inst_33863 = (state_33903[(8)]);
var inst_33868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33869 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_33863);
var inst_33870 = cljs.core.async.timeout.call(null,(1000));
var inst_33871 = [inst_33869,inst_33870];
var inst_33872 = (new cljs.core.PersistentVector(null,2,(5),inst_33868,inst_33871,null));
var state_33903__$1 = state_33903;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33903__$1,(14),inst_33872);
} else {
if((state_val_33904 === (9))){
var inst_33863 = (state_33903[(8)]);
var inst_33889 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_33890 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_33863);
var inst_33891 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33890);
var inst_33892 = [cljs.core.str("Not loading: "),cljs.core.str(inst_33891)].join('');
var inst_33893 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_33892);
var state_33903__$1 = (function (){var statearr_33916 = state_33903;
(statearr_33916[(10)] = inst_33889);

return statearr_33916;
})();
var statearr_33917_33945 = state_33903__$1;
(statearr_33917_33945[(2)] = inst_33893);

(statearr_33917_33945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (5))){
var inst_33856 = (state_33903[(7)]);
var inst_33858 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_33859 = (new cljs.core.PersistentArrayMap(null,2,inst_33858,null));
var inst_33860 = (new cljs.core.PersistentHashSet(null,inst_33859,null));
var inst_33861 = figwheel.client.focus_msgs.call(null,inst_33860,inst_33856);
var inst_33862 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_33861);
var inst_33863 = cljs.core.first.call(null,inst_33861);
var inst_33864 = figwheel.client.autoload_QMARK_.call(null);
var state_33903__$1 = (function (){var statearr_33918 = state_33903;
(statearr_33918[(9)] = inst_33862);

(statearr_33918[(8)] = inst_33863);

return statearr_33918;
})();
if(cljs.core.truth_(inst_33864)){
var statearr_33919_33946 = state_33903__$1;
(statearr_33919_33946[(1)] = (8));

} else {
var statearr_33920_33947 = state_33903__$1;
(statearr_33920_33947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (14))){
var inst_33874 = (state_33903[(2)]);
var state_33903__$1 = state_33903;
var statearr_33921_33948 = state_33903__$1;
(statearr_33921_33948[(2)] = inst_33874);

(statearr_33921_33948[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (16))){
var state_33903__$1 = state_33903;
var statearr_33922_33949 = state_33903__$1;
(statearr_33922_33949[(2)] = null);

(statearr_33922_33949[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (10))){
var inst_33895 = (state_33903[(2)]);
var state_33903__$1 = (function (){var statearr_33923 = state_33903;
(statearr_33923[(11)] = inst_33895);

return statearr_33923;
})();
var statearr_33924_33950 = state_33903__$1;
(statearr_33924_33950[(2)] = null);

(statearr_33924_33950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33904 === (8))){
var inst_33862 = (state_33903[(9)]);
var inst_33866 = figwheel.client.reload_file_state_QMARK_.call(null,inst_33862,opts);
var state_33903__$1 = state_33903;
if(cljs.core.truth_(inst_33866)){
var statearr_33925_33951 = state_33903__$1;
(statearr_33925_33951[(1)] = (11));

} else {
var statearr_33926_33952 = state_33903__$1;
(statearr_33926_33952[(1)] = (12));

}

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
});})(c__22242__auto___33934,ch))
;
return ((function (switch__22177__auto__,c__22242__auto___33934,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22178__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22178__auto____0 = (function (){
var statearr_33930 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33930[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22178__auto__);

(statearr_33930[(1)] = (1));

return statearr_33930;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22178__auto____1 = (function (state_33903){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_33903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e33931){if((e33931 instanceof Object)){
var ex__22181__auto__ = e33931;
var statearr_33932_33953 = state_33903;
(statearr_33932_33953[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33954 = state_33903;
state_33903 = G__33954;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22178__auto__ = function(state_33903){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22178__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22178__auto____1.call(this,state_33903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22178__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22178__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___33934,ch))
})();
var state__22244__auto__ = (function (){var statearr_33933 = f__22243__auto__.call(null);
(statearr_33933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___33934);

return statearr_33933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___33934,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33955_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33955_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33962 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33962){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_33960 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_33961 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_33960,_STAR_print_newline_STAR_33961,base_path_33962){
return (function() { 
var G__33963__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__33963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33964__i = 0, G__33964__a = new Array(arguments.length -  0);
while (G__33964__i < G__33964__a.length) {G__33964__a[G__33964__i] = arguments[G__33964__i + 0]; ++G__33964__i;}
  args = new cljs.core.IndexedSeq(G__33964__a,0);
} 
return G__33963__delegate.call(this,args);};
G__33963.cljs$lang$maxFixedArity = 0;
G__33963.cljs$lang$applyTo = (function (arglist__33965){
var args = cljs.core.seq(arglist__33965);
return G__33963__delegate(args);
});
G__33963.cljs$core$IFn$_invoke$arity$variadic = G__33963__delegate;
return G__33963;
})()
;})(_STAR_print_fn_STAR_33960,_STAR_print_newline_STAR_33961,base_path_33962))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33961;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33960;
}}catch (e33959){if((e33959 instanceof Error)){
var e = e33959;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33962], null));
} else {
var e = e33959;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_33962))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33966){
var map__33973 = p__33966;
var map__33973__$1 = ((((!((map__33973 == null)))?((((map__33973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33973):map__33973);
var opts = map__33973__$1;
var build_id = cljs.core.get.call(null,map__33973__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33973,map__33973__$1,opts,build_id){
return (function (p__33975){
var vec__33976 = p__33975;
var map__33977 = cljs.core.nth.call(null,vec__33976,(0),null);
var map__33977__$1 = ((((!((map__33977 == null)))?((((map__33977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33977):map__33977);
var msg = map__33977__$1;
var msg_name = cljs.core.get.call(null,map__33977__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33976,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33976,map__33977,map__33977__$1,msg,msg_name,_,map__33973,map__33973__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33976,map__33977,map__33977__$1,msg,msg_name,_,map__33973,map__33973__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33973,map__33973__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33983){
var vec__33984 = p__33983;
var map__33985 = cljs.core.nth.call(null,vec__33984,(0),null);
var map__33985__$1 = ((((!((map__33985 == null)))?((((map__33985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33985):map__33985);
var msg = map__33985__$1;
var msg_name = cljs.core.get.call(null,map__33985__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__33984,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33987){
var map__33997 = p__33987;
var map__33997__$1 = ((((!((map__33997 == null)))?((((map__33997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33997):map__33997);
var on_compile_warning = cljs.core.get.call(null,map__33997__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33997__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33997,map__33997__$1,on_compile_warning,on_compile_fail){
return (function (p__33999){
var vec__34000 = p__33999;
var map__34001 = cljs.core.nth.call(null,vec__34000,(0),null);
var map__34001__$1 = ((((!((map__34001 == null)))?((((map__34001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34001):map__34001);
var msg = map__34001__$1;
var msg_name = cljs.core.get.call(null,map__34001__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34000,(1));
var pred__34003 = cljs.core._EQ_;
var expr__34004 = msg_name;
if(cljs.core.truth_(pred__34003.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34004))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34003.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34004))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33997,map__33997__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,msg_hist,msg_names,msg){
return (function (state_34220){
var state_val_34221 = (state_34220[(1)]);
if((state_val_34221 === (7))){
var inst_34144 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34144)){
var statearr_34222_34268 = state_34220__$1;
(statearr_34222_34268[(1)] = (8));

} else {
var statearr_34223_34269 = state_34220__$1;
(statearr_34223_34269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (20))){
var inst_34214 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34224_34270 = state_34220__$1;
(statearr_34224_34270[(2)] = inst_34214);

(statearr_34224_34270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (27))){
var inst_34210 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34225_34271 = state_34220__$1;
(statearr_34225_34271[(2)] = inst_34210);

(statearr_34225_34271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (1))){
var inst_34137 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34137)){
var statearr_34226_34272 = state_34220__$1;
(statearr_34226_34272[(1)] = (2));

} else {
var statearr_34227_34273 = state_34220__$1;
(statearr_34227_34273[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (24))){
var inst_34212 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34228_34274 = state_34220__$1;
(statearr_34228_34274[(2)] = inst_34212);

(statearr_34228_34274[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (4))){
var inst_34218 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34220__$1,inst_34218);
} else {
if((state_val_34221 === (15))){
var inst_34216 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34229_34275 = state_34220__$1;
(statearr_34229_34275[(2)] = inst_34216);

(statearr_34229_34275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (21))){
var inst_34175 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34230_34276 = state_34220__$1;
(statearr_34230_34276[(2)] = inst_34175);

(statearr_34230_34276[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (31))){
var inst_34199 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34199)){
var statearr_34231_34277 = state_34220__$1;
(statearr_34231_34277[(1)] = (34));

} else {
var statearr_34232_34278 = state_34220__$1;
(statearr_34232_34278[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (32))){
var inst_34208 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34233_34279 = state_34220__$1;
(statearr_34233_34279[(2)] = inst_34208);

(statearr_34233_34279[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (33))){
var inst_34197 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34234_34280 = state_34220__$1;
(statearr_34234_34280[(2)] = inst_34197);

(statearr_34234_34280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (13))){
var inst_34158 = figwheel.client.heads_up.clear.call(null);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(16),inst_34158);
} else {
if((state_val_34221 === (22))){
var inst_34179 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34180 = figwheel.client.heads_up.append_message.call(null,inst_34179);
var state_34220__$1 = state_34220;
var statearr_34235_34281 = state_34220__$1;
(statearr_34235_34281[(2)] = inst_34180);

(statearr_34235_34281[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (36))){
var inst_34206 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34236_34282 = state_34220__$1;
(statearr_34236_34282[(2)] = inst_34206);

(statearr_34236_34282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (29))){
var inst_34190 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34237_34283 = state_34220__$1;
(statearr_34237_34283[(2)] = inst_34190);

(statearr_34237_34283[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (6))){
var inst_34139 = (state_34220[(7)]);
var state_34220__$1 = state_34220;
var statearr_34238_34284 = state_34220__$1;
(statearr_34238_34284[(2)] = inst_34139);

(statearr_34238_34284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (28))){
var inst_34186 = (state_34220[(2)]);
var inst_34187 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34188 = figwheel.client.heads_up.display_warning.call(null,inst_34187);
var state_34220__$1 = (function (){var statearr_34239 = state_34220;
(statearr_34239[(8)] = inst_34186);

return statearr_34239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(29),inst_34188);
} else {
if((state_val_34221 === (25))){
var inst_34184 = figwheel.client.heads_up.clear.call(null);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(28),inst_34184);
} else {
if((state_val_34221 === (34))){
var inst_34201 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(37),inst_34201);
} else {
if((state_val_34221 === (17))){
var inst_34166 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34240_34285 = state_34220__$1;
(statearr_34240_34285[(2)] = inst_34166);

(statearr_34240_34285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (3))){
var inst_34156 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34156)){
var statearr_34241_34286 = state_34220__$1;
(statearr_34241_34286[(1)] = (13));

} else {
var statearr_34242_34287 = state_34220__$1;
(statearr_34242_34287[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (12))){
var inst_34152 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34243_34288 = state_34220__$1;
(statearr_34243_34288[(2)] = inst_34152);

(statearr_34243_34288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (2))){
var inst_34139 = (state_34220[(7)]);
var inst_34139__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34220__$1 = (function (){var statearr_34244 = state_34220;
(statearr_34244[(7)] = inst_34139__$1);

return statearr_34244;
})();
if(cljs.core.truth_(inst_34139__$1)){
var statearr_34245_34289 = state_34220__$1;
(statearr_34245_34289[(1)] = (5));

} else {
var statearr_34246_34290 = state_34220__$1;
(statearr_34246_34290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (23))){
var inst_34182 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34182)){
var statearr_34247_34291 = state_34220__$1;
(statearr_34247_34291[(1)] = (25));

} else {
var statearr_34248_34292 = state_34220__$1;
(statearr_34248_34292[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (35))){
var state_34220__$1 = state_34220;
var statearr_34249_34293 = state_34220__$1;
(statearr_34249_34293[(2)] = null);

(statearr_34249_34293[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (19))){
var inst_34177 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34177)){
var statearr_34250_34294 = state_34220__$1;
(statearr_34250_34294[(1)] = (22));

} else {
var statearr_34251_34295 = state_34220__$1;
(statearr_34251_34295[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (11))){
var inst_34148 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34252_34296 = state_34220__$1;
(statearr_34252_34296[(2)] = inst_34148);

(statearr_34252_34296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (9))){
var inst_34150 = figwheel.client.heads_up.clear.call(null);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(12),inst_34150);
} else {
if((state_val_34221 === (5))){
var inst_34141 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34220__$1 = state_34220;
var statearr_34253_34297 = state_34220__$1;
(statearr_34253_34297[(2)] = inst_34141);

(statearr_34253_34297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (14))){
var inst_34168 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34168)){
var statearr_34254_34298 = state_34220__$1;
(statearr_34254_34298[(1)] = (18));

} else {
var statearr_34255_34299 = state_34220__$1;
(statearr_34255_34299[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (26))){
var inst_34192 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34220__$1 = state_34220;
if(cljs.core.truth_(inst_34192)){
var statearr_34256_34300 = state_34220__$1;
(statearr_34256_34300[(1)] = (30));

} else {
var statearr_34257_34301 = state_34220__$1;
(statearr_34257_34301[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (16))){
var inst_34160 = (state_34220[(2)]);
var inst_34161 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34162 = figwheel.client.format_messages.call(null,inst_34161);
var inst_34163 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34164 = figwheel.client.heads_up.display_error.call(null,inst_34162,inst_34163);
var state_34220__$1 = (function (){var statearr_34258 = state_34220;
(statearr_34258[(9)] = inst_34160);

return statearr_34258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(17),inst_34164);
} else {
if((state_val_34221 === (30))){
var inst_34194 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34195 = figwheel.client.heads_up.display_warning.call(null,inst_34194);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(33),inst_34195);
} else {
if((state_val_34221 === (10))){
var inst_34154 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34259_34302 = state_34220__$1;
(statearr_34259_34302[(2)] = inst_34154);

(statearr_34259_34302[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (18))){
var inst_34170 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34171 = figwheel.client.format_messages.call(null,inst_34170);
var inst_34172 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34173 = figwheel.client.heads_up.display_error.call(null,inst_34171,inst_34172);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(21),inst_34173);
} else {
if((state_val_34221 === (37))){
var inst_34203 = (state_34220[(2)]);
var state_34220__$1 = state_34220;
var statearr_34260_34303 = state_34220__$1;
(statearr_34260_34303[(2)] = inst_34203);

(statearr_34260_34303[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34221 === (8))){
var inst_34146 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34220__$1 = state_34220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34220__$1,(11),inst_34146);
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
}
}
});})(c__22242__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22177__auto__,c__22242__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto____0 = (function (){
var statearr_34264 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34264[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto__);

(statearr_34264[(1)] = (1));

return statearr_34264;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto____1 = (function (state_34220){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_34220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e34265){if((e34265 instanceof Object)){
var ex__22181__auto__ = e34265;
var statearr_34266_34304 = state_34220;
(statearr_34266_34304[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34305 = state_34220;
state_34220 = G__34305;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto__ = function(state_34220){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto____1.call(this,state_34220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,msg_hist,msg_names,msg))
})();
var state__22244__auto__ = (function (){var statearr_34267 = f__22243__auto__.call(null);
(statearr_34267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_34267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,msg_hist,msg_names,msg))
);

return c__22242__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22242__auto___34368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___34368,ch){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___34368,ch){
return (function (state_34351){
var state_val_34352 = (state_34351[(1)]);
if((state_val_34352 === (1))){
var state_34351__$1 = state_34351;
var statearr_34353_34369 = state_34351__$1;
(statearr_34353_34369[(2)] = null);

(statearr_34353_34369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (2))){
var state_34351__$1 = state_34351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34351__$1,(4),ch);
} else {
if((state_val_34352 === (3))){
var inst_34349 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34351__$1,inst_34349);
} else {
if((state_val_34352 === (4))){
var inst_34339 = (state_34351[(7)]);
var inst_34339__$1 = (state_34351[(2)]);
var state_34351__$1 = (function (){var statearr_34354 = state_34351;
(statearr_34354[(7)] = inst_34339__$1);

return statearr_34354;
})();
if(cljs.core.truth_(inst_34339__$1)){
var statearr_34355_34370 = state_34351__$1;
(statearr_34355_34370[(1)] = (5));

} else {
var statearr_34356_34371 = state_34351__$1;
(statearr_34356_34371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (5))){
var inst_34339 = (state_34351[(7)]);
var inst_34341 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34339);
var state_34351__$1 = state_34351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34351__$1,(8),inst_34341);
} else {
if((state_val_34352 === (6))){
var state_34351__$1 = state_34351;
var statearr_34357_34372 = state_34351__$1;
(statearr_34357_34372[(2)] = null);

(statearr_34357_34372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (7))){
var inst_34347 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
var statearr_34358_34373 = state_34351__$1;
(statearr_34358_34373[(2)] = inst_34347);

(statearr_34358_34373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (8))){
var inst_34343 = (state_34351[(2)]);
var state_34351__$1 = (function (){var statearr_34359 = state_34351;
(statearr_34359[(8)] = inst_34343);

return statearr_34359;
})();
var statearr_34360_34374 = state_34351__$1;
(statearr_34360_34374[(2)] = null);

(statearr_34360_34374[(1)] = (2));


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
});})(c__22242__auto___34368,ch))
;
return ((function (switch__22177__auto__,c__22242__auto___34368,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22178__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22178__auto____0 = (function (){
var statearr_34364 = [null,null,null,null,null,null,null,null,null];
(statearr_34364[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22178__auto__);

(statearr_34364[(1)] = (1));

return statearr_34364;
});
var figwheel$client$heads_up_plugin_$_state_machine__22178__auto____1 = (function (state_34351){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_34351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e34365){if((e34365 instanceof Object)){
var ex__22181__auto__ = e34365;
var statearr_34366_34375 = state_34351;
(statearr_34366_34375[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34376 = state_34351;
state_34351 = G__34376;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22178__auto__ = function(state_34351){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22178__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22178__auto____1.call(this,state_34351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22178__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22178__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___34368,ch))
})();
var state__22244__auto__ = (function (){var statearr_34367 = f__22243__auto__.call(null);
(statearr_34367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___34368);

return statearr_34367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___34368,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__){
return (function (state_34397){
var state_val_34398 = (state_34397[(1)]);
if((state_val_34398 === (1))){
var inst_34392 = cljs.core.async.timeout.call(null,(3000));
var state_34397__$1 = state_34397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34397__$1,(2),inst_34392);
} else {
if((state_val_34398 === (2))){
var inst_34394 = (state_34397[(2)]);
var inst_34395 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34397__$1 = (function (){var statearr_34399 = state_34397;
(statearr_34399[(7)] = inst_34394);

return statearr_34399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34397__$1,inst_34395);
} else {
return null;
}
}
});})(c__22242__auto__))
;
return ((function (switch__22177__auto__,c__22242__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22178__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22178__auto____0 = (function (){
var statearr_34403 = [null,null,null,null,null,null,null,null];
(statearr_34403[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22178__auto__);

(statearr_34403[(1)] = (1));

return statearr_34403;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22178__auto____1 = (function (state_34397){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_34397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e34404){if((e34404 instanceof Object)){
var ex__22181__auto__ = e34404;
var statearr_34405_34407 = state_34397;
(statearr_34405_34407[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34408 = state_34397;
state_34397 = G__34408;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22178__auto__ = function(state_34397){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22178__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22178__auto____1.call(this,state_34397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22178__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22178__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__))
})();
var state__22244__auto__ = (function (){var statearr_34406 = f__22243__auto__.call(null);
(statearr_34406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_34406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__))
);

return c__22242__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34409){
var map__34416 = p__34409;
var map__34416__$1 = ((((!((map__34416 == null)))?((((map__34416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34416):map__34416);
var ed = map__34416__$1;
var formatted_exception = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34416__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34418_34422 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34419_34423 = null;
var count__34420_34424 = (0);
var i__34421_34425 = (0);
while(true){
if((i__34421_34425 < count__34420_34424)){
var msg_34426 = cljs.core._nth.call(null,chunk__34419_34423,i__34421_34425);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34426);

var G__34427 = seq__34418_34422;
var G__34428 = chunk__34419_34423;
var G__34429 = count__34420_34424;
var G__34430 = (i__34421_34425 + (1));
seq__34418_34422 = G__34427;
chunk__34419_34423 = G__34428;
count__34420_34424 = G__34429;
i__34421_34425 = G__34430;
continue;
} else {
var temp__4425__auto___34431 = cljs.core.seq.call(null,seq__34418_34422);
if(temp__4425__auto___34431){
var seq__34418_34432__$1 = temp__4425__auto___34431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34418_34432__$1)){
var c__19965__auto___34433 = cljs.core.chunk_first.call(null,seq__34418_34432__$1);
var G__34434 = cljs.core.chunk_rest.call(null,seq__34418_34432__$1);
var G__34435 = c__19965__auto___34433;
var G__34436 = cljs.core.count.call(null,c__19965__auto___34433);
var G__34437 = (0);
seq__34418_34422 = G__34434;
chunk__34419_34423 = G__34435;
count__34420_34424 = G__34436;
i__34421_34425 = G__34437;
continue;
} else {
var msg_34438 = cljs.core.first.call(null,seq__34418_34432__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34438);

var G__34439 = cljs.core.next.call(null,seq__34418_34432__$1);
var G__34440 = null;
var G__34441 = (0);
var G__34442 = (0);
seq__34418_34422 = G__34439;
chunk__34419_34423 = G__34440;
count__34420_34424 = G__34441;
i__34421_34425 = G__34442;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34443){
var map__34446 = p__34443;
var map__34446__$1 = ((((!((map__34446 == null)))?((((map__34446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34446):map__34446);
var w = map__34446__$1;
var message = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__19150__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__19150__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__19150__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34454 = cljs.core.seq.call(null,plugins);
var chunk__34455 = null;
var count__34456 = (0);
var i__34457 = (0);
while(true){
if((i__34457 < count__34456)){
var vec__34458 = cljs.core._nth.call(null,chunk__34455,i__34457);
var k = cljs.core.nth.call(null,vec__34458,(0),null);
var plugin = cljs.core.nth.call(null,vec__34458,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34460 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34454,chunk__34455,count__34456,i__34457,pl_34460,vec__34458,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34460.call(null,msg_hist);
});})(seq__34454,chunk__34455,count__34456,i__34457,pl_34460,vec__34458,k,plugin))
);
} else {
}

var G__34461 = seq__34454;
var G__34462 = chunk__34455;
var G__34463 = count__34456;
var G__34464 = (i__34457 + (1));
seq__34454 = G__34461;
chunk__34455 = G__34462;
count__34456 = G__34463;
i__34457 = G__34464;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34454);
if(temp__4425__auto__){
var seq__34454__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34454__$1)){
var c__19965__auto__ = cljs.core.chunk_first.call(null,seq__34454__$1);
var G__34465 = cljs.core.chunk_rest.call(null,seq__34454__$1);
var G__34466 = c__19965__auto__;
var G__34467 = cljs.core.count.call(null,c__19965__auto__);
var G__34468 = (0);
seq__34454 = G__34465;
chunk__34455 = G__34466;
count__34456 = G__34467;
i__34457 = G__34468;
continue;
} else {
var vec__34459 = cljs.core.first.call(null,seq__34454__$1);
var k = cljs.core.nth.call(null,vec__34459,(0),null);
var plugin = cljs.core.nth.call(null,vec__34459,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34469 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34454,chunk__34455,count__34456,i__34457,pl_34469,vec__34459,k,plugin,seq__34454__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34469.call(null,msg_hist);
});})(seq__34454,chunk__34455,count__34456,i__34457,pl_34469,vec__34459,k,plugin,seq__34454__$1,temp__4425__auto__))
);
} else {
}

var G__34470 = cljs.core.next.call(null,seq__34454__$1);
var G__34471 = null;
var G__34472 = (0);
var G__34473 = (0);
seq__34454 = G__34470;
chunk__34455 = G__34471;
count__34456 = G__34472;
i__34457 = G__34473;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args34474 = [];
var len__20220__auto___34477 = arguments.length;
var i__20221__auto___34478 = (0);
while(true){
if((i__20221__auto___34478 < len__20220__auto___34477)){
args34474.push((arguments[i__20221__auto___34478]));

var G__34479 = (i__20221__auto___34478 + (1));
i__20221__auto___34478 = G__34479;
continue;
} else {
}
break;
}

var G__34476 = args34474.length;
switch (G__34476) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34474.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__20227__auto__ = [];
var len__20220__auto___34485 = arguments.length;
var i__20221__auto___34486 = (0);
while(true){
if((i__20221__auto___34486 < len__20220__auto___34485)){
args__20227__auto__.push((arguments[i__20221__auto___34486]));

var G__34487 = (i__20221__auto___34486 + (1));
i__20221__auto___34486 = G__34487;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34482){
var map__34483 = p__34482;
var map__34483__$1 = ((((!((map__34483 == null)))?((((map__34483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34483):map__34483);
var opts = map__34483__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34481){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34481));
});

//# sourceMappingURL=client.js.map