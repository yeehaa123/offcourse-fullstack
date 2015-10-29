// Compiled by ClojureScript 1.7.145 {}
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
var seq__34758_34772 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34759_34773 = null;
var count__34760_34774 = (0);
var i__34761_34775 = (0);
while(true){
if((i__34761_34775 < count__34760_34774)){
var f_34776 = cljs.core._nth.call(null,chunk__34759_34773,i__34761_34775);
cljs.core.println.call(null,"  ",f_34776);

var G__34777 = seq__34758_34772;
var G__34778 = chunk__34759_34773;
var G__34779 = count__34760_34774;
var G__34780 = (i__34761_34775 + (1));
seq__34758_34772 = G__34777;
chunk__34759_34773 = G__34778;
count__34760_34774 = G__34779;
i__34761_34775 = G__34780;
continue;
} else {
var temp__4425__auto___34781 = cljs.core.seq.call(null,seq__34758_34772);
if(temp__4425__auto___34781){
var seq__34758_34782__$1 = temp__4425__auto___34781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34758_34782__$1)){
var c__19965__auto___34783 = cljs.core.chunk_first.call(null,seq__34758_34782__$1);
var G__34784 = cljs.core.chunk_rest.call(null,seq__34758_34782__$1);
var G__34785 = c__19965__auto___34783;
var G__34786 = cljs.core.count.call(null,c__19965__auto___34783);
var G__34787 = (0);
seq__34758_34772 = G__34784;
chunk__34759_34773 = G__34785;
count__34760_34774 = G__34786;
i__34761_34775 = G__34787;
continue;
} else {
var f_34788 = cljs.core.first.call(null,seq__34758_34782__$1);
cljs.core.println.call(null,"  ",f_34788);

var G__34789 = cljs.core.next.call(null,seq__34758_34782__$1);
var G__34790 = null;
var G__34791 = (0);
var G__34792 = (0);
seq__34758_34772 = G__34789;
chunk__34759_34773 = G__34790;
count__34760_34774 = G__34791;
i__34761_34775 = G__34792;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34793 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19162__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34793);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34793)))?cljs.core.second.call(null,arglists_34793):arglists_34793));
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
var seq__34762 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34763 = null;
var count__34764 = (0);
var i__34765 = (0);
while(true){
if((i__34765 < count__34764)){
var vec__34766 = cljs.core._nth.call(null,chunk__34763,i__34765);
var name = cljs.core.nth.call(null,vec__34766,(0),null);
var map__34767 = cljs.core.nth.call(null,vec__34766,(1),null);
var map__34767__$1 = ((((!((map__34767 == null)))?((((map__34767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34767):map__34767);
var doc = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34794 = seq__34762;
var G__34795 = chunk__34763;
var G__34796 = count__34764;
var G__34797 = (i__34765 + (1));
seq__34762 = G__34794;
chunk__34763 = G__34795;
count__34764 = G__34796;
i__34765 = G__34797;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34762);
if(temp__4425__auto__){
var seq__34762__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34762__$1)){
var c__19965__auto__ = cljs.core.chunk_first.call(null,seq__34762__$1);
var G__34798 = cljs.core.chunk_rest.call(null,seq__34762__$1);
var G__34799 = c__19965__auto__;
var G__34800 = cljs.core.count.call(null,c__19965__auto__);
var G__34801 = (0);
seq__34762 = G__34798;
chunk__34763 = G__34799;
count__34764 = G__34800;
i__34765 = G__34801;
continue;
} else {
var vec__34769 = cljs.core.first.call(null,seq__34762__$1);
var name = cljs.core.nth.call(null,vec__34769,(0),null);
var map__34770 = cljs.core.nth.call(null,vec__34769,(1),null);
var map__34770__$1 = ((((!((map__34770 == null)))?((((map__34770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34770):map__34770);
var doc = cljs.core.get.call(null,map__34770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__34770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__34802 = cljs.core.next.call(null,seq__34762__$1);
var G__34803 = null;
var G__34804 = (0);
var G__34805 = (0);
seq__34762 = G__34802;
chunk__34763 = G__34803;
count__34764 = G__34804;
i__34765 = G__34805;
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

//# sourceMappingURL=repl.js.map