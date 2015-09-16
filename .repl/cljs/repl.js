// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43173_43187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43174_43188 = null;
var count__43175_43189 = (0);
var i__43176_43190 = (0);
while(true){
if((i__43176_43190 < count__43175_43189)){
var f_43191 = cljs.core._nth.call(null,chunk__43174_43188,i__43176_43190);
cljs.core.println.call(null,"  ",f_43191);

var G__43192 = seq__43173_43187;
var G__43193 = chunk__43174_43188;
var G__43194 = count__43175_43189;
var G__43195 = (i__43176_43190 + (1));
seq__43173_43187 = G__43192;
chunk__43174_43188 = G__43193;
count__43175_43189 = G__43194;
i__43176_43190 = G__43195;
continue;
} else {
var temp__4425__auto___43196 = cljs.core.seq.call(null,seq__43173_43187);
if(temp__4425__auto___43196){
var seq__43173_43197__$1 = temp__4425__auto___43196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43173_43197__$1)){
var c__35003__auto___43198 = cljs.core.chunk_first.call(null,seq__43173_43197__$1);
var G__43199 = cljs.core.chunk_rest.call(null,seq__43173_43197__$1);
var G__43200 = c__35003__auto___43198;
var G__43201 = cljs.core.count.call(null,c__35003__auto___43198);
var G__43202 = (0);
seq__43173_43187 = G__43199;
chunk__43174_43188 = G__43200;
count__43175_43189 = G__43201;
i__43176_43190 = G__43202;
continue;
} else {
var f_43203 = cljs.core.first.call(null,seq__43173_43197__$1);
cljs.core.println.call(null,"  ",f_43203);

var G__43204 = cljs.core.next.call(null,seq__43173_43197__$1);
var G__43205 = null;
var G__43206 = (0);
var G__43207 = (0);
seq__43173_43187 = G__43204;
chunk__43174_43188 = G__43205;
count__43175_43189 = G__43206;
i__43176_43190 = G__43207;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43208 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34200__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34200__auto__)){
return or__34200__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43208);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43208)))?cljs.core.second.call(null,arglists_43208):arglists_43208));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43177 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43178 = null;
var count__43179 = (0);
var i__43180 = (0);
while(true){
if((i__43180 < count__43179)){
var vec__43181 = cljs.core._nth.call(null,chunk__43178,i__43180);
var name = cljs.core.nth.call(null,vec__43181,(0),null);
var map__43182 = cljs.core.nth.call(null,vec__43181,(1),null);
var map__43182__$1 = ((((!((map__43182 == null)))?((((map__43182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43182):map__43182);
var doc = cljs.core.get.call(null,map__43182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__43182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__43209 = seq__43177;
var G__43210 = chunk__43178;
var G__43211 = count__43179;
var G__43212 = (i__43180 + (1));
seq__43177 = G__43209;
chunk__43178 = G__43210;
count__43179 = G__43211;
i__43180 = G__43212;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__43177);
if(temp__4425__auto__){
var seq__43177__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43177__$1)){
var c__35003__auto__ = cljs.core.chunk_first.call(null,seq__43177__$1);
var G__43213 = cljs.core.chunk_rest.call(null,seq__43177__$1);
var G__43214 = c__35003__auto__;
var G__43215 = cljs.core.count.call(null,c__35003__auto__);
var G__43216 = (0);
seq__43177 = G__43213;
chunk__43178 = G__43214;
count__43179 = G__43215;
i__43180 = G__43216;
continue;
} else {
var vec__43184 = cljs.core.first.call(null,seq__43177__$1);
var name = cljs.core.nth.call(null,vec__43184,(0),null);
var map__43185 = cljs.core.nth.call(null,vec__43184,(1),null);
var map__43185__$1 = ((((!((map__43185 == null)))?((((map__43185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43185):map__43185);
var doc = cljs.core.get.call(null,map__43185__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__43185__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__43217 = cljs.core.next.call(null,seq__43177__$1);
var G__43218 = null;
var G__43219 = (0);
var G__43220 = (0);
seq__43177 = G__43217;
chunk__43178 = G__43218;
count__43179 = G__43219;
i__43180 = G__43220;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
