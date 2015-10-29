// Compiled by ClojureScript 1.7.145 {}
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
var seq__29905_29909 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29906_29910 = null;
var count__29907_29911 = (0);
var i__29908_29912 = (0);
while(true){
if((i__29908_29912 < count__29907_29911)){
var k_29913 = cljs.core._nth.call(null,chunk__29906_29910,i__29908_29912);
var v_29914 = (b[k_29913]);
(a[k_29913] = v_29914);

var G__29915 = seq__29905_29909;
var G__29916 = chunk__29906_29910;
var G__29917 = count__29907_29911;
var G__29918 = (i__29908_29912 + (1));
seq__29905_29909 = G__29915;
chunk__29906_29910 = G__29916;
count__29907_29911 = G__29917;
i__29908_29912 = G__29918;
continue;
} else {
var temp__4425__auto___29919 = cljs.core.seq.call(null,seq__29905_29909);
if(temp__4425__auto___29919){
var seq__29905_29920__$1 = temp__4425__auto___29919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29905_29920__$1)){
var c__19965__auto___29921 = cljs.core.chunk_first.call(null,seq__29905_29920__$1);
var G__29922 = cljs.core.chunk_rest.call(null,seq__29905_29920__$1);
var G__29923 = c__19965__auto___29921;
var G__29924 = cljs.core.count.call(null,c__19965__auto___29921);
var G__29925 = (0);
seq__29905_29909 = G__29922;
chunk__29906_29910 = G__29923;
count__29907_29911 = G__29924;
i__29908_29912 = G__29925;
continue;
} else {
var k_29926 = cljs.core.first.call(null,seq__29905_29920__$1);
var v_29927 = (b[k_29926]);
(a[k_29926] = v_29927);

var G__29928 = cljs.core.next.call(null,seq__29905_29920__$1);
var G__29929 = null;
var G__29930 = (0);
var G__29931 = (0);
seq__29905_29909 = G__29928;
chunk__29906_29910 = G__29929;
count__29907_29911 = G__29930;
i__29908_29912 = G__29931;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/VectorBuilder");
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
var args29932 = [];
var len__20220__auto___29935 = arguments.length;
var i__20221__auto___29936 = (0);
while(true){
if((i__20221__auto___29936 < len__20220__auto___29935)){
args29932.push((arguments[i__20221__auto___29936]));

var G__29937 = (i__20221__auto___29936 + (1));
i__20221__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var G__29934 = args29932.length;
switch (G__29934) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29932.length)].join('')));

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
var G__29939 = (i + (2));
var G__29940 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29939;
ret = G__29940;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/SymbolHandler");
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
var seq__29941_29945 = cljs.core.seq.call(null,v);
var chunk__29942_29946 = null;
var count__29943_29947 = (0);
var i__29944_29948 = (0);
while(true){
if((i__29944_29948 < count__29943_29947)){
var x_29949 = cljs.core._nth.call(null,chunk__29942_29946,i__29944_29948);
ret.push(x_29949);

var G__29950 = seq__29941_29945;
var G__29951 = chunk__29942_29946;
var G__29952 = count__29943_29947;
var G__29953 = (i__29944_29948 + (1));
seq__29941_29945 = G__29950;
chunk__29942_29946 = G__29951;
count__29943_29947 = G__29952;
i__29944_29948 = G__29953;
continue;
} else {
var temp__4425__auto___29954 = cljs.core.seq.call(null,seq__29941_29945);
if(temp__4425__auto___29954){
var seq__29941_29955__$1 = temp__4425__auto___29954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29941_29955__$1)){
var c__19965__auto___29956 = cljs.core.chunk_first.call(null,seq__29941_29955__$1);
var G__29957 = cljs.core.chunk_rest.call(null,seq__29941_29955__$1);
var G__29958 = c__19965__auto___29956;
var G__29959 = cljs.core.count.call(null,c__19965__auto___29956);
var G__29960 = (0);
seq__29941_29945 = G__29957;
chunk__29942_29946 = G__29958;
count__29943_29947 = G__29959;
i__29944_29948 = G__29960;
continue;
} else {
var x_29961 = cljs.core.first.call(null,seq__29941_29955__$1);
ret.push(x_29961);

var G__29962 = cljs.core.next.call(null,seq__29941_29955__$1);
var G__29963 = null;
var G__29964 = (0);
var G__29965 = (0);
seq__29941_29945 = G__29962;
chunk__29942_29946 = G__29963;
count__29943_29947 = G__29964;
i__29944_29948 = G__29965;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/MapHandler");
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
var seq__29966_29970 = cljs.core.seq.call(null,v);
var chunk__29967_29971 = null;
var count__29968_29972 = (0);
var i__29969_29973 = (0);
while(true){
if((i__29969_29973 < count__29968_29972)){
var x_29974 = cljs.core._nth.call(null,chunk__29967_29971,i__29969_29973);
ret.push(x_29974);

var G__29975 = seq__29966_29970;
var G__29976 = chunk__29967_29971;
var G__29977 = count__29968_29972;
var G__29978 = (i__29969_29973 + (1));
seq__29966_29970 = G__29975;
chunk__29967_29971 = G__29976;
count__29968_29972 = G__29977;
i__29969_29973 = G__29978;
continue;
} else {
var temp__4425__auto___29979 = cljs.core.seq.call(null,seq__29966_29970);
if(temp__4425__auto___29979){
var seq__29966_29980__$1 = temp__4425__auto___29979;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29966_29980__$1)){
var c__19965__auto___29981 = cljs.core.chunk_first.call(null,seq__29966_29980__$1);
var G__29982 = cljs.core.chunk_rest.call(null,seq__29966_29980__$1);
var G__29983 = c__19965__auto___29981;
var G__29984 = cljs.core.count.call(null,c__19965__auto___29981);
var G__29985 = (0);
seq__29966_29970 = G__29982;
chunk__29967_29971 = G__29983;
count__29968_29972 = G__29984;
i__29969_29973 = G__29985;
continue;
} else {
var x_29986 = cljs.core.first.call(null,seq__29966_29980__$1);
ret.push(x_29986);

var G__29987 = cljs.core.next.call(null,seq__29966_29980__$1);
var G__29988 = null;
var G__29989 = (0);
var G__29990 = (0);
seq__29966_29970 = G__29987;
chunk__29967_29971 = G__29988;
count__29968_29972 = G__29989;
i__29969_29973 = G__29990;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/SetHandler");
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
var seq__29991_29995 = cljs.core.seq.call(null,v);
var chunk__29992_29996 = null;
var count__29993_29997 = (0);
var i__29994_29998 = (0);
while(true){
if((i__29994_29998 < count__29993_29997)){
var x_29999 = cljs.core._nth.call(null,chunk__29992_29996,i__29994_29998);
ret.push(x_29999);

var G__30000 = seq__29991_29995;
var G__30001 = chunk__29992_29996;
var G__30002 = count__29993_29997;
var G__30003 = (i__29994_29998 + (1));
seq__29991_29995 = G__30000;
chunk__29992_29996 = G__30001;
count__29993_29997 = G__30002;
i__29994_29998 = G__30003;
continue;
} else {
var temp__4425__auto___30004 = cljs.core.seq.call(null,seq__29991_29995);
if(temp__4425__auto___30004){
var seq__29991_30005__$1 = temp__4425__auto___30004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29991_30005__$1)){
var c__19965__auto___30006 = cljs.core.chunk_first.call(null,seq__29991_30005__$1);
var G__30007 = cljs.core.chunk_rest.call(null,seq__29991_30005__$1);
var G__30008 = c__19965__auto___30006;
var G__30009 = cljs.core.count.call(null,c__19965__auto___30006);
var G__30010 = (0);
seq__29991_29995 = G__30007;
chunk__29992_29996 = G__30008;
count__29993_29997 = G__30009;
i__29994_29998 = G__30010;
continue;
} else {
var x_30011 = cljs.core.first.call(null,seq__29991_30005__$1);
ret.push(x_30011);

var G__30012 = cljs.core.next.call(null,seq__29991_30005__$1);
var G__30013 = null;
var G__30014 = (0);
var G__30015 = (0);
seq__29991_29995 = G__30012;
chunk__29992_29996 = G__30013;
count__29993_29997 = G__30014;
i__29994_29998 = G__30015;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/UUIDHandler");
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
var args30016 = [];
var len__20220__auto___30027 = arguments.length;
var i__20221__auto___30028 = (0);
while(true){
if((i__20221__auto___30028 < len__20220__auto___30027)){
args30016.push((arguments[i__20221__auto___30028]));

var G__30029 = (i__20221__auto___30028 + (1));
i__20221__auto___30028 = G__30029;
continue;
} else {
}
break;
}

var G__30018 = args30016.length;
switch (G__30018) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30016.length)].join('')));

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
var G__30019 = obj;
G__30019.push(kfn.call(null,k),vfn.call(null,v));

return G__30019;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x30020 = cljs.core.clone.call(null,handlers);
x30020.forEach = ((function (x30020,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__30021 = cljs.core.seq.call(null,coll);
var chunk__30022 = null;
var count__30023 = (0);
var i__30024 = (0);
while(true){
if((i__30024 < count__30023)){
var vec__30025 = cljs.core._nth.call(null,chunk__30022,i__30024);
var k = cljs.core.nth.call(null,vec__30025,(0),null);
var v = cljs.core.nth.call(null,vec__30025,(1),null);
f.call(null,v,k);

var G__30031 = seq__30021;
var G__30032 = chunk__30022;
var G__30033 = count__30023;
var G__30034 = (i__30024 + (1));
seq__30021 = G__30031;
chunk__30022 = G__30032;
count__30023 = G__30033;
i__30024 = G__30034;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30021);
if(temp__4425__auto__){
var seq__30021__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30021__$1)){
var c__19965__auto__ = cljs.core.chunk_first.call(null,seq__30021__$1);
var G__30035 = cljs.core.chunk_rest.call(null,seq__30021__$1);
var G__30036 = c__19965__auto__;
var G__30037 = cljs.core.count.call(null,c__19965__auto__);
var G__30038 = (0);
seq__30021 = G__30035;
chunk__30022 = G__30036;
count__30023 = G__30037;
i__30024 = G__30038;
continue;
} else {
var vec__30026 = cljs.core.first.call(null,seq__30021__$1);
var k = cljs.core.nth.call(null,vec__30026,(0),null);
var v = cljs.core.nth.call(null,vec__30026,(1),null);
f.call(null,v,k);

var G__30039 = cljs.core.next.call(null,seq__30021__$1);
var G__30040 = null;
var G__30041 = (0);
var G__30042 = (0);
seq__30021 = G__30039;
chunk__30022 = G__30040;
count__30023 = G__30041;
i__30024 = G__30042;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30020,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x30020;
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
var args30043 = [];
var len__20220__auto___30049 = arguments.length;
var i__20221__auto___30050 = (0);
while(true){
if((i__20221__auto___30050 < len__20220__auto___30049)){
args30043.push((arguments[i__20221__auto___30050]));

var G__30051 = (i__20221__auto___30050 + (1));
i__20221__auto___30050 = G__30051;
continue;
} else {
}
break;
}

var G__30045 = args30043.length;
switch (G__30045) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30043.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit30046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit30046 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta30047){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta30047 = meta30047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit30046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30048,meta30047__$1){
var self__ = this;
var _30048__$1 = this;
return (new cognitect.transit.t_cognitect$transit30046(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta30047__$1));
});

cognitect.transit.t_cognitect$transit30046.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30048){
var self__ = this;
var _30048__$1 = this;
return self__.meta30047;
});

cognitect.transit.t_cognitect$transit30046.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30046.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30046.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30046.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30046.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta30047","meta30047",-62755518,null)], null);
});

cognitect.transit.t_cognitect$transit30046.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit30046.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit30046";

cognitect.transit.t_cognitect$transit30046.cljs$lang$ctorPrWriter = (function (this__19760__auto__,writer__19761__auto__,opt__19762__auto__){
return cljs.core._write.call(null,writer__19761__auto__,"cognitect.transit/t_cognitect$transit30046");
});

cognitect.transit.__GT_t_cognitect$transit30046 = (function cognitect$transit$__GT_t_cognitect$transit30046(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30047){
return (new cognitect.transit.t_cognitect$transit30046(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30047));
});

}

return (new cognitect.transit.t_cognitect$transit30046(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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

//# sourceMappingURL=transit.js.map