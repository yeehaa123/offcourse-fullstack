// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.views.css_helpers');
goog.require('cljs.core');
goog.require('clojure.string');
offcourse.views.css_helpers.state_classes = (function offcourse$views$css_helpers$state_classes(base_class,states){
var iter__34970__auto__ = (function offcourse$views$css_helpers$state_classes_$_iter__48823(s__48824){
return (new cljs.core.LazySeq(null,(function (){
var s__48824__$1 = s__48824;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__48824__$1);
if(temp__4425__auto__){
var s__48824__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48824__$2)){
var c__34968__auto__ = cljs.core.chunk_first.call(null,s__48824__$2);
var size__34969__auto__ = cljs.core.count.call(null,c__34968__auto__);
var b__48826 = cljs.core.chunk_buffer.call(null,size__34969__auto__);
if((function (){var i__48825 = (0);
while(true){
if((i__48825 < size__34969__auto__)){
var state = cljs.core._nth.call(null,c__34968__auto__,i__48825);
cljs.core.chunk_append.call(null,b__48826,[cljs.core.str(base_class),cljs.core.str("-is-"),cljs.core.str(cljs.core.name.call(null,state))].join(''));

var G__48827 = (i__48825 + (1));
i__48825 = G__48827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48826),offcourse$views$css_helpers$state_classes_$_iter__48823.call(null,cljs.core.chunk_rest.call(null,s__48824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48826),null);
}
} else {
var state = cljs.core.first.call(null,s__48824__$2);
return cljs.core.cons.call(null,[cljs.core.str(base_class),cljs.core.str("-is-"),cljs.core.str(cljs.core.name.call(null,state))].join(''),offcourse$views$css_helpers$state_classes_$_iter__48823.call(null,cljs.core.rest.call(null,s__48824__$2)));
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
offcourse.views.css_helpers.classes = (function offcourse$views$css_helpers$classes(var_args){
var args__35263__auto__ = [];
var len__35256__auto___48830 = arguments.length;
var i__35257__auto___48831 = (0);
while(true){
if((i__35257__auto___48831 < len__35256__auto___48830)){
args__35263__auto__.push((arguments[i__35257__auto___48831]));

var G__48832 = (i__35257__auto___48831 + (1));
i__35257__auto___48831 = G__48832;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return offcourse.views.css_helpers.classes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

offcourse.views.css_helpers.classes.cljs$core$IFn$_invoke$arity$variadic = (function (base_class,states){
var classes = offcourse.views.css_helpers.state_classes.call(null,base_class,states);
return clojure.string.join.call(null," ",cljs.core.conj.call(null,classes,base_class));
});

offcourse.views.css_helpers.classes.cljs$lang$maxFixedArity = (1);

offcourse.views.css_helpers.classes.cljs$lang$applyTo = (function (seq48828){
var G__48829 = cljs.core.first.call(null,seq48828);
var seq48828__$1 = cljs.core.next.call(null,seq48828);
return offcourse.views.css_helpers.classes.cljs$core$IFn$_invoke$arity$variadic(G__48829,seq48828__$1);
});
