// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.helpers.css');
goog.require('cljs.core');
goog.require('clojure.string');
offcourse.helpers.css.state_classes = (function offcourse$helpers$css$state_classes(base_class,states){
var iter__34972__auto__ = (function offcourse$helpers$css$state_classes_$_iter__43794(s__43795){
return (new cljs.core.LazySeq(null,(function (){
var s__43795__$1 = s__43795;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__43795__$1);
if(temp__4425__auto__){
var s__43795__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43795__$2)){
var c__34970__auto__ = cljs.core.chunk_first.call(null,s__43795__$2);
var size__34971__auto__ = cljs.core.count.call(null,c__34970__auto__);
var b__43797 = cljs.core.chunk_buffer.call(null,size__34971__auto__);
if((function (){var i__43796 = (0);
while(true){
if((i__43796 < size__34971__auto__)){
var state = cljs.core._nth.call(null,c__34970__auto__,i__43796);
cljs.core.chunk_append.call(null,b__43797,[cljs.core.str(base_class),cljs.core.str("-is-"),cljs.core.str(cljs.core.name.call(null,state))].join(''));

var G__43798 = (i__43796 + (1));
i__43796 = G__43798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43797),offcourse$helpers$css$state_classes_$_iter__43794.call(null,cljs.core.chunk_rest.call(null,s__43795__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43797),null);
}
} else {
var state = cljs.core.first.call(null,s__43795__$2);
return cljs.core.cons.call(null,[cljs.core.str(base_class),cljs.core.str("-is-"),cljs.core.str(cljs.core.name.call(null,state))].join(''),offcourse$helpers$css$state_classes_$_iter__43794.call(null,cljs.core.rest.call(null,s__43795__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__34972__auto__.call(null,states);
});
offcourse.helpers.css.classes = (function offcourse$helpers$css$classes(var_args){
var args__35265__auto__ = [];
var len__35258__auto___43801 = arguments.length;
var i__35259__auto___43802 = (0);
while(true){
if((i__35259__auto___43802 < len__35258__auto___43801)){
args__35265__auto__.push((arguments[i__35259__auto___43802]));

var G__43803 = (i__35259__auto___43802 + (1));
i__35259__auto___43802 = G__43803;
continue;
} else {
}
break;
}

var argseq__35266__auto__ = ((((1) < args__35265__auto__.length))?(new cljs.core.IndexedSeq(args__35265__auto__.slice((1)),(0))):null);
return offcourse.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35266__auto__);
});

offcourse.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic = (function (base_class,states){
var classes = offcourse.helpers.css.state_classes.call(null,base_class,states);
return clojure.string.join.call(null," ",cljs.core.conj.call(null,classes,base_class));
});

offcourse.helpers.css.classes.cljs$lang$maxFixedArity = (1);

offcourse.helpers.css.classes.cljs$lang$applyTo = (function (seq43799){
var G__43800 = cljs.core.first.call(null,seq43799);
var seq43799__$1 = cljs.core.next.call(null,seq43799);
return offcourse.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic(G__43800,seq43799__$1);
});
offcourse.helpers.css.type_class = (function offcourse$helpers$css$type_class(base_class,type){
return [cljs.core.str(base_class),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join('');
});
offcourse.helpers.css.type_classes = (function offcourse$helpers$css$type_classes(base_class,type){
return clojure.string.join.call(null," ",cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_class], null),offcourse.helpers.css.type_class.call(null,base_class,type)));
});
