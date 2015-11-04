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
if(typeof cljs.core.async.t_cljs$core$async49779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49779 = (function (fn_handler,f,meta49780){
this.fn_handler = fn_handler;
this.f = f;
this.meta49780 = meta49780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49781,meta49780__$1){
var self__ = this;
var _49781__$1 = this;
return (new cljs.core.async.t_cljs$core$async49779(self__.fn_handler,self__.f,meta49780__$1));
});

cljs.core.async.t_cljs$core$async49779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49781){
var self__ = this;
var _49781__$1 = this;
return self__.meta49780;
});

cljs.core.async.t_cljs$core$async49779.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async49779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async49779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta49780","meta49780",1432065748,null)], null);
});

cljs.core.async.t_cljs$core$async49779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49779";

cljs.core.async.t_cljs$core$async49779.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async49779");
});

cljs.core.async.__GT_t_cljs$core$async49779 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async49779(fn_handler__$1,f__$1,meta49780){
return (new cljs.core.async.t_cljs$core$async49779(fn_handler__$1,f__$1,meta49780));
});

}

return (new cljs.core.async.t_cljs$core$async49779(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args49784 = [];
var len__20222__auto___49787 = arguments.length;
var i__20223__auto___49788 = (0);
while(true){
if((i__20223__auto___49788 < len__20222__auto___49787)){
args49784.push((arguments[i__20223__auto___49788]));

var G__49789 = (i__20223__auto___49788 + (1));
i__20223__auto___49788 = G__49789;
continue;
} else {
}
break;
}

var G__49786 = args49784.length;
switch (G__49786) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49784.length)].join('')));

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
var args49791 = [];
var len__20222__auto___49794 = arguments.length;
var i__20223__auto___49795 = (0);
while(true){
if((i__20223__auto___49795 < len__20222__auto___49794)){
args49791.push((arguments[i__20223__auto___49795]));

var G__49796 = (i__20223__auto___49795 + (1));
i__20223__auto___49795 = G__49796;
continue;
} else {
}
break;
}

var G__49793 = args49791.length;
switch (G__49793) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49791.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_49798 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_49798);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_49798,ret){
return (function (){
return fn1.call(null,val_49798);
});})(val_49798,ret))
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
var args49799 = [];
var len__20222__auto___49802 = arguments.length;
var i__20223__auto___49803 = (0);
while(true){
if((i__20223__auto___49803 < len__20222__auto___49802)){
args49799.push((arguments[i__20223__auto___49803]));

var G__49804 = (i__20223__auto___49803 + (1));
i__20223__auto___49803 = G__49804;
continue;
} else {
}
break;
}

var G__49801 = args49799.length;
switch (G__49801) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49799.length)].join('')));

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
var n__20067__auto___49806 = n;
var x_49807 = (0);
while(true){
if((x_49807 < n__20067__auto___49806)){
(a[x_49807] = (0));

var G__49808 = (x_49807 + (1));
x_49807 = G__49808;
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

var G__49809 = (i + (1));
i = G__49809;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async49813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49813 = (function (alt_flag,flag,meta49814){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta49814 = meta49814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_49815,meta49814__$1){
var self__ = this;
var _49815__$1 = this;
return (new cljs.core.async.t_cljs$core$async49813(self__.alt_flag,self__.flag,meta49814__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async49813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_49815){
var self__ = this;
var _49815__$1 = this;
return self__.meta49814;
});})(flag))
;

cljs.core.async.t_cljs$core$async49813.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49813.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async49813.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async49813.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta49814","meta49814",1690399213,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async49813.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49813";

cljs.core.async.t_cljs$core$async49813.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async49813");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async49813 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async49813(alt_flag__$1,flag__$1,meta49814){
return (new cljs.core.async.t_cljs$core$async49813(alt_flag__$1,flag__$1,meta49814));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async49813(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async49819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49819 = (function (alt_handler,flag,cb,meta49820){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta49820 = meta49820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49821,meta49820__$1){
var self__ = this;
var _49821__$1 = this;
return (new cljs.core.async.t_cljs$core$async49819(self__.alt_handler,self__.flag,self__.cb,meta49820__$1));
});

cljs.core.async.t_cljs$core$async49819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49821){
var self__ = this;
var _49821__$1 = this;
return self__.meta49820;
});

cljs.core.async.t_cljs$core$async49819.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async49819.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async49819.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async49819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta49820","meta49820",-1290943329,null)], null);
});

cljs.core.async.t_cljs$core$async49819.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49819";

cljs.core.async.t_cljs$core$async49819.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async49819");
});

cljs.core.async.__GT_t_cljs$core$async49819 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async49819(alt_handler__$1,flag__$1,cb__$1,meta49820){
return (new cljs.core.async.t_cljs$core$async49819(alt_handler__$1,flag__$1,cb__$1,meta49820));
});

}

return (new cljs.core.async.t_cljs$core$async49819(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__49822_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49822_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__49823_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__49823_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19164__auto__ = wport;
if(cljs.core.truth_(or__19164__auto__)){
return or__19164__auto__;
} else {
return port;
}
})()], null));
} else {
var G__49824 = (i + (1));
i = G__49824;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19164__auto__ = ret;
if(cljs.core.truth_(or__19164__auto__)){
return or__19164__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19152__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19152__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19152__auto__;
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
var args__20229__auto__ = [];
var len__20222__auto___49830 = arguments.length;
var i__20223__auto___49831 = (0);
while(true){
if((i__20223__auto___49831 < len__20222__auto___49830)){
args__20229__auto__.push((arguments[i__20223__auto___49831]));

var G__49832 = (i__20223__auto___49831 + (1));
i__20223__auto___49831 = G__49832;
continue;
} else {
}
break;
}

var argseq__20230__auto__ = ((((1) < args__20229__auto__.length))?(new cljs.core.IndexedSeq(args__20229__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20230__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__49827){
var map__49828 = p__49827;
var map__49828__$1 = ((((!((map__49828 == null)))?((((map__49828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49828):map__49828);
var opts = map__49828__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq49825){
var G__49826 = cljs.core.first.call(null,seq49825);
var seq49825__$1 = cljs.core.next.call(null,seq49825);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49826,seq49825__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args49833 = [];
var len__20222__auto___49883 = arguments.length;
var i__20223__auto___49884 = (0);
while(true){
if((i__20223__auto___49884 < len__20222__auto___49883)){
args49833.push((arguments[i__20223__auto___49884]));

var G__49885 = (i__20223__auto___49884 + (1));
i__20223__auto___49884 = G__49885;
continue;
} else {
}
break;
}

var G__49835 = args49833.length;
switch (G__49835) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49833.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22273__auto___49887 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___49887){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___49887){
return (function (state_49859){
var state_val_49860 = (state_49859[(1)]);
if((state_val_49860 === (7))){
var inst_49855 = (state_49859[(2)]);
var state_49859__$1 = state_49859;
var statearr_49861_49888 = state_49859__$1;
(statearr_49861_49888[(2)] = inst_49855);

(statearr_49861_49888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (1))){
var state_49859__$1 = state_49859;
var statearr_49862_49889 = state_49859__$1;
(statearr_49862_49889[(2)] = null);

(statearr_49862_49889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (4))){
var inst_49838 = (state_49859[(7)]);
var inst_49838__$1 = (state_49859[(2)]);
var inst_49839 = (inst_49838__$1 == null);
var state_49859__$1 = (function (){var statearr_49863 = state_49859;
(statearr_49863[(7)] = inst_49838__$1);

return statearr_49863;
})();
if(cljs.core.truth_(inst_49839)){
var statearr_49864_49890 = state_49859__$1;
(statearr_49864_49890[(1)] = (5));

} else {
var statearr_49865_49891 = state_49859__$1;
(statearr_49865_49891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (13))){
var state_49859__$1 = state_49859;
var statearr_49866_49892 = state_49859__$1;
(statearr_49866_49892[(2)] = null);

(statearr_49866_49892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (6))){
var inst_49838 = (state_49859[(7)]);
var state_49859__$1 = state_49859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49859__$1,(11),to,inst_49838);
} else {
if((state_val_49860 === (3))){
var inst_49857 = (state_49859[(2)]);
var state_49859__$1 = state_49859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49859__$1,inst_49857);
} else {
if((state_val_49860 === (12))){
var state_49859__$1 = state_49859;
var statearr_49867_49893 = state_49859__$1;
(statearr_49867_49893[(2)] = null);

(statearr_49867_49893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (2))){
var state_49859__$1 = state_49859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49859__$1,(4),from);
} else {
if((state_val_49860 === (11))){
var inst_49848 = (state_49859[(2)]);
var state_49859__$1 = state_49859;
if(cljs.core.truth_(inst_49848)){
var statearr_49868_49894 = state_49859__$1;
(statearr_49868_49894[(1)] = (12));

} else {
var statearr_49869_49895 = state_49859__$1;
(statearr_49869_49895[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (9))){
var state_49859__$1 = state_49859;
var statearr_49870_49896 = state_49859__$1;
(statearr_49870_49896[(2)] = null);

(statearr_49870_49896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (5))){
var state_49859__$1 = state_49859;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49871_49897 = state_49859__$1;
(statearr_49871_49897[(1)] = (8));

} else {
var statearr_49872_49898 = state_49859__$1;
(statearr_49872_49898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (14))){
var inst_49853 = (state_49859[(2)]);
var state_49859__$1 = state_49859;
var statearr_49873_49899 = state_49859__$1;
(statearr_49873_49899[(2)] = inst_49853);

(statearr_49873_49899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (10))){
var inst_49845 = (state_49859[(2)]);
var state_49859__$1 = state_49859;
var statearr_49874_49900 = state_49859__$1;
(statearr_49874_49900[(2)] = inst_49845);

(statearr_49874_49900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49860 === (8))){
var inst_49842 = cljs.core.async.close_BANG_.call(null,to);
var state_49859__$1 = state_49859;
var statearr_49875_49901 = state_49859__$1;
(statearr_49875_49901[(2)] = inst_49842);

(statearr_49875_49901[(1)] = (10));


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
});})(c__22273__auto___49887))
;
return ((function (switch__22208__auto__,c__22273__auto___49887){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_49879 = [null,null,null,null,null,null,null,null];
(statearr_49879[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_49879[(1)] = (1));

return statearr_49879;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_49859){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_49859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e49880){if((e49880 instanceof Object)){
var ex__22212__auto__ = e49880;
var statearr_49881_49902 = state_49859;
(statearr_49881_49902[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49903 = state_49859;
state_49859 = G__49903;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_49859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_49859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___49887))
})();
var state__22275__auto__ = (function (){var statearr_49882 = f__22274__auto__.call(null);
(statearr_49882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___49887);

return statearr_49882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___49887))
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
return (function (p__50087){
var vec__50088 = p__50087;
var v = cljs.core.nth.call(null,vec__50088,(0),null);
var p = cljs.core.nth.call(null,vec__50088,(1),null);
var job = vec__50088;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22273__auto___50270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___50270,res,vec__50088,v,p,job,jobs,results){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___50270,res,vec__50088,v,p,job,jobs,results){
return (function (state_50093){
var state_val_50094 = (state_50093[(1)]);
if((state_val_50094 === (1))){
var state_50093__$1 = state_50093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50093__$1,(2),res,v);
} else {
if((state_val_50094 === (2))){
var inst_50090 = (state_50093[(2)]);
var inst_50091 = cljs.core.async.close_BANG_.call(null,res);
var state_50093__$1 = (function (){var statearr_50095 = state_50093;
(statearr_50095[(7)] = inst_50090);

return statearr_50095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50093__$1,inst_50091);
} else {
return null;
}
}
});})(c__22273__auto___50270,res,vec__50088,v,p,job,jobs,results))
;
return ((function (switch__22208__auto__,c__22273__auto___50270,res,vec__50088,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0 = (function (){
var statearr_50099 = [null,null,null,null,null,null,null,null];
(statearr_50099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__);

(statearr_50099[(1)] = (1));

return statearr_50099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1 = (function (state_50093){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50100){if((e50100 instanceof Object)){
var ex__22212__auto__ = e50100;
var statearr_50101_50271 = state_50093;
(statearr_50101_50271[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50272 = state_50093;
state_50093 = G__50272;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = function(state_50093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1.call(this,state_50093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___50270,res,vec__50088,v,p,job,jobs,results))
})();
var state__22275__auto__ = (function (){var statearr_50102 = f__22274__auto__.call(null);
(statearr_50102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___50270);

return statearr_50102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___50270,res,vec__50088,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__50103){
var vec__50104 = p__50103;
var v = cljs.core.nth.call(null,vec__50104,(0),null);
var p = cljs.core.nth.call(null,vec__50104,(1),null);
var job = vec__50104;
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
var n__20067__auto___50273 = n;
var __50274 = (0);
while(true){
if((__50274 < n__20067__auto___50273)){
var G__50105_50275 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__50105_50275) {
case "compute":
var c__22273__auto___50277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50274,c__22273__auto___50277,G__50105_50275,n__20067__auto___50273,jobs,results,process,async){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (__50274,c__22273__auto___50277,G__50105_50275,n__20067__auto___50273,jobs,results,process,async){
return (function (state_50118){
var state_val_50119 = (state_50118[(1)]);
if((state_val_50119 === (1))){
var state_50118__$1 = state_50118;
var statearr_50120_50278 = state_50118__$1;
(statearr_50120_50278[(2)] = null);

(statearr_50120_50278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50119 === (2))){
var state_50118__$1 = state_50118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50118__$1,(4),jobs);
} else {
if((state_val_50119 === (3))){
var inst_50116 = (state_50118[(2)]);
var state_50118__$1 = state_50118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50118__$1,inst_50116);
} else {
if((state_val_50119 === (4))){
var inst_50108 = (state_50118[(2)]);
var inst_50109 = process.call(null,inst_50108);
var state_50118__$1 = state_50118;
if(cljs.core.truth_(inst_50109)){
var statearr_50121_50279 = state_50118__$1;
(statearr_50121_50279[(1)] = (5));

} else {
var statearr_50122_50280 = state_50118__$1;
(statearr_50122_50280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50119 === (5))){
var state_50118__$1 = state_50118;
var statearr_50123_50281 = state_50118__$1;
(statearr_50123_50281[(2)] = null);

(statearr_50123_50281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50119 === (6))){
var state_50118__$1 = state_50118;
var statearr_50124_50282 = state_50118__$1;
(statearr_50124_50282[(2)] = null);

(statearr_50124_50282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50119 === (7))){
var inst_50114 = (state_50118[(2)]);
var state_50118__$1 = state_50118;
var statearr_50125_50283 = state_50118__$1;
(statearr_50125_50283[(2)] = inst_50114);

(statearr_50125_50283[(1)] = (3));


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
});})(__50274,c__22273__auto___50277,G__50105_50275,n__20067__auto___50273,jobs,results,process,async))
;
return ((function (__50274,switch__22208__auto__,c__22273__auto___50277,G__50105_50275,n__20067__auto___50273,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0 = (function (){
var statearr_50129 = [null,null,null,null,null,null,null];
(statearr_50129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__);

(statearr_50129[(1)] = (1));

return statearr_50129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1 = (function (state_50118){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50130){if((e50130 instanceof Object)){
var ex__22212__auto__ = e50130;
var statearr_50131_50284 = state_50118;
(statearr_50131_50284[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50285 = state_50118;
state_50118 = G__50285;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = function(state_50118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1.call(this,state_50118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__;
})()
;})(__50274,switch__22208__auto__,c__22273__auto___50277,G__50105_50275,n__20067__auto___50273,jobs,results,process,async))
})();
var state__22275__auto__ = (function (){var statearr_50132 = f__22274__auto__.call(null);
(statearr_50132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___50277);

return statearr_50132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(__50274,c__22273__auto___50277,G__50105_50275,n__20067__auto___50273,jobs,results,process,async))
);


break;
case "async":
var c__22273__auto___50286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__50274,c__22273__auto___50286,G__50105_50275,n__20067__auto___50273,jobs,results,process,async){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (__50274,c__22273__auto___50286,G__50105_50275,n__20067__auto___50273,jobs,results,process,async){
return (function (state_50145){
var state_val_50146 = (state_50145[(1)]);
if((state_val_50146 === (1))){
var state_50145__$1 = state_50145;
var statearr_50147_50287 = state_50145__$1;
(statearr_50147_50287[(2)] = null);

(statearr_50147_50287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (2))){
var state_50145__$1 = state_50145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50145__$1,(4),jobs);
} else {
if((state_val_50146 === (3))){
var inst_50143 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50145__$1,inst_50143);
} else {
if((state_val_50146 === (4))){
var inst_50135 = (state_50145[(2)]);
var inst_50136 = async.call(null,inst_50135);
var state_50145__$1 = state_50145;
if(cljs.core.truth_(inst_50136)){
var statearr_50148_50288 = state_50145__$1;
(statearr_50148_50288[(1)] = (5));

} else {
var statearr_50149_50289 = state_50145__$1;
(statearr_50149_50289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (5))){
var state_50145__$1 = state_50145;
var statearr_50150_50290 = state_50145__$1;
(statearr_50150_50290[(2)] = null);

(statearr_50150_50290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (6))){
var state_50145__$1 = state_50145;
var statearr_50151_50291 = state_50145__$1;
(statearr_50151_50291[(2)] = null);

(statearr_50151_50291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50146 === (7))){
var inst_50141 = (state_50145[(2)]);
var state_50145__$1 = state_50145;
var statearr_50152_50292 = state_50145__$1;
(statearr_50152_50292[(2)] = inst_50141);

(statearr_50152_50292[(1)] = (3));


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
});})(__50274,c__22273__auto___50286,G__50105_50275,n__20067__auto___50273,jobs,results,process,async))
;
return ((function (__50274,switch__22208__auto__,c__22273__auto___50286,G__50105_50275,n__20067__auto___50273,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0 = (function (){
var statearr_50156 = [null,null,null,null,null,null,null];
(statearr_50156[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__);

(statearr_50156[(1)] = (1));

return statearr_50156;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1 = (function (state_50145){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50157){if((e50157 instanceof Object)){
var ex__22212__auto__ = e50157;
var statearr_50158_50293 = state_50145;
(statearr_50158_50293[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50294 = state_50145;
state_50145 = G__50294;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = function(state_50145){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1.call(this,state_50145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__;
})()
;})(__50274,switch__22208__auto__,c__22273__auto___50286,G__50105_50275,n__20067__auto___50273,jobs,results,process,async))
})();
var state__22275__auto__ = (function (){var statearr_50159 = f__22274__auto__.call(null);
(statearr_50159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___50286);

return statearr_50159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(__50274,c__22273__auto___50286,G__50105_50275,n__20067__auto___50273,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__50295 = (__50274 + (1));
__50274 = G__50295;
continue;
} else {
}
break;
}

var c__22273__auto___50296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___50296,jobs,results,process,async){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___50296,jobs,results,process,async){
return (function (state_50181){
var state_val_50182 = (state_50181[(1)]);
if((state_val_50182 === (1))){
var state_50181__$1 = state_50181;
var statearr_50183_50297 = state_50181__$1;
(statearr_50183_50297[(2)] = null);

(statearr_50183_50297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50182 === (2))){
var state_50181__$1 = state_50181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50181__$1,(4),from);
} else {
if((state_val_50182 === (3))){
var inst_50179 = (state_50181[(2)]);
var state_50181__$1 = state_50181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50181__$1,inst_50179);
} else {
if((state_val_50182 === (4))){
var inst_50162 = (state_50181[(7)]);
var inst_50162__$1 = (state_50181[(2)]);
var inst_50163 = (inst_50162__$1 == null);
var state_50181__$1 = (function (){var statearr_50184 = state_50181;
(statearr_50184[(7)] = inst_50162__$1);

return statearr_50184;
})();
if(cljs.core.truth_(inst_50163)){
var statearr_50185_50298 = state_50181__$1;
(statearr_50185_50298[(1)] = (5));

} else {
var statearr_50186_50299 = state_50181__$1;
(statearr_50186_50299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50182 === (5))){
var inst_50165 = cljs.core.async.close_BANG_.call(null,jobs);
var state_50181__$1 = state_50181;
var statearr_50187_50300 = state_50181__$1;
(statearr_50187_50300[(2)] = inst_50165);

(statearr_50187_50300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50182 === (6))){
var inst_50167 = (state_50181[(8)]);
var inst_50162 = (state_50181[(7)]);
var inst_50167__$1 = cljs.core.async.chan.call(null,(1));
var inst_50168 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50169 = [inst_50162,inst_50167__$1];
var inst_50170 = (new cljs.core.PersistentVector(null,2,(5),inst_50168,inst_50169,null));
var state_50181__$1 = (function (){var statearr_50188 = state_50181;
(statearr_50188[(8)] = inst_50167__$1);

return statearr_50188;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50181__$1,(8),jobs,inst_50170);
} else {
if((state_val_50182 === (7))){
var inst_50177 = (state_50181[(2)]);
var state_50181__$1 = state_50181;
var statearr_50189_50301 = state_50181__$1;
(statearr_50189_50301[(2)] = inst_50177);

(statearr_50189_50301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50182 === (8))){
var inst_50167 = (state_50181[(8)]);
var inst_50172 = (state_50181[(2)]);
var state_50181__$1 = (function (){var statearr_50190 = state_50181;
(statearr_50190[(9)] = inst_50172);

return statearr_50190;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50181__$1,(9),results,inst_50167);
} else {
if((state_val_50182 === (9))){
var inst_50174 = (state_50181[(2)]);
var state_50181__$1 = (function (){var statearr_50191 = state_50181;
(statearr_50191[(10)] = inst_50174);

return statearr_50191;
})();
var statearr_50192_50302 = state_50181__$1;
(statearr_50192_50302[(2)] = null);

(statearr_50192_50302[(1)] = (2));


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
});})(c__22273__auto___50296,jobs,results,process,async))
;
return ((function (switch__22208__auto__,c__22273__auto___50296,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0 = (function (){
var statearr_50196 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50196[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__);

(statearr_50196[(1)] = (1));

return statearr_50196;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1 = (function (state_50181){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50197){if((e50197 instanceof Object)){
var ex__22212__auto__ = e50197;
var statearr_50198_50303 = state_50181;
(statearr_50198_50303[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50304 = state_50181;
state_50181 = G__50304;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = function(state_50181){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1.call(this,state_50181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___50296,jobs,results,process,async))
})();
var state__22275__auto__ = (function (){var statearr_50199 = f__22274__auto__.call(null);
(statearr_50199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___50296);

return statearr_50199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___50296,jobs,results,process,async))
);


var c__22273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto__,jobs,results,process,async){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto__,jobs,results,process,async){
return (function (state_50237){
var state_val_50238 = (state_50237[(1)]);
if((state_val_50238 === (7))){
var inst_50233 = (state_50237[(2)]);
var state_50237__$1 = state_50237;
var statearr_50239_50305 = state_50237__$1;
(statearr_50239_50305[(2)] = inst_50233);

(statearr_50239_50305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (20))){
var state_50237__$1 = state_50237;
var statearr_50240_50306 = state_50237__$1;
(statearr_50240_50306[(2)] = null);

(statearr_50240_50306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (1))){
var state_50237__$1 = state_50237;
var statearr_50241_50307 = state_50237__$1;
(statearr_50241_50307[(2)] = null);

(statearr_50241_50307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (4))){
var inst_50202 = (state_50237[(7)]);
var inst_50202__$1 = (state_50237[(2)]);
var inst_50203 = (inst_50202__$1 == null);
var state_50237__$1 = (function (){var statearr_50242 = state_50237;
(statearr_50242[(7)] = inst_50202__$1);

return statearr_50242;
})();
if(cljs.core.truth_(inst_50203)){
var statearr_50243_50308 = state_50237__$1;
(statearr_50243_50308[(1)] = (5));

} else {
var statearr_50244_50309 = state_50237__$1;
(statearr_50244_50309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (15))){
var inst_50215 = (state_50237[(8)]);
var state_50237__$1 = state_50237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50237__$1,(18),to,inst_50215);
} else {
if((state_val_50238 === (21))){
var inst_50228 = (state_50237[(2)]);
var state_50237__$1 = state_50237;
var statearr_50245_50310 = state_50237__$1;
(statearr_50245_50310[(2)] = inst_50228);

(statearr_50245_50310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (13))){
var inst_50230 = (state_50237[(2)]);
var state_50237__$1 = (function (){var statearr_50246 = state_50237;
(statearr_50246[(9)] = inst_50230);

return statearr_50246;
})();
var statearr_50247_50311 = state_50237__$1;
(statearr_50247_50311[(2)] = null);

(statearr_50247_50311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (6))){
var inst_50202 = (state_50237[(7)]);
var state_50237__$1 = state_50237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50237__$1,(11),inst_50202);
} else {
if((state_val_50238 === (17))){
var inst_50223 = (state_50237[(2)]);
var state_50237__$1 = state_50237;
if(cljs.core.truth_(inst_50223)){
var statearr_50248_50312 = state_50237__$1;
(statearr_50248_50312[(1)] = (19));

} else {
var statearr_50249_50313 = state_50237__$1;
(statearr_50249_50313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (3))){
var inst_50235 = (state_50237[(2)]);
var state_50237__$1 = state_50237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50237__$1,inst_50235);
} else {
if((state_val_50238 === (12))){
var inst_50212 = (state_50237[(10)]);
var state_50237__$1 = state_50237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50237__$1,(14),inst_50212);
} else {
if((state_val_50238 === (2))){
var state_50237__$1 = state_50237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50237__$1,(4),results);
} else {
if((state_val_50238 === (19))){
var state_50237__$1 = state_50237;
var statearr_50250_50314 = state_50237__$1;
(statearr_50250_50314[(2)] = null);

(statearr_50250_50314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (11))){
var inst_50212 = (state_50237[(2)]);
var state_50237__$1 = (function (){var statearr_50251 = state_50237;
(statearr_50251[(10)] = inst_50212);

return statearr_50251;
})();
var statearr_50252_50315 = state_50237__$1;
(statearr_50252_50315[(2)] = null);

(statearr_50252_50315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (9))){
var state_50237__$1 = state_50237;
var statearr_50253_50316 = state_50237__$1;
(statearr_50253_50316[(2)] = null);

(statearr_50253_50316[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (5))){
var state_50237__$1 = state_50237;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50254_50317 = state_50237__$1;
(statearr_50254_50317[(1)] = (8));

} else {
var statearr_50255_50318 = state_50237__$1;
(statearr_50255_50318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (14))){
var inst_50215 = (state_50237[(8)]);
var inst_50217 = (state_50237[(11)]);
var inst_50215__$1 = (state_50237[(2)]);
var inst_50216 = (inst_50215__$1 == null);
var inst_50217__$1 = cljs.core.not.call(null,inst_50216);
var state_50237__$1 = (function (){var statearr_50256 = state_50237;
(statearr_50256[(8)] = inst_50215__$1);

(statearr_50256[(11)] = inst_50217__$1);

return statearr_50256;
})();
if(inst_50217__$1){
var statearr_50257_50319 = state_50237__$1;
(statearr_50257_50319[(1)] = (15));

} else {
var statearr_50258_50320 = state_50237__$1;
(statearr_50258_50320[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (16))){
var inst_50217 = (state_50237[(11)]);
var state_50237__$1 = state_50237;
var statearr_50259_50321 = state_50237__$1;
(statearr_50259_50321[(2)] = inst_50217);

(statearr_50259_50321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (10))){
var inst_50209 = (state_50237[(2)]);
var state_50237__$1 = state_50237;
var statearr_50260_50322 = state_50237__$1;
(statearr_50260_50322[(2)] = inst_50209);

(statearr_50260_50322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (18))){
var inst_50220 = (state_50237[(2)]);
var state_50237__$1 = state_50237;
var statearr_50261_50323 = state_50237__$1;
(statearr_50261_50323[(2)] = inst_50220);

(statearr_50261_50323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50238 === (8))){
var inst_50206 = cljs.core.async.close_BANG_.call(null,to);
var state_50237__$1 = state_50237;
var statearr_50262_50324 = state_50237__$1;
(statearr_50262_50324[(2)] = inst_50206);

(statearr_50262_50324[(1)] = (10));


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
});})(c__22273__auto__,jobs,results,process,async))
;
return ((function (switch__22208__auto__,c__22273__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0 = (function (){
var statearr_50266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__);

(statearr_50266[(1)] = (1));

return statearr_50266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1 = (function (state_50237){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50267){if((e50267 instanceof Object)){
var ex__22212__auto__ = e50267;
var statearr_50268_50325 = state_50237;
(statearr_50268_50325[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50326 = state_50237;
state_50237 = G__50326;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__ = function(state_50237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1.call(this,state_50237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22209__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto__,jobs,results,process,async))
})();
var state__22275__auto__ = (function (){var statearr_50269 = f__22274__auto__.call(null);
(statearr_50269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto__);

return statearr_50269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto__,jobs,results,process,async))
);

return c__22273__auto__;
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
var args50327 = [];
var len__20222__auto___50330 = arguments.length;
var i__20223__auto___50331 = (0);
while(true){
if((i__20223__auto___50331 < len__20222__auto___50330)){
args50327.push((arguments[i__20223__auto___50331]));

var G__50332 = (i__20223__auto___50331 + (1));
i__20223__auto___50331 = G__50332;
continue;
} else {
}
break;
}

var G__50329 = args50327.length;
switch (G__50329) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50327.length)].join('')));

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
var args50334 = [];
var len__20222__auto___50337 = arguments.length;
var i__20223__auto___50338 = (0);
while(true){
if((i__20223__auto___50338 < len__20222__auto___50337)){
args50334.push((arguments[i__20223__auto___50338]));

var G__50339 = (i__20223__auto___50338 + (1));
i__20223__auto___50338 = G__50339;
continue;
} else {
}
break;
}

var G__50336 = args50334.length;
switch (G__50336) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50334.length)].join('')));

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
var args50341 = [];
var len__20222__auto___50394 = arguments.length;
var i__20223__auto___50395 = (0);
while(true){
if((i__20223__auto___50395 < len__20222__auto___50394)){
args50341.push((arguments[i__20223__auto___50395]));

var G__50396 = (i__20223__auto___50395 + (1));
i__20223__auto___50395 = G__50396;
continue;
} else {
}
break;
}

var G__50343 = args50341.length;
switch (G__50343) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50341.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22273__auto___50398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___50398,tc,fc){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___50398,tc,fc){
return (function (state_50369){
var state_val_50370 = (state_50369[(1)]);
if((state_val_50370 === (7))){
var inst_50365 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
var statearr_50371_50399 = state_50369__$1;
(statearr_50371_50399[(2)] = inst_50365);

(statearr_50371_50399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (1))){
var state_50369__$1 = state_50369;
var statearr_50372_50400 = state_50369__$1;
(statearr_50372_50400[(2)] = null);

(statearr_50372_50400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (4))){
var inst_50346 = (state_50369[(7)]);
var inst_50346__$1 = (state_50369[(2)]);
var inst_50347 = (inst_50346__$1 == null);
var state_50369__$1 = (function (){var statearr_50373 = state_50369;
(statearr_50373[(7)] = inst_50346__$1);

return statearr_50373;
})();
if(cljs.core.truth_(inst_50347)){
var statearr_50374_50401 = state_50369__$1;
(statearr_50374_50401[(1)] = (5));

} else {
var statearr_50375_50402 = state_50369__$1;
(statearr_50375_50402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (13))){
var state_50369__$1 = state_50369;
var statearr_50376_50403 = state_50369__$1;
(statearr_50376_50403[(2)] = null);

(statearr_50376_50403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (6))){
var inst_50346 = (state_50369[(7)]);
var inst_50352 = p.call(null,inst_50346);
var state_50369__$1 = state_50369;
if(cljs.core.truth_(inst_50352)){
var statearr_50377_50404 = state_50369__$1;
(statearr_50377_50404[(1)] = (9));

} else {
var statearr_50378_50405 = state_50369__$1;
(statearr_50378_50405[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (3))){
var inst_50367 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50369__$1,inst_50367);
} else {
if((state_val_50370 === (12))){
var state_50369__$1 = state_50369;
var statearr_50379_50406 = state_50369__$1;
(statearr_50379_50406[(2)] = null);

(statearr_50379_50406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (2))){
var state_50369__$1 = state_50369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50369__$1,(4),ch);
} else {
if((state_val_50370 === (11))){
var inst_50346 = (state_50369[(7)]);
var inst_50356 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50369__$1,(8),inst_50356,inst_50346);
} else {
if((state_val_50370 === (9))){
var state_50369__$1 = state_50369;
var statearr_50380_50407 = state_50369__$1;
(statearr_50380_50407[(2)] = tc);

(statearr_50380_50407[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (5))){
var inst_50349 = cljs.core.async.close_BANG_.call(null,tc);
var inst_50350 = cljs.core.async.close_BANG_.call(null,fc);
var state_50369__$1 = (function (){var statearr_50381 = state_50369;
(statearr_50381[(8)] = inst_50349);

return statearr_50381;
})();
var statearr_50382_50408 = state_50369__$1;
(statearr_50382_50408[(2)] = inst_50350);

(statearr_50382_50408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (14))){
var inst_50363 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
var statearr_50383_50409 = state_50369__$1;
(statearr_50383_50409[(2)] = inst_50363);

(statearr_50383_50409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (10))){
var state_50369__$1 = state_50369;
var statearr_50384_50410 = state_50369__$1;
(statearr_50384_50410[(2)] = fc);

(statearr_50384_50410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50370 === (8))){
var inst_50358 = (state_50369[(2)]);
var state_50369__$1 = state_50369;
if(cljs.core.truth_(inst_50358)){
var statearr_50385_50411 = state_50369__$1;
(statearr_50385_50411[(1)] = (12));

} else {
var statearr_50386_50412 = state_50369__$1;
(statearr_50386_50412[(1)] = (13));

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
});})(c__22273__auto___50398,tc,fc))
;
return ((function (switch__22208__auto__,c__22273__auto___50398,tc,fc){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_50390 = [null,null,null,null,null,null,null,null,null];
(statearr_50390[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_50390[(1)] = (1));

return statearr_50390;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_50369){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50391){if((e50391 instanceof Object)){
var ex__22212__auto__ = e50391;
var statearr_50392_50413 = state_50369;
(statearr_50392_50413[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50414 = state_50369;
state_50369 = G__50414;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_50369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_50369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___50398,tc,fc))
})();
var state__22275__auto__ = (function (){var statearr_50393 = f__22274__auto__.call(null);
(statearr_50393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___50398);

return statearr_50393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___50398,tc,fc))
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
var c__22273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto__){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto__){
return (function (state_50461){
var state_val_50462 = (state_50461[(1)]);
if((state_val_50462 === (1))){
var inst_50447 = init;
var state_50461__$1 = (function (){var statearr_50463 = state_50461;
(statearr_50463[(7)] = inst_50447);

return statearr_50463;
})();
var statearr_50464_50479 = state_50461__$1;
(statearr_50464_50479[(2)] = null);

(statearr_50464_50479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50462 === (2))){
var state_50461__$1 = state_50461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50461__$1,(4),ch);
} else {
if((state_val_50462 === (3))){
var inst_50459 = (state_50461[(2)]);
var state_50461__$1 = state_50461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50461__$1,inst_50459);
} else {
if((state_val_50462 === (4))){
var inst_50450 = (state_50461[(8)]);
var inst_50450__$1 = (state_50461[(2)]);
var inst_50451 = (inst_50450__$1 == null);
var state_50461__$1 = (function (){var statearr_50465 = state_50461;
(statearr_50465[(8)] = inst_50450__$1);

return statearr_50465;
})();
if(cljs.core.truth_(inst_50451)){
var statearr_50466_50480 = state_50461__$1;
(statearr_50466_50480[(1)] = (5));

} else {
var statearr_50467_50481 = state_50461__$1;
(statearr_50467_50481[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50462 === (5))){
var inst_50447 = (state_50461[(7)]);
var state_50461__$1 = state_50461;
var statearr_50468_50482 = state_50461__$1;
(statearr_50468_50482[(2)] = inst_50447);

(statearr_50468_50482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50462 === (6))){
var inst_50447 = (state_50461[(7)]);
var inst_50450 = (state_50461[(8)]);
var inst_50454 = f.call(null,inst_50447,inst_50450);
var inst_50447__$1 = inst_50454;
var state_50461__$1 = (function (){var statearr_50469 = state_50461;
(statearr_50469[(7)] = inst_50447__$1);

return statearr_50469;
})();
var statearr_50470_50483 = state_50461__$1;
(statearr_50470_50483[(2)] = null);

(statearr_50470_50483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50462 === (7))){
var inst_50457 = (state_50461[(2)]);
var state_50461__$1 = state_50461;
var statearr_50471_50484 = state_50461__$1;
(statearr_50471_50484[(2)] = inst_50457);

(statearr_50471_50484[(1)] = (3));


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
});})(c__22273__auto__))
;
return ((function (switch__22208__auto__,c__22273__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22209__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22209__auto____0 = (function (){
var statearr_50475 = [null,null,null,null,null,null,null,null,null];
(statearr_50475[(0)] = cljs$core$async$reduce_$_state_machine__22209__auto__);

(statearr_50475[(1)] = (1));

return statearr_50475;
});
var cljs$core$async$reduce_$_state_machine__22209__auto____1 = (function (state_50461){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50476){if((e50476 instanceof Object)){
var ex__22212__auto__ = e50476;
var statearr_50477_50485 = state_50461;
(statearr_50477_50485[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50486 = state_50461;
state_50461 = G__50486;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22209__auto__ = function(state_50461){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22209__auto____1.call(this,state_50461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22209__auto____0;
cljs$core$async$reduce_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22209__auto____1;
return cljs$core$async$reduce_$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto__))
})();
var state__22275__auto__ = (function (){var statearr_50478 = f__22274__auto__.call(null);
(statearr_50478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto__);

return statearr_50478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto__))
);

return c__22273__auto__;
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
var args50487 = [];
var len__20222__auto___50539 = arguments.length;
var i__20223__auto___50540 = (0);
while(true){
if((i__20223__auto___50540 < len__20222__auto___50539)){
args50487.push((arguments[i__20223__auto___50540]));

var G__50541 = (i__20223__auto___50540 + (1));
i__20223__auto___50540 = G__50541;
continue;
} else {
}
break;
}

var G__50489 = args50487.length;
switch (G__50489) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50487.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto__){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto__){
return (function (state_50514){
var state_val_50515 = (state_50514[(1)]);
if((state_val_50515 === (7))){
var inst_50496 = (state_50514[(2)]);
var state_50514__$1 = state_50514;
var statearr_50516_50543 = state_50514__$1;
(statearr_50516_50543[(2)] = inst_50496);

(statearr_50516_50543[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (1))){
var inst_50490 = cljs.core.seq.call(null,coll);
var inst_50491 = inst_50490;
var state_50514__$1 = (function (){var statearr_50517 = state_50514;
(statearr_50517[(7)] = inst_50491);

return statearr_50517;
})();
var statearr_50518_50544 = state_50514__$1;
(statearr_50518_50544[(2)] = null);

(statearr_50518_50544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (4))){
var inst_50491 = (state_50514[(7)]);
var inst_50494 = cljs.core.first.call(null,inst_50491);
var state_50514__$1 = state_50514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50514__$1,(7),ch,inst_50494);
} else {
if((state_val_50515 === (13))){
var inst_50508 = (state_50514[(2)]);
var state_50514__$1 = state_50514;
var statearr_50519_50545 = state_50514__$1;
(statearr_50519_50545[(2)] = inst_50508);

(statearr_50519_50545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (6))){
var inst_50499 = (state_50514[(2)]);
var state_50514__$1 = state_50514;
if(cljs.core.truth_(inst_50499)){
var statearr_50520_50546 = state_50514__$1;
(statearr_50520_50546[(1)] = (8));

} else {
var statearr_50521_50547 = state_50514__$1;
(statearr_50521_50547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (3))){
var inst_50512 = (state_50514[(2)]);
var state_50514__$1 = state_50514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50514__$1,inst_50512);
} else {
if((state_val_50515 === (12))){
var state_50514__$1 = state_50514;
var statearr_50522_50548 = state_50514__$1;
(statearr_50522_50548[(2)] = null);

(statearr_50522_50548[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (2))){
var inst_50491 = (state_50514[(7)]);
var state_50514__$1 = state_50514;
if(cljs.core.truth_(inst_50491)){
var statearr_50523_50549 = state_50514__$1;
(statearr_50523_50549[(1)] = (4));

} else {
var statearr_50524_50550 = state_50514__$1;
(statearr_50524_50550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (11))){
var inst_50505 = cljs.core.async.close_BANG_.call(null,ch);
var state_50514__$1 = state_50514;
var statearr_50525_50551 = state_50514__$1;
(statearr_50525_50551[(2)] = inst_50505);

(statearr_50525_50551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (9))){
var state_50514__$1 = state_50514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50526_50552 = state_50514__$1;
(statearr_50526_50552[(1)] = (11));

} else {
var statearr_50527_50553 = state_50514__$1;
(statearr_50527_50553[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (5))){
var inst_50491 = (state_50514[(7)]);
var state_50514__$1 = state_50514;
var statearr_50528_50554 = state_50514__$1;
(statearr_50528_50554[(2)] = inst_50491);

(statearr_50528_50554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (10))){
var inst_50510 = (state_50514[(2)]);
var state_50514__$1 = state_50514;
var statearr_50529_50555 = state_50514__$1;
(statearr_50529_50555[(2)] = inst_50510);

(statearr_50529_50555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (8))){
var inst_50491 = (state_50514[(7)]);
var inst_50501 = cljs.core.next.call(null,inst_50491);
var inst_50491__$1 = inst_50501;
var state_50514__$1 = (function (){var statearr_50530 = state_50514;
(statearr_50530[(7)] = inst_50491__$1);

return statearr_50530;
})();
var statearr_50531_50556 = state_50514__$1;
(statearr_50531_50556[(2)] = null);

(statearr_50531_50556[(1)] = (2));


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
});})(c__22273__auto__))
;
return ((function (switch__22208__auto__,c__22273__auto__){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_50535 = [null,null,null,null,null,null,null,null];
(statearr_50535[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_50535[(1)] = (1));

return statearr_50535;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_50514){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50536){if((e50536 instanceof Object)){
var ex__22212__auto__ = e50536;
var statearr_50537_50557 = state_50514;
(statearr_50537_50557[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50558 = state_50514;
state_50514 = G__50558;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_50514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_50514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto__))
})();
var state__22275__auto__ = (function (){var statearr_50538 = f__22274__auto__.call(null);
(statearr_50538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto__);

return statearr_50538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto__))
);

return c__22273__auto__;
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
var x__19819__auto__ = (((_ == null))?null:_);
var m__19820__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,_);
} else {
var m__19820__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,_);
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
var x__19819__auto__ = (((m == null))?null:m);
var m__19820__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19820__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19819__auto__ = (((m == null))?null:m);
var m__19820__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,m,ch);
} else {
var m__19820__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,m,ch);
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
var x__19819__auto__ = (((m == null))?null:m);
var m__19820__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,m);
} else {
var m__19820__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async50780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50780 = (function (mult,ch,cs,meta50781){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta50781 = meta50781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_50782,meta50781__$1){
var self__ = this;
var _50782__$1 = this;
return (new cljs.core.async.t_cljs$core$async50780(self__.mult,self__.ch,self__.cs,meta50781__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_50782){
var self__ = this;
var _50782__$1 = this;
return self__.meta50781;
});})(cs))
;

cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50780.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async50780.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50781","meta50781",477960435,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async50780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50780";

cljs.core.async.t_cljs$core$async50780.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async50780");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async50780 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async50780(mult__$1,ch__$1,cs__$1,meta50781){
return (new cljs.core.async.t_cljs$core$async50780(mult__$1,ch__$1,cs__$1,meta50781));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async50780(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22273__auto___51001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___51001,cs,m,dchan,dctr,done){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___51001,cs,m,dchan,dctr,done){
return (function (state_50913){
var state_val_50914 = (state_50913[(1)]);
if((state_val_50914 === (7))){
var inst_50909 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50915_51002 = state_50913__$1;
(statearr_50915_51002[(2)] = inst_50909);

(statearr_50915_51002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (20))){
var inst_50814 = (state_50913[(7)]);
var inst_50824 = cljs.core.first.call(null,inst_50814);
var inst_50825 = cljs.core.nth.call(null,inst_50824,(0),null);
var inst_50826 = cljs.core.nth.call(null,inst_50824,(1),null);
var state_50913__$1 = (function (){var statearr_50916 = state_50913;
(statearr_50916[(8)] = inst_50825);

return statearr_50916;
})();
if(cljs.core.truth_(inst_50826)){
var statearr_50917_51003 = state_50913__$1;
(statearr_50917_51003[(1)] = (22));

} else {
var statearr_50918_51004 = state_50913__$1;
(statearr_50918_51004[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (27))){
var inst_50854 = (state_50913[(9)]);
var inst_50785 = (state_50913[(10)]);
var inst_50856 = (state_50913[(11)]);
var inst_50861 = (state_50913[(12)]);
var inst_50861__$1 = cljs.core._nth.call(null,inst_50854,inst_50856);
var inst_50862 = cljs.core.async.put_BANG_.call(null,inst_50861__$1,inst_50785,done);
var state_50913__$1 = (function (){var statearr_50919 = state_50913;
(statearr_50919[(12)] = inst_50861__$1);

return statearr_50919;
})();
if(cljs.core.truth_(inst_50862)){
var statearr_50920_51005 = state_50913__$1;
(statearr_50920_51005[(1)] = (30));

} else {
var statearr_50921_51006 = state_50913__$1;
(statearr_50921_51006[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (1))){
var state_50913__$1 = state_50913;
var statearr_50922_51007 = state_50913__$1;
(statearr_50922_51007[(2)] = null);

(statearr_50922_51007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (24))){
var inst_50814 = (state_50913[(7)]);
var inst_50831 = (state_50913[(2)]);
var inst_50832 = cljs.core.next.call(null,inst_50814);
var inst_50794 = inst_50832;
var inst_50795 = null;
var inst_50796 = (0);
var inst_50797 = (0);
var state_50913__$1 = (function (){var statearr_50923 = state_50913;
(statearr_50923[(13)] = inst_50797);

(statearr_50923[(14)] = inst_50796);

(statearr_50923[(15)] = inst_50795);

(statearr_50923[(16)] = inst_50794);

(statearr_50923[(17)] = inst_50831);

return statearr_50923;
})();
var statearr_50924_51008 = state_50913__$1;
(statearr_50924_51008[(2)] = null);

(statearr_50924_51008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (39))){
var state_50913__$1 = state_50913;
var statearr_50928_51009 = state_50913__$1;
(statearr_50928_51009[(2)] = null);

(statearr_50928_51009[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (4))){
var inst_50785 = (state_50913[(10)]);
var inst_50785__$1 = (state_50913[(2)]);
var inst_50786 = (inst_50785__$1 == null);
var state_50913__$1 = (function (){var statearr_50929 = state_50913;
(statearr_50929[(10)] = inst_50785__$1);

return statearr_50929;
})();
if(cljs.core.truth_(inst_50786)){
var statearr_50930_51010 = state_50913__$1;
(statearr_50930_51010[(1)] = (5));

} else {
var statearr_50931_51011 = state_50913__$1;
(statearr_50931_51011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (15))){
var inst_50797 = (state_50913[(13)]);
var inst_50796 = (state_50913[(14)]);
var inst_50795 = (state_50913[(15)]);
var inst_50794 = (state_50913[(16)]);
var inst_50810 = (state_50913[(2)]);
var inst_50811 = (inst_50797 + (1));
var tmp50925 = inst_50796;
var tmp50926 = inst_50795;
var tmp50927 = inst_50794;
var inst_50794__$1 = tmp50927;
var inst_50795__$1 = tmp50926;
var inst_50796__$1 = tmp50925;
var inst_50797__$1 = inst_50811;
var state_50913__$1 = (function (){var statearr_50932 = state_50913;
(statearr_50932[(13)] = inst_50797__$1);

(statearr_50932[(14)] = inst_50796__$1);

(statearr_50932[(15)] = inst_50795__$1);

(statearr_50932[(16)] = inst_50794__$1);

(statearr_50932[(18)] = inst_50810);

return statearr_50932;
})();
var statearr_50933_51012 = state_50913__$1;
(statearr_50933_51012[(2)] = null);

(statearr_50933_51012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (21))){
var inst_50835 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50937_51013 = state_50913__$1;
(statearr_50937_51013[(2)] = inst_50835);

(statearr_50937_51013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (31))){
var inst_50861 = (state_50913[(12)]);
var inst_50865 = done.call(null,null);
var inst_50866 = cljs.core.async.untap_STAR_.call(null,m,inst_50861);
var state_50913__$1 = (function (){var statearr_50938 = state_50913;
(statearr_50938[(19)] = inst_50865);

return statearr_50938;
})();
var statearr_50939_51014 = state_50913__$1;
(statearr_50939_51014[(2)] = inst_50866);

(statearr_50939_51014[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (32))){
var inst_50854 = (state_50913[(9)]);
var inst_50856 = (state_50913[(11)]);
var inst_50855 = (state_50913[(20)]);
var inst_50853 = (state_50913[(21)]);
var inst_50868 = (state_50913[(2)]);
var inst_50869 = (inst_50856 + (1));
var tmp50934 = inst_50854;
var tmp50935 = inst_50855;
var tmp50936 = inst_50853;
var inst_50853__$1 = tmp50936;
var inst_50854__$1 = tmp50934;
var inst_50855__$1 = tmp50935;
var inst_50856__$1 = inst_50869;
var state_50913__$1 = (function (){var statearr_50940 = state_50913;
(statearr_50940[(9)] = inst_50854__$1);

(statearr_50940[(11)] = inst_50856__$1);

(statearr_50940[(22)] = inst_50868);

(statearr_50940[(20)] = inst_50855__$1);

(statearr_50940[(21)] = inst_50853__$1);

return statearr_50940;
})();
var statearr_50941_51015 = state_50913__$1;
(statearr_50941_51015[(2)] = null);

(statearr_50941_51015[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (40))){
var inst_50881 = (state_50913[(23)]);
var inst_50885 = done.call(null,null);
var inst_50886 = cljs.core.async.untap_STAR_.call(null,m,inst_50881);
var state_50913__$1 = (function (){var statearr_50942 = state_50913;
(statearr_50942[(24)] = inst_50885);

return statearr_50942;
})();
var statearr_50943_51016 = state_50913__$1;
(statearr_50943_51016[(2)] = inst_50886);

(statearr_50943_51016[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (33))){
var inst_50872 = (state_50913[(25)]);
var inst_50874 = cljs.core.chunked_seq_QMARK_.call(null,inst_50872);
var state_50913__$1 = state_50913;
if(inst_50874){
var statearr_50944_51017 = state_50913__$1;
(statearr_50944_51017[(1)] = (36));

} else {
var statearr_50945_51018 = state_50913__$1;
(statearr_50945_51018[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (13))){
var inst_50804 = (state_50913[(26)]);
var inst_50807 = cljs.core.async.close_BANG_.call(null,inst_50804);
var state_50913__$1 = state_50913;
var statearr_50946_51019 = state_50913__$1;
(statearr_50946_51019[(2)] = inst_50807);

(statearr_50946_51019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (22))){
var inst_50825 = (state_50913[(8)]);
var inst_50828 = cljs.core.async.close_BANG_.call(null,inst_50825);
var state_50913__$1 = state_50913;
var statearr_50947_51020 = state_50913__$1;
(statearr_50947_51020[(2)] = inst_50828);

(statearr_50947_51020[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (36))){
var inst_50872 = (state_50913[(25)]);
var inst_50876 = cljs.core.chunk_first.call(null,inst_50872);
var inst_50877 = cljs.core.chunk_rest.call(null,inst_50872);
var inst_50878 = cljs.core.count.call(null,inst_50876);
var inst_50853 = inst_50877;
var inst_50854 = inst_50876;
var inst_50855 = inst_50878;
var inst_50856 = (0);
var state_50913__$1 = (function (){var statearr_50948 = state_50913;
(statearr_50948[(9)] = inst_50854);

(statearr_50948[(11)] = inst_50856);

(statearr_50948[(20)] = inst_50855);

(statearr_50948[(21)] = inst_50853);

return statearr_50948;
})();
var statearr_50949_51021 = state_50913__$1;
(statearr_50949_51021[(2)] = null);

(statearr_50949_51021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (41))){
var inst_50872 = (state_50913[(25)]);
var inst_50888 = (state_50913[(2)]);
var inst_50889 = cljs.core.next.call(null,inst_50872);
var inst_50853 = inst_50889;
var inst_50854 = null;
var inst_50855 = (0);
var inst_50856 = (0);
var state_50913__$1 = (function (){var statearr_50950 = state_50913;
(statearr_50950[(9)] = inst_50854);

(statearr_50950[(11)] = inst_50856);

(statearr_50950[(20)] = inst_50855);

(statearr_50950[(27)] = inst_50888);

(statearr_50950[(21)] = inst_50853);

return statearr_50950;
})();
var statearr_50951_51022 = state_50913__$1;
(statearr_50951_51022[(2)] = null);

(statearr_50951_51022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (43))){
var state_50913__$1 = state_50913;
var statearr_50952_51023 = state_50913__$1;
(statearr_50952_51023[(2)] = null);

(statearr_50952_51023[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (29))){
var inst_50897 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50953_51024 = state_50913__$1;
(statearr_50953_51024[(2)] = inst_50897);

(statearr_50953_51024[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (44))){
var inst_50906 = (state_50913[(2)]);
var state_50913__$1 = (function (){var statearr_50954 = state_50913;
(statearr_50954[(28)] = inst_50906);

return statearr_50954;
})();
var statearr_50955_51025 = state_50913__$1;
(statearr_50955_51025[(2)] = null);

(statearr_50955_51025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (6))){
var inst_50845 = (state_50913[(29)]);
var inst_50844 = cljs.core.deref.call(null,cs);
var inst_50845__$1 = cljs.core.keys.call(null,inst_50844);
var inst_50846 = cljs.core.count.call(null,inst_50845__$1);
var inst_50847 = cljs.core.reset_BANG_.call(null,dctr,inst_50846);
var inst_50852 = cljs.core.seq.call(null,inst_50845__$1);
var inst_50853 = inst_50852;
var inst_50854 = null;
var inst_50855 = (0);
var inst_50856 = (0);
var state_50913__$1 = (function (){var statearr_50956 = state_50913;
(statearr_50956[(9)] = inst_50854);

(statearr_50956[(11)] = inst_50856);

(statearr_50956[(30)] = inst_50847);

(statearr_50956[(20)] = inst_50855);

(statearr_50956[(29)] = inst_50845__$1);

(statearr_50956[(21)] = inst_50853);

return statearr_50956;
})();
var statearr_50957_51026 = state_50913__$1;
(statearr_50957_51026[(2)] = null);

(statearr_50957_51026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (28))){
var inst_50872 = (state_50913[(25)]);
var inst_50853 = (state_50913[(21)]);
var inst_50872__$1 = cljs.core.seq.call(null,inst_50853);
var state_50913__$1 = (function (){var statearr_50958 = state_50913;
(statearr_50958[(25)] = inst_50872__$1);

return statearr_50958;
})();
if(inst_50872__$1){
var statearr_50959_51027 = state_50913__$1;
(statearr_50959_51027[(1)] = (33));

} else {
var statearr_50960_51028 = state_50913__$1;
(statearr_50960_51028[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (25))){
var inst_50856 = (state_50913[(11)]);
var inst_50855 = (state_50913[(20)]);
var inst_50858 = (inst_50856 < inst_50855);
var inst_50859 = inst_50858;
var state_50913__$1 = state_50913;
if(cljs.core.truth_(inst_50859)){
var statearr_50961_51029 = state_50913__$1;
(statearr_50961_51029[(1)] = (27));

} else {
var statearr_50962_51030 = state_50913__$1;
(statearr_50962_51030[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (34))){
var state_50913__$1 = state_50913;
var statearr_50963_51031 = state_50913__$1;
(statearr_50963_51031[(2)] = null);

(statearr_50963_51031[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (17))){
var state_50913__$1 = state_50913;
var statearr_50964_51032 = state_50913__$1;
(statearr_50964_51032[(2)] = null);

(statearr_50964_51032[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (3))){
var inst_50911 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50913__$1,inst_50911);
} else {
if((state_val_50914 === (12))){
var inst_50840 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50965_51033 = state_50913__$1;
(statearr_50965_51033[(2)] = inst_50840);

(statearr_50965_51033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (2))){
var state_50913__$1 = state_50913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50913__$1,(4),ch);
} else {
if((state_val_50914 === (23))){
var state_50913__$1 = state_50913;
var statearr_50966_51034 = state_50913__$1;
(statearr_50966_51034[(2)] = null);

(statearr_50966_51034[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (35))){
var inst_50895 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50967_51035 = state_50913__$1;
(statearr_50967_51035[(2)] = inst_50895);

(statearr_50967_51035[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (19))){
var inst_50814 = (state_50913[(7)]);
var inst_50818 = cljs.core.chunk_first.call(null,inst_50814);
var inst_50819 = cljs.core.chunk_rest.call(null,inst_50814);
var inst_50820 = cljs.core.count.call(null,inst_50818);
var inst_50794 = inst_50819;
var inst_50795 = inst_50818;
var inst_50796 = inst_50820;
var inst_50797 = (0);
var state_50913__$1 = (function (){var statearr_50968 = state_50913;
(statearr_50968[(13)] = inst_50797);

(statearr_50968[(14)] = inst_50796);

(statearr_50968[(15)] = inst_50795);

(statearr_50968[(16)] = inst_50794);

return statearr_50968;
})();
var statearr_50969_51036 = state_50913__$1;
(statearr_50969_51036[(2)] = null);

(statearr_50969_51036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (11))){
var inst_50814 = (state_50913[(7)]);
var inst_50794 = (state_50913[(16)]);
var inst_50814__$1 = cljs.core.seq.call(null,inst_50794);
var state_50913__$1 = (function (){var statearr_50970 = state_50913;
(statearr_50970[(7)] = inst_50814__$1);

return statearr_50970;
})();
if(inst_50814__$1){
var statearr_50971_51037 = state_50913__$1;
(statearr_50971_51037[(1)] = (16));

} else {
var statearr_50972_51038 = state_50913__$1;
(statearr_50972_51038[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (9))){
var inst_50842 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50973_51039 = state_50913__$1;
(statearr_50973_51039[(2)] = inst_50842);

(statearr_50973_51039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (5))){
var inst_50792 = cljs.core.deref.call(null,cs);
var inst_50793 = cljs.core.seq.call(null,inst_50792);
var inst_50794 = inst_50793;
var inst_50795 = null;
var inst_50796 = (0);
var inst_50797 = (0);
var state_50913__$1 = (function (){var statearr_50974 = state_50913;
(statearr_50974[(13)] = inst_50797);

(statearr_50974[(14)] = inst_50796);

(statearr_50974[(15)] = inst_50795);

(statearr_50974[(16)] = inst_50794);

return statearr_50974;
})();
var statearr_50975_51040 = state_50913__$1;
(statearr_50975_51040[(2)] = null);

(statearr_50975_51040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (14))){
var state_50913__$1 = state_50913;
var statearr_50976_51041 = state_50913__$1;
(statearr_50976_51041[(2)] = null);

(statearr_50976_51041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (45))){
var inst_50903 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50977_51042 = state_50913__$1;
(statearr_50977_51042[(2)] = inst_50903);

(statearr_50977_51042[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (26))){
var inst_50845 = (state_50913[(29)]);
var inst_50899 = (state_50913[(2)]);
var inst_50900 = cljs.core.seq.call(null,inst_50845);
var state_50913__$1 = (function (){var statearr_50978 = state_50913;
(statearr_50978[(31)] = inst_50899);

return statearr_50978;
})();
if(inst_50900){
var statearr_50979_51043 = state_50913__$1;
(statearr_50979_51043[(1)] = (42));

} else {
var statearr_50980_51044 = state_50913__$1;
(statearr_50980_51044[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (16))){
var inst_50814 = (state_50913[(7)]);
var inst_50816 = cljs.core.chunked_seq_QMARK_.call(null,inst_50814);
var state_50913__$1 = state_50913;
if(inst_50816){
var statearr_50981_51045 = state_50913__$1;
(statearr_50981_51045[(1)] = (19));

} else {
var statearr_50982_51046 = state_50913__$1;
(statearr_50982_51046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (38))){
var inst_50892 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50983_51047 = state_50913__$1;
(statearr_50983_51047[(2)] = inst_50892);

(statearr_50983_51047[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (30))){
var state_50913__$1 = state_50913;
var statearr_50984_51048 = state_50913__$1;
(statearr_50984_51048[(2)] = null);

(statearr_50984_51048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (10))){
var inst_50797 = (state_50913[(13)]);
var inst_50795 = (state_50913[(15)]);
var inst_50803 = cljs.core._nth.call(null,inst_50795,inst_50797);
var inst_50804 = cljs.core.nth.call(null,inst_50803,(0),null);
var inst_50805 = cljs.core.nth.call(null,inst_50803,(1),null);
var state_50913__$1 = (function (){var statearr_50985 = state_50913;
(statearr_50985[(26)] = inst_50804);

return statearr_50985;
})();
if(cljs.core.truth_(inst_50805)){
var statearr_50986_51049 = state_50913__$1;
(statearr_50986_51049[(1)] = (13));

} else {
var statearr_50987_51050 = state_50913__$1;
(statearr_50987_51050[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (18))){
var inst_50838 = (state_50913[(2)]);
var state_50913__$1 = state_50913;
var statearr_50988_51051 = state_50913__$1;
(statearr_50988_51051[(2)] = inst_50838);

(statearr_50988_51051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (42))){
var state_50913__$1 = state_50913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50913__$1,(45),dchan);
} else {
if((state_val_50914 === (37))){
var inst_50872 = (state_50913[(25)]);
var inst_50785 = (state_50913[(10)]);
var inst_50881 = (state_50913[(23)]);
var inst_50881__$1 = cljs.core.first.call(null,inst_50872);
var inst_50882 = cljs.core.async.put_BANG_.call(null,inst_50881__$1,inst_50785,done);
var state_50913__$1 = (function (){var statearr_50989 = state_50913;
(statearr_50989[(23)] = inst_50881__$1);

return statearr_50989;
})();
if(cljs.core.truth_(inst_50882)){
var statearr_50990_51052 = state_50913__$1;
(statearr_50990_51052[(1)] = (39));

} else {
var statearr_50991_51053 = state_50913__$1;
(statearr_50991_51053[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50914 === (8))){
var inst_50797 = (state_50913[(13)]);
var inst_50796 = (state_50913[(14)]);
var inst_50799 = (inst_50797 < inst_50796);
var inst_50800 = inst_50799;
var state_50913__$1 = state_50913;
if(cljs.core.truth_(inst_50800)){
var statearr_50992_51054 = state_50913__$1;
(statearr_50992_51054[(1)] = (10));

} else {
var statearr_50993_51055 = state_50913__$1;
(statearr_50993_51055[(1)] = (11));

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
});})(c__22273__auto___51001,cs,m,dchan,dctr,done))
;
return ((function (switch__22208__auto__,c__22273__auto___51001,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22209__auto__ = null;
var cljs$core$async$mult_$_state_machine__22209__auto____0 = (function (){
var statearr_50997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50997[(0)] = cljs$core$async$mult_$_state_machine__22209__auto__);

(statearr_50997[(1)] = (1));

return statearr_50997;
});
var cljs$core$async$mult_$_state_machine__22209__auto____1 = (function (state_50913){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_50913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e50998){if((e50998 instanceof Object)){
var ex__22212__auto__ = e50998;
var statearr_50999_51056 = state_50913;
(statearr_50999_51056[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51057 = state_50913;
state_50913 = G__51057;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22209__auto__ = function(state_50913){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22209__auto____1.call(this,state_50913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22209__auto____0;
cljs$core$async$mult_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22209__auto____1;
return cljs$core$async$mult_$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___51001,cs,m,dchan,dctr,done))
})();
var state__22275__auto__ = (function (){var statearr_51000 = f__22274__auto__.call(null);
(statearr_51000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___51001);

return statearr_51000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___51001,cs,m,dchan,dctr,done))
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
var args51058 = [];
var len__20222__auto___51061 = arguments.length;
var i__20223__auto___51062 = (0);
while(true){
if((i__20223__auto___51062 < len__20222__auto___51061)){
args51058.push((arguments[i__20223__auto___51062]));

var G__51063 = (i__20223__auto___51062 + (1));
i__20223__auto___51062 = G__51063;
continue;
} else {
}
break;
}

var G__51060 = args51058.length;
switch (G__51060) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51058.length)].join('')));

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
var x__19819__auto__ = (((m == null))?null:m);
var m__19820__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,m,ch);
} else {
var m__19820__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,m,ch);
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
var x__19819__auto__ = (((m == null))?null:m);
var m__19820__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,m,ch);
} else {
var m__19820__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,m,ch);
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
var x__19819__auto__ = (((m == null))?null:m);
var m__19820__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,m);
} else {
var m__19820__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,m);
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
var x__19819__auto__ = (((m == null))?null:m);
var m__19820__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,m,state_map);
} else {
var m__19820__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,m,state_map);
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
var x__19819__auto__ = (((m == null))?null:m);
var m__19820__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,m,mode);
} else {
var m__19820__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__20229__auto__ = [];
var len__20222__auto___51075 = arguments.length;
var i__20223__auto___51076 = (0);
while(true){
if((i__20223__auto___51076 < len__20222__auto___51075)){
args__20229__auto__.push((arguments[i__20223__auto___51076]));

var G__51077 = (i__20223__auto___51076 + (1));
i__20223__auto___51076 = G__51077;
continue;
} else {
}
break;
}

var argseq__20230__auto__ = ((((3) < args__20229__auto__.length))?(new cljs.core.IndexedSeq(args__20229__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20230__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51069){
var map__51070 = p__51069;
var map__51070__$1 = ((((!((map__51070 == null)))?((((map__51070.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51070.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51070):map__51070);
var opts = map__51070__$1;
var statearr_51072_51078 = state;
(statearr_51072_51078[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__51070,map__51070__$1,opts){
return (function (val){
var statearr_51073_51079 = state;
(statearr_51073_51079[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__51070,map__51070__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_51074_51080 = state;
(statearr_51074_51080[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51065){
var G__51066 = cljs.core.first.call(null,seq51065);
var seq51065__$1 = cljs.core.next.call(null,seq51065);
var G__51067 = cljs.core.first.call(null,seq51065__$1);
var seq51065__$2 = cljs.core.next.call(null,seq51065__$1);
var G__51068 = cljs.core.first.call(null,seq51065__$2);
var seq51065__$3 = cljs.core.next.call(null,seq51065__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__51066,G__51067,G__51068,seq51065__$3);
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
if(typeof cljs.core.async.t_cljs$core$async51244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51244 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51245){
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
this.meta51245 = meta51245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51246,meta51245__$1){
var self__ = this;
var _51246__$1 = this;
return (new cljs.core.async.t_cljs$core$async51244(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51245__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_51246){
var self__ = this;
var _51246__$1 = this;
return self__.meta51245;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51244.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async51244.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51245","meta51245",-1814189229,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async51244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51244";

cljs.core.async.t_cljs$core$async51244.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async51244");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async51244 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async51244(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51245){
return (new cljs.core.async.t_cljs$core$async51244(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta51245));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async51244(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22273__auto___51407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___51407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___51407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_51344){
var state_val_51345 = (state_51344[(1)]);
if((state_val_51345 === (7))){
var inst_51262 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51346_51408 = state_51344__$1;
(statearr_51346_51408[(2)] = inst_51262);

(statearr_51346_51408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (20))){
var inst_51274 = (state_51344[(7)]);
var state_51344__$1 = state_51344;
var statearr_51347_51409 = state_51344__$1;
(statearr_51347_51409[(2)] = inst_51274);

(statearr_51347_51409[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (27))){
var state_51344__$1 = state_51344;
var statearr_51348_51410 = state_51344__$1;
(statearr_51348_51410[(2)] = null);

(statearr_51348_51410[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (1))){
var inst_51250 = (state_51344[(8)]);
var inst_51250__$1 = calc_state.call(null);
var inst_51252 = (inst_51250__$1 == null);
var inst_51253 = cljs.core.not.call(null,inst_51252);
var state_51344__$1 = (function (){var statearr_51349 = state_51344;
(statearr_51349[(8)] = inst_51250__$1);

return statearr_51349;
})();
if(inst_51253){
var statearr_51350_51411 = state_51344__$1;
(statearr_51350_51411[(1)] = (2));

} else {
var statearr_51351_51412 = state_51344__$1;
(statearr_51351_51412[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (24))){
var inst_51318 = (state_51344[(9)]);
var inst_51304 = (state_51344[(10)]);
var inst_51297 = (state_51344[(11)]);
var inst_51318__$1 = inst_51297.call(null,inst_51304);
var state_51344__$1 = (function (){var statearr_51352 = state_51344;
(statearr_51352[(9)] = inst_51318__$1);

return statearr_51352;
})();
if(cljs.core.truth_(inst_51318__$1)){
var statearr_51353_51413 = state_51344__$1;
(statearr_51353_51413[(1)] = (29));

} else {
var statearr_51354_51414 = state_51344__$1;
(statearr_51354_51414[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (4))){
var inst_51265 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51265)){
var statearr_51355_51415 = state_51344__$1;
(statearr_51355_51415[(1)] = (8));

} else {
var statearr_51356_51416 = state_51344__$1;
(statearr_51356_51416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (15))){
var inst_51291 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51291)){
var statearr_51357_51417 = state_51344__$1;
(statearr_51357_51417[(1)] = (19));

} else {
var statearr_51358_51418 = state_51344__$1;
(statearr_51358_51418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (21))){
var inst_51296 = (state_51344[(12)]);
var inst_51296__$1 = (state_51344[(2)]);
var inst_51297 = cljs.core.get.call(null,inst_51296__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51298 = cljs.core.get.call(null,inst_51296__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51299 = cljs.core.get.call(null,inst_51296__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51344__$1 = (function (){var statearr_51359 = state_51344;
(statearr_51359[(12)] = inst_51296__$1);

(statearr_51359[(13)] = inst_51298);

(statearr_51359[(11)] = inst_51297);

return statearr_51359;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_51344__$1,(22),inst_51299);
} else {
if((state_val_51345 === (31))){
var inst_51326 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51326)){
var statearr_51360_51419 = state_51344__$1;
(statearr_51360_51419[(1)] = (32));

} else {
var statearr_51361_51420 = state_51344__$1;
(statearr_51361_51420[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (32))){
var inst_51303 = (state_51344[(14)]);
var state_51344__$1 = state_51344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51344__$1,(35),out,inst_51303);
} else {
if((state_val_51345 === (33))){
var inst_51296 = (state_51344[(12)]);
var inst_51274 = inst_51296;
var state_51344__$1 = (function (){var statearr_51362 = state_51344;
(statearr_51362[(7)] = inst_51274);

return statearr_51362;
})();
var statearr_51363_51421 = state_51344__$1;
(statearr_51363_51421[(2)] = null);

(statearr_51363_51421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (13))){
var inst_51274 = (state_51344[(7)]);
var inst_51281 = inst_51274.cljs$lang$protocol_mask$partition0$;
var inst_51282 = (inst_51281 & (64));
var inst_51283 = inst_51274.cljs$core$ISeq$;
var inst_51284 = (inst_51282) || (inst_51283);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51284)){
var statearr_51364_51422 = state_51344__$1;
(statearr_51364_51422[(1)] = (16));

} else {
var statearr_51365_51423 = state_51344__$1;
(statearr_51365_51423[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (22))){
var inst_51303 = (state_51344[(14)]);
var inst_51304 = (state_51344[(10)]);
var inst_51302 = (state_51344[(2)]);
var inst_51303__$1 = cljs.core.nth.call(null,inst_51302,(0),null);
var inst_51304__$1 = cljs.core.nth.call(null,inst_51302,(1),null);
var inst_51305 = (inst_51303__$1 == null);
var inst_51306 = cljs.core._EQ_.call(null,inst_51304__$1,change);
var inst_51307 = (inst_51305) || (inst_51306);
var state_51344__$1 = (function (){var statearr_51366 = state_51344;
(statearr_51366[(14)] = inst_51303__$1);

(statearr_51366[(10)] = inst_51304__$1);

return statearr_51366;
})();
if(cljs.core.truth_(inst_51307)){
var statearr_51367_51424 = state_51344__$1;
(statearr_51367_51424[(1)] = (23));

} else {
var statearr_51368_51425 = state_51344__$1;
(statearr_51368_51425[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (36))){
var inst_51296 = (state_51344[(12)]);
var inst_51274 = inst_51296;
var state_51344__$1 = (function (){var statearr_51369 = state_51344;
(statearr_51369[(7)] = inst_51274);

return statearr_51369;
})();
var statearr_51370_51426 = state_51344__$1;
(statearr_51370_51426[(2)] = null);

(statearr_51370_51426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (29))){
var inst_51318 = (state_51344[(9)]);
var state_51344__$1 = state_51344;
var statearr_51371_51427 = state_51344__$1;
(statearr_51371_51427[(2)] = inst_51318);

(statearr_51371_51427[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (6))){
var state_51344__$1 = state_51344;
var statearr_51372_51428 = state_51344__$1;
(statearr_51372_51428[(2)] = false);

(statearr_51372_51428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (28))){
var inst_51314 = (state_51344[(2)]);
var inst_51315 = calc_state.call(null);
var inst_51274 = inst_51315;
var state_51344__$1 = (function (){var statearr_51373 = state_51344;
(statearr_51373[(15)] = inst_51314);

(statearr_51373[(7)] = inst_51274);

return statearr_51373;
})();
var statearr_51374_51429 = state_51344__$1;
(statearr_51374_51429[(2)] = null);

(statearr_51374_51429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (25))){
var inst_51340 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51375_51430 = state_51344__$1;
(statearr_51375_51430[(2)] = inst_51340);

(statearr_51375_51430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (34))){
var inst_51338 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51376_51431 = state_51344__$1;
(statearr_51376_51431[(2)] = inst_51338);

(statearr_51376_51431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (17))){
var state_51344__$1 = state_51344;
var statearr_51377_51432 = state_51344__$1;
(statearr_51377_51432[(2)] = false);

(statearr_51377_51432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (3))){
var state_51344__$1 = state_51344;
var statearr_51378_51433 = state_51344__$1;
(statearr_51378_51433[(2)] = false);

(statearr_51378_51433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (12))){
var inst_51342 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51344__$1,inst_51342);
} else {
if((state_val_51345 === (2))){
var inst_51250 = (state_51344[(8)]);
var inst_51255 = inst_51250.cljs$lang$protocol_mask$partition0$;
var inst_51256 = (inst_51255 & (64));
var inst_51257 = inst_51250.cljs$core$ISeq$;
var inst_51258 = (inst_51256) || (inst_51257);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51258)){
var statearr_51379_51434 = state_51344__$1;
(statearr_51379_51434[(1)] = (5));

} else {
var statearr_51380_51435 = state_51344__$1;
(statearr_51380_51435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (23))){
var inst_51303 = (state_51344[(14)]);
var inst_51309 = (inst_51303 == null);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51309)){
var statearr_51381_51436 = state_51344__$1;
(statearr_51381_51436[(1)] = (26));

} else {
var statearr_51382_51437 = state_51344__$1;
(statearr_51382_51437[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (35))){
var inst_51329 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
if(cljs.core.truth_(inst_51329)){
var statearr_51383_51438 = state_51344__$1;
(statearr_51383_51438[(1)] = (36));

} else {
var statearr_51384_51439 = state_51344__$1;
(statearr_51384_51439[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (19))){
var inst_51274 = (state_51344[(7)]);
var inst_51293 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51274);
var state_51344__$1 = state_51344;
var statearr_51385_51440 = state_51344__$1;
(statearr_51385_51440[(2)] = inst_51293);

(statearr_51385_51440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (11))){
var inst_51274 = (state_51344[(7)]);
var inst_51278 = (inst_51274 == null);
var inst_51279 = cljs.core.not.call(null,inst_51278);
var state_51344__$1 = state_51344;
if(inst_51279){
var statearr_51386_51441 = state_51344__$1;
(statearr_51386_51441[(1)] = (13));

} else {
var statearr_51387_51442 = state_51344__$1;
(statearr_51387_51442[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (9))){
var inst_51250 = (state_51344[(8)]);
var state_51344__$1 = state_51344;
var statearr_51388_51443 = state_51344__$1;
(statearr_51388_51443[(2)] = inst_51250);

(statearr_51388_51443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (5))){
var state_51344__$1 = state_51344;
var statearr_51389_51444 = state_51344__$1;
(statearr_51389_51444[(2)] = true);

(statearr_51389_51444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (14))){
var state_51344__$1 = state_51344;
var statearr_51390_51445 = state_51344__$1;
(statearr_51390_51445[(2)] = false);

(statearr_51390_51445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (26))){
var inst_51304 = (state_51344[(10)]);
var inst_51311 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_51304);
var state_51344__$1 = state_51344;
var statearr_51391_51446 = state_51344__$1;
(statearr_51391_51446[(2)] = inst_51311);

(statearr_51391_51446[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (16))){
var state_51344__$1 = state_51344;
var statearr_51392_51447 = state_51344__$1;
(statearr_51392_51447[(2)] = true);

(statearr_51392_51447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (38))){
var inst_51334 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51393_51448 = state_51344__$1;
(statearr_51393_51448[(2)] = inst_51334);

(statearr_51393_51448[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (30))){
var inst_51304 = (state_51344[(10)]);
var inst_51298 = (state_51344[(13)]);
var inst_51297 = (state_51344[(11)]);
var inst_51321 = cljs.core.empty_QMARK_.call(null,inst_51297);
var inst_51322 = inst_51298.call(null,inst_51304);
var inst_51323 = cljs.core.not.call(null,inst_51322);
var inst_51324 = (inst_51321) && (inst_51323);
var state_51344__$1 = state_51344;
var statearr_51394_51449 = state_51344__$1;
(statearr_51394_51449[(2)] = inst_51324);

(statearr_51394_51449[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (10))){
var inst_51250 = (state_51344[(8)]);
var inst_51270 = (state_51344[(2)]);
var inst_51271 = cljs.core.get.call(null,inst_51270,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51272 = cljs.core.get.call(null,inst_51270,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51273 = cljs.core.get.call(null,inst_51270,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51274 = inst_51250;
var state_51344__$1 = (function (){var statearr_51395 = state_51344;
(statearr_51395[(16)] = inst_51271);

(statearr_51395[(17)] = inst_51272);

(statearr_51395[(18)] = inst_51273);

(statearr_51395[(7)] = inst_51274);

return statearr_51395;
})();
var statearr_51396_51450 = state_51344__$1;
(statearr_51396_51450[(2)] = null);

(statearr_51396_51450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (18))){
var inst_51288 = (state_51344[(2)]);
var state_51344__$1 = state_51344;
var statearr_51397_51451 = state_51344__$1;
(statearr_51397_51451[(2)] = inst_51288);

(statearr_51397_51451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (37))){
var state_51344__$1 = state_51344;
var statearr_51398_51452 = state_51344__$1;
(statearr_51398_51452[(2)] = null);

(statearr_51398_51452[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51345 === (8))){
var inst_51250 = (state_51344[(8)]);
var inst_51267 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51250);
var state_51344__$1 = state_51344;
var statearr_51399_51453 = state_51344__$1;
(statearr_51399_51453[(2)] = inst_51267);

(statearr_51399_51453[(1)] = (10));


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
});})(c__22273__auto___51407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22208__auto__,c__22273__auto___51407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22209__auto__ = null;
var cljs$core$async$mix_$_state_machine__22209__auto____0 = (function (){
var statearr_51403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51403[(0)] = cljs$core$async$mix_$_state_machine__22209__auto__);

(statearr_51403[(1)] = (1));

return statearr_51403;
});
var cljs$core$async$mix_$_state_machine__22209__auto____1 = (function (state_51344){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_51344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e51404){if((e51404 instanceof Object)){
var ex__22212__auto__ = e51404;
var statearr_51405_51454 = state_51344;
(statearr_51405_51454[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51455 = state_51344;
state_51344 = G__51455;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22209__auto__ = function(state_51344){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22209__auto____1.call(this,state_51344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22209__auto____0;
cljs$core$async$mix_$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22209__auto____1;
return cljs$core$async$mix_$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___51407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22275__auto__ = (function (){var statearr_51406 = f__22274__auto__.call(null);
(statearr_51406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___51407);

return statearr_51406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___51407,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__19819__auto__ = (((p == null))?null:p);
var m__19820__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19820__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19819__auto__ = (((p == null))?null:p);
var m__19820__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,p,v,ch);
} else {
var m__19820__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args51456 = [];
var len__20222__auto___51459 = arguments.length;
var i__20223__auto___51460 = (0);
while(true){
if((i__20223__auto___51460 < len__20222__auto___51459)){
args51456.push((arguments[i__20223__auto___51460]));

var G__51461 = (i__20223__auto___51460 + (1));
i__20223__auto___51460 = G__51461;
continue;
} else {
}
break;
}

var G__51458 = args51456.length;
switch (G__51458) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51456.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19819__auto__ = (((p == null))?null:p);
var m__19820__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,p);
} else {
var m__19820__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,p);
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
var x__19819__auto__ = (((p == null))?null:p);
var m__19820__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19819__auto__)]);
if(!((m__19820__auto__ == null))){
return m__19820__auto__.call(null,p,v);
} else {
var m__19820__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19820__auto____$1 == null))){
return m__19820__auto____$1.call(null,p,v);
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
var args51464 = [];
var len__20222__auto___51589 = arguments.length;
var i__20223__auto___51590 = (0);
while(true){
if((i__20223__auto___51590 < len__20222__auto___51589)){
args51464.push((arguments[i__20223__auto___51590]));

var G__51591 = (i__20223__auto___51590 + (1));
i__20223__auto___51590 = G__51591;
continue;
} else {
}
break;
}

var G__51466 = args51464.length;
switch (G__51466) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51464.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19164__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19164__auto__)){
return or__19164__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19164__auto__,mults){
return (function (p1__51463_SHARP_){
if(cljs.core.truth_(p1__51463_SHARP_.call(null,topic))){
return p1__51463_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__51463_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19164__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async51467 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51467 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51468){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51468 = meta51468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_51469,meta51468__$1){
var self__ = this;
var _51469__$1 = this;
return (new cljs.core.async.t_cljs$core$async51467(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51468__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_51469){
var self__ = this;
var _51469__$1 = this;
return self__.meta51468;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51467.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51467.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51468","meta51468",-1068280926,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async51467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51467";

cljs.core.async.t_cljs$core$async51467.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async51467");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async51467 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async51467(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51468){
return (new cljs.core.async.t_cljs$core$async51467(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51468));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async51467(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22273__auto___51593 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___51593,mults,ensure_mult,p){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___51593,mults,ensure_mult,p){
return (function (state_51541){
var state_val_51542 = (state_51541[(1)]);
if((state_val_51542 === (7))){
var inst_51537 = (state_51541[(2)]);
var state_51541__$1 = state_51541;
var statearr_51543_51594 = state_51541__$1;
(statearr_51543_51594[(2)] = inst_51537);

(statearr_51543_51594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (20))){
var state_51541__$1 = state_51541;
var statearr_51544_51595 = state_51541__$1;
(statearr_51544_51595[(2)] = null);

(statearr_51544_51595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (1))){
var state_51541__$1 = state_51541;
var statearr_51545_51596 = state_51541__$1;
(statearr_51545_51596[(2)] = null);

(statearr_51545_51596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (24))){
var inst_51520 = (state_51541[(7)]);
var inst_51529 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_51520);
var state_51541__$1 = state_51541;
var statearr_51546_51597 = state_51541__$1;
(statearr_51546_51597[(2)] = inst_51529);

(statearr_51546_51597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (4))){
var inst_51472 = (state_51541[(8)]);
var inst_51472__$1 = (state_51541[(2)]);
var inst_51473 = (inst_51472__$1 == null);
var state_51541__$1 = (function (){var statearr_51547 = state_51541;
(statearr_51547[(8)] = inst_51472__$1);

return statearr_51547;
})();
if(cljs.core.truth_(inst_51473)){
var statearr_51548_51598 = state_51541__$1;
(statearr_51548_51598[(1)] = (5));

} else {
var statearr_51549_51599 = state_51541__$1;
(statearr_51549_51599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (15))){
var inst_51514 = (state_51541[(2)]);
var state_51541__$1 = state_51541;
var statearr_51550_51600 = state_51541__$1;
(statearr_51550_51600[(2)] = inst_51514);

(statearr_51550_51600[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (21))){
var inst_51534 = (state_51541[(2)]);
var state_51541__$1 = (function (){var statearr_51551 = state_51541;
(statearr_51551[(9)] = inst_51534);

return statearr_51551;
})();
var statearr_51552_51601 = state_51541__$1;
(statearr_51552_51601[(2)] = null);

(statearr_51552_51601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (13))){
var inst_51496 = (state_51541[(10)]);
var inst_51498 = cljs.core.chunked_seq_QMARK_.call(null,inst_51496);
var state_51541__$1 = state_51541;
if(inst_51498){
var statearr_51553_51602 = state_51541__$1;
(statearr_51553_51602[(1)] = (16));

} else {
var statearr_51554_51603 = state_51541__$1;
(statearr_51554_51603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (22))){
var inst_51526 = (state_51541[(2)]);
var state_51541__$1 = state_51541;
if(cljs.core.truth_(inst_51526)){
var statearr_51555_51604 = state_51541__$1;
(statearr_51555_51604[(1)] = (23));

} else {
var statearr_51556_51605 = state_51541__$1;
(statearr_51556_51605[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (6))){
var inst_51522 = (state_51541[(11)]);
var inst_51520 = (state_51541[(7)]);
var inst_51472 = (state_51541[(8)]);
var inst_51520__$1 = topic_fn.call(null,inst_51472);
var inst_51521 = cljs.core.deref.call(null,mults);
var inst_51522__$1 = cljs.core.get.call(null,inst_51521,inst_51520__$1);
var state_51541__$1 = (function (){var statearr_51557 = state_51541;
(statearr_51557[(11)] = inst_51522__$1);

(statearr_51557[(7)] = inst_51520__$1);

return statearr_51557;
})();
if(cljs.core.truth_(inst_51522__$1)){
var statearr_51558_51606 = state_51541__$1;
(statearr_51558_51606[(1)] = (19));

} else {
var statearr_51559_51607 = state_51541__$1;
(statearr_51559_51607[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (25))){
var inst_51531 = (state_51541[(2)]);
var state_51541__$1 = state_51541;
var statearr_51560_51608 = state_51541__$1;
(statearr_51560_51608[(2)] = inst_51531);

(statearr_51560_51608[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (17))){
var inst_51496 = (state_51541[(10)]);
var inst_51505 = cljs.core.first.call(null,inst_51496);
var inst_51506 = cljs.core.async.muxch_STAR_.call(null,inst_51505);
var inst_51507 = cljs.core.async.close_BANG_.call(null,inst_51506);
var inst_51508 = cljs.core.next.call(null,inst_51496);
var inst_51482 = inst_51508;
var inst_51483 = null;
var inst_51484 = (0);
var inst_51485 = (0);
var state_51541__$1 = (function (){var statearr_51561 = state_51541;
(statearr_51561[(12)] = inst_51507);

(statearr_51561[(13)] = inst_51484);

(statearr_51561[(14)] = inst_51483);

(statearr_51561[(15)] = inst_51482);

(statearr_51561[(16)] = inst_51485);

return statearr_51561;
})();
var statearr_51562_51609 = state_51541__$1;
(statearr_51562_51609[(2)] = null);

(statearr_51562_51609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (3))){
var inst_51539 = (state_51541[(2)]);
var state_51541__$1 = state_51541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51541__$1,inst_51539);
} else {
if((state_val_51542 === (12))){
var inst_51516 = (state_51541[(2)]);
var state_51541__$1 = state_51541;
var statearr_51563_51610 = state_51541__$1;
(statearr_51563_51610[(2)] = inst_51516);

(statearr_51563_51610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (2))){
var state_51541__$1 = state_51541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51541__$1,(4),ch);
} else {
if((state_val_51542 === (23))){
var state_51541__$1 = state_51541;
var statearr_51564_51611 = state_51541__$1;
(statearr_51564_51611[(2)] = null);

(statearr_51564_51611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (19))){
var inst_51522 = (state_51541[(11)]);
var inst_51472 = (state_51541[(8)]);
var inst_51524 = cljs.core.async.muxch_STAR_.call(null,inst_51522);
var state_51541__$1 = state_51541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51541__$1,(22),inst_51524,inst_51472);
} else {
if((state_val_51542 === (11))){
var inst_51496 = (state_51541[(10)]);
var inst_51482 = (state_51541[(15)]);
var inst_51496__$1 = cljs.core.seq.call(null,inst_51482);
var state_51541__$1 = (function (){var statearr_51565 = state_51541;
(statearr_51565[(10)] = inst_51496__$1);

return statearr_51565;
})();
if(inst_51496__$1){
var statearr_51566_51612 = state_51541__$1;
(statearr_51566_51612[(1)] = (13));

} else {
var statearr_51567_51613 = state_51541__$1;
(statearr_51567_51613[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (9))){
var inst_51518 = (state_51541[(2)]);
var state_51541__$1 = state_51541;
var statearr_51568_51614 = state_51541__$1;
(statearr_51568_51614[(2)] = inst_51518);

(statearr_51568_51614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (5))){
var inst_51479 = cljs.core.deref.call(null,mults);
var inst_51480 = cljs.core.vals.call(null,inst_51479);
var inst_51481 = cljs.core.seq.call(null,inst_51480);
var inst_51482 = inst_51481;
var inst_51483 = null;
var inst_51484 = (0);
var inst_51485 = (0);
var state_51541__$1 = (function (){var statearr_51569 = state_51541;
(statearr_51569[(13)] = inst_51484);

(statearr_51569[(14)] = inst_51483);

(statearr_51569[(15)] = inst_51482);

(statearr_51569[(16)] = inst_51485);

return statearr_51569;
})();
var statearr_51570_51615 = state_51541__$1;
(statearr_51570_51615[(2)] = null);

(statearr_51570_51615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (14))){
var state_51541__$1 = state_51541;
var statearr_51574_51616 = state_51541__$1;
(statearr_51574_51616[(2)] = null);

(statearr_51574_51616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (16))){
var inst_51496 = (state_51541[(10)]);
var inst_51500 = cljs.core.chunk_first.call(null,inst_51496);
var inst_51501 = cljs.core.chunk_rest.call(null,inst_51496);
var inst_51502 = cljs.core.count.call(null,inst_51500);
var inst_51482 = inst_51501;
var inst_51483 = inst_51500;
var inst_51484 = inst_51502;
var inst_51485 = (0);
var state_51541__$1 = (function (){var statearr_51575 = state_51541;
(statearr_51575[(13)] = inst_51484);

(statearr_51575[(14)] = inst_51483);

(statearr_51575[(15)] = inst_51482);

(statearr_51575[(16)] = inst_51485);

return statearr_51575;
})();
var statearr_51576_51617 = state_51541__$1;
(statearr_51576_51617[(2)] = null);

(statearr_51576_51617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (10))){
var inst_51484 = (state_51541[(13)]);
var inst_51483 = (state_51541[(14)]);
var inst_51482 = (state_51541[(15)]);
var inst_51485 = (state_51541[(16)]);
var inst_51490 = cljs.core._nth.call(null,inst_51483,inst_51485);
var inst_51491 = cljs.core.async.muxch_STAR_.call(null,inst_51490);
var inst_51492 = cljs.core.async.close_BANG_.call(null,inst_51491);
var inst_51493 = (inst_51485 + (1));
var tmp51571 = inst_51484;
var tmp51572 = inst_51483;
var tmp51573 = inst_51482;
var inst_51482__$1 = tmp51573;
var inst_51483__$1 = tmp51572;
var inst_51484__$1 = tmp51571;
var inst_51485__$1 = inst_51493;
var state_51541__$1 = (function (){var statearr_51577 = state_51541;
(statearr_51577[(13)] = inst_51484__$1);

(statearr_51577[(17)] = inst_51492);

(statearr_51577[(14)] = inst_51483__$1);

(statearr_51577[(15)] = inst_51482__$1);

(statearr_51577[(16)] = inst_51485__$1);

return statearr_51577;
})();
var statearr_51578_51618 = state_51541__$1;
(statearr_51578_51618[(2)] = null);

(statearr_51578_51618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (18))){
var inst_51511 = (state_51541[(2)]);
var state_51541__$1 = state_51541;
var statearr_51579_51619 = state_51541__$1;
(statearr_51579_51619[(2)] = inst_51511);

(statearr_51579_51619[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51542 === (8))){
var inst_51484 = (state_51541[(13)]);
var inst_51485 = (state_51541[(16)]);
var inst_51487 = (inst_51485 < inst_51484);
var inst_51488 = inst_51487;
var state_51541__$1 = state_51541;
if(cljs.core.truth_(inst_51488)){
var statearr_51580_51620 = state_51541__$1;
(statearr_51580_51620[(1)] = (10));

} else {
var statearr_51581_51621 = state_51541__$1;
(statearr_51581_51621[(1)] = (11));

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
});})(c__22273__auto___51593,mults,ensure_mult,p))
;
return ((function (switch__22208__auto__,c__22273__auto___51593,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_51585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51585[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_51585[(1)] = (1));

return statearr_51585;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_51541){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_51541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e51586){if((e51586 instanceof Object)){
var ex__22212__auto__ = e51586;
var statearr_51587_51622 = state_51541;
(statearr_51587_51622[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51623 = state_51541;
state_51541 = G__51623;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_51541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_51541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___51593,mults,ensure_mult,p))
})();
var state__22275__auto__ = (function (){var statearr_51588 = f__22274__auto__.call(null);
(statearr_51588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___51593);

return statearr_51588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___51593,mults,ensure_mult,p))
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
var args51624 = [];
var len__20222__auto___51627 = arguments.length;
var i__20223__auto___51628 = (0);
while(true){
if((i__20223__auto___51628 < len__20222__auto___51627)){
args51624.push((arguments[i__20223__auto___51628]));

var G__51629 = (i__20223__auto___51628 + (1));
i__20223__auto___51628 = G__51629;
continue;
} else {
}
break;
}

var G__51626 = args51624.length;
switch (G__51626) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51624.length)].join('')));

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
var args51631 = [];
var len__20222__auto___51634 = arguments.length;
var i__20223__auto___51635 = (0);
while(true){
if((i__20223__auto___51635 < len__20222__auto___51634)){
args51631.push((arguments[i__20223__auto___51635]));

var G__51636 = (i__20223__auto___51635 + (1));
i__20223__auto___51635 = G__51636;
continue;
} else {
}
break;
}

var G__51633 = args51631.length;
switch (G__51633) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51631.length)].join('')));

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
var args51638 = [];
var len__20222__auto___51709 = arguments.length;
var i__20223__auto___51710 = (0);
while(true){
if((i__20223__auto___51710 < len__20222__auto___51709)){
args51638.push((arguments[i__20223__auto___51710]));

var G__51711 = (i__20223__auto___51710 + (1));
i__20223__auto___51710 = G__51711;
continue;
} else {
}
break;
}

var G__51640 = args51638.length;
switch (G__51640) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51638.length)].join('')));

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
var c__22273__auto___51713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___51713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___51713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_51679){
var state_val_51680 = (state_51679[(1)]);
if((state_val_51680 === (7))){
var state_51679__$1 = state_51679;
var statearr_51681_51714 = state_51679__$1;
(statearr_51681_51714[(2)] = null);

(statearr_51681_51714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (1))){
var state_51679__$1 = state_51679;
var statearr_51682_51715 = state_51679__$1;
(statearr_51682_51715[(2)] = null);

(statearr_51682_51715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (4))){
var inst_51643 = (state_51679[(7)]);
var inst_51645 = (inst_51643 < cnt);
var state_51679__$1 = state_51679;
if(cljs.core.truth_(inst_51645)){
var statearr_51683_51716 = state_51679__$1;
(statearr_51683_51716[(1)] = (6));

} else {
var statearr_51684_51717 = state_51679__$1;
(statearr_51684_51717[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (15))){
var inst_51675 = (state_51679[(2)]);
var state_51679__$1 = state_51679;
var statearr_51685_51718 = state_51679__$1;
(statearr_51685_51718[(2)] = inst_51675);

(statearr_51685_51718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (13))){
var inst_51668 = cljs.core.async.close_BANG_.call(null,out);
var state_51679__$1 = state_51679;
var statearr_51686_51719 = state_51679__$1;
(statearr_51686_51719[(2)] = inst_51668);

(statearr_51686_51719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (6))){
var state_51679__$1 = state_51679;
var statearr_51687_51720 = state_51679__$1;
(statearr_51687_51720[(2)] = null);

(statearr_51687_51720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (3))){
var inst_51677 = (state_51679[(2)]);
var state_51679__$1 = state_51679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51679__$1,inst_51677);
} else {
if((state_val_51680 === (12))){
var inst_51665 = (state_51679[(8)]);
var inst_51665__$1 = (state_51679[(2)]);
var inst_51666 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_51665__$1);
var state_51679__$1 = (function (){var statearr_51688 = state_51679;
(statearr_51688[(8)] = inst_51665__$1);

return statearr_51688;
})();
if(cljs.core.truth_(inst_51666)){
var statearr_51689_51721 = state_51679__$1;
(statearr_51689_51721[(1)] = (13));

} else {
var statearr_51690_51722 = state_51679__$1;
(statearr_51690_51722[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (2))){
var inst_51642 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_51643 = (0);
var state_51679__$1 = (function (){var statearr_51691 = state_51679;
(statearr_51691[(9)] = inst_51642);

(statearr_51691[(7)] = inst_51643);

return statearr_51691;
})();
var statearr_51692_51723 = state_51679__$1;
(statearr_51692_51723[(2)] = null);

(statearr_51692_51723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (11))){
var inst_51643 = (state_51679[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_51679,(10),Object,null,(9));
var inst_51652 = chs__$1.call(null,inst_51643);
var inst_51653 = done.call(null,inst_51643);
var inst_51654 = cljs.core.async.take_BANG_.call(null,inst_51652,inst_51653);
var state_51679__$1 = state_51679;
var statearr_51693_51724 = state_51679__$1;
(statearr_51693_51724[(2)] = inst_51654);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (9))){
var inst_51643 = (state_51679[(7)]);
var inst_51656 = (state_51679[(2)]);
var inst_51657 = (inst_51643 + (1));
var inst_51643__$1 = inst_51657;
var state_51679__$1 = (function (){var statearr_51694 = state_51679;
(statearr_51694[(7)] = inst_51643__$1);

(statearr_51694[(10)] = inst_51656);

return statearr_51694;
})();
var statearr_51695_51725 = state_51679__$1;
(statearr_51695_51725[(2)] = null);

(statearr_51695_51725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (5))){
var inst_51663 = (state_51679[(2)]);
var state_51679__$1 = (function (){var statearr_51696 = state_51679;
(statearr_51696[(11)] = inst_51663);

return statearr_51696;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51679__$1,(12),dchan);
} else {
if((state_val_51680 === (14))){
var inst_51665 = (state_51679[(8)]);
var inst_51670 = cljs.core.apply.call(null,f,inst_51665);
var state_51679__$1 = state_51679;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51679__$1,(16),out,inst_51670);
} else {
if((state_val_51680 === (16))){
var inst_51672 = (state_51679[(2)]);
var state_51679__$1 = (function (){var statearr_51697 = state_51679;
(statearr_51697[(12)] = inst_51672);

return statearr_51697;
})();
var statearr_51698_51726 = state_51679__$1;
(statearr_51698_51726[(2)] = null);

(statearr_51698_51726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (10))){
var inst_51647 = (state_51679[(2)]);
var inst_51648 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_51679__$1 = (function (){var statearr_51699 = state_51679;
(statearr_51699[(13)] = inst_51647);

return statearr_51699;
})();
var statearr_51700_51727 = state_51679__$1;
(statearr_51700_51727[(2)] = inst_51648);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51679__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51680 === (8))){
var inst_51661 = (state_51679[(2)]);
var state_51679__$1 = state_51679;
var statearr_51701_51728 = state_51679__$1;
(statearr_51701_51728[(2)] = inst_51661);

(statearr_51701_51728[(1)] = (5));


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
});})(c__22273__auto___51713,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22208__auto__,c__22273__auto___51713,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_51705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51705[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_51705[(1)] = (1));

return statearr_51705;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_51679){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_51679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e51706){if((e51706 instanceof Object)){
var ex__22212__auto__ = e51706;
var statearr_51707_51729 = state_51679;
(statearr_51707_51729[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51730 = state_51679;
state_51679 = G__51730;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_51679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_51679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___51713,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22275__auto__ = (function (){var statearr_51708 = f__22274__auto__.call(null);
(statearr_51708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___51713);

return statearr_51708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___51713,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args51732 = [];
var len__20222__auto___51788 = arguments.length;
var i__20223__auto___51789 = (0);
while(true){
if((i__20223__auto___51789 < len__20222__auto___51788)){
args51732.push((arguments[i__20223__auto___51789]));

var G__51790 = (i__20223__auto___51789 + (1));
i__20223__auto___51789 = G__51790;
continue;
} else {
}
break;
}

var G__51734 = args51732.length;
switch (G__51734) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51732.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22273__auto___51792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___51792,out){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___51792,out){
return (function (state_51764){
var state_val_51765 = (state_51764[(1)]);
if((state_val_51765 === (7))){
var inst_51744 = (state_51764[(7)]);
var inst_51743 = (state_51764[(8)]);
var inst_51743__$1 = (state_51764[(2)]);
var inst_51744__$1 = cljs.core.nth.call(null,inst_51743__$1,(0),null);
var inst_51745 = cljs.core.nth.call(null,inst_51743__$1,(1),null);
var inst_51746 = (inst_51744__$1 == null);
var state_51764__$1 = (function (){var statearr_51766 = state_51764;
(statearr_51766[(9)] = inst_51745);

(statearr_51766[(7)] = inst_51744__$1);

(statearr_51766[(8)] = inst_51743__$1);

return statearr_51766;
})();
if(cljs.core.truth_(inst_51746)){
var statearr_51767_51793 = state_51764__$1;
(statearr_51767_51793[(1)] = (8));

} else {
var statearr_51768_51794 = state_51764__$1;
(statearr_51768_51794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51765 === (1))){
var inst_51735 = cljs.core.vec.call(null,chs);
var inst_51736 = inst_51735;
var state_51764__$1 = (function (){var statearr_51769 = state_51764;
(statearr_51769[(10)] = inst_51736);

return statearr_51769;
})();
var statearr_51770_51795 = state_51764__$1;
(statearr_51770_51795[(2)] = null);

(statearr_51770_51795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51765 === (4))){
var inst_51736 = (state_51764[(10)]);
var state_51764__$1 = state_51764;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51764__$1,(7),inst_51736);
} else {
if((state_val_51765 === (6))){
var inst_51760 = (state_51764[(2)]);
var state_51764__$1 = state_51764;
var statearr_51771_51796 = state_51764__$1;
(statearr_51771_51796[(2)] = inst_51760);

(statearr_51771_51796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51765 === (3))){
var inst_51762 = (state_51764[(2)]);
var state_51764__$1 = state_51764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51764__$1,inst_51762);
} else {
if((state_val_51765 === (2))){
var inst_51736 = (state_51764[(10)]);
var inst_51738 = cljs.core.count.call(null,inst_51736);
var inst_51739 = (inst_51738 > (0));
var state_51764__$1 = state_51764;
if(cljs.core.truth_(inst_51739)){
var statearr_51773_51797 = state_51764__$1;
(statearr_51773_51797[(1)] = (4));

} else {
var statearr_51774_51798 = state_51764__$1;
(statearr_51774_51798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51765 === (11))){
var inst_51736 = (state_51764[(10)]);
var inst_51753 = (state_51764[(2)]);
var tmp51772 = inst_51736;
var inst_51736__$1 = tmp51772;
var state_51764__$1 = (function (){var statearr_51775 = state_51764;
(statearr_51775[(11)] = inst_51753);

(statearr_51775[(10)] = inst_51736__$1);

return statearr_51775;
})();
var statearr_51776_51799 = state_51764__$1;
(statearr_51776_51799[(2)] = null);

(statearr_51776_51799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51765 === (9))){
var inst_51744 = (state_51764[(7)]);
var state_51764__$1 = state_51764;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51764__$1,(11),out,inst_51744);
} else {
if((state_val_51765 === (5))){
var inst_51758 = cljs.core.async.close_BANG_.call(null,out);
var state_51764__$1 = state_51764;
var statearr_51777_51800 = state_51764__$1;
(statearr_51777_51800[(2)] = inst_51758);

(statearr_51777_51800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51765 === (10))){
var inst_51756 = (state_51764[(2)]);
var state_51764__$1 = state_51764;
var statearr_51778_51801 = state_51764__$1;
(statearr_51778_51801[(2)] = inst_51756);

(statearr_51778_51801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51765 === (8))){
var inst_51745 = (state_51764[(9)]);
var inst_51744 = (state_51764[(7)]);
var inst_51736 = (state_51764[(10)]);
var inst_51743 = (state_51764[(8)]);
var inst_51748 = (function (){var cs = inst_51736;
var vec__51741 = inst_51743;
var v = inst_51744;
var c = inst_51745;
return ((function (cs,vec__51741,v,c,inst_51745,inst_51744,inst_51736,inst_51743,state_val_51765,c__22273__auto___51792,out){
return (function (p1__51731_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__51731_SHARP_);
});
;})(cs,vec__51741,v,c,inst_51745,inst_51744,inst_51736,inst_51743,state_val_51765,c__22273__auto___51792,out))
})();
var inst_51749 = cljs.core.filterv.call(null,inst_51748,inst_51736);
var inst_51736__$1 = inst_51749;
var state_51764__$1 = (function (){var statearr_51779 = state_51764;
(statearr_51779[(10)] = inst_51736__$1);

return statearr_51779;
})();
var statearr_51780_51802 = state_51764__$1;
(statearr_51780_51802[(2)] = null);

(statearr_51780_51802[(1)] = (2));


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
});})(c__22273__auto___51792,out))
;
return ((function (switch__22208__auto__,c__22273__auto___51792,out){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_51784 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51784[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_51784[(1)] = (1));

return statearr_51784;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_51764){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_51764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e51785){if((e51785 instanceof Object)){
var ex__22212__auto__ = e51785;
var statearr_51786_51803 = state_51764;
(statearr_51786_51803[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51804 = state_51764;
state_51764 = G__51804;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_51764){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_51764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___51792,out))
})();
var state__22275__auto__ = (function (){var statearr_51787 = f__22274__auto__.call(null);
(statearr_51787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___51792);

return statearr_51787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___51792,out))
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
var args51805 = [];
var len__20222__auto___51854 = arguments.length;
var i__20223__auto___51855 = (0);
while(true){
if((i__20223__auto___51855 < len__20222__auto___51854)){
args51805.push((arguments[i__20223__auto___51855]));

var G__51856 = (i__20223__auto___51855 + (1));
i__20223__auto___51855 = G__51856;
continue;
} else {
}
break;
}

var G__51807 = args51805.length;
switch (G__51807) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51805.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22273__auto___51858 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___51858,out){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___51858,out){
return (function (state_51831){
var state_val_51832 = (state_51831[(1)]);
if((state_val_51832 === (7))){
var inst_51813 = (state_51831[(7)]);
var inst_51813__$1 = (state_51831[(2)]);
var inst_51814 = (inst_51813__$1 == null);
var inst_51815 = cljs.core.not.call(null,inst_51814);
var state_51831__$1 = (function (){var statearr_51833 = state_51831;
(statearr_51833[(7)] = inst_51813__$1);

return statearr_51833;
})();
if(inst_51815){
var statearr_51834_51859 = state_51831__$1;
(statearr_51834_51859[(1)] = (8));

} else {
var statearr_51835_51860 = state_51831__$1;
(statearr_51835_51860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (1))){
var inst_51808 = (0);
var state_51831__$1 = (function (){var statearr_51836 = state_51831;
(statearr_51836[(8)] = inst_51808);

return statearr_51836;
})();
var statearr_51837_51861 = state_51831__$1;
(statearr_51837_51861[(2)] = null);

(statearr_51837_51861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (4))){
var state_51831__$1 = state_51831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51831__$1,(7),ch);
} else {
if((state_val_51832 === (6))){
var inst_51826 = (state_51831[(2)]);
var state_51831__$1 = state_51831;
var statearr_51838_51862 = state_51831__$1;
(statearr_51838_51862[(2)] = inst_51826);

(statearr_51838_51862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (3))){
var inst_51828 = (state_51831[(2)]);
var inst_51829 = cljs.core.async.close_BANG_.call(null,out);
var state_51831__$1 = (function (){var statearr_51839 = state_51831;
(statearr_51839[(9)] = inst_51828);

return statearr_51839;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51831__$1,inst_51829);
} else {
if((state_val_51832 === (2))){
var inst_51808 = (state_51831[(8)]);
var inst_51810 = (inst_51808 < n);
var state_51831__$1 = state_51831;
if(cljs.core.truth_(inst_51810)){
var statearr_51840_51863 = state_51831__$1;
(statearr_51840_51863[(1)] = (4));

} else {
var statearr_51841_51864 = state_51831__$1;
(statearr_51841_51864[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (11))){
var inst_51808 = (state_51831[(8)]);
var inst_51818 = (state_51831[(2)]);
var inst_51819 = (inst_51808 + (1));
var inst_51808__$1 = inst_51819;
var state_51831__$1 = (function (){var statearr_51842 = state_51831;
(statearr_51842[(10)] = inst_51818);

(statearr_51842[(8)] = inst_51808__$1);

return statearr_51842;
})();
var statearr_51843_51865 = state_51831__$1;
(statearr_51843_51865[(2)] = null);

(statearr_51843_51865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (9))){
var state_51831__$1 = state_51831;
var statearr_51844_51866 = state_51831__$1;
(statearr_51844_51866[(2)] = null);

(statearr_51844_51866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (5))){
var state_51831__$1 = state_51831;
var statearr_51845_51867 = state_51831__$1;
(statearr_51845_51867[(2)] = null);

(statearr_51845_51867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (10))){
var inst_51823 = (state_51831[(2)]);
var state_51831__$1 = state_51831;
var statearr_51846_51868 = state_51831__$1;
(statearr_51846_51868[(2)] = inst_51823);

(statearr_51846_51868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51832 === (8))){
var inst_51813 = (state_51831[(7)]);
var state_51831__$1 = state_51831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51831__$1,(11),out,inst_51813);
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
});})(c__22273__auto___51858,out))
;
return ((function (switch__22208__auto__,c__22273__auto___51858,out){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_51850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51850[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_51850[(1)] = (1));

return statearr_51850;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_51831){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_51831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e51851){if((e51851 instanceof Object)){
var ex__22212__auto__ = e51851;
var statearr_51852_51869 = state_51831;
(statearr_51852_51869[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51870 = state_51831;
state_51831 = G__51870;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_51831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_51831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___51858,out))
})();
var state__22275__auto__ = (function (){var statearr_51853 = f__22274__auto__.call(null);
(statearr_51853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___51858);

return statearr_51853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___51858,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async51878 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51878 = (function (map_LT_,f,ch,meta51879){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta51879 = meta51879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51880,meta51879__$1){
var self__ = this;
var _51880__$1 = this;
return (new cljs.core.async.t_cljs$core$async51878(self__.map_LT_,self__.f,self__.ch,meta51879__$1));
});

cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51880){
var self__ = this;
var _51880__$1 = this;
return self__.meta51879;
});

cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async51881 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51881 = (function (map_LT_,f,ch,meta51879,_,fn1,meta51882){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta51879 = meta51879;
this._ = _;
this.fn1 = fn1;
this.meta51882 = meta51882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_51883,meta51882__$1){
var self__ = this;
var _51883__$1 = this;
return (new cljs.core.async.t_cljs$core$async51881(self__.map_LT_,self__.f,self__.ch,self__.meta51879,self__._,self__.fn1,meta51882__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_51883){
var self__ = this;
var _51883__$1 = this;
return self__.meta51882;
});})(___$1))
;

cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__51871_SHARP_){
return f1.call(null,(((p1__51871_SHARP_ == null))?null:self__.f.call(null,p1__51871_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async51881.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51879","meta51879",-1441087405,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51878","cljs.core.async/t_cljs$core$async51878",-1162303188,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51882","meta51882",1334282619,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async51881.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51881";

cljs.core.async.t_cljs$core$async51881.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async51881");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async51881 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51881(map_LT___$1,f__$1,ch__$1,meta51879__$1,___$2,fn1__$1,meta51882){
return (new cljs.core.async.t_cljs$core$async51881(map_LT___$1,f__$1,ch__$1,meta51879__$1,___$2,fn1__$1,meta51882));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async51881(self__.map_LT_,self__.f,self__.ch,self__.meta51879,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19152__auto__ = ret;
if(cljs.core.truth_(and__19152__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19152__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async51878.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async51878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51879","meta51879",-1441087405,null)], null);
});

cljs.core.async.t_cljs$core$async51878.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51878";

cljs.core.async.t_cljs$core$async51878.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async51878");
});

cljs.core.async.__GT_t_cljs$core$async51878 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51878(map_LT___$1,f__$1,ch__$1,meta51879){
return (new cljs.core.async.t_cljs$core$async51878(map_LT___$1,f__$1,ch__$1,meta51879));
});

}

return (new cljs.core.async.t_cljs$core$async51878(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async51887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51887 = (function (map_GT_,f,ch,meta51888){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta51888 = meta51888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51889,meta51888__$1){
var self__ = this;
var _51889__$1 = this;
return (new cljs.core.async.t_cljs$core$async51887(self__.map_GT_,self__.f,self__.ch,meta51888__$1));
});

cljs.core.async.t_cljs$core$async51887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51889){
var self__ = this;
var _51889__$1 = this;
return self__.meta51888;
});

cljs.core.async.t_cljs$core$async51887.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async51887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51887.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async51887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51887.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async51887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async51887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51888","meta51888",-1323908153,null)], null);
});

cljs.core.async.t_cljs$core$async51887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51887";

cljs.core.async.t_cljs$core$async51887.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async51887");
});

cljs.core.async.__GT_t_cljs$core$async51887 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51887(map_GT___$1,f__$1,ch__$1,meta51888){
return (new cljs.core.async.t_cljs$core$async51887(map_GT___$1,f__$1,ch__$1,meta51888));
});

}

return (new cljs.core.async.t_cljs$core$async51887(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async51893 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51893 = (function (filter_GT_,p,ch,meta51894){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta51894 = meta51894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51895,meta51894__$1){
var self__ = this;
var _51895__$1 = this;
return (new cljs.core.async.t_cljs$core$async51893(self__.filter_GT_,self__.p,self__.ch,meta51894__$1));
});

cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51895){
var self__ = this;
var _51895__$1 = this;
return self__.meta51894;
});

cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async51893.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async51893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51894","meta51894",1441708650,null)], null);
});

cljs.core.async.t_cljs$core$async51893.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async51893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51893";

cljs.core.async.t_cljs$core$async51893.cljs$lang$ctorPrWriter = (function (this__19762__auto__,writer__19763__auto__,opt__19764__auto__){
return cljs.core._write.call(null,writer__19763__auto__,"cljs.core.async/t_cljs$core$async51893");
});

cljs.core.async.__GT_t_cljs$core$async51893 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51893(filter_GT___$1,p__$1,ch__$1,meta51894){
return (new cljs.core.async.t_cljs$core$async51893(filter_GT___$1,p__$1,ch__$1,meta51894));
});

}

return (new cljs.core.async.t_cljs$core$async51893(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args51896 = [];
var len__20222__auto___51940 = arguments.length;
var i__20223__auto___51941 = (0);
while(true){
if((i__20223__auto___51941 < len__20222__auto___51940)){
args51896.push((arguments[i__20223__auto___51941]));

var G__51942 = (i__20223__auto___51941 + (1));
i__20223__auto___51941 = G__51942;
continue;
} else {
}
break;
}

var G__51898 = args51896.length;
switch (G__51898) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51896.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22273__auto___51944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___51944,out){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___51944,out){
return (function (state_51919){
var state_val_51920 = (state_51919[(1)]);
if((state_val_51920 === (7))){
var inst_51915 = (state_51919[(2)]);
var state_51919__$1 = state_51919;
var statearr_51921_51945 = state_51919__$1;
(statearr_51921_51945[(2)] = inst_51915);

(statearr_51921_51945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51920 === (1))){
var state_51919__$1 = state_51919;
var statearr_51922_51946 = state_51919__$1;
(statearr_51922_51946[(2)] = null);

(statearr_51922_51946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51920 === (4))){
var inst_51901 = (state_51919[(7)]);
var inst_51901__$1 = (state_51919[(2)]);
var inst_51902 = (inst_51901__$1 == null);
var state_51919__$1 = (function (){var statearr_51923 = state_51919;
(statearr_51923[(7)] = inst_51901__$1);

return statearr_51923;
})();
if(cljs.core.truth_(inst_51902)){
var statearr_51924_51947 = state_51919__$1;
(statearr_51924_51947[(1)] = (5));

} else {
var statearr_51925_51948 = state_51919__$1;
(statearr_51925_51948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51920 === (6))){
var inst_51901 = (state_51919[(7)]);
var inst_51906 = p.call(null,inst_51901);
var state_51919__$1 = state_51919;
if(cljs.core.truth_(inst_51906)){
var statearr_51926_51949 = state_51919__$1;
(statearr_51926_51949[(1)] = (8));

} else {
var statearr_51927_51950 = state_51919__$1;
(statearr_51927_51950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51920 === (3))){
var inst_51917 = (state_51919[(2)]);
var state_51919__$1 = state_51919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51919__$1,inst_51917);
} else {
if((state_val_51920 === (2))){
var state_51919__$1 = state_51919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51919__$1,(4),ch);
} else {
if((state_val_51920 === (11))){
var inst_51909 = (state_51919[(2)]);
var state_51919__$1 = state_51919;
var statearr_51928_51951 = state_51919__$1;
(statearr_51928_51951[(2)] = inst_51909);

(statearr_51928_51951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51920 === (9))){
var state_51919__$1 = state_51919;
var statearr_51929_51952 = state_51919__$1;
(statearr_51929_51952[(2)] = null);

(statearr_51929_51952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51920 === (5))){
var inst_51904 = cljs.core.async.close_BANG_.call(null,out);
var state_51919__$1 = state_51919;
var statearr_51930_51953 = state_51919__$1;
(statearr_51930_51953[(2)] = inst_51904);

(statearr_51930_51953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51920 === (10))){
var inst_51912 = (state_51919[(2)]);
var state_51919__$1 = (function (){var statearr_51931 = state_51919;
(statearr_51931[(8)] = inst_51912);

return statearr_51931;
})();
var statearr_51932_51954 = state_51919__$1;
(statearr_51932_51954[(2)] = null);

(statearr_51932_51954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51920 === (8))){
var inst_51901 = (state_51919[(7)]);
var state_51919__$1 = state_51919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51919__$1,(11),out,inst_51901);
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
});})(c__22273__auto___51944,out))
;
return ((function (switch__22208__auto__,c__22273__auto___51944,out){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_51936 = [null,null,null,null,null,null,null,null,null];
(statearr_51936[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_51936[(1)] = (1));

return statearr_51936;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_51919){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_51919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e51937){if((e51937 instanceof Object)){
var ex__22212__auto__ = e51937;
var statearr_51938_51955 = state_51919;
(statearr_51938_51955[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51956 = state_51919;
state_51919 = G__51956;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_51919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_51919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___51944,out))
})();
var state__22275__auto__ = (function (){var statearr_51939 = f__22274__auto__.call(null);
(statearr_51939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___51944);

return statearr_51939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___51944,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args51957 = [];
var len__20222__auto___51960 = arguments.length;
var i__20223__auto___51961 = (0);
while(true){
if((i__20223__auto___51961 < len__20222__auto___51960)){
args51957.push((arguments[i__20223__auto___51961]));

var G__51962 = (i__20223__auto___51961 + (1));
i__20223__auto___51961 = G__51962;
continue;
} else {
}
break;
}

var G__51959 = args51957.length;
switch (G__51959) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51957.length)].join('')));

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
var c__22273__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto__){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto__){
return (function (state_52129){
var state_val_52130 = (state_52129[(1)]);
if((state_val_52130 === (7))){
var inst_52125 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
var statearr_52131_52172 = state_52129__$1;
(statearr_52131_52172[(2)] = inst_52125);

(statearr_52131_52172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (20))){
var inst_52095 = (state_52129[(7)]);
var inst_52106 = (state_52129[(2)]);
var inst_52107 = cljs.core.next.call(null,inst_52095);
var inst_52081 = inst_52107;
var inst_52082 = null;
var inst_52083 = (0);
var inst_52084 = (0);
var state_52129__$1 = (function (){var statearr_52132 = state_52129;
(statearr_52132[(8)] = inst_52082);

(statearr_52132[(9)] = inst_52084);

(statearr_52132[(10)] = inst_52106);

(statearr_52132[(11)] = inst_52083);

(statearr_52132[(12)] = inst_52081);

return statearr_52132;
})();
var statearr_52133_52173 = state_52129__$1;
(statearr_52133_52173[(2)] = null);

(statearr_52133_52173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (1))){
var state_52129__$1 = state_52129;
var statearr_52134_52174 = state_52129__$1;
(statearr_52134_52174[(2)] = null);

(statearr_52134_52174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (4))){
var inst_52070 = (state_52129[(13)]);
var inst_52070__$1 = (state_52129[(2)]);
var inst_52071 = (inst_52070__$1 == null);
var state_52129__$1 = (function (){var statearr_52135 = state_52129;
(statearr_52135[(13)] = inst_52070__$1);

return statearr_52135;
})();
if(cljs.core.truth_(inst_52071)){
var statearr_52136_52175 = state_52129__$1;
(statearr_52136_52175[(1)] = (5));

} else {
var statearr_52137_52176 = state_52129__$1;
(statearr_52137_52176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (15))){
var state_52129__$1 = state_52129;
var statearr_52141_52177 = state_52129__$1;
(statearr_52141_52177[(2)] = null);

(statearr_52141_52177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (21))){
var state_52129__$1 = state_52129;
var statearr_52142_52178 = state_52129__$1;
(statearr_52142_52178[(2)] = null);

(statearr_52142_52178[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (13))){
var inst_52082 = (state_52129[(8)]);
var inst_52084 = (state_52129[(9)]);
var inst_52083 = (state_52129[(11)]);
var inst_52081 = (state_52129[(12)]);
var inst_52091 = (state_52129[(2)]);
var inst_52092 = (inst_52084 + (1));
var tmp52138 = inst_52082;
var tmp52139 = inst_52083;
var tmp52140 = inst_52081;
var inst_52081__$1 = tmp52140;
var inst_52082__$1 = tmp52138;
var inst_52083__$1 = tmp52139;
var inst_52084__$1 = inst_52092;
var state_52129__$1 = (function (){var statearr_52143 = state_52129;
(statearr_52143[(8)] = inst_52082__$1);

(statearr_52143[(9)] = inst_52084__$1);

(statearr_52143[(11)] = inst_52083__$1);

(statearr_52143[(12)] = inst_52081__$1);

(statearr_52143[(14)] = inst_52091);

return statearr_52143;
})();
var statearr_52144_52179 = state_52129__$1;
(statearr_52144_52179[(2)] = null);

(statearr_52144_52179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (22))){
var state_52129__$1 = state_52129;
var statearr_52145_52180 = state_52129__$1;
(statearr_52145_52180[(2)] = null);

(statearr_52145_52180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (6))){
var inst_52070 = (state_52129[(13)]);
var inst_52079 = f.call(null,inst_52070);
var inst_52080 = cljs.core.seq.call(null,inst_52079);
var inst_52081 = inst_52080;
var inst_52082 = null;
var inst_52083 = (0);
var inst_52084 = (0);
var state_52129__$1 = (function (){var statearr_52146 = state_52129;
(statearr_52146[(8)] = inst_52082);

(statearr_52146[(9)] = inst_52084);

(statearr_52146[(11)] = inst_52083);

(statearr_52146[(12)] = inst_52081);

return statearr_52146;
})();
var statearr_52147_52181 = state_52129__$1;
(statearr_52147_52181[(2)] = null);

(statearr_52147_52181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (17))){
var inst_52095 = (state_52129[(7)]);
var inst_52099 = cljs.core.chunk_first.call(null,inst_52095);
var inst_52100 = cljs.core.chunk_rest.call(null,inst_52095);
var inst_52101 = cljs.core.count.call(null,inst_52099);
var inst_52081 = inst_52100;
var inst_52082 = inst_52099;
var inst_52083 = inst_52101;
var inst_52084 = (0);
var state_52129__$1 = (function (){var statearr_52148 = state_52129;
(statearr_52148[(8)] = inst_52082);

(statearr_52148[(9)] = inst_52084);

(statearr_52148[(11)] = inst_52083);

(statearr_52148[(12)] = inst_52081);

return statearr_52148;
})();
var statearr_52149_52182 = state_52129__$1;
(statearr_52149_52182[(2)] = null);

(statearr_52149_52182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (3))){
var inst_52127 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52129__$1,inst_52127);
} else {
if((state_val_52130 === (12))){
var inst_52115 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
var statearr_52150_52183 = state_52129__$1;
(statearr_52150_52183[(2)] = inst_52115);

(statearr_52150_52183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (2))){
var state_52129__$1 = state_52129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52129__$1,(4),in$);
} else {
if((state_val_52130 === (23))){
var inst_52123 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
var statearr_52151_52184 = state_52129__$1;
(statearr_52151_52184[(2)] = inst_52123);

(statearr_52151_52184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (19))){
var inst_52110 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
var statearr_52152_52185 = state_52129__$1;
(statearr_52152_52185[(2)] = inst_52110);

(statearr_52152_52185[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (11))){
var inst_52095 = (state_52129[(7)]);
var inst_52081 = (state_52129[(12)]);
var inst_52095__$1 = cljs.core.seq.call(null,inst_52081);
var state_52129__$1 = (function (){var statearr_52153 = state_52129;
(statearr_52153[(7)] = inst_52095__$1);

return statearr_52153;
})();
if(inst_52095__$1){
var statearr_52154_52186 = state_52129__$1;
(statearr_52154_52186[(1)] = (14));

} else {
var statearr_52155_52187 = state_52129__$1;
(statearr_52155_52187[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (9))){
var inst_52117 = (state_52129[(2)]);
var inst_52118 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_52129__$1 = (function (){var statearr_52156 = state_52129;
(statearr_52156[(15)] = inst_52117);

return statearr_52156;
})();
if(cljs.core.truth_(inst_52118)){
var statearr_52157_52188 = state_52129__$1;
(statearr_52157_52188[(1)] = (21));

} else {
var statearr_52158_52189 = state_52129__$1;
(statearr_52158_52189[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (5))){
var inst_52073 = cljs.core.async.close_BANG_.call(null,out);
var state_52129__$1 = state_52129;
var statearr_52159_52190 = state_52129__$1;
(statearr_52159_52190[(2)] = inst_52073);

(statearr_52159_52190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (14))){
var inst_52095 = (state_52129[(7)]);
var inst_52097 = cljs.core.chunked_seq_QMARK_.call(null,inst_52095);
var state_52129__$1 = state_52129;
if(inst_52097){
var statearr_52160_52191 = state_52129__$1;
(statearr_52160_52191[(1)] = (17));

} else {
var statearr_52161_52192 = state_52129__$1;
(statearr_52161_52192[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (16))){
var inst_52113 = (state_52129[(2)]);
var state_52129__$1 = state_52129;
var statearr_52162_52193 = state_52129__$1;
(statearr_52162_52193[(2)] = inst_52113);

(statearr_52162_52193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52130 === (10))){
var inst_52082 = (state_52129[(8)]);
var inst_52084 = (state_52129[(9)]);
var inst_52089 = cljs.core._nth.call(null,inst_52082,inst_52084);
var state_52129__$1 = state_52129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52129__$1,(13),out,inst_52089);
} else {
if((state_val_52130 === (18))){
var inst_52095 = (state_52129[(7)]);
var inst_52104 = cljs.core.first.call(null,inst_52095);
var state_52129__$1 = state_52129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52129__$1,(20),out,inst_52104);
} else {
if((state_val_52130 === (8))){
var inst_52084 = (state_52129[(9)]);
var inst_52083 = (state_52129[(11)]);
var inst_52086 = (inst_52084 < inst_52083);
var inst_52087 = inst_52086;
var state_52129__$1 = state_52129;
if(cljs.core.truth_(inst_52087)){
var statearr_52163_52194 = state_52129__$1;
(statearr_52163_52194[(1)] = (10));

} else {
var statearr_52164_52195 = state_52129__$1;
(statearr_52164_52195[(1)] = (11));

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
});})(c__22273__auto__))
;
return ((function (switch__22208__auto__,c__22273__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22209__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22209__auto____0 = (function (){
var statearr_52168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52168[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22209__auto__);

(statearr_52168[(1)] = (1));

return statearr_52168;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22209__auto____1 = (function (state_52129){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_52129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e52169){if((e52169 instanceof Object)){
var ex__22212__auto__ = e52169;
var statearr_52170_52196 = state_52129;
(statearr_52170_52196[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52197 = state_52129;
state_52129 = G__52197;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22209__auto__ = function(state_52129){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22209__auto____1.call(this,state_52129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22209__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22209__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto__))
})();
var state__22275__auto__ = (function (){var statearr_52171 = f__22274__auto__.call(null);
(statearr_52171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto__);

return statearr_52171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto__))
);

return c__22273__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args52198 = [];
var len__20222__auto___52201 = arguments.length;
var i__20223__auto___52202 = (0);
while(true){
if((i__20223__auto___52202 < len__20222__auto___52201)){
args52198.push((arguments[i__20223__auto___52202]));

var G__52203 = (i__20223__auto___52202 + (1));
i__20223__auto___52202 = G__52203;
continue;
} else {
}
break;
}

var G__52200 = args52198.length;
switch (G__52200) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52198.length)].join('')));

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
var args52205 = [];
var len__20222__auto___52208 = arguments.length;
var i__20223__auto___52209 = (0);
while(true){
if((i__20223__auto___52209 < len__20222__auto___52208)){
args52205.push((arguments[i__20223__auto___52209]));

var G__52210 = (i__20223__auto___52209 + (1));
i__20223__auto___52209 = G__52210;
continue;
} else {
}
break;
}

var G__52207 = args52205.length;
switch (G__52207) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52205.length)].join('')));

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
var args52212 = [];
var len__20222__auto___52263 = arguments.length;
var i__20223__auto___52264 = (0);
while(true){
if((i__20223__auto___52264 < len__20222__auto___52263)){
args52212.push((arguments[i__20223__auto___52264]));

var G__52265 = (i__20223__auto___52264 + (1));
i__20223__auto___52264 = G__52265;
continue;
} else {
}
break;
}

var G__52214 = args52212.length;
switch (G__52214) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52212.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22273__auto___52267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___52267,out){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___52267,out){
return (function (state_52238){
var state_val_52239 = (state_52238[(1)]);
if((state_val_52239 === (7))){
var inst_52233 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52240_52268 = state_52238__$1;
(statearr_52240_52268[(2)] = inst_52233);

(statearr_52240_52268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (1))){
var inst_52215 = null;
var state_52238__$1 = (function (){var statearr_52241 = state_52238;
(statearr_52241[(7)] = inst_52215);

return statearr_52241;
})();
var statearr_52242_52269 = state_52238__$1;
(statearr_52242_52269[(2)] = null);

(statearr_52242_52269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (4))){
var inst_52218 = (state_52238[(8)]);
var inst_52218__$1 = (state_52238[(2)]);
var inst_52219 = (inst_52218__$1 == null);
var inst_52220 = cljs.core.not.call(null,inst_52219);
var state_52238__$1 = (function (){var statearr_52243 = state_52238;
(statearr_52243[(8)] = inst_52218__$1);

return statearr_52243;
})();
if(inst_52220){
var statearr_52244_52270 = state_52238__$1;
(statearr_52244_52270[(1)] = (5));

} else {
var statearr_52245_52271 = state_52238__$1;
(statearr_52245_52271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (6))){
var state_52238__$1 = state_52238;
var statearr_52246_52272 = state_52238__$1;
(statearr_52246_52272[(2)] = null);

(statearr_52246_52272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (3))){
var inst_52235 = (state_52238[(2)]);
var inst_52236 = cljs.core.async.close_BANG_.call(null,out);
var state_52238__$1 = (function (){var statearr_52247 = state_52238;
(statearr_52247[(9)] = inst_52235);

return statearr_52247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52238__$1,inst_52236);
} else {
if((state_val_52239 === (2))){
var state_52238__$1 = state_52238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52238__$1,(4),ch);
} else {
if((state_val_52239 === (11))){
var inst_52218 = (state_52238[(8)]);
var inst_52227 = (state_52238[(2)]);
var inst_52215 = inst_52218;
var state_52238__$1 = (function (){var statearr_52248 = state_52238;
(statearr_52248[(7)] = inst_52215);

(statearr_52248[(10)] = inst_52227);

return statearr_52248;
})();
var statearr_52249_52273 = state_52238__$1;
(statearr_52249_52273[(2)] = null);

(statearr_52249_52273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (9))){
var inst_52218 = (state_52238[(8)]);
var state_52238__$1 = state_52238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52238__$1,(11),out,inst_52218);
} else {
if((state_val_52239 === (5))){
var inst_52215 = (state_52238[(7)]);
var inst_52218 = (state_52238[(8)]);
var inst_52222 = cljs.core._EQ_.call(null,inst_52218,inst_52215);
var state_52238__$1 = state_52238;
if(inst_52222){
var statearr_52251_52274 = state_52238__$1;
(statearr_52251_52274[(1)] = (8));

} else {
var statearr_52252_52275 = state_52238__$1;
(statearr_52252_52275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (10))){
var inst_52230 = (state_52238[(2)]);
var state_52238__$1 = state_52238;
var statearr_52253_52276 = state_52238__$1;
(statearr_52253_52276[(2)] = inst_52230);

(statearr_52253_52276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52239 === (8))){
var inst_52215 = (state_52238[(7)]);
var tmp52250 = inst_52215;
var inst_52215__$1 = tmp52250;
var state_52238__$1 = (function (){var statearr_52254 = state_52238;
(statearr_52254[(7)] = inst_52215__$1);

return statearr_52254;
})();
var statearr_52255_52277 = state_52238__$1;
(statearr_52255_52277[(2)] = null);

(statearr_52255_52277[(1)] = (2));


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
});})(c__22273__auto___52267,out))
;
return ((function (switch__22208__auto__,c__22273__auto___52267,out){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_52259 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52259[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_52259[(1)] = (1));

return statearr_52259;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_52238){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_52238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e52260){if((e52260 instanceof Object)){
var ex__22212__auto__ = e52260;
var statearr_52261_52278 = state_52238;
(statearr_52261_52278[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52279 = state_52238;
state_52238 = G__52279;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_52238){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_52238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___52267,out))
})();
var state__22275__auto__ = (function (){var statearr_52262 = f__22274__auto__.call(null);
(statearr_52262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___52267);

return statearr_52262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___52267,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args52280 = [];
var len__20222__auto___52350 = arguments.length;
var i__20223__auto___52351 = (0);
while(true){
if((i__20223__auto___52351 < len__20222__auto___52350)){
args52280.push((arguments[i__20223__auto___52351]));

var G__52352 = (i__20223__auto___52351 + (1));
i__20223__auto___52351 = G__52352;
continue;
} else {
}
break;
}

var G__52282 = args52280.length;
switch (G__52282) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52280.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22273__auto___52354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___52354,out){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___52354,out){
return (function (state_52320){
var state_val_52321 = (state_52320[(1)]);
if((state_val_52321 === (7))){
var inst_52316 = (state_52320[(2)]);
var state_52320__$1 = state_52320;
var statearr_52322_52355 = state_52320__$1;
(statearr_52322_52355[(2)] = inst_52316);

(statearr_52322_52355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (1))){
var inst_52283 = (new Array(n));
var inst_52284 = inst_52283;
var inst_52285 = (0);
var state_52320__$1 = (function (){var statearr_52323 = state_52320;
(statearr_52323[(7)] = inst_52285);

(statearr_52323[(8)] = inst_52284);

return statearr_52323;
})();
var statearr_52324_52356 = state_52320__$1;
(statearr_52324_52356[(2)] = null);

(statearr_52324_52356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (4))){
var inst_52288 = (state_52320[(9)]);
var inst_52288__$1 = (state_52320[(2)]);
var inst_52289 = (inst_52288__$1 == null);
var inst_52290 = cljs.core.not.call(null,inst_52289);
var state_52320__$1 = (function (){var statearr_52325 = state_52320;
(statearr_52325[(9)] = inst_52288__$1);

return statearr_52325;
})();
if(inst_52290){
var statearr_52326_52357 = state_52320__$1;
(statearr_52326_52357[(1)] = (5));

} else {
var statearr_52327_52358 = state_52320__$1;
(statearr_52327_52358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (15))){
var inst_52310 = (state_52320[(2)]);
var state_52320__$1 = state_52320;
var statearr_52328_52359 = state_52320__$1;
(statearr_52328_52359[(2)] = inst_52310);

(statearr_52328_52359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (13))){
var state_52320__$1 = state_52320;
var statearr_52329_52360 = state_52320__$1;
(statearr_52329_52360[(2)] = null);

(statearr_52329_52360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (6))){
var inst_52285 = (state_52320[(7)]);
var inst_52306 = (inst_52285 > (0));
var state_52320__$1 = state_52320;
if(cljs.core.truth_(inst_52306)){
var statearr_52330_52361 = state_52320__$1;
(statearr_52330_52361[(1)] = (12));

} else {
var statearr_52331_52362 = state_52320__$1;
(statearr_52331_52362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (3))){
var inst_52318 = (state_52320[(2)]);
var state_52320__$1 = state_52320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52320__$1,inst_52318);
} else {
if((state_val_52321 === (12))){
var inst_52284 = (state_52320[(8)]);
var inst_52308 = cljs.core.vec.call(null,inst_52284);
var state_52320__$1 = state_52320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52320__$1,(15),out,inst_52308);
} else {
if((state_val_52321 === (2))){
var state_52320__$1 = state_52320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52320__$1,(4),ch);
} else {
if((state_val_52321 === (11))){
var inst_52300 = (state_52320[(2)]);
var inst_52301 = (new Array(n));
var inst_52284 = inst_52301;
var inst_52285 = (0);
var state_52320__$1 = (function (){var statearr_52332 = state_52320;
(statearr_52332[(7)] = inst_52285);

(statearr_52332[(10)] = inst_52300);

(statearr_52332[(8)] = inst_52284);

return statearr_52332;
})();
var statearr_52333_52363 = state_52320__$1;
(statearr_52333_52363[(2)] = null);

(statearr_52333_52363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (9))){
var inst_52284 = (state_52320[(8)]);
var inst_52298 = cljs.core.vec.call(null,inst_52284);
var state_52320__$1 = state_52320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52320__$1,(11),out,inst_52298);
} else {
if((state_val_52321 === (5))){
var inst_52285 = (state_52320[(7)]);
var inst_52293 = (state_52320[(11)]);
var inst_52288 = (state_52320[(9)]);
var inst_52284 = (state_52320[(8)]);
var inst_52292 = (inst_52284[inst_52285] = inst_52288);
var inst_52293__$1 = (inst_52285 + (1));
var inst_52294 = (inst_52293__$1 < n);
var state_52320__$1 = (function (){var statearr_52334 = state_52320;
(statearr_52334[(11)] = inst_52293__$1);

(statearr_52334[(12)] = inst_52292);

return statearr_52334;
})();
if(cljs.core.truth_(inst_52294)){
var statearr_52335_52364 = state_52320__$1;
(statearr_52335_52364[(1)] = (8));

} else {
var statearr_52336_52365 = state_52320__$1;
(statearr_52336_52365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (14))){
var inst_52313 = (state_52320[(2)]);
var inst_52314 = cljs.core.async.close_BANG_.call(null,out);
var state_52320__$1 = (function (){var statearr_52338 = state_52320;
(statearr_52338[(13)] = inst_52313);

return statearr_52338;
})();
var statearr_52339_52366 = state_52320__$1;
(statearr_52339_52366[(2)] = inst_52314);

(statearr_52339_52366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (10))){
var inst_52304 = (state_52320[(2)]);
var state_52320__$1 = state_52320;
var statearr_52340_52367 = state_52320__$1;
(statearr_52340_52367[(2)] = inst_52304);

(statearr_52340_52367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52321 === (8))){
var inst_52293 = (state_52320[(11)]);
var inst_52284 = (state_52320[(8)]);
var tmp52337 = inst_52284;
var inst_52284__$1 = tmp52337;
var inst_52285 = inst_52293;
var state_52320__$1 = (function (){var statearr_52341 = state_52320;
(statearr_52341[(7)] = inst_52285);

(statearr_52341[(8)] = inst_52284__$1);

return statearr_52341;
})();
var statearr_52342_52368 = state_52320__$1;
(statearr_52342_52368[(2)] = null);

(statearr_52342_52368[(1)] = (2));


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
});})(c__22273__auto___52354,out))
;
return ((function (switch__22208__auto__,c__22273__auto___52354,out){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_52346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52346[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_52346[(1)] = (1));

return statearr_52346;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_52320){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_52320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e52347){if((e52347 instanceof Object)){
var ex__22212__auto__ = e52347;
var statearr_52348_52369 = state_52320;
(statearr_52348_52369[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52370 = state_52320;
state_52320 = G__52370;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_52320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_52320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___52354,out))
})();
var state__22275__auto__ = (function (){var statearr_52349 = f__22274__auto__.call(null);
(statearr_52349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___52354);

return statearr_52349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___52354,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args52371 = [];
var len__20222__auto___52445 = arguments.length;
var i__20223__auto___52446 = (0);
while(true){
if((i__20223__auto___52446 < len__20222__auto___52445)){
args52371.push((arguments[i__20223__auto___52446]));

var G__52447 = (i__20223__auto___52446 + (1));
i__20223__auto___52446 = G__52447;
continue;
} else {
}
break;
}

var G__52373 = args52371.length;
switch (G__52373) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52371.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22273__auto___52449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22273__auto___52449,out){
return (function (){
var f__22274__auto__ = (function (){var switch__22208__auto__ = ((function (c__22273__auto___52449,out){
return (function (state_52415){
var state_val_52416 = (state_52415[(1)]);
if((state_val_52416 === (7))){
var inst_52411 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
var statearr_52417_52450 = state_52415__$1;
(statearr_52417_52450[(2)] = inst_52411);

(statearr_52417_52450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (1))){
var inst_52374 = [];
var inst_52375 = inst_52374;
var inst_52376 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52415__$1 = (function (){var statearr_52418 = state_52415;
(statearr_52418[(7)] = inst_52375);

(statearr_52418[(8)] = inst_52376);

return statearr_52418;
})();
var statearr_52419_52451 = state_52415__$1;
(statearr_52419_52451[(2)] = null);

(statearr_52419_52451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (4))){
var inst_52379 = (state_52415[(9)]);
var inst_52379__$1 = (state_52415[(2)]);
var inst_52380 = (inst_52379__$1 == null);
var inst_52381 = cljs.core.not.call(null,inst_52380);
var state_52415__$1 = (function (){var statearr_52420 = state_52415;
(statearr_52420[(9)] = inst_52379__$1);

return statearr_52420;
})();
if(inst_52381){
var statearr_52421_52452 = state_52415__$1;
(statearr_52421_52452[(1)] = (5));

} else {
var statearr_52422_52453 = state_52415__$1;
(statearr_52422_52453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (15))){
var inst_52405 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
var statearr_52423_52454 = state_52415__$1;
(statearr_52423_52454[(2)] = inst_52405);

(statearr_52423_52454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (13))){
var state_52415__$1 = state_52415;
var statearr_52424_52455 = state_52415__$1;
(statearr_52424_52455[(2)] = null);

(statearr_52424_52455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (6))){
var inst_52375 = (state_52415[(7)]);
var inst_52400 = inst_52375.length;
var inst_52401 = (inst_52400 > (0));
var state_52415__$1 = state_52415;
if(cljs.core.truth_(inst_52401)){
var statearr_52425_52456 = state_52415__$1;
(statearr_52425_52456[(1)] = (12));

} else {
var statearr_52426_52457 = state_52415__$1;
(statearr_52426_52457[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (3))){
var inst_52413 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52415__$1,inst_52413);
} else {
if((state_val_52416 === (12))){
var inst_52375 = (state_52415[(7)]);
var inst_52403 = cljs.core.vec.call(null,inst_52375);
var state_52415__$1 = state_52415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52415__$1,(15),out,inst_52403);
} else {
if((state_val_52416 === (2))){
var state_52415__$1 = state_52415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52415__$1,(4),ch);
} else {
if((state_val_52416 === (11))){
var inst_52383 = (state_52415[(10)]);
var inst_52379 = (state_52415[(9)]);
var inst_52393 = (state_52415[(2)]);
var inst_52394 = [];
var inst_52395 = inst_52394.push(inst_52379);
var inst_52375 = inst_52394;
var inst_52376 = inst_52383;
var state_52415__$1 = (function (){var statearr_52427 = state_52415;
(statearr_52427[(11)] = inst_52395);

(statearr_52427[(7)] = inst_52375);

(statearr_52427[(8)] = inst_52376);

(statearr_52427[(12)] = inst_52393);

return statearr_52427;
})();
var statearr_52428_52458 = state_52415__$1;
(statearr_52428_52458[(2)] = null);

(statearr_52428_52458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (9))){
var inst_52375 = (state_52415[(7)]);
var inst_52391 = cljs.core.vec.call(null,inst_52375);
var state_52415__$1 = state_52415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52415__$1,(11),out,inst_52391);
} else {
if((state_val_52416 === (5))){
var inst_52376 = (state_52415[(8)]);
var inst_52383 = (state_52415[(10)]);
var inst_52379 = (state_52415[(9)]);
var inst_52383__$1 = f.call(null,inst_52379);
var inst_52384 = cljs.core._EQ_.call(null,inst_52383__$1,inst_52376);
var inst_52385 = cljs.core.keyword_identical_QMARK_.call(null,inst_52376,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_52386 = (inst_52384) || (inst_52385);
var state_52415__$1 = (function (){var statearr_52429 = state_52415;
(statearr_52429[(10)] = inst_52383__$1);

return statearr_52429;
})();
if(cljs.core.truth_(inst_52386)){
var statearr_52430_52459 = state_52415__$1;
(statearr_52430_52459[(1)] = (8));

} else {
var statearr_52431_52460 = state_52415__$1;
(statearr_52431_52460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (14))){
var inst_52408 = (state_52415[(2)]);
var inst_52409 = cljs.core.async.close_BANG_.call(null,out);
var state_52415__$1 = (function (){var statearr_52433 = state_52415;
(statearr_52433[(13)] = inst_52408);

return statearr_52433;
})();
var statearr_52434_52461 = state_52415__$1;
(statearr_52434_52461[(2)] = inst_52409);

(statearr_52434_52461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (10))){
var inst_52398 = (state_52415[(2)]);
var state_52415__$1 = state_52415;
var statearr_52435_52462 = state_52415__$1;
(statearr_52435_52462[(2)] = inst_52398);

(statearr_52435_52462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52416 === (8))){
var inst_52375 = (state_52415[(7)]);
var inst_52383 = (state_52415[(10)]);
var inst_52379 = (state_52415[(9)]);
var inst_52388 = inst_52375.push(inst_52379);
var tmp52432 = inst_52375;
var inst_52375__$1 = tmp52432;
var inst_52376 = inst_52383;
var state_52415__$1 = (function (){var statearr_52436 = state_52415;
(statearr_52436[(14)] = inst_52388);

(statearr_52436[(7)] = inst_52375__$1);

(statearr_52436[(8)] = inst_52376);

return statearr_52436;
})();
var statearr_52437_52463 = state_52415__$1;
(statearr_52437_52463[(2)] = null);

(statearr_52437_52463[(1)] = (2));


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
});})(c__22273__auto___52449,out))
;
return ((function (switch__22208__auto__,c__22273__auto___52449,out){
return (function() {
var cljs$core$async$state_machine__22209__auto__ = null;
var cljs$core$async$state_machine__22209__auto____0 = (function (){
var statearr_52441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52441[(0)] = cljs$core$async$state_machine__22209__auto__);

(statearr_52441[(1)] = (1));

return statearr_52441;
});
var cljs$core$async$state_machine__22209__auto____1 = (function (state_52415){
while(true){
var ret_value__22210__auto__ = (function (){try{while(true){
var result__22211__auto__ = switch__22208__auto__.call(null,state_52415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22211__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22211__auto__;
}
break;
}
}catch (e52442){if((e52442 instanceof Object)){
var ex__22212__auto__ = e52442;
var statearr_52443_52464 = state_52415;
(statearr_52443_52464[(5)] = ex__22212__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22210__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52465 = state_52415;
state_52415 = G__52465;
continue;
} else {
return ret_value__22210__auto__;
}
break;
}
});
cljs$core$async$state_machine__22209__auto__ = function(state_52415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22209__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22209__auto____1.call(this,state_52415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22209__auto____0;
cljs$core$async$state_machine__22209__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22209__auto____1;
return cljs$core$async$state_machine__22209__auto__;
})()
;})(switch__22208__auto__,c__22273__auto___52449,out))
})();
var state__22275__auto__ = (function (){var statearr_52444 = f__22274__auto__.call(null);
(statearr_52444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22273__auto___52449);

return statearr_52444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22275__auto__);
});})(c__22273__auto___52449,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
