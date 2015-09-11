// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.views.helpers.css');
goog.require('cljs.core');
goog.require('clojure.string');
offcourse.views.helpers.css.state_classes = (function offcourse$views$helpers$css$state_classes(base_class,states){
var iter__34970__auto__ = (function offcourse$views$helpers$css$state_classes_$_iter__43350(s__43351){
return (new cljs.core.LazySeq(null,(function (){
var s__43351__$1 = s__43351;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43351__$1);
if(temp__4425__auto__){
var s__43351__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43351__$2)){
var c__34968__auto__ = cljs.core.chunk_first.call(null,s__43351__$2);
var size__34969__auto__ = cljs.core.count.call(null,c__34968__auto__);
var b__43353 = cljs.core.chunk_buffer.call(null,size__34969__auto__);
if((function (){var i__43352 = (0);
while(true){
if((i__43352 < size__34969__auto__)){
var state = cljs.core._nth.call(null,c__34968__auto__,i__43352);
cljs.core.chunk_append.call(null,b__43353,[cljs.core.str(base_class),cljs.core.str("-is-"),cljs.core.str(cljs.core.name.call(null,state))].join(''));

var G__43354 = (i__43352 + (1));
i__43352 = G__43354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43353),offcourse$views$helpers$css$state_classes_$_iter__43350.call(null,cljs.core.chunk_rest.call(null,s__43351__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43353),null);
}
} else {
var state = cljs.core.first.call(null,s__43351__$2);
return cljs.core.cons.call(null,[cljs.core.str(base_class),cljs.core.str("-is-"),cljs.core.str(cljs.core.name.call(null,state))].join(''),offcourse$views$helpers$css$state_classes_$_iter__43350.call(null,cljs.core.rest.call(null,s__43351__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__34970__auto__.call(null,states);
});
offcourse.views.helpers.css.classes = (function offcourse$views$helpers$css$classes(var_args){
var args__35263__auto__ = [];
var len__35256__auto___43357 = arguments.length;
var i__35257__auto___43358 = (0);
while(true){
if((i__35257__auto___43358 < len__35256__auto___43357)){
args__35263__auto__.push((arguments[i__35257__auto___43358]));

var G__43359 = (i__35257__auto___43358 + (1));
i__35257__auto___43358 = G__43359;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return offcourse.views.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

offcourse.views.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic = (function (base_class,states){
var classes = offcourse.views.helpers.css.state_classes.call(null,base_class,states);
return clojure.string.join.call(null," ",cljs.core.conj.call(null,classes,base_class));
});

offcourse.views.helpers.css.classes.cljs$lang$maxFixedArity = (1);

offcourse.views.helpers.css.classes.cljs$lang$applyTo = (function (seq43355){
var G__43356 = cljs.core.first.call(null,seq43355);
var seq43355__$1 = cljs.core.next.call(null,seq43355);
return offcourse.views.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic(G__43356,seq43355__$1);
});
