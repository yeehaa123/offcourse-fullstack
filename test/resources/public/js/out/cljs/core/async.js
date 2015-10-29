// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async30932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30932 = (function (fn_handler,f,meta30933){
this.fn_handler = fn_handler;
this.f = f;
this.meta30933 = meta30933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30934,meta30933__$1){
var self__ = this;
var _30934__$1 = this;
return (new cljs.core.async.t_cljs$core$async30932(self__.fn_handler,self__.f,meta30933__$1));
});

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30934){
var self__ = this;
var _30934__$1 = this;
return self__.meta30933;
});

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta30933","meta30933",1941518587,null)], null);
});

cljs.core.async.t_cljs$core$async30932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30932";

cljs.core.async.t_cljs$core$async30932.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async30932");
});

cljs.core.async.__GT_t_cljs$core$async30932 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async30932(fn_handler__$1,f__$1,meta30933){
return (new cljs.core.async.t_cljs$core$async30932(fn_handler__$1,f__$1,meta30933));
});

}

return (new cljs.core.async.t_cljs$core$async30932(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args30937 = [];
var len__20220__auto___30940 = arguments.length;
var i__20221__auto___30941 = (0);
while(true){
if((i__20221__auto___30941 < len__20220__auto___30940)){
args30937.push((arguments[i__20221__auto___30941]));

var G__30942 = (i__20221__auto___30941 + (1));
i__20221__auto___30941 = G__30942;
continue;
} else {
}
break;
}

var G__30939 = args30937.length;
switch (G__30939) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30937.length)].join('')));

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
var args30944 = [];
var len__20220__auto___30947 = arguments.length;
var i__20221__auto___30948 = (0);
while(true){
if((i__20221__auto___30948 < len__20220__auto___30947)){
args30944.push((arguments[i__20221__auto___30948]));

var G__30949 = (i__20221__auto___30948 + (1));
i__20221__auto___30948 = G__30949;
continue;
} else {
}
break;
}

var G__30946 = args30944.length;
switch (G__30946) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30944.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30951 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30951);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30951,ret){
return (function (){
return fn1.call(null,val_30951);
});})(val_30951,ret))
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
var args30952 = [];
var len__20220__auto___30955 = arguments.length;
var i__20221__auto___30956 = (0);
while(true){
if((i__20221__auto___30956 < len__20220__auto___30955)){
args30952.push((arguments[i__20221__auto___30956]));

var G__30957 = (i__20221__auto___30956 + (1));
i__20221__auto___30956 = G__30957;
continue;
} else {
}
break;
}

var G__30954 = args30952.length;
switch (G__30954) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30952.length)].join('')));

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
var n__20065__auto___30959 = n;
var x_30960 = (0);
while(true){
if((x_30960 < n__20065__auto___30959)){
(a[x_30960] = (0));

var G__30961 = (x_30960 + (1));
x_30960 = G__30961;
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

var G__30962 = (i + (1));
i = G__30962;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30966 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30966 = (function (alt_flag,flag,meta30967){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30967 = meta30967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30968,meta30967__$1){
var self__ = this;
var _30968__$1 = this;
return (new cljs.core.async.t_cljs$core$async30966(self__.alt_flag,self__.flag,meta30967__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30968){
var self__ = this;
var _30968__$1 = this;
return self__.meta30967;
});})(flag))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30966.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30967","meta30967",748891790,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30966.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30966";

cljs.core.async.t_cljs$core$async30966.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async30966");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30966 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30966(alt_flag__$1,flag__$1,meta30967){
return (new cljs.core.async.t_cljs$core$async30966(alt_flag__$1,flag__$1,meta30967));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30966(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30972 = (function (alt_handler,flag,cb,meta30973){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30973 = meta30973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30974,meta30973__$1){
var self__ = this;
var _30974__$1 = this;
return (new cljs.core.async.t_cljs$core$async30972(self__.alt_handler,self__.flag,self__.cb,meta30973__$1));
});

cljs.core.async.t_cljs$core$async30972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30974){
var self__ = this;
var _30974__$1 = this;
return self__.meta30973;
});

cljs.core.async.t_cljs$core$async30972.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30973","meta30973",957594007,null)], null);
});

cljs.core.async.t_cljs$core$async30972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30972";

cljs.core.async.t_cljs$core$async30972.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async30972");
});

cljs.core.async.__GT_t_cljs$core$async30972 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30972(alt_handler__$1,flag__$1,cb__$1,meta30973){
return (new cljs.core.async.t_cljs$core$async30972(alt_handler__$1,flag__$1,cb__$1,meta30973));
});

}

return (new cljs.core.async.t_cljs$core$async30972(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30975_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30975_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30976_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30976_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19162__auto__ = wport;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30977 = (i + (1));
i = G__30977;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19162__auto__ = ret;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19150__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19150__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19150__auto__;
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
var args__20227__auto__ = [];
var len__20220__auto___30983 = arguments.length;
var i__20221__auto___30984 = (0);
while(true){
if((i__20221__auto___30984 < len__20220__auto___30983)){
args__20227__auto__.push((arguments[i__20221__auto___30984]));

var G__30985 = (i__20221__auto___30984 + (1));
i__20221__auto___30984 = G__30985;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30980){
var map__30981 = p__30980;
var map__30981__$1 = ((((!((map__30981 == null)))?((((map__30981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30981):map__30981);
var opts = map__30981__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30978){
var G__30979 = cljs.core.first.call(null,seq30978);
var seq30978__$1 = cljs.core.next.call(null,seq30978);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30979,seq30978__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30986 = [];
var len__20220__auto___31036 = arguments.length;
var i__20221__auto___31037 = (0);
while(true){
if((i__20221__auto___31037 < len__20220__auto___31036)){
args30986.push((arguments[i__20221__auto___31037]));

var G__31038 = (i__20221__auto___31037 + (1));
i__20221__auto___31037 = G__31038;
continue;
} else {
}
break;
}

var G__30988 = args30986.length;
switch (G__30988) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30986.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22242__auto___31040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___31040){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___31040){
return (function (state_31012){
var state_val_31013 = (state_31012[(1)]);
if((state_val_31013 === (7))){
var inst_31008 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31014_31041 = state_31012__$1;
(statearr_31014_31041[(2)] = inst_31008);

(statearr_31014_31041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (1))){
var state_31012__$1 = state_31012;
var statearr_31015_31042 = state_31012__$1;
(statearr_31015_31042[(2)] = null);

(statearr_31015_31042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (4))){
var inst_30991 = (state_31012[(7)]);
var inst_30991__$1 = (state_31012[(2)]);
var inst_30992 = (inst_30991__$1 == null);
var state_31012__$1 = (function (){var statearr_31016 = state_31012;
(statearr_31016[(7)] = inst_30991__$1);

return statearr_31016;
})();
if(cljs.core.truth_(inst_30992)){
var statearr_31017_31043 = state_31012__$1;
(statearr_31017_31043[(1)] = (5));

} else {
var statearr_31018_31044 = state_31012__$1;
(statearr_31018_31044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (13))){
var state_31012__$1 = state_31012;
var statearr_31019_31045 = state_31012__$1;
(statearr_31019_31045[(2)] = null);

(statearr_31019_31045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (6))){
var inst_30991 = (state_31012[(7)]);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31012__$1,(11),to,inst_30991);
} else {
if((state_val_31013 === (3))){
var inst_31010 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31012__$1,inst_31010);
} else {
if((state_val_31013 === (12))){
var state_31012__$1 = state_31012;
var statearr_31020_31046 = state_31012__$1;
(statearr_31020_31046[(2)] = null);

(statearr_31020_31046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (2))){
var state_31012__$1 = state_31012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31012__$1,(4),from);
} else {
if((state_val_31013 === (11))){
var inst_31001 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
if(cljs.core.truth_(inst_31001)){
var statearr_31021_31047 = state_31012__$1;
(statearr_31021_31047[(1)] = (12));

} else {
var statearr_31022_31048 = state_31012__$1;
(statearr_31022_31048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (9))){
var state_31012__$1 = state_31012;
var statearr_31023_31049 = state_31012__$1;
(statearr_31023_31049[(2)] = null);

(statearr_31023_31049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (5))){
var state_31012__$1 = state_31012;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31024_31050 = state_31012__$1;
(statearr_31024_31050[(1)] = (8));

} else {
var statearr_31025_31051 = state_31012__$1;
(statearr_31025_31051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (14))){
var inst_31006 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31026_31052 = state_31012__$1;
(statearr_31026_31052[(2)] = inst_31006);

(statearr_31026_31052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (10))){
var inst_30998 = (state_31012[(2)]);
var state_31012__$1 = state_31012;
var statearr_31027_31053 = state_31012__$1;
(statearr_31027_31053[(2)] = inst_30998);

(statearr_31027_31053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31013 === (8))){
var inst_30995 = cljs.core.async.close_BANG_.call(null,to);
var state_31012__$1 = state_31012;
var statearr_31028_31054 = state_31012__$1;
(statearr_31028_31054[(2)] = inst_30995);

(statearr_31028_31054[(1)] = (10));


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
});})(c__22242__auto___31040))
;
return ((function (switch__22177__auto__,c__22242__auto___31040){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_31032 = [null,null,null,null,null,null,null,null];
(statearr_31032[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_31032[(1)] = (1));

return statearr_31032;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_31012){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31033){if((e31033 instanceof Object)){
var ex__22181__auto__ = e31033;
var statearr_31034_31055 = state_31012;
(statearr_31034_31055[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31056 = state_31012;
state_31012 = G__31056;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_31012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_31012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___31040))
})();
var state__22244__auto__ = (function (){var statearr_31035 = f__22243__auto__.call(null);
(statearr_31035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___31040);

return statearr_31035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___31040))
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
return (function (p__31240){
var vec__31241 = p__31240;
var v = cljs.core.nth.call(null,vec__31241,(0),null);
var p = cljs.core.nth.call(null,vec__31241,(1),null);
var job = vec__31241;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22242__auto___31423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___31423,res,vec__31241,v,p,job,jobs,results){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___31423,res,vec__31241,v,p,job,jobs,results){
return (function (state_31246){
var state_val_31247 = (state_31246[(1)]);
if((state_val_31247 === (1))){
var state_31246__$1 = state_31246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31246__$1,(2),res,v);
} else {
if((state_val_31247 === (2))){
var inst_31243 = (state_31246[(2)]);
var inst_31244 = cljs.core.async.close_BANG_.call(null,res);
var state_31246__$1 = (function (){var statearr_31248 = state_31246;
(statearr_31248[(7)] = inst_31243);

return statearr_31248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31246__$1,inst_31244);
} else {
return null;
}
}
});})(c__22242__auto___31423,res,vec__31241,v,p,job,jobs,results))
;
return ((function (switch__22177__auto__,c__22242__auto___31423,res,vec__31241,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0 = (function (){
var statearr_31252 = [null,null,null,null,null,null,null,null];
(statearr_31252[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__);

(statearr_31252[(1)] = (1));

return statearr_31252;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1 = (function (state_31246){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31253){if((e31253 instanceof Object)){
var ex__22181__auto__ = e31253;
var statearr_31254_31424 = state_31246;
(statearr_31254_31424[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31425 = state_31246;
state_31246 = G__31425;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = function(state_31246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1.call(this,state_31246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___31423,res,vec__31241,v,p,job,jobs,results))
})();
var state__22244__auto__ = (function (){var statearr_31255 = f__22243__auto__.call(null);
(statearr_31255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___31423);

return statearr_31255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___31423,res,vec__31241,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31256){
var vec__31257 = p__31256;
var v = cljs.core.nth.call(null,vec__31257,(0),null);
var p = cljs.core.nth.call(null,vec__31257,(1),null);
var job = vec__31257;
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
var n__20065__auto___31426 = n;
var __31427 = (0);
while(true){
if((__31427 < n__20065__auto___31426)){
var G__31258_31428 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31258_31428) {
case "compute":
var c__22242__auto___31430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31427,c__22242__auto___31430,G__31258_31428,n__20065__auto___31426,jobs,results,process,async){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (__31427,c__22242__auto___31430,G__31258_31428,n__20065__auto___31426,jobs,results,process,async){
return (function (state_31271){
var state_val_31272 = (state_31271[(1)]);
if((state_val_31272 === (1))){
var state_31271__$1 = state_31271;
var statearr_31273_31431 = state_31271__$1;
(statearr_31273_31431[(2)] = null);

(statearr_31273_31431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (2))){
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31271__$1,(4),jobs);
} else {
if((state_val_31272 === (3))){
var inst_31269 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31271__$1,inst_31269);
} else {
if((state_val_31272 === (4))){
var inst_31261 = (state_31271[(2)]);
var inst_31262 = process.call(null,inst_31261);
var state_31271__$1 = state_31271;
if(cljs.core.truth_(inst_31262)){
var statearr_31274_31432 = state_31271__$1;
(statearr_31274_31432[(1)] = (5));

} else {
var statearr_31275_31433 = state_31271__$1;
(statearr_31275_31433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (5))){
var state_31271__$1 = state_31271;
var statearr_31276_31434 = state_31271__$1;
(statearr_31276_31434[(2)] = null);

(statearr_31276_31434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (6))){
var state_31271__$1 = state_31271;
var statearr_31277_31435 = state_31271__$1;
(statearr_31277_31435[(2)] = null);

(statearr_31277_31435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31272 === (7))){
var inst_31267 = (state_31271[(2)]);
var state_31271__$1 = state_31271;
var statearr_31278_31436 = state_31271__$1;
(statearr_31278_31436[(2)] = inst_31267);

(statearr_31278_31436[(1)] = (3));


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
});})(__31427,c__22242__auto___31430,G__31258_31428,n__20065__auto___31426,jobs,results,process,async))
;
return ((function (__31427,switch__22177__auto__,c__22242__auto___31430,G__31258_31428,n__20065__auto___31426,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0 = (function (){
var statearr_31282 = [null,null,null,null,null,null,null];
(statearr_31282[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__);

(statearr_31282[(1)] = (1));

return statearr_31282;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1 = (function (state_31271){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31283){if((e31283 instanceof Object)){
var ex__22181__auto__ = e31283;
var statearr_31284_31437 = state_31271;
(statearr_31284_31437[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31438 = state_31271;
state_31271 = G__31438;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = function(state_31271){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1.call(this,state_31271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__;
})()
;})(__31427,switch__22177__auto__,c__22242__auto___31430,G__31258_31428,n__20065__auto___31426,jobs,results,process,async))
})();
var state__22244__auto__ = (function (){var statearr_31285 = f__22243__auto__.call(null);
(statearr_31285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___31430);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(__31427,c__22242__auto___31430,G__31258_31428,n__20065__auto___31426,jobs,results,process,async))
);


break;
case "async":
var c__22242__auto___31439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31427,c__22242__auto___31439,G__31258_31428,n__20065__auto___31426,jobs,results,process,async){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (__31427,c__22242__auto___31439,G__31258_31428,n__20065__auto___31426,jobs,results,process,async){
return (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (1))){
var state_31298__$1 = state_31298;
var statearr_31300_31440 = state_31298__$1;
(statearr_31300_31440[(2)] = null);

(statearr_31300_31440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (2))){
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31298__$1,(4),jobs);
} else {
if((state_val_31299 === (3))){
var inst_31296 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (4))){
var inst_31288 = (state_31298[(2)]);
var inst_31289 = async.call(null,inst_31288);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31289)){
var statearr_31301_31441 = state_31298__$1;
(statearr_31301_31441[(1)] = (5));

} else {
var statearr_31302_31442 = state_31298__$1;
(statearr_31302_31442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (5))){
var state_31298__$1 = state_31298;
var statearr_31303_31443 = state_31298__$1;
(statearr_31303_31443[(2)] = null);

(statearr_31303_31443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (6))){
var state_31298__$1 = state_31298;
var statearr_31304_31444 = state_31298__$1;
(statearr_31304_31444[(2)] = null);

(statearr_31304_31444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31299 === (7))){
var inst_31294 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31305_31445 = state_31298__$1;
(statearr_31305_31445[(2)] = inst_31294);

(statearr_31305_31445[(1)] = (3));


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
});})(__31427,c__22242__auto___31439,G__31258_31428,n__20065__auto___31426,jobs,results,process,async))
;
return ((function (__31427,switch__22177__auto__,c__22242__auto___31439,G__31258_31428,n__20065__auto___31426,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0 = (function (){
var statearr_31309 = [null,null,null,null,null,null,null];
(statearr_31309[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__);

(statearr_31309[(1)] = (1));

return statearr_31309;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1 = (function (state_31298){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31310){if((e31310 instanceof Object)){
var ex__22181__auto__ = e31310;
var statearr_31311_31446 = state_31298;
(statearr_31311_31446[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31447 = state_31298;
state_31298 = G__31447;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__;
})()
;})(__31427,switch__22177__auto__,c__22242__auto___31439,G__31258_31428,n__20065__auto___31426,jobs,results,process,async))
})();
var state__22244__auto__ = (function (){var statearr_31312 = f__22243__auto__.call(null);
(statearr_31312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___31439);

return statearr_31312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(__31427,c__22242__auto___31439,G__31258_31428,n__20065__auto___31426,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31448 = (__31427 + (1));
__31427 = G__31448;
continue;
} else {
}
break;
}

var c__22242__auto___31449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___31449,jobs,results,process,async){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___31449,jobs,results,process,async){
return (function (state_31334){
var state_val_31335 = (state_31334[(1)]);
if((state_val_31335 === (1))){
var state_31334__$1 = state_31334;
var statearr_31336_31450 = state_31334__$1;
(statearr_31336_31450[(2)] = null);

(statearr_31336_31450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (2))){
var state_31334__$1 = state_31334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31334__$1,(4),from);
} else {
if((state_val_31335 === (3))){
var inst_31332 = (state_31334[(2)]);
var state_31334__$1 = state_31334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31334__$1,inst_31332);
} else {
if((state_val_31335 === (4))){
var inst_31315 = (state_31334[(7)]);
var inst_31315__$1 = (state_31334[(2)]);
var inst_31316 = (inst_31315__$1 == null);
var state_31334__$1 = (function (){var statearr_31337 = state_31334;
(statearr_31337[(7)] = inst_31315__$1);

return statearr_31337;
})();
if(cljs.core.truth_(inst_31316)){
var statearr_31338_31451 = state_31334__$1;
(statearr_31338_31451[(1)] = (5));

} else {
var statearr_31339_31452 = state_31334__$1;
(statearr_31339_31452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (5))){
var inst_31318 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31334__$1 = state_31334;
var statearr_31340_31453 = state_31334__$1;
(statearr_31340_31453[(2)] = inst_31318);

(statearr_31340_31453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (6))){
var inst_31320 = (state_31334[(8)]);
var inst_31315 = (state_31334[(7)]);
var inst_31320__$1 = cljs.core.async.chan.call(null,(1));
var inst_31321 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31322 = [inst_31315,inst_31320__$1];
var inst_31323 = (new cljs.core.PersistentVector(null,2,(5),inst_31321,inst_31322,null));
var state_31334__$1 = (function (){var statearr_31341 = state_31334;
(statearr_31341[(8)] = inst_31320__$1);

return statearr_31341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31334__$1,(8),jobs,inst_31323);
} else {
if((state_val_31335 === (7))){
var inst_31330 = (state_31334[(2)]);
var state_31334__$1 = state_31334;
var statearr_31342_31454 = state_31334__$1;
(statearr_31342_31454[(2)] = inst_31330);

(statearr_31342_31454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31335 === (8))){
var inst_31320 = (state_31334[(8)]);
var inst_31325 = (state_31334[(2)]);
var state_31334__$1 = (function (){var statearr_31343 = state_31334;
(statearr_31343[(9)] = inst_31325);

return statearr_31343;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31334__$1,(9),results,inst_31320);
} else {
if((state_val_31335 === (9))){
var inst_31327 = (state_31334[(2)]);
var state_31334__$1 = (function (){var statearr_31344 = state_31334;
(statearr_31344[(10)] = inst_31327);

return statearr_31344;
})();
var statearr_31345_31455 = state_31334__$1;
(statearr_31345_31455[(2)] = null);

(statearr_31345_31455[(1)] = (2));


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
});})(c__22242__auto___31449,jobs,results,process,async))
;
return ((function (switch__22177__auto__,c__22242__auto___31449,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0 = (function (){
var statearr_31349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31349[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__);

(statearr_31349[(1)] = (1));

return statearr_31349;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1 = (function (state_31334){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31350){if((e31350 instanceof Object)){
var ex__22181__auto__ = e31350;
var statearr_31351_31456 = state_31334;
(statearr_31351_31456[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31457 = state_31334;
state_31334 = G__31457;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = function(state_31334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1.call(this,state_31334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___31449,jobs,results,process,async))
})();
var state__22244__auto__ = (function (){var statearr_31352 = f__22243__auto__.call(null);
(statearr_31352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___31449);

return statearr_31352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___31449,jobs,results,process,async))
);


var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,jobs,results,process,async){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,jobs,results,process,async){
return (function (state_31390){
var state_val_31391 = (state_31390[(1)]);
if((state_val_31391 === (7))){
var inst_31386 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31392_31458 = state_31390__$1;
(statearr_31392_31458[(2)] = inst_31386);

(statearr_31392_31458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (20))){
var state_31390__$1 = state_31390;
var statearr_31393_31459 = state_31390__$1;
(statearr_31393_31459[(2)] = null);

(statearr_31393_31459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (1))){
var state_31390__$1 = state_31390;
var statearr_31394_31460 = state_31390__$1;
(statearr_31394_31460[(2)] = null);

(statearr_31394_31460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (4))){
var inst_31355 = (state_31390[(7)]);
var inst_31355__$1 = (state_31390[(2)]);
var inst_31356 = (inst_31355__$1 == null);
var state_31390__$1 = (function (){var statearr_31395 = state_31390;
(statearr_31395[(7)] = inst_31355__$1);

return statearr_31395;
})();
if(cljs.core.truth_(inst_31356)){
var statearr_31396_31461 = state_31390__$1;
(statearr_31396_31461[(1)] = (5));

} else {
var statearr_31397_31462 = state_31390__$1;
(statearr_31397_31462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (15))){
var inst_31368 = (state_31390[(8)]);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31390__$1,(18),to,inst_31368);
} else {
if((state_val_31391 === (21))){
var inst_31381 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31398_31463 = state_31390__$1;
(statearr_31398_31463[(2)] = inst_31381);

(statearr_31398_31463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (13))){
var inst_31383 = (state_31390[(2)]);
var state_31390__$1 = (function (){var statearr_31399 = state_31390;
(statearr_31399[(9)] = inst_31383);

return statearr_31399;
})();
var statearr_31400_31464 = state_31390__$1;
(statearr_31400_31464[(2)] = null);

(statearr_31400_31464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (6))){
var inst_31355 = (state_31390[(7)]);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(11),inst_31355);
} else {
if((state_val_31391 === (17))){
var inst_31376 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
if(cljs.core.truth_(inst_31376)){
var statearr_31401_31465 = state_31390__$1;
(statearr_31401_31465[(1)] = (19));

} else {
var statearr_31402_31466 = state_31390__$1;
(statearr_31402_31466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (3))){
var inst_31388 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31390__$1,inst_31388);
} else {
if((state_val_31391 === (12))){
var inst_31365 = (state_31390[(10)]);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(14),inst_31365);
} else {
if((state_val_31391 === (2))){
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31390__$1,(4),results);
} else {
if((state_val_31391 === (19))){
var state_31390__$1 = state_31390;
var statearr_31403_31467 = state_31390__$1;
(statearr_31403_31467[(2)] = null);

(statearr_31403_31467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (11))){
var inst_31365 = (state_31390[(2)]);
var state_31390__$1 = (function (){var statearr_31404 = state_31390;
(statearr_31404[(10)] = inst_31365);

return statearr_31404;
})();
var statearr_31405_31468 = state_31390__$1;
(statearr_31405_31468[(2)] = null);

(statearr_31405_31468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (9))){
var state_31390__$1 = state_31390;
var statearr_31406_31469 = state_31390__$1;
(statearr_31406_31469[(2)] = null);

(statearr_31406_31469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (5))){
var state_31390__$1 = state_31390;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31407_31470 = state_31390__$1;
(statearr_31407_31470[(1)] = (8));

} else {
var statearr_31408_31471 = state_31390__$1;
(statearr_31408_31471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (14))){
var inst_31370 = (state_31390[(11)]);
var inst_31368 = (state_31390[(8)]);
var inst_31368__$1 = (state_31390[(2)]);
var inst_31369 = (inst_31368__$1 == null);
var inst_31370__$1 = cljs.core.not.call(null,inst_31369);
var state_31390__$1 = (function (){var statearr_31409 = state_31390;
(statearr_31409[(11)] = inst_31370__$1);

(statearr_31409[(8)] = inst_31368__$1);

return statearr_31409;
})();
if(inst_31370__$1){
var statearr_31410_31472 = state_31390__$1;
(statearr_31410_31472[(1)] = (15));

} else {
var statearr_31411_31473 = state_31390__$1;
(statearr_31411_31473[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (16))){
var inst_31370 = (state_31390[(11)]);
var state_31390__$1 = state_31390;
var statearr_31412_31474 = state_31390__$1;
(statearr_31412_31474[(2)] = inst_31370);

(statearr_31412_31474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (10))){
var inst_31362 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31413_31475 = state_31390__$1;
(statearr_31413_31475[(2)] = inst_31362);

(statearr_31413_31475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (18))){
var inst_31373 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31414_31476 = state_31390__$1;
(statearr_31414_31476[(2)] = inst_31373);

(statearr_31414_31476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (8))){
var inst_31359 = cljs.core.async.close_BANG_.call(null,to);
var state_31390__$1 = state_31390;
var statearr_31415_31477 = state_31390__$1;
(statearr_31415_31477[(2)] = inst_31359);

(statearr_31415_31477[(1)] = (10));


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
});})(c__22242__auto__,jobs,results,process,async))
;
return ((function (switch__22177__auto__,c__22242__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0 = (function (){
var statearr_31419 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__);

(statearr_31419[(1)] = (1));

return statearr_31419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1 = (function (state_31390){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31420){if((e31420 instanceof Object)){
var ex__22181__auto__ = e31420;
var statearr_31421_31478 = state_31390;
(statearr_31421_31478[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31479 = state_31390;
state_31390 = G__31479;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__ = function(state_31390){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1.call(this,state_31390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22178__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,jobs,results,process,async))
})();
var state__22244__auto__ = (function (){var statearr_31422 = f__22243__auto__.call(null);
(statearr_31422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_31422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,jobs,results,process,async))
);

return c__22242__auto__;
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
var args31480 = [];
var len__20220__auto___31483 = arguments.length;
var i__20221__auto___31484 = (0);
while(true){
if((i__20221__auto___31484 < len__20220__auto___31483)){
args31480.push((arguments[i__20221__auto___31484]));

var G__31485 = (i__20221__auto___31484 + (1));
i__20221__auto___31484 = G__31485;
continue;
} else {
}
break;
}

var G__31482 = args31480.length;
switch (G__31482) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31480.length)].join('')));

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
var args31487 = [];
var len__20220__auto___31490 = arguments.length;
var i__20221__auto___31491 = (0);
while(true){
if((i__20221__auto___31491 < len__20220__auto___31490)){
args31487.push((arguments[i__20221__auto___31491]));

var G__31492 = (i__20221__auto___31491 + (1));
i__20221__auto___31491 = G__31492;
continue;
} else {
}
break;
}

var G__31489 = args31487.length;
switch (G__31489) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31487.length)].join('')));

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
var args31494 = [];
var len__20220__auto___31547 = arguments.length;
var i__20221__auto___31548 = (0);
while(true){
if((i__20221__auto___31548 < len__20220__auto___31547)){
args31494.push((arguments[i__20221__auto___31548]));

var G__31549 = (i__20221__auto___31548 + (1));
i__20221__auto___31548 = G__31549;
continue;
} else {
}
break;
}

var G__31496 = args31494.length;
switch (G__31496) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31494.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22242__auto___31551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___31551,tc,fc){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___31551,tc,fc){
return (function (state_31522){
var state_val_31523 = (state_31522[(1)]);
if((state_val_31523 === (7))){
var inst_31518 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31524_31552 = state_31522__$1;
(statearr_31524_31552[(2)] = inst_31518);

(statearr_31524_31552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (1))){
var state_31522__$1 = state_31522;
var statearr_31525_31553 = state_31522__$1;
(statearr_31525_31553[(2)] = null);

(statearr_31525_31553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (4))){
var inst_31499 = (state_31522[(7)]);
var inst_31499__$1 = (state_31522[(2)]);
var inst_31500 = (inst_31499__$1 == null);
var state_31522__$1 = (function (){var statearr_31526 = state_31522;
(statearr_31526[(7)] = inst_31499__$1);

return statearr_31526;
})();
if(cljs.core.truth_(inst_31500)){
var statearr_31527_31554 = state_31522__$1;
(statearr_31527_31554[(1)] = (5));

} else {
var statearr_31528_31555 = state_31522__$1;
(statearr_31528_31555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (13))){
var state_31522__$1 = state_31522;
var statearr_31529_31556 = state_31522__$1;
(statearr_31529_31556[(2)] = null);

(statearr_31529_31556[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (6))){
var inst_31499 = (state_31522[(7)]);
var inst_31505 = p.call(null,inst_31499);
var state_31522__$1 = state_31522;
if(cljs.core.truth_(inst_31505)){
var statearr_31530_31557 = state_31522__$1;
(statearr_31530_31557[(1)] = (9));

} else {
var statearr_31531_31558 = state_31522__$1;
(statearr_31531_31558[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (3))){
var inst_31520 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31522__$1,inst_31520);
} else {
if((state_val_31523 === (12))){
var state_31522__$1 = state_31522;
var statearr_31532_31559 = state_31522__$1;
(statearr_31532_31559[(2)] = null);

(statearr_31532_31559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (2))){
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31522__$1,(4),ch);
} else {
if((state_val_31523 === (11))){
var inst_31499 = (state_31522[(7)]);
var inst_31509 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31522__$1,(8),inst_31509,inst_31499);
} else {
if((state_val_31523 === (9))){
var state_31522__$1 = state_31522;
var statearr_31533_31560 = state_31522__$1;
(statearr_31533_31560[(2)] = tc);

(statearr_31533_31560[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (5))){
var inst_31502 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31503 = cljs.core.async.close_BANG_.call(null,fc);
var state_31522__$1 = (function (){var statearr_31534 = state_31522;
(statearr_31534[(8)] = inst_31502);

return statearr_31534;
})();
var statearr_31535_31561 = state_31522__$1;
(statearr_31535_31561[(2)] = inst_31503);

(statearr_31535_31561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (14))){
var inst_31516 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
var statearr_31536_31562 = state_31522__$1;
(statearr_31536_31562[(2)] = inst_31516);

(statearr_31536_31562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (10))){
var state_31522__$1 = state_31522;
var statearr_31537_31563 = state_31522__$1;
(statearr_31537_31563[(2)] = fc);

(statearr_31537_31563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31523 === (8))){
var inst_31511 = (state_31522[(2)]);
var state_31522__$1 = state_31522;
if(cljs.core.truth_(inst_31511)){
var statearr_31538_31564 = state_31522__$1;
(statearr_31538_31564[(1)] = (12));

} else {
var statearr_31539_31565 = state_31522__$1;
(statearr_31539_31565[(1)] = (13));

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
});})(c__22242__auto___31551,tc,fc))
;
return ((function (switch__22177__auto__,c__22242__auto___31551,tc,fc){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_31543 = [null,null,null,null,null,null,null,null,null];
(statearr_31543[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_31543[(1)] = (1));

return statearr_31543;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_31522){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31544){if((e31544 instanceof Object)){
var ex__22181__auto__ = e31544;
var statearr_31545_31566 = state_31522;
(statearr_31545_31566[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31567 = state_31522;
state_31522 = G__31567;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_31522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_31522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___31551,tc,fc))
})();
var state__22244__auto__ = (function (){var statearr_31546 = f__22243__auto__.call(null);
(statearr_31546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___31551);

return statearr_31546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___31551,tc,fc))
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
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__){
return (function (state_31614){
var state_val_31615 = (state_31614[(1)]);
if((state_val_31615 === (1))){
var inst_31600 = init;
var state_31614__$1 = (function (){var statearr_31616 = state_31614;
(statearr_31616[(7)] = inst_31600);

return statearr_31616;
})();
var statearr_31617_31632 = state_31614__$1;
(statearr_31617_31632[(2)] = null);

(statearr_31617_31632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31615 === (2))){
var state_31614__$1 = state_31614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31614__$1,(4),ch);
} else {
if((state_val_31615 === (3))){
var inst_31612 = (state_31614[(2)]);
var state_31614__$1 = state_31614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31614__$1,inst_31612);
} else {
if((state_val_31615 === (4))){
var inst_31603 = (state_31614[(8)]);
var inst_31603__$1 = (state_31614[(2)]);
var inst_31604 = (inst_31603__$1 == null);
var state_31614__$1 = (function (){var statearr_31618 = state_31614;
(statearr_31618[(8)] = inst_31603__$1);

return statearr_31618;
})();
if(cljs.core.truth_(inst_31604)){
var statearr_31619_31633 = state_31614__$1;
(statearr_31619_31633[(1)] = (5));

} else {
var statearr_31620_31634 = state_31614__$1;
(statearr_31620_31634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31615 === (5))){
var inst_31600 = (state_31614[(7)]);
var state_31614__$1 = state_31614;
var statearr_31621_31635 = state_31614__$1;
(statearr_31621_31635[(2)] = inst_31600);

(statearr_31621_31635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31615 === (6))){
var inst_31600 = (state_31614[(7)]);
var inst_31603 = (state_31614[(8)]);
var inst_31607 = f.call(null,inst_31600,inst_31603);
var inst_31600__$1 = inst_31607;
var state_31614__$1 = (function (){var statearr_31622 = state_31614;
(statearr_31622[(7)] = inst_31600__$1);

return statearr_31622;
})();
var statearr_31623_31636 = state_31614__$1;
(statearr_31623_31636[(2)] = null);

(statearr_31623_31636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31615 === (7))){
var inst_31610 = (state_31614[(2)]);
var state_31614__$1 = state_31614;
var statearr_31624_31637 = state_31614__$1;
(statearr_31624_31637[(2)] = inst_31610);

(statearr_31624_31637[(1)] = (3));


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
});})(c__22242__auto__))
;
return ((function (switch__22177__auto__,c__22242__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22178__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22178__auto____0 = (function (){
var statearr_31628 = [null,null,null,null,null,null,null,null,null];
(statearr_31628[(0)] = cljs$core$async$reduce_$_state_machine__22178__auto__);

(statearr_31628[(1)] = (1));

return statearr_31628;
});
var cljs$core$async$reduce_$_state_machine__22178__auto____1 = (function (state_31614){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31629){if((e31629 instanceof Object)){
var ex__22181__auto__ = e31629;
var statearr_31630_31638 = state_31614;
(statearr_31630_31638[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31639 = state_31614;
state_31614 = G__31639;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22178__auto__ = function(state_31614){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22178__auto____1.call(this,state_31614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22178__auto____0;
cljs$core$async$reduce_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22178__auto____1;
return cljs$core$async$reduce_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__))
})();
var state__22244__auto__ = (function (){var statearr_31631 = f__22243__auto__.call(null);
(statearr_31631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_31631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__))
);

return c__22242__auto__;
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
var args31640 = [];
var len__20220__auto___31692 = arguments.length;
var i__20221__auto___31693 = (0);
while(true){
if((i__20221__auto___31693 < len__20220__auto___31692)){
args31640.push((arguments[i__20221__auto___31693]));

var G__31694 = (i__20221__auto___31693 + (1));
i__20221__auto___31693 = G__31694;
continue;
} else {
}
break;
}

var G__31642 = args31640.length;
switch (G__31642) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31640.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__){
return (function (state_31667){
var state_val_31668 = (state_31667[(1)]);
if((state_val_31668 === (7))){
var inst_31649 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
var statearr_31669_31696 = state_31667__$1;
(statearr_31669_31696[(2)] = inst_31649);

(statearr_31669_31696[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (1))){
var inst_31643 = cljs.core.seq.call(null,coll);
var inst_31644 = inst_31643;
var state_31667__$1 = (function (){var statearr_31670 = state_31667;
(statearr_31670[(7)] = inst_31644);

return statearr_31670;
})();
var statearr_31671_31697 = state_31667__$1;
(statearr_31671_31697[(2)] = null);

(statearr_31671_31697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (4))){
var inst_31644 = (state_31667[(7)]);
var inst_31647 = cljs.core.first.call(null,inst_31644);
var state_31667__$1 = state_31667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31667__$1,(7),ch,inst_31647);
} else {
if((state_val_31668 === (13))){
var inst_31661 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
var statearr_31672_31698 = state_31667__$1;
(statearr_31672_31698[(2)] = inst_31661);

(statearr_31672_31698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (6))){
var inst_31652 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
if(cljs.core.truth_(inst_31652)){
var statearr_31673_31699 = state_31667__$1;
(statearr_31673_31699[(1)] = (8));

} else {
var statearr_31674_31700 = state_31667__$1;
(statearr_31674_31700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (3))){
var inst_31665 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31667__$1,inst_31665);
} else {
if((state_val_31668 === (12))){
var state_31667__$1 = state_31667;
var statearr_31675_31701 = state_31667__$1;
(statearr_31675_31701[(2)] = null);

(statearr_31675_31701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (2))){
var inst_31644 = (state_31667[(7)]);
var state_31667__$1 = state_31667;
if(cljs.core.truth_(inst_31644)){
var statearr_31676_31702 = state_31667__$1;
(statearr_31676_31702[(1)] = (4));

} else {
var statearr_31677_31703 = state_31667__$1;
(statearr_31677_31703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (11))){
var inst_31658 = cljs.core.async.close_BANG_.call(null,ch);
var state_31667__$1 = state_31667;
var statearr_31678_31704 = state_31667__$1;
(statearr_31678_31704[(2)] = inst_31658);

(statearr_31678_31704[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (9))){
var state_31667__$1 = state_31667;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31679_31705 = state_31667__$1;
(statearr_31679_31705[(1)] = (11));

} else {
var statearr_31680_31706 = state_31667__$1;
(statearr_31680_31706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (5))){
var inst_31644 = (state_31667[(7)]);
var state_31667__$1 = state_31667;
var statearr_31681_31707 = state_31667__$1;
(statearr_31681_31707[(2)] = inst_31644);

(statearr_31681_31707[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (10))){
var inst_31663 = (state_31667[(2)]);
var state_31667__$1 = state_31667;
var statearr_31682_31708 = state_31667__$1;
(statearr_31682_31708[(2)] = inst_31663);

(statearr_31682_31708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31668 === (8))){
var inst_31644 = (state_31667[(7)]);
var inst_31654 = cljs.core.next.call(null,inst_31644);
var inst_31644__$1 = inst_31654;
var state_31667__$1 = (function (){var statearr_31683 = state_31667;
(statearr_31683[(7)] = inst_31644__$1);

return statearr_31683;
})();
var statearr_31684_31709 = state_31667__$1;
(statearr_31684_31709[(2)] = null);

(statearr_31684_31709[(1)] = (2));


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
});})(c__22242__auto__))
;
return ((function (switch__22177__auto__,c__22242__auto__){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_31688 = [null,null,null,null,null,null,null,null];
(statearr_31688[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_31688[(1)] = (1));

return statearr_31688;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_31667){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_31667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e31689){if((e31689 instanceof Object)){
var ex__22181__auto__ = e31689;
var statearr_31690_31710 = state_31667;
(statearr_31690_31710[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31711 = state_31667;
state_31667 = G__31711;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_31667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_31667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__))
})();
var state__22244__auto__ = (function (){var statearr_31691 = f__22243__auto__.call(null);
(statearr_31691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_31691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__))
);

return c__22242__auto__;
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
var x__19817__auto__ = (((_ == null))?null:_);
var m__19818__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,_);
} else {
var m__19818__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,_);
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
var x__19817__auto__ = (((m == null))?null:m);
var m__19818__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19818__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19817__auto__ = (((m == null))?null:m);
var m__19818__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,m,ch);
} else {
var m__19818__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,m,ch);
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
var x__19817__auto__ = (((m == null))?null:m);
var m__19818__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,m);
} else {
var m__19818__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31933 = (function (mult,ch,cs,meta31934){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31934 = meta31934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31935,meta31934__$1){
var self__ = this;
var _31935__$1 = this;
return (new cljs.core.async.t_cljs$core$async31933(self__.mult,self__.ch,self__.cs,meta31934__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31935){
var self__ = this;
var _31935__$1 = this;
return self__.meta31934;
});})(cs))
;

cljs.core.async.t_cljs$core$async31933.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31933.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31933.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31933.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31933.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31933.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31934","meta31934",792473737,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31933";

cljs.core.async.t_cljs$core$async31933.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async31933");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31933 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31933(mult__$1,ch__$1,cs__$1,meta31934){
return (new cljs.core.async.t_cljs$core$async31933(mult__$1,ch__$1,cs__$1,meta31934));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31933(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22242__auto___32154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___32154,cs,m,dchan,dctr,done){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___32154,cs,m,dchan,dctr,done){
return (function (state_32066){
var state_val_32067 = (state_32066[(1)]);
if((state_val_32067 === (7))){
var inst_32062 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32068_32155 = state_32066__$1;
(statearr_32068_32155[(2)] = inst_32062);

(statearr_32068_32155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (20))){
var inst_31967 = (state_32066[(7)]);
var inst_31977 = cljs.core.first.call(null,inst_31967);
var inst_31978 = cljs.core.nth.call(null,inst_31977,(0),null);
var inst_31979 = cljs.core.nth.call(null,inst_31977,(1),null);
var state_32066__$1 = (function (){var statearr_32069 = state_32066;
(statearr_32069[(8)] = inst_31978);

return statearr_32069;
})();
if(cljs.core.truth_(inst_31979)){
var statearr_32070_32156 = state_32066__$1;
(statearr_32070_32156[(1)] = (22));

} else {
var statearr_32071_32157 = state_32066__$1;
(statearr_32071_32157[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (27))){
var inst_32014 = (state_32066[(9)]);
var inst_32009 = (state_32066[(10)]);
var inst_32007 = (state_32066[(11)]);
var inst_31938 = (state_32066[(12)]);
var inst_32014__$1 = cljs.core._nth.call(null,inst_32007,inst_32009);
var inst_32015 = cljs.core.async.put_BANG_.call(null,inst_32014__$1,inst_31938,done);
var state_32066__$1 = (function (){var statearr_32072 = state_32066;
(statearr_32072[(9)] = inst_32014__$1);

return statearr_32072;
})();
if(cljs.core.truth_(inst_32015)){
var statearr_32073_32158 = state_32066__$1;
(statearr_32073_32158[(1)] = (30));

} else {
var statearr_32074_32159 = state_32066__$1;
(statearr_32074_32159[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (1))){
var state_32066__$1 = state_32066;
var statearr_32075_32160 = state_32066__$1;
(statearr_32075_32160[(2)] = null);

(statearr_32075_32160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (24))){
var inst_31967 = (state_32066[(7)]);
var inst_31984 = (state_32066[(2)]);
var inst_31985 = cljs.core.next.call(null,inst_31967);
var inst_31947 = inst_31985;
var inst_31948 = null;
var inst_31949 = (0);
var inst_31950 = (0);
var state_32066__$1 = (function (){var statearr_32076 = state_32066;
(statearr_32076[(13)] = inst_31950);

(statearr_32076[(14)] = inst_31984);

(statearr_32076[(15)] = inst_31949);

(statearr_32076[(16)] = inst_31948);

(statearr_32076[(17)] = inst_31947);

return statearr_32076;
})();
var statearr_32077_32161 = state_32066__$1;
(statearr_32077_32161[(2)] = null);

(statearr_32077_32161[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (39))){
var state_32066__$1 = state_32066;
var statearr_32081_32162 = state_32066__$1;
(statearr_32081_32162[(2)] = null);

(statearr_32081_32162[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (4))){
var inst_31938 = (state_32066[(12)]);
var inst_31938__$1 = (state_32066[(2)]);
var inst_31939 = (inst_31938__$1 == null);
var state_32066__$1 = (function (){var statearr_32082 = state_32066;
(statearr_32082[(12)] = inst_31938__$1);

return statearr_32082;
})();
if(cljs.core.truth_(inst_31939)){
var statearr_32083_32163 = state_32066__$1;
(statearr_32083_32163[(1)] = (5));

} else {
var statearr_32084_32164 = state_32066__$1;
(statearr_32084_32164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (15))){
var inst_31950 = (state_32066[(13)]);
var inst_31949 = (state_32066[(15)]);
var inst_31948 = (state_32066[(16)]);
var inst_31947 = (state_32066[(17)]);
var inst_31963 = (state_32066[(2)]);
var inst_31964 = (inst_31950 + (1));
var tmp32078 = inst_31949;
var tmp32079 = inst_31948;
var tmp32080 = inst_31947;
var inst_31947__$1 = tmp32080;
var inst_31948__$1 = tmp32079;
var inst_31949__$1 = tmp32078;
var inst_31950__$1 = inst_31964;
var state_32066__$1 = (function (){var statearr_32085 = state_32066;
(statearr_32085[(18)] = inst_31963);

(statearr_32085[(13)] = inst_31950__$1);

(statearr_32085[(15)] = inst_31949__$1);

(statearr_32085[(16)] = inst_31948__$1);

(statearr_32085[(17)] = inst_31947__$1);

return statearr_32085;
})();
var statearr_32086_32165 = state_32066__$1;
(statearr_32086_32165[(2)] = null);

(statearr_32086_32165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (21))){
var inst_31988 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32090_32166 = state_32066__$1;
(statearr_32090_32166[(2)] = inst_31988);

(statearr_32090_32166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (31))){
var inst_32014 = (state_32066[(9)]);
var inst_32018 = done.call(null,null);
var inst_32019 = cljs.core.async.untap_STAR_.call(null,m,inst_32014);
var state_32066__$1 = (function (){var statearr_32091 = state_32066;
(statearr_32091[(19)] = inst_32018);

return statearr_32091;
})();
var statearr_32092_32167 = state_32066__$1;
(statearr_32092_32167[(2)] = inst_32019);

(statearr_32092_32167[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (32))){
var inst_32009 = (state_32066[(10)]);
var inst_32007 = (state_32066[(11)]);
var inst_32008 = (state_32066[(20)]);
var inst_32006 = (state_32066[(21)]);
var inst_32021 = (state_32066[(2)]);
var inst_32022 = (inst_32009 + (1));
var tmp32087 = inst_32007;
var tmp32088 = inst_32008;
var tmp32089 = inst_32006;
var inst_32006__$1 = tmp32089;
var inst_32007__$1 = tmp32087;
var inst_32008__$1 = tmp32088;
var inst_32009__$1 = inst_32022;
var state_32066__$1 = (function (){var statearr_32093 = state_32066;
(statearr_32093[(10)] = inst_32009__$1);

(statearr_32093[(22)] = inst_32021);

(statearr_32093[(11)] = inst_32007__$1);

(statearr_32093[(20)] = inst_32008__$1);

(statearr_32093[(21)] = inst_32006__$1);

return statearr_32093;
})();
var statearr_32094_32168 = state_32066__$1;
(statearr_32094_32168[(2)] = null);

(statearr_32094_32168[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (40))){
var inst_32034 = (state_32066[(23)]);
var inst_32038 = done.call(null,null);
var inst_32039 = cljs.core.async.untap_STAR_.call(null,m,inst_32034);
var state_32066__$1 = (function (){var statearr_32095 = state_32066;
(statearr_32095[(24)] = inst_32038);

return statearr_32095;
})();
var statearr_32096_32169 = state_32066__$1;
(statearr_32096_32169[(2)] = inst_32039);

(statearr_32096_32169[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (33))){
var inst_32025 = (state_32066[(25)]);
var inst_32027 = cljs.core.chunked_seq_QMARK_.call(null,inst_32025);
var state_32066__$1 = state_32066;
if(inst_32027){
var statearr_32097_32170 = state_32066__$1;
(statearr_32097_32170[(1)] = (36));

} else {
var statearr_32098_32171 = state_32066__$1;
(statearr_32098_32171[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (13))){
var inst_31957 = (state_32066[(26)]);
var inst_31960 = cljs.core.async.close_BANG_.call(null,inst_31957);
var state_32066__$1 = state_32066;
var statearr_32099_32172 = state_32066__$1;
(statearr_32099_32172[(2)] = inst_31960);

(statearr_32099_32172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (22))){
var inst_31978 = (state_32066[(8)]);
var inst_31981 = cljs.core.async.close_BANG_.call(null,inst_31978);
var state_32066__$1 = state_32066;
var statearr_32100_32173 = state_32066__$1;
(statearr_32100_32173[(2)] = inst_31981);

(statearr_32100_32173[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (36))){
var inst_32025 = (state_32066[(25)]);
var inst_32029 = cljs.core.chunk_first.call(null,inst_32025);
var inst_32030 = cljs.core.chunk_rest.call(null,inst_32025);
var inst_32031 = cljs.core.count.call(null,inst_32029);
var inst_32006 = inst_32030;
var inst_32007 = inst_32029;
var inst_32008 = inst_32031;
var inst_32009 = (0);
var state_32066__$1 = (function (){var statearr_32101 = state_32066;
(statearr_32101[(10)] = inst_32009);

(statearr_32101[(11)] = inst_32007);

(statearr_32101[(20)] = inst_32008);

(statearr_32101[(21)] = inst_32006);

return statearr_32101;
})();
var statearr_32102_32174 = state_32066__$1;
(statearr_32102_32174[(2)] = null);

(statearr_32102_32174[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (41))){
var inst_32025 = (state_32066[(25)]);
var inst_32041 = (state_32066[(2)]);
var inst_32042 = cljs.core.next.call(null,inst_32025);
var inst_32006 = inst_32042;
var inst_32007 = null;
var inst_32008 = (0);
var inst_32009 = (0);
var state_32066__$1 = (function (){var statearr_32103 = state_32066;
(statearr_32103[(10)] = inst_32009);

(statearr_32103[(11)] = inst_32007);

(statearr_32103[(27)] = inst_32041);

(statearr_32103[(20)] = inst_32008);

(statearr_32103[(21)] = inst_32006);

return statearr_32103;
})();
var statearr_32104_32175 = state_32066__$1;
(statearr_32104_32175[(2)] = null);

(statearr_32104_32175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (43))){
var state_32066__$1 = state_32066;
var statearr_32105_32176 = state_32066__$1;
(statearr_32105_32176[(2)] = null);

(statearr_32105_32176[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (29))){
var inst_32050 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32106_32177 = state_32066__$1;
(statearr_32106_32177[(2)] = inst_32050);

(statearr_32106_32177[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (44))){
var inst_32059 = (state_32066[(2)]);
var state_32066__$1 = (function (){var statearr_32107 = state_32066;
(statearr_32107[(28)] = inst_32059);

return statearr_32107;
})();
var statearr_32108_32178 = state_32066__$1;
(statearr_32108_32178[(2)] = null);

(statearr_32108_32178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (6))){
var inst_31998 = (state_32066[(29)]);
var inst_31997 = cljs.core.deref.call(null,cs);
var inst_31998__$1 = cljs.core.keys.call(null,inst_31997);
var inst_31999 = cljs.core.count.call(null,inst_31998__$1);
var inst_32000 = cljs.core.reset_BANG_.call(null,dctr,inst_31999);
var inst_32005 = cljs.core.seq.call(null,inst_31998__$1);
var inst_32006 = inst_32005;
var inst_32007 = null;
var inst_32008 = (0);
var inst_32009 = (0);
var state_32066__$1 = (function (){var statearr_32109 = state_32066;
(statearr_32109[(30)] = inst_32000);

(statearr_32109[(10)] = inst_32009);

(statearr_32109[(11)] = inst_32007);

(statearr_32109[(20)] = inst_32008);

(statearr_32109[(21)] = inst_32006);

(statearr_32109[(29)] = inst_31998__$1);

return statearr_32109;
})();
var statearr_32110_32179 = state_32066__$1;
(statearr_32110_32179[(2)] = null);

(statearr_32110_32179[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (28))){
var inst_32025 = (state_32066[(25)]);
var inst_32006 = (state_32066[(21)]);
var inst_32025__$1 = cljs.core.seq.call(null,inst_32006);
var state_32066__$1 = (function (){var statearr_32111 = state_32066;
(statearr_32111[(25)] = inst_32025__$1);

return statearr_32111;
})();
if(inst_32025__$1){
var statearr_32112_32180 = state_32066__$1;
(statearr_32112_32180[(1)] = (33));

} else {
var statearr_32113_32181 = state_32066__$1;
(statearr_32113_32181[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (25))){
var inst_32009 = (state_32066[(10)]);
var inst_32008 = (state_32066[(20)]);
var inst_32011 = (inst_32009 < inst_32008);
var inst_32012 = inst_32011;
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_32012)){
var statearr_32114_32182 = state_32066__$1;
(statearr_32114_32182[(1)] = (27));

} else {
var statearr_32115_32183 = state_32066__$1;
(statearr_32115_32183[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (34))){
var state_32066__$1 = state_32066;
var statearr_32116_32184 = state_32066__$1;
(statearr_32116_32184[(2)] = null);

(statearr_32116_32184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (17))){
var state_32066__$1 = state_32066;
var statearr_32117_32185 = state_32066__$1;
(statearr_32117_32185[(2)] = null);

(statearr_32117_32185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (3))){
var inst_32064 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32066__$1,inst_32064);
} else {
if((state_val_32067 === (12))){
var inst_31993 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32118_32186 = state_32066__$1;
(statearr_32118_32186[(2)] = inst_31993);

(statearr_32118_32186[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (2))){
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32066__$1,(4),ch);
} else {
if((state_val_32067 === (23))){
var state_32066__$1 = state_32066;
var statearr_32119_32187 = state_32066__$1;
(statearr_32119_32187[(2)] = null);

(statearr_32119_32187[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (35))){
var inst_32048 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32120_32188 = state_32066__$1;
(statearr_32120_32188[(2)] = inst_32048);

(statearr_32120_32188[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (19))){
var inst_31967 = (state_32066[(7)]);
var inst_31971 = cljs.core.chunk_first.call(null,inst_31967);
var inst_31972 = cljs.core.chunk_rest.call(null,inst_31967);
var inst_31973 = cljs.core.count.call(null,inst_31971);
var inst_31947 = inst_31972;
var inst_31948 = inst_31971;
var inst_31949 = inst_31973;
var inst_31950 = (0);
var state_32066__$1 = (function (){var statearr_32121 = state_32066;
(statearr_32121[(13)] = inst_31950);

(statearr_32121[(15)] = inst_31949);

(statearr_32121[(16)] = inst_31948);

(statearr_32121[(17)] = inst_31947);

return statearr_32121;
})();
var statearr_32122_32189 = state_32066__$1;
(statearr_32122_32189[(2)] = null);

(statearr_32122_32189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (11))){
var inst_31967 = (state_32066[(7)]);
var inst_31947 = (state_32066[(17)]);
var inst_31967__$1 = cljs.core.seq.call(null,inst_31947);
var state_32066__$1 = (function (){var statearr_32123 = state_32066;
(statearr_32123[(7)] = inst_31967__$1);

return statearr_32123;
})();
if(inst_31967__$1){
var statearr_32124_32190 = state_32066__$1;
(statearr_32124_32190[(1)] = (16));

} else {
var statearr_32125_32191 = state_32066__$1;
(statearr_32125_32191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (9))){
var inst_31995 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32126_32192 = state_32066__$1;
(statearr_32126_32192[(2)] = inst_31995);

(statearr_32126_32192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (5))){
var inst_31945 = cljs.core.deref.call(null,cs);
var inst_31946 = cljs.core.seq.call(null,inst_31945);
var inst_31947 = inst_31946;
var inst_31948 = null;
var inst_31949 = (0);
var inst_31950 = (0);
var state_32066__$1 = (function (){var statearr_32127 = state_32066;
(statearr_32127[(13)] = inst_31950);

(statearr_32127[(15)] = inst_31949);

(statearr_32127[(16)] = inst_31948);

(statearr_32127[(17)] = inst_31947);

return statearr_32127;
})();
var statearr_32128_32193 = state_32066__$1;
(statearr_32128_32193[(2)] = null);

(statearr_32128_32193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (14))){
var state_32066__$1 = state_32066;
var statearr_32129_32194 = state_32066__$1;
(statearr_32129_32194[(2)] = null);

(statearr_32129_32194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (45))){
var inst_32056 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32130_32195 = state_32066__$1;
(statearr_32130_32195[(2)] = inst_32056);

(statearr_32130_32195[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (26))){
var inst_31998 = (state_32066[(29)]);
var inst_32052 = (state_32066[(2)]);
var inst_32053 = cljs.core.seq.call(null,inst_31998);
var state_32066__$1 = (function (){var statearr_32131 = state_32066;
(statearr_32131[(31)] = inst_32052);

return statearr_32131;
})();
if(inst_32053){
var statearr_32132_32196 = state_32066__$1;
(statearr_32132_32196[(1)] = (42));

} else {
var statearr_32133_32197 = state_32066__$1;
(statearr_32133_32197[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (16))){
var inst_31967 = (state_32066[(7)]);
var inst_31969 = cljs.core.chunked_seq_QMARK_.call(null,inst_31967);
var state_32066__$1 = state_32066;
if(inst_31969){
var statearr_32134_32198 = state_32066__$1;
(statearr_32134_32198[(1)] = (19));

} else {
var statearr_32135_32199 = state_32066__$1;
(statearr_32135_32199[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (38))){
var inst_32045 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32136_32200 = state_32066__$1;
(statearr_32136_32200[(2)] = inst_32045);

(statearr_32136_32200[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (30))){
var state_32066__$1 = state_32066;
var statearr_32137_32201 = state_32066__$1;
(statearr_32137_32201[(2)] = null);

(statearr_32137_32201[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (10))){
var inst_31950 = (state_32066[(13)]);
var inst_31948 = (state_32066[(16)]);
var inst_31956 = cljs.core._nth.call(null,inst_31948,inst_31950);
var inst_31957 = cljs.core.nth.call(null,inst_31956,(0),null);
var inst_31958 = cljs.core.nth.call(null,inst_31956,(1),null);
var state_32066__$1 = (function (){var statearr_32138 = state_32066;
(statearr_32138[(26)] = inst_31957);

return statearr_32138;
})();
if(cljs.core.truth_(inst_31958)){
var statearr_32139_32202 = state_32066__$1;
(statearr_32139_32202[(1)] = (13));

} else {
var statearr_32140_32203 = state_32066__$1;
(statearr_32140_32203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (18))){
var inst_31991 = (state_32066[(2)]);
var state_32066__$1 = state_32066;
var statearr_32141_32204 = state_32066__$1;
(statearr_32141_32204[(2)] = inst_31991);

(statearr_32141_32204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (42))){
var state_32066__$1 = state_32066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32066__$1,(45),dchan);
} else {
if((state_val_32067 === (37))){
var inst_32034 = (state_32066[(23)]);
var inst_32025 = (state_32066[(25)]);
var inst_31938 = (state_32066[(12)]);
var inst_32034__$1 = cljs.core.first.call(null,inst_32025);
var inst_32035 = cljs.core.async.put_BANG_.call(null,inst_32034__$1,inst_31938,done);
var state_32066__$1 = (function (){var statearr_32142 = state_32066;
(statearr_32142[(23)] = inst_32034__$1);

return statearr_32142;
})();
if(cljs.core.truth_(inst_32035)){
var statearr_32143_32205 = state_32066__$1;
(statearr_32143_32205[(1)] = (39));

} else {
var statearr_32144_32206 = state_32066__$1;
(statearr_32144_32206[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32067 === (8))){
var inst_31950 = (state_32066[(13)]);
var inst_31949 = (state_32066[(15)]);
var inst_31952 = (inst_31950 < inst_31949);
var inst_31953 = inst_31952;
var state_32066__$1 = state_32066;
if(cljs.core.truth_(inst_31953)){
var statearr_32145_32207 = state_32066__$1;
(statearr_32145_32207[(1)] = (10));

} else {
var statearr_32146_32208 = state_32066__$1;
(statearr_32146_32208[(1)] = (11));

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
});})(c__22242__auto___32154,cs,m,dchan,dctr,done))
;
return ((function (switch__22177__auto__,c__22242__auto___32154,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22178__auto__ = null;
var cljs$core$async$mult_$_state_machine__22178__auto____0 = (function (){
var statearr_32150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32150[(0)] = cljs$core$async$mult_$_state_machine__22178__auto__);

(statearr_32150[(1)] = (1));

return statearr_32150;
});
var cljs$core$async$mult_$_state_machine__22178__auto____1 = (function (state_32066){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_32066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e32151){if((e32151 instanceof Object)){
var ex__22181__auto__ = e32151;
var statearr_32152_32209 = state_32066;
(statearr_32152_32209[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32210 = state_32066;
state_32066 = G__32210;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22178__auto__ = function(state_32066){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22178__auto____1.call(this,state_32066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22178__auto____0;
cljs$core$async$mult_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22178__auto____1;
return cljs$core$async$mult_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___32154,cs,m,dchan,dctr,done))
})();
var state__22244__auto__ = (function (){var statearr_32153 = f__22243__auto__.call(null);
(statearr_32153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___32154);

return statearr_32153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___32154,cs,m,dchan,dctr,done))
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
var args32211 = [];
var len__20220__auto___32214 = arguments.length;
var i__20221__auto___32215 = (0);
while(true){
if((i__20221__auto___32215 < len__20220__auto___32214)){
args32211.push((arguments[i__20221__auto___32215]));

var G__32216 = (i__20221__auto___32215 + (1));
i__20221__auto___32215 = G__32216;
continue;
} else {
}
break;
}

var G__32213 = args32211.length;
switch (G__32213) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32211.length)].join('')));

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
var x__19817__auto__ = (((m == null))?null:m);
var m__19818__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,m,ch);
} else {
var m__19818__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,m,ch);
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
var x__19817__auto__ = (((m == null))?null:m);
var m__19818__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,m,ch);
} else {
var m__19818__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,m,ch);
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
var x__19817__auto__ = (((m == null))?null:m);
var m__19818__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,m);
} else {
var m__19818__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,m);
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
var x__19817__auto__ = (((m == null))?null:m);
var m__19818__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,m,state_map);
} else {
var m__19818__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,m,state_map);
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
var x__19817__auto__ = (((m == null))?null:m);
var m__19818__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,m,mode);
} else {
var m__19818__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20227__auto__ = [];
var len__20220__auto___32228 = arguments.length;
var i__20221__auto___32229 = (0);
while(true){
if((i__20221__auto___32229 < len__20220__auto___32228)){
args__20227__auto__.push((arguments[i__20221__auto___32229]));

var G__32230 = (i__20221__auto___32229 + (1));
i__20221__auto___32229 = G__32230;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((3) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20228__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32222){
var map__32223 = p__32222;
var map__32223__$1 = ((((!((map__32223 == null)))?((((map__32223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32223):map__32223);
var opts = map__32223__$1;
var statearr_32225_32231 = state;
(statearr_32225_32231[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32223,map__32223__$1,opts){
return (function (val){
var statearr_32226_32232 = state;
(statearr_32226_32232[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32223,map__32223__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32227_32233 = state;
(statearr_32227_32233[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32218){
var G__32219 = cljs.core.first.call(null,seq32218);
var seq32218__$1 = cljs.core.next.call(null,seq32218);
var G__32220 = cljs.core.first.call(null,seq32218__$1);
var seq32218__$2 = cljs.core.next.call(null,seq32218__$1);
var G__32221 = cljs.core.first.call(null,seq32218__$2);
var seq32218__$3 = cljs.core.next.call(null,seq32218__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32219,G__32220,G__32221,seq32218__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32397 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32397 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32398){
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
this.meta32398 = meta32398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32399,meta32398__$1){
var self__ = this;
var _32399__$1 = this;
return (new cljs.core.async.t_cljs$core$async32397(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32398__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32399){
var self__ = this;
var _32399__$1 = this;
return self__.meta32398;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32397.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32397.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32398","meta32398",1968377130,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32397.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32397";

cljs.core.async.t_cljs$core$async32397.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async32397");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32397 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32397(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32398){
return (new cljs.core.async.t_cljs$core$async32397(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32398));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32397(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22242__auto___32560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___32560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___32560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32497){
var state_val_32498 = (state_32497[(1)]);
if((state_val_32498 === (7))){
var inst_32415 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
var statearr_32499_32561 = state_32497__$1;
(statearr_32499_32561[(2)] = inst_32415);

(statearr_32499_32561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (20))){
var inst_32427 = (state_32497[(7)]);
var state_32497__$1 = state_32497;
var statearr_32500_32562 = state_32497__$1;
(statearr_32500_32562[(2)] = inst_32427);

(statearr_32500_32562[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (27))){
var state_32497__$1 = state_32497;
var statearr_32501_32563 = state_32497__$1;
(statearr_32501_32563[(2)] = null);

(statearr_32501_32563[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (1))){
var inst_32403 = (state_32497[(8)]);
var inst_32403__$1 = calc_state.call(null);
var inst_32405 = (inst_32403__$1 == null);
var inst_32406 = cljs.core.not.call(null,inst_32405);
var state_32497__$1 = (function (){var statearr_32502 = state_32497;
(statearr_32502[(8)] = inst_32403__$1);

return statearr_32502;
})();
if(inst_32406){
var statearr_32503_32564 = state_32497__$1;
(statearr_32503_32564[(1)] = (2));

} else {
var statearr_32504_32565 = state_32497__$1;
(statearr_32504_32565[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (24))){
var inst_32457 = (state_32497[(9)]);
var inst_32471 = (state_32497[(10)]);
var inst_32450 = (state_32497[(11)]);
var inst_32471__$1 = inst_32450.call(null,inst_32457);
var state_32497__$1 = (function (){var statearr_32505 = state_32497;
(statearr_32505[(10)] = inst_32471__$1);

return statearr_32505;
})();
if(cljs.core.truth_(inst_32471__$1)){
var statearr_32506_32566 = state_32497__$1;
(statearr_32506_32566[(1)] = (29));

} else {
var statearr_32507_32567 = state_32497__$1;
(statearr_32507_32567[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (4))){
var inst_32418 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
if(cljs.core.truth_(inst_32418)){
var statearr_32508_32568 = state_32497__$1;
(statearr_32508_32568[(1)] = (8));

} else {
var statearr_32509_32569 = state_32497__$1;
(statearr_32509_32569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (15))){
var inst_32444 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
if(cljs.core.truth_(inst_32444)){
var statearr_32510_32570 = state_32497__$1;
(statearr_32510_32570[(1)] = (19));

} else {
var statearr_32511_32571 = state_32497__$1;
(statearr_32511_32571[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (21))){
var inst_32449 = (state_32497[(12)]);
var inst_32449__$1 = (state_32497[(2)]);
var inst_32450 = cljs.core.get.call(null,inst_32449__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32451 = cljs.core.get.call(null,inst_32449__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32452 = cljs.core.get.call(null,inst_32449__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32497__$1 = (function (){var statearr_32512 = state_32497;
(statearr_32512[(12)] = inst_32449__$1);

(statearr_32512[(13)] = inst_32451);

(statearr_32512[(11)] = inst_32450);

return statearr_32512;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32497__$1,(22),inst_32452);
} else {
if((state_val_32498 === (31))){
var inst_32479 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
if(cljs.core.truth_(inst_32479)){
var statearr_32513_32572 = state_32497__$1;
(statearr_32513_32572[(1)] = (32));

} else {
var statearr_32514_32573 = state_32497__$1;
(statearr_32514_32573[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (32))){
var inst_32456 = (state_32497[(14)]);
var state_32497__$1 = state_32497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32497__$1,(35),out,inst_32456);
} else {
if((state_val_32498 === (33))){
var inst_32449 = (state_32497[(12)]);
var inst_32427 = inst_32449;
var state_32497__$1 = (function (){var statearr_32515 = state_32497;
(statearr_32515[(7)] = inst_32427);

return statearr_32515;
})();
var statearr_32516_32574 = state_32497__$1;
(statearr_32516_32574[(2)] = null);

(statearr_32516_32574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (13))){
var inst_32427 = (state_32497[(7)]);
var inst_32434 = inst_32427.cljs$lang$protocol_mask$partition0$;
var inst_32435 = (inst_32434 & (64));
var inst_32436 = inst_32427.cljs$core$ISeq$;
var inst_32437 = (inst_32435) || (inst_32436);
var state_32497__$1 = state_32497;
if(cljs.core.truth_(inst_32437)){
var statearr_32517_32575 = state_32497__$1;
(statearr_32517_32575[(1)] = (16));

} else {
var statearr_32518_32576 = state_32497__$1;
(statearr_32518_32576[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (22))){
var inst_32457 = (state_32497[(9)]);
var inst_32456 = (state_32497[(14)]);
var inst_32455 = (state_32497[(2)]);
var inst_32456__$1 = cljs.core.nth.call(null,inst_32455,(0),null);
var inst_32457__$1 = cljs.core.nth.call(null,inst_32455,(1),null);
var inst_32458 = (inst_32456__$1 == null);
var inst_32459 = cljs.core._EQ_.call(null,inst_32457__$1,change);
var inst_32460 = (inst_32458) || (inst_32459);
var state_32497__$1 = (function (){var statearr_32519 = state_32497;
(statearr_32519[(9)] = inst_32457__$1);

(statearr_32519[(14)] = inst_32456__$1);

return statearr_32519;
})();
if(cljs.core.truth_(inst_32460)){
var statearr_32520_32577 = state_32497__$1;
(statearr_32520_32577[(1)] = (23));

} else {
var statearr_32521_32578 = state_32497__$1;
(statearr_32521_32578[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (36))){
var inst_32449 = (state_32497[(12)]);
var inst_32427 = inst_32449;
var state_32497__$1 = (function (){var statearr_32522 = state_32497;
(statearr_32522[(7)] = inst_32427);

return statearr_32522;
})();
var statearr_32523_32579 = state_32497__$1;
(statearr_32523_32579[(2)] = null);

(statearr_32523_32579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (29))){
var inst_32471 = (state_32497[(10)]);
var state_32497__$1 = state_32497;
var statearr_32524_32580 = state_32497__$1;
(statearr_32524_32580[(2)] = inst_32471);

(statearr_32524_32580[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (6))){
var state_32497__$1 = state_32497;
var statearr_32525_32581 = state_32497__$1;
(statearr_32525_32581[(2)] = false);

(statearr_32525_32581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (28))){
var inst_32467 = (state_32497[(2)]);
var inst_32468 = calc_state.call(null);
var inst_32427 = inst_32468;
var state_32497__$1 = (function (){var statearr_32526 = state_32497;
(statearr_32526[(15)] = inst_32467);

(statearr_32526[(7)] = inst_32427);

return statearr_32526;
})();
var statearr_32527_32582 = state_32497__$1;
(statearr_32527_32582[(2)] = null);

(statearr_32527_32582[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (25))){
var inst_32493 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
var statearr_32528_32583 = state_32497__$1;
(statearr_32528_32583[(2)] = inst_32493);

(statearr_32528_32583[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (34))){
var inst_32491 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
var statearr_32529_32584 = state_32497__$1;
(statearr_32529_32584[(2)] = inst_32491);

(statearr_32529_32584[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (17))){
var state_32497__$1 = state_32497;
var statearr_32530_32585 = state_32497__$1;
(statearr_32530_32585[(2)] = false);

(statearr_32530_32585[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (3))){
var state_32497__$1 = state_32497;
var statearr_32531_32586 = state_32497__$1;
(statearr_32531_32586[(2)] = false);

(statearr_32531_32586[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (12))){
var inst_32495 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32497__$1,inst_32495);
} else {
if((state_val_32498 === (2))){
var inst_32403 = (state_32497[(8)]);
var inst_32408 = inst_32403.cljs$lang$protocol_mask$partition0$;
var inst_32409 = (inst_32408 & (64));
var inst_32410 = inst_32403.cljs$core$ISeq$;
var inst_32411 = (inst_32409) || (inst_32410);
var state_32497__$1 = state_32497;
if(cljs.core.truth_(inst_32411)){
var statearr_32532_32587 = state_32497__$1;
(statearr_32532_32587[(1)] = (5));

} else {
var statearr_32533_32588 = state_32497__$1;
(statearr_32533_32588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (23))){
var inst_32456 = (state_32497[(14)]);
var inst_32462 = (inst_32456 == null);
var state_32497__$1 = state_32497;
if(cljs.core.truth_(inst_32462)){
var statearr_32534_32589 = state_32497__$1;
(statearr_32534_32589[(1)] = (26));

} else {
var statearr_32535_32590 = state_32497__$1;
(statearr_32535_32590[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (35))){
var inst_32482 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
if(cljs.core.truth_(inst_32482)){
var statearr_32536_32591 = state_32497__$1;
(statearr_32536_32591[(1)] = (36));

} else {
var statearr_32537_32592 = state_32497__$1;
(statearr_32537_32592[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (19))){
var inst_32427 = (state_32497[(7)]);
var inst_32446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32427);
var state_32497__$1 = state_32497;
var statearr_32538_32593 = state_32497__$1;
(statearr_32538_32593[(2)] = inst_32446);

(statearr_32538_32593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (11))){
var inst_32427 = (state_32497[(7)]);
var inst_32431 = (inst_32427 == null);
var inst_32432 = cljs.core.not.call(null,inst_32431);
var state_32497__$1 = state_32497;
if(inst_32432){
var statearr_32539_32594 = state_32497__$1;
(statearr_32539_32594[(1)] = (13));

} else {
var statearr_32540_32595 = state_32497__$1;
(statearr_32540_32595[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (9))){
var inst_32403 = (state_32497[(8)]);
var state_32497__$1 = state_32497;
var statearr_32541_32596 = state_32497__$1;
(statearr_32541_32596[(2)] = inst_32403);

(statearr_32541_32596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (5))){
var state_32497__$1 = state_32497;
var statearr_32542_32597 = state_32497__$1;
(statearr_32542_32597[(2)] = true);

(statearr_32542_32597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (14))){
var state_32497__$1 = state_32497;
var statearr_32543_32598 = state_32497__$1;
(statearr_32543_32598[(2)] = false);

(statearr_32543_32598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (26))){
var inst_32457 = (state_32497[(9)]);
var inst_32464 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32457);
var state_32497__$1 = state_32497;
var statearr_32544_32599 = state_32497__$1;
(statearr_32544_32599[(2)] = inst_32464);

(statearr_32544_32599[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (16))){
var state_32497__$1 = state_32497;
var statearr_32545_32600 = state_32497__$1;
(statearr_32545_32600[(2)] = true);

(statearr_32545_32600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (38))){
var inst_32487 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
var statearr_32546_32601 = state_32497__$1;
(statearr_32546_32601[(2)] = inst_32487);

(statearr_32546_32601[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (30))){
var inst_32457 = (state_32497[(9)]);
var inst_32451 = (state_32497[(13)]);
var inst_32450 = (state_32497[(11)]);
var inst_32474 = cljs.core.empty_QMARK_.call(null,inst_32450);
var inst_32475 = inst_32451.call(null,inst_32457);
var inst_32476 = cljs.core.not.call(null,inst_32475);
var inst_32477 = (inst_32474) && (inst_32476);
var state_32497__$1 = state_32497;
var statearr_32547_32602 = state_32497__$1;
(statearr_32547_32602[(2)] = inst_32477);

(statearr_32547_32602[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (10))){
var inst_32403 = (state_32497[(8)]);
var inst_32423 = (state_32497[(2)]);
var inst_32424 = cljs.core.get.call(null,inst_32423,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32425 = cljs.core.get.call(null,inst_32423,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32426 = cljs.core.get.call(null,inst_32423,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32427 = inst_32403;
var state_32497__$1 = (function (){var statearr_32548 = state_32497;
(statearr_32548[(16)] = inst_32426);

(statearr_32548[(17)] = inst_32424);

(statearr_32548[(18)] = inst_32425);

(statearr_32548[(7)] = inst_32427);

return statearr_32548;
})();
var statearr_32549_32603 = state_32497__$1;
(statearr_32549_32603[(2)] = null);

(statearr_32549_32603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (18))){
var inst_32441 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
var statearr_32550_32604 = state_32497__$1;
(statearr_32550_32604[(2)] = inst_32441);

(statearr_32550_32604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (37))){
var state_32497__$1 = state_32497;
var statearr_32551_32605 = state_32497__$1;
(statearr_32551_32605[(2)] = null);

(statearr_32551_32605[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (8))){
var inst_32403 = (state_32497[(8)]);
var inst_32420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32403);
var state_32497__$1 = state_32497;
var statearr_32552_32606 = state_32497__$1;
(statearr_32552_32606[(2)] = inst_32420);

(statearr_32552_32606[(1)] = (10));


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
});})(c__22242__auto___32560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22177__auto__,c__22242__auto___32560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22178__auto__ = null;
var cljs$core$async$mix_$_state_machine__22178__auto____0 = (function (){
var statearr_32556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32556[(0)] = cljs$core$async$mix_$_state_machine__22178__auto__);

(statearr_32556[(1)] = (1));

return statearr_32556;
});
var cljs$core$async$mix_$_state_machine__22178__auto____1 = (function (state_32497){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_32497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e32557){if((e32557 instanceof Object)){
var ex__22181__auto__ = e32557;
var statearr_32558_32607 = state_32497;
(statearr_32558_32607[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32608 = state_32497;
state_32497 = G__32608;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22178__auto__ = function(state_32497){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22178__auto____1.call(this,state_32497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22178__auto____0;
cljs$core$async$mix_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22178__auto____1;
return cljs$core$async$mix_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___32560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22244__auto__ = (function (){var statearr_32559 = f__22243__auto__.call(null);
(statearr_32559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___32560);

return statearr_32559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___32560,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19817__auto__ = (((p == null))?null:p);
var m__19818__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19818__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19817__auto__ = (((p == null))?null:p);
var m__19818__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,p,v,ch);
} else {
var m__19818__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32609 = [];
var len__20220__auto___32612 = arguments.length;
var i__20221__auto___32613 = (0);
while(true){
if((i__20221__auto___32613 < len__20220__auto___32612)){
args32609.push((arguments[i__20221__auto___32613]));

var G__32614 = (i__20221__auto___32613 + (1));
i__20221__auto___32613 = G__32614;
continue;
} else {
}
break;
}

var G__32611 = args32609.length;
switch (G__32611) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32609.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19817__auto__ = (((p == null))?null:p);
var m__19818__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,p);
} else {
var m__19818__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,p);
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
var x__19817__auto__ = (((p == null))?null:p);
var m__19818__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,p,v);
} else {
var m__19818__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,p,v);
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
var args32617 = [];
var len__20220__auto___32742 = arguments.length;
var i__20221__auto___32743 = (0);
while(true){
if((i__20221__auto___32743 < len__20220__auto___32742)){
args32617.push((arguments[i__20221__auto___32743]));

var G__32744 = (i__20221__auto___32743 + (1));
i__20221__auto___32743 = G__32744;
continue;
} else {
}
break;
}

var G__32619 = args32617.length;
switch (G__32619) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32617.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19162__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19162__auto__,mults){
return (function (p1__32616_SHARP_){
if(cljs.core.truth_(p1__32616_SHARP_.call(null,topic))){
return p1__32616_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32616_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19162__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32620 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32621){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32621 = meta32621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32622,meta32621__$1){
var self__ = this;
var _32622__$1 = this;
return (new cljs.core.async.t_cljs$core$async32620(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32621__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32622){
var self__ = this;
var _32622__$1 = this;
return self__.meta32621;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32620.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32620.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32621","meta32621",573503571,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32620";

cljs.core.async.t_cljs$core$async32620.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async32620");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32620 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32620(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32621){
return (new cljs.core.async.t_cljs$core$async32620(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32621));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32620(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22242__auto___32746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___32746,mults,ensure_mult,p){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___32746,mults,ensure_mult,p){
return (function (state_32694){
var state_val_32695 = (state_32694[(1)]);
if((state_val_32695 === (7))){
var inst_32690 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32696_32747 = state_32694__$1;
(statearr_32696_32747[(2)] = inst_32690);

(statearr_32696_32747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (20))){
var state_32694__$1 = state_32694;
var statearr_32697_32748 = state_32694__$1;
(statearr_32697_32748[(2)] = null);

(statearr_32697_32748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (1))){
var state_32694__$1 = state_32694;
var statearr_32698_32749 = state_32694__$1;
(statearr_32698_32749[(2)] = null);

(statearr_32698_32749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (24))){
var inst_32673 = (state_32694[(7)]);
var inst_32682 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32673);
var state_32694__$1 = state_32694;
var statearr_32699_32750 = state_32694__$1;
(statearr_32699_32750[(2)] = inst_32682);

(statearr_32699_32750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (4))){
var inst_32625 = (state_32694[(8)]);
var inst_32625__$1 = (state_32694[(2)]);
var inst_32626 = (inst_32625__$1 == null);
var state_32694__$1 = (function (){var statearr_32700 = state_32694;
(statearr_32700[(8)] = inst_32625__$1);

return statearr_32700;
})();
if(cljs.core.truth_(inst_32626)){
var statearr_32701_32751 = state_32694__$1;
(statearr_32701_32751[(1)] = (5));

} else {
var statearr_32702_32752 = state_32694__$1;
(statearr_32702_32752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (15))){
var inst_32667 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32703_32753 = state_32694__$1;
(statearr_32703_32753[(2)] = inst_32667);

(statearr_32703_32753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (21))){
var inst_32687 = (state_32694[(2)]);
var state_32694__$1 = (function (){var statearr_32704 = state_32694;
(statearr_32704[(9)] = inst_32687);

return statearr_32704;
})();
var statearr_32705_32754 = state_32694__$1;
(statearr_32705_32754[(2)] = null);

(statearr_32705_32754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (13))){
var inst_32649 = (state_32694[(10)]);
var inst_32651 = cljs.core.chunked_seq_QMARK_.call(null,inst_32649);
var state_32694__$1 = state_32694;
if(inst_32651){
var statearr_32706_32755 = state_32694__$1;
(statearr_32706_32755[(1)] = (16));

} else {
var statearr_32707_32756 = state_32694__$1;
(statearr_32707_32756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (22))){
var inst_32679 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
if(cljs.core.truth_(inst_32679)){
var statearr_32708_32757 = state_32694__$1;
(statearr_32708_32757[(1)] = (23));

} else {
var statearr_32709_32758 = state_32694__$1;
(statearr_32709_32758[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (6))){
var inst_32675 = (state_32694[(11)]);
var inst_32625 = (state_32694[(8)]);
var inst_32673 = (state_32694[(7)]);
var inst_32673__$1 = topic_fn.call(null,inst_32625);
var inst_32674 = cljs.core.deref.call(null,mults);
var inst_32675__$1 = cljs.core.get.call(null,inst_32674,inst_32673__$1);
var state_32694__$1 = (function (){var statearr_32710 = state_32694;
(statearr_32710[(11)] = inst_32675__$1);

(statearr_32710[(7)] = inst_32673__$1);

return statearr_32710;
})();
if(cljs.core.truth_(inst_32675__$1)){
var statearr_32711_32759 = state_32694__$1;
(statearr_32711_32759[(1)] = (19));

} else {
var statearr_32712_32760 = state_32694__$1;
(statearr_32712_32760[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (25))){
var inst_32684 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32713_32761 = state_32694__$1;
(statearr_32713_32761[(2)] = inst_32684);

(statearr_32713_32761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (17))){
var inst_32649 = (state_32694[(10)]);
var inst_32658 = cljs.core.first.call(null,inst_32649);
var inst_32659 = cljs.core.async.muxch_STAR_.call(null,inst_32658);
var inst_32660 = cljs.core.async.close_BANG_.call(null,inst_32659);
var inst_32661 = cljs.core.next.call(null,inst_32649);
var inst_32635 = inst_32661;
var inst_32636 = null;
var inst_32637 = (0);
var inst_32638 = (0);
var state_32694__$1 = (function (){var statearr_32714 = state_32694;
(statearr_32714[(12)] = inst_32635);

(statearr_32714[(13)] = inst_32638);

(statearr_32714[(14)] = inst_32636);

(statearr_32714[(15)] = inst_32637);

(statearr_32714[(16)] = inst_32660);

return statearr_32714;
})();
var statearr_32715_32762 = state_32694__$1;
(statearr_32715_32762[(2)] = null);

(statearr_32715_32762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (3))){
var inst_32692 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32694__$1,inst_32692);
} else {
if((state_val_32695 === (12))){
var inst_32669 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32716_32763 = state_32694__$1;
(statearr_32716_32763[(2)] = inst_32669);

(statearr_32716_32763[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (2))){
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32694__$1,(4),ch);
} else {
if((state_val_32695 === (23))){
var state_32694__$1 = state_32694;
var statearr_32717_32764 = state_32694__$1;
(statearr_32717_32764[(2)] = null);

(statearr_32717_32764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (19))){
var inst_32675 = (state_32694[(11)]);
var inst_32625 = (state_32694[(8)]);
var inst_32677 = cljs.core.async.muxch_STAR_.call(null,inst_32675);
var state_32694__$1 = state_32694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32694__$1,(22),inst_32677,inst_32625);
} else {
if((state_val_32695 === (11))){
var inst_32635 = (state_32694[(12)]);
var inst_32649 = (state_32694[(10)]);
var inst_32649__$1 = cljs.core.seq.call(null,inst_32635);
var state_32694__$1 = (function (){var statearr_32718 = state_32694;
(statearr_32718[(10)] = inst_32649__$1);

return statearr_32718;
})();
if(inst_32649__$1){
var statearr_32719_32765 = state_32694__$1;
(statearr_32719_32765[(1)] = (13));

} else {
var statearr_32720_32766 = state_32694__$1;
(statearr_32720_32766[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (9))){
var inst_32671 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32721_32767 = state_32694__$1;
(statearr_32721_32767[(2)] = inst_32671);

(statearr_32721_32767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (5))){
var inst_32632 = cljs.core.deref.call(null,mults);
var inst_32633 = cljs.core.vals.call(null,inst_32632);
var inst_32634 = cljs.core.seq.call(null,inst_32633);
var inst_32635 = inst_32634;
var inst_32636 = null;
var inst_32637 = (0);
var inst_32638 = (0);
var state_32694__$1 = (function (){var statearr_32722 = state_32694;
(statearr_32722[(12)] = inst_32635);

(statearr_32722[(13)] = inst_32638);

(statearr_32722[(14)] = inst_32636);

(statearr_32722[(15)] = inst_32637);

return statearr_32722;
})();
var statearr_32723_32768 = state_32694__$1;
(statearr_32723_32768[(2)] = null);

(statearr_32723_32768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (14))){
var state_32694__$1 = state_32694;
var statearr_32727_32769 = state_32694__$1;
(statearr_32727_32769[(2)] = null);

(statearr_32727_32769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (16))){
var inst_32649 = (state_32694[(10)]);
var inst_32653 = cljs.core.chunk_first.call(null,inst_32649);
var inst_32654 = cljs.core.chunk_rest.call(null,inst_32649);
var inst_32655 = cljs.core.count.call(null,inst_32653);
var inst_32635 = inst_32654;
var inst_32636 = inst_32653;
var inst_32637 = inst_32655;
var inst_32638 = (0);
var state_32694__$1 = (function (){var statearr_32728 = state_32694;
(statearr_32728[(12)] = inst_32635);

(statearr_32728[(13)] = inst_32638);

(statearr_32728[(14)] = inst_32636);

(statearr_32728[(15)] = inst_32637);

return statearr_32728;
})();
var statearr_32729_32770 = state_32694__$1;
(statearr_32729_32770[(2)] = null);

(statearr_32729_32770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (10))){
var inst_32635 = (state_32694[(12)]);
var inst_32638 = (state_32694[(13)]);
var inst_32636 = (state_32694[(14)]);
var inst_32637 = (state_32694[(15)]);
var inst_32643 = cljs.core._nth.call(null,inst_32636,inst_32638);
var inst_32644 = cljs.core.async.muxch_STAR_.call(null,inst_32643);
var inst_32645 = cljs.core.async.close_BANG_.call(null,inst_32644);
var inst_32646 = (inst_32638 + (1));
var tmp32724 = inst_32635;
var tmp32725 = inst_32636;
var tmp32726 = inst_32637;
var inst_32635__$1 = tmp32724;
var inst_32636__$1 = tmp32725;
var inst_32637__$1 = tmp32726;
var inst_32638__$1 = inst_32646;
var state_32694__$1 = (function (){var statearr_32730 = state_32694;
(statearr_32730[(12)] = inst_32635__$1);

(statearr_32730[(13)] = inst_32638__$1);

(statearr_32730[(17)] = inst_32645);

(statearr_32730[(14)] = inst_32636__$1);

(statearr_32730[(15)] = inst_32637__$1);

return statearr_32730;
})();
var statearr_32731_32771 = state_32694__$1;
(statearr_32731_32771[(2)] = null);

(statearr_32731_32771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (18))){
var inst_32664 = (state_32694[(2)]);
var state_32694__$1 = state_32694;
var statearr_32732_32772 = state_32694__$1;
(statearr_32732_32772[(2)] = inst_32664);

(statearr_32732_32772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32695 === (8))){
var inst_32638 = (state_32694[(13)]);
var inst_32637 = (state_32694[(15)]);
var inst_32640 = (inst_32638 < inst_32637);
var inst_32641 = inst_32640;
var state_32694__$1 = state_32694;
if(cljs.core.truth_(inst_32641)){
var statearr_32733_32773 = state_32694__$1;
(statearr_32733_32773[(1)] = (10));

} else {
var statearr_32734_32774 = state_32694__$1;
(statearr_32734_32774[(1)] = (11));

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
});})(c__22242__auto___32746,mults,ensure_mult,p))
;
return ((function (switch__22177__auto__,c__22242__auto___32746,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_32738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32738[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_32738[(1)] = (1));

return statearr_32738;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_32694){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_32694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e32739){if((e32739 instanceof Object)){
var ex__22181__auto__ = e32739;
var statearr_32740_32775 = state_32694;
(statearr_32740_32775[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32776 = state_32694;
state_32694 = G__32776;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_32694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_32694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___32746,mults,ensure_mult,p))
})();
var state__22244__auto__ = (function (){var statearr_32741 = f__22243__auto__.call(null);
(statearr_32741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___32746);

return statearr_32741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___32746,mults,ensure_mult,p))
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
var args32777 = [];
var len__20220__auto___32780 = arguments.length;
var i__20221__auto___32781 = (0);
while(true){
if((i__20221__auto___32781 < len__20220__auto___32780)){
args32777.push((arguments[i__20221__auto___32781]));

var G__32782 = (i__20221__auto___32781 + (1));
i__20221__auto___32781 = G__32782;
continue;
} else {
}
break;
}

var G__32779 = args32777.length;
switch (G__32779) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32777.length)].join('')));

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
var args32784 = [];
var len__20220__auto___32787 = arguments.length;
var i__20221__auto___32788 = (0);
while(true){
if((i__20221__auto___32788 < len__20220__auto___32787)){
args32784.push((arguments[i__20221__auto___32788]));

var G__32789 = (i__20221__auto___32788 + (1));
i__20221__auto___32788 = G__32789;
continue;
} else {
}
break;
}

var G__32786 = args32784.length;
switch (G__32786) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32784.length)].join('')));

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
var args32791 = [];
var len__20220__auto___32862 = arguments.length;
var i__20221__auto___32863 = (0);
while(true){
if((i__20221__auto___32863 < len__20220__auto___32862)){
args32791.push((arguments[i__20221__auto___32863]));

var G__32864 = (i__20221__auto___32863 + (1));
i__20221__auto___32863 = G__32864;
continue;
} else {
}
break;
}

var G__32793 = args32791.length;
switch (G__32793) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32791.length)].join('')));

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
var c__22242__auto___32866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___32866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___32866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32832){
var state_val_32833 = (state_32832[(1)]);
if((state_val_32833 === (7))){
var state_32832__$1 = state_32832;
var statearr_32834_32867 = state_32832__$1;
(statearr_32834_32867[(2)] = null);

(statearr_32834_32867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (1))){
var state_32832__$1 = state_32832;
var statearr_32835_32868 = state_32832__$1;
(statearr_32835_32868[(2)] = null);

(statearr_32835_32868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (4))){
var inst_32796 = (state_32832[(7)]);
var inst_32798 = (inst_32796 < cnt);
var state_32832__$1 = state_32832;
if(cljs.core.truth_(inst_32798)){
var statearr_32836_32869 = state_32832__$1;
(statearr_32836_32869[(1)] = (6));

} else {
var statearr_32837_32870 = state_32832__$1;
(statearr_32837_32870[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (15))){
var inst_32828 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
var statearr_32838_32871 = state_32832__$1;
(statearr_32838_32871[(2)] = inst_32828);

(statearr_32838_32871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (13))){
var inst_32821 = cljs.core.async.close_BANG_.call(null,out);
var state_32832__$1 = state_32832;
var statearr_32839_32872 = state_32832__$1;
(statearr_32839_32872[(2)] = inst_32821);

(statearr_32839_32872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (6))){
var state_32832__$1 = state_32832;
var statearr_32840_32873 = state_32832__$1;
(statearr_32840_32873[(2)] = null);

(statearr_32840_32873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (3))){
var inst_32830 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32832__$1,inst_32830);
} else {
if((state_val_32833 === (12))){
var inst_32818 = (state_32832[(8)]);
var inst_32818__$1 = (state_32832[(2)]);
var inst_32819 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32818__$1);
var state_32832__$1 = (function (){var statearr_32841 = state_32832;
(statearr_32841[(8)] = inst_32818__$1);

return statearr_32841;
})();
if(cljs.core.truth_(inst_32819)){
var statearr_32842_32874 = state_32832__$1;
(statearr_32842_32874[(1)] = (13));

} else {
var statearr_32843_32875 = state_32832__$1;
(statearr_32843_32875[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (2))){
var inst_32795 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32796 = (0);
var state_32832__$1 = (function (){var statearr_32844 = state_32832;
(statearr_32844[(9)] = inst_32795);

(statearr_32844[(7)] = inst_32796);

return statearr_32844;
})();
var statearr_32845_32876 = state_32832__$1;
(statearr_32845_32876[(2)] = null);

(statearr_32845_32876[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (11))){
var inst_32796 = (state_32832[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32832,(10),Object,null,(9));
var inst_32805 = chs__$1.call(null,inst_32796);
var inst_32806 = done.call(null,inst_32796);
var inst_32807 = cljs.core.async.take_BANG_.call(null,inst_32805,inst_32806);
var state_32832__$1 = state_32832;
var statearr_32846_32877 = state_32832__$1;
(statearr_32846_32877[(2)] = inst_32807);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32832__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (9))){
var inst_32796 = (state_32832[(7)]);
var inst_32809 = (state_32832[(2)]);
var inst_32810 = (inst_32796 + (1));
var inst_32796__$1 = inst_32810;
var state_32832__$1 = (function (){var statearr_32847 = state_32832;
(statearr_32847[(10)] = inst_32809);

(statearr_32847[(7)] = inst_32796__$1);

return statearr_32847;
})();
var statearr_32848_32878 = state_32832__$1;
(statearr_32848_32878[(2)] = null);

(statearr_32848_32878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (5))){
var inst_32816 = (state_32832[(2)]);
var state_32832__$1 = (function (){var statearr_32849 = state_32832;
(statearr_32849[(11)] = inst_32816);

return statearr_32849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32832__$1,(12),dchan);
} else {
if((state_val_32833 === (14))){
var inst_32818 = (state_32832[(8)]);
var inst_32823 = cljs.core.apply.call(null,f,inst_32818);
var state_32832__$1 = state_32832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32832__$1,(16),out,inst_32823);
} else {
if((state_val_32833 === (16))){
var inst_32825 = (state_32832[(2)]);
var state_32832__$1 = (function (){var statearr_32850 = state_32832;
(statearr_32850[(12)] = inst_32825);

return statearr_32850;
})();
var statearr_32851_32879 = state_32832__$1;
(statearr_32851_32879[(2)] = null);

(statearr_32851_32879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (10))){
var inst_32800 = (state_32832[(2)]);
var inst_32801 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32832__$1 = (function (){var statearr_32852 = state_32832;
(statearr_32852[(13)] = inst_32800);

return statearr_32852;
})();
var statearr_32853_32880 = state_32832__$1;
(statearr_32853_32880[(2)] = inst_32801);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32832__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32833 === (8))){
var inst_32814 = (state_32832[(2)]);
var state_32832__$1 = state_32832;
var statearr_32854_32881 = state_32832__$1;
(statearr_32854_32881[(2)] = inst_32814);

(statearr_32854_32881[(1)] = (5));


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
});})(c__22242__auto___32866,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22177__auto__,c__22242__auto___32866,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_32858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32858[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_32858[(1)] = (1));

return statearr_32858;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_32832){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_32832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e32859){if((e32859 instanceof Object)){
var ex__22181__auto__ = e32859;
var statearr_32860_32882 = state_32832;
(statearr_32860_32882[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32883 = state_32832;
state_32832 = G__32883;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_32832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_32832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___32866,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22244__auto__ = (function (){var statearr_32861 = f__22243__auto__.call(null);
(statearr_32861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___32866);

return statearr_32861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___32866,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32885 = [];
var len__20220__auto___32941 = arguments.length;
var i__20221__auto___32942 = (0);
while(true){
if((i__20221__auto___32942 < len__20220__auto___32941)){
args32885.push((arguments[i__20221__auto___32942]));

var G__32943 = (i__20221__auto___32942 + (1));
i__20221__auto___32942 = G__32943;
continue;
} else {
}
break;
}

var G__32887 = args32885.length;
switch (G__32887) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32885.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22242__auto___32945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___32945,out){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___32945,out){
return (function (state_32917){
var state_val_32918 = (state_32917[(1)]);
if((state_val_32918 === (7))){
var inst_32897 = (state_32917[(7)]);
var inst_32896 = (state_32917[(8)]);
var inst_32896__$1 = (state_32917[(2)]);
var inst_32897__$1 = cljs.core.nth.call(null,inst_32896__$1,(0),null);
var inst_32898 = cljs.core.nth.call(null,inst_32896__$1,(1),null);
var inst_32899 = (inst_32897__$1 == null);
var state_32917__$1 = (function (){var statearr_32919 = state_32917;
(statearr_32919[(9)] = inst_32898);

(statearr_32919[(7)] = inst_32897__$1);

(statearr_32919[(8)] = inst_32896__$1);

return statearr_32919;
})();
if(cljs.core.truth_(inst_32899)){
var statearr_32920_32946 = state_32917__$1;
(statearr_32920_32946[(1)] = (8));

} else {
var statearr_32921_32947 = state_32917__$1;
(statearr_32921_32947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (1))){
var inst_32888 = cljs.core.vec.call(null,chs);
var inst_32889 = inst_32888;
var state_32917__$1 = (function (){var statearr_32922 = state_32917;
(statearr_32922[(10)] = inst_32889);

return statearr_32922;
})();
var statearr_32923_32948 = state_32917__$1;
(statearr_32923_32948[(2)] = null);

(statearr_32923_32948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (4))){
var inst_32889 = (state_32917[(10)]);
var state_32917__$1 = state_32917;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32917__$1,(7),inst_32889);
} else {
if((state_val_32918 === (6))){
var inst_32913 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32924_32949 = state_32917__$1;
(statearr_32924_32949[(2)] = inst_32913);

(statearr_32924_32949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (3))){
var inst_32915 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32917__$1,inst_32915);
} else {
if((state_val_32918 === (2))){
var inst_32889 = (state_32917[(10)]);
var inst_32891 = cljs.core.count.call(null,inst_32889);
var inst_32892 = (inst_32891 > (0));
var state_32917__$1 = state_32917;
if(cljs.core.truth_(inst_32892)){
var statearr_32926_32950 = state_32917__$1;
(statearr_32926_32950[(1)] = (4));

} else {
var statearr_32927_32951 = state_32917__$1;
(statearr_32927_32951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (11))){
var inst_32889 = (state_32917[(10)]);
var inst_32906 = (state_32917[(2)]);
var tmp32925 = inst_32889;
var inst_32889__$1 = tmp32925;
var state_32917__$1 = (function (){var statearr_32928 = state_32917;
(statearr_32928[(10)] = inst_32889__$1);

(statearr_32928[(11)] = inst_32906);

return statearr_32928;
})();
var statearr_32929_32952 = state_32917__$1;
(statearr_32929_32952[(2)] = null);

(statearr_32929_32952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (9))){
var inst_32897 = (state_32917[(7)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32917__$1,(11),out,inst_32897);
} else {
if((state_val_32918 === (5))){
var inst_32911 = cljs.core.async.close_BANG_.call(null,out);
var state_32917__$1 = state_32917;
var statearr_32930_32953 = state_32917__$1;
(statearr_32930_32953[(2)] = inst_32911);

(statearr_32930_32953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (10))){
var inst_32909 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32931_32954 = state_32917__$1;
(statearr_32931_32954[(2)] = inst_32909);

(statearr_32931_32954[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (8))){
var inst_32889 = (state_32917[(10)]);
var inst_32898 = (state_32917[(9)]);
var inst_32897 = (state_32917[(7)]);
var inst_32896 = (state_32917[(8)]);
var inst_32901 = (function (){var cs = inst_32889;
var vec__32894 = inst_32896;
var v = inst_32897;
var c = inst_32898;
return ((function (cs,vec__32894,v,c,inst_32889,inst_32898,inst_32897,inst_32896,state_val_32918,c__22242__auto___32945,out){
return (function (p1__32884_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32884_SHARP_);
});
;})(cs,vec__32894,v,c,inst_32889,inst_32898,inst_32897,inst_32896,state_val_32918,c__22242__auto___32945,out))
})();
var inst_32902 = cljs.core.filterv.call(null,inst_32901,inst_32889);
var inst_32889__$1 = inst_32902;
var state_32917__$1 = (function (){var statearr_32932 = state_32917;
(statearr_32932[(10)] = inst_32889__$1);

return statearr_32932;
})();
var statearr_32933_32955 = state_32917__$1;
(statearr_32933_32955[(2)] = null);

(statearr_32933_32955[(1)] = (2));


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
});})(c__22242__auto___32945,out))
;
return ((function (switch__22177__auto__,c__22242__auto___32945,out){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_32937 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32937[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_32937[(1)] = (1));

return statearr_32937;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_32917){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_32917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e32938){if((e32938 instanceof Object)){
var ex__22181__auto__ = e32938;
var statearr_32939_32956 = state_32917;
(statearr_32939_32956[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32957 = state_32917;
state_32917 = G__32957;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___32945,out))
})();
var state__22244__auto__ = (function (){var statearr_32940 = f__22243__auto__.call(null);
(statearr_32940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___32945);

return statearr_32940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___32945,out))
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
var args32958 = [];
var len__20220__auto___33007 = arguments.length;
var i__20221__auto___33008 = (0);
while(true){
if((i__20221__auto___33008 < len__20220__auto___33007)){
args32958.push((arguments[i__20221__auto___33008]));

var G__33009 = (i__20221__auto___33008 + (1));
i__20221__auto___33008 = G__33009;
continue;
} else {
}
break;
}

var G__32960 = args32958.length;
switch (G__32960) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32958.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22242__auto___33011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___33011,out){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___33011,out){
return (function (state_32984){
var state_val_32985 = (state_32984[(1)]);
if((state_val_32985 === (7))){
var inst_32966 = (state_32984[(7)]);
var inst_32966__$1 = (state_32984[(2)]);
var inst_32967 = (inst_32966__$1 == null);
var inst_32968 = cljs.core.not.call(null,inst_32967);
var state_32984__$1 = (function (){var statearr_32986 = state_32984;
(statearr_32986[(7)] = inst_32966__$1);

return statearr_32986;
})();
if(inst_32968){
var statearr_32987_33012 = state_32984__$1;
(statearr_32987_33012[(1)] = (8));

} else {
var statearr_32988_33013 = state_32984__$1;
(statearr_32988_33013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (1))){
var inst_32961 = (0);
var state_32984__$1 = (function (){var statearr_32989 = state_32984;
(statearr_32989[(8)] = inst_32961);

return statearr_32989;
})();
var statearr_32990_33014 = state_32984__$1;
(statearr_32990_33014[(2)] = null);

(statearr_32990_33014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (4))){
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32984__$1,(7),ch);
} else {
if((state_val_32985 === (6))){
var inst_32979 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_32991_33015 = state_32984__$1;
(statearr_32991_33015[(2)] = inst_32979);

(statearr_32991_33015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (3))){
var inst_32981 = (state_32984[(2)]);
var inst_32982 = cljs.core.async.close_BANG_.call(null,out);
var state_32984__$1 = (function (){var statearr_32992 = state_32984;
(statearr_32992[(9)] = inst_32981);

return statearr_32992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32984__$1,inst_32982);
} else {
if((state_val_32985 === (2))){
var inst_32961 = (state_32984[(8)]);
var inst_32963 = (inst_32961 < n);
var state_32984__$1 = state_32984;
if(cljs.core.truth_(inst_32963)){
var statearr_32993_33016 = state_32984__$1;
(statearr_32993_33016[(1)] = (4));

} else {
var statearr_32994_33017 = state_32984__$1;
(statearr_32994_33017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (11))){
var inst_32961 = (state_32984[(8)]);
var inst_32971 = (state_32984[(2)]);
var inst_32972 = (inst_32961 + (1));
var inst_32961__$1 = inst_32972;
var state_32984__$1 = (function (){var statearr_32995 = state_32984;
(statearr_32995[(8)] = inst_32961__$1);

(statearr_32995[(10)] = inst_32971);

return statearr_32995;
})();
var statearr_32996_33018 = state_32984__$1;
(statearr_32996_33018[(2)] = null);

(statearr_32996_33018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (9))){
var state_32984__$1 = state_32984;
var statearr_32997_33019 = state_32984__$1;
(statearr_32997_33019[(2)] = null);

(statearr_32997_33019[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (5))){
var state_32984__$1 = state_32984;
var statearr_32998_33020 = state_32984__$1;
(statearr_32998_33020[(2)] = null);

(statearr_32998_33020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (10))){
var inst_32976 = (state_32984[(2)]);
var state_32984__$1 = state_32984;
var statearr_32999_33021 = state_32984__$1;
(statearr_32999_33021[(2)] = inst_32976);

(statearr_32999_33021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32985 === (8))){
var inst_32966 = (state_32984[(7)]);
var state_32984__$1 = state_32984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32984__$1,(11),out,inst_32966);
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
});})(c__22242__auto___33011,out))
;
return ((function (switch__22177__auto__,c__22242__auto___33011,out){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_33003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33003[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_33003[(1)] = (1));

return statearr_33003;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_32984){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_32984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e33004){if((e33004 instanceof Object)){
var ex__22181__auto__ = e33004;
var statearr_33005_33022 = state_32984;
(statearr_33005_33022[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33023 = state_32984;
state_32984 = G__33023;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_32984){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_32984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___33011,out))
})();
var state__22244__auto__ = (function (){var statearr_33006 = f__22243__auto__.call(null);
(statearr_33006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___33011);

return statearr_33006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___33011,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33031 = (function (map_LT_,f,ch,meta33032){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33032 = meta33032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33033,meta33032__$1){
var self__ = this;
var _33033__$1 = this;
return (new cljs.core.async.t_cljs$core$async33031(self__.map_LT_,self__.f,self__.ch,meta33032__$1));
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33033){
var self__ = this;
var _33033__$1 = this;
return self__.meta33032;
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33034 = (function (map_LT_,f,ch,meta33032,_,fn1,meta33035){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33032 = meta33032;
this._ = _;
this.fn1 = fn1;
this.meta33035 = meta33035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33036,meta33035__$1){
var self__ = this;
var _33036__$1 = this;
return (new cljs.core.async.t_cljs$core$async33034(self__.map_LT_,self__.f,self__.ch,self__.meta33032,self__._,self__.fn1,meta33035__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33036){
var self__ = this;
var _33036__$1 = this;
return self__.meta33035;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33024_SHARP_){
return f1.call(null,(((p1__33024_SHARP_ == null))?null:self__.f.call(null,p1__33024_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33034.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33032","meta33032",188783255,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33031","cljs.core.async/t_cljs$core$async33031",-297414409,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33035","meta33035",2121980559,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33034";

cljs.core.async.t_cljs$core$async33034.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async33034");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33034 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33034(map_LT___$1,f__$1,ch__$1,meta33032__$1,___$2,fn1__$1,meta33035){
return (new cljs.core.async.t_cljs$core$async33034(map_LT___$1,f__$1,ch__$1,meta33032__$1,___$2,fn1__$1,meta33035));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33034(self__.map_LT_,self__.f,self__.ch,self__.meta33032,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19150__auto__ = ret;
if(cljs.core.truth_(and__19150__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19150__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33031.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33031.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33032","meta33032",188783255,null)], null);
});

cljs.core.async.t_cljs$core$async33031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33031";

cljs.core.async.t_cljs$core$async33031.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async33031");
});

cljs.core.async.__GT_t_cljs$core$async33031 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33031(map_LT___$1,f__$1,ch__$1,meta33032){
return (new cljs.core.async.t_cljs$core$async33031(map_LT___$1,f__$1,ch__$1,meta33032));
});

}

return (new cljs.core.async.t_cljs$core$async33031(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33040 = (function (map_GT_,f,ch,meta33041){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33041 = meta33041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33042,meta33041__$1){
var self__ = this;
var _33042__$1 = this;
return (new cljs.core.async.t_cljs$core$async33040(self__.map_GT_,self__.f,self__.ch,meta33041__$1));
});

cljs.core.async.t_cljs$core$async33040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33042){
var self__ = this;
var _33042__$1 = this;
return self__.meta33041;
});

cljs.core.async.t_cljs$core$async33040.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33040.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33040.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33040.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33040.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33040.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33041","meta33041",259870168,null)], null);
});

cljs.core.async.t_cljs$core$async33040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33040";

cljs.core.async.t_cljs$core$async33040.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async33040");
});

cljs.core.async.__GT_t_cljs$core$async33040 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33040(map_GT___$1,f__$1,ch__$1,meta33041){
return (new cljs.core.async.t_cljs$core$async33040(map_GT___$1,f__$1,ch__$1,meta33041));
});

}

return (new cljs.core.async.t_cljs$core$async33040(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33046 = (function (filter_GT_,p,ch,meta33047){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33047 = meta33047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33048,meta33047__$1){
var self__ = this;
var _33048__$1 = this;
return (new cljs.core.async.t_cljs$core$async33046(self__.filter_GT_,self__.p,self__.ch,meta33047__$1));
});

cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33048){
var self__ = this;
var _33048__$1 = this;
return self__.meta33047;
});

cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33046.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33047","meta33047",-857145351,null)], null);
});

cljs.core.async.t_cljs$core$async33046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33046";

cljs.core.async.t_cljs$core$async33046.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cljs.core.async/t_cljs$core$async33046");
});

cljs.core.async.__GT_t_cljs$core$async33046 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33046(filter_GT___$1,p__$1,ch__$1,meta33047){
return (new cljs.core.async.t_cljs$core$async33046(filter_GT___$1,p__$1,ch__$1,meta33047));
});

}

return (new cljs.core.async.t_cljs$core$async33046(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33049 = [];
var len__20220__auto___33093 = arguments.length;
var i__20221__auto___33094 = (0);
while(true){
if((i__20221__auto___33094 < len__20220__auto___33093)){
args33049.push((arguments[i__20221__auto___33094]));

var G__33095 = (i__20221__auto___33094 + (1));
i__20221__auto___33094 = G__33095;
continue;
} else {
}
break;
}

var G__33051 = args33049.length;
switch (G__33051) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33049.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22242__auto___33097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___33097,out){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___33097,out){
return (function (state_33072){
var state_val_33073 = (state_33072[(1)]);
if((state_val_33073 === (7))){
var inst_33068 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33074_33098 = state_33072__$1;
(statearr_33074_33098[(2)] = inst_33068);

(statearr_33074_33098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (1))){
var state_33072__$1 = state_33072;
var statearr_33075_33099 = state_33072__$1;
(statearr_33075_33099[(2)] = null);

(statearr_33075_33099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (4))){
var inst_33054 = (state_33072[(7)]);
var inst_33054__$1 = (state_33072[(2)]);
var inst_33055 = (inst_33054__$1 == null);
var state_33072__$1 = (function (){var statearr_33076 = state_33072;
(statearr_33076[(7)] = inst_33054__$1);

return statearr_33076;
})();
if(cljs.core.truth_(inst_33055)){
var statearr_33077_33100 = state_33072__$1;
(statearr_33077_33100[(1)] = (5));

} else {
var statearr_33078_33101 = state_33072__$1;
(statearr_33078_33101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (6))){
var inst_33054 = (state_33072[(7)]);
var inst_33059 = p.call(null,inst_33054);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33059)){
var statearr_33079_33102 = state_33072__$1;
(statearr_33079_33102[(1)] = (8));

} else {
var statearr_33080_33103 = state_33072__$1;
(statearr_33080_33103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (3))){
var inst_33070 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33072__$1,inst_33070);
} else {
if((state_val_33073 === (2))){
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33072__$1,(4),ch);
} else {
if((state_val_33073 === (11))){
var inst_33062 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33081_33104 = state_33072__$1;
(statearr_33081_33104[(2)] = inst_33062);

(statearr_33081_33104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (9))){
var state_33072__$1 = state_33072;
var statearr_33082_33105 = state_33072__$1;
(statearr_33082_33105[(2)] = null);

(statearr_33082_33105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (5))){
var inst_33057 = cljs.core.async.close_BANG_.call(null,out);
var state_33072__$1 = state_33072;
var statearr_33083_33106 = state_33072__$1;
(statearr_33083_33106[(2)] = inst_33057);

(statearr_33083_33106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (10))){
var inst_33065 = (state_33072[(2)]);
var state_33072__$1 = (function (){var statearr_33084 = state_33072;
(statearr_33084[(8)] = inst_33065);

return statearr_33084;
})();
var statearr_33085_33107 = state_33072__$1;
(statearr_33085_33107[(2)] = null);

(statearr_33085_33107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (8))){
var inst_33054 = (state_33072[(7)]);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33072__$1,(11),out,inst_33054);
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
});})(c__22242__auto___33097,out))
;
return ((function (switch__22177__auto__,c__22242__auto___33097,out){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_33089 = [null,null,null,null,null,null,null,null,null];
(statearr_33089[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_33089[(1)] = (1));

return statearr_33089;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_33072){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_33072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e33090){if((e33090 instanceof Object)){
var ex__22181__auto__ = e33090;
var statearr_33091_33108 = state_33072;
(statearr_33091_33108[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33109 = state_33072;
state_33072 = G__33109;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_33072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_33072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___33097,out))
})();
var state__22244__auto__ = (function (){var statearr_33092 = f__22243__auto__.call(null);
(statearr_33092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___33097);

return statearr_33092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___33097,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33110 = [];
var len__20220__auto___33113 = arguments.length;
var i__20221__auto___33114 = (0);
while(true){
if((i__20221__auto___33114 < len__20220__auto___33113)){
args33110.push((arguments[i__20221__auto___33114]));

var G__33115 = (i__20221__auto___33114 + (1));
i__20221__auto___33114 = G__33115;
continue;
} else {
}
break;
}

var G__33112 = args33110.length;
switch (G__33112) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33110.length)].join('')));

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
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__){
return (function (state_33282){
var state_val_33283 = (state_33282[(1)]);
if((state_val_33283 === (7))){
var inst_33278 = (state_33282[(2)]);
var state_33282__$1 = state_33282;
var statearr_33284_33325 = state_33282__$1;
(statearr_33284_33325[(2)] = inst_33278);

(statearr_33284_33325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (20))){
var inst_33248 = (state_33282[(7)]);
var inst_33259 = (state_33282[(2)]);
var inst_33260 = cljs.core.next.call(null,inst_33248);
var inst_33234 = inst_33260;
var inst_33235 = null;
var inst_33236 = (0);
var inst_33237 = (0);
var state_33282__$1 = (function (){var statearr_33285 = state_33282;
(statearr_33285[(8)] = inst_33236);

(statearr_33285[(9)] = inst_33259);

(statearr_33285[(10)] = inst_33237);

(statearr_33285[(11)] = inst_33235);

(statearr_33285[(12)] = inst_33234);

return statearr_33285;
})();
var statearr_33286_33326 = state_33282__$1;
(statearr_33286_33326[(2)] = null);

(statearr_33286_33326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (1))){
var state_33282__$1 = state_33282;
var statearr_33287_33327 = state_33282__$1;
(statearr_33287_33327[(2)] = null);

(statearr_33287_33327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (4))){
var inst_33223 = (state_33282[(13)]);
var inst_33223__$1 = (state_33282[(2)]);
var inst_33224 = (inst_33223__$1 == null);
var state_33282__$1 = (function (){var statearr_33288 = state_33282;
(statearr_33288[(13)] = inst_33223__$1);

return statearr_33288;
})();
if(cljs.core.truth_(inst_33224)){
var statearr_33289_33328 = state_33282__$1;
(statearr_33289_33328[(1)] = (5));

} else {
var statearr_33290_33329 = state_33282__$1;
(statearr_33290_33329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (15))){
var state_33282__$1 = state_33282;
var statearr_33294_33330 = state_33282__$1;
(statearr_33294_33330[(2)] = null);

(statearr_33294_33330[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (21))){
var state_33282__$1 = state_33282;
var statearr_33295_33331 = state_33282__$1;
(statearr_33295_33331[(2)] = null);

(statearr_33295_33331[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (13))){
var inst_33236 = (state_33282[(8)]);
var inst_33237 = (state_33282[(10)]);
var inst_33235 = (state_33282[(11)]);
var inst_33234 = (state_33282[(12)]);
var inst_33244 = (state_33282[(2)]);
var inst_33245 = (inst_33237 + (1));
var tmp33291 = inst_33236;
var tmp33292 = inst_33235;
var tmp33293 = inst_33234;
var inst_33234__$1 = tmp33293;
var inst_33235__$1 = tmp33292;
var inst_33236__$1 = tmp33291;
var inst_33237__$1 = inst_33245;
var state_33282__$1 = (function (){var statearr_33296 = state_33282;
(statearr_33296[(8)] = inst_33236__$1);

(statearr_33296[(10)] = inst_33237__$1);

(statearr_33296[(11)] = inst_33235__$1);

(statearr_33296[(12)] = inst_33234__$1);

(statearr_33296[(14)] = inst_33244);

return statearr_33296;
})();
var statearr_33297_33332 = state_33282__$1;
(statearr_33297_33332[(2)] = null);

(statearr_33297_33332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (22))){
var state_33282__$1 = state_33282;
var statearr_33298_33333 = state_33282__$1;
(statearr_33298_33333[(2)] = null);

(statearr_33298_33333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (6))){
var inst_33223 = (state_33282[(13)]);
var inst_33232 = f.call(null,inst_33223);
var inst_33233 = cljs.core.seq.call(null,inst_33232);
var inst_33234 = inst_33233;
var inst_33235 = null;
var inst_33236 = (0);
var inst_33237 = (0);
var state_33282__$1 = (function (){var statearr_33299 = state_33282;
(statearr_33299[(8)] = inst_33236);

(statearr_33299[(10)] = inst_33237);

(statearr_33299[(11)] = inst_33235);

(statearr_33299[(12)] = inst_33234);

return statearr_33299;
})();
var statearr_33300_33334 = state_33282__$1;
(statearr_33300_33334[(2)] = null);

(statearr_33300_33334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (17))){
var inst_33248 = (state_33282[(7)]);
var inst_33252 = cljs.core.chunk_first.call(null,inst_33248);
var inst_33253 = cljs.core.chunk_rest.call(null,inst_33248);
var inst_33254 = cljs.core.count.call(null,inst_33252);
var inst_33234 = inst_33253;
var inst_33235 = inst_33252;
var inst_33236 = inst_33254;
var inst_33237 = (0);
var state_33282__$1 = (function (){var statearr_33301 = state_33282;
(statearr_33301[(8)] = inst_33236);

(statearr_33301[(10)] = inst_33237);

(statearr_33301[(11)] = inst_33235);

(statearr_33301[(12)] = inst_33234);

return statearr_33301;
})();
var statearr_33302_33335 = state_33282__$1;
(statearr_33302_33335[(2)] = null);

(statearr_33302_33335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (3))){
var inst_33280 = (state_33282[(2)]);
var state_33282__$1 = state_33282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33282__$1,inst_33280);
} else {
if((state_val_33283 === (12))){
var inst_33268 = (state_33282[(2)]);
var state_33282__$1 = state_33282;
var statearr_33303_33336 = state_33282__$1;
(statearr_33303_33336[(2)] = inst_33268);

(statearr_33303_33336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (2))){
var state_33282__$1 = state_33282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33282__$1,(4),in$);
} else {
if((state_val_33283 === (23))){
var inst_33276 = (state_33282[(2)]);
var state_33282__$1 = state_33282;
var statearr_33304_33337 = state_33282__$1;
(statearr_33304_33337[(2)] = inst_33276);

(statearr_33304_33337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (19))){
var inst_33263 = (state_33282[(2)]);
var state_33282__$1 = state_33282;
var statearr_33305_33338 = state_33282__$1;
(statearr_33305_33338[(2)] = inst_33263);

(statearr_33305_33338[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (11))){
var inst_33248 = (state_33282[(7)]);
var inst_33234 = (state_33282[(12)]);
var inst_33248__$1 = cljs.core.seq.call(null,inst_33234);
var state_33282__$1 = (function (){var statearr_33306 = state_33282;
(statearr_33306[(7)] = inst_33248__$1);

return statearr_33306;
})();
if(inst_33248__$1){
var statearr_33307_33339 = state_33282__$1;
(statearr_33307_33339[(1)] = (14));

} else {
var statearr_33308_33340 = state_33282__$1;
(statearr_33308_33340[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (9))){
var inst_33270 = (state_33282[(2)]);
var inst_33271 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33282__$1 = (function (){var statearr_33309 = state_33282;
(statearr_33309[(15)] = inst_33270);

return statearr_33309;
})();
if(cljs.core.truth_(inst_33271)){
var statearr_33310_33341 = state_33282__$1;
(statearr_33310_33341[(1)] = (21));

} else {
var statearr_33311_33342 = state_33282__$1;
(statearr_33311_33342[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (5))){
var inst_33226 = cljs.core.async.close_BANG_.call(null,out);
var state_33282__$1 = state_33282;
var statearr_33312_33343 = state_33282__$1;
(statearr_33312_33343[(2)] = inst_33226);

(statearr_33312_33343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (14))){
var inst_33248 = (state_33282[(7)]);
var inst_33250 = cljs.core.chunked_seq_QMARK_.call(null,inst_33248);
var state_33282__$1 = state_33282;
if(inst_33250){
var statearr_33313_33344 = state_33282__$1;
(statearr_33313_33344[(1)] = (17));

} else {
var statearr_33314_33345 = state_33282__$1;
(statearr_33314_33345[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (16))){
var inst_33266 = (state_33282[(2)]);
var state_33282__$1 = state_33282;
var statearr_33315_33346 = state_33282__$1;
(statearr_33315_33346[(2)] = inst_33266);

(statearr_33315_33346[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33283 === (10))){
var inst_33237 = (state_33282[(10)]);
var inst_33235 = (state_33282[(11)]);
var inst_33242 = cljs.core._nth.call(null,inst_33235,inst_33237);
var state_33282__$1 = state_33282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33282__$1,(13),out,inst_33242);
} else {
if((state_val_33283 === (18))){
var inst_33248 = (state_33282[(7)]);
var inst_33257 = cljs.core.first.call(null,inst_33248);
var state_33282__$1 = state_33282;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33282__$1,(20),out,inst_33257);
} else {
if((state_val_33283 === (8))){
var inst_33236 = (state_33282[(8)]);
var inst_33237 = (state_33282[(10)]);
var inst_33239 = (inst_33237 < inst_33236);
var inst_33240 = inst_33239;
var state_33282__$1 = state_33282;
if(cljs.core.truth_(inst_33240)){
var statearr_33316_33347 = state_33282__$1;
(statearr_33316_33347[(1)] = (10));

} else {
var statearr_33317_33348 = state_33282__$1;
(statearr_33317_33348[(1)] = (11));

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
});})(c__22242__auto__))
;
return ((function (switch__22177__auto__,c__22242__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22178__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22178__auto____0 = (function (){
var statearr_33321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33321[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22178__auto__);

(statearr_33321[(1)] = (1));

return statearr_33321;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22178__auto____1 = (function (state_33282){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_33282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e33322){if((e33322 instanceof Object)){
var ex__22181__auto__ = e33322;
var statearr_33323_33349 = state_33282;
(statearr_33323_33349[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33350 = state_33282;
state_33282 = G__33350;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22178__auto__ = function(state_33282){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22178__auto____1.call(this,state_33282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22178__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22178__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__))
})();
var state__22244__auto__ = (function (){var statearr_33324 = f__22243__auto__.call(null);
(statearr_33324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_33324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__))
);

return c__22242__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33351 = [];
var len__20220__auto___33354 = arguments.length;
var i__20221__auto___33355 = (0);
while(true){
if((i__20221__auto___33355 < len__20220__auto___33354)){
args33351.push((arguments[i__20221__auto___33355]));

var G__33356 = (i__20221__auto___33355 + (1));
i__20221__auto___33355 = G__33356;
continue;
} else {
}
break;
}

var G__33353 = args33351.length;
switch (G__33353) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33351.length)].join('')));

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
var args33358 = [];
var len__20220__auto___33361 = arguments.length;
var i__20221__auto___33362 = (0);
while(true){
if((i__20221__auto___33362 < len__20220__auto___33361)){
args33358.push((arguments[i__20221__auto___33362]));

var G__33363 = (i__20221__auto___33362 + (1));
i__20221__auto___33362 = G__33363;
continue;
} else {
}
break;
}

var G__33360 = args33358.length;
switch (G__33360) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33358.length)].join('')));

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
var args33365 = [];
var len__20220__auto___33416 = arguments.length;
var i__20221__auto___33417 = (0);
while(true){
if((i__20221__auto___33417 < len__20220__auto___33416)){
args33365.push((arguments[i__20221__auto___33417]));

var G__33418 = (i__20221__auto___33417 + (1));
i__20221__auto___33417 = G__33418;
continue;
} else {
}
break;
}

var G__33367 = args33365.length;
switch (G__33367) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33365.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22242__auto___33420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___33420,out){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___33420,out){
return (function (state_33391){
var state_val_33392 = (state_33391[(1)]);
if((state_val_33392 === (7))){
var inst_33386 = (state_33391[(2)]);
var state_33391__$1 = state_33391;
var statearr_33393_33421 = state_33391__$1;
(statearr_33393_33421[(2)] = inst_33386);

(statearr_33393_33421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (1))){
var inst_33368 = null;
var state_33391__$1 = (function (){var statearr_33394 = state_33391;
(statearr_33394[(7)] = inst_33368);

return statearr_33394;
})();
var statearr_33395_33422 = state_33391__$1;
(statearr_33395_33422[(2)] = null);

(statearr_33395_33422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (4))){
var inst_33371 = (state_33391[(8)]);
var inst_33371__$1 = (state_33391[(2)]);
var inst_33372 = (inst_33371__$1 == null);
var inst_33373 = cljs.core.not.call(null,inst_33372);
var state_33391__$1 = (function (){var statearr_33396 = state_33391;
(statearr_33396[(8)] = inst_33371__$1);

return statearr_33396;
})();
if(inst_33373){
var statearr_33397_33423 = state_33391__$1;
(statearr_33397_33423[(1)] = (5));

} else {
var statearr_33398_33424 = state_33391__$1;
(statearr_33398_33424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (6))){
var state_33391__$1 = state_33391;
var statearr_33399_33425 = state_33391__$1;
(statearr_33399_33425[(2)] = null);

(statearr_33399_33425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (3))){
var inst_33388 = (state_33391[(2)]);
var inst_33389 = cljs.core.async.close_BANG_.call(null,out);
var state_33391__$1 = (function (){var statearr_33400 = state_33391;
(statearr_33400[(9)] = inst_33388);

return statearr_33400;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33391__$1,inst_33389);
} else {
if((state_val_33392 === (2))){
var state_33391__$1 = state_33391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33391__$1,(4),ch);
} else {
if((state_val_33392 === (11))){
var inst_33371 = (state_33391[(8)]);
var inst_33380 = (state_33391[(2)]);
var inst_33368 = inst_33371;
var state_33391__$1 = (function (){var statearr_33401 = state_33391;
(statearr_33401[(7)] = inst_33368);

(statearr_33401[(10)] = inst_33380);

return statearr_33401;
})();
var statearr_33402_33426 = state_33391__$1;
(statearr_33402_33426[(2)] = null);

(statearr_33402_33426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (9))){
var inst_33371 = (state_33391[(8)]);
var state_33391__$1 = state_33391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33391__$1,(11),out,inst_33371);
} else {
if((state_val_33392 === (5))){
var inst_33371 = (state_33391[(8)]);
var inst_33368 = (state_33391[(7)]);
var inst_33375 = cljs.core._EQ_.call(null,inst_33371,inst_33368);
var state_33391__$1 = state_33391;
if(inst_33375){
var statearr_33404_33427 = state_33391__$1;
(statearr_33404_33427[(1)] = (8));

} else {
var statearr_33405_33428 = state_33391__$1;
(statearr_33405_33428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (10))){
var inst_33383 = (state_33391[(2)]);
var state_33391__$1 = state_33391;
var statearr_33406_33429 = state_33391__$1;
(statearr_33406_33429[(2)] = inst_33383);

(statearr_33406_33429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33392 === (8))){
var inst_33368 = (state_33391[(7)]);
var tmp33403 = inst_33368;
var inst_33368__$1 = tmp33403;
var state_33391__$1 = (function (){var statearr_33407 = state_33391;
(statearr_33407[(7)] = inst_33368__$1);

return statearr_33407;
})();
var statearr_33408_33430 = state_33391__$1;
(statearr_33408_33430[(2)] = null);

(statearr_33408_33430[(1)] = (2));


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
});})(c__22242__auto___33420,out))
;
return ((function (switch__22177__auto__,c__22242__auto___33420,out){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_33412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33412[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_33412[(1)] = (1));

return statearr_33412;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_33391){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_33391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e33413){if((e33413 instanceof Object)){
var ex__22181__auto__ = e33413;
var statearr_33414_33431 = state_33391;
(statearr_33414_33431[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33432 = state_33391;
state_33391 = G__33432;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_33391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_33391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___33420,out))
})();
var state__22244__auto__ = (function (){var statearr_33415 = f__22243__auto__.call(null);
(statearr_33415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___33420);

return statearr_33415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___33420,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33433 = [];
var len__20220__auto___33503 = arguments.length;
var i__20221__auto___33504 = (0);
while(true){
if((i__20221__auto___33504 < len__20220__auto___33503)){
args33433.push((arguments[i__20221__auto___33504]));

var G__33505 = (i__20221__auto___33504 + (1));
i__20221__auto___33504 = G__33505;
continue;
} else {
}
break;
}

var G__33435 = args33433.length;
switch (G__33435) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33433.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22242__auto___33507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___33507,out){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___33507,out){
return (function (state_33473){
var state_val_33474 = (state_33473[(1)]);
if((state_val_33474 === (7))){
var inst_33469 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
var statearr_33475_33508 = state_33473__$1;
(statearr_33475_33508[(2)] = inst_33469);

(statearr_33475_33508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (1))){
var inst_33436 = (new Array(n));
var inst_33437 = inst_33436;
var inst_33438 = (0);
var state_33473__$1 = (function (){var statearr_33476 = state_33473;
(statearr_33476[(7)] = inst_33437);

(statearr_33476[(8)] = inst_33438);

return statearr_33476;
})();
var statearr_33477_33509 = state_33473__$1;
(statearr_33477_33509[(2)] = null);

(statearr_33477_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (4))){
var inst_33441 = (state_33473[(9)]);
var inst_33441__$1 = (state_33473[(2)]);
var inst_33442 = (inst_33441__$1 == null);
var inst_33443 = cljs.core.not.call(null,inst_33442);
var state_33473__$1 = (function (){var statearr_33478 = state_33473;
(statearr_33478[(9)] = inst_33441__$1);

return statearr_33478;
})();
if(inst_33443){
var statearr_33479_33510 = state_33473__$1;
(statearr_33479_33510[(1)] = (5));

} else {
var statearr_33480_33511 = state_33473__$1;
(statearr_33480_33511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (15))){
var inst_33463 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
var statearr_33481_33512 = state_33473__$1;
(statearr_33481_33512[(2)] = inst_33463);

(statearr_33481_33512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (13))){
var state_33473__$1 = state_33473;
var statearr_33482_33513 = state_33473__$1;
(statearr_33482_33513[(2)] = null);

(statearr_33482_33513[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (6))){
var inst_33438 = (state_33473[(8)]);
var inst_33459 = (inst_33438 > (0));
var state_33473__$1 = state_33473;
if(cljs.core.truth_(inst_33459)){
var statearr_33483_33514 = state_33473__$1;
(statearr_33483_33514[(1)] = (12));

} else {
var statearr_33484_33515 = state_33473__$1;
(statearr_33484_33515[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (3))){
var inst_33471 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33473__$1,inst_33471);
} else {
if((state_val_33474 === (12))){
var inst_33437 = (state_33473[(7)]);
var inst_33461 = cljs.core.vec.call(null,inst_33437);
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33473__$1,(15),out,inst_33461);
} else {
if((state_val_33474 === (2))){
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33473__$1,(4),ch);
} else {
if((state_val_33474 === (11))){
var inst_33453 = (state_33473[(2)]);
var inst_33454 = (new Array(n));
var inst_33437 = inst_33454;
var inst_33438 = (0);
var state_33473__$1 = (function (){var statearr_33485 = state_33473;
(statearr_33485[(7)] = inst_33437);

(statearr_33485[(10)] = inst_33453);

(statearr_33485[(8)] = inst_33438);

return statearr_33485;
})();
var statearr_33486_33516 = state_33473__$1;
(statearr_33486_33516[(2)] = null);

(statearr_33486_33516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (9))){
var inst_33437 = (state_33473[(7)]);
var inst_33451 = cljs.core.vec.call(null,inst_33437);
var state_33473__$1 = state_33473;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33473__$1,(11),out,inst_33451);
} else {
if((state_val_33474 === (5))){
var inst_33446 = (state_33473[(11)]);
var inst_33437 = (state_33473[(7)]);
var inst_33441 = (state_33473[(9)]);
var inst_33438 = (state_33473[(8)]);
var inst_33445 = (inst_33437[inst_33438] = inst_33441);
var inst_33446__$1 = (inst_33438 + (1));
var inst_33447 = (inst_33446__$1 < n);
var state_33473__$1 = (function (){var statearr_33487 = state_33473;
(statearr_33487[(11)] = inst_33446__$1);

(statearr_33487[(12)] = inst_33445);

return statearr_33487;
})();
if(cljs.core.truth_(inst_33447)){
var statearr_33488_33517 = state_33473__$1;
(statearr_33488_33517[(1)] = (8));

} else {
var statearr_33489_33518 = state_33473__$1;
(statearr_33489_33518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (14))){
var inst_33466 = (state_33473[(2)]);
var inst_33467 = cljs.core.async.close_BANG_.call(null,out);
var state_33473__$1 = (function (){var statearr_33491 = state_33473;
(statearr_33491[(13)] = inst_33466);

return statearr_33491;
})();
var statearr_33492_33519 = state_33473__$1;
(statearr_33492_33519[(2)] = inst_33467);

(statearr_33492_33519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (10))){
var inst_33457 = (state_33473[(2)]);
var state_33473__$1 = state_33473;
var statearr_33493_33520 = state_33473__$1;
(statearr_33493_33520[(2)] = inst_33457);

(statearr_33493_33520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33474 === (8))){
var inst_33446 = (state_33473[(11)]);
var inst_33437 = (state_33473[(7)]);
var tmp33490 = inst_33437;
var inst_33437__$1 = tmp33490;
var inst_33438 = inst_33446;
var state_33473__$1 = (function (){var statearr_33494 = state_33473;
(statearr_33494[(7)] = inst_33437__$1);

(statearr_33494[(8)] = inst_33438);

return statearr_33494;
})();
var statearr_33495_33521 = state_33473__$1;
(statearr_33495_33521[(2)] = null);

(statearr_33495_33521[(1)] = (2));


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
});})(c__22242__auto___33507,out))
;
return ((function (switch__22177__auto__,c__22242__auto___33507,out){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_33499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33499[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_33499[(1)] = (1));

return statearr_33499;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_33473){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_33473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e33500){if((e33500 instanceof Object)){
var ex__22181__auto__ = e33500;
var statearr_33501_33522 = state_33473;
(statearr_33501_33522[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33523 = state_33473;
state_33473 = G__33523;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_33473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_33473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___33507,out))
})();
var state__22244__auto__ = (function (){var statearr_33502 = f__22243__auto__.call(null);
(statearr_33502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___33507);

return statearr_33502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___33507,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33524 = [];
var len__20220__auto___33598 = arguments.length;
var i__20221__auto___33599 = (0);
while(true){
if((i__20221__auto___33599 < len__20220__auto___33598)){
args33524.push((arguments[i__20221__auto___33599]));

var G__33600 = (i__20221__auto___33599 + (1));
i__20221__auto___33599 = G__33600;
continue;
} else {
}
break;
}

var G__33526 = args33524.length;
switch (G__33526) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33524.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22242__auto___33602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___33602,out){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___33602,out){
return (function (state_33568){
var state_val_33569 = (state_33568[(1)]);
if((state_val_33569 === (7))){
var inst_33564 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33570_33603 = state_33568__$1;
(statearr_33570_33603[(2)] = inst_33564);

(statearr_33570_33603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (1))){
var inst_33527 = [];
var inst_33528 = inst_33527;
var inst_33529 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33568__$1 = (function (){var statearr_33571 = state_33568;
(statearr_33571[(7)] = inst_33528);

(statearr_33571[(8)] = inst_33529);

return statearr_33571;
})();
var statearr_33572_33604 = state_33568__$1;
(statearr_33572_33604[(2)] = null);

(statearr_33572_33604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (4))){
var inst_33532 = (state_33568[(9)]);
var inst_33532__$1 = (state_33568[(2)]);
var inst_33533 = (inst_33532__$1 == null);
var inst_33534 = cljs.core.not.call(null,inst_33533);
var state_33568__$1 = (function (){var statearr_33573 = state_33568;
(statearr_33573[(9)] = inst_33532__$1);

return statearr_33573;
})();
if(inst_33534){
var statearr_33574_33605 = state_33568__$1;
(statearr_33574_33605[(1)] = (5));

} else {
var statearr_33575_33606 = state_33568__$1;
(statearr_33575_33606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (15))){
var inst_33558 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33576_33607 = state_33568__$1;
(statearr_33576_33607[(2)] = inst_33558);

(statearr_33576_33607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (13))){
var state_33568__$1 = state_33568;
var statearr_33577_33608 = state_33568__$1;
(statearr_33577_33608[(2)] = null);

(statearr_33577_33608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (6))){
var inst_33528 = (state_33568[(7)]);
var inst_33553 = inst_33528.length;
var inst_33554 = (inst_33553 > (0));
var state_33568__$1 = state_33568;
if(cljs.core.truth_(inst_33554)){
var statearr_33578_33609 = state_33568__$1;
(statearr_33578_33609[(1)] = (12));

} else {
var statearr_33579_33610 = state_33568__$1;
(statearr_33579_33610[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (3))){
var inst_33566 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33568__$1,inst_33566);
} else {
if((state_val_33569 === (12))){
var inst_33528 = (state_33568[(7)]);
var inst_33556 = cljs.core.vec.call(null,inst_33528);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33568__$1,(15),out,inst_33556);
} else {
if((state_val_33569 === (2))){
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33568__$1,(4),ch);
} else {
if((state_val_33569 === (11))){
var inst_33536 = (state_33568[(10)]);
var inst_33532 = (state_33568[(9)]);
var inst_33546 = (state_33568[(2)]);
var inst_33547 = [];
var inst_33548 = inst_33547.push(inst_33532);
var inst_33528 = inst_33547;
var inst_33529 = inst_33536;
var state_33568__$1 = (function (){var statearr_33580 = state_33568;
(statearr_33580[(11)] = inst_33548);

(statearr_33580[(7)] = inst_33528);

(statearr_33580[(8)] = inst_33529);

(statearr_33580[(12)] = inst_33546);

return statearr_33580;
})();
var statearr_33581_33611 = state_33568__$1;
(statearr_33581_33611[(2)] = null);

(statearr_33581_33611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (9))){
var inst_33528 = (state_33568[(7)]);
var inst_33544 = cljs.core.vec.call(null,inst_33528);
var state_33568__$1 = state_33568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33568__$1,(11),out,inst_33544);
} else {
if((state_val_33569 === (5))){
var inst_33536 = (state_33568[(10)]);
var inst_33529 = (state_33568[(8)]);
var inst_33532 = (state_33568[(9)]);
var inst_33536__$1 = f.call(null,inst_33532);
var inst_33537 = cljs.core._EQ_.call(null,inst_33536__$1,inst_33529);
var inst_33538 = cljs.core.keyword_identical_QMARK_.call(null,inst_33529,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33539 = (inst_33537) || (inst_33538);
var state_33568__$1 = (function (){var statearr_33582 = state_33568;
(statearr_33582[(10)] = inst_33536__$1);

return statearr_33582;
})();
if(cljs.core.truth_(inst_33539)){
var statearr_33583_33612 = state_33568__$1;
(statearr_33583_33612[(1)] = (8));

} else {
var statearr_33584_33613 = state_33568__$1;
(statearr_33584_33613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (14))){
var inst_33561 = (state_33568[(2)]);
var inst_33562 = cljs.core.async.close_BANG_.call(null,out);
var state_33568__$1 = (function (){var statearr_33586 = state_33568;
(statearr_33586[(13)] = inst_33561);

return statearr_33586;
})();
var statearr_33587_33614 = state_33568__$1;
(statearr_33587_33614[(2)] = inst_33562);

(statearr_33587_33614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (10))){
var inst_33551 = (state_33568[(2)]);
var state_33568__$1 = state_33568;
var statearr_33588_33615 = state_33568__$1;
(statearr_33588_33615[(2)] = inst_33551);

(statearr_33588_33615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33569 === (8))){
var inst_33536 = (state_33568[(10)]);
var inst_33528 = (state_33568[(7)]);
var inst_33532 = (state_33568[(9)]);
var inst_33541 = inst_33528.push(inst_33532);
var tmp33585 = inst_33528;
var inst_33528__$1 = tmp33585;
var inst_33529 = inst_33536;
var state_33568__$1 = (function (){var statearr_33589 = state_33568;
(statearr_33589[(14)] = inst_33541);

(statearr_33589[(7)] = inst_33528__$1);

(statearr_33589[(8)] = inst_33529);

return statearr_33589;
})();
var statearr_33590_33616 = state_33568__$1;
(statearr_33590_33616[(2)] = null);

(statearr_33590_33616[(1)] = (2));


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
});})(c__22242__auto___33602,out))
;
return ((function (switch__22177__auto__,c__22242__auto___33602,out){
return (function() {
var cljs$core$async$state_machine__22178__auto__ = null;
var cljs$core$async$state_machine__22178__auto____0 = (function (){
var statearr_33594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33594[(0)] = cljs$core$async$state_machine__22178__auto__);

(statearr_33594[(1)] = (1));

return statearr_33594;
});
var cljs$core$async$state_machine__22178__auto____1 = (function (state_33568){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_33568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e33595){if((e33595 instanceof Object)){
var ex__22181__auto__ = e33595;
var statearr_33596_33617 = state_33568;
(statearr_33596_33617[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33618 = state_33568;
state_33568 = G__33618;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
cljs$core$async$state_machine__22178__auto__ = function(state_33568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22178__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22178__auto____1.call(this,state_33568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22178__auto____0;
cljs$core$async$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22178__auto____1;
return cljs$core$async$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___33602,out))
})();
var state__22244__auto__ = (function (){var statearr_33597 = f__22243__auto__.call(null);
(statearr_33597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___33602);

return statearr_33597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___33602,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map