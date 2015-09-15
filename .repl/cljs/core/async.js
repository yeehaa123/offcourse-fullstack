// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async60620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60620 = (function (fn_handler,f,meta60621){
this.fn_handler = fn_handler;
this.f = f;
this.meta60621 = meta60621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60622,meta60621__$1){
var self__ = this;
var _60622__$1 = this;
return (new cljs.core.async.t_cljs$core$async60620(self__.fn_handler,self__.f,meta60621__$1));
});

cljs.core.async.t_cljs$core$async60620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60622){
var self__ = this;
var _60622__$1 = this;
return self__.meta60621;
});

cljs.core.async.t_cljs$core$async60620.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async60620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async60620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async60620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta60621","meta60621",-2037369404,null)], null);
});

cljs.core.async.t_cljs$core$async60620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60620";

cljs.core.async.t_cljs$core$async60620.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async60620");
});

cljs.core.async.__GT_t_cljs$core$async60620 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async60620(fn_handler__$1,f__$1,meta60621){
return (new cljs.core.async.t_cljs$core$async60620(fn_handler__$1,f__$1,meta60621));
});

}

return (new cljs.core.async.t_cljs$core$async60620(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args60625 = [];
var len__35256__auto___60628 = arguments.length;
var i__35257__auto___60629 = (0);
while(true){
if((i__35257__auto___60629 < len__35256__auto___60628)){
args60625.push((arguments[i__35257__auto___60629]));

var G__60630 = (i__35257__auto___60629 + (1));
i__35257__auto___60629 = G__60630;
continue;
} else {
}
break;
}

var G__60627 = args60625.length;
switch (G__60627) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60625.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args60632 = [];
var len__35256__auto___60635 = arguments.length;
var i__35257__auto___60636 = (0);
while(true){
if((i__35257__auto___60636 < len__35256__auto___60635)){
args60632.push((arguments[i__35257__auto___60636]));

var G__60637 = (i__35257__auto___60636 + (1));
i__35257__auto___60636 = G__60637;
continue;
} else {
}
break;
}

var G__60634 = args60632.length;
switch (G__60634) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60632.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_60639 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_60639);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_60639,ret){
return (function (){
return fn1.call(null,val_60639);
});})(val_60639,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args60640 = [];
var len__35256__auto___60643 = arguments.length;
var i__35257__auto___60644 = (0);
while(true){
if((i__35257__auto___60644 < len__35256__auto___60643)){
args60640.push((arguments[i__35257__auto___60644]));

var G__60645 = (i__35257__auto___60644 + (1));
i__35257__auto___60644 = G__60645;
continue;
} else {
}
break;
}

var G__60642 = args60640.length;
switch (G__60642) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60640.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__35101__auto___60647 = n;
var x_60648 = (0);
while(true){
if((x_60648 < n__35101__auto___60647)){
(a[x_60648] = (0));

var G__60649 = (x_60648 + (1));
x_60648 = G__60649;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__60650 = (i + (1));
i = G__60650;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async60654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60654 = (function (alt_flag,flag,meta60655){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta60655 = meta60655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_60656,meta60655__$1){
var self__ = this;
var _60656__$1 = this;
return (new cljs.core.async.t_cljs$core$async60654(self__.alt_flag,self__.flag,meta60655__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async60654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_60656){
var self__ = this;
var _60656__$1 = this;
return self__.meta60655;
});})(flag))
;

cljs.core.async.t_cljs$core$async60654.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async60654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async60654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async60654.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta60655","meta60655",-1427676476,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async60654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60654";

cljs.core.async.t_cljs$core$async60654.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async60654");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async60654 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async60654(alt_flag__$1,flag__$1,meta60655){
return (new cljs.core.async.t_cljs$core$async60654(alt_flag__$1,flag__$1,meta60655));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async60654(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async60660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async60660 = (function (alt_handler,flag,cb,meta60661){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta60661 = meta60661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async60660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60662,meta60661__$1){
var self__ = this;
var _60662__$1 = this;
return (new cljs.core.async.t_cljs$core$async60660(self__.alt_handler,self__.flag,self__.cb,meta60661__$1));
});

cljs.core.async.t_cljs$core$async60660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60662){
var self__ = this;
var _60662__$1 = this;
return self__.meta60661;
});

cljs.core.async.t_cljs$core$async60660.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async60660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async60660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async60660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta60661","meta60661",-869774593,null)], null);
});

cljs.core.async.t_cljs$core$async60660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async60660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async60660";

cljs.core.async.t_cljs$core$async60660.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async60660");
});

cljs.core.async.__GT_t_cljs$core$async60660 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async60660(alt_handler__$1,flag__$1,cb__$1,meta60661){
return (new cljs.core.async.t_cljs$core$async60660(alt_handler__$1,flag__$1,cb__$1,meta60661));
});

}

return (new cljs.core.async.t_cljs$core$async60660(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60663_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60663_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__60664_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60664_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34198__auto__ = wport;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return port;
}
})()], null));
} else {
var G__60665 = (i + (1));
i = G__60665;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34198__auto__ = ret;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__34186__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34186__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34186__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__35263__auto__ = [];
var len__35256__auto___60671 = arguments.length;
var i__35257__auto___60672 = (0);
while(true){
if((i__35257__auto___60672 < len__35256__auto___60671)){
args__35263__auto__.push((arguments[i__35257__auto___60672]));

var G__60673 = (i__35257__auto___60672 + (1));
i__35257__auto___60672 = G__60673;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__60668){
var map__60669 = p__60668;
var map__60669__$1 = ((((!((map__60669 == null)))?((((map__60669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__60669):map__60669);
var opts = map__60669__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq60666){
var G__60667 = cljs.core.first.call(null,seq60666);
var seq60666__$1 = cljs.core.next.call(null,seq60666);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60667,seq60666__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args60674 = [];
var len__35256__auto___60724 = arguments.length;
var i__35257__auto___60725 = (0);
while(true){
if((i__35257__auto___60725 < len__35256__auto___60724)){
args60674.push((arguments[i__35257__auto___60725]));

var G__60726 = (i__35257__auto___60725 + (1));
i__35257__auto___60725 = G__60726;
continue;
} else {
}
break;
}

var G__60676 = args60674.length;
switch (G__60676) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args60674.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37548__auto___60728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___60728){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___60728){
return (function (state_60700){
var state_val_60701 = (state_60700[(1)]);
if((state_val_60701 === (7))){
var inst_60696 = (state_60700[(2)]);
var state_60700__$1 = state_60700;
var statearr_60702_60729 = state_60700__$1;
(statearr_60702_60729[(2)] = inst_60696);

(statearr_60702_60729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (1))){
var state_60700__$1 = state_60700;
var statearr_60703_60730 = state_60700__$1;
(statearr_60703_60730[(2)] = null);

(statearr_60703_60730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (4))){
var inst_60679 = (state_60700[(7)]);
var inst_60679__$1 = (state_60700[(2)]);
var inst_60680 = (inst_60679__$1 == null);
var state_60700__$1 = (function (){var statearr_60704 = state_60700;
(statearr_60704[(7)] = inst_60679__$1);

return statearr_60704;
})();
if(cljs.core.truth_(inst_60680)){
var statearr_60705_60731 = state_60700__$1;
(statearr_60705_60731[(1)] = (5));

} else {
var statearr_60706_60732 = state_60700__$1;
(statearr_60706_60732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (13))){
var state_60700__$1 = state_60700;
var statearr_60707_60733 = state_60700__$1;
(statearr_60707_60733[(2)] = null);

(statearr_60707_60733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (6))){
var inst_60679 = (state_60700[(7)]);
var state_60700__$1 = state_60700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60700__$1,(11),to,inst_60679);
} else {
if((state_val_60701 === (3))){
var inst_60698 = (state_60700[(2)]);
var state_60700__$1 = state_60700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60700__$1,inst_60698);
} else {
if((state_val_60701 === (12))){
var state_60700__$1 = state_60700;
var statearr_60708_60734 = state_60700__$1;
(statearr_60708_60734[(2)] = null);

(statearr_60708_60734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (2))){
var state_60700__$1 = state_60700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60700__$1,(4),from);
} else {
if((state_val_60701 === (11))){
var inst_60689 = (state_60700[(2)]);
var state_60700__$1 = state_60700;
if(cljs.core.truth_(inst_60689)){
var statearr_60709_60735 = state_60700__$1;
(statearr_60709_60735[(1)] = (12));

} else {
var statearr_60710_60736 = state_60700__$1;
(statearr_60710_60736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (9))){
var state_60700__$1 = state_60700;
var statearr_60711_60737 = state_60700__$1;
(statearr_60711_60737[(2)] = null);

(statearr_60711_60737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (5))){
var state_60700__$1 = state_60700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_60712_60738 = state_60700__$1;
(statearr_60712_60738[(1)] = (8));

} else {
var statearr_60713_60739 = state_60700__$1;
(statearr_60713_60739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (14))){
var inst_60694 = (state_60700[(2)]);
var state_60700__$1 = state_60700;
var statearr_60714_60740 = state_60700__$1;
(statearr_60714_60740[(2)] = inst_60694);

(statearr_60714_60740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (10))){
var inst_60686 = (state_60700[(2)]);
var state_60700__$1 = state_60700;
var statearr_60715_60741 = state_60700__$1;
(statearr_60715_60741[(2)] = inst_60686);

(statearr_60715_60741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60701 === (8))){
var inst_60683 = cljs.core.async.close_BANG_.call(null,to);
var state_60700__$1 = state_60700;
var statearr_60716_60742 = state_60700__$1;
(statearr_60716_60742[(2)] = inst_60683);

(statearr_60716_60742[(1)] = (10));


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
});})(c__37548__auto___60728))
;
return ((function (switch__37483__auto__,c__37548__auto___60728){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_60720 = [null,null,null,null,null,null,null,null];
(statearr_60720[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_60720[(1)] = (1));

return statearr_60720;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_60700){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_60700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e60721){if((e60721 instanceof Object)){
var ex__37487__auto__ = e60721;
var statearr_60722_60743 = state_60700;
(statearr_60722_60743[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60744 = state_60700;
state_60700 = G__60744;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_60700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_60700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___60728))
})();
var state__37550__auto__ = (function (){var statearr_60723 = f__37549__auto__.call(null);
(statearr_60723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___60728);

return statearr_60723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___60728))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__60928){
var vec__60929 = p__60928;
var v = cljs.core.nth.call(null,vec__60929,(0),null);
var p = cljs.core.nth.call(null,vec__60929,(1),null);
var job = vec__60929;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37548__auto___61111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___61111,res,vec__60929,v,p,job,jobs,results){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___61111,res,vec__60929,v,p,job,jobs,results){
return (function (state_60934){
var state_val_60935 = (state_60934[(1)]);
if((state_val_60935 === (1))){
var state_60934__$1 = state_60934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60934__$1,(2),res,v);
} else {
if((state_val_60935 === (2))){
var inst_60931 = (state_60934[(2)]);
var inst_60932 = cljs.core.async.close_BANG_.call(null,res);
var state_60934__$1 = (function (){var statearr_60936 = state_60934;
(statearr_60936[(7)] = inst_60931);

return statearr_60936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60934__$1,inst_60932);
} else {
return null;
}
}
});})(c__37548__auto___61111,res,vec__60929,v,p,job,jobs,results))
;
return ((function (switch__37483__auto__,c__37548__auto___61111,res,vec__60929,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0 = (function (){
var statearr_60940 = [null,null,null,null,null,null,null,null];
(statearr_60940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__);

(statearr_60940[(1)] = (1));

return statearr_60940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1 = (function (state_60934){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_60934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e60941){if((e60941 instanceof Object)){
var ex__37487__auto__ = e60941;
var statearr_60942_61112 = state_60934;
(statearr_60942_61112[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61113 = state_60934;
state_60934 = G__61113;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = function(state_60934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1.call(this,state_60934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___61111,res,vec__60929,v,p,job,jobs,results))
})();
var state__37550__auto__ = (function (){var statearr_60943 = f__37549__auto__.call(null);
(statearr_60943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___61111);

return statearr_60943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___61111,res,vec__60929,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__60944){
var vec__60945 = p__60944;
var v = cljs.core.nth.call(null,vec__60945,(0),null);
var p = cljs.core.nth.call(null,vec__60945,(1),null);
var job = vec__60945;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__35101__auto___61114 = n;
var __61115 = (0);
while(true){
if((__61115 < n__35101__auto___61114)){
var G__60946_61116 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__60946_61116) {
case "compute":
var c__37548__auto___61118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__61115,c__37548__auto___61118,G__60946_61116,n__35101__auto___61114,jobs,results,process,async){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (__61115,c__37548__auto___61118,G__60946_61116,n__35101__auto___61114,jobs,results,process,async){
return (function (state_60959){
var state_val_60960 = (state_60959[(1)]);
if((state_val_60960 === (1))){
var state_60959__$1 = state_60959;
var statearr_60961_61119 = state_60959__$1;
(statearr_60961_61119[(2)] = null);

(statearr_60961_61119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60960 === (2))){
var state_60959__$1 = state_60959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60959__$1,(4),jobs);
} else {
if((state_val_60960 === (3))){
var inst_60957 = (state_60959[(2)]);
var state_60959__$1 = state_60959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60959__$1,inst_60957);
} else {
if((state_val_60960 === (4))){
var inst_60949 = (state_60959[(2)]);
var inst_60950 = process.call(null,inst_60949);
var state_60959__$1 = state_60959;
if(cljs.core.truth_(inst_60950)){
var statearr_60962_61120 = state_60959__$1;
(statearr_60962_61120[(1)] = (5));

} else {
var statearr_60963_61121 = state_60959__$1;
(statearr_60963_61121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60960 === (5))){
var state_60959__$1 = state_60959;
var statearr_60964_61122 = state_60959__$1;
(statearr_60964_61122[(2)] = null);

(statearr_60964_61122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60960 === (6))){
var state_60959__$1 = state_60959;
var statearr_60965_61123 = state_60959__$1;
(statearr_60965_61123[(2)] = null);

(statearr_60965_61123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60960 === (7))){
var inst_60955 = (state_60959[(2)]);
var state_60959__$1 = state_60959;
var statearr_60966_61124 = state_60959__$1;
(statearr_60966_61124[(2)] = inst_60955);

(statearr_60966_61124[(1)] = (3));


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
});})(__61115,c__37548__auto___61118,G__60946_61116,n__35101__auto___61114,jobs,results,process,async))
;
return ((function (__61115,switch__37483__auto__,c__37548__auto___61118,G__60946_61116,n__35101__auto___61114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0 = (function (){
var statearr_60970 = [null,null,null,null,null,null,null];
(statearr_60970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__);

(statearr_60970[(1)] = (1));

return statearr_60970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1 = (function (state_60959){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_60959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e60971){if((e60971 instanceof Object)){
var ex__37487__auto__ = e60971;
var statearr_60972_61125 = state_60959;
(statearr_60972_61125[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61126 = state_60959;
state_60959 = G__61126;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = function(state_60959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1.call(this,state_60959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__;
})()
;})(__61115,switch__37483__auto__,c__37548__auto___61118,G__60946_61116,n__35101__auto___61114,jobs,results,process,async))
})();
var state__37550__auto__ = (function (){var statearr_60973 = f__37549__auto__.call(null);
(statearr_60973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___61118);

return statearr_60973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(__61115,c__37548__auto___61118,G__60946_61116,n__35101__auto___61114,jobs,results,process,async))
);


break;
case "async":
var c__37548__auto___61127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__61115,c__37548__auto___61127,G__60946_61116,n__35101__auto___61114,jobs,results,process,async){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (__61115,c__37548__auto___61127,G__60946_61116,n__35101__auto___61114,jobs,results,process,async){
return (function (state_60986){
var state_val_60987 = (state_60986[(1)]);
if((state_val_60987 === (1))){
var state_60986__$1 = state_60986;
var statearr_60988_61128 = state_60986__$1;
(statearr_60988_61128[(2)] = null);

(statearr_60988_61128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60987 === (2))){
var state_60986__$1 = state_60986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60986__$1,(4),jobs);
} else {
if((state_val_60987 === (3))){
var inst_60984 = (state_60986[(2)]);
var state_60986__$1 = state_60986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60986__$1,inst_60984);
} else {
if((state_val_60987 === (4))){
var inst_60976 = (state_60986[(2)]);
var inst_60977 = async.call(null,inst_60976);
var state_60986__$1 = state_60986;
if(cljs.core.truth_(inst_60977)){
var statearr_60989_61129 = state_60986__$1;
(statearr_60989_61129[(1)] = (5));

} else {
var statearr_60990_61130 = state_60986__$1;
(statearr_60990_61130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60987 === (5))){
var state_60986__$1 = state_60986;
var statearr_60991_61131 = state_60986__$1;
(statearr_60991_61131[(2)] = null);

(statearr_60991_61131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60987 === (6))){
var state_60986__$1 = state_60986;
var statearr_60992_61132 = state_60986__$1;
(statearr_60992_61132[(2)] = null);

(statearr_60992_61132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60987 === (7))){
var inst_60982 = (state_60986[(2)]);
var state_60986__$1 = state_60986;
var statearr_60993_61133 = state_60986__$1;
(statearr_60993_61133[(2)] = inst_60982);

(statearr_60993_61133[(1)] = (3));


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
});})(__61115,c__37548__auto___61127,G__60946_61116,n__35101__auto___61114,jobs,results,process,async))
;
return ((function (__61115,switch__37483__auto__,c__37548__auto___61127,G__60946_61116,n__35101__auto___61114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0 = (function (){
var statearr_60997 = [null,null,null,null,null,null,null];
(statearr_60997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__);

(statearr_60997[(1)] = (1));

return statearr_60997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1 = (function (state_60986){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_60986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e60998){if((e60998 instanceof Object)){
var ex__37487__auto__ = e60998;
var statearr_60999_61134 = state_60986;
(statearr_60999_61134[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61135 = state_60986;
state_60986 = G__61135;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = function(state_60986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1.call(this,state_60986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__;
})()
;})(__61115,switch__37483__auto__,c__37548__auto___61127,G__60946_61116,n__35101__auto___61114,jobs,results,process,async))
})();
var state__37550__auto__ = (function (){var statearr_61000 = f__37549__auto__.call(null);
(statearr_61000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___61127);

return statearr_61000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(__61115,c__37548__auto___61127,G__60946_61116,n__35101__auto___61114,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__61136 = (__61115 + (1));
__61115 = G__61136;
continue;
} else {
}
break;
}

var c__37548__auto___61137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___61137,jobs,results,process,async){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___61137,jobs,results,process,async){
return (function (state_61022){
var state_val_61023 = (state_61022[(1)]);
if((state_val_61023 === (1))){
var state_61022__$1 = state_61022;
var statearr_61024_61138 = state_61022__$1;
(statearr_61024_61138[(2)] = null);

(statearr_61024_61138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61023 === (2))){
var state_61022__$1 = state_61022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61022__$1,(4),from);
} else {
if((state_val_61023 === (3))){
var inst_61020 = (state_61022[(2)]);
var state_61022__$1 = state_61022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61022__$1,inst_61020);
} else {
if((state_val_61023 === (4))){
var inst_61003 = (state_61022[(7)]);
var inst_61003__$1 = (state_61022[(2)]);
var inst_61004 = (inst_61003__$1 == null);
var state_61022__$1 = (function (){var statearr_61025 = state_61022;
(statearr_61025[(7)] = inst_61003__$1);

return statearr_61025;
})();
if(cljs.core.truth_(inst_61004)){
var statearr_61026_61139 = state_61022__$1;
(statearr_61026_61139[(1)] = (5));

} else {
var statearr_61027_61140 = state_61022__$1;
(statearr_61027_61140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61023 === (5))){
var inst_61006 = cljs.core.async.close_BANG_.call(null,jobs);
var state_61022__$1 = state_61022;
var statearr_61028_61141 = state_61022__$1;
(statearr_61028_61141[(2)] = inst_61006);

(statearr_61028_61141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61023 === (6))){
var inst_61003 = (state_61022[(7)]);
var inst_61008 = (state_61022[(8)]);
var inst_61008__$1 = cljs.core.async.chan.call(null,(1));
var inst_61009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61010 = [inst_61003,inst_61008__$1];
var inst_61011 = (new cljs.core.PersistentVector(null,2,(5),inst_61009,inst_61010,null));
var state_61022__$1 = (function (){var statearr_61029 = state_61022;
(statearr_61029[(8)] = inst_61008__$1);

return statearr_61029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61022__$1,(8),jobs,inst_61011);
} else {
if((state_val_61023 === (7))){
var inst_61018 = (state_61022[(2)]);
var state_61022__$1 = state_61022;
var statearr_61030_61142 = state_61022__$1;
(statearr_61030_61142[(2)] = inst_61018);

(statearr_61030_61142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61023 === (8))){
var inst_61008 = (state_61022[(8)]);
var inst_61013 = (state_61022[(2)]);
var state_61022__$1 = (function (){var statearr_61031 = state_61022;
(statearr_61031[(9)] = inst_61013);

return statearr_61031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61022__$1,(9),results,inst_61008);
} else {
if((state_val_61023 === (9))){
var inst_61015 = (state_61022[(2)]);
var state_61022__$1 = (function (){var statearr_61032 = state_61022;
(statearr_61032[(10)] = inst_61015);

return statearr_61032;
})();
var statearr_61033_61143 = state_61022__$1;
(statearr_61033_61143[(2)] = null);

(statearr_61033_61143[(1)] = (2));


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
});})(c__37548__auto___61137,jobs,results,process,async))
;
return ((function (switch__37483__auto__,c__37548__auto___61137,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0 = (function (){
var statearr_61037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__);

(statearr_61037[(1)] = (1));

return statearr_61037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1 = (function (state_61022){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_61022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e61038){if((e61038 instanceof Object)){
var ex__37487__auto__ = e61038;
var statearr_61039_61144 = state_61022;
(statearr_61039_61144[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61145 = state_61022;
state_61022 = G__61145;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = function(state_61022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1.call(this,state_61022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___61137,jobs,results,process,async))
})();
var state__37550__auto__ = (function (){var statearr_61040 = f__37549__auto__.call(null);
(statearr_61040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___61137);

return statearr_61040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___61137,jobs,results,process,async))
);


var c__37548__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto__,jobs,results,process,async){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto__,jobs,results,process,async){
return (function (state_61078){
var state_val_61079 = (state_61078[(1)]);
if((state_val_61079 === (7))){
var inst_61074 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
var statearr_61080_61146 = state_61078__$1;
(statearr_61080_61146[(2)] = inst_61074);

(statearr_61080_61146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (20))){
var state_61078__$1 = state_61078;
var statearr_61081_61147 = state_61078__$1;
(statearr_61081_61147[(2)] = null);

(statearr_61081_61147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (1))){
var state_61078__$1 = state_61078;
var statearr_61082_61148 = state_61078__$1;
(statearr_61082_61148[(2)] = null);

(statearr_61082_61148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (4))){
var inst_61043 = (state_61078[(7)]);
var inst_61043__$1 = (state_61078[(2)]);
var inst_61044 = (inst_61043__$1 == null);
var state_61078__$1 = (function (){var statearr_61083 = state_61078;
(statearr_61083[(7)] = inst_61043__$1);

return statearr_61083;
})();
if(cljs.core.truth_(inst_61044)){
var statearr_61084_61149 = state_61078__$1;
(statearr_61084_61149[(1)] = (5));

} else {
var statearr_61085_61150 = state_61078__$1;
(statearr_61085_61150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (15))){
var inst_61056 = (state_61078[(8)]);
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61078__$1,(18),to,inst_61056);
} else {
if((state_val_61079 === (21))){
var inst_61069 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
var statearr_61086_61151 = state_61078__$1;
(statearr_61086_61151[(2)] = inst_61069);

(statearr_61086_61151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (13))){
var inst_61071 = (state_61078[(2)]);
var state_61078__$1 = (function (){var statearr_61087 = state_61078;
(statearr_61087[(9)] = inst_61071);

return statearr_61087;
})();
var statearr_61088_61152 = state_61078__$1;
(statearr_61088_61152[(2)] = null);

(statearr_61088_61152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (6))){
var inst_61043 = (state_61078[(7)]);
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61078__$1,(11),inst_61043);
} else {
if((state_val_61079 === (17))){
var inst_61064 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
if(cljs.core.truth_(inst_61064)){
var statearr_61089_61153 = state_61078__$1;
(statearr_61089_61153[(1)] = (19));

} else {
var statearr_61090_61154 = state_61078__$1;
(statearr_61090_61154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (3))){
var inst_61076 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61078__$1,inst_61076);
} else {
if((state_val_61079 === (12))){
var inst_61053 = (state_61078[(10)]);
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61078__$1,(14),inst_61053);
} else {
if((state_val_61079 === (2))){
var state_61078__$1 = state_61078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61078__$1,(4),results);
} else {
if((state_val_61079 === (19))){
var state_61078__$1 = state_61078;
var statearr_61091_61155 = state_61078__$1;
(statearr_61091_61155[(2)] = null);

(statearr_61091_61155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (11))){
var inst_61053 = (state_61078[(2)]);
var state_61078__$1 = (function (){var statearr_61092 = state_61078;
(statearr_61092[(10)] = inst_61053);

return statearr_61092;
})();
var statearr_61093_61156 = state_61078__$1;
(statearr_61093_61156[(2)] = null);

(statearr_61093_61156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (9))){
var state_61078__$1 = state_61078;
var statearr_61094_61157 = state_61078__$1;
(statearr_61094_61157[(2)] = null);

(statearr_61094_61157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (5))){
var state_61078__$1 = state_61078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61095_61158 = state_61078__$1;
(statearr_61095_61158[(1)] = (8));

} else {
var statearr_61096_61159 = state_61078__$1;
(statearr_61096_61159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (14))){
var inst_61058 = (state_61078[(11)]);
var inst_61056 = (state_61078[(8)]);
var inst_61056__$1 = (state_61078[(2)]);
var inst_61057 = (inst_61056__$1 == null);
var inst_61058__$1 = cljs.core.not.call(null,inst_61057);
var state_61078__$1 = (function (){var statearr_61097 = state_61078;
(statearr_61097[(11)] = inst_61058__$1);

(statearr_61097[(8)] = inst_61056__$1);

return statearr_61097;
})();
if(inst_61058__$1){
var statearr_61098_61160 = state_61078__$1;
(statearr_61098_61160[(1)] = (15));

} else {
var statearr_61099_61161 = state_61078__$1;
(statearr_61099_61161[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (16))){
var inst_61058 = (state_61078[(11)]);
var state_61078__$1 = state_61078;
var statearr_61100_61162 = state_61078__$1;
(statearr_61100_61162[(2)] = inst_61058);

(statearr_61100_61162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (10))){
var inst_61050 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
var statearr_61101_61163 = state_61078__$1;
(statearr_61101_61163[(2)] = inst_61050);

(statearr_61101_61163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (18))){
var inst_61061 = (state_61078[(2)]);
var state_61078__$1 = state_61078;
var statearr_61102_61164 = state_61078__$1;
(statearr_61102_61164[(2)] = inst_61061);

(statearr_61102_61164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61079 === (8))){
var inst_61047 = cljs.core.async.close_BANG_.call(null,to);
var state_61078__$1 = state_61078;
var statearr_61103_61165 = state_61078__$1;
(statearr_61103_61165[(2)] = inst_61047);

(statearr_61103_61165[(1)] = (10));


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
});})(c__37548__auto__,jobs,results,process,async))
;
return ((function (switch__37483__auto__,c__37548__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0 = (function (){
var statearr_61107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__);

(statearr_61107[(1)] = (1));

return statearr_61107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1 = (function (state_61078){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_61078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e61108){if((e61108 instanceof Object)){
var ex__37487__auto__ = e61108;
var statearr_61109_61166 = state_61078;
(statearr_61109_61166[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61167 = state_61078;
state_61078 = G__61167;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__ = function(state_61078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1.call(this,state_61078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37484__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto__,jobs,results,process,async))
})();
var state__37550__auto__ = (function (){var statearr_61110 = f__37549__auto__.call(null);
(statearr_61110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto__);

return statearr_61110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto__,jobs,results,process,async))
);

return c__37548__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args61168 = [];
var len__35256__auto___61171 = arguments.length;
var i__35257__auto___61172 = (0);
while(true){
if((i__35257__auto___61172 < len__35256__auto___61171)){
args61168.push((arguments[i__35257__auto___61172]));

var G__61173 = (i__35257__auto___61172 + (1));
i__35257__auto___61172 = G__61173;
continue;
} else {
}
break;
}

var G__61170 = args61168.length;
switch (G__61170) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61168.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args61175 = [];
var len__35256__auto___61178 = arguments.length;
var i__35257__auto___61179 = (0);
while(true){
if((i__35257__auto___61179 < len__35256__auto___61178)){
args61175.push((arguments[i__35257__auto___61179]));

var G__61180 = (i__35257__auto___61179 + (1));
i__35257__auto___61179 = G__61180;
continue;
} else {
}
break;
}

var G__61177 = args61175.length;
switch (G__61177) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61175.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args61182 = [];
var len__35256__auto___61235 = arguments.length;
var i__35257__auto___61236 = (0);
while(true){
if((i__35257__auto___61236 < len__35256__auto___61235)){
args61182.push((arguments[i__35257__auto___61236]));

var G__61237 = (i__35257__auto___61236 + (1));
i__35257__auto___61236 = G__61237;
continue;
} else {
}
break;
}

var G__61184 = args61182.length;
switch (G__61184) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61182.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37548__auto___61239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___61239,tc,fc){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___61239,tc,fc){
return (function (state_61210){
var state_val_61211 = (state_61210[(1)]);
if((state_val_61211 === (7))){
var inst_61206 = (state_61210[(2)]);
var state_61210__$1 = state_61210;
var statearr_61212_61240 = state_61210__$1;
(statearr_61212_61240[(2)] = inst_61206);

(statearr_61212_61240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (1))){
var state_61210__$1 = state_61210;
var statearr_61213_61241 = state_61210__$1;
(statearr_61213_61241[(2)] = null);

(statearr_61213_61241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (4))){
var inst_61187 = (state_61210[(7)]);
var inst_61187__$1 = (state_61210[(2)]);
var inst_61188 = (inst_61187__$1 == null);
var state_61210__$1 = (function (){var statearr_61214 = state_61210;
(statearr_61214[(7)] = inst_61187__$1);

return statearr_61214;
})();
if(cljs.core.truth_(inst_61188)){
var statearr_61215_61242 = state_61210__$1;
(statearr_61215_61242[(1)] = (5));

} else {
var statearr_61216_61243 = state_61210__$1;
(statearr_61216_61243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (13))){
var state_61210__$1 = state_61210;
var statearr_61217_61244 = state_61210__$1;
(statearr_61217_61244[(2)] = null);

(statearr_61217_61244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (6))){
var inst_61187 = (state_61210[(7)]);
var inst_61193 = p.call(null,inst_61187);
var state_61210__$1 = state_61210;
if(cljs.core.truth_(inst_61193)){
var statearr_61218_61245 = state_61210__$1;
(statearr_61218_61245[(1)] = (9));

} else {
var statearr_61219_61246 = state_61210__$1;
(statearr_61219_61246[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (3))){
var inst_61208 = (state_61210[(2)]);
var state_61210__$1 = state_61210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61210__$1,inst_61208);
} else {
if((state_val_61211 === (12))){
var state_61210__$1 = state_61210;
var statearr_61220_61247 = state_61210__$1;
(statearr_61220_61247[(2)] = null);

(statearr_61220_61247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (2))){
var state_61210__$1 = state_61210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61210__$1,(4),ch);
} else {
if((state_val_61211 === (11))){
var inst_61187 = (state_61210[(7)]);
var inst_61197 = (state_61210[(2)]);
var state_61210__$1 = state_61210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61210__$1,(8),inst_61197,inst_61187);
} else {
if((state_val_61211 === (9))){
var state_61210__$1 = state_61210;
var statearr_61221_61248 = state_61210__$1;
(statearr_61221_61248[(2)] = tc);

(statearr_61221_61248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (5))){
var inst_61190 = cljs.core.async.close_BANG_.call(null,tc);
var inst_61191 = cljs.core.async.close_BANG_.call(null,fc);
var state_61210__$1 = (function (){var statearr_61222 = state_61210;
(statearr_61222[(8)] = inst_61190);

return statearr_61222;
})();
var statearr_61223_61249 = state_61210__$1;
(statearr_61223_61249[(2)] = inst_61191);

(statearr_61223_61249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (14))){
var inst_61204 = (state_61210[(2)]);
var state_61210__$1 = state_61210;
var statearr_61224_61250 = state_61210__$1;
(statearr_61224_61250[(2)] = inst_61204);

(statearr_61224_61250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (10))){
var state_61210__$1 = state_61210;
var statearr_61225_61251 = state_61210__$1;
(statearr_61225_61251[(2)] = fc);

(statearr_61225_61251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61211 === (8))){
var inst_61199 = (state_61210[(2)]);
var state_61210__$1 = state_61210;
if(cljs.core.truth_(inst_61199)){
var statearr_61226_61252 = state_61210__$1;
(statearr_61226_61252[(1)] = (12));

} else {
var statearr_61227_61253 = state_61210__$1;
(statearr_61227_61253[(1)] = (13));

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
});})(c__37548__auto___61239,tc,fc))
;
return ((function (switch__37483__auto__,c__37548__auto___61239,tc,fc){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_61231 = [null,null,null,null,null,null,null,null,null];
(statearr_61231[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_61231[(1)] = (1));

return statearr_61231;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_61210){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_61210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e61232){if((e61232 instanceof Object)){
var ex__37487__auto__ = e61232;
var statearr_61233_61254 = state_61210;
(statearr_61233_61254[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61255 = state_61210;
state_61210 = G__61255;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_61210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_61210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___61239,tc,fc))
})();
var state__37550__auto__ = (function (){var statearr_61234 = f__37549__auto__.call(null);
(statearr_61234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___61239);

return statearr_61234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___61239,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37548__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto__){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto__){
return (function (state_61302){
var state_val_61303 = (state_61302[(1)]);
if((state_val_61303 === (1))){
var inst_61288 = init;
var state_61302__$1 = (function (){var statearr_61304 = state_61302;
(statearr_61304[(7)] = inst_61288);

return statearr_61304;
})();
var statearr_61305_61320 = state_61302__$1;
(statearr_61305_61320[(2)] = null);

(statearr_61305_61320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61303 === (2))){
var state_61302__$1 = state_61302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61302__$1,(4),ch);
} else {
if((state_val_61303 === (3))){
var inst_61300 = (state_61302[(2)]);
var state_61302__$1 = state_61302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61302__$1,inst_61300);
} else {
if((state_val_61303 === (4))){
var inst_61291 = (state_61302[(8)]);
var inst_61291__$1 = (state_61302[(2)]);
var inst_61292 = (inst_61291__$1 == null);
var state_61302__$1 = (function (){var statearr_61306 = state_61302;
(statearr_61306[(8)] = inst_61291__$1);

return statearr_61306;
})();
if(cljs.core.truth_(inst_61292)){
var statearr_61307_61321 = state_61302__$1;
(statearr_61307_61321[(1)] = (5));

} else {
var statearr_61308_61322 = state_61302__$1;
(statearr_61308_61322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61303 === (5))){
var inst_61288 = (state_61302[(7)]);
var state_61302__$1 = state_61302;
var statearr_61309_61323 = state_61302__$1;
(statearr_61309_61323[(2)] = inst_61288);

(statearr_61309_61323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61303 === (6))){
var inst_61291 = (state_61302[(8)]);
var inst_61288 = (state_61302[(7)]);
var inst_61295 = f.call(null,inst_61288,inst_61291);
var inst_61288__$1 = inst_61295;
var state_61302__$1 = (function (){var statearr_61310 = state_61302;
(statearr_61310[(7)] = inst_61288__$1);

return statearr_61310;
})();
var statearr_61311_61324 = state_61302__$1;
(statearr_61311_61324[(2)] = null);

(statearr_61311_61324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61303 === (7))){
var inst_61298 = (state_61302[(2)]);
var state_61302__$1 = state_61302;
var statearr_61312_61325 = state_61302__$1;
(statearr_61312_61325[(2)] = inst_61298);

(statearr_61312_61325[(1)] = (3));


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
});})(c__37548__auto__))
;
return ((function (switch__37483__auto__,c__37548__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37484__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37484__auto____0 = (function (){
var statearr_61316 = [null,null,null,null,null,null,null,null,null];
(statearr_61316[(0)] = cljs$core$async$reduce_$_state_machine__37484__auto__);

(statearr_61316[(1)] = (1));

return statearr_61316;
});
var cljs$core$async$reduce_$_state_machine__37484__auto____1 = (function (state_61302){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_61302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e61317){if((e61317 instanceof Object)){
var ex__37487__auto__ = e61317;
var statearr_61318_61326 = state_61302;
(statearr_61318_61326[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61327 = state_61302;
state_61302 = G__61327;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37484__auto__ = function(state_61302){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37484__auto____1.call(this,state_61302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37484__auto____0;
cljs$core$async$reduce_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37484__auto____1;
return cljs$core$async$reduce_$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto__))
})();
var state__37550__auto__ = (function (){var statearr_61319 = f__37549__auto__.call(null);
(statearr_61319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto__);

return statearr_61319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto__))
);

return c__37548__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args61328 = [];
var len__35256__auto___61380 = arguments.length;
var i__35257__auto___61381 = (0);
while(true){
if((i__35257__auto___61381 < len__35256__auto___61380)){
args61328.push((arguments[i__35257__auto___61381]));

var G__61382 = (i__35257__auto___61381 + (1));
i__35257__auto___61381 = G__61382;
continue;
} else {
}
break;
}

var G__61330 = args61328.length;
switch (G__61330) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61328.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37548__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto__){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto__){
return (function (state_61355){
var state_val_61356 = (state_61355[(1)]);
if((state_val_61356 === (7))){
var inst_61337 = (state_61355[(2)]);
var state_61355__$1 = state_61355;
var statearr_61357_61384 = state_61355__$1;
(statearr_61357_61384[(2)] = inst_61337);

(statearr_61357_61384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (1))){
var inst_61331 = cljs.core.seq.call(null,coll);
var inst_61332 = inst_61331;
var state_61355__$1 = (function (){var statearr_61358 = state_61355;
(statearr_61358[(7)] = inst_61332);

return statearr_61358;
})();
var statearr_61359_61385 = state_61355__$1;
(statearr_61359_61385[(2)] = null);

(statearr_61359_61385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (4))){
var inst_61332 = (state_61355[(7)]);
var inst_61335 = cljs.core.first.call(null,inst_61332);
var state_61355__$1 = state_61355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61355__$1,(7),ch,inst_61335);
} else {
if((state_val_61356 === (13))){
var inst_61349 = (state_61355[(2)]);
var state_61355__$1 = state_61355;
var statearr_61360_61386 = state_61355__$1;
(statearr_61360_61386[(2)] = inst_61349);

(statearr_61360_61386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (6))){
var inst_61340 = (state_61355[(2)]);
var state_61355__$1 = state_61355;
if(cljs.core.truth_(inst_61340)){
var statearr_61361_61387 = state_61355__$1;
(statearr_61361_61387[(1)] = (8));

} else {
var statearr_61362_61388 = state_61355__$1;
(statearr_61362_61388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (3))){
var inst_61353 = (state_61355[(2)]);
var state_61355__$1 = state_61355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61355__$1,inst_61353);
} else {
if((state_val_61356 === (12))){
var state_61355__$1 = state_61355;
var statearr_61363_61389 = state_61355__$1;
(statearr_61363_61389[(2)] = null);

(statearr_61363_61389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (2))){
var inst_61332 = (state_61355[(7)]);
var state_61355__$1 = state_61355;
if(cljs.core.truth_(inst_61332)){
var statearr_61364_61390 = state_61355__$1;
(statearr_61364_61390[(1)] = (4));

} else {
var statearr_61365_61391 = state_61355__$1;
(statearr_61365_61391[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (11))){
var inst_61346 = cljs.core.async.close_BANG_.call(null,ch);
var state_61355__$1 = state_61355;
var statearr_61366_61392 = state_61355__$1;
(statearr_61366_61392[(2)] = inst_61346);

(statearr_61366_61392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (9))){
var state_61355__$1 = state_61355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61367_61393 = state_61355__$1;
(statearr_61367_61393[(1)] = (11));

} else {
var statearr_61368_61394 = state_61355__$1;
(statearr_61368_61394[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (5))){
var inst_61332 = (state_61355[(7)]);
var state_61355__$1 = state_61355;
var statearr_61369_61395 = state_61355__$1;
(statearr_61369_61395[(2)] = inst_61332);

(statearr_61369_61395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (10))){
var inst_61351 = (state_61355[(2)]);
var state_61355__$1 = state_61355;
var statearr_61370_61396 = state_61355__$1;
(statearr_61370_61396[(2)] = inst_61351);

(statearr_61370_61396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61356 === (8))){
var inst_61332 = (state_61355[(7)]);
var inst_61342 = cljs.core.next.call(null,inst_61332);
var inst_61332__$1 = inst_61342;
var state_61355__$1 = (function (){var statearr_61371 = state_61355;
(statearr_61371[(7)] = inst_61332__$1);

return statearr_61371;
})();
var statearr_61372_61397 = state_61355__$1;
(statearr_61372_61397[(2)] = null);

(statearr_61372_61397[(1)] = (2));


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
});})(c__37548__auto__))
;
return ((function (switch__37483__auto__,c__37548__auto__){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_61376 = [null,null,null,null,null,null,null,null];
(statearr_61376[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_61376[(1)] = (1));

return statearr_61376;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_61355){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_61355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e61377){if((e61377 instanceof Object)){
var ex__37487__auto__ = e61377;
var statearr_61378_61398 = state_61355;
(statearr_61378_61398[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61399 = state_61355;
state_61355 = G__61399;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_61355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_61355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto__))
})();
var state__37550__auto__ = (function (){var statearr_61379 = f__37549__auto__.call(null);
(statearr_61379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto__);

return statearr_61379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto__))
);

return c__37548__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__34853__auto__ = (((_ == null))?null:_);
var m__34854__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,_);
} else {
var m__34854__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__34853__auto__ = (((m == null))?null:m);
var m__34854__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__34854__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__34853__auto__ = (((m == null))?null:m);
var m__34854__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,m,ch);
} else {
var m__34854__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__34853__auto__ = (((m == null))?null:m);
var m__34854__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,m);
} else {
var m__34854__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async61621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61621 = (function (mult,ch,cs,meta61622){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta61622 = meta61622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async61621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_61623,meta61622__$1){
var self__ = this;
var _61623__$1 = this;
return (new cljs.core.async.t_cljs$core$async61621(self__.mult,self__.ch,self__.cs,meta61622__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async61621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_61623){
var self__ = this;
var _61623__$1 = this;
return self__.meta61622;
});})(cs))
;

cljs.core.async.t_cljs$core$async61621.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async61621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async61621.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async61621.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61621.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61621.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61621.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta61622","meta61622",223766783,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async61621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61621";

cljs.core.async.t_cljs$core$async61621.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async61621");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async61621 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async61621(mult__$1,ch__$1,cs__$1,meta61622){
return (new cljs.core.async.t_cljs$core$async61621(mult__$1,ch__$1,cs__$1,meta61622));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async61621(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37548__auto___61842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___61842,cs,m,dchan,dctr,done){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___61842,cs,m,dchan,dctr,done){
return (function (state_61754){
var state_val_61755 = (state_61754[(1)]);
if((state_val_61755 === (7))){
var inst_61750 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61756_61843 = state_61754__$1;
(statearr_61756_61843[(2)] = inst_61750);

(statearr_61756_61843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (20))){
var inst_61655 = (state_61754[(7)]);
var inst_61665 = cljs.core.first.call(null,inst_61655);
var inst_61666 = cljs.core.nth.call(null,inst_61665,(0),null);
var inst_61667 = cljs.core.nth.call(null,inst_61665,(1),null);
var state_61754__$1 = (function (){var statearr_61757 = state_61754;
(statearr_61757[(8)] = inst_61666);

return statearr_61757;
})();
if(cljs.core.truth_(inst_61667)){
var statearr_61758_61844 = state_61754__$1;
(statearr_61758_61844[(1)] = (22));

} else {
var statearr_61759_61845 = state_61754__$1;
(statearr_61759_61845[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (27))){
var inst_61626 = (state_61754[(9)]);
var inst_61702 = (state_61754[(10)]);
var inst_61697 = (state_61754[(11)]);
var inst_61695 = (state_61754[(12)]);
var inst_61702__$1 = cljs.core._nth.call(null,inst_61695,inst_61697);
var inst_61703 = cljs.core.async.put_BANG_.call(null,inst_61702__$1,inst_61626,done);
var state_61754__$1 = (function (){var statearr_61760 = state_61754;
(statearr_61760[(10)] = inst_61702__$1);

return statearr_61760;
})();
if(cljs.core.truth_(inst_61703)){
var statearr_61761_61846 = state_61754__$1;
(statearr_61761_61846[(1)] = (30));

} else {
var statearr_61762_61847 = state_61754__$1;
(statearr_61762_61847[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (1))){
var state_61754__$1 = state_61754;
var statearr_61763_61848 = state_61754__$1;
(statearr_61763_61848[(2)] = null);

(statearr_61763_61848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (24))){
var inst_61655 = (state_61754[(7)]);
var inst_61672 = (state_61754[(2)]);
var inst_61673 = cljs.core.next.call(null,inst_61655);
var inst_61635 = inst_61673;
var inst_61636 = null;
var inst_61637 = (0);
var inst_61638 = (0);
var state_61754__$1 = (function (){var statearr_61764 = state_61754;
(statearr_61764[(13)] = inst_61637);

(statearr_61764[(14)] = inst_61638);

(statearr_61764[(15)] = inst_61672);

(statearr_61764[(16)] = inst_61636);

(statearr_61764[(17)] = inst_61635);

return statearr_61764;
})();
var statearr_61765_61849 = state_61754__$1;
(statearr_61765_61849[(2)] = null);

(statearr_61765_61849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (39))){
var state_61754__$1 = state_61754;
var statearr_61769_61850 = state_61754__$1;
(statearr_61769_61850[(2)] = null);

(statearr_61769_61850[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (4))){
var inst_61626 = (state_61754[(9)]);
var inst_61626__$1 = (state_61754[(2)]);
var inst_61627 = (inst_61626__$1 == null);
var state_61754__$1 = (function (){var statearr_61770 = state_61754;
(statearr_61770[(9)] = inst_61626__$1);

return statearr_61770;
})();
if(cljs.core.truth_(inst_61627)){
var statearr_61771_61851 = state_61754__$1;
(statearr_61771_61851[(1)] = (5));

} else {
var statearr_61772_61852 = state_61754__$1;
(statearr_61772_61852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (15))){
var inst_61637 = (state_61754[(13)]);
var inst_61638 = (state_61754[(14)]);
var inst_61636 = (state_61754[(16)]);
var inst_61635 = (state_61754[(17)]);
var inst_61651 = (state_61754[(2)]);
var inst_61652 = (inst_61638 + (1));
var tmp61766 = inst_61637;
var tmp61767 = inst_61636;
var tmp61768 = inst_61635;
var inst_61635__$1 = tmp61768;
var inst_61636__$1 = tmp61767;
var inst_61637__$1 = tmp61766;
var inst_61638__$1 = inst_61652;
var state_61754__$1 = (function (){var statearr_61773 = state_61754;
(statearr_61773[(13)] = inst_61637__$1);

(statearr_61773[(14)] = inst_61638__$1);

(statearr_61773[(18)] = inst_61651);

(statearr_61773[(16)] = inst_61636__$1);

(statearr_61773[(17)] = inst_61635__$1);

return statearr_61773;
})();
var statearr_61774_61853 = state_61754__$1;
(statearr_61774_61853[(2)] = null);

(statearr_61774_61853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (21))){
var inst_61676 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61778_61854 = state_61754__$1;
(statearr_61778_61854[(2)] = inst_61676);

(statearr_61778_61854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (31))){
var inst_61702 = (state_61754[(10)]);
var inst_61706 = done.call(null,null);
var inst_61707 = cljs.core.async.untap_STAR_.call(null,m,inst_61702);
var state_61754__$1 = (function (){var statearr_61779 = state_61754;
(statearr_61779[(19)] = inst_61706);

return statearr_61779;
})();
var statearr_61780_61855 = state_61754__$1;
(statearr_61780_61855[(2)] = inst_61707);

(statearr_61780_61855[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (32))){
var inst_61697 = (state_61754[(11)]);
var inst_61696 = (state_61754[(20)]);
var inst_61694 = (state_61754[(21)]);
var inst_61695 = (state_61754[(12)]);
var inst_61709 = (state_61754[(2)]);
var inst_61710 = (inst_61697 + (1));
var tmp61775 = inst_61696;
var tmp61776 = inst_61694;
var tmp61777 = inst_61695;
var inst_61694__$1 = tmp61776;
var inst_61695__$1 = tmp61777;
var inst_61696__$1 = tmp61775;
var inst_61697__$1 = inst_61710;
var state_61754__$1 = (function (){var statearr_61781 = state_61754;
(statearr_61781[(11)] = inst_61697__$1);

(statearr_61781[(20)] = inst_61696__$1);

(statearr_61781[(21)] = inst_61694__$1);

(statearr_61781[(12)] = inst_61695__$1);

(statearr_61781[(22)] = inst_61709);

return statearr_61781;
})();
var statearr_61782_61856 = state_61754__$1;
(statearr_61782_61856[(2)] = null);

(statearr_61782_61856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (40))){
var inst_61722 = (state_61754[(23)]);
var inst_61726 = done.call(null,null);
var inst_61727 = cljs.core.async.untap_STAR_.call(null,m,inst_61722);
var state_61754__$1 = (function (){var statearr_61783 = state_61754;
(statearr_61783[(24)] = inst_61726);

return statearr_61783;
})();
var statearr_61784_61857 = state_61754__$1;
(statearr_61784_61857[(2)] = inst_61727);

(statearr_61784_61857[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (33))){
var inst_61713 = (state_61754[(25)]);
var inst_61715 = cljs.core.chunked_seq_QMARK_.call(null,inst_61713);
var state_61754__$1 = state_61754;
if(inst_61715){
var statearr_61785_61858 = state_61754__$1;
(statearr_61785_61858[(1)] = (36));

} else {
var statearr_61786_61859 = state_61754__$1;
(statearr_61786_61859[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (13))){
var inst_61645 = (state_61754[(26)]);
var inst_61648 = cljs.core.async.close_BANG_.call(null,inst_61645);
var state_61754__$1 = state_61754;
var statearr_61787_61860 = state_61754__$1;
(statearr_61787_61860[(2)] = inst_61648);

(statearr_61787_61860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (22))){
var inst_61666 = (state_61754[(8)]);
var inst_61669 = cljs.core.async.close_BANG_.call(null,inst_61666);
var state_61754__$1 = state_61754;
var statearr_61788_61861 = state_61754__$1;
(statearr_61788_61861[(2)] = inst_61669);

(statearr_61788_61861[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (36))){
var inst_61713 = (state_61754[(25)]);
var inst_61717 = cljs.core.chunk_first.call(null,inst_61713);
var inst_61718 = cljs.core.chunk_rest.call(null,inst_61713);
var inst_61719 = cljs.core.count.call(null,inst_61717);
var inst_61694 = inst_61718;
var inst_61695 = inst_61717;
var inst_61696 = inst_61719;
var inst_61697 = (0);
var state_61754__$1 = (function (){var statearr_61789 = state_61754;
(statearr_61789[(11)] = inst_61697);

(statearr_61789[(20)] = inst_61696);

(statearr_61789[(21)] = inst_61694);

(statearr_61789[(12)] = inst_61695);

return statearr_61789;
})();
var statearr_61790_61862 = state_61754__$1;
(statearr_61790_61862[(2)] = null);

(statearr_61790_61862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (41))){
var inst_61713 = (state_61754[(25)]);
var inst_61729 = (state_61754[(2)]);
var inst_61730 = cljs.core.next.call(null,inst_61713);
var inst_61694 = inst_61730;
var inst_61695 = null;
var inst_61696 = (0);
var inst_61697 = (0);
var state_61754__$1 = (function (){var statearr_61791 = state_61754;
(statearr_61791[(27)] = inst_61729);

(statearr_61791[(11)] = inst_61697);

(statearr_61791[(20)] = inst_61696);

(statearr_61791[(21)] = inst_61694);

(statearr_61791[(12)] = inst_61695);

return statearr_61791;
})();
var statearr_61792_61863 = state_61754__$1;
(statearr_61792_61863[(2)] = null);

(statearr_61792_61863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (43))){
var state_61754__$1 = state_61754;
var statearr_61793_61864 = state_61754__$1;
(statearr_61793_61864[(2)] = null);

(statearr_61793_61864[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (29))){
var inst_61738 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61794_61865 = state_61754__$1;
(statearr_61794_61865[(2)] = inst_61738);

(statearr_61794_61865[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (44))){
var inst_61747 = (state_61754[(2)]);
var state_61754__$1 = (function (){var statearr_61795 = state_61754;
(statearr_61795[(28)] = inst_61747);

return statearr_61795;
})();
var statearr_61796_61866 = state_61754__$1;
(statearr_61796_61866[(2)] = null);

(statearr_61796_61866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (6))){
var inst_61686 = (state_61754[(29)]);
var inst_61685 = cljs.core.deref.call(null,cs);
var inst_61686__$1 = cljs.core.keys.call(null,inst_61685);
var inst_61687 = cljs.core.count.call(null,inst_61686__$1);
var inst_61688 = cljs.core.reset_BANG_.call(null,dctr,inst_61687);
var inst_61693 = cljs.core.seq.call(null,inst_61686__$1);
var inst_61694 = inst_61693;
var inst_61695 = null;
var inst_61696 = (0);
var inst_61697 = (0);
var state_61754__$1 = (function (){var statearr_61797 = state_61754;
(statearr_61797[(11)] = inst_61697);

(statearr_61797[(30)] = inst_61688);

(statearr_61797[(29)] = inst_61686__$1);

(statearr_61797[(20)] = inst_61696);

(statearr_61797[(21)] = inst_61694);

(statearr_61797[(12)] = inst_61695);

return statearr_61797;
})();
var statearr_61798_61867 = state_61754__$1;
(statearr_61798_61867[(2)] = null);

(statearr_61798_61867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (28))){
var inst_61713 = (state_61754[(25)]);
var inst_61694 = (state_61754[(21)]);
var inst_61713__$1 = cljs.core.seq.call(null,inst_61694);
var state_61754__$1 = (function (){var statearr_61799 = state_61754;
(statearr_61799[(25)] = inst_61713__$1);

return statearr_61799;
})();
if(inst_61713__$1){
var statearr_61800_61868 = state_61754__$1;
(statearr_61800_61868[(1)] = (33));

} else {
var statearr_61801_61869 = state_61754__$1;
(statearr_61801_61869[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (25))){
var inst_61697 = (state_61754[(11)]);
var inst_61696 = (state_61754[(20)]);
var inst_61699 = (inst_61697 < inst_61696);
var inst_61700 = inst_61699;
var state_61754__$1 = state_61754;
if(cljs.core.truth_(inst_61700)){
var statearr_61802_61870 = state_61754__$1;
(statearr_61802_61870[(1)] = (27));

} else {
var statearr_61803_61871 = state_61754__$1;
(statearr_61803_61871[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (34))){
var state_61754__$1 = state_61754;
var statearr_61804_61872 = state_61754__$1;
(statearr_61804_61872[(2)] = null);

(statearr_61804_61872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (17))){
var state_61754__$1 = state_61754;
var statearr_61805_61873 = state_61754__$1;
(statearr_61805_61873[(2)] = null);

(statearr_61805_61873[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (3))){
var inst_61752 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61754__$1,inst_61752);
} else {
if((state_val_61755 === (12))){
var inst_61681 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61806_61874 = state_61754__$1;
(statearr_61806_61874[(2)] = inst_61681);

(statearr_61806_61874[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (2))){
var state_61754__$1 = state_61754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61754__$1,(4),ch);
} else {
if((state_val_61755 === (23))){
var state_61754__$1 = state_61754;
var statearr_61807_61875 = state_61754__$1;
(statearr_61807_61875[(2)] = null);

(statearr_61807_61875[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (35))){
var inst_61736 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61808_61876 = state_61754__$1;
(statearr_61808_61876[(2)] = inst_61736);

(statearr_61808_61876[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (19))){
var inst_61655 = (state_61754[(7)]);
var inst_61659 = cljs.core.chunk_first.call(null,inst_61655);
var inst_61660 = cljs.core.chunk_rest.call(null,inst_61655);
var inst_61661 = cljs.core.count.call(null,inst_61659);
var inst_61635 = inst_61660;
var inst_61636 = inst_61659;
var inst_61637 = inst_61661;
var inst_61638 = (0);
var state_61754__$1 = (function (){var statearr_61809 = state_61754;
(statearr_61809[(13)] = inst_61637);

(statearr_61809[(14)] = inst_61638);

(statearr_61809[(16)] = inst_61636);

(statearr_61809[(17)] = inst_61635);

return statearr_61809;
})();
var statearr_61810_61877 = state_61754__$1;
(statearr_61810_61877[(2)] = null);

(statearr_61810_61877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (11))){
var inst_61655 = (state_61754[(7)]);
var inst_61635 = (state_61754[(17)]);
var inst_61655__$1 = cljs.core.seq.call(null,inst_61635);
var state_61754__$1 = (function (){var statearr_61811 = state_61754;
(statearr_61811[(7)] = inst_61655__$1);

return statearr_61811;
})();
if(inst_61655__$1){
var statearr_61812_61878 = state_61754__$1;
(statearr_61812_61878[(1)] = (16));

} else {
var statearr_61813_61879 = state_61754__$1;
(statearr_61813_61879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (9))){
var inst_61683 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61814_61880 = state_61754__$1;
(statearr_61814_61880[(2)] = inst_61683);

(statearr_61814_61880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (5))){
var inst_61633 = cljs.core.deref.call(null,cs);
var inst_61634 = cljs.core.seq.call(null,inst_61633);
var inst_61635 = inst_61634;
var inst_61636 = null;
var inst_61637 = (0);
var inst_61638 = (0);
var state_61754__$1 = (function (){var statearr_61815 = state_61754;
(statearr_61815[(13)] = inst_61637);

(statearr_61815[(14)] = inst_61638);

(statearr_61815[(16)] = inst_61636);

(statearr_61815[(17)] = inst_61635);

return statearr_61815;
})();
var statearr_61816_61881 = state_61754__$1;
(statearr_61816_61881[(2)] = null);

(statearr_61816_61881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (14))){
var state_61754__$1 = state_61754;
var statearr_61817_61882 = state_61754__$1;
(statearr_61817_61882[(2)] = null);

(statearr_61817_61882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (45))){
var inst_61744 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61818_61883 = state_61754__$1;
(statearr_61818_61883[(2)] = inst_61744);

(statearr_61818_61883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (26))){
var inst_61686 = (state_61754[(29)]);
var inst_61740 = (state_61754[(2)]);
var inst_61741 = cljs.core.seq.call(null,inst_61686);
var state_61754__$1 = (function (){var statearr_61819 = state_61754;
(statearr_61819[(31)] = inst_61740);

return statearr_61819;
})();
if(inst_61741){
var statearr_61820_61884 = state_61754__$1;
(statearr_61820_61884[(1)] = (42));

} else {
var statearr_61821_61885 = state_61754__$1;
(statearr_61821_61885[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (16))){
var inst_61655 = (state_61754[(7)]);
var inst_61657 = cljs.core.chunked_seq_QMARK_.call(null,inst_61655);
var state_61754__$1 = state_61754;
if(inst_61657){
var statearr_61822_61886 = state_61754__$1;
(statearr_61822_61886[(1)] = (19));

} else {
var statearr_61823_61887 = state_61754__$1;
(statearr_61823_61887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (38))){
var inst_61733 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61824_61888 = state_61754__$1;
(statearr_61824_61888[(2)] = inst_61733);

(statearr_61824_61888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (30))){
var state_61754__$1 = state_61754;
var statearr_61825_61889 = state_61754__$1;
(statearr_61825_61889[(2)] = null);

(statearr_61825_61889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (10))){
var inst_61638 = (state_61754[(14)]);
var inst_61636 = (state_61754[(16)]);
var inst_61644 = cljs.core._nth.call(null,inst_61636,inst_61638);
var inst_61645 = cljs.core.nth.call(null,inst_61644,(0),null);
var inst_61646 = cljs.core.nth.call(null,inst_61644,(1),null);
var state_61754__$1 = (function (){var statearr_61826 = state_61754;
(statearr_61826[(26)] = inst_61645);

return statearr_61826;
})();
if(cljs.core.truth_(inst_61646)){
var statearr_61827_61890 = state_61754__$1;
(statearr_61827_61890[(1)] = (13));

} else {
var statearr_61828_61891 = state_61754__$1;
(statearr_61828_61891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (18))){
var inst_61679 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61829_61892 = state_61754__$1;
(statearr_61829_61892[(2)] = inst_61679);

(statearr_61829_61892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (42))){
var state_61754__$1 = state_61754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61754__$1,(45),dchan);
} else {
if((state_val_61755 === (37))){
var inst_61713 = (state_61754[(25)]);
var inst_61626 = (state_61754[(9)]);
var inst_61722 = (state_61754[(23)]);
var inst_61722__$1 = cljs.core.first.call(null,inst_61713);
var inst_61723 = cljs.core.async.put_BANG_.call(null,inst_61722__$1,inst_61626,done);
var state_61754__$1 = (function (){var statearr_61830 = state_61754;
(statearr_61830[(23)] = inst_61722__$1);

return statearr_61830;
})();
if(cljs.core.truth_(inst_61723)){
var statearr_61831_61893 = state_61754__$1;
(statearr_61831_61893[(1)] = (39));

} else {
var statearr_61832_61894 = state_61754__$1;
(statearr_61832_61894[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (8))){
var inst_61637 = (state_61754[(13)]);
var inst_61638 = (state_61754[(14)]);
var inst_61640 = (inst_61638 < inst_61637);
var inst_61641 = inst_61640;
var state_61754__$1 = state_61754;
if(cljs.core.truth_(inst_61641)){
var statearr_61833_61895 = state_61754__$1;
(statearr_61833_61895[(1)] = (10));

} else {
var statearr_61834_61896 = state_61754__$1;
(statearr_61834_61896[(1)] = (11));

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
});})(c__37548__auto___61842,cs,m,dchan,dctr,done))
;
return ((function (switch__37483__auto__,c__37548__auto___61842,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37484__auto__ = null;
var cljs$core$async$mult_$_state_machine__37484__auto____0 = (function (){
var statearr_61838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61838[(0)] = cljs$core$async$mult_$_state_machine__37484__auto__);

(statearr_61838[(1)] = (1));

return statearr_61838;
});
var cljs$core$async$mult_$_state_machine__37484__auto____1 = (function (state_61754){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_61754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e61839){if((e61839 instanceof Object)){
var ex__37487__auto__ = e61839;
var statearr_61840_61897 = state_61754;
(statearr_61840_61897[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61898 = state_61754;
state_61754 = G__61898;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37484__auto__ = function(state_61754){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37484__auto____1.call(this,state_61754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37484__auto____0;
cljs$core$async$mult_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37484__auto____1;
return cljs$core$async$mult_$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___61842,cs,m,dchan,dctr,done))
})();
var state__37550__auto__ = (function (){var statearr_61841 = f__37549__auto__.call(null);
(statearr_61841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___61842);

return statearr_61841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___61842,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args61899 = [];
var len__35256__auto___61902 = arguments.length;
var i__35257__auto___61903 = (0);
while(true){
if((i__35257__auto___61903 < len__35256__auto___61902)){
args61899.push((arguments[i__35257__auto___61903]));

var G__61904 = (i__35257__auto___61903 + (1));
i__35257__auto___61903 = G__61904;
continue;
} else {
}
break;
}

var G__61901 = args61899.length;
switch (G__61901) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61899.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__34853__auto__ = (((m == null))?null:m);
var m__34854__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,m,ch);
} else {
var m__34854__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__34853__auto__ = (((m == null))?null:m);
var m__34854__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,m,ch);
} else {
var m__34854__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__34853__auto__ = (((m == null))?null:m);
var m__34854__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,m);
} else {
var m__34854__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__34853__auto__ = (((m == null))?null:m);
var m__34854__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,m,state_map);
} else {
var m__34854__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__34853__auto__ = (((m == null))?null:m);
var m__34854__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,m,mode);
} else {
var m__34854__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35263__auto__ = [];
var len__35256__auto___61916 = arguments.length;
var i__35257__auto___61917 = (0);
while(true){
if((i__35257__auto___61917 < len__35256__auto___61916)){
args__35263__auto__.push((arguments[i__35257__auto___61917]));

var G__61918 = (i__35257__auto___61917 + (1));
i__35257__auto___61917 = G__61918;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((3) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35264__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__61910){
var map__61911 = p__61910;
var map__61911__$1 = ((((!((map__61911 == null)))?((((map__61911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61911):map__61911);
var opts = map__61911__$1;
var statearr_61913_61919 = state;
(statearr_61913_61919[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__61911,map__61911__$1,opts){
return (function (val){
var statearr_61914_61920 = state;
(statearr_61914_61920[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__61911,map__61911__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_61915_61921 = state;
(statearr_61915_61921[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq61906){
var G__61907 = cljs.core.first.call(null,seq61906);
var seq61906__$1 = cljs.core.next.call(null,seq61906);
var G__61908 = cljs.core.first.call(null,seq61906__$1);
var seq61906__$2 = cljs.core.next.call(null,seq61906__$1);
var G__61909 = cljs.core.first.call(null,seq61906__$2);
var seq61906__$3 = cljs.core.next.call(null,seq61906__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61907,G__61908,G__61909,seq61906__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async62085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62085 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62086){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62086 = meta62086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62087,meta62086__$1){
var self__ = this;
var _62087__$1 = this;
return (new cljs.core.async.t_cljs$core$async62085(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62086__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62087){
var self__ = this;
var _62087__$1 = this;
return self__.meta62086;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62086","meta62086",1813669116,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62085";

cljs.core.async.t_cljs$core$async62085.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async62085");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async62085 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async62085(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62086){
return (new cljs.core.async.t_cljs$core$async62085(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62086));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async62085(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37548__auto___62248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___62248,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___62248,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_62185){
var state_val_62186 = (state_62185[(1)]);
if((state_val_62186 === (7))){
var inst_62103 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
var statearr_62187_62249 = state_62185__$1;
(statearr_62187_62249[(2)] = inst_62103);

(statearr_62187_62249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (20))){
var inst_62115 = (state_62185[(7)]);
var state_62185__$1 = state_62185;
var statearr_62188_62250 = state_62185__$1;
(statearr_62188_62250[(2)] = inst_62115);

(statearr_62188_62250[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (27))){
var state_62185__$1 = state_62185;
var statearr_62189_62251 = state_62185__$1;
(statearr_62189_62251[(2)] = null);

(statearr_62189_62251[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (1))){
var inst_62091 = (state_62185[(8)]);
var inst_62091__$1 = calc_state.call(null);
var inst_62093 = (inst_62091__$1 == null);
var inst_62094 = cljs.core.not.call(null,inst_62093);
var state_62185__$1 = (function (){var statearr_62190 = state_62185;
(statearr_62190[(8)] = inst_62091__$1);

return statearr_62190;
})();
if(inst_62094){
var statearr_62191_62252 = state_62185__$1;
(statearr_62191_62252[(1)] = (2));

} else {
var statearr_62192_62253 = state_62185__$1;
(statearr_62192_62253[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (24))){
var inst_62145 = (state_62185[(9)]);
var inst_62159 = (state_62185[(10)]);
var inst_62138 = (state_62185[(11)]);
var inst_62159__$1 = inst_62138.call(null,inst_62145);
var state_62185__$1 = (function (){var statearr_62193 = state_62185;
(statearr_62193[(10)] = inst_62159__$1);

return statearr_62193;
})();
if(cljs.core.truth_(inst_62159__$1)){
var statearr_62194_62254 = state_62185__$1;
(statearr_62194_62254[(1)] = (29));

} else {
var statearr_62195_62255 = state_62185__$1;
(statearr_62195_62255[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (4))){
var inst_62106 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
if(cljs.core.truth_(inst_62106)){
var statearr_62196_62256 = state_62185__$1;
(statearr_62196_62256[(1)] = (8));

} else {
var statearr_62197_62257 = state_62185__$1;
(statearr_62197_62257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (15))){
var inst_62132 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
if(cljs.core.truth_(inst_62132)){
var statearr_62198_62258 = state_62185__$1;
(statearr_62198_62258[(1)] = (19));

} else {
var statearr_62199_62259 = state_62185__$1;
(statearr_62199_62259[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (21))){
var inst_62137 = (state_62185[(12)]);
var inst_62137__$1 = (state_62185[(2)]);
var inst_62138 = cljs.core.get.call(null,inst_62137__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62139 = cljs.core.get.call(null,inst_62137__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62140 = cljs.core.get.call(null,inst_62137__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62185__$1 = (function (){var statearr_62200 = state_62185;
(statearr_62200[(12)] = inst_62137__$1);

(statearr_62200[(13)] = inst_62139);

(statearr_62200[(11)] = inst_62138);

return statearr_62200;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_62185__$1,(22),inst_62140);
} else {
if((state_val_62186 === (31))){
var inst_62167 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
if(cljs.core.truth_(inst_62167)){
var statearr_62201_62260 = state_62185__$1;
(statearr_62201_62260[(1)] = (32));

} else {
var statearr_62202_62261 = state_62185__$1;
(statearr_62202_62261[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (32))){
var inst_62144 = (state_62185[(14)]);
var state_62185__$1 = state_62185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62185__$1,(35),out,inst_62144);
} else {
if((state_val_62186 === (33))){
var inst_62137 = (state_62185[(12)]);
var inst_62115 = inst_62137;
var state_62185__$1 = (function (){var statearr_62203 = state_62185;
(statearr_62203[(7)] = inst_62115);

return statearr_62203;
})();
var statearr_62204_62262 = state_62185__$1;
(statearr_62204_62262[(2)] = null);

(statearr_62204_62262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (13))){
var inst_62115 = (state_62185[(7)]);
var inst_62122 = inst_62115.cljs$lang$protocol_mask$partition0$;
var inst_62123 = (inst_62122 & (64));
var inst_62124 = inst_62115.cljs$core$ISeq$;
var inst_62125 = (inst_62123) || (inst_62124);
var state_62185__$1 = state_62185;
if(cljs.core.truth_(inst_62125)){
var statearr_62205_62263 = state_62185__$1;
(statearr_62205_62263[(1)] = (16));

} else {
var statearr_62206_62264 = state_62185__$1;
(statearr_62206_62264[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (22))){
var inst_62145 = (state_62185[(9)]);
var inst_62144 = (state_62185[(14)]);
var inst_62143 = (state_62185[(2)]);
var inst_62144__$1 = cljs.core.nth.call(null,inst_62143,(0),null);
var inst_62145__$1 = cljs.core.nth.call(null,inst_62143,(1),null);
var inst_62146 = (inst_62144__$1 == null);
var inst_62147 = cljs.core._EQ_.call(null,inst_62145__$1,change);
var inst_62148 = (inst_62146) || (inst_62147);
var state_62185__$1 = (function (){var statearr_62207 = state_62185;
(statearr_62207[(9)] = inst_62145__$1);

(statearr_62207[(14)] = inst_62144__$1);

return statearr_62207;
})();
if(cljs.core.truth_(inst_62148)){
var statearr_62208_62265 = state_62185__$1;
(statearr_62208_62265[(1)] = (23));

} else {
var statearr_62209_62266 = state_62185__$1;
(statearr_62209_62266[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (36))){
var inst_62137 = (state_62185[(12)]);
var inst_62115 = inst_62137;
var state_62185__$1 = (function (){var statearr_62210 = state_62185;
(statearr_62210[(7)] = inst_62115);

return statearr_62210;
})();
var statearr_62211_62267 = state_62185__$1;
(statearr_62211_62267[(2)] = null);

(statearr_62211_62267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (29))){
var inst_62159 = (state_62185[(10)]);
var state_62185__$1 = state_62185;
var statearr_62212_62268 = state_62185__$1;
(statearr_62212_62268[(2)] = inst_62159);

(statearr_62212_62268[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (6))){
var state_62185__$1 = state_62185;
var statearr_62213_62269 = state_62185__$1;
(statearr_62213_62269[(2)] = false);

(statearr_62213_62269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (28))){
var inst_62155 = (state_62185[(2)]);
var inst_62156 = calc_state.call(null);
var inst_62115 = inst_62156;
var state_62185__$1 = (function (){var statearr_62214 = state_62185;
(statearr_62214[(15)] = inst_62155);

(statearr_62214[(7)] = inst_62115);

return statearr_62214;
})();
var statearr_62215_62270 = state_62185__$1;
(statearr_62215_62270[(2)] = null);

(statearr_62215_62270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (25))){
var inst_62181 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
var statearr_62216_62271 = state_62185__$1;
(statearr_62216_62271[(2)] = inst_62181);

(statearr_62216_62271[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (34))){
var inst_62179 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
var statearr_62217_62272 = state_62185__$1;
(statearr_62217_62272[(2)] = inst_62179);

(statearr_62217_62272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (17))){
var state_62185__$1 = state_62185;
var statearr_62218_62273 = state_62185__$1;
(statearr_62218_62273[(2)] = false);

(statearr_62218_62273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (3))){
var state_62185__$1 = state_62185;
var statearr_62219_62274 = state_62185__$1;
(statearr_62219_62274[(2)] = false);

(statearr_62219_62274[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (12))){
var inst_62183 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62185__$1,inst_62183);
} else {
if((state_val_62186 === (2))){
var inst_62091 = (state_62185[(8)]);
var inst_62096 = inst_62091.cljs$lang$protocol_mask$partition0$;
var inst_62097 = (inst_62096 & (64));
var inst_62098 = inst_62091.cljs$core$ISeq$;
var inst_62099 = (inst_62097) || (inst_62098);
var state_62185__$1 = state_62185;
if(cljs.core.truth_(inst_62099)){
var statearr_62220_62275 = state_62185__$1;
(statearr_62220_62275[(1)] = (5));

} else {
var statearr_62221_62276 = state_62185__$1;
(statearr_62221_62276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (23))){
var inst_62144 = (state_62185[(14)]);
var inst_62150 = (inst_62144 == null);
var state_62185__$1 = state_62185;
if(cljs.core.truth_(inst_62150)){
var statearr_62222_62277 = state_62185__$1;
(statearr_62222_62277[(1)] = (26));

} else {
var statearr_62223_62278 = state_62185__$1;
(statearr_62223_62278[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (35))){
var inst_62170 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
if(cljs.core.truth_(inst_62170)){
var statearr_62224_62279 = state_62185__$1;
(statearr_62224_62279[(1)] = (36));

} else {
var statearr_62225_62280 = state_62185__$1;
(statearr_62225_62280[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (19))){
var inst_62115 = (state_62185[(7)]);
var inst_62134 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62115);
var state_62185__$1 = state_62185;
var statearr_62226_62281 = state_62185__$1;
(statearr_62226_62281[(2)] = inst_62134);

(statearr_62226_62281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (11))){
var inst_62115 = (state_62185[(7)]);
var inst_62119 = (inst_62115 == null);
var inst_62120 = cljs.core.not.call(null,inst_62119);
var state_62185__$1 = state_62185;
if(inst_62120){
var statearr_62227_62282 = state_62185__$1;
(statearr_62227_62282[(1)] = (13));

} else {
var statearr_62228_62283 = state_62185__$1;
(statearr_62228_62283[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (9))){
var inst_62091 = (state_62185[(8)]);
var state_62185__$1 = state_62185;
var statearr_62229_62284 = state_62185__$1;
(statearr_62229_62284[(2)] = inst_62091);

(statearr_62229_62284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (5))){
var state_62185__$1 = state_62185;
var statearr_62230_62285 = state_62185__$1;
(statearr_62230_62285[(2)] = true);

(statearr_62230_62285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (14))){
var state_62185__$1 = state_62185;
var statearr_62231_62286 = state_62185__$1;
(statearr_62231_62286[(2)] = false);

(statearr_62231_62286[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (26))){
var inst_62145 = (state_62185[(9)]);
var inst_62152 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_62145);
var state_62185__$1 = state_62185;
var statearr_62232_62287 = state_62185__$1;
(statearr_62232_62287[(2)] = inst_62152);

(statearr_62232_62287[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (16))){
var state_62185__$1 = state_62185;
var statearr_62233_62288 = state_62185__$1;
(statearr_62233_62288[(2)] = true);

(statearr_62233_62288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (38))){
var inst_62175 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
var statearr_62234_62289 = state_62185__$1;
(statearr_62234_62289[(2)] = inst_62175);

(statearr_62234_62289[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (30))){
var inst_62139 = (state_62185[(13)]);
var inst_62145 = (state_62185[(9)]);
var inst_62138 = (state_62185[(11)]);
var inst_62162 = cljs.core.empty_QMARK_.call(null,inst_62138);
var inst_62163 = inst_62139.call(null,inst_62145);
var inst_62164 = cljs.core.not.call(null,inst_62163);
var inst_62165 = (inst_62162) && (inst_62164);
var state_62185__$1 = state_62185;
var statearr_62235_62290 = state_62185__$1;
(statearr_62235_62290[(2)] = inst_62165);

(statearr_62235_62290[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (10))){
var inst_62091 = (state_62185[(8)]);
var inst_62111 = (state_62185[(2)]);
var inst_62112 = cljs.core.get.call(null,inst_62111,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62113 = cljs.core.get.call(null,inst_62111,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62114 = cljs.core.get.call(null,inst_62111,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62115 = inst_62091;
var state_62185__$1 = (function (){var statearr_62236 = state_62185;
(statearr_62236[(16)] = inst_62114);

(statearr_62236[(17)] = inst_62113);

(statearr_62236[(7)] = inst_62115);

(statearr_62236[(18)] = inst_62112);

return statearr_62236;
})();
var statearr_62237_62291 = state_62185__$1;
(statearr_62237_62291[(2)] = null);

(statearr_62237_62291[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (18))){
var inst_62129 = (state_62185[(2)]);
var state_62185__$1 = state_62185;
var statearr_62238_62292 = state_62185__$1;
(statearr_62238_62292[(2)] = inst_62129);

(statearr_62238_62292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (37))){
var state_62185__$1 = state_62185;
var statearr_62239_62293 = state_62185__$1;
(statearr_62239_62293[(2)] = null);

(statearr_62239_62293[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62186 === (8))){
var inst_62091 = (state_62185[(8)]);
var inst_62108 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62091);
var state_62185__$1 = state_62185;
var statearr_62240_62294 = state_62185__$1;
(statearr_62240_62294[(2)] = inst_62108);

(statearr_62240_62294[(1)] = (10));


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
}
}
}
});})(c__37548__auto___62248,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37483__auto__,c__37548__auto___62248,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37484__auto__ = null;
var cljs$core$async$mix_$_state_machine__37484__auto____0 = (function (){
var statearr_62244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62244[(0)] = cljs$core$async$mix_$_state_machine__37484__auto__);

(statearr_62244[(1)] = (1));

return statearr_62244;
});
var cljs$core$async$mix_$_state_machine__37484__auto____1 = (function (state_62185){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_62185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e62245){if((e62245 instanceof Object)){
var ex__37487__auto__ = e62245;
var statearr_62246_62295 = state_62185;
(statearr_62246_62295[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62296 = state_62185;
state_62185 = G__62296;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37484__auto__ = function(state_62185){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37484__auto____1.call(this,state_62185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37484__auto____0;
cljs$core$async$mix_$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37484__auto____1;
return cljs$core$async$mix_$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___62248,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37550__auto__ = (function (){var statearr_62247 = f__37549__auto__.call(null);
(statearr_62247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___62248);

return statearr_62247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___62248,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__34853__auto__ = (((p == null))?null:p);
var m__34854__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__34854__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__34853__auto__ = (((p == null))?null:p);
var m__34854__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,p,v,ch);
} else {
var m__34854__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args62297 = [];
var len__35256__auto___62300 = arguments.length;
var i__35257__auto___62301 = (0);
while(true){
if((i__35257__auto___62301 < len__35256__auto___62300)){
args62297.push((arguments[i__35257__auto___62301]));

var G__62302 = (i__35257__auto___62301 + (1));
i__35257__auto___62301 = G__62302;
continue;
} else {
}
break;
}

var G__62299 = args62297.length;
switch (G__62299) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62297.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__34853__auto__ = (((p == null))?null:p);
var m__34854__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,p);
} else {
var m__34854__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__34853__auto__ = (((p == null))?null:p);
var m__34854__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,p,v);
} else {
var m__34854__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args62305 = [];
var len__35256__auto___62430 = arguments.length;
var i__35257__auto___62431 = (0);
while(true){
if((i__35257__auto___62431 < len__35256__auto___62430)){
args62305.push((arguments[i__35257__auto___62431]));

var G__62432 = (i__35257__auto___62431 + (1));
i__35257__auto___62431 = G__62432;
continue;
} else {
}
break;
}

var G__62307 = args62305.length;
switch (G__62307) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62305.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34198__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34198__auto__,mults){
return (function (p1__62304_SHARP_){
if(cljs.core.truth_(p1__62304_SHARP_.call(null,topic))){
return p1__62304_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__62304_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34198__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async62308 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62308 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62309){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62309 = meta62309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_62310,meta62309__$1){
var self__ = this;
var _62310__$1 = this;
return (new cljs.core.async.t_cljs$core$async62308(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62309__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_62310){
var self__ = this;
var _62310__$1 = this;
return self__.meta62309;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62308.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62308.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62309","meta62309",567488078,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62308.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62308";

cljs.core.async.t_cljs$core$async62308.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async62308");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async62308 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async62308(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62309){
return (new cljs.core.async.t_cljs$core$async62308(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62309));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async62308(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37548__auto___62434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___62434,mults,ensure_mult,p){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___62434,mults,ensure_mult,p){
return (function (state_62382){
var state_val_62383 = (state_62382[(1)]);
if((state_val_62383 === (7))){
var inst_62378 = (state_62382[(2)]);
var state_62382__$1 = state_62382;
var statearr_62384_62435 = state_62382__$1;
(statearr_62384_62435[(2)] = inst_62378);

(statearr_62384_62435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (20))){
var state_62382__$1 = state_62382;
var statearr_62385_62436 = state_62382__$1;
(statearr_62385_62436[(2)] = null);

(statearr_62385_62436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (1))){
var state_62382__$1 = state_62382;
var statearr_62386_62437 = state_62382__$1;
(statearr_62386_62437[(2)] = null);

(statearr_62386_62437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (24))){
var inst_62361 = (state_62382[(7)]);
var inst_62370 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_62361);
var state_62382__$1 = state_62382;
var statearr_62387_62438 = state_62382__$1;
(statearr_62387_62438[(2)] = inst_62370);

(statearr_62387_62438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (4))){
var inst_62313 = (state_62382[(8)]);
var inst_62313__$1 = (state_62382[(2)]);
var inst_62314 = (inst_62313__$1 == null);
var state_62382__$1 = (function (){var statearr_62388 = state_62382;
(statearr_62388[(8)] = inst_62313__$1);

return statearr_62388;
})();
if(cljs.core.truth_(inst_62314)){
var statearr_62389_62439 = state_62382__$1;
(statearr_62389_62439[(1)] = (5));

} else {
var statearr_62390_62440 = state_62382__$1;
(statearr_62390_62440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (15))){
var inst_62355 = (state_62382[(2)]);
var state_62382__$1 = state_62382;
var statearr_62391_62441 = state_62382__$1;
(statearr_62391_62441[(2)] = inst_62355);

(statearr_62391_62441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (21))){
var inst_62375 = (state_62382[(2)]);
var state_62382__$1 = (function (){var statearr_62392 = state_62382;
(statearr_62392[(9)] = inst_62375);

return statearr_62392;
})();
var statearr_62393_62442 = state_62382__$1;
(statearr_62393_62442[(2)] = null);

(statearr_62393_62442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (13))){
var inst_62337 = (state_62382[(10)]);
var inst_62339 = cljs.core.chunked_seq_QMARK_.call(null,inst_62337);
var state_62382__$1 = state_62382;
if(inst_62339){
var statearr_62394_62443 = state_62382__$1;
(statearr_62394_62443[(1)] = (16));

} else {
var statearr_62395_62444 = state_62382__$1;
(statearr_62395_62444[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (22))){
var inst_62367 = (state_62382[(2)]);
var state_62382__$1 = state_62382;
if(cljs.core.truth_(inst_62367)){
var statearr_62396_62445 = state_62382__$1;
(statearr_62396_62445[(1)] = (23));

} else {
var statearr_62397_62446 = state_62382__$1;
(statearr_62397_62446[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (6))){
var inst_62361 = (state_62382[(7)]);
var inst_62313 = (state_62382[(8)]);
var inst_62363 = (state_62382[(11)]);
var inst_62361__$1 = topic_fn.call(null,inst_62313);
var inst_62362 = cljs.core.deref.call(null,mults);
var inst_62363__$1 = cljs.core.get.call(null,inst_62362,inst_62361__$1);
var state_62382__$1 = (function (){var statearr_62398 = state_62382;
(statearr_62398[(7)] = inst_62361__$1);

(statearr_62398[(11)] = inst_62363__$1);

return statearr_62398;
})();
if(cljs.core.truth_(inst_62363__$1)){
var statearr_62399_62447 = state_62382__$1;
(statearr_62399_62447[(1)] = (19));

} else {
var statearr_62400_62448 = state_62382__$1;
(statearr_62400_62448[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (25))){
var inst_62372 = (state_62382[(2)]);
var state_62382__$1 = state_62382;
var statearr_62401_62449 = state_62382__$1;
(statearr_62401_62449[(2)] = inst_62372);

(statearr_62401_62449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (17))){
var inst_62337 = (state_62382[(10)]);
var inst_62346 = cljs.core.first.call(null,inst_62337);
var inst_62347 = cljs.core.async.muxch_STAR_.call(null,inst_62346);
var inst_62348 = cljs.core.async.close_BANG_.call(null,inst_62347);
var inst_62349 = cljs.core.next.call(null,inst_62337);
var inst_62323 = inst_62349;
var inst_62324 = null;
var inst_62325 = (0);
var inst_62326 = (0);
var state_62382__$1 = (function (){var statearr_62402 = state_62382;
(statearr_62402[(12)] = inst_62323);

(statearr_62402[(13)] = inst_62325);

(statearr_62402[(14)] = inst_62326);

(statearr_62402[(15)] = inst_62324);

(statearr_62402[(16)] = inst_62348);

return statearr_62402;
})();
var statearr_62403_62450 = state_62382__$1;
(statearr_62403_62450[(2)] = null);

(statearr_62403_62450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (3))){
var inst_62380 = (state_62382[(2)]);
var state_62382__$1 = state_62382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62382__$1,inst_62380);
} else {
if((state_val_62383 === (12))){
var inst_62357 = (state_62382[(2)]);
var state_62382__$1 = state_62382;
var statearr_62404_62451 = state_62382__$1;
(statearr_62404_62451[(2)] = inst_62357);

(statearr_62404_62451[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (2))){
var state_62382__$1 = state_62382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62382__$1,(4),ch);
} else {
if((state_val_62383 === (23))){
var state_62382__$1 = state_62382;
var statearr_62405_62452 = state_62382__$1;
(statearr_62405_62452[(2)] = null);

(statearr_62405_62452[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (19))){
var inst_62313 = (state_62382[(8)]);
var inst_62363 = (state_62382[(11)]);
var inst_62365 = cljs.core.async.muxch_STAR_.call(null,inst_62363);
var state_62382__$1 = state_62382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62382__$1,(22),inst_62365,inst_62313);
} else {
if((state_val_62383 === (11))){
var inst_62323 = (state_62382[(12)]);
var inst_62337 = (state_62382[(10)]);
var inst_62337__$1 = cljs.core.seq.call(null,inst_62323);
var state_62382__$1 = (function (){var statearr_62406 = state_62382;
(statearr_62406[(10)] = inst_62337__$1);

return statearr_62406;
})();
if(inst_62337__$1){
var statearr_62407_62453 = state_62382__$1;
(statearr_62407_62453[(1)] = (13));

} else {
var statearr_62408_62454 = state_62382__$1;
(statearr_62408_62454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (9))){
var inst_62359 = (state_62382[(2)]);
var state_62382__$1 = state_62382;
var statearr_62409_62455 = state_62382__$1;
(statearr_62409_62455[(2)] = inst_62359);

(statearr_62409_62455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (5))){
var inst_62320 = cljs.core.deref.call(null,mults);
var inst_62321 = cljs.core.vals.call(null,inst_62320);
var inst_62322 = cljs.core.seq.call(null,inst_62321);
var inst_62323 = inst_62322;
var inst_62324 = null;
var inst_62325 = (0);
var inst_62326 = (0);
var state_62382__$1 = (function (){var statearr_62410 = state_62382;
(statearr_62410[(12)] = inst_62323);

(statearr_62410[(13)] = inst_62325);

(statearr_62410[(14)] = inst_62326);

(statearr_62410[(15)] = inst_62324);

return statearr_62410;
})();
var statearr_62411_62456 = state_62382__$1;
(statearr_62411_62456[(2)] = null);

(statearr_62411_62456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (14))){
var state_62382__$1 = state_62382;
var statearr_62415_62457 = state_62382__$1;
(statearr_62415_62457[(2)] = null);

(statearr_62415_62457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (16))){
var inst_62337 = (state_62382[(10)]);
var inst_62341 = cljs.core.chunk_first.call(null,inst_62337);
var inst_62342 = cljs.core.chunk_rest.call(null,inst_62337);
var inst_62343 = cljs.core.count.call(null,inst_62341);
var inst_62323 = inst_62342;
var inst_62324 = inst_62341;
var inst_62325 = inst_62343;
var inst_62326 = (0);
var state_62382__$1 = (function (){var statearr_62416 = state_62382;
(statearr_62416[(12)] = inst_62323);

(statearr_62416[(13)] = inst_62325);

(statearr_62416[(14)] = inst_62326);

(statearr_62416[(15)] = inst_62324);

return statearr_62416;
})();
var statearr_62417_62458 = state_62382__$1;
(statearr_62417_62458[(2)] = null);

(statearr_62417_62458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (10))){
var inst_62323 = (state_62382[(12)]);
var inst_62325 = (state_62382[(13)]);
var inst_62326 = (state_62382[(14)]);
var inst_62324 = (state_62382[(15)]);
var inst_62331 = cljs.core._nth.call(null,inst_62324,inst_62326);
var inst_62332 = cljs.core.async.muxch_STAR_.call(null,inst_62331);
var inst_62333 = cljs.core.async.close_BANG_.call(null,inst_62332);
var inst_62334 = (inst_62326 + (1));
var tmp62412 = inst_62323;
var tmp62413 = inst_62325;
var tmp62414 = inst_62324;
var inst_62323__$1 = tmp62412;
var inst_62324__$1 = tmp62414;
var inst_62325__$1 = tmp62413;
var inst_62326__$1 = inst_62334;
var state_62382__$1 = (function (){var statearr_62418 = state_62382;
(statearr_62418[(12)] = inst_62323__$1);

(statearr_62418[(13)] = inst_62325__$1);

(statearr_62418[(14)] = inst_62326__$1);

(statearr_62418[(15)] = inst_62324__$1);

(statearr_62418[(17)] = inst_62333);

return statearr_62418;
})();
var statearr_62419_62459 = state_62382__$1;
(statearr_62419_62459[(2)] = null);

(statearr_62419_62459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (18))){
var inst_62352 = (state_62382[(2)]);
var state_62382__$1 = state_62382;
var statearr_62420_62460 = state_62382__$1;
(statearr_62420_62460[(2)] = inst_62352);

(statearr_62420_62460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62383 === (8))){
var inst_62325 = (state_62382[(13)]);
var inst_62326 = (state_62382[(14)]);
var inst_62328 = (inst_62326 < inst_62325);
var inst_62329 = inst_62328;
var state_62382__$1 = state_62382;
if(cljs.core.truth_(inst_62329)){
var statearr_62421_62461 = state_62382__$1;
(statearr_62421_62461[(1)] = (10));

} else {
var statearr_62422_62462 = state_62382__$1;
(statearr_62422_62462[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__37548__auto___62434,mults,ensure_mult,p))
;
return ((function (switch__37483__auto__,c__37548__auto___62434,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_62426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62426[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_62426[(1)] = (1));

return statearr_62426;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_62382){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_62382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e62427){if((e62427 instanceof Object)){
var ex__37487__auto__ = e62427;
var statearr_62428_62463 = state_62382;
(statearr_62428_62463[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62464 = state_62382;
state_62382 = G__62464;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_62382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_62382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___62434,mults,ensure_mult,p))
})();
var state__37550__auto__ = (function (){var statearr_62429 = f__37549__auto__.call(null);
(statearr_62429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___62434);

return statearr_62429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___62434,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args62465 = [];
var len__35256__auto___62468 = arguments.length;
var i__35257__auto___62469 = (0);
while(true){
if((i__35257__auto___62469 < len__35256__auto___62468)){
args62465.push((arguments[i__35257__auto___62469]));

var G__62470 = (i__35257__auto___62469 + (1));
i__35257__auto___62469 = G__62470;
continue;
} else {
}
break;
}

var G__62467 = args62465.length;
switch (G__62467) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62465.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args62472 = [];
var len__35256__auto___62475 = arguments.length;
var i__35257__auto___62476 = (0);
while(true){
if((i__35257__auto___62476 < len__35256__auto___62475)){
args62472.push((arguments[i__35257__auto___62476]));

var G__62477 = (i__35257__auto___62476 + (1));
i__35257__auto___62476 = G__62477;
continue;
} else {
}
break;
}

var G__62474 = args62472.length;
switch (G__62474) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62472.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args62479 = [];
var len__35256__auto___62550 = arguments.length;
var i__35257__auto___62551 = (0);
while(true){
if((i__35257__auto___62551 < len__35256__auto___62550)){
args62479.push((arguments[i__35257__auto___62551]));

var G__62552 = (i__35257__auto___62551 + (1));
i__35257__auto___62551 = G__62552;
continue;
} else {
}
break;
}

var G__62481 = args62479.length;
switch (G__62481) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62479.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37548__auto___62554 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___62554,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___62554,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_62520){
var state_val_62521 = (state_62520[(1)]);
if((state_val_62521 === (7))){
var state_62520__$1 = state_62520;
var statearr_62522_62555 = state_62520__$1;
(statearr_62522_62555[(2)] = null);

(statearr_62522_62555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (1))){
var state_62520__$1 = state_62520;
var statearr_62523_62556 = state_62520__$1;
(statearr_62523_62556[(2)] = null);

(statearr_62523_62556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (4))){
var inst_62484 = (state_62520[(7)]);
var inst_62486 = (inst_62484 < cnt);
var state_62520__$1 = state_62520;
if(cljs.core.truth_(inst_62486)){
var statearr_62524_62557 = state_62520__$1;
(statearr_62524_62557[(1)] = (6));

} else {
var statearr_62525_62558 = state_62520__$1;
(statearr_62525_62558[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (15))){
var inst_62516 = (state_62520[(2)]);
var state_62520__$1 = state_62520;
var statearr_62526_62559 = state_62520__$1;
(statearr_62526_62559[(2)] = inst_62516);

(statearr_62526_62559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (13))){
var inst_62509 = cljs.core.async.close_BANG_.call(null,out);
var state_62520__$1 = state_62520;
var statearr_62527_62560 = state_62520__$1;
(statearr_62527_62560[(2)] = inst_62509);

(statearr_62527_62560[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (6))){
var state_62520__$1 = state_62520;
var statearr_62528_62561 = state_62520__$1;
(statearr_62528_62561[(2)] = null);

(statearr_62528_62561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (3))){
var inst_62518 = (state_62520[(2)]);
var state_62520__$1 = state_62520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62520__$1,inst_62518);
} else {
if((state_val_62521 === (12))){
var inst_62506 = (state_62520[(8)]);
var inst_62506__$1 = (state_62520[(2)]);
var inst_62507 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_62506__$1);
var state_62520__$1 = (function (){var statearr_62529 = state_62520;
(statearr_62529[(8)] = inst_62506__$1);

return statearr_62529;
})();
if(cljs.core.truth_(inst_62507)){
var statearr_62530_62562 = state_62520__$1;
(statearr_62530_62562[(1)] = (13));

} else {
var statearr_62531_62563 = state_62520__$1;
(statearr_62531_62563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (2))){
var inst_62483 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_62484 = (0);
var state_62520__$1 = (function (){var statearr_62532 = state_62520;
(statearr_62532[(7)] = inst_62484);

(statearr_62532[(9)] = inst_62483);

return statearr_62532;
})();
var statearr_62533_62564 = state_62520__$1;
(statearr_62533_62564[(2)] = null);

(statearr_62533_62564[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (11))){
var inst_62484 = (state_62520[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_62520,(10),Object,null,(9));
var inst_62493 = chs__$1.call(null,inst_62484);
var inst_62494 = done.call(null,inst_62484);
var inst_62495 = cljs.core.async.take_BANG_.call(null,inst_62493,inst_62494);
var state_62520__$1 = state_62520;
var statearr_62534_62565 = state_62520__$1;
(statearr_62534_62565[(2)] = inst_62495);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62520__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (9))){
var inst_62484 = (state_62520[(7)]);
var inst_62497 = (state_62520[(2)]);
var inst_62498 = (inst_62484 + (1));
var inst_62484__$1 = inst_62498;
var state_62520__$1 = (function (){var statearr_62535 = state_62520;
(statearr_62535[(7)] = inst_62484__$1);

(statearr_62535[(10)] = inst_62497);

return statearr_62535;
})();
var statearr_62536_62566 = state_62520__$1;
(statearr_62536_62566[(2)] = null);

(statearr_62536_62566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (5))){
var inst_62504 = (state_62520[(2)]);
var state_62520__$1 = (function (){var statearr_62537 = state_62520;
(statearr_62537[(11)] = inst_62504);

return statearr_62537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62520__$1,(12),dchan);
} else {
if((state_val_62521 === (14))){
var inst_62506 = (state_62520[(8)]);
var inst_62511 = cljs.core.apply.call(null,f,inst_62506);
var state_62520__$1 = state_62520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62520__$1,(16),out,inst_62511);
} else {
if((state_val_62521 === (16))){
var inst_62513 = (state_62520[(2)]);
var state_62520__$1 = (function (){var statearr_62538 = state_62520;
(statearr_62538[(12)] = inst_62513);

return statearr_62538;
})();
var statearr_62539_62567 = state_62520__$1;
(statearr_62539_62567[(2)] = null);

(statearr_62539_62567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (10))){
var inst_62488 = (state_62520[(2)]);
var inst_62489 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_62520__$1 = (function (){var statearr_62540 = state_62520;
(statearr_62540[(13)] = inst_62488);

return statearr_62540;
})();
var statearr_62541_62568 = state_62520__$1;
(statearr_62541_62568[(2)] = inst_62489);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62520__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62521 === (8))){
var inst_62502 = (state_62520[(2)]);
var state_62520__$1 = state_62520;
var statearr_62542_62569 = state_62520__$1;
(statearr_62542_62569[(2)] = inst_62502);

(statearr_62542_62569[(1)] = (5));


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
});})(c__37548__auto___62554,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37483__auto__,c__37548__auto___62554,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_62546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62546[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_62546[(1)] = (1));

return statearr_62546;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_62520){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_62520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e62547){if((e62547 instanceof Object)){
var ex__37487__auto__ = e62547;
var statearr_62548_62570 = state_62520;
(statearr_62548_62570[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62571 = state_62520;
state_62520 = G__62571;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_62520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_62520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___62554,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37550__auto__ = (function (){var statearr_62549 = f__37549__auto__.call(null);
(statearr_62549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___62554);

return statearr_62549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___62554,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args62573 = [];
var len__35256__auto___62629 = arguments.length;
var i__35257__auto___62630 = (0);
while(true){
if((i__35257__auto___62630 < len__35256__auto___62629)){
args62573.push((arguments[i__35257__auto___62630]));

var G__62631 = (i__35257__auto___62630 + (1));
i__35257__auto___62630 = G__62631;
continue;
} else {
}
break;
}

var G__62575 = args62573.length;
switch (G__62575) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62573.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37548__auto___62633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___62633,out){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___62633,out){
return (function (state_62605){
var state_val_62606 = (state_62605[(1)]);
if((state_val_62606 === (7))){
var inst_62585 = (state_62605[(7)]);
var inst_62584 = (state_62605[(8)]);
var inst_62584__$1 = (state_62605[(2)]);
var inst_62585__$1 = cljs.core.nth.call(null,inst_62584__$1,(0),null);
var inst_62586 = cljs.core.nth.call(null,inst_62584__$1,(1),null);
var inst_62587 = (inst_62585__$1 == null);
var state_62605__$1 = (function (){var statearr_62607 = state_62605;
(statearr_62607[(7)] = inst_62585__$1);

(statearr_62607[(9)] = inst_62586);

(statearr_62607[(8)] = inst_62584__$1);

return statearr_62607;
})();
if(cljs.core.truth_(inst_62587)){
var statearr_62608_62634 = state_62605__$1;
(statearr_62608_62634[(1)] = (8));

} else {
var statearr_62609_62635 = state_62605__$1;
(statearr_62609_62635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62606 === (1))){
var inst_62576 = cljs.core.vec.call(null,chs);
var inst_62577 = inst_62576;
var state_62605__$1 = (function (){var statearr_62610 = state_62605;
(statearr_62610[(10)] = inst_62577);

return statearr_62610;
})();
var statearr_62611_62636 = state_62605__$1;
(statearr_62611_62636[(2)] = null);

(statearr_62611_62636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62606 === (4))){
var inst_62577 = (state_62605[(10)]);
var state_62605__$1 = state_62605;
return cljs.core.async.ioc_alts_BANG_.call(null,state_62605__$1,(7),inst_62577);
} else {
if((state_val_62606 === (6))){
var inst_62601 = (state_62605[(2)]);
var state_62605__$1 = state_62605;
var statearr_62612_62637 = state_62605__$1;
(statearr_62612_62637[(2)] = inst_62601);

(statearr_62612_62637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62606 === (3))){
var inst_62603 = (state_62605[(2)]);
var state_62605__$1 = state_62605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62605__$1,inst_62603);
} else {
if((state_val_62606 === (2))){
var inst_62577 = (state_62605[(10)]);
var inst_62579 = cljs.core.count.call(null,inst_62577);
var inst_62580 = (inst_62579 > (0));
var state_62605__$1 = state_62605;
if(cljs.core.truth_(inst_62580)){
var statearr_62614_62638 = state_62605__$1;
(statearr_62614_62638[(1)] = (4));

} else {
var statearr_62615_62639 = state_62605__$1;
(statearr_62615_62639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62606 === (11))){
var inst_62577 = (state_62605[(10)]);
var inst_62594 = (state_62605[(2)]);
var tmp62613 = inst_62577;
var inst_62577__$1 = tmp62613;
var state_62605__$1 = (function (){var statearr_62616 = state_62605;
(statearr_62616[(11)] = inst_62594);

(statearr_62616[(10)] = inst_62577__$1);

return statearr_62616;
})();
var statearr_62617_62640 = state_62605__$1;
(statearr_62617_62640[(2)] = null);

(statearr_62617_62640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62606 === (9))){
var inst_62585 = (state_62605[(7)]);
var state_62605__$1 = state_62605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62605__$1,(11),out,inst_62585);
} else {
if((state_val_62606 === (5))){
var inst_62599 = cljs.core.async.close_BANG_.call(null,out);
var state_62605__$1 = state_62605;
var statearr_62618_62641 = state_62605__$1;
(statearr_62618_62641[(2)] = inst_62599);

(statearr_62618_62641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62606 === (10))){
var inst_62597 = (state_62605[(2)]);
var state_62605__$1 = state_62605;
var statearr_62619_62642 = state_62605__$1;
(statearr_62619_62642[(2)] = inst_62597);

(statearr_62619_62642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62606 === (8))){
var inst_62577 = (state_62605[(10)]);
var inst_62585 = (state_62605[(7)]);
var inst_62586 = (state_62605[(9)]);
var inst_62584 = (state_62605[(8)]);
var inst_62589 = (function (){var cs = inst_62577;
var vec__62582 = inst_62584;
var v = inst_62585;
var c = inst_62586;
return ((function (cs,vec__62582,v,c,inst_62577,inst_62585,inst_62586,inst_62584,state_val_62606,c__37548__auto___62633,out){
return (function (p1__62572_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__62572_SHARP_);
});
;})(cs,vec__62582,v,c,inst_62577,inst_62585,inst_62586,inst_62584,state_val_62606,c__37548__auto___62633,out))
})();
var inst_62590 = cljs.core.filterv.call(null,inst_62589,inst_62577);
var inst_62577__$1 = inst_62590;
var state_62605__$1 = (function (){var statearr_62620 = state_62605;
(statearr_62620[(10)] = inst_62577__$1);

return statearr_62620;
})();
var statearr_62621_62643 = state_62605__$1;
(statearr_62621_62643[(2)] = null);

(statearr_62621_62643[(1)] = (2));


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
});})(c__37548__auto___62633,out))
;
return ((function (switch__37483__auto__,c__37548__auto___62633,out){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_62625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62625[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_62625[(1)] = (1));

return statearr_62625;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_62605){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_62605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e62626){if((e62626 instanceof Object)){
var ex__37487__auto__ = e62626;
var statearr_62627_62644 = state_62605;
(statearr_62627_62644[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62645 = state_62605;
state_62605 = G__62645;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_62605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_62605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___62633,out))
})();
var state__37550__auto__ = (function (){var statearr_62628 = f__37549__auto__.call(null);
(statearr_62628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___62633);

return statearr_62628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___62633,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args62646 = [];
var len__35256__auto___62695 = arguments.length;
var i__35257__auto___62696 = (0);
while(true){
if((i__35257__auto___62696 < len__35256__auto___62695)){
args62646.push((arguments[i__35257__auto___62696]));

var G__62697 = (i__35257__auto___62696 + (1));
i__35257__auto___62696 = G__62697;
continue;
} else {
}
break;
}

var G__62648 = args62646.length;
switch (G__62648) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62646.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37548__auto___62699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___62699,out){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___62699,out){
return (function (state_62672){
var state_val_62673 = (state_62672[(1)]);
if((state_val_62673 === (7))){
var inst_62654 = (state_62672[(7)]);
var inst_62654__$1 = (state_62672[(2)]);
var inst_62655 = (inst_62654__$1 == null);
var inst_62656 = cljs.core.not.call(null,inst_62655);
var state_62672__$1 = (function (){var statearr_62674 = state_62672;
(statearr_62674[(7)] = inst_62654__$1);

return statearr_62674;
})();
if(inst_62656){
var statearr_62675_62700 = state_62672__$1;
(statearr_62675_62700[(1)] = (8));

} else {
var statearr_62676_62701 = state_62672__$1;
(statearr_62676_62701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62673 === (1))){
var inst_62649 = (0);
var state_62672__$1 = (function (){var statearr_62677 = state_62672;
(statearr_62677[(8)] = inst_62649);

return statearr_62677;
})();
var statearr_62678_62702 = state_62672__$1;
(statearr_62678_62702[(2)] = null);

(statearr_62678_62702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62673 === (4))){
var state_62672__$1 = state_62672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62672__$1,(7),ch);
} else {
if((state_val_62673 === (6))){
var inst_62667 = (state_62672[(2)]);
var state_62672__$1 = state_62672;
var statearr_62679_62703 = state_62672__$1;
(statearr_62679_62703[(2)] = inst_62667);

(statearr_62679_62703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62673 === (3))){
var inst_62669 = (state_62672[(2)]);
var inst_62670 = cljs.core.async.close_BANG_.call(null,out);
var state_62672__$1 = (function (){var statearr_62680 = state_62672;
(statearr_62680[(9)] = inst_62669);

return statearr_62680;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62672__$1,inst_62670);
} else {
if((state_val_62673 === (2))){
var inst_62649 = (state_62672[(8)]);
var inst_62651 = (inst_62649 < n);
var state_62672__$1 = state_62672;
if(cljs.core.truth_(inst_62651)){
var statearr_62681_62704 = state_62672__$1;
(statearr_62681_62704[(1)] = (4));

} else {
var statearr_62682_62705 = state_62672__$1;
(statearr_62682_62705[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62673 === (11))){
var inst_62649 = (state_62672[(8)]);
var inst_62659 = (state_62672[(2)]);
var inst_62660 = (inst_62649 + (1));
var inst_62649__$1 = inst_62660;
var state_62672__$1 = (function (){var statearr_62683 = state_62672;
(statearr_62683[(10)] = inst_62659);

(statearr_62683[(8)] = inst_62649__$1);

return statearr_62683;
})();
var statearr_62684_62706 = state_62672__$1;
(statearr_62684_62706[(2)] = null);

(statearr_62684_62706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62673 === (9))){
var state_62672__$1 = state_62672;
var statearr_62685_62707 = state_62672__$1;
(statearr_62685_62707[(2)] = null);

(statearr_62685_62707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62673 === (5))){
var state_62672__$1 = state_62672;
var statearr_62686_62708 = state_62672__$1;
(statearr_62686_62708[(2)] = null);

(statearr_62686_62708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62673 === (10))){
var inst_62664 = (state_62672[(2)]);
var state_62672__$1 = state_62672;
var statearr_62687_62709 = state_62672__$1;
(statearr_62687_62709[(2)] = inst_62664);

(statearr_62687_62709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62673 === (8))){
var inst_62654 = (state_62672[(7)]);
var state_62672__$1 = state_62672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62672__$1,(11),out,inst_62654);
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
});})(c__37548__auto___62699,out))
;
return ((function (switch__37483__auto__,c__37548__auto___62699,out){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_62691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62691[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_62691[(1)] = (1));

return statearr_62691;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_62672){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_62672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e62692){if((e62692 instanceof Object)){
var ex__37487__auto__ = e62692;
var statearr_62693_62710 = state_62672;
(statearr_62693_62710[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62711 = state_62672;
state_62672 = G__62711;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_62672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_62672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___62699,out))
})();
var state__37550__auto__ = (function (){var statearr_62694 = f__37549__auto__.call(null);
(statearr_62694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___62699);

return statearr_62694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___62699,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async62719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62719 = (function (map_LT_,f,ch,meta62720){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta62720 = meta62720;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62721,meta62720__$1){
var self__ = this;
var _62721__$1 = this;
return (new cljs.core.async.t_cljs$core$async62719(self__.map_LT_,self__.f,self__.ch,meta62720__$1));
});

cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62721){
var self__ = this;
var _62721__$1 = this;
return self__.meta62720;
});

cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async62722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62722 = (function (map_LT_,f,ch,meta62720,_,fn1,meta62723){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta62720 = meta62720;
this._ = _;
this.fn1 = fn1;
this.meta62723 = meta62723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_62724,meta62723__$1){
var self__ = this;
var _62724__$1 = this;
return (new cljs.core.async.t_cljs$core$async62722(self__.map_LT_,self__.f,self__.ch,self__.meta62720,self__._,self__.fn1,meta62723__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async62722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_62724){
var self__ = this;
var _62724__$1 = this;
return self__.meta62723;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62722.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async62722.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62722.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__62712_SHARP_){
return f1.call(null,(((p1__62712_SHARP_ == null))?null:self__.f.call(null,p1__62712_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async62722.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62720","meta62720",881313061,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62719","cljs.core.async/t_cljs$core$async62719",1132629950,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62723","meta62723",-1324211186,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62722.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62722";

cljs.core.async.t_cljs$core$async62722.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async62722");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async62722 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62722(map_LT___$1,f__$1,ch__$1,meta62720__$1,___$2,fn1__$1,meta62723){
return (new cljs.core.async.t_cljs$core$async62722(map_LT___$1,f__$1,ch__$1,meta62720__$1,___$2,fn1__$1,meta62723));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async62722(self__.map_LT_,self__.f,self__.ch,self__.meta62720,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34186__auto__ = ret;
if(cljs.core.truth_(and__34186__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34186__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async62719.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async62719.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62720","meta62720",881313061,null)], null);
});

cljs.core.async.t_cljs$core$async62719.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62719.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62719";

cljs.core.async.t_cljs$core$async62719.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async62719");
});

cljs.core.async.__GT_t_cljs$core$async62719 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62719(map_LT___$1,f__$1,ch__$1,meta62720){
return (new cljs.core.async.t_cljs$core$async62719(map_LT___$1,f__$1,ch__$1,meta62720));
});

}

return (new cljs.core.async.t_cljs$core$async62719(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async62728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62728 = (function (map_GT_,f,ch,meta62729){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta62729 = meta62729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62730,meta62729__$1){
var self__ = this;
var _62730__$1 = this;
return (new cljs.core.async.t_cljs$core$async62728(self__.map_GT_,self__.f,self__.ch,meta62729__$1));
});

cljs.core.async.t_cljs$core$async62728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62730){
var self__ = this;
var _62730__$1 = this;
return self__.meta62729;
});

cljs.core.async.t_cljs$core$async62728.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async62728.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62728.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async62728.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62728.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async62728.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async62728.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62729","meta62729",-162399576,null)], null);
});

cljs.core.async.t_cljs$core$async62728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62728";

cljs.core.async.t_cljs$core$async62728.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async62728");
});

cljs.core.async.__GT_t_cljs$core$async62728 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62728(map_GT___$1,f__$1,ch__$1,meta62729){
return (new cljs.core.async.t_cljs$core$async62728(map_GT___$1,f__$1,ch__$1,meta62729));
});

}

return (new cljs.core.async.t_cljs$core$async62728(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async62734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62734 = (function (filter_GT_,p,ch,meta62735){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta62735 = meta62735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62736,meta62735__$1){
var self__ = this;
var _62736__$1 = this;
return (new cljs.core.async.t_cljs$core$async62734(self__.filter_GT_,self__.p,self__.ch,meta62735__$1));
});

cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62736){
var self__ = this;
var _62736__$1 = this;
return self__.meta62735;
});

cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async62734.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async62734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62735","meta62735",307167215,null)], null);
});

cljs.core.async.t_cljs$core$async62734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62734";

cljs.core.async.t_cljs$core$async62734.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cljs.core.async/t_cljs$core$async62734");
});

cljs.core.async.__GT_t_cljs$core$async62734 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62734(filter_GT___$1,p__$1,ch__$1,meta62735){
return (new cljs.core.async.t_cljs$core$async62734(filter_GT___$1,p__$1,ch__$1,meta62735));
});

}

return (new cljs.core.async.t_cljs$core$async62734(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args62737 = [];
var len__35256__auto___62781 = arguments.length;
var i__35257__auto___62782 = (0);
while(true){
if((i__35257__auto___62782 < len__35256__auto___62781)){
args62737.push((arguments[i__35257__auto___62782]));

var G__62783 = (i__35257__auto___62782 + (1));
i__35257__auto___62782 = G__62783;
continue;
} else {
}
break;
}

var G__62739 = args62737.length;
switch (G__62739) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62737.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37548__auto___62785 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___62785,out){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___62785,out){
return (function (state_62760){
var state_val_62761 = (state_62760[(1)]);
if((state_val_62761 === (7))){
var inst_62756 = (state_62760[(2)]);
var state_62760__$1 = state_62760;
var statearr_62762_62786 = state_62760__$1;
(statearr_62762_62786[(2)] = inst_62756);

(statearr_62762_62786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (1))){
var state_62760__$1 = state_62760;
var statearr_62763_62787 = state_62760__$1;
(statearr_62763_62787[(2)] = null);

(statearr_62763_62787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (4))){
var inst_62742 = (state_62760[(7)]);
var inst_62742__$1 = (state_62760[(2)]);
var inst_62743 = (inst_62742__$1 == null);
var state_62760__$1 = (function (){var statearr_62764 = state_62760;
(statearr_62764[(7)] = inst_62742__$1);

return statearr_62764;
})();
if(cljs.core.truth_(inst_62743)){
var statearr_62765_62788 = state_62760__$1;
(statearr_62765_62788[(1)] = (5));

} else {
var statearr_62766_62789 = state_62760__$1;
(statearr_62766_62789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (6))){
var inst_62742 = (state_62760[(7)]);
var inst_62747 = p.call(null,inst_62742);
var state_62760__$1 = state_62760;
if(cljs.core.truth_(inst_62747)){
var statearr_62767_62790 = state_62760__$1;
(statearr_62767_62790[(1)] = (8));

} else {
var statearr_62768_62791 = state_62760__$1;
(statearr_62768_62791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (3))){
var inst_62758 = (state_62760[(2)]);
var state_62760__$1 = state_62760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62760__$1,inst_62758);
} else {
if((state_val_62761 === (2))){
var state_62760__$1 = state_62760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62760__$1,(4),ch);
} else {
if((state_val_62761 === (11))){
var inst_62750 = (state_62760[(2)]);
var state_62760__$1 = state_62760;
var statearr_62769_62792 = state_62760__$1;
(statearr_62769_62792[(2)] = inst_62750);

(statearr_62769_62792[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (9))){
var state_62760__$1 = state_62760;
var statearr_62770_62793 = state_62760__$1;
(statearr_62770_62793[(2)] = null);

(statearr_62770_62793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (5))){
var inst_62745 = cljs.core.async.close_BANG_.call(null,out);
var state_62760__$1 = state_62760;
var statearr_62771_62794 = state_62760__$1;
(statearr_62771_62794[(2)] = inst_62745);

(statearr_62771_62794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (10))){
var inst_62753 = (state_62760[(2)]);
var state_62760__$1 = (function (){var statearr_62772 = state_62760;
(statearr_62772[(8)] = inst_62753);

return statearr_62772;
})();
var statearr_62773_62795 = state_62760__$1;
(statearr_62773_62795[(2)] = null);

(statearr_62773_62795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (8))){
var inst_62742 = (state_62760[(7)]);
var state_62760__$1 = state_62760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62760__$1,(11),out,inst_62742);
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
});})(c__37548__auto___62785,out))
;
return ((function (switch__37483__auto__,c__37548__auto___62785,out){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_62777 = [null,null,null,null,null,null,null,null,null];
(statearr_62777[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_62777[(1)] = (1));

return statearr_62777;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_62760){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_62760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e62778){if((e62778 instanceof Object)){
var ex__37487__auto__ = e62778;
var statearr_62779_62796 = state_62760;
(statearr_62779_62796[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62797 = state_62760;
state_62760 = G__62797;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_62760){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_62760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___62785,out))
})();
var state__37550__auto__ = (function (){var statearr_62780 = f__37549__auto__.call(null);
(statearr_62780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___62785);

return statearr_62780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___62785,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args62798 = [];
var len__35256__auto___62801 = arguments.length;
var i__35257__auto___62802 = (0);
while(true){
if((i__35257__auto___62802 < len__35256__auto___62801)){
args62798.push((arguments[i__35257__auto___62802]));

var G__62803 = (i__35257__auto___62802 + (1));
i__35257__auto___62802 = G__62803;
continue;
} else {
}
break;
}

var G__62800 = args62798.length;
switch (G__62800) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62798.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37548__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto__){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto__){
return (function (state_62970){
var state_val_62971 = (state_62970[(1)]);
if((state_val_62971 === (7))){
var inst_62966 = (state_62970[(2)]);
var state_62970__$1 = state_62970;
var statearr_62972_63013 = state_62970__$1;
(statearr_62972_63013[(2)] = inst_62966);

(statearr_62972_63013[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (20))){
var inst_62936 = (state_62970[(7)]);
var inst_62947 = (state_62970[(2)]);
var inst_62948 = cljs.core.next.call(null,inst_62936);
var inst_62922 = inst_62948;
var inst_62923 = null;
var inst_62924 = (0);
var inst_62925 = (0);
var state_62970__$1 = (function (){var statearr_62973 = state_62970;
(statearr_62973[(8)] = inst_62925);

(statearr_62973[(9)] = inst_62947);

(statearr_62973[(10)] = inst_62922);

(statearr_62973[(11)] = inst_62924);

(statearr_62973[(12)] = inst_62923);

return statearr_62973;
})();
var statearr_62974_63014 = state_62970__$1;
(statearr_62974_63014[(2)] = null);

(statearr_62974_63014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (1))){
var state_62970__$1 = state_62970;
var statearr_62975_63015 = state_62970__$1;
(statearr_62975_63015[(2)] = null);

(statearr_62975_63015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (4))){
var inst_62911 = (state_62970[(13)]);
var inst_62911__$1 = (state_62970[(2)]);
var inst_62912 = (inst_62911__$1 == null);
var state_62970__$1 = (function (){var statearr_62976 = state_62970;
(statearr_62976[(13)] = inst_62911__$1);

return statearr_62976;
})();
if(cljs.core.truth_(inst_62912)){
var statearr_62977_63016 = state_62970__$1;
(statearr_62977_63016[(1)] = (5));

} else {
var statearr_62978_63017 = state_62970__$1;
(statearr_62978_63017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (15))){
var state_62970__$1 = state_62970;
var statearr_62982_63018 = state_62970__$1;
(statearr_62982_63018[(2)] = null);

(statearr_62982_63018[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (21))){
var state_62970__$1 = state_62970;
var statearr_62983_63019 = state_62970__$1;
(statearr_62983_63019[(2)] = null);

(statearr_62983_63019[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (13))){
var inst_62925 = (state_62970[(8)]);
var inst_62922 = (state_62970[(10)]);
var inst_62924 = (state_62970[(11)]);
var inst_62923 = (state_62970[(12)]);
var inst_62932 = (state_62970[(2)]);
var inst_62933 = (inst_62925 + (1));
var tmp62979 = inst_62922;
var tmp62980 = inst_62924;
var tmp62981 = inst_62923;
var inst_62922__$1 = tmp62979;
var inst_62923__$1 = tmp62981;
var inst_62924__$1 = tmp62980;
var inst_62925__$1 = inst_62933;
var state_62970__$1 = (function (){var statearr_62984 = state_62970;
(statearr_62984[(8)] = inst_62925__$1);

(statearr_62984[(14)] = inst_62932);

(statearr_62984[(10)] = inst_62922__$1);

(statearr_62984[(11)] = inst_62924__$1);

(statearr_62984[(12)] = inst_62923__$1);

return statearr_62984;
})();
var statearr_62985_63020 = state_62970__$1;
(statearr_62985_63020[(2)] = null);

(statearr_62985_63020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (22))){
var state_62970__$1 = state_62970;
var statearr_62986_63021 = state_62970__$1;
(statearr_62986_63021[(2)] = null);

(statearr_62986_63021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (6))){
var inst_62911 = (state_62970[(13)]);
var inst_62920 = f.call(null,inst_62911);
var inst_62921 = cljs.core.seq.call(null,inst_62920);
var inst_62922 = inst_62921;
var inst_62923 = null;
var inst_62924 = (0);
var inst_62925 = (0);
var state_62970__$1 = (function (){var statearr_62987 = state_62970;
(statearr_62987[(8)] = inst_62925);

(statearr_62987[(10)] = inst_62922);

(statearr_62987[(11)] = inst_62924);

(statearr_62987[(12)] = inst_62923);

return statearr_62987;
})();
var statearr_62988_63022 = state_62970__$1;
(statearr_62988_63022[(2)] = null);

(statearr_62988_63022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (17))){
var inst_62936 = (state_62970[(7)]);
var inst_62940 = cljs.core.chunk_first.call(null,inst_62936);
var inst_62941 = cljs.core.chunk_rest.call(null,inst_62936);
var inst_62942 = cljs.core.count.call(null,inst_62940);
var inst_62922 = inst_62941;
var inst_62923 = inst_62940;
var inst_62924 = inst_62942;
var inst_62925 = (0);
var state_62970__$1 = (function (){var statearr_62989 = state_62970;
(statearr_62989[(8)] = inst_62925);

(statearr_62989[(10)] = inst_62922);

(statearr_62989[(11)] = inst_62924);

(statearr_62989[(12)] = inst_62923);

return statearr_62989;
})();
var statearr_62990_63023 = state_62970__$1;
(statearr_62990_63023[(2)] = null);

(statearr_62990_63023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (3))){
var inst_62968 = (state_62970[(2)]);
var state_62970__$1 = state_62970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62970__$1,inst_62968);
} else {
if((state_val_62971 === (12))){
var inst_62956 = (state_62970[(2)]);
var state_62970__$1 = state_62970;
var statearr_62991_63024 = state_62970__$1;
(statearr_62991_63024[(2)] = inst_62956);

(statearr_62991_63024[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (2))){
var state_62970__$1 = state_62970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62970__$1,(4),in$);
} else {
if((state_val_62971 === (23))){
var inst_62964 = (state_62970[(2)]);
var state_62970__$1 = state_62970;
var statearr_62992_63025 = state_62970__$1;
(statearr_62992_63025[(2)] = inst_62964);

(statearr_62992_63025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (19))){
var inst_62951 = (state_62970[(2)]);
var state_62970__$1 = state_62970;
var statearr_62993_63026 = state_62970__$1;
(statearr_62993_63026[(2)] = inst_62951);

(statearr_62993_63026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (11))){
var inst_62936 = (state_62970[(7)]);
var inst_62922 = (state_62970[(10)]);
var inst_62936__$1 = cljs.core.seq.call(null,inst_62922);
var state_62970__$1 = (function (){var statearr_62994 = state_62970;
(statearr_62994[(7)] = inst_62936__$1);

return statearr_62994;
})();
if(inst_62936__$1){
var statearr_62995_63027 = state_62970__$1;
(statearr_62995_63027[(1)] = (14));

} else {
var statearr_62996_63028 = state_62970__$1;
(statearr_62996_63028[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (9))){
var inst_62958 = (state_62970[(2)]);
var inst_62959 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_62970__$1 = (function (){var statearr_62997 = state_62970;
(statearr_62997[(15)] = inst_62958);

return statearr_62997;
})();
if(cljs.core.truth_(inst_62959)){
var statearr_62998_63029 = state_62970__$1;
(statearr_62998_63029[(1)] = (21));

} else {
var statearr_62999_63030 = state_62970__$1;
(statearr_62999_63030[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (5))){
var inst_62914 = cljs.core.async.close_BANG_.call(null,out);
var state_62970__$1 = state_62970;
var statearr_63000_63031 = state_62970__$1;
(statearr_63000_63031[(2)] = inst_62914);

(statearr_63000_63031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (14))){
var inst_62936 = (state_62970[(7)]);
var inst_62938 = cljs.core.chunked_seq_QMARK_.call(null,inst_62936);
var state_62970__$1 = state_62970;
if(inst_62938){
var statearr_63001_63032 = state_62970__$1;
(statearr_63001_63032[(1)] = (17));

} else {
var statearr_63002_63033 = state_62970__$1;
(statearr_63002_63033[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (16))){
var inst_62954 = (state_62970[(2)]);
var state_62970__$1 = state_62970;
var statearr_63003_63034 = state_62970__$1;
(statearr_63003_63034[(2)] = inst_62954);

(statearr_63003_63034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62971 === (10))){
var inst_62925 = (state_62970[(8)]);
var inst_62923 = (state_62970[(12)]);
var inst_62930 = cljs.core._nth.call(null,inst_62923,inst_62925);
var state_62970__$1 = state_62970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62970__$1,(13),out,inst_62930);
} else {
if((state_val_62971 === (18))){
var inst_62936 = (state_62970[(7)]);
var inst_62945 = cljs.core.first.call(null,inst_62936);
var state_62970__$1 = state_62970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62970__$1,(20),out,inst_62945);
} else {
if((state_val_62971 === (8))){
var inst_62925 = (state_62970[(8)]);
var inst_62924 = (state_62970[(11)]);
var inst_62927 = (inst_62925 < inst_62924);
var inst_62928 = inst_62927;
var state_62970__$1 = state_62970;
if(cljs.core.truth_(inst_62928)){
var statearr_63004_63035 = state_62970__$1;
(statearr_63004_63035[(1)] = (10));

} else {
var statearr_63005_63036 = state_62970__$1;
(statearr_63005_63036[(1)] = (11));

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
}
}
}
}
}
}
});})(c__37548__auto__))
;
return ((function (switch__37483__auto__,c__37548__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37484__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37484__auto____0 = (function (){
var statearr_63009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63009[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37484__auto__);

(statearr_63009[(1)] = (1));

return statearr_63009;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37484__auto____1 = (function (state_62970){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_62970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e63010){if((e63010 instanceof Object)){
var ex__37487__auto__ = e63010;
var statearr_63011_63037 = state_62970;
(statearr_63011_63037[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63038 = state_62970;
state_62970 = G__63038;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37484__auto__ = function(state_62970){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37484__auto____1.call(this,state_62970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37484__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37484__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto__))
})();
var state__37550__auto__ = (function (){var statearr_63012 = f__37549__auto__.call(null);
(statearr_63012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto__);

return statearr_63012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto__))
);

return c__37548__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args63039 = [];
var len__35256__auto___63042 = arguments.length;
var i__35257__auto___63043 = (0);
while(true){
if((i__35257__auto___63043 < len__35256__auto___63042)){
args63039.push((arguments[i__35257__auto___63043]));

var G__63044 = (i__35257__auto___63043 + (1));
i__35257__auto___63043 = G__63044;
continue;
} else {
}
break;
}

var G__63041 = args63039.length;
switch (G__63041) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63039.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args63046 = [];
var len__35256__auto___63049 = arguments.length;
var i__35257__auto___63050 = (0);
while(true){
if((i__35257__auto___63050 < len__35256__auto___63049)){
args63046.push((arguments[i__35257__auto___63050]));

var G__63051 = (i__35257__auto___63050 + (1));
i__35257__auto___63050 = G__63051;
continue;
} else {
}
break;
}

var G__63048 = args63046.length;
switch (G__63048) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63046.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args63053 = [];
var len__35256__auto___63104 = arguments.length;
var i__35257__auto___63105 = (0);
while(true){
if((i__35257__auto___63105 < len__35256__auto___63104)){
args63053.push((arguments[i__35257__auto___63105]));

var G__63106 = (i__35257__auto___63105 + (1));
i__35257__auto___63105 = G__63106;
continue;
} else {
}
break;
}

var G__63055 = args63053.length;
switch (G__63055) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63053.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37548__auto___63108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___63108,out){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___63108,out){
return (function (state_63079){
var state_val_63080 = (state_63079[(1)]);
if((state_val_63080 === (7))){
var inst_63074 = (state_63079[(2)]);
var state_63079__$1 = state_63079;
var statearr_63081_63109 = state_63079__$1;
(statearr_63081_63109[(2)] = inst_63074);

(statearr_63081_63109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63080 === (1))){
var inst_63056 = null;
var state_63079__$1 = (function (){var statearr_63082 = state_63079;
(statearr_63082[(7)] = inst_63056);

return statearr_63082;
})();
var statearr_63083_63110 = state_63079__$1;
(statearr_63083_63110[(2)] = null);

(statearr_63083_63110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63080 === (4))){
var inst_63059 = (state_63079[(8)]);
var inst_63059__$1 = (state_63079[(2)]);
var inst_63060 = (inst_63059__$1 == null);
var inst_63061 = cljs.core.not.call(null,inst_63060);
var state_63079__$1 = (function (){var statearr_63084 = state_63079;
(statearr_63084[(8)] = inst_63059__$1);

return statearr_63084;
})();
if(inst_63061){
var statearr_63085_63111 = state_63079__$1;
(statearr_63085_63111[(1)] = (5));

} else {
var statearr_63086_63112 = state_63079__$1;
(statearr_63086_63112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63080 === (6))){
var state_63079__$1 = state_63079;
var statearr_63087_63113 = state_63079__$1;
(statearr_63087_63113[(2)] = null);

(statearr_63087_63113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63080 === (3))){
var inst_63076 = (state_63079[(2)]);
var inst_63077 = cljs.core.async.close_BANG_.call(null,out);
var state_63079__$1 = (function (){var statearr_63088 = state_63079;
(statearr_63088[(9)] = inst_63076);

return statearr_63088;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63079__$1,inst_63077);
} else {
if((state_val_63080 === (2))){
var state_63079__$1 = state_63079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63079__$1,(4),ch);
} else {
if((state_val_63080 === (11))){
var inst_63059 = (state_63079[(8)]);
var inst_63068 = (state_63079[(2)]);
var inst_63056 = inst_63059;
var state_63079__$1 = (function (){var statearr_63089 = state_63079;
(statearr_63089[(10)] = inst_63068);

(statearr_63089[(7)] = inst_63056);

return statearr_63089;
})();
var statearr_63090_63114 = state_63079__$1;
(statearr_63090_63114[(2)] = null);

(statearr_63090_63114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63080 === (9))){
var inst_63059 = (state_63079[(8)]);
var state_63079__$1 = state_63079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63079__$1,(11),out,inst_63059);
} else {
if((state_val_63080 === (5))){
var inst_63059 = (state_63079[(8)]);
var inst_63056 = (state_63079[(7)]);
var inst_63063 = cljs.core._EQ_.call(null,inst_63059,inst_63056);
var state_63079__$1 = state_63079;
if(inst_63063){
var statearr_63092_63115 = state_63079__$1;
(statearr_63092_63115[(1)] = (8));

} else {
var statearr_63093_63116 = state_63079__$1;
(statearr_63093_63116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63080 === (10))){
var inst_63071 = (state_63079[(2)]);
var state_63079__$1 = state_63079;
var statearr_63094_63117 = state_63079__$1;
(statearr_63094_63117[(2)] = inst_63071);

(statearr_63094_63117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63080 === (8))){
var inst_63056 = (state_63079[(7)]);
var tmp63091 = inst_63056;
var inst_63056__$1 = tmp63091;
var state_63079__$1 = (function (){var statearr_63095 = state_63079;
(statearr_63095[(7)] = inst_63056__$1);

return statearr_63095;
})();
var statearr_63096_63118 = state_63079__$1;
(statearr_63096_63118[(2)] = null);

(statearr_63096_63118[(1)] = (2));


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
});})(c__37548__auto___63108,out))
;
return ((function (switch__37483__auto__,c__37548__auto___63108,out){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_63100 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63100[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_63100[(1)] = (1));

return statearr_63100;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_63079){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_63079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e63101){if((e63101 instanceof Object)){
var ex__37487__auto__ = e63101;
var statearr_63102_63119 = state_63079;
(statearr_63102_63119[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63120 = state_63079;
state_63079 = G__63120;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_63079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_63079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___63108,out))
})();
var state__37550__auto__ = (function (){var statearr_63103 = f__37549__auto__.call(null);
(statearr_63103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___63108);

return statearr_63103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___63108,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args63121 = [];
var len__35256__auto___63191 = arguments.length;
var i__35257__auto___63192 = (0);
while(true){
if((i__35257__auto___63192 < len__35256__auto___63191)){
args63121.push((arguments[i__35257__auto___63192]));

var G__63193 = (i__35257__auto___63192 + (1));
i__35257__auto___63192 = G__63193;
continue;
} else {
}
break;
}

var G__63123 = args63121.length;
switch (G__63123) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63121.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37548__auto___63195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___63195,out){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___63195,out){
return (function (state_63161){
var state_val_63162 = (state_63161[(1)]);
if((state_val_63162 === (7))){
var inst_63157 = (state_63161[(2)]);
var state_63161__$1 = state_63161;
var statearr_63163_63196 = state_63161__$1;
(statearr_63163_63196[(2)] = inst_63157);

(statearr_63163_63196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (1))){
var inst_63124 = (new Array(n));
var inst_63125 = inst_63124;
var inst_63126 = (0);
var state_63161__$1 = (function (){var statearr_63164 = state_63161;
(statearr_63164[(7)] = inst_63125);

(statearr_63164[(8)] = inst_63126);

return statearr_63164;
})();
var statearr_63165_63197 = state_63161__$1;
(statearr_63165_63197[(2)] = null);

(statearr_63165_63197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (4))){
var inst_63129 = (state_63161[(9)]);
var inst_63129__$1 = (state_63161[(2)]);
var inst_63130 = (inst_63129__$1 == null);
var inst_63131 = cljs.core.not.call(null,inst_63130);
var state_63161__$1 = (function (){var statearr_63166 = state_63161;
(statearr_63166[(9)] = inst_63129__$1);

return statearr_63166;
})();
if(inst_63131){
var statearr_63167_63198 = state_63161__$1;
(statearr_63167_63198[(1)] = (5));

} else {
var statearr_63168_63199 = state_63161__$1;
(statearr_63168_63199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (15))){
var inst_63151 = (state_63161[(2)]);
var state_63161__$1 = state_63161;
var statearr_63169_63200 = state_63161__$1;
(statearr_63169_63200[(2)] = inst_63151);

(statearr_63169_63200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (13))){
var state_63161__$1 = state_63161;
var statearr_63170_63201 = state_63161__$1;
(statearr_63170_63201[(2)] = null);

(statearr_63170_63201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (6))){
var inst_63126 = (state_63161[(8)]);
var inst_63147 = (inst_63126 > (0));
var state_63161__$1 = state_63161;
if(cljs.core.truth_(inst_63147)){
var statearr_63171_63202 = state_63161__$1;
(statearr_63171_63202[(1)] = (12));

} else {
var statearr_63172_63203 = state_63161__$1;
(statearr_63172_63203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (3))){
var inst_63159 = (state_63161[(2)]);
var state_63161__$1 = state_63161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63161__$1,inst_63159);
} else {
if((state_val_63162 === (12))){
var inst_63125 = (state_63161[(7)]);
var inst_63149 = cljs.core.vec.call(null,inst_63125);
var state_63161__$1 = state_63161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63161__$1,(15),out,inst_63149);
} else {
if((state_val_63162 === (2))){
var state_63161__$1 = state_63161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63161__$1,(4),ch);
} else {
if((state_val_63162 === (11))){
var inst_63141 = (state_63161[(2)]);
var inst_63142 = (new Array(n));
var inst_63125 = inst_63142;
var inst_63126 = (0);
var state_63161__$1 = (function (){var statearr_63173 = state_63161;
(statearr_63173[(7)] = inst_63125);

(statearr_63173[(8)] = inst_63126);

(statearr_63173[(10)] = inst_63141);

return statearr_63173;
})();
var statearr_63174_63204 = state_63161__$1;
(statearr_63174_63204[(2)] = null);

(statearr_63174_63204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (9))){
var inst_63125 = (state_63161[(7)]);
var inst_63139 = cljs.core.vec.call(null,inst_63125);
var state_63161__$1 = state_63161;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63161__$1,(11),out,inst_63139);
} else {
if((state_val_63162 === (5))){
var inst_63129 = (state_63161[(9)]);
var inst_63125 = (state_63161[(7)]);
var inst_63126 = (state_63161[(8)]);
var inst_63134 = (state_63161[(11)]);
var inst_63133 = (inst_63125[inst_63126] = inst_63129);
var inst_63134__$1 = (inst_63126 + (1));
var inst_63135 = (inst_63134__$1 < n);
var state_63161__$1 = (function (){var statearr_63175 = state_63161;
(statearr_63175[(11)] = inst_63134__$1);

(statearr_63175[(12)] = inst_63133);

return statearr_63175;
})();
if(cljs.core.truth_(inst_63135)){
var statearr_63176_63205 = state_63161__$1;
(statearr_63176_63205[(1)] = (8));

} else {
var statearr_63177_63206 = state_63161__$1;
(statearr_63177_63206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (14))){
var inst_63154 = (state_63161[(2)]);
var inst_63155 = cljs.core.async.close_BANG_.call(null,out);
var state_63161__$1 = (function (){var statearr_63179 = state_63161;
(statearr_63179[(13)] = inst_63154);

return statearr_63179;
})();
var statearr_63180_63207 = state_63161__$1;
(statearr_63180_63207[(2)] = inst_63155);

(statearr_63180_63207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (10))){
var inst_63145 = (state_63161[(2)]);
var state_63161__$1 = state_63161;
var statearr_63181_63208 = state_63161__$1;
(statearr_63181_63208[(2)] = inst_63145);

(statearr_63181_63208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63162 === (8))){
var inst_63125 = (state_63161[(7)]);
var inst_63134 = (state_63161[(11)]);
var tmp63178 = inst_63125;
var inst_63125__$1 = tmp63178;
var inst_63126 = inst_63134;
var state_63161__$1 = (function (){var statearr_63182 = state_63161;
(statearr_63182[(7)] = inst_63125__$1);

(statearr_63182[(8)] = inst_63126);

return statearr_63182;
})();
var statearr_63183_63209 = state_63161__$1;
(statearr_63183_63209[(2)] = null);

(statearr_63183_63209[(1)] = (2));


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
});})(c__37548__auto___63195,out))
;
return ((function (switch__37483__auto__,c__37548__auto___63195,out){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_63187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63187[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_63187[(1)] = (1));

return statearr_63187;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_63161){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_63161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e63188){if((e63188 instanceof Object)){
var ex__37487__auto__ = e63188;
var statearr_63189_63210 = state_63161;
(statearr_63189_63210[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63211 = state_63161;
state_63161 = G__63211;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_63161){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_63161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___63195,out))
})();
var state__37550__auto__ = (function (){var statearr_63190 = f__37549__auto__.call(null);
(statearr_63190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___63195);

return statearr_63190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___63195,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args63212 = [];
var len__35256__auto___63286 = arguments.length;
var i__35257__auto___63287 = (0);
while(true){
if((i__35257__auto___63287 < len__35256__auto___63286)){
args63212.push((arguments[i__35257__auto___63287]));

var G__63288 = (i__35257__auto___63287 + (1));
i__35257__auto___63287 = G__63288;
continue;
} else {
}
break;
}

var G__63214 = args63212.length;
switch (G__63214) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63212.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37548__auto___63290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37548__auto___63290,out){
return (function (){
var f__37549__auto__ = (function (){var switch__37483__auto__ = ((function (c__37548__auto___63290,out){
return (function (state_63256){
var state_val_63257 = (state_63256[(1)]);
if((state_val_63257 === (7))){
var inst_63252 = (state_63256[(2)]);
var state_63256__$1 = state_63256;
var statearr_63258_63291 = state_63256__$1;
(statearr_63258_63291[(2)] = inst_63252);

(statearr_63258_63291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (1))){
var inst_63215 = [];
var inst_63216 = inst_63215;
var inst_63217 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63256__$1 = (function (){var statearr_63259 = state_63256;
(statearr_63259[(7)] = inst_63217);

(statearr_63259[(8)] = inst_63216);

return statearr_63259;
})();
var statearr_63260_63292 = state_63256__$1;
(statearr_63260_63292[(2)] = null);

(statearr_63260_63292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (4))){
var inst_63220 = (state_63256[(9)]);
var inst_63220__$1 = (state_63256[(2)]);
var inst_63221 = (inst_63220__$1 == null);
var inst_63222 = cljs.core.not.call(null,inst_63221);
var state_63256__$1 = (function (){var statearr_63261 = state_63256;
(statearr_63261[(9)] = inst_63220__$1);

return statearr_63261;
})();
if(inst_63222){
var statearr_63262_63293 = state_63256__$1;
(statearr_63262_63293[(1)] = (5));

} else {
var statearr_63263_63294 = state_63256__$1;
(statearr_63263_63294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (15))){
var inst_63246 = (state_63256[(2)]);
var state_63256__$1 = state_63256;
var statearr_63264_63295 = state_63256__$1;
(statearr_63264_63295[(2)] = inst_63246);

(statearr_63264_63295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (13))){
var state_63256__$1 = state_63256;
var statearr_63265_63296 = state_63256__$1;
(statearr_63265_63296[(2)] = null);

(statearr_63265_63296[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (6))){
var inst_63216 = (state_63256[(8)]);
var inst_63241 = inst_63216.length;
var inst_63242 = (inst_63241 > (0));
var state_63256__$1 = state_63256;
if(cljs.core.truth_(inst_63242)){
var statearr_63266_63297 = state_63256__$1;
(statearr_63266_63297[(1)] = (12));

} else {
var statearr_63267_63298 = state_63256__$1;
(statearr_63267_63298[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (3))){
var inst_63254 = (state_63256[(2)]);
var state_63256__$1 = state_63256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63256__$1,inst_63254);
} else {
if((state_val_63257 === (12))){
var inst_63216 = (state_63256[(8)]);
var inst_63244 = cljs.core.vec.call(null,inst_63216);
var state_63256__$1 = state_63256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63256__$1,(15),out,inst_63244);
} else {
if((state_val_63257 === (2))){
var state_63256__$1 = state_63256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63256__$1,(4),ch);
} else {
if((state_val_63257 === (11))){
var inst_63224 = (state_63256[(10)]);
var inst_63220 = (state_63256[(9)]);
var inst_63234 = (state_63256[(2)]);
var inst_63235 = [];
var inst_63236 = inst_63235.push(inst_63220);
var inst_63216 = inst_63235;
var inst_63217 = inst_63224;
var state_63256__$1 = (function (){var statearr_63268 = state_63256;
(statearr_63268[(11)] = inst_63236);

(statearr_63268[(7)] = inst_63217);

(statearr_63268[(8)] = inst_63216);

(statearr_63268[(12)] = inst_63234);

return statearr_63268;
})();
var statearr_63269_63299 = state_63256__$1;
(statearr_63269_63299[(2)] = null);

(statearr_63269_63299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (9))){
var inst_63216 = (state_63256[(8)]);
var inst_63232 = cljs.core.vec.call(null,inst_63216);
var state_63256__$1 = state_63256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63256__$1,(11),out,inst_63232);
} else {
if((state_val_63257 === (5))){
var inst_63224 = (state_63256[(10)]);
var inst_63220 = (state_63256[(9)]);
var inst_63217 = (state_63256[(7)]);
var inst_63224__$1 = f.call(null,inst_63220);
var inst_63225 = cljs.core._EQ_.call(null,inst_63224__$1,inst_63217);
var inst_63226 = cljs.core.keyword_identical_QMARK_.call(null,inst_63217,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_63227 = (inst_63225) || (inst_63226);
var state_63256__$1 = (function (){var statearr_63270 = state_63256;
(statearr_63270[(10)] = inst_63224__$1);

return statearr_63270;
})();
if(cljs.core.truth_(inst_63227)){
var statearr_63271_63300 = state_63256__$1;
(statearr_63271_63300[(1)] = (8));

} else {
var statearr_63272_63301 = state_63256__$1;
(statearr_63272_63301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (14))){
var inst_63249 = (state_63256[(2)]);
var inst_63250 = cljs.core.async.close_BANG_.call(null,out);
var state_63256__$1 = (function (){var statearr_63274 = state_63256;
(statearr_63274[(13)] = inst_63249);

return statearr_63274;
})();
var statearr_63275_63302 = state_63256__$1;
(statearr_63275_63302[(2)] = inst_63250);

(statearr_63275_63302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (10))){
var inst_63239 = (state_63256[(2)]);
var state_63256__$1 = state_63256;
var statearr_63276_63303 = state_63256__$1;
(statearr_63276_63303[(2)] = inst_63239);

(statearr_63276_63303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63257 === (8))){
var inst_63224 = (state_63256[(10)]);
var inst_63220 = (state_63256[(9)]);
var inst_63216 = (state_63256[(8)]);
var inst_63229 = inst_63216.push(inst_63220);
var tmp63273 = inst_63216;
var inst_63216__$1 = tmp63273;
var inst_63217 = inst_63224;
var state_63256__$1 = (function (){var statearr_63277 = state_63256;
(statearr_63277[(14)] = inst_63229);

(statearr_63277[(7)] = inst_63217);

(statearr_63277[(8)] = inst_63216__$1);

return statearr_63277;
})();
var statearr_63278_63304 = state_63256__$1;
(statearr_63278_63304[(2)] = null);

(statearr_63278_63304[(1)] = (2));


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
});})(c__37548__auto___63290,out))
;
return ((function (switch__37483__auto__,c__37548__auto___63290,out){
return (function() {
var cljs$core$async$state_machine__37484__auto__ = null;
var cljs$core$async$state_machine__37484__auto____0 = (function (){
var statearr_63282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63282[(0)] = cljs$core$async$state_machine__37484__auto__);

(statearr_63282[(1)] = (1));

return statearr_63282;
});
var cljs$core$async$state_machine__37484__auto____1 = (function (state_63256){
while(true){
var ret_value__37485__auto__ = (function (){try{while(true){
var result__37486__auto__ = switch__37483__auto__.call(null,state_63256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37486__auto__;
}
break;
}
}catch (e63283){if((e63283 instanceof Object)){
var ex__37487__auto__ = e63283;
var statearr_63284_63305 = state_63256;
(statearr_63284_63305[(5)] = ex__37487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63306 = state_63256;
state_63256 = G__63306;
continue;
} else {
return ret_value__37485__auto__;
}
break;
}
});
cljs$core$async$state_machine__37484__auto__ = function(state_63256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37484__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37484__auto____1.call(this,state_63256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37484__auto____0;
cljs$core$async$state_machine__37484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37484__auto____1;
return cljs$core$async$state_machine__37484__auto__;
})()
;})(switch__37483__auto__,c__37548__auto___63290,out))
})();
var state__37550__auto__ = (function (){var statearr_63285 = f__37549__auto__.call(null);
(statearr_63285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37548__auto___63290);

return statearr_63285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37550__auto__);
});})(c__37548__auto___63290,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
