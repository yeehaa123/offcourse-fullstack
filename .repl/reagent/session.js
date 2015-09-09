// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__35263__auto__ = [];
var len__35256__auto___43543 = arguments.length;
var i__35257__auto___43544 = (0);
while(true){
if((i__35257__auto___43544 < len__35256__auto___43543)){
args__35263__auto__.push((arguments[i__35257__auto___43544]));

var G__43545 = (i__35257__auto___43544 + (1));
i__35257__auto___43544 = G__43545;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__43541){
var vec__43542 = p__43541;
var default$ = cljs.core.nth.call(null,vec__43542,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq43539){
var G__43540 = cljs.core.first.call(null,seq43539);
var seq43539__$1 = cljs.core.next.call(null,seq43539);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__43540,seq43539__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__35263__auto__ = [];
var len__35256__auto___43550 = arguments.length;
var i__35257__auto___43551 = (0);
while(true){
if((i__35257__auto___43551 < len__35256__auto___43550)){
args__35263__auto__.push((arguments[i__35257__auto___43551]));

var G__43552 = (i__35257__auto___43551 + (1));
i__35257__auto___43551 = G__43552;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__43548){
var vec__43549 = p__43548;
var default$ = cljs.core.nth.call(null,vec__43549,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq43546){
var G__43547 = cljs.core.first.call(null,seq43546);
var seq43546__$1 = cljs.core.next.call(null,seq43546);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__43547,seq43546__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__35263__auto__ = [];
var len__35256__auto___43555 = arguments.length;
var i__35257__auto___43556 = (0);
while(true){
if((i__35257__auto___43556 < len__35256__auto___43555)){
args__35263__auto__.push((arguments[i__35257__auto___43556]));

var G__43557 = (i__35257__auto___43556 + (1));
i__35257__auto___43556 = G__43557;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq43553){
var G__43554 = cljs.core.first.call(null,seq43553);
var seq43553__$1 = cljs.core.next.call(null,seq43553);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43554,seq43553__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__43558_SHARP_){
return cljs.core.assoc_in.call(null,p1__43558_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__35263__auto__ = [];
var len__35256__auto___43563 = arguments.length;
var i__35257__auto___43564 = (0);
while(true){
if((i__35257__auto___43564 < len__35256__auto___43563)){
args__35263__auto__.push((arguments[i__35257__auto___43564]));

var G__43565 = (i__35257__auto___43564 + (1));
i__35257__auto___43564 = G__43565;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__43561){
var vec__43562 = p__43561;
var default$ = cljs.core.nth.call(null,vec__43562,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq43559){
var G__43560 = cljs.core.first.call(null,seq43559);
var seq43559__$1 = cljs.core.next.call(null,seq43559);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43560,seq43559__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__35263__auto__ = [];
var len__35256__auto___43570 = arguments.length;
var i__35257__auto___43571 = (0);
while(true){
if((i__35257__auto___43571 < len__35256__auto___43570)){
args__35263__auto__.push((arguments[i__35257__auto___43571]));

var G__43572 = (i__35257__auto___43571 + (1));
i__35257__auto___43571 = G__43572;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__43568){
var vec__43569 = p__43568;
var default$ = cljs.core.nth.call(null,vec__43569,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq43566){
var G__43567 = cljs.core.first.call(null,seq43566);
var seq43566__$1 = cljs.core.next.call(null,seq43566);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43567,seq43566__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__35263__auto__ = [];
var len__35256__auto___43577 = arguments.length;
var i__35257__auto___43578 = (0);
while(true){
if((i__35257__auto___43578 < len__35256__auto___43577)){
args__35263__auto__.push((arguments[i__35257__auto___43578]));

var G__43579 = (i__35257__auto___43578 + (1));
i__35257__auto___43578 = G__43579;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((2) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35264__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__43573_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__43573_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq43574){
var G__43575 = cljs.core.first.call(null,seq43574);
var seq43574__$1 = cljs.core.next.call(null,seq43574);
var G__43576 = cljs.core.first.call(null,seq43574__$1);
var seq43574__$2 = cljs.core.next.call(null,seq43574__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43575,G__43576,seq43574__$2);
});
