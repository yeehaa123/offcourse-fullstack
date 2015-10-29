// Compiled by ClojureScript 1.7.145 {}
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react');
/**
 * Return a DOM node constructor function. The argument may be any
 *   value accepted by React.createElement (that is, the string name of a
 *   HTML tag, or an instance of ReactClass).
 * 
 *   Returns a function that takes props and children (the same as the
 *   built-in ReactJS element constructors).
 */
quiescent.dom.constructor = (function quiescent$dom$constructor(type){
return (function() { 
var G__30222__delegate = function (props,children){
return cljs.core.apply.call(null,React.createElement,type,cljs.core.clj__GT_js.call(null,props),children);
};
var G__30222 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__30223__i = 0, G__30223__a = new Array(arguments.length -  1);
while (G__30223__i < G__30223__a.length) {G__30223__a[G__30223__i] = arguments[G__30223__i + 1]; ++G__30223__i;}
  children = new cljs.core.IndexedSeq(G__30223__a,0);
} 
return G__30222__delegate.call(this,props,children);};
G__30222.cljs$lang$maxFixedArity = 1;
G__30222.cljs$lang$applyTo = (function (arglist__30224){
var props = cljs.core.first(arglist__30224);
var children = cljs.core.rest(arglist__30224);
return G__30222__delegate(props,children);
});
G__30222.cljs$core$IFn$_invoke$arity$variadic = G__30222__delegate;
return G__30222;
})()
;
});
var ctor__24572__auto___30344 = quiescent.dom.constructor.call(null,"a");
quiescent.dom.a = ((function (ctor__24572__auto___30344){
return (function quiescent$dom$a(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30345 = arguments.length;
var i__20221__auto___30346 = (0);
while(true){
if((i__20221__auto___30346 < len__20220__auto___30345)){
args__20227__auto__.push((arguments[i__20221__auto___30346]));

var G__30347 = (i__20221__auto___30346 + (1));
i__20221__auto___30346 = G__30347;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30344))
;

quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30344){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30344,args__24573__auto__);
});})(ctor__24572__auto___30344))
;

quiescent.dom.a.cljs$lang$maxFixedArity = (0);

quiescent.dom.a.cljs$lang$applyTo = ((function (ctor__24572__auto___30344){
return (function (seq30225){
return quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30225));
});})(ctor__24572__auto___30344))
;

var ctor__24572__auto___30348 = quiescent.dom.constructor.call(null,"abbr");
quiescent.dom.abbr = ((function (ctor__24572__auto___30348){
return (function quiescent$dom$abbr(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30349 = arguments.length;
var i__20221__auto___30350 = (0);
while(true){
if((i__20221__auto___30350 < len__20220__auto___30349)){
args__20227__auto__.push((arguments[i__20221__auto___30350]));

var G__30351 = (i__20221__auto___30350 + (1));
i__20221__auto___30350 = G__30351;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30348))
;

quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30348){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30348,args__24573__auto__);
});})(ctor__24572__auto___30348))
;

quiescent.dom.abbr.cljs$lang$maxFixedArity = (0);

quiescent.dom.abbr.cljs$lang$applyTo = ((function (ctor__24572__auto___30348){
return (function (seq30226){
return quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30226));
});})(ctor__24572__auto___30348))
;

var ctor__24572__auto___30352 = quiescent.dom.constructor.call(null,"address");
quiescent.dom.address = ((function (ctor__24572__auto___30352){
return (function quiescent$dom$address(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30353 = arguments.length;
var i__20221__auto___30354 = (0);
while(true){
if((i__20221__auto___30354 < len__20220__auto___30353)){
args__20227__auto__.push((arguments[i__20221__auto___30354]));

var G__30355 = (i__20221__auto___30354 + (1));
i__20221__auto___30354 = G__30355;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30352))
;

quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30352){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30352,args__24573__auto__);
});})(ctor__24572__auto___30352))
;

quiescent.dom.address.cljs$lang$maxFixedArity = (0);

quiescent.dom.address.cljs$lang$applyTo = ((function (ctor__24572__auto___30352){
return (function (seq30227){
return quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30227));
});})(ctor__24572__auto___30352))
;

var ctor__24572__auto___30356 = quiescent.dom.constructor.call(null,"area");
quiescent.dom.area = ((function (ctor__24572__auto___30356){
return (function quiescent$dom$area(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30357 = arguments.length;
var i__20221__auto___30358 = (0);
while(true){
if((i__20221__auto___30358 < len__20220__auto___30357)){
args__20227__auto__.push((arguments[i__20221__auto___30358]));

var G__30359 = (i__20221__auto___30358 + (1));
i__20221__auto___30358 = G__30359;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30356))
;

quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30356){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30356,args__24573__auto__);
});})(ctor__24572__auto___30356))
;

quiescent.dom.area.cljs$lang$maxFixedArity = (0);

quiescent.dom.area.cljs$lang$applyTo = ((function (ctor__24572__auto___30356){
return (function (seq30228){
return quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30228));
});})(ctor__24572__auto___30356))
;

var ctor__24572__auto___30360 = quiescent.dom.constructor.call(null,"article");
quiescent.dom.article = ((function (ctor__24572__auto___30360){
return (function quiescent$dom$article(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30361 = arguments.length;
var i__20221__auto___30362 = (0);
while(true){
if((i__20221__auto___30362 < len__20220__auto___30361)){
args__20227__auto__.push((arguments[i__20221__auto___30362]));

var G__30363 = (i__20221__auto___30362 + (1));
i__20221__auto___30362 = G__30363;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30360))
;

quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30360){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30360,args__24573__auto__);
});})(ctor__24572__auto___30360))
;

quiescent.dom.article.cljs$lang$maxFixedArity = (0);

quiescent.dom.article.cljs$lang$applyTo = ((function (ctor__24572__auto___30360){
return (function (seq30229){
return quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30229));
});})(ctor__24572__auto___30360))
;

var ctor__24572__auto___30364 = quiescent.dom.constructor.call(null,"aside");
quiescent.dom.aside = ((function (ctor__24572__auto___30364){
return (function quiescent$dom$aside(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30365 = arguments.length;
var i__20221__auto___30366 = (0);
while(true){
if((i__20221__auto___30366 < len__20220__auto___30365)){
args__20227__auto__.push((arguments[i__20221__auto___30366]));

var G__30367 = (i__20221__auto___30366 + (1));
i__20221__auto___30366 = G__30367;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30364))
;

quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30364){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30364,args__24573__auto__);
});})(ctor__24572__auto___30364))
;

quiescent.dom.aside.cljs$lang$maxFixedArity = (0);

quiescent.dom.aside.cljs$lang$applyTo = ((function (ctor__24572__auto___30364){
return (function (seq30230){
return quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30230));
});})(ctor__24572__auto___30364))
;

var ctor__24572__auto___30368 = quiescent.dom.constructor.call(null,"audio");
quiescent.dom.audio = ((function (ctor__24572__auto___30368){
return (function quiescent$dom$audio(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30369 = arguments.length;
var i__20221__auto___30370 = (0);
while(true){
if((i__20221__auto___30370 < len__20220__auto___30369)){
args__20227__auto__.push((arguments[i__20221__auto___30370]));

var G__30371 = (i__20221__auto___30370 + (1));
i__20221__auto___30370 = G__30371;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30368))
;

quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30368){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30368,args__24573__auto__);
});})(ctor__24572__auto___30368))
;

quiescent.dom.audio.cljs$lang$maxFixedArity = (0);

quiescent.dom.audio.cljs$lang$applyTo = ((function (ctor__24572__auto___30368){
return (function (seq30231){
return quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30231));
});})(ctor__24572__auto___30368))
;

var ctor__24572__auto___30372 = quiescent.dom.constructor.call(null,"b");
quiescent.dom.b = ((function (ctor__24572__auto___30372){
return (function quiescent$dom$b(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30373 = arguments.length;
var i__20221__auto___30374 = (0);
while(true){
if((i__20221__auto___30374 < len__20220__auto___30373)){
args__20227__auto__.push((arguments[i__20221__auto___30374]));

var G__30375 = (i__20221__auto___30374 + (1));
i__20221__auto___30374 = G__30375;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30372))
;

quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30372){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30372,args__24573__auto__);
});})(ctor__24572__auto___30372))
;

quiescent.dom.b.cljs$lang$maxFixedArity = (0);

quiescent.dom.b.cljs$lang$applyTo = ((function (ctor__24572__auto___30372){
return (function (seq30232){
return quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30232));
});})(ctor__24572__auto___30372))
;

var ctor__24572__auto___30376 = quiescent.dom.constructor.call(null,"base");
quiescent.dom.base = ((function (ctor__24572__auto___30376){
return (function quiescent$dom$base(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30377 = arguments.length;
var i__20221__auto___30378 = (0);
while(true){
if((i__20221__auto___30378 < len__20220__auto___30377)){
args__20227__auto__.push((arguments[i__20221__auto___30378]));

var G__30379 = (i__20221__auto___30378 + (1));
i__20221__auto___30378 = G__30379;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30376))
;

quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30376){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30376,args__24573__auto__);
});})(ctor__24572__auto___30376))
;

quiescent.dom.base.cljs$lang$maxFixedArity = (0);

quiescent.dom.base.cljs$lang$applyTo = ((function (ctor__24572__auto___30376){
return (function (seq30233){
return quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30233));
});})(ctor__24572__auto___30376))
;

var ctor__24572__auto___30380 = quiescent.dom.constructor.call(null,"bdi");
quiescent.dom.bdi = ((function (ctor__24572__auto___30380){
return (function quiescent$dom$bdi(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30381 = arguments.length;
var i__20221__auto___30382 = (0);
while(true){
if((i__20221__auto___30382 < len__20220__auto___30381)){
args__20227__auto__.push((arguments[i__20221__auto___30382]));

var G__30383 = (i__20221__auto___30382 + (1));
i__20221__auto___30382 = G__30383;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30380))
;

quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30380){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30380,args__24573__auto__);
});})(ctor__24572__auto___30380))
;

quiescent.dom.bdi.cljs$lang$maxFixedArity = (0);

quiescent.dom.bdi.cljs$lang$applyTo = ((function (ctor__24572__auto___30380){
return (function (seq30234){
return quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30234));
});})(ctor__24572__auto___30380))
;

var ctor__24572__auto___30384 = quiescent.dom.constructor.call(null,"bdo");
quiescent.dom.bdo = ((function (ctor__24572__auto___30384){
return (function quiescent$dom$bdo(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30385 = arguments.length;
var i__20221__auto___30386 = (0);
while(true){
if((i__20221__auto___30386 < len__20220__auto___30385)){
args__20227__auto__.push((arguments[i__20221__auto___30386]));

var G__30387 = (i__20221__auto___30386 + (1));
i__20221__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30384))
;

quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30384){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30384,args__24573__auto__);
});})(ctor__24572__auto___30384))
;

quiescent.dom.bdo.cljs$lang$maxFixedArity = (0);

quiescent.dom.bdo.cljs$lang$applyTo = ((function (ctor__24572__auto___30384){
return (function (seq30235){
return quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30235));
});})(ctor__24572__auto___30384))
;

var ctor__24572__auto___30388 = quiescent.dom.constructor.call(null,"big");
quiescent.dom.big = ((function (ctor__24572__auto___30388){
return (function quiescent$dom$big(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30389 = arguments.length;
var i__20221__auto___30390 = (0);
while(true){
if((i__20221__auto___30390 < len__20220__auto___30389)){
args__20227__auto__.push((arguments[i__20221__auto___30390]));

var G__30391 = (i__20221__auto___30390 + (1));
i__20221__auto___30390 = G__30391;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30388))
;

quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30388){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30388,args__24573__auto__);
});})(ctor__24572__auto___30388))
;

quiescent.dom.big.cljs$lang$maxFixedArity = (0);

quiescent.dom.big.cljs$lang$applyTo = ((function (ctor__24572__auto___30388){
return (function (seq30236){
return quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30236));
});})(ctor__24572__auto___30388))
;

var ctor__24572__auto___30392 = quiescent.dom.constructor.call(null,"blockquote");
quiescent.dom.blockquote = ((function (ctor__24572__auto___30392){
return (function quiescent$dom$blockquote(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30393 = arguments.length;
var i__20221__auto___30394 = (0);
while(true){
if((i__20221__auto___30394 < len__20220__auto___30393)){
args__20227__auto__.push((arguments[i__20221__auto___30394]));

var G__30395 = (i__20221__auto___30394 + (1));
i__20221__auto___30394 = G__30395;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30392))
;

quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30392){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30392,args__24573__auto__);
});})(ctor__24572__auto___30392))
;

quiescent.dom.blockquote.cljs$lang$maxFixedArity = (0);

quiescent.dom.blockquote.cljs$lang$applyTo = ((function (ctor__24572__auto___30392){
return (function (seq30237){
return quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30237));
});})(ctor__24572__auto___30392))
;

var ctor__24572__auto___30396 = quiescent.dom.constructor.call(null,"body");
quiescent.dom.body = ((function (ctor__24572__auto___30396){
return (function quiescent$dom$body(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30397 = arguments.length;
var i__20221__auto___30398 = (0);
while(true){
if((i__20221__auto___30398 < len__20220__auto___30397)){
args__20227__auto__.push((arguments[i__20221__auto___30398]));

var G__30399 = (i__20221__auto___30398 + (1));
i__20221__auto___30398 = G__30399;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30396))
;

quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30396){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30396,args__24573__auto__);
});})(ctor__24572__auto___30396))
;

quiescent.dom.body.cljs$lang$maxFixedArity = (0);

quiescent.dom.body.cljs$lang$applyTo = ((function (ctor__24572__auto___30396){
return (function (seq30238){
return quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30238));
});})(ctor__24572__auto___30396))
;

var ctor__24572__auto___30400 = quiescent.dom.constructor.call(null,"br");
quiescent.dom.br = ((function (ctor__24572__auto___30400){
return (function quiescent$dom$br(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30401 = arguments.length;
var i__20221__auto___30402 = (0);
while(true){
if((i__20221__auto___30402 < len__20220__auto___30401)){
args__20227__auto__.push((arguments[i__20221__auto___30402]));

var G__30403 = (i__20221__auto___30402 + (1));
i__20221__auto___30402 = G__30403;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30400))
;

quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30400){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30400,args__24573__auto__);
});})(ctor__24572__auto___30400))
;

quiescent.dom.br.cljs$lang$maxFixedArity = (0);

quiescent.dom.br.cljs$lang$applyTo = ((function (ctor__24572__auto___30400){
return (function (seq30239){
return quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30239));
});})(ctor__24572__auto___30400))
;

var ctor__24572__auto___30404 = quiescent.dom.constructor.call(null,"button");
quiescent.dom.button = ((function (ctor__24572__auto___30404){
return (function quiescent$dom$button(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30405 = arguments.length;
var i__20221__auto___30406 = (0);
while(true){
if((i__20221__auto___30406 < len__20220__auto___30405)){
args__20227__auto__.push((arguments[i__20221__auto___30406]));

var G__30407 = (i__20221__auto___30406 + (1));
i__20221__auto___30406 = G__30407;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30404))
;

quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30404){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30404,args__24573__auto__);
});})(ctor__24572__auto___30404))
;

quiescent.dom.button.cljs$lang$maxFixedArity = (0);

quiescent.dom.button.cljs$lang$applyTo = ((function (ctor__24572__auto___30404){
return (function (seq30240){
return quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30240));
});})(ctor__24572__auto___30404))
;

var ctor__24572__auto___30408 = quiescent.dom.constructor.call(null,"canvas");
quiescent.dom.canvas = ((function (ctor__24572__auto___30408){
return (function quiescent$dom$canvas(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30409 = arguments.length;
var i__20221__auto___30410 = (0);
while(true){
if((i__20221__auto___30410 < len__20220__auto___30409)){
args__20227__auto__.push((arguments[i__20221__auto___30410]));

var G__30411 = (i__20221__auto___30410 + (1));
i__20221__auto___30410 = G__30411;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30408))
;

quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30408){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30408,args__24573__auto__);
});})(ctor__24572__auto___30408))
;

quiescent.dom.canvas.cljs$lang$maxFixedArity = (0);

quiescent.dom.canvas.cljs$lang$applyTo = ((function (ctor__24572__auto___30408){
return (function (seq30241){
return quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30241));
});})(ctor__24572__auto___30408))
;

var ctor__24572__auto___30412 = quiescent.dom.constructor.call(null,"caption");
quiescent.dom.caption = ((function (ctor__24572__auto___30412){
return (function quiescent$dom$caption(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30413 = arguments.length;
var i__20221__auto___30414 = (0);
while(true){
if((i__20221__auto___30414 < len__20220__auto___30413)){
args__20227__auto__.push((arguments[i__20221__auto___30414]));

var G__30415 = (i__20221__auto___30414 + (1));
i__20221__auto___30414 = G__30415;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30412))
;

quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30412){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30412,args__24573__auto__);
});})(ctor__24572__auto___30412))
;

quiescent.dom.caption.cljs$lang$maxFixedArity = (0);

quiescent.dom.caption.cljs$lang$applyTo = ((function (ctor__24572__auto___30412){
return (function (seq30242){
return quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30242));
});})(ctor__24572__auto___30412))
;

var ctor__24572__auto___30416 = quiescent.dom.constructor.call(null,"cite");
quiescent.dom.cite = ((function (ctor__24572__auto___30416){
return (function quiescent$dom$cite(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30417 = arguments.length;
var i__20221__auto___30418 = (0);
while(true){
if((i__20221__auto___30418 < len__20220__auto___30417)){
args__20227__auto__.push((arguments[i__20221__auto___30418]));

var G__30419 = (i__20221__auto___30418 + (1));
i__20221__auto___30418 = G__30419;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30416))
;

quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30416){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30416,args__24573__auto__);
});})(ctor__24572__auto___30416))
;

quiescent.dom.cite.cljs$lang$maxFixedArity = (0);

quiescent.dom.cite.cljs$lang$applyTo = ((function (ctor__24572__auto___30416){
return (function (seq30243){
return quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30243));
});})(ctor__24572__auto___30416))
;

var ctor__24572__auto___30420 = quiescent.dom.constructor.call(null,"code");
quiescent.dom.code = ((function (ctor__24572__auto___30420){
return (function quiescent$dom$code(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30421 = arguments.length;
var i__20221__auto___30422 = (0);
while(true){
if((i__20221__auto___30422 < len__20220__auto___30421)){
args__20227__auto__.push((arguments[i__20221__auto___30422]));

var G__30423 = (i__20221__auto___30422 + (1));
i__20221__auto___30422 = G__30423;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30420))
;

quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30420){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30420,args__24573__auto__);
});})(ctor__24572__auto___30420))
;

quiescent.dom.code.cljs$lang$maxFixedArity = (0);

quiescent.dom.code.cljs$lang$applyTo = ((function (ctor__24572__auto___30420){
return (function (seq30244){
return quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30244));
});})(ctor__24572__auto___30420))
;

var ctor__24572__auto___30424 = quiescent.dom.constructor.call(null,"col");
quiescent.dom.col = ((function (ctor__24572__auto___30424){
return (function quiescent$dom$col(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30425 = arguments.length;
var i__20221__auto___30426 = (0);
while(true){
if((i__20221__auto___30426 < len__20220__auto___30425)){
args__20227__auto__.push((arguments[i__20221__auto___30426]));

var G__30427 = (i__20221__auto___30426 + (1));
i__20221__auto___30426 = G__30427;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30424))
;

quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30424){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30424,args__24573__auto__);
});})(ctor__24572__auto___30424))
;

quiescent.dom.col.cljs$lang$maxFixedArity = (0);

quiescent.dom.col.cljs$lang$applyTo = ((function (ctor__24572__auto___30424){
return (function (seq30245){
return quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30245));
});})(ctor__24572__auto___30424))
;

var ctor__24572__auto___30428 = quiescent.dom.constructor.call(null,"colgroup");
quiescent.dom.colgroup = ((function (ctor__24572__auto___30428){
return (function quiescent$dom$colgroup(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30429 = arguments.length;
var i__20221__auto___30430 = (0);
while(true){
if((i__20221__auto___30430 < len__20220__auto___30429)){
args__20227__auto__.push((arguments[i__20221__auto___30430]));

var G__30431 = (i__20221__auto___30430 + (1));
i__20221__auto___30430 = G__30431;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30428))
;

quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30428){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30428,args__24573__auto__);
});})(ctor__24572__auto___30428))
;

quiescent.dom.colgroup.cljs$lang$maxFixedArity = (0);

quiescent.dom.colgroup.cljs$lang$applyTo = ((function (ctor__24572__auto___30428){
return (function (seq30246){
return quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30246));
});})(ctor__24572__auto___30428))
;

var ctor__24572__auto___30432 = quiescent.dom.constructor.call(null,"data");
quiescent.dom.data = ((function (ctor__24572__auto___30432){
return (function quiescent$dom$data(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30433 = arguments.length;
var i__20221__auto___30434 = (0);
while(true){
if((i__20221__auto___30434 < len__20220__auto___30433)){
args__20227__auto__.push((arguments[i__20221__auto___30434]));

var G__30435 = (i__20221__auto___30434 + (1));
i__20221__auto___30434 = G__30435;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30432))
;

quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30432){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30432,args__24573__auto__);
});})(ctor__24572__auto___30432))
;

quiescent.dom.data.cljs$lang$maxFixedArity = (0);

quiescent.dom.data.cljs$lang$applyTo = ((function (ctor__24572__auto___30432){
return (function (seq30247){
return quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30247));
});})(ctor__24572__auto___30432))
;

var ctor__24572__auto___30436 = quiescent.dom.constructor.call(null,"datalist");
quiescent.dom.datalist = ((function (ctor__24572__auto___30436){
return (function quiescent$dom$datalist(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30437 = arguments.length;
var i__20221__auto___30438 = (0);
while(true){
if((i__20221__auto___30438 < len__20220__auto___30437)){
args__20227__auto__.push((arguments[i__20221__auto___30438]));

var G__30439 = (i__20221__auto___30438 + (1));
i__20221__auto___30438 = G__30439;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30436))
;

quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30436){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30436,args__24573__auto__);
});})(ctor__24572__auto___30436))
;

quiescent.dom.datalist.cljs$lang$maxFixedArity = (0);

quiescent.dom.datalist.cljs$lang$applyTo = ((function (ctor__24572__auto___30436){
return (function (seq30248){
return quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30248));
});})(ctor__24572__auto___30436))
;

var ctor__24572__auto___30440 = quiescent.dom.constructor.call(null,"dd");
quiescent.dom.dd = ((function (ctor__24572__auto___30440){
return (function quiescent$dom$dd(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30441 = arguments.length;
var i__20221__auto___30442 = (0);
while(true){
if((i__20221__auto___30442 < len__20220__auto___30441)){
args__20227__auto__.push((arguments[i__20221__auto___30442]));

var G__30443 = (i__20221__auto___30442 + (1));
i__20221__auto___30442 = G__30443;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30440))
;

quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30440){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30440,args__24573__auto__);
});})(ctor__24572__auto___30440))
;

quiescent.dom.dd.cljs$lang$maxFixedArity = (0);

quiescent.dom.dd.cljs$lang$applyTo = ((function (ctor__24572__auto___30440){
return (function (seq30249){
return quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30249));
});})(ctor__24572__auto___30440))
;

var ctor__24572__auto___30444 = quiescent.dom.constructor.call(null,"del");
quiescent.dom.del = ((function (ctor__24572__auto___30444){
return (function quiescent$dom$del(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30445 = arguments.length;
var i__20221__auto___30446 = (0);
while(true){
if((i__20221__auto___30446 < len__20220__auto___30445)){
args__20227__auto__.push((arguments[i__20221__auto___30446]));

var G__30447 = (i__20221__auto___30446 + (1));
i__20221__auto___30446 = G__30447;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30444))
;

quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30444){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30444,args__24573__auto__);
});})(ctor__24572__auto___30444))
;

quiescent.dom.del.cljs$lang$maxFixedArity = (0);

quiescent.dom.del.cljs$lang$applyTo = ((function (ctor__24572__auto___30444){
return (function (seq30250){
return quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30250));
});})(ctor__24572__auto___30444))
;

var ctor__24572__auto___30448 = quiescent.dom.constructor.call(null,"details");
quiescent.dom.details = ((function (ctor__24572__auto___30448){
return (function quiescent$dom$details(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30449 = arguments.length;
var i__20221__auto___30450 = (0);
while(true){
if((i__20221__auto___30450 < len__20220__auto___30449)){
args__20227__auto__.push((arguments[i__20221__auto___30450]));

var G__30451 = (i__20221__auto___30450 + (1));
i__20221__auto___30450 = G__30451;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30448))
;

quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30448){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30448,args__24573__auto__);
});})(ctor__24572__auto___30448))
;

quiescent.dom.details.cljs$lang$maxFixedArity = (0);

quiescent.dom.details.cljs$lang$applyTo = ((function (ctor__24572__auto___30448){
return (function (seq30251){
return quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30251));
});})(ctor__24572__auto___30448))
;

var ctor__24572__auto___30452 = quiescent.dom.constructor.call(null,"dfn");
quiescent.dom.dfn = ((function (ctor__24572__auto___30452){
return (function quiescent$dom$dfn(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30453 = arguments.length;
var i__20221__auto___30454 = (0);
while(true){
if((i__20221__auto___30454 < len__20220__auto___30453)){
args__20227__auto__.push((arguments[i__20221__auto___30454]));

var G__30455 = (i__20221__auto___30454 + (1));
i__20221__auto___30454 = G__30455;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30452))
;

quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30452){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30452,args__24573__auto__);
});})(ctor__24572__auto___30452))
;

quiescent.dom.dfn.cljs$lang$maxFixedArity = (0);

quiescent.dom.dfn.cljs$lang$applyTo = ((function (ctor__24572__auto___30452){
return (function (seq30252){
return quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30252));
});})(ctor__24572__auto___30452))
;

var ctor__24572__auto___30456 = quiescent.dom.constructor.call(null,"div");
quiescent.dom.div = ((function (ctor__24572__auto___30456){
return (function quiescent$dom$div(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30457 = arguments.length;
var i__20221__auto___30458 = (0);
while(true){
if((i__20221__auto___30458 < len__20220__auto___30457)){
args__20227__auto__.push((arguments[i__20221__auto___30458]));

var G__30459 = (i__20221__auto___30458 + (1));
i__20221__auto___30458 = G__30459;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30456))
;

quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30456){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30456,args__24573__auto__);
});})(ctor__24572__auto___30456))
;

quiescent.dom.div.cljs$lang$maxFixedArity = (0);

quiescent.dom.div.cljs$lang$applyTo = ((function (ctor__24572__auto___30456){
return (function (seq30253){
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30253));
});})(ctor__24572__auto___30456))
;

var ctor__24572__auto___30460 = quiescent.dom.constructor.call(null,"dl");
quiescent.dom.dl = ((function (ctor__24572__auto___30460){
return (function quiescent$dom$dl(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30461 = arguments.length;
var i__20221__auto___30462 = (0);
while(true){
if((i__20221__auto___30462 < len__20220__auto___30461)){
args__20227__auto__.push((arguments[i__20221__auto___30462]));

var G__30463 = (i__20221__auto___30462 + (1));
i__20221__auto___30462 = G__30463;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30460))
;

quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30460){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30460,args__24573__auto__);
});})(ctor__24572__auto___30460))
;

quiescent.dom.dl.cljs$lang$maxFixedArity = (0);

quiescent.dom.dl.cljs$lang$applyTo = ((function (ctor__24572__auto___30460){
return (function (seq30254){
return quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30254));
});})(ctor__24572__auto___30460))
;

var ctor__24572__auto___30464 = quiescent.dom.constructor.call(null,"dt");
quiescent.dom.dt = ((function (ctor__24572__auto___30464){
return (function quiescent$dom$dt(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30465 = arguments.length;
var i__20221__auto___30466 = (0);
while(true){
if((i__20221__auto___30466 < len__20220__auto___30465)){
args__20227__auto__.push((arguments[i__20221__auto___30466]));

var G__30467 = (i__20221__auto___30466 + (1));
i__20221__auto___30466 = G__30467;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30464))
;

quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30464){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30464,args__24573__auto__);
});})(ctor__24572__auto___30464))
;

quiescent.dom.dt.cljs$lang$maxFixedArity = (0);

quiescent.dom.dt.cljs$lang$applyTo = ((function (ctor__24572__auto___30464){
return (function (seq30255){
return quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30255));
});})(ctor__24572__auto___30464))
;

var ctor__24572__auto___30468 = quiescent.dom.constructor.call(null,"em");
quiescent.dom.em = ((function (ctor__24572__auto___30468){
return (function quiescent$dom$em(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30469 = arguments.length;
var i__20221__auto___30470 = (0);
while(true){
if((i__20221__auto___30470 < len__20220__auto___30469)){
args__20227__auto__.push((arguments[i__20221__auto___30470]));

var G__30471 = (i__20221__auto___30470 + (1));
i__20221__auto___30470 = G__30471;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30468))
;

quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30468){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30468,args__24573__auto__);
});})(ctor__24572__auto___30468))
;

quiescent.dom.em.cljs$lang$maxFixedArity = (0);

quiescent.dom.em.cljs$lang$applyTo = ((function (ctor__24572__auto___30468){
return (function (seq30256){
return quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30256));
});})(ctor__24572__auto___30468))
;

var ctor__24572__auto___30472 = quiescent.dom.constructor.call(null,"embed");
quiescent.dom.embed = ((function (ctor__24572__auto___30472){
return (function quiescent$dom$embed(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30473 = arguments.length;
var i__20221__auto___30474 = (0);
while(true){
if((i__20221__auto___30474 < len__20220__auto___30473)){
args__20227__auto__.push((arguments[i__20221__auto___30474]));

var G__30475 = (i__20221__auto___30474 + (1));
i__20221__auto___30474 = G__30475;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30472))
;

quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30472){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30472,args__24573__auto__);
});})(ctor__24572__auto___30472))
;

quiescent.dom.embed.cljs$lang$maxFixedArity = (0);

quiescent.dom.embed.cljs$lang$applyTo = ((function (ctor__24572__auto___30472){
return (function (seq30258){
return quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30258));
});})(ctor__24572__auto___30472))
;

var ctor__24572__auto___30476 = quiescent.dom.constructor.call(null,"fieldset");
quiescent.dom.fieldset = ((function (ctor__24572__auto___30476){
return (function quiescent$dom$fieldset(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30477 = arguments.length;
var i__20221__auto___30478 = (0);
while(true){
if((i__20221__auto___30478 < len__20220__auto___30477)){
args__20227__auto__.push((arguments[i__20221__auto___30478]));

var G__30479 = (i__20221__auto___30478 + (1));
i__20221__auto___30478 = G__30479;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30476))
;

quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30476){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30476,args__24573__auto__);
});})(ctor__24572__auto___30476))
;

quiescent.dom.fieldset.cljs$lang$maxFixedArity = (0);

quiescent.dom.fieldset.cljs$lang$applyTo = ((function (ctor__24572__auto___30476){
return (function (seq30259){
return quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30259));
});})(ctor__24572__auto___30476))
;

var ctor__24572__auto___30480 = quiescent.dom.constructor.call(null,"figcaption");
quiescent.dom.figcaption = ((function (ctor__24572__auto___30480){
return (function quiescent$dom$figcaption(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30481 = arguments.length;
var i__20221__auto___30482 = (0);
while(true){
if((i__20221__auto___30482 < len__20220__auto___30481)){
args__20227__auto__.push((arguments[i__20221__auto___30482]));

var G__30483 = (i__20221__auto___30482 + (1));
i__20221__auto___30482 = G__30483;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30480))
;

quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30480){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30480,args__24573__auto__);
});})(ctor__24572__auto___30480))
;

quiescent.dom.figcaption.cljs$lang$maxFixedArity = (0);

quiescent.dom.figcaption.cljs$lang$applyTo = ((function (ctor__24572__auto___30480){
return (function (seq30260){
return quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30260));
});})(ctor__24572__auto___30480))
;

var ctor__24572__auto___30484 = quiescent.dom.constructor.call(null,"figure");
quiescent.dom.figure = ((function (ctor__24572__auto___30484){
return (function quiescent$dom$figure(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30485 = arguments.length;
var i__20221__auto___30486 = (0);
while(true){
if((i__20221__auto___30486 < len__20220__auto___30485)){
args__20227__auto__.push((arguments[i__20221__auto___30486]));

var G__30487 = (i__20221__auto___30486 + (1));
i__20221__auto___30486 = G__30487;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30484))
;

quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30484){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30484,args__24573__auto__);
});})(ctor__24572__auto___30484))
;

quiescent.dom.figure.cljs$lang$maxFixedArity = (0);

quiescent.dom.figure.cljs$lang$applyTo = ((function (ctor__24572__auto___30484){
return (function (seq30261){
return quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30261));
});})(ctor__24572__auto___30484))
;

var ctor__24572__auto___30488 = quiescent.dom.constructor.call(null,"footer");
quiescent.dom.footer = ((function (ctor__24572__auto___30488){
return (function quiescent$dom$footer(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30489 = arguments.length;
var i__20221__auto___30490 = (0);
while(true){
if((i__20221__auto___30490 < len__20220__auto___30489)){
args__20227__auto__.push((arguments[i__20221__auto___30490]));

var G__30491 = (i__20221__auto___30490 + (1));
i__20221__auto___30490 = G__30491;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30488))
;

quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30488){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30488,args__24573__auto__);
});})(ctor__24572__auto___30488))
;

quiescent.dom.footer.cljs$lang$maxFixedArity = (0);

quiescent.dom.footer.cljs$lang$applyTo = ((function (ctor__24572__auto___30488){
return (function (seq30262){
return quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30262));
});})(ctor__24572__auto___30488))
;

var ctor__24572__auto___30492 = quiescent.dom.constructor.call(null,"form");
quiescent.dom.form = ((function (ctor__24572__auto___30492){
return (function quiescent$dom$form(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30493 = arguments.length;
var i__20221__auto___30494 = (0);
while(true){
if((i__20221__auto___30494 < len__20220__auto___30493)){
args__20227__auto__.push((arguments[i__20221__auto___30494]));

var G__30495 = (i__20221__auto___30494 + (1));
i__20221__auto___30494 = G__30495;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30492))
;

quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30492){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30492,args__24573__auto__);
});})(ctor__24572__auto___30492))
;

quiescent.dom.form.cljs$lang$maxFixedArity = (0);

quiescent.dom.form.cljs$lang$applyTo = ((function (ctor__24572__auto___30492){
return (function (seq30263){
return quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30263));
});})(ctor__24572__auto___30492))
;

var ctor__24572__auto___30496 = quiescent.dom.constructor.call(null,"h1");
quiescent.dom.h1 = ((function (ctor__24572__auto___30496){
return (function quiescent$dom$h1(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30497 = arguments.length;
var i__20221__auto___30498 = (0);
while(true){
if((i__20221__auto___30498 < len__20220__auto___30497)){
args__20227__auto__.push((arguments[i__20221__auto___30498]));

var G__30499 = (i__20221__auto___30498 + (1));
i__20221__auto___30498 = G__30499;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30496))
;

quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30496){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30496,args__24573__auto__);
});})(ctor__24572__auto___30496))
;

quiescent.dom.h1.cljs$lang$maxFixedArity = (0);

quiescent.dom.h1.cljs$lang$applyTo = ((function (ctor__24572__auto___30496){
return (function (seq30264){
return quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30264));
});})(ctor__24572__auto___30496))
;

var ctor__24572__auto___30500 = quiescent.dom.constructor.call(null,"h2");
quiescent.dom.h2 = ((function (ctor__24572__auto___30500){
return (function quiescent$dom$h2(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30501 = arguments.length;
var i__20221__auto___30502 = (0);
while(true){
if((i__20221__auto___30502 < len__20220__auto___30501)){
args__20227__auto__.push((arguments[i__20221__auto___30502]));

var G__30503 = (i__20221__auto___30502 + (1));
i__20221__auto___30502 = G__30503;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30500))
;

quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30500){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30500,args__24573__auto__);
});})(ctor__24572__auto___30500))
;

quiescent.dom.h2.cljs$lang$maxFixedArity = (0);

quiescent.dom.h2.cljs$lang$applyTo = ((function (ctor__24572__auto___30500){
return (function (seq30265){
return quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30265));
});})(ctor__24572__auto___30500))
;

var ctor__24572__auto___30504 = quiescent.dom.constructor.call(null,"h3");
quiescent.dom.h3 = ((function (ctor__24572__auto___30504){
return (function quiescent$dom$h3(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30505 = arguments.length;
var i__20221__auto___30506 = (0);
while(true){
if((i__20221__auto___30506 < len__20220__auto___30505)){
args__20227__auto__.push((arguments[i__20221__auto___30506]));

var G__30507 = (i__20221__auto___30506 + (1));
i__20221__auto___30506 = G__30507;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30504))
;

quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30504){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30504,args__24573__auto__);
});})(ctor__24572__auto___30504))
;

quiescent.dom.h3.cljs$lang$maxFixedArity = (0);

quiescent.dom.h3.cljs$lang$applyTo = ((function (ctor__24572__auto___30504){
return (function (seq30266){
return quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30266));
});})(ctor__24572__auto___30504))
;

var ctor__24572__auto___30508 = quiescent.dom.constructor.call(null,"h4");
quiescent.dom.h4 = ((function (ctor__24572__auto___30508){
return (function quiescent$dom$h4(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30509 = arguments.length;
var i__20221__auto___30510 = (0);
while(true){
if((i__20221__auto___30510 < len__20220__auto___30509)){
args__20227__auto__.push((arguments[i__20221__auto___30510]));

var G__30511 = (i__20221__auto___30510 + (1));
i__20221__auto___30510 = G__30511;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30508))
;

quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30508){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30508,args__24573__auto__);
});})(ctor__24572__auto___30508))
;

quiescent.dom.h4.cljs$lang$maxFixedArity = (0);

quiescent.dom.h4.cljs$lang$applyTo = ((function (ctor__24572__auto___30508){
return (function (seq30267){
return quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30267));
});})(ctor__24572__auto___30508))
;

var ctor__24572__auto___30512 = quiescent.dom.constructor.call(null,"h5");
quiescent.dom.h5 = ((function (ctor__24572__auto___30512){
return (function quiescent$dom$h5(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30513 = arguments.length;
var i__20221__auto___30514 = (0);
while(true){
if((i__20221__auto___30514 < len__20220__auto___30513)){
args__20227__auto__.push((arguments[i__20221__auto___30514]));

var G__30515 = (i__20221__auto___30514 + (1));
i__20221__auto___30514 = G__30515;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30512))
;

quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30512){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30512,args__24573__auto__);
});})(ctor__24572__auto___30512))
;

quiescent.dom.h5.cljs$lang$maxFixedArity = (0);

quiescent.dom.h5.cljs$lang$applyTo = ((function (ctor__24572__auto___30512){
return (function (seq30268){
return quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30268));
});})(ctor__24572__auto___30512))
;

var ctor__24572__auto___30516 = quiescent.dom.constructor.call(null,"h6");
quiescent.dom.h6 = ((function (ctor__24572__auto___30516){
return (function quiescent$dom$h6(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30517 = arguments.length;
var i__20221__auto___30518 = (0);
while(true){
if((i__20221__auto___30518 < len__20220__auto___30517)){
args__20227__auto__.push((arguments[i__20221__auto___30518]));

var G__30519 = (i__20221__auto___30518 + (1));
i__20221__auto___30518 = G__30519;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30516))
;

quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30516){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30516,args__24573__auto__);
});})(ctor__24572__auto___30516))
;

quiescent.dom.h6.cljs$lang$maxFixedArity = (0);

quiescent.dom.h6.cljs$lang$applyTo = ((function (ctor__24572__auto___30516){
return (function (seq30269){
return quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30269));
});})(ctor__24572__auto___30516))
;

var ctor__24572__auto___30520 = quiescent.dom.constructor.call(null,"head");
quiescent.dom.head = ((function (ctor__24572__auto___30520){
return (function quiescent$dom$head(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30521 = arguments.length;
var i__20221__auto___30522 = (0);
while(true){
if((i__20221__auto___30522 < len__20220__auto___30521)){
args__20227__auto__.push((arguments[i__20221__auto___30522]));

var G__30523 = (i__20221__auto___30522 + (1));
i__20221__auto___30522 = G__30523;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30520))
;

quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30520){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30520,args__24573__auto__);
});})(ctor__24572__auto___30520))
;

quiescent.dom.head.cljs$lang$maxFixedArity = (0);

quiescent.dom.head.cljs$lang$applyTo = ((function (ctor__24572__auto___30520){
return (function (seq30270){
return quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30270));
});})(ctor__24572__auto___30520))
;

var ctor__24572__auto___30524 = quiescent.dom.constructor.call(null,"header");
quiescent.dom.header = ((function (ctor__24572__auto___30524){
return (function quiescent$dom$header(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30525 = arguments.length;
var i__20221__auto___30526 = (0);
while(true){
if((i__20221__auto___30526 < len__20220__auto___30525)){
args__20227__auto__.push((arguments[i__20221__auto___30526]));

var G__30527 = (i__20221__auto___30526 + (1));
i__20221__auto___30526 = G__30527;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30524))
;

quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30524){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30524,args__24573__auto__);
});})(ctor__24572__auto___30524))
;

quiescent.dom.header.cljs$lang$maxFixedArity = (0);

quiescent.dom.header.cljs$lang$applyTo = ((function (ctor__24572__auto___30524){
return (function (seq30271){
return quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30271));
});})(ctor__24572__auto___30524))
;

var ctor__24572__auto___30528 = quiescent.dom.constructor.call(null,"hr");
quiescent.dom.hr = ((function (ctor__24572__auto___30528){
return (function quiescent$dom$hr(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30529 = arguments.length;
var i__20221__auto___30530 = (0);
while(true){
if((i__20221__auto___30530 < len__20220__auto___30529)){
args__20227__auto__.push((arguments[i__20221__auto___30530]));

var G__30531 = (i__20221__auto___30530 + (1));
i__20221__auto___30530 = G__30531;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30528))
;

quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30528){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30528,args__24573__auto__);
});})(ctor__24572__auto___30528))
;

quiescent.dom.hr.cljs$lang$maxFixedArity = (0);

quiescent.dom.hr.cljs$lang$applyTo = ((function (ctor__24572__auto___30528){
return (function (seq30272){
return quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30272));
});})(ctor__24572__auto___30528))
;

var ctor__24572__auto___30532 = quiescent.dom.constructor.call(null,"html");
quiescent.dom.html = ((function (ctor__24572__auto___30532){
return (function quiescent$dom$html(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30533 = arguments.length;
var i__20221__auto___30534 = (0);
while(true){
if((i__20221__auto___30534 < len__20220__auto___30533)){
args__20227__auto__.push((arguments[i__20221__auto___30534]));

var G__30535 = (i__20221__auto___30534 + (1));
i__20221__auto___30534 = G__30535;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30532))
;

quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30532){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30532,args__24573__auto__);
});})(ctor__24572__auto___30532))
;

quiescent.dom.html.cljs$lang$maxFixedArity = (0);

quiescent.dom.html.cljs$lang$applyTo = ((function (ctor__24572__auto___30532){
return (function (seq30273){
return quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30273));
});})(ctor__24572__auto___30532))
;

var ctor__24572__auto___30536 = quiescent.dom.constructor.call(null,"i");
quiescent.dom.i = ((function (ctor__24572__auto___30536){
return (function quiescent$dom$i(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30537 = arguments.length;
var i__20221__auto___30538 = (0);
while(true){
if((i__20221__auto___30538 < len__20220__auto___30537)){
args__20227__auto__.push((arguments[i__20221__auto___30538]));

var G__30539 = (i__20221__auto___30538 + (1));
i__20221__auto___30538 = G__30539;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30536))
;

quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30536){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30536,args__24573__auto__);
});})(ctor__24572__auto___30536))
;

quiescent.dom.i.cljs$lang$maxFixedArity = (0);

quiescent.dom.i.cljs$lang$applyTo = ((function (ctor__24572__auto___30536){
return (function (seq30274){
return quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30274));
});})(ctor__24572__auto___30536))
;

var ctor__24572__auto___30540 = quiescent.dom.constructor.call(null,"iframe");
quiescent.dom.iframe = ((function (ctor__24572__auto___30540){
return (function quiescent$dom$iframe(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30541 = arguments.length;
var i__20221__auto___30542 = (0);
while(true){
if((i__20221__auto___30542 < len__20220__auto___30541)){
args__20227__auto__.push((arguments[i__20221__auto___30542]));

var G__30543 = (i__20221__auto___30542 + (1));
i__20221__auto___30542 = G__30543;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30540))
;

quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30540){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30540,args__24573__auto__);
});})(ctor__24572__auto___30540))
;

quiescent.dom.iframe.cljs$lang$maxFixedArity = (0);

quiescent.dom.iframe.cljs$lang$applyTo = ((function (ctor__24572__auto___30540){
return (function (seq30275){
return quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30275));
});})(ctor__24572__auto___30540))
;

var ctor__24572__auto___30544 = quiescent.dom.constructor.call(null,"img");
quiescent.dom.img = ((function (ctor__24572__auto___30544){
return (function quiescent$dom$img(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30545 = arguments.length;
var i__20221__auto___30546 = (0);
while(true){
if((i__20221__auto___30546 < len__20220__auto___30545)){
args__20227__auto__.push((arguments[i__20221__auto___30546]));

var G__30547 = (i__20221__auto___30546 + (1));
i__20221__auto___30546 = G__30547;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30544))
;

quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30544){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30544,args__24573__auto__);
});})(ctor__24572__auto___30544))
;

quiescent.dom.img.cljs$lang$maxFixedArity = (0);

quiescent.dom.img.cljs$lang$applyTo = ((function (ctor__24572__auto___30544){
return (function (seq30276){
return quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30276));
});})(ctor__24572__auto___30544))
;

var ctor__24572__auto___30548 = quiescent.dom.constructor.call(null,"input");
quiescent.dom.input = ((function (ctor__24572__auto___30548){
return (function quiescent$dom$input(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30549 = arguments.length;
var i__20221__auto___30550 = (0);
while(true){
if((i__20221__auto___30550 < len__20220__auto___30549)){
args__20227__auto__.push((arguments[i__20221__auto___30550]));

var G__30551 = (i__20221__auto___30550 + (1));
i__20221__auto___30550 = G__30551;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30548))
;

quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30548){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30548,args__24573__auto__);
});})(ctor__24572__auto___30548))
;

quiescent.dom.input.cljs$lang$maxFixedArity = (0);

quiescent.dom.input.cljs$lang$applyTo = ((function (ctor__24572__auto___30548){
return (function (seq30277){
return quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30277));
});})(ctor__24572__auto___30548))
;

var ctor__24572__auto___30552 = quiescent.dom.constructor.call(null,"ins");
quiescent.dom.ins = ((function (ctor__24572__auto___30552){
return (function quiescent$dom$ins(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30553 = arguments.length;
var i__20221__auto___30554 = (0);
while(true){
if((i__20221__auto___30554 < len__20220__auto___30553)){
args__20227__auto__.push((arguments[i__20221__auto___30554]));

var G__30555 = (i__20221__auto___30554 + (1));
i__20221__auto___30554 = G__30555;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30552))
;

quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30552){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30552,args__24573__auto__);
});})(ctor__24572__auto___30552))
;

quiescent.dom.ins.cljs$lang$maxFixedArity = (0);

quiescent.dom.ins.cljs$lang$applyTo = ((function (ctor__24572__auto___30552){
return (function (seq30278){
return quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30278));
});})(ctor__24572__auto___30552))
;

var ctor__24572__auto___30556 = quiescent.dom.constructor.call(null,"kbd");
quiescent.dom.kbd = ((function (ctor__24572__auto___30556){
return (function quiescent$dom$kbd(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30557 = arguments.length;
var i__20221__auto___30558 = (0);
while(true){
if((i__20221__auto___30558 < len__20220__auto___30557)){
args__20227__auto__.push((arguments[i__20221__auto___30558]));

var G__30559 = (i__20221__auto___30558 + (1));
i__20221__auto___30558 = G__30559;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30556))
;

quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30556){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30556,args__24573__auto__);
});})(ctor__24572__auto___30556))
;

quiescent.dom.kbd.cljs$lang$maxFixedArity = (0);

quiescent.dom.kbd.cljs$lang$applyTo = ((function (ctor__24572__auto___30556){
return (function (seq30279){
return quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30279));
});})(ctor__24572__auto___30556))
;

var ctor__24572__auto___30560 = quiescent.dom.constructor.call(null,"keygen");
quiescent.dom.keygen = ((function (ctor__24572__auto___30560){
return (function quiescent$dom$keygen(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30561 = arguments.length;
var i__20221__auto___30562 = (0);
while(true){
if((i__20221__auto___30562 < len__20220__auto___30561)){
args__20227__auto__.push((arguments[i__20221__auto___30562]));

var G__30563 = (i__20221__auto___30562 + (1));
i__20221__auto___30562 = G__30563;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30560))
;

quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30560){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30560,args__24573__auto__);
});})(ctor__24572__auto___30560))
;

quiescent.dom.keygen.cljs$lang$maxFixedArity = (0);

quiescent.dom.keygen.cljs$lang$applyTo = ((function (ctor__24572__auto___30560){
return (function (seq30280){
return quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30280));
});})(ctor__24572__auto___30560))
;

var ctor__24572__auto___30564 = quiescent.dom.constructor.call(null,"label");
quiescent.dom.label = ((function (ctor__24572__auto___30564){
return (function quiescent$dom$label(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30565 = arguments.length;
var i__20221__auto___30566 = (0);
while(true){
if((i__20221__auto___30566 < len__20220__auto___30565)){
args__20227__auto__.push((arguments[i__20221__auto___30566]));

var G__30567 = (i__20221__auto___30566 + (1));
i__20221__auto___30566 = G__30567;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30564))
;

quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30564){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30564,args__24573__auto__);
});})(ctor__24572__auto___30564))
;

quiescent.dom.label.cljs$lang$maxFixedArity = (0);

quiescent.dom.label.cljs$lang$applyTo = ((function (ctor__24572__auto___30564){
return (function (seq30281){
return quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30281));
});})(ctor__24572__auto___30564))
;

var ctor__24572__auto___30568 = quiescent.dom.constructor.call(null,"legend");
quiescent.dom.legend = ((function (ctor__24572__auto___30568){
return (function quiescent$dom$legend(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30569 = arguments.length;
var i__20221__auto___30570 = (0);
while(true){
if((i__20221__auto___30570 < len__20220__auto___30569)){
args__20227__auto__.push((arguments[i__20221__auto___30570]));

var G__30571 = (i__20221__auto___30570 + (1));
i__20221__auto___30570 = G__30571;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30568))
;

quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30568){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30568,args__24573__auto__);
});})(ctor__24572__auto___30568))
;

quiescent.dom.legend.cljs$lang$maxFixedArity = (0);

quiescent.dom.legend.cljs$lang$applyTo = ((function (ctor__24572__auto___30568){
return (function (seq30282){
return quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30282));
});})(ctor__24572__auto___30568))
;

var ctor__24572__auto___30572 = quiescent.dom.constructor.call(null,"li");
quiescent.dom.li = ((function (ctor__24572__auto___30572){
return (function quiescent$dom$li(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30573 = arguments.length;
var i__20221__auto___30574 = (0);
while(true){
if((i__20221__auto___30574 < len__20220__auto___30573)){
args__20227__auto__.push((arguments[i__20221__auto___30574]));

var G__30575 = (i__20221__auto___30574 + (1));
i__20221__auto___30574 = G__30575;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30572))
;

quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30572){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30572,args__24573__auto__);
});})(ctor__24572__auto___30572))
;

quiescent.dom.li.cljs$lang$maxFixedArity = (0);

quiescent.dom.li.cljs$lang$applyTo = ((function (ctor__24572__auto___30572){
return (function (seq30283){
return quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30283));
});})(ctor__24572__auto___30572))
;

var ctor__24572__auto___30576 = quiescent.dom.constructor.call(null,"link");
quiescent.dom.link = ((function (ctor__24572__auto___30576){
return (function quiescent$dom$link(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30577 = arguments.length;
var i__20221__auto___30578 = (0);
while(true){
if((i__20221__auto___30578 < len__20220__auto___30577)){
args__20227__auto__.push((arguments[i__20221__auto___30578]));

var G__30579 = (i__20221__auto___30578 + (1));
i__20221__auto___30578 = G__30579;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30576))
;

quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30576){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30576,args__24573__auto__);
});})(ctor__24572__auto___30576))
;

quiescent.dom.link.cljs$lang$maxFixedArity = (0);

quiescent.dom.link.cljs$lang$applyTo = ((function (ctor__24572__auto___30576){
return (function (seq30284){
return quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30284));
});})(ctor__24572__auto___30576))
;

var ctor__24572__auto___30580 = quiescent.dom.constructor.call(null,"main");
quiescent.dom.main = ((function (ctor__24572__auto___30580){
return (function quiescent$dom$main(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30581 = arguments.length;
var i__20221__auto___30582 = (0);
while(true){
if((i__20221__auto___30582 < len__20220__auto___30581)){
args__20227__auto__.push((arguments[i__20221__auto___30582]));

var G__30583 = (i__20221__auto___30582 + (1));
i__20221__auto___30582 = G__30583;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30580))
;

quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30580){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30580,args__24573__auto__);
});})(ctor__24572__auto___30580))
;

quiescent.dom.main.cljs$lang$maxFixedArity = (0);

quiescent.dom.main.cljs$lang$applyTo = ((function (ctor__24572__auto___30580){
return (function (seq30285){
return quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30285));
});})(ctor__24572__auto___30580))
;

var ctor__24572__auto___30584 = quiescent.dom.constructor.call(null,"map");
quiescent.dom.map = ((function (ctor__24572__auto___30584){
return (function quiescent$dom$map(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30585 = arguments.length;
var i__20221__auto___30586 = (0);
while(true){
if((i__20221__auto___30586 < len__20220__auto___30585)){
args__20227__auto__.push((arguments[i__20221__auto___30586]));

var G__30587 = (i__20221__auto___30586 + (1));
i__20221__auto___30586 = G__30587;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30584))
;

quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30584){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30584,args__24573__auto__);
});})(ctor__24572__auto___30584))
;

quiescent.dom.map.cljs$lang$maxFixedArity = (0);

quiescent.dom.map.cljs$lang$applyTo = ((function (ctor__24572__auto___30584){
return (function (seq30286){
return quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30286));
});})(ctor__24572__auto___30584))
;

var ctor__24572__auto___30588 = quiescent.dom.constructor.call(null,"mark");
quiescent.dom.mark = ((function (ctor__24572__auto___30588){
return (function quiescent$dom$mark(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30589 = arguments.length;
var i__20221__auto___30590 = (0);
while(true){
if((i__20221__auto___30590 < len__20220__auto___30589)){
args__20227__auto__.push((arguments[i__20221__auto___30590]));

var G__30591 = (i__20221__auto___30590 + (1));
i__20221__auto___30590 = G__30591;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30588))
;

quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30588){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30588,args__24573__auto__);
});})(ctor__24572__auto___30588))
;

quiescent.dom.mark.cljs$lang$maxFixedArity = (0);

quiescent.dom.mark.cljs$lang$applyTo = ((function (ctor__24572__auto___30588){
return (function (seq30287){
return quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30287));
});})(ctor__24572__auto___30588))
;

var ctor__24572__auto___30592 = quiescent.dom.constructor.call(null,"menu");
quiescent.dom.menu = ((function (ctor__24572__auto___30592){
return (function quiescent$dom$menu(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30593 = arguments.length;
var i__20221__auto___30594 = (0);
while(true){
if((i__20221__auto___30594 < len__20220__auto___30593)){
args__20227__auto__.push((arguments[i__20221__auto___30594]));

var G__30595 = (i__20221__auto___30594 + (1));
i__20221__auto___30594 = G__30595;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30592))
;

quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30592){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30592,args__24573__auto__);
});})(ctor__24572__auto___30592))
;

quiescent.dom.menu.cljs$lang$maxFixedArity = (0);

quiescent.dom.menu.cljs$lang$applyTo = ((function (ctor__24572__auto___30592){
return (function (seq30288){
return quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30288));
});})(ctor__24572__auto___30592))
;

var ctor__24572__auto___30596 = quiescent.dom.constructor.call(null,"menuitem");
quiescent.dom.menuitem = ((function (ctor__24572__auto___30596){
return (function quiescent$dom$menuitem(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30597 = arguments.length;
var i__20221__auto___30598 = (0);
while(true){
if((i__20221__auto___30598 < len__20220__auto___30597)){
args__20227__auto__.push((arguments[i__20221__auto___30598]));

var G__30599 = (i__20221__auto___30598 + (1));
i__20221__auto___30598 = G__30599;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30596))
;

quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30596){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30596,args__24573__auto__);
});})(ctor__24572__auto___30596))
;

quiescent.dom.menuitem.cljs$lang$maxFixedArity = (0);

quiescent.dom.menuitem.cljs$lang$applyTo = ((function (ctor__24572__auto___30596){
return (function (seq30289){
return quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30289));
});})(ctor__24572__auto___30596))
;

var ctor__24572__auto___30600 = quiescent.dom.constructor.call(null,"meta");
quiescent.dom.meta = ((function (ctor__24572__auto___30600){
return (function quiescent$dom$meta(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30601 = arguments.length;
var i__20221__auto___30602 = (0);
while(true){
if((i__20221__auto___30602 < len__20220__auto___30601)){
args__20227__auto__.push((arguments[i__20221__auto___30602]));

var G__30603 = (i__20221__auto___30602 + (1));
i__20221__auto___30602 = G__30603;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30600))
;

quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30600){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30600,args__24573__auto__);
});})(ctor__24572__auto___30600))
;

quiescent.dom.meta.cljs$lang$maxFixedArity = (0);

quiescent.dom.meta.cljs$lang$applyTo = ((function (ctor__24572__auto___30600){
return (function (seq30290){
return quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30290));
});})(ctor__24572__auto___30600))
;

var ctor__24572__auto___30604 = quiescent.dom.constructor.call(null,"meter");
quiescent.dom.meter = ((function (ctor__24572__auto___30604){
return (function quiescent$dom$meter(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30605 = arguments.length;
var i__20221__auto___30606 = (0);
while(true){
if((i__20221__auto___30606 < len__20220__auto___30605)){
args__20227__auto__.push((arguments[i__20221__auto___30606]));

var G__30607 = (i__20221__auto___30606 + (1));
i__20221__auto___30606 = G__30607;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30604))
;

quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30604){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30604,args__24573__auto__);
});})(ctor__24572__auto___30604))
;

quiescent.dom.meter.cljs$lang$maxFixedArity = (0);

quiescent.dom.meter.cljs$lang$applyTo = ((function (ctor__24572__auto___30604){
return (function (seq30291){
return quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30291));
});})(ctor__24572__auto___30604))
;

var ctor__24572__auto___30608 = quiescent.dom.constructor.call(null,"nav");
quiescent.dom.nav = ((function (ctor__24572__auto___30608){
return (function quiescent$dom$nav(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30609 = arguments.length;
var i__20221__auto___30610 = (0);
while(true){
if((i__20221__auto___30610 < len__20220__auto___30609)){
args__20227__auto__.push((arguments[i__20221__auto___30610]));

var G__30611 = (i__20221__auto___30610 + (1));
i__20221__auto___30610 = G__30611;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30608))
;

quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30608){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30608,args__24573__auto__);
});})(ctor__24572__auto___30608))
;

quiescent.dom.nav.cljs$lang$maxFixedArity = (0);

quiescent.dom.nav.cljs$lang$applyTo = ((function (ctor__24572__auto___30608){
return (function (seq30292){
return quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30292));
});})(ctor__24572__auto___30608))
;

var ctor__24572__auto___30612 = quiescent.dom.constructor.call(null,"noscript");
quiescent.dom.noscript = ((function (ctor__24572__auto___30612){
return (function quiescent$dom$noscript(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30613 = arguments.length;
var i__20221__auto___30614 = (0);
while(true){
if((i__20221__auto___30614 < len__20220__auto___30613)){
args__20227__auto__.push((arguments[i__20221__auto___30614]));

var G__30615 = (i__20221__auto___30614 + (1));
i__20221__auto___30614 = G__30615;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30612))
;

quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30612){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30612,args__24573__auto__);
});})(ctor__24572__auto___30612))
;

quiescent.dom.noscript.cljs$lang$maxFixedArity = (0);

quiescent.dom.noscript.cljs$lang$applyTo = ((function (ctor__24572__auto___30612){
return (function (seq30293){
return quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30293));
});})(ctor__24572__auto___30612))
;

var ctor__24572__auto___30616 = quiescent.dom.constructor.call(null,"object");
quiescent.dom.object = ((function (ctor__24572__auto___30616){
return (function quiescent$dom$object(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30617 = arguments.length;
var i__20221__auto___30618 = (0);
while(true){
if((i__20221__auto___30618 < len__20220__auto___30617)){
args__20227__auto__.push((arguments[i__20221__auto___30618]));

var G__30619 = (i__20221__auto___30618 + (1));
i__20221__auto___30618 = G__30619;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30616))
;

quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30616){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30616,args__24573__auto__);
});})(ctor__24572__auto___30616))
;

quiescent.dom.object.cljs$lang$maxFixedArity = (0);

quiescent.dom.object.cljs$lang$applyTo = ((function (ctor__24572__auto___30616){
return (function (seq30294){
return quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30294));
});})(ctor__24572__auto___30616))
;

var ctor__24572__auto___30620 = quiescent.dom.constructor.call(null,"ol");
quiescent.dom.ol = ((function (ctor__24572__auto___30620){
return (function quiescent$dom$ol(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30621 = arguments.length;
var i__20221__auto___30622 = (0);
while(true){
if((i__20221__auto___30622 < len__20220__auto___30621)){
args__20227__auto__.push((arguments[i__20221__auto___30622]));

var G__30623 = (i__20221__auto___30622 + (1));
i__20221__auto___30622 = G__30623;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30620))
;

quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30620){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30620,args__24573__auto__);
});})(ctor__24572__auto___30620))
;

quiescent.dom.ol.cljs$lang$maxFixedArity = (0);

quiescent.dom.ol.cljs$lang$applyTo = ((function (ctor__24572__auto___30620){
return (function (seq30295){
return quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30295));
});})(ctor__24572__auto___30620))
;

var ctor__24572__auto___30624 = quiescent.dom.constructor.call(null,"optgroup");
quiescent.dom.optgroup = ((function (ctor__24572__auto___30624){
return (function quiescent$dom$optgroup(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30625 = arguments.length;
var i__20221__auto___30626 = (0);
while(true){
if((i__20221__auto___30626 < len__20220__auto___30625)){
args__20227__auto__.push((arguments[i__20221__auto___30626]));

var G__30627 = (i__20221__auto___30626 + (1));
i__20221__auto___30626 = G__30627;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30624))
;

quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30624){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30624,args__24573__auto__);
});})(ctor__24572__auto___30624))
;

quiescent.dom.optgroup.cljs$lang$maxFixedArity = (0);

quiescent.dom.optgroup.cljs$lang$applyTo = ((function (ctor__24572__auto___30624){
return (function (seq30296){
return quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30296));
});})(ctor__24572__auto___30624))
;

var ctor__24572__auto___30628 = quiescent.dom.constructor.call(null,"option");
quiescent.dom.option = ((function (ctor__24572__auto___30628){
return (function quiescent$dom$option(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30629 = arguments.length;
var i__20221__auto___30630 = (0);
while(true){
if((i__20221__auto___30630 < len__20220__auto___30629)){
args__20227__auto__.push((arguments[i__20221__auto___30630]));

var G__30631 = (i__20221__auto___30630 + (1));
i__20221__auto___30630 = G__30631;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30628))
;

quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30628){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30628,args__24573__auto__);
});})(ctor__24572__auto___30628))
;

quiescent.dom.option.cljs$lang$maxFixedArity = (0);

quiescent.dom.option.cljs$lang$applyTo = ((function (ctor__24572__auto___30628){
return (function (seq30297){
return quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30297));
});})(ctor__24572__auto___30628))
;

var ctor__24572__auto___30632 = quiescent.dom.constructor.call(null,"output");
quiescent.dom.output = ((function (ctor__24572__auto___30632){
return (function quiescent$dom$output(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30633 = arguments.length;
var i__20221__auto___30634 = (0);
while(true){
if((i__20221__auto___30634 < len__20220__auto___30633)){
args__20227__auto__.push((arguments[i__20221__auto___30634]));

var G__30635 = (i__20221__auto___30634 + (1));
i__20221__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30632))
;

quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30632){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30632,args__24573__auto__);
});})(ctor__24572__auto___30632))
;

quiescent.dom.output.cljs$lang$maxFixedArity = (0);

quiescent.dom.output.cljs$lang$applyTo = ((function (ctor__24572__auto___30632){
return (function (seq30298){
return quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30298));
});})(ctor__24572__auto___30632))
;

var ctor__24572__auto___30636 = quiescent.dom.constructor.call(null,"p");
quiescent.dom.p = ((function (ctor__24572__auto___30636){
return (function quiescent$dom$p(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30637 = arguments.length;
var i__20221__auto___30638 = (0);
while(true){
if((i__20221__auto___30638 < len__20220__auto___30637)){
args__20227__auto__.push((arguments[i__20221__auto___30638]));

var G__30639 = (i__20221__auto___30638 + (1));
i__20221__auto___30638 = G__30639;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30636))
;

quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30636){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30636,args__24573__auto__);
});})(ctor__24572__auto___30636))
;

quiescent.dom.p.cljs$lang$maxFixedArity = (0);

quiescent.dom.p.cljs$lang$applyTo = ((function (ctor__24572__auto___30636){
return (function (seq30299){
return quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30299));
});})(ctor__24572__auto___30636))
;

var ctor__24572__auto___30640 = quiescent.dom.constructor.call(null,"param");
quiescent.dom.param = ((function (ctor__24572__auto___30640){
return (function quiescent$dom$param(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30641 = arguments.length;
var i__20221__auto___30642 = (0);
while(true){
if((i__20221__auto___30642 < len__20220__auto___30641)){
args__20227__auto__.push((arguments[i__20221__auto___30642]));

var G__30643 = (i__20221__auto___30642 + (1));
i__20221__auto___30642 = G__30643;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30640))
;

quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30640){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30640,args__24573__auto__);
});})(ctor__24572__auto___30640))
;

quiescent.dom.param.cljs$lang$maxFixedArity = (0);

quiescent.dom.param.cljs$lang$applyTo = ((function (ctor__24572__auto___30640){
return (function (seq30300){
return quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30300));
});})(ctor__24572__auto___30640))
;

var ctor__24572__auto___30644 = quiescent.dom.constructor.call(null,"pre");
quiescent.dom.pre = ((function (ctor__24572__auto___30644){
return (function quiescent$dom$pre(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30645 = arguments.length;
var i__20221__auto___30646 = (0);
while(true){
if((i__20221__auto___30646 < len__20220__auto___30645)){
args__20227__auto__.push((arguments[i__20221__auto___30646]));

var G__30647 = (i__20221__auto___30646 + (1));
i__20221__auto___30646 = G__30647;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30644))
;

quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30644){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30644,args__24573__auto__);
});})(ctor__24572__auto___30644))
;

quiescent.dom.pre.cljs$lang$maxFixedArity = (0);

quiescent.dom.pre.cljs$lang$applyTo = ((function (ctor__24572__auto___30644){
return (function (seq30301){
return quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30301));
});})(ctor__24572__auto___30644))
;

var ctor__24572__auto___30648 = quiescent.dom.constructor.call(null,"progress");
quiescent.dom.progress = ((function (ctor__24572__auto___30648){
return (function quiescent$dom$progress(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30649 = arguments.length;
var i__20221__auto___30650 = (0);
while(true){
if((i__20221__auto___30650 < len__20220__auto___30649)){
args__20227__auto__.push((arguments[i__20221__auto___30650]));

var G__30651 = (i__20221__auto___30650 + (1));
i__20221__auto___30650 = G__30651;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30648))
;

quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30648){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30648,args__24573__auto__);
});})(ctor__24572__auto___30648))
;

quiescent.dom.progress.cljs$lang$maxFixedArity = (0);

quiescent.dom.progress.cljs$lang$applyTo = ((function (ctor__24572__auto___30648){
return (function (seq30302){
return quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30302));
});})(ctor__24572__auto___30648))
;

var ctor__24572__auto___30652 = quiescent.dom.constructor.call(null,"q");
quiescent.dom.q = ((function (ctor__24572__auto___30652){
return (function quiescent$dom$q(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30653 = arguments.length;
var i__20221__auto___30654 = (0);
while(true){
if((i__20221__auto___30654 < len__20220__auto___30653)){
args__20227__auto__.push((arguments[i__20221__auto___30654]));

var G__30655 = (i__20221__auto___30654 + (1));
i__20221__auto___30654 = G__30655;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30652))
;

quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30652){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30652,args__24573__auto__);
});})(ctor__24572__auto___30652))
;

quiescent.dom.q.cljs$lang$maxFixedArity = (0);

quiescent.dom.q.cljs$lang$applyTo = ((function (ctor__24572__auto___30652){
return (function (seq30303){
return quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30303));
});})(ctor__24572__auto___30652))
;

var ctor__24572__auto___30656 = quiescent.dom.constructor.call(null,"rp");
quiescent.dom.rp = ((function (ctor__24572__auto___30656){
return (function quiescent$dom$rp(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30657 = arguments.length;
var i__20221__auto___30658 = (0);
while(true){
if((i__20221__auto___30658 < len__20220__auto___30657)){
args__20227__auto__.push((arguments[i__20221__auto___30658]));

var G__30659 = (i__20221__auto___30658 + (1));
i__20221__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30656))
;

quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30656){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30656,args__24573__auto__);
});})(ctor__24572__auto___30656))
;

quiescent.dom.rp.cljs$lang$maxFixedArity = (0);

quiescent.dom.rp.cljs$lang$applyTo = ((function (ctor__24572__auto___30656){
return (function (seq30304){
return quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30304));
});})(ctor__24572__auto___30656))
;

var ctor__24572__auto___30660 = quiescent.dom.constructor.call(null,"rt");
quiescent.dom.rt = ((function (ctor__24572__auto___30660){
return (function quiescent$dom$rt(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30661 = arguments.length;
var i__20221__auto___30662 = (0);
while(true){
if((i__20221__auto___30662 < len__20220__auto___30661)){
args__20227__auto__.push((arguments[i__20221__auto___30662]));

var G__30663 = (i__20221__auto___30662 + (1));
i__20221__auto___30662 = G__30663;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30660))
;

quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30660){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30660,args__24573__auto__);
});})(ctor__24572__auto___30660))
;

quiescent.dom.rt.cljs$lang$maxFixedArity = (0);

quiescent.dom.rt.cljs$lang$applyTo = ((function (ctor__24572__auto___30660){
return (function (seq30305){
return quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30305));
});})(ctor__24572__auto___30660))
;

var ctor__24572__auto___30664 = quiescent.dom.constructor.call(null,"ruby");
quiescent.dom.ruby = ((function (ctor__24572__auto___30664){
return (function quiescent$dom$ruby(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30665 = arguments.length;
var i__20221__auto___30666 = (0);
while(true){
if((i__20221__auto___30666 < len__20220__auto___30665)){
args__20227__auto__.push((arguments[i__20221__auto___30666]));

var G__30667 = (i__20221__auto___30666 + (1));
i__20221__auto___30666 = G__30667;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30664))
;

quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30664){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30664,args__24573__auto__);
});})(ctor__24572__auto___30664))
;

quiescent.dom.ruby.cljs$lang$maxFixedArity = (0);

quiescent.dom.ruby.cljs$lang$applyTo = ((function (ctor__24572__auto___30664){
return (function (seq30306){
return quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30306));
});})(ctor__24572__auto___30664))
;

var ctor__24572__auto___30668 = quiescent.dom.constructor.call(null,"s");
quiescent.dom.s = ((function (ctor__24572__auto___30668){
return (function quiescent$dom$s(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30669 = arguments.length;
var i__20221__auto___30670 = (0);
while(true){
if((i__20221__auto___30670 < len__20220__auto___30669)){
args__20227__auto__.push((arguments[i__20221__auto___30670]));

var G__30671 = (i__20221__auto___30670 + (1));
i__20221__auto___30670 = G__30671;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30668))
;

quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30668){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30668,args__24573__auto__);
});})(ctor__24572__auto___30668))
;

quiescent.dom.s.cljs$lang$maxFixedArity = (0);

quiescent.dom.s.cljs$lang$applyTo = ((function (ctor__24572__auto___30668){
return (function (seq30307){
return quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30307));
});})(ctor__24572__auto___30668))
;

var ctor__24572__auto___30672 = quiescent.dom.constructor.call(null,"samp");
quiescent.dom.samp = ((function (ctor__24572__auto___30672){
return (function quiescent$dom$samp(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30673 = arguments.length;
var i__20221__auto___30674 = (0);
while(true){
if((i__20221__auto___30674 < len__20220__auto___30673)){
args__20227__auto__.push((arguments[i__20221__auto___30674]));

var G__30675 = (i__20221__auto___30674 + (1));
i__20221__auto___30674 = G__30675;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30672))
;

quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30672){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30672,args__24573__auto__);
});})(ctor__24572__auto___30672))
;

quiescent.dom.samp.cljs$lang$maxFixedArity = (0);

quiescent.dom.samp.cljs$lang$applyTo = ((function (ctor__24572__auto___30672){
return (function (seq30308){
return quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30308));
});})(ctor__24572__auto___30672))
;

var ctor__24572__auto___30676 = quiescent.dom.constructor.call(null,"script");
quiescent.dom.script = ((function (ctor__24572__auto___30676){
return (function quiescent$dom$script(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30677 = arguments.length;
var i__20221__auto___30678 = (0);
while(true){
if((i__20221__auto___30678 < len__20220__auto___30677)){
args__20227__auto__.push((arguments[i__20221__auto___30678]));

var G__30679 = (i__20221__auto___30678 + (1));
i__20221__auto___30678 = G__30679;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30676))
;

quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30676){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30676,args__24573__auto__);
});})(ctor__24572__auto___30676))
;

quiescent.dom.script.cljs$lang$maxFixedArity = (0);

quiescent.dom.script.cljs$lang$applyTo = ((function (ctor__24572__auto___30676){
return (function (seq30309){
return quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30309));
});})(ctor__24572__auto___30676))
;

var ctor__24572__auto___30680 = quiescent.dom.constructor.call(null,"section");
quiescent.dom.section = ((function (ctor__24572__auto___30680){
return (function quiescent$dom$section(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30681 = arguments.length;
var i__20221__auto___30682 = (0);
while(true){
if((i__20221__auto___30682 < len__20220__auto___30681)){
args__20227__auto__.push((arguments[i__20221__auto___30682]));

var G__30683 = (i__20221__auto___30682 + (1));
i__20221__auto___30682 = G__30683;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30680))
;

quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30680){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30680,args__24573__auto__);
});})(ctor__24572__auto___30680))
;

quiescent.dom.section.cljs$lang$maxFixedArity = (0);

quiescent.dom.section.cljs$lang$applyTo = ((function (ctor__24572__auto___30680){
return (function (seq30310){
return quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30310));
});})(ctor__24572__auto___30680))
;

var ctor__24572__auto___30684 = quiescent.dom.constructor.call(null,"select");
quiescent.dom.select = ((function (ctor__24572__auto___30684){
return (function quiescent$dom$select(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30685 = arguments.length;
var i__20221__auto___30686 = (0);
while(true){
if((i__20221__auto___30686 < len__20220__auto___30685)){
args__20227__auto__.push((arguments[i__20221__auto___30686]));

var G__30687 = (i__20221__auto___30686 + (1));
i__20221__auto___30686 = G__30687;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30684))
;

quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30684){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30684,args__24573__auto__);
});})(ctor__24572__auto___30684))
;

quiescent.dom.select.cljs$lang$maxFixedArity = (0);

quiescent.dom.select.cljs$lang$applyTo = ((function (ctor__24572__auto___30684){
return (function (seq30311){
return quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30311));
});})(ctor__24572__auto___30684))
;

var ctor__24572__auto___30688 = quiescent.dom.constructor.call(null,"small");
quiescent.dom.small = ((function (ctor__24572__auto___30688){
return (function quiescent$dom$small(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30689 = arguments.length;
var i__20221__auto___30690 = (0);
while(true){
if((i__20221__auto___30690 < len__20220__auto___30689)){
args__20227__auto__.push((arguments[i__20221__auto___30690]));

var G__30691 = (i__20221__auto___30690 + (1));
i__20221__auto___30690 = G__30691;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30688))
;

quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30688){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30688,args__24573__auto__);
});})(ctor__24572__auto___30688))
;

quiescent.dom.small.cljs$lang$maxFixedArity = (0);

quiescent.dom.small.cljs$lang$applyTo = ((function (ctor__24572__auto___30688){
return (function (seq30312){
return quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30312));
});})(ctor__24572__auto___30688))
;

var ctor__24572__auto___30692 = quiescent.dom.constructor.call(null,"source");
quiescent.dom.source = ((function (ctor__24572__auto___30692){
return (function quiescent$dom$source(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30693 = arguments.length;
var i__20221__auto___30694 = (0);
while(true){
if((i__20221__auto___30694 < len__20220__auto___30693)){
args__20227__auto__.push((arguments[i__20221__auto___30694]));

var G__30695 = (i__20221__auto___30694 + (1));
i__20221__auto___30694 = G__30695;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30692))
;

quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30692){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30692,args__24573__auto__);
});})(ctor__24572__auto___30692))
;

quiescent.dom.source.cljs$lang$maxFixedArity = (0);

quiescent.dom.source.cljs$lang$applyTo = ((function (ctor__24572__auto___30692){
return (function (seq30313){
return quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30313));
});})(ctor__24572__auto___30692))
;

var ctor__24572__auto___30696 = quiescent.dom.constructor.call(null,"span");
quiescent.dom.span = ((function (ctor__24572__auto___30696){
return (function quiescent$dom$span(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30697 = arguments.length;
var i__20221__auto___30698 = (0);
while(true){
if((i__20221__auto___30698 < len__20220__auto___30697)){
args__20227__auto__.push((arguments[i__20221__auto___30698]));

var G__30699 = (i__20221__auto___30698 + (1));
i__20221__auto___30698 = G__30699;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30696))
;

quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30696){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30696,args__24573__auto__);
});})(ctor__24572__auto___30696))
;

quiescent.dom.span.cljs$lang$maxFixedArity = (0);

quiescent.dom.span.cljs$lang$applyTo = ((function (ctor__24572__auto___30696){
return (function (seq30314){
return quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30314));
});})(ctor__24572__auto___30696))
;

var ctor__24572__auto___30700 = quiescent.dom.constructor.call(null,"strong");
quiescent.dom.strong = ((function (ctor__24572__auto___30700){
return (function quiescent$dom$strong(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30701 = arguments.length;
var i__20221__auto___30702 = (0);
while(true){
if((i__20221__auto___30702 < len__20220__auto___30701)){
args__20227__auto__.push((arguments[i__20221__auto___30702]));

var G__30703 = (i__20221__auto___30702 + (1));
i__20221__auto___30702 = G__30703;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30700))
;

quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30700){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30700,args__24573__auto__);
});})(ctor__24572__auto___30700))
;

quiescent.dom.strong.cljs$lang$maxFixedArity = (0);

quiescent.dom.strong.cljs$lang$applyTo = ((function (ctor__24572__auto___30700){
return (function (seq30315){
return quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30315));
});})(ctor__24572__auto___30700))
;

var ctor__24572__auto___30704 = quiescent.dom.constructor.call(null,"style");
quiescent.dom.style = ((function (ctor__24572__auto___30704){
return (function quiescent$dom$style(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30705 = arguments.length;
var i__20221__auto___30706 = (0);
while(true){
if((i__20221__auto___30706 < len__20220__auto___30705)){
args__20227__auto__.push((arguments[i__20221__auto___30706]));

var G__30707 = (i__20221__auto___30706 + (1));
i__20221__auto___30706 = G__30707;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30704))
;

quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30704){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30704,args__24573__auto__);
});})(ctor__24572__auto___30704))
;

quiescent.dom.style.cljs$lang$maxFixedArity = (0);

quiescent.dom.style.cljs$lang$applyTo = ((function (ctor__24572__auto___30704){
return (function (seq30316){
return quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30316));
});})(ctor__24572__auto___30704))
;

var ctor__24572__auto___30708 = quiescent.dom.constructor.call(null,"sub");
quiescent.dom.sub = ((function (ctor__24572__auto___30708){
return (function quiescent$dom$sub(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30709 = arguments.length;
var i__20221__auto___30710 = (0);
while(true){
if((i__20221__auto___30710 < len__20220__auto___30709)){
args__20227__auto__.push((arguments[i__20221__auto___30710]));

var G__30711 = (i__20221__auto___30710 + (1));
i__20221__auto___30710 = G__30711;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30708))
;

quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30708){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30708,args__24573__auto__);
});})(ctor__24572__auto___30708))
;

quiescent.dom.sub.cljs$lang$maxFixedArity = (0);

quiescent.dom.sub.cljs$lang$applyTo = ((function (ctor__24572__auto___30708){
return (function (seq30317){
return quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30317));
});})(ctor__24572__auto___30708))
;

var ctor__24572__auto___30712 = quiescent.dom.constructor.call(null,"summary");
quiescent.dom.summary = ((function (ctor__24572__auto___30712){
return (function quiescent$dom$summary(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30713 = arguments.length;
var i__20221__auto___30714 = (0);
while(true){
if((i__20221__auto___30714 < len__20220__auto___30713)){
args__20227__auto__.push((arguments[i__20221__auto___30714]));

var G__30715 = (i__20221__auto___30714 + (1));
i__20221__auto___30714 = G__30715;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30712))
;

quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30712){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30712,args__24573__auto__);
});})(ctor__24572__auto___30712))
;

quiescent.dom.summary.cljs$lang$maxFixedArity = (0);

quiescent.dom.summary.cljs$lang$applyTo = ((function (ctor__24572__auto___30712){
return (function (seq30318){
return quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30318));
});})(ctor__24572__auto___30712))
;

var ctor__24572__auto___30716 = quiescent.dom.constructor.call(null,"sup");
quiescent.dom.sup = ((function (ctor__24572__auto___30716){
return (function quiescent$dom$sup(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30717 = arguments.length;
var i__20221__auto___30718 = (0);
while(true){
if((i__20221__auto___30718 < len__20220__auto___30717)){
args__20227__auto__.push((arguments[i__20221__auto___30718]));

var G__30719 = (i__20221__auto___30718 + (1));
i__20221__auto___30718 = G__30719;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30716))
;

quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30716){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30716,args__24573__auto__);
});})(ctor__24572__auto___30716))
;

quiescent.dom.sup.cljs$lang$maxFixedArity = (0);

quiescent.dom.sup.cljs$lang$applyTo = ((function (ctor__24572__auto___30716){
return (function (seq30319){
return quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30319));
});})(ctor__24572__auto___30716))
;

var ctor__24572__auto___30720 = quiescent.dom.constructor.call(null,"table");
quiescent.dom.table = ((function (ctor__24572__auto___30720){
return (function quiescent$dom$table(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30721 = arguments.length;
var i__20221__auto___30722 = (0);
while(true){
if((i__20221__auto___30722 < len__20220__auto___30721)){
args__20227__auto__.push((arguments[i__20221__auto___30722]));

var G__30723 = (i__20221__auto___30722 + (1));
i__20221__auto___30722 = G__30723;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30720))
;

quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30720){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30720,args__24573__auto__);
});})(ctor__24572__auto___30720))
;

quiescent.dom.table.cljs$lang$maxFixedArity = (0);

quiescent.dom.table.cljs$lang$applyTo = ((function (ctor__24572__auto___30720){
return (function (seq30320){
return quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30320));
});})(ctor__24572__auto___30720))
;

var ctor__24572__auto___30724 = quiescent.dom.constructor.call(null,"tbody");
quiescent.dom.tbody = ((function (ctor__24572__auto___30724){
return (function quiescent$dom$tbody(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30725 = arguments.length;
var i__20221__auto___30726 = (0);
while(true){
if((i__20221__auto___30726 < len__20220__auto___30725)){
args__20227__auto__.push((arguments[i__20221__auto___30726]));

var G__30727 = (i__20221__auto___30726 + (1));
i__20221__auto___30726 = G__30727;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30724))
;

quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30724){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30724,args__24573__auto__);
});})(ctor__24572__auto___30724))
;

quiescent.dom.tbody.cljs$lang$maxFixedArity = (0);

quiescent.dom.tbody.cljs$lang$applyTo = ((function (ctor__24572__auto___30724){
return (function (seq30321){
return quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30321));
});})(ctor__24572__auto___30724))
;

var ctor__24572__auto___30728 = quiescent.dom.constructor.call(null,"td");
quiescent.dom.td = ((function (ctor__24572__auto___30728){
return (function quiescent$dom$td(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30729 = arguments.length;
var i__20221__auto___30730 = (0);
while(true){
if((i__20221__auto___30730 < len__20220__auto___30729)){
args__20227__auto__.push((arguments[i__20221__auto___30730]));

var G__30731 = (i__20221__auto___30730 + (1));
i__20221__auto___30730 = G__30731;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30728))
;

quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30728){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30728,args__24573__auto__);
});})(ctor__24572__auto___30728))
;

quiescent.dom.td.cljs$lang$maxFixedArity = (0);

quiescent.dom.td.cljs$lang$applyTo = ((function (ctor__24572__auto___30728){
return (function (seq30322){
return quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30322));
});})(ctor__24572__auto___30728))
;

var ctor__24572__auto___30732 = quiescent.dom.constructor.call(null,"textarea");
quiescent.dom.textarea = ((function (ctor__24572__auto___30732){
return (function quiescent$dom$textarea(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30733 = arguments.length;
var i__20221__auto___30734 = (0);
while(true){
if((i__20221__auto___30734 < len__20220__auto___30733)){
args__20227__auto__.push((arguments[i__20221__auto___30734]));

var G__30735 = (i__20221__auto___30734 + (1));
i__20221__auto___30734 = G__30735;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30732))
;

quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30732){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30732,args__24573__auto__);
});})(ctor__24572__auto___30732))
;

quiescent.dom.textarea.cljs$lang$maxFixedArity = (0);

quiescent.dom.textarea.cljs$lang$applyTo = ((function (ctor__24572__auto___30732){
return (function (seq30323){
return quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30323));
});})(ctor__24572__auto___30732))
;

var ctor__24572__auto___30736 = quiescent.dom.constructor.call(null,"tfoot");
quiescent.dom.tfoot = ((function (ctor__24572__auto___30736){
return (function quiescent$dom$tfoot(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30737 = arguments.length;
var i__20221__auto___30738 = (0);
while(true){
if((i__20221__auto___30738 < len__20220__auto___30737)){
args__20227__auto__.push((arguments[i__20221__auto___30738]));

var G__30739 = (i__20221__auto___30738 + (1));
i__20221__auto___30738 = G__30739;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30736))
;

quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30736){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30736,args__24573__auto__);
});})(ctor__24572__auto___30736))
;

quiescent.dom.tfoot.cljs$lang$maxFixedArity = (0);

quiescent.dom.tfoot.cljs$lang$applyTo = ((function (ctor__24572__auto___30736){
return (function (seq30324){
return quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30324));
});})(ctor__24572__auto___30736))
;

var ctor__24572__auto___30740 = quiescent.dom.constructor.call(null,"th");
quiescent.dom.th = ((function (ctor__24572__auto___30740){
return (function quiescent$dom$th(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30741 = arguments.length;
var i__20221__auto___30742 = (0);
while(true){
if((i__20221__auto___30742 < len__20220__auto___30741)){
args__20227__auto__.push((arguments[i__20221__auto___30742]));

var G__30743 = (i__20221__auto___30742 + (1));
i__20221__auto___30742 = G__30743;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30740))
;

quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30740){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30740,args__24573__auto__);
});})(ctor__24572__auto___30740))
;

quiescent.dom.th.cljs$lang$maxFixedArity = (0);

quiescent.dom.th.cljs$lang$applyTo = ((function (ctor__24572__auto___30740){
return (function (seq30325){
return quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30325));
});})(ctor__24572__auto___30740))
;

var ctor__24572__auto___30744 = quiescent.dom.constructor.call(null,"thead");
quiescent.dom.thead = ((function (ctor__24572__auto___30744){
return (function quiescent$dom$thead(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30745 = arguments.length;
var i__20221__auto___30746 = (0);
while(true){
if((i__20221__auto___30746 < len__20220__auto___30745)){
args__20227__auto__.push((arguments[i__20221__auto___30746]));

var G__30747 = (i__20221__auto___30746 + (1));
i__20221__auto___30746 = G__30747;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30744))
;

quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30744){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30744,args__24573__auto__);
});})(ctor__24572__auto___30744))
;

quiescent.dom.thead.cljs$lang$maxFixedArity = (0);

quiescent.dom.thead.cljs$lang$applyTo = ((function (ctor__24572__auto___30744){
return (function (seq30326){
return quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30326));
});})(ctor__24572__auto___30744))
;

var ctor__24572__auto___30748 = quiescent.dom.constructor.call(null,"time");
quiescent.dom.time = ((function (ctor__24572__auto___30748){
return (function quiescent$dom$time(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30749 = arguments.length;
var i__20221__auto___30750 = (0);
while(true){
if((i__20221__auto___30750 < len__20220__auto___30749)){
args__20227__auto__.push((arguments[i__20221__auto___30750]));

var G__30751 = (i__20221__auto___30750 + (1));
i__20221__auto___30750 = G__30751;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30748))
;

quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30748){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30748,args__24573__auto__);
});})(ctor__24572__auto___30748))
;

quiescent.dom.time.cljs$lang$maxFixedArity = (0);

quiescent.dom.time.cljs$lang$applyTo = ((function (ctor__24572__auto___30748){
return (function (seq30327){
return quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30327));
});})(ctor__24572__auto___30748))
;

var ctor__24572__auto___30752 = quiescent.dom.constructor.call(null,"title");
quiescent.dom.title = ((function (ctor__24572__auto___30752){
return (function quiescent$dom$title(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30753 = arguments.length;
var i__20221__auto___30754 = (0);
while(true){
if((i__20221__auto___30754 < len__20220__auto___30753)){
args__20227__auto__.push((arguments[i__20221__auto___30754]));

var G__30755 = (i__20221__auto___30754 + (1));
i__20221__auto___30754 = G__30755;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30752))
;

quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30752){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30752,args__24573__auto__);
});})(ctor__24572__auto___30752))
;

quiescent.dom.title.cljs$lang$maxFixedArity = (0);

quiescent.dom.title.cljs$lang$applyTo = ((function (ctor__24572__auto___30752){
return (function (seq30328){
return quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30328));
});})(ctor__24572__auto___30752))
;

var ctor__24572__auto___30756 = quiescent.dom.constructor.call(null,"tr");
quiescent.dom.tr = ((function (ctor__24572__auto___30756){
return (function quiescent$dom$tr(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30757 = arguments.length;
var i__20221__auto___30758 = (0);
while(true){
if((i__20221__auto___30758 < len__20220__auto___30757)){
args__20227__auto__.push((arguments[i__20221__auto___30758]));

var G__30759 = (i__20221__auto___30758 + (1));
i__20221__auto___30758 = G__30759;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30756))
;

quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30756){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30756,args__24573__auto__);
});})(ctor__24572__auto___30756))
;

quiescent.dom.tr.cljs$lang$maxFixedArity = (0);

quiescent.dom.tr.cljs$lang$applyTo = ((function (ctor__24572__auto___30756){
return (function (seq30329){
return quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30329));
});})(ctor__24572__auto___30756))
;

var ctor__24572__auto___30760 = quiescent.dom.constructor.call(null,"track");
quiescent.dom.track = ((function (ctor__24572__auto___30760){
return (function quiescent$dom$track(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30761 = arguments.length;
var i__20221__auto___30762 = (0);
while(true){
if((i__20221__auto___30762 < len__20220__auto___30761)){
args__20227__auto__.push((arguments[i__20221__auto___30762]));

var G__30763 = (i__20221__auto___30762 + (1));
i__20221__auto___30762 = G__30763;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30760))
;

quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30760){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30760,args__24573__auto__);
});})(ctor__24572__auto___30760))
;

quiescent.dom.track.cljs$lang$maxFixedArity = (0);

quiescent.dom.track.cljs$lang$applyTo = ((function (ctor__24572__auto___30760){
return (function (seq30330){
return quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30330));
});})(ctor__24572__auto___30760))
;

var ctor__24572__auto___30764 = quiescent.dom.constructor.call(null,"u");
quiescent.dom.u = ((function (ctor__24572__auto___30764){
return (function quiescent$dom$u(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30765 = arguments.length;
var i__20221__auto___30766 = (0);
while(true){
if((i__20221__auto___30766 < len__20220__auto___30765)){
args__20227__auto__.push((arguments[i__20221__auto___30766]));

var G__30767 = (i__20221__auto___30766 + (1));
i__20221__auto___30766 = G__30767;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30764))
;

quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30764){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30764,args__24573__auto__);
});})(ctor__24572__auto___30764))
;

quiescent.dom.u.cljs$lang$maxFixedArity = (0);

quiescent.dom.u.cljs$lang$applyTo = ((function (ctor__24572__auto___30764){
return (function (seq30331){
return quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30331));
});})(ctor__24572__auto___30764))
;

var ctor__24572__auto___30768 = quiescent.dom.constructor.call(null,"ul");
quiescent.dom.ul = ((function (ctor__24572__auto___30768){
return (function quiescent$dom$ul(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30769 = arguments.length;
var i__20221__auto___30770 = (0);
while(true){
if((i__20221__auto___30770 < len__20220__auto___30769)){
args__20227__auto__.push((arguments[i__20221__auto___30770]));

var G__30771 = (i__20221__auto___30770 + (1));
i__20221__auto___30770 = G__30771;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30768))
;

quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30768){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30768,args__24573__auto__);
});})(ctor__24572__auto___30768))
;

quiescent.dom.ul.cljs$lang$maxFixedArity = (0);

quiescent.dom.ul.cljs$lang$applyTo = ((function (ctor__24572__auto___30768){
return (function (seq30332){
return quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30332));
});})(ctor__24572__auto___30768))
;

var ctor__24572__auto___30772 = quiescent.dom.constructor.call(null,"var");
quiescent.dom.var$ = ((function (ctor__24572__auto___30772){
return (function quiescent$dom$var(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30773 = arguments.length;
var i__20221__auto___30774 = (0);
while(true){
if((i__20221__auto___30774 < len__20220__auto___30773)){
args__20227__auto__.push((arguments[i__20221__auto___30774]));

var G__30775 = (i__20221__auto___30774 + (1));
i__20221__auto___30774 = G__30775;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30772))
;

quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30772){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30772,args__24573__auto__);
});})(ctor__24572__auto___30772))
;

quiescent.dom.var$.cljs$lang$maxFixedArity = (0);

quiescent.dom.var$.cljs$lang$applyTo = ((function (ctor__24572__auto___30772){
return (function (seq30333){
return quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30333));
});})(ctor__24572__auto___30772))
;

var ctor__24572__auto___30776 = quiescent.dom.constructor.call(null,"video");
quiescent.dom.video = ((function (ctor__24572__auto___30776){
return (function quiescent$dom$video(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30777 = arguments.length;
var i__20221__auto___30778 = (0);
while(true){
if((i__20221__auto___30778 < len__20220__auto___30777)){
args__20227__auto__.push((arguments[i__20221__auto___30778]));

var G__30779 = (i__20221__auto___30778 + (1));
i__20221__auto___30778 = G__30779;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30776))
;

quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30776){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30776,args__24573__auto__);
});})(ctor__24572__auto___30776))
;

quiescent.dom.video.cljs$lang$maxFixedArity = (0);

quiescent.dom.video.cljs$lang$applyTo = ((function (ctor__24572__auto___30776){
return (function (seq30334){
return quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30334));
});})(ctor__24572__auto___30776))
;

var ctor__24572__auto___30780 = quiescent.dom.constructor.call(null,"wbr");
quiescent.dom.wbr = ((function (ctor__24572__auto___30780){
return (function quiescent$dom$wbr(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30781 = arguments.length;
var i__20221__auto___30782 = (0);
while(true){
if((i__20221__auto___30782 < len__20220__auto___30781)){
args__20227__auto__.push((arguments[i__20221__auto___30782]));

var G__30783 = (i__20221__auto___30782 + (1));
i__20221__auto___30782 = G__30783;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30780))
;

quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30780){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30780,args__24573__auto__);
});})(ctor__24572__auto___30780))
;

quiescent.dom.wbr.cljs$lang$maxFixedArity = (0);

quiescent.dom.wbr.cljs$lang$applyTo = ((function (ctor__24572__auto___30780){
return (function (seq30335){
return quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30335));
});})(ctor__24572__auto___30780))
;

var ctor__24572__auto___30784 = quiescent.dom.constructor.call(null,"circle");
quiescent.dom.circle = ((function (ctor__24572__auto___30784){
return (function quiescent$dom$circle(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30785 = arguments.length;
var i__20221__auto___30786 = (0);
while(true){
if((i__20221__auto___30786 < len__20220__auto___30785)){
args__20227__auto__.push((arguments[i__20221__auto___30786]));

var G__30787 = (i__20221__auto___30786 + (1));
i__20221__auto___30786 = G__30787;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30784))
;

quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30784){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30784,args__24573__auto__);
});})(ctor__24572__auto___30784))
;

quiescent.dom.circle.cljs$lang$maxFixedArity = (0);

quiescent.dom.circle.cljs$lang$applyTo = ((function (ctor__24572__auto___30784){
return (function (seq30336){
return quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30336));
});})(ctor__24572__auto___30784))
;

var ctor__24572__auto___30788 = quiescent.dom.constructor.call(null,"g");
quiescent.dom.g = ((function (ctor__24572__auto___30788){
return (function quiescent$dom$g(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30789 = arguments.length;
var i__20221__auto___30790 = (0);
while(true){
if((i__20221__auto___30790 < len__20220__auto___30789)){
args__20227__auto__.push((arguments[i__20221__auto___30790]));

var G__30791 = (i__20221__auto___30790 + (1));
i__20221__auto___30790 = G__30791;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30788))
;

quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30788){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30788,args__24573__auto__);
});})(ctor__24572__auto___30788))
;

quiescent.dom.g.cljs$lang$maxFixedArity = (0);

quiescent.dom.g.cljs$lang$applyTo = ((function (ctor__24572__auto___30788){
return (function (seq30337){
return quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30337));
});})(ctor__24572__auto___30788))
;

var ctor__24572__auto___30792 = quiescent.dom.constructor.call(null,"line");
quiescent.dom.line = ((function (ctor__24572__auto___30792){
return (function quiescent$dom$line(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30793 = arguments.length;
var i__20221__auto___30794 = (0);
while(true){
if((i__20221__auto___30794 < len__20220__auto___30793)){
args__20227__auto__.push((arguments[i__20221__auto___30794]));

var G__30795 = (i__20221__auto___30794 + (1));
i__20221__auto___30794 = G__30795;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30792))
;

quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30792){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30792,args__24573__auto__);
});})(ctor__24572__auto___30792))
;

quiescent.dom.line.cljs$lang$maxFixedArity = (0);

quiescent.dom.line.cljs$lang$applyTo = ((function (ctor__24572__auto___30792){
return (function (seq30338){
return quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30338));
});})(ctor__24572__auto___30792))
;

var ctor__24572__auto___30796 = quiescent.dom.constructor.call(null,"path");
quiescent.dom.path = ((function (ctor__24572__auto___30796){
return (function quiescent$dom$path(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30797 = arguments.length;
var i__20221__auto___30798 = (0);
while(true){
if((i__20221__auto___30798 < len__20220__auto___30797)){
args__20227__auto__.push((arguments[i__20221__auto___30798]));

var G__30799 = (i__20221__auto___30798 + (1));
i__20221__auto___30798 = G__30799;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30796))
;

quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30796){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30796,args__24573__auto__);
});})(ctor__24572__auto___30796))
;

quiescent.dom.path.cljs$lang$maxFixedArity = (0);

quiescent.dom.path.cljs$lang$applyTo = ((function (ctor__24572__auto___30796){
return (function (seq30339){
return quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30339));
});})(ctor__24572__auto___30796))
;

var ctor__24572__auto___30800 = quiescent.dom.constructor.call(null,"polygon");
quiescent.dom.polygon = ((function (ctor__24572__auto___30800){
return (function quiescent$dom$polygon(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30801 = arguments.length;
var i__20221__auto___30802 = (0);
while(true){
if((i__20221__auto___30802 < len__20220__auto___30801)){
args__20227__auto__.push((arguments[i__20221__auto___30802]));

var G__30803 = (i__20221__auto___30802 + (1));
i__20221__auto___30802 = G__30803;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30800))
;

quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30800){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30800,args__24573__auto__);
});})(ctor__24572__auto___30800))
;

quiescent.dom.polygon.cljs$lang$maxFixedArity = (0);

quiescent.dom.polygon.cljs$lang$applyTo = ((function (ctor__24572__auto___30800){
return (function (seq30340){
return quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30340));
});})(ctor__24572__auto___30800))
;

var ctor__24572__auto___30804 = quiescent.dom.constructor.call(null,"polyline");
quiescent.dom.polyline = ((function (ctor__24572__auto___30804){
return (function quiescent$dom$polyline(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30805 = arguments.length;
var i__20221__auto___30806 = (0);
while(true){
if((i__20221__auto___30806 < len__20220__auto___30805)){
args__20227__auto__.push((arguments[i__20221__auto___30806]));

var G__30807 = (i__20221__auto___30806 + (1));
i__20221__auto___30806 = G__30807;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30804))
;

quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30804){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30804,args__24573__auto__);
});})(ctor__24572__auto___30804))
;

quiescent.dom.polyline.cljs$lang$maxFixedArity = (0);

quiescent.dom.polyline.cljs$lang$applyTo = ((function (ctor__24572__auto___30804){
return (function (seq30341){
return quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30341));
});})(ctor__24572__auto___30804))
;

var ctor__24572__auto___30808 = quiescent.dom.constructor.call(null,"rect");
quiescent.dom.rect = ((function (ctor__24572__auto___30808){
return (function quiescent$dom$rect(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30809 = arguments.length;
var i__20221__auto___30810 = (0);
while(true){
if((i__20221__auto___30810 < len__20220__auto___30809)){
args__20227__auto__.push((arguments[i__20221__auto___30810]));

var G__30811 = (i__20221__auto___30810 + (1));
i__20221__auto___30810 = G__30811;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30808))
;

quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30808){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30808,args__24573__auto__);
});})(ctor__24572__auto___30808))
;

quiescent.dom.rect.cljs$lang$maxFixedArity = (0);

quiescent.dom.rect.cljs$lang$applyTo = ((function (ctor__24572__auto___30808){
return (function (seq30342){
return quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30342));
});})(ctor__24572__auto___30808))
;

var ctor__24572__auto___30812 = quiescent.dom.constructor.call(null,"svg");
quiescent.dom.svg = ((function (ctor__24572__auto___30812){
return (function quiescent$dom$svg(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30813 = arguments.length;
var i__20221__auto___30814 = (0);
while(true){
if((i__20221__auto___30814 < len__20220__auto___30813)){
args__20227__auto__.push((arguments[i__20221__auto___30814]));

var G__30815 = (i__20221__auto___30814 + (1));
i__20221__auto___30814 = G__30815;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30812))
;

quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30812){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30812,args__24573__auto__);
});})(ctor__24572__auto___30812))
;

quiescent.dom.svg.cljs$lang$maxFixedArity = (0);

quiescent.dom.svg.cljs$lang$applyTo = ((function (ctor__24572__auto___30812){
return (function (seq30343){
return quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30343));
});})(ctor__24572__auto___30812))
;

var ctor__24572__auto___30816 = quiescent.dom.constructor.call(null,"text");
quiescent.dom.text = ((function (ctor__24572__auto___30816){
return (function quiescent$dom$text(var_args){
var args__20227__auto__ = [];
var len__20220__auto___30817 = arguments.length;
var i__20221__auto___30818 = (0);
while(true){
if((i__20221__auto___30818 < len__20220__auto___30817)){
args__20227__auto__.push((arguments[i__20221__auto___30818]));

var G__30819 = (i__20221__auto___30818 + (1));
i__20221__auto___30818 = G__30819;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((0) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((0)),(0))):null);
return quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__20228__auto__);
});})(ctor__24572__auto___30816))
;

quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__24572__auto___30816){
return (function (args__24573__auto__){

return cljs.core.apply.call(null,ctor__24572__auto___30816,args__24573__auto__);
});})(ctor__24572__auto___30816))
;

quiescent.dom.text.cljs$lang$maxFixedArity = (0);

quiescent.dom.text.cljs$lang$applyTo = ((function (ctor__24572__auto___30816){
return (function (seq30257){
return quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30257));
});})(ctor__24572__auto___30816))
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"bdi","bdi",-1323025886),new cljs.core.Keyword(null,"rp","rp",2006698083),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"dfn","dfn",241908167),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"wbr","wbr",228661800),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"samp","samp",1506141136),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"rt","rt",623480692),new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bdo","bdo",-2131148202),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"noscript","noscript",-704777289),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"menuitem","menuitem",1004047353),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"keygen","keygen",-571693253),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"cite","cite",1909439996),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"ruby","ruby",2000737661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"u","u",-1156634785)],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);

//# sourceMappingURL=dom.js.map