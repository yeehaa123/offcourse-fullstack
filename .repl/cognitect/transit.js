// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__43283_43287 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__43284_43288 = null;
var count__43285_43289 = (0);
var i__43286_43290 = (0);
while(true){
if((i__43286_43290 < count__43285_43289)){
var k_43291 = cljs.core._nth.call(null,chunk__43284_43288,i__43286_43290);
var v_43292 = (b[k_43291]);
(a[k_43291] = v_43292);

var G__43293 = seq__43283_43287;
var G__43294 = chunk__43284_43288;
var G__43295 = count__43285_43289;
var G__43296 = (i__43286_43290 + (1));
seq__43283_43287 = G__43293;
chunk__43284_43288 = G__43294;
count__43285_43289 = G__43295;
i__43286_43290 = G__43296;
continue;
} else {
var temp__4425__auto___43297 = cljs.core.seq.call(null,seq__43283_43287);
if(temp__4425__auto___43297){
var seq__43283_43298__$1 = temp__4425__auto___43297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43283_43298__$1)){
var c__35001__auto___43299 = cljs.core.chunk_first.call(null,seq__43283_43298__$1);
var G__43300 = cljs.core.chunk_rest.call(null,seq__43283_43298__$1);
var G__43301 = c__35001__auto___43299;
var G__43302 = cljs.core.count.call(null,c__35001__auto___43299);
var G__43303 = (0);
seq__43283_43287 = G__43300;
chunk__43284_43288 = G__43301;
count__43285_43289 = G__43302;
i__43286_43290 = G__43303;
continue;
} else {
var k_43304 = cljs.core.first.call(null,seq__43283_43298__$1);
var v_43305 = (b[k_43304]);
(a[k_43304] = v_43305);

var G__43306 = cljs.core.next.call(null,seq__43283_43298__$1);
var G__43307 = null;
var G__43308 = (0);
var G__43309 = (0);
seq__43283_43287 = G__43306;
chunk__43284_43288 = G__43307;
count__43285_43289 = G__43308;
i__43286_43290 = G__43309;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args43310 = [];
var len__35256__auto___43313 = arguments.length;
var i__35257__auto___43314 = (0);
while(true){
if((i__35257__auto___43314 < len__35256__auto___43313)){
args43310.push((arguments[i__35257__auto___43314]));

var G__43315 = (i__35257__auto___43314 + (1));
i__35257__auto___43314 = G__43315;
continue;
} else {
}
break;
}

var G__43312 = args43310.length;
switch (G__43312) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43310.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__43317 = (i + (2));
var G__43318 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__43317;
ret = G__43318;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__43319_43323 = cljs.core.seq.call(null,v);
var chunk__43320_43324 = null;
var count__43321_43325 = (0);
var i__43322_43326 = (0);
while(true){
if((i__43322_43326 < count__43321_43325)){
var x_43327 = cljs.core._nth.call(null,chunk__43320_43324,i__43322_43326);
ret.push(x_43327);

var G__43328 = seq__43319_43323;
var G__43329 = chunk__43320_43324;
var G__43330 = count__43321_43325;
var G__43331 = (i__43322_43326 + (1));
seq__43319_43323 = G__43328;
chunk__43320_43324 = G__43329;
count__43321_43325 = G__43330;
i__43322_43326 = G__43331;
continue;
} else {
var temp__4425__auto___43332 = cljs.core.seq.call(null,seq__43319_43323);
if(temp__4425__auto___43332){
var seq__43319_43333__$1 = temp__4425__auto___43332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43319_43333__$1)){
var c__35001__auto___43334 = cljs.core.chunk_first.call(null,seq__43319_43333__$1);
var G__43335 = cljs.core.chunk_rest.call(null,seq__43319_43333__$1);
var G__43336 = c__35001__auto___43334;
var G__43337 = cljs.core.count.call(null,c__35001__auto___43334);
var G__43338 = (0);
seq__43319_43323 = G__43335;
chunk__43320_43324 = G__43336;
count__43321_43325 = G__43337;
i__43322_43326 = G__43338;
continue;
} else {
var x_43339 = cljs.core.first.call(null,seq__43319_43333__$1);
ret.push(x_43339);

var G__43340 = cljs.core.next.call(null,seq__43319_43333__$1);
var G__43341 = null;
var G__43342 = (0);
var G__43343 = (0);
seq__43319_43323 = G__43340;
chunk__43320_43324 = G__43341;
count__43321_43325 = G__43342;
i__43322_43326 = G__43343;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__43344_43348 = cljs.core.seq.call(null,v);
var chunk__43345_43349 = null;
var count__43346_43350 = (0);
var i__43347_43351 = (0);
while(true){
if((i__43347_43351 < count__43346_43350)){
var x_43352 = cljs.core._nth.call(null,chunk__43345_43349,i__43347_43351);
ret.push(x_43352);

var G__43353 = seq__43344_43348;
var G__43354 = chunk__43345_43349;
var G__43355 = count__43346_43350;
var G__43356 = (i__43347_43351 + (1));
seq__43344_43348 = G__43353;
chunk__43345_43349 = G__43354;
count__43346_43350 = G__43355;
i__43347_43351 = G__43356;
continue;
} else {
var temp__4425__auto___43357 = cljs.core.seq.call(null,seq__43344_43348);
if(temp__4425__auto___43357){
var seq__43344_43358__$1 = temp__4425__auto___43357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43344_43358__$1)){
var c__35001__auto___43359 = cljs.core.chunk_first.call(null,seq__43344_43358__$1);
var G__43360 = cljs.core.chunk_rest.call(null,seq__43344_43358__$1);
var G__43361 = c__35001__auto___43359;
var G__43362 = cljs.core.count.call(null,c__35001__auto___43359);
var G__43363 = (0);
seq__43344_43348 = G__43360;
chunk__43345_43349 = G__43361;
count__43346_43350 = G__43362;
i__43347_43351 = G__43363;
continue;
} else {
var x_43364 = cljs.core.first.call(null,seq__43344_43358__$1);
ret.push(x_43364);

var G__43365 = cljs.core.next.call(null,seq__43344_43358__$1);
var G__43366 = null;
var G__43367 = (0);
var G__43368 = (0);
seq__43344_43348 = G__43365;
chunk__43345_43349 = G__43366;
count__43346_43350 = G__43367;
i__43347_43351 = G__43368;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__43369_43373 = cljs.core.seq.call(null,v);
var chunk__43370_43374 = null;
var count__43371_43375 = (0);
var i__43372_43376 = (0);
while(true){
if((i__43372_43376 < count__43371_43375)){
var x_43377 = cljs.core._nth.call(null,chunk__43370_43374,i__43372_43376);
ret.push(x_43377);

var G__43378 = seq__43369_43373;
var G__43379 = chunk__43370_43374;
var G__43380 = count__43371_43375;
var G__43381 = (i__43372_43376 + (1));
seq__43369_43373 = G__43378;
chunk__43370_43374 = G__43379;
count__43371_43375 = G__43380;
i__43372_43376 = G__43381;
continue;
} else {
var temp__4425__auto___43382 = cljs.core.seq.call(null,seq__43369_43373);
if(temp__4425__auto___43382){
var seq__43369_43383__$1 = temp__4425__auto___43382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43369_43383__$1)){
var c__35001__auto___43384 = cljs.core.chunk_first.call(null,seq__43369_43383__$1);
var G__43385 = cljs.core.chunk_rest.call(null,seq__43369_43383__$1);
var G__43386 = c__35001__auto___43384;
var G__43387 = cljs.core.count.call(null,c__35001__auto___43384);
var G__43388 = (0);
seq__43369_43373 = G__43385;
chunk__43370_43374 = G__43386;
count__43371_43375 = G__43387;
i__43372_43376 = G__43388;
continue;
} else {
var x_43389 = cljs.core.first.call(null,seq__43369_43383__$1);
ret.push(x_43389);

var G__43390 = cljs.core.next.call(null,seq__43369_43383__$1);
var G__43391 = null;
var G__43392 = (0);
var G__43393 = (0);
seq__43369_43373 = G__43390;
chunk__43370_43374 = G__43391;
count__43371_43375 = G__43392;
i__43372_43376 = G__43393;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args43394 = [];
var len__35256__auto___43405 = arguments.length;
var i__35257__auto___43406 = (0);
while(true){
if((i__35257__auto___43406 < len__35256__auto___43405)){
args43394.push((arguments[i__35257__auto___43406]));

var G__43407 = (i__35257__auto___43406 + (1));
i__35257__auto___43406 = G__43407;
continue;
} else {
}
break;
}

var G__43396 = args43394.length;
switch (G__43396) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43394.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__43397 = obj;
G__43397.push(kfn.call(null,k),vfn.call(null,v));

return G__43397;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x43398 = cljs.core.clone.call(null,handlers);
x43398.forEach = ((function (x43398,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__43399 = cljs.core.seq.call(null,coll);
var chunk__43400 = null;
var count__43401 = (0);
var i__43402 = (0);
while(true){
if((i__43402 < count__43401)){
var vec__43403 = cljs.core._nth.call(null,chunk__43400,i__43402);
var k = cljs.core.nth.call(null,vec__43403,(0),null);
var v = cljs.core.nth.call(null,vec__43403,(1),null);
f.call(null,v,k);

var G__43409 = seq__43399;
var G__43410 = chunk__43400;
var G__43411 = count__43401;
var G__43412 = (i__43402 + (1));
seq__43399 = G__43409;
chunk__43400 = G__43410;
count__43401 = G__43411;
i__43402 = G__43412;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__43399);
if(temp__4425__auto__){
var seq__43399__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43399__$1)){
var c__35001__auto__ = cljs.core.chunk_first.call(null,seq__43399__$1);
var G__43413 = cljs.core.chunk_rest.call(null,seq__43399__$1);
var G__43414 = c__35001__auto__;
var G__43415 = cljs.core.count.call(null,c__35001__auto__);
var G__43416 = (0);
seq__43399 = G__43413;
chunk__43400 = G__43414;
count__43401 = G__43415;
i__43402 = G__43416;
continue;
} else {
var vec__43404 = cljs.core.first.call(null,seq__43399__$1);
var k = cljs.core.nth.call(null,vec__43404,(0),null);
var v = cljs.core.nth.call(null,vec__43404,(1),null);
f.call(null,v,k);

var G__43417 = cljs.core.next.call(null,seq__43399__$1);
var G__43418 = null;
var G__43419 = (0);
var G__43420 = (0);
seq__43399 = G__43417;
chunk__43400 = G__43418;
count__43401 = G__43419;
i__43402 = G__43420;
continue;
}
} else {
return null;
}
}
break;
}
});})(x43398,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x43398;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args43421 = [];
var len__35256__auto___43427 = arguments.length;
var i__35257__auto___43428 = (0);
while(true){
if((i__35257__auto___43428 < len__35256__auto___43427)){
args43421.push((arguments[i__35257__auto___43428]));

var G__43429 = (i__35257__auto___43428 + (1));
i__35257__auto___43428 = G__43429;
continue;
} else {
}
break;
}

var G__43423 = args43421.length;
switch (G__43423) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43421.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit43424 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit43424 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta43425){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta43425 = meta43425;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit43424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43426,meta43425__$1){
var self__ = this;
var _43426__$1 = this;
return (new cognitect.transit.t_cognitect$transit43424(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta43425__$1));
});

cognitect.transit.t_cognitect$transit43424.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43426){
var self__ = this;
var _43426__$1 = this;
return self__.meta43425;
});

cognitect.transit.t_cognitect$transit43424.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit43424.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit43424.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit43424.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit43424.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta43425","meta43425",-2035051911,null)], null);
});

cognitect.transit.t_cognitect$transit43424.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit43424.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit43424";

cognitect.transit.t_cognitect$transit43424.cljs$lang$ctorPrWriter = (function (this__34796__auto__,writer__34797__auto__,opt__34798__auto__){
return cljs.core._write.call(null,writer__34797__auto__,"cognitect.transit/t_cognitect$transit43424");
});

cognitect.transit.__GT_t_cognitect$transit43424 = (function cognitect$transit$__GT_t_cognitect$transit43424(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta43425){
return (new cognitect.transit.t_cognitect$transit43424(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta43425));
});

}

return (new cognitect.transit.t_cognitect$transit43424(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
