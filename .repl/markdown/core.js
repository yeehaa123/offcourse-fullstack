// Compiled by ClojureScript 1.7.122 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__42312){
var map__42319 = p__42312;
var map__42319__$1 = ((((!((map__42319 == null)))?((((map__42319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42319):map__42319);
var replacement_transformers = cljs.core.get.call(null,map__42319__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__42319__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__42319,map__42319__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_42321 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__42322 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_42321,map__42319,map__42319__$1,replacement_transformers,custom_transformers){
return (function (p__42323,transformer){
var vec__42324 = p__42323;
var text = cljs.core.nth.call(null,vec__42324,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__42324,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_42321,map__42319,map__42319__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__34198__auto__ = replacement_transformers;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__42322,(0),null);
var new_state = cljs.core.nth.call(null,vec__42322,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_42321;
}});
;})(map__42319,map__42319__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__35263__auto__ = [];
var len__35256__auto___42327 = arguments.length;
var i__35257__auto___42328 = (0);
while(true){
if((i__35257__auto___42328 < len__35256__auto___42327)){
args__35263__auto__.push((arguments[i__35257__auto___42328]));

var G__42329 = (i__35257__auto___42328 + (1));
i__35257__auto___42328 = G__42329;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq42325){
var G__42326 = cljs.core.first.call(null,seq42325);
var seq42325__$1 = cljs.core.next.call(null,seq42325);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__42326,seq42325__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__42334_42338 = cljs.core.seq.call(null,lines);
var chunk__42335_42339 = null;
var count__42336_42340 = (0);
var i__42337_42341 = (0);
while(true){
if((i__42337_42341 < count__42336_42340)){
var line_42342 = cljs.core._nth.call(null,chunk__42335_42339,i__42337_42341);
markdown.transformers.parse_reference_link.call(null,line_42342,references);

var G__42343 = seq__42334_42338;
var G__42344 = chunk__42335_42339;
var G__42345 = count__42336_42340;
var G__42346 = (i__42337_42341 + (1));
seq__42334_42338 = G__42343;
chunk__42335_42339 = G__42344;
count__42336_42340 = G__42345;
i__42337_42341 = G__42346;
continue;
} else {
var temp__4425__auto___42347 = cljs.core.seq.call(null,seq__42334_42338);
if(temp__4425__auto___42347){
var seq__42334_42348__$1 = temp__4425__auto___42347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42334_42348__$1)){
var c__35001__auto___42349 = cljs.core.chunk_first.call(null,seq__42334_42348__$1);
var G__42350 = cljs.core.chunk_rest.call(null,seq__42334_42348__$1);
var G__42351 = c__35001__auto___42349;
var G__42352 = cljs.core.count.call(null,c__35001__auto___42349);
var G__42353 = (0);
seq__42334_42338 = G__42350;
chunk__42335_42339 = G__42351;
count__42336_42340 = G__42352;
i__42337_42341 = G__42353;
continue;
} else {
var line_42354 = cljs.core.first.call(null,seq__42334_42348__$1);
markdown.transformers.parse_reference_link.call(null,line_42354,references);

var G__42355 = cljs.core.next.call(null,seq__42334_42348__$1);
var G__42356 = null;
var G__42357 = (0);
var G__42358 = (0);
seq__42334_42338 = G__42355;
chunk__42335_42339 = G__42356;
count__42336_42340 = G__42357;
i__42337_42341 = G__42358;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__35263__auto__ = [];
var len__35256__auto___42367 = arguments.length;
var i__35257__auto___42368 = (0);
while(true){
if((i__35257__auto___42368 < len__35256__auto___42367)){
args__35263__auto__.push((arguments[i__35257__auto___42368]));

var G__42369 = (i__35257__auto___42368 + (1));
i__35257__auto___42368 = G__42369;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_42361 = markdown.transformers._STAR_substring_STAR_;
var formatter42362 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_42361,formatter42362){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_42361,formatter42362))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__42364_42370 = lines;
var vec__42365_42371 = G__42364_42370;
var line_42372 = cljs.core.nth.call(null,vec__42365_42371,(0),null);
var more_42373 = cljs.core.nthnext.call(null,vec__42365_42371,(1));
var state_42374 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__42364_42375__$1 = G__42364_42370;
var state_42376__$1 = state_42374;
while(true){
var vec__42366_42377 = G__42364_42375__$1;
var line_42378__$1 = cljs.core.nth.call(null,vec__42366_42377,(0),null);
var more_42379__$1 = cljs.core.nthnext.call(null,vec__42366_42377,(1));
var state_42380__$2 = state_42376__$1;
var state_42381__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_42380__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_42380__$2),cljs.core.first.call(null,more_42379__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_42380__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_42380__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_42379__$1))){
var G__42382 = more_42379__$1;
var G__42383 = cljs.core.assoc.call(null,transformer.call(null,html,line_42378__$1,cljs.core.first.call(null,more_42379__$1),state_42381__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_42378__$1));
G__42364_42375__$1 = G__42382;
state_42376__$1 = G__42383;
continue;
} else {
transformer.call(null,html,line_42378__$1,"",cljs.core.assoc.call(null,state_42381__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter42362;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_42361;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq42359){
var G__42360 = cljs.core.first.call(null,seq42359);
var seq42359__$1 = cljs.core.next.call(null,seq42359);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__42360,seq42359__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__35263__auto__ = [];
var len__35256__auto___42385 = arguments.length;
var i__35257__auto___42386 = (0);
while(true){
if((i__35257__auto___42386 < len__35256__auto___42385)){
args__35263__auto__.push((arguments[i__35257__auto___42386]));

var G__42387 = (i__35257__auto___42386 + (1));
i__35257__auto___42386 = G__42387;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((0) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__35264__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq42384){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42384));
});
