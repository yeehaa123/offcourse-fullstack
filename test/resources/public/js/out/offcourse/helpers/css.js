// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.helpers.css');
goog.require('cljs.core');
goog.require('clojure.string');
offcourse.helpers.css.state_classes = (function offcourse$helpers$css$state_classes(base_class,states){
var iter__19934__auto__ = (function offcourse$helpers$css$state_classes_$_iter__24552(s__24553){
return (new cljs.core.LazySeq(null,(function (){
var s__24553__$1 = s__24553;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24553__$1);
if(temp__4425__auto__){
var s__24553__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24553__$2)){
var c__19932__auto__ = cljs.core.chunk_first.call(null,s__24553__$2);
var size__19933__auto__ = cljs.core.count.call(null,c__19932__auto__);
var b__24555 = cljs.core.chunk_buffer.call(null,size__19933__auto__);
if((function (){var i__24554 = (0);
while(true){
if((i__24554 < size__19933__auto__)){
var state = cljs.core._nth.call(null,c__19932__auto__,i__24554);
cljs.core.chunk_append.call(null,b__24555,[cljs.core.str(base_class),cljs.core.str("-is-"),cljs.core.str(cljs.core.name.call(null,state))].join(''));

var G__24556 = (i__24554 + (1));
i__24554 = G__24556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24555),offcourse$helpers$css$state_classes_$_iter__24552.call(null,cljs.core.chunk_rest.call(null,s__24553__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24555),null);
}
} else {
var state = cljs.core.first.call(null,s__24553__$2);
return cljs.core.cons.call(null,[cljs.core.str(base_class),cljs.core.str("-is-"),cljs.core.str(cljs.core.name.call(null,state))].join(''),offcourse$helpers$css$state_classes_$_iter__24552.call(null,cljs.core.rest.call(null,s__24553__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19934__auto__.call(null,states);
});
offcourse.helpers.css.classes = (function offcourse$helpers$css$classes(var_args){
var args__20227__auto__ = [];
var len__20220__auto___24559 = arguments.length;
var i__20221__auto___24560 = (0);
while(true){
if((i__20221__auto___24560 < len__20220__auto___24559)){
args__20227__auto__.push((arguments[i__20221__auto___24560]));

var G__24561 = (i__20221__auto___24560 + (1));
i__20221__auto___24560 = G__24561;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return offcourse.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

offcourse.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic = (function (base_class,states){
var classes = offcourse.helpers.css.state_classes.call(null,base_class,states);
return clojure.string.join.call(null," ",cljs.core.conj.call(null,classes,base_class));
});

offcourse.helpers.css.classes.cljs$lang$maxFixedArity = (1);

offcourse.helpers.css.classes.cljs$lang$applyTo = (function (seq24557){
var G__24558 = cljs.core.first.call(null,seq24557);
var seq24557__$1 = cljs.core.next.call(null,seq24557);
return offcourse.helpers.css.classes.cljs$core$IFn$_invoke$arity$variadic(G__24558,seq24557__$1);
});
offcourse.helpers.css.type_class = (function offcourse$helpers$css$type_class(base_class,type){
return [cljs.core.str(base_class),cljs.core.str("-"),cljs.core.str(cljs.core.name.call(null,type))].join('');
});
offcourse.helpers.css.type_classes = (function offcourse$helpers$css$type_classes(base_class,type){
return clojure.string.join.call(null," ",cljs.core.conj.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_class], null),offcourse.helpers.css.type_class.call(null,base_class,type)));
});

//# sourceMappingURL=css.js.map