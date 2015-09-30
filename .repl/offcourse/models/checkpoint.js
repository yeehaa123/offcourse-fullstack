// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.models.checkpoint');
goog.require('cljs.core');
offcourse.models.checkpoint.find_checkpoint = (function offcourse$models$checkpoint$find_checkpoint(checkpoints,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__43446_SHARP_){
return (id === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43446_SHARP_));
}),checkpoints));
});
offcourse.models.checkpoint.remove_checkpoint = (function offcourse$models$checkpoint$remove_checkpoint(checkpoints,id){
return cljs.core.remove.call(null,(function (p1__43447_SHARP_){
return cljs.core._EQ_.call(null,p1__43447_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)),id);
}),checkpoints);
});
offcourse.models.checkpoint.add_checkpoint = (function offcourse$models$checkpoint$add_checkpoint(checkpoints,checkpoint){
return cljs.core.conj.call(null,checkpoints,checkpoint);
});
offcourse.models.checkpoint.toggle_done = (function offcourse$models$checkpoint$toggle_done(checkpoints,id){
return cljs.core.update_in.call(null,offcourse.models.checkpoint.find_checkpoint.call(null,checkpoints,id),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.not);
});
offcourse.models.checkpoint.update_checkpoints = (function offcourse$models$checkpoint$update_checkpoints(checkpoints,checkpoint){
var checkpoints__$1 = cljs.core.remove.call(null,(function (p1__43448_SHARP_){
return (checkpoint.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)) === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43448_SHARP_));
}),checkpoints);
return cljs.core.conj.call(null,checkpoints__$1,checkpoint);
});
