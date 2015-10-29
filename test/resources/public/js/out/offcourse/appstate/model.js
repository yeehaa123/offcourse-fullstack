// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.model');
goog.require('cljs.core');
goog.require('offcourse.models.action');
goog.require('offcourse.models.course');
goog.require('offcourse.models.checkpoint');
goog.require('offcourse.appstate.viewmodel');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
offcourse.appstate.model.AppState = (function (level,mode,course_collections,viewmodel,__meta,__extmap,__hash){
this.level = level;
this.mode = mode;
this.course_collections = course_collections;
this.viewmodel = viewmodel;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.appstate.model.AppState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19776__auto__,k__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
return cljs.core._lookup.call(null,this__19776__auto____$1,k__19777__auto__,null);
});

offcourse.appstate.model.AppState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19778__auto__,k26169,else__19779__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
var G__26171 = (((k26169 instanceof cljs.core.Keyword))?k26169.fqn:null);
switch (G__26171) {
case "level":
return self__.level;

break;
case "mode":
return self__.mode;

break;
case "course-collections":
return self__.course_collections;

break;
case "viewmodel":
return self__.viewmodel;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26169,else__19779__auto__);

}
});

offcourse.appstate.model.AppState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19790__auto__,writer__19791__auto__,opts__19792__auto__){
var self__ = this;
var this__19790__auto____$1 = this;
var pr_pair__19793__auto__ = ((function (this__19790__auto____$1){
return (function (keyval__19794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,cljs.core.pr_writer,""," ","",opts__19792__auto__,keyval__19794__auto__);
});})(this__19790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,pr_pair__19793__auto__,"#offcourse.appstate.model.AppState{",", ","}",opts__19792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mode","mode",654403691),self__.mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course-collections","course-collections",753072947),self__.course_collections],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292),self__.viewmodel],null))], null),self__.__extmap));
});

offcourse.appstate.model.AppState.prototype.cljs$core$IIterable$ = true;

offcourse.appstate.model.AppState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26168){
var self__ = this;
var G__26168__$1 = this;
return (new cljs.core.RecordIter((0),G__26168__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"course-collections","course-collections",753072947),new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.appstate.model.AppState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return self__.__meta;
});

offcourse.appstate.model.AppState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19770__auto__){
var self__ = this;
var this__19770__auto____$1 = this;
return (new offcourse.appstate.model.AppState(self__.level,self__.mode,self__.course_collections,self__.viewmodel,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.appstate.model.AppState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19780__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.appstate.model.AppState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19771__auto__){
var self__ = this;
var this__19771__auto____$1 = this;
var h__19597__auto__ = self__.__hash;
if(!((h__19597__auto__ == null))){
return h__19597__auto__;
} else {
var h__19597__auto____$1 = cljs.core.hash_imap.call(null,this__19771__auto____$1);
self__.__hash = h__19597__auto____$1;

return h__19597__auto____$1;
}
});

offcourse.appstate.model.AppState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19772__auto__,other__19773__auto__){
var self__ = this;
var this__19772__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19150__auto__ = other__19773__auto__;
if(cljs.core.truth_(and__19150__auto__)){
var and__19150__auto____$1 = (this__19772__auto____$1.constructor === other__19773__auto__.constructor);
if(and__19150__auto____$1){
return cljs.core.equiv_map.call(null,this__19772__auto____$1,other__19773__auto__);
} else {
return and__19150__auto____$1;
}
} else {
return and__19150__auto__;
}
})())){
return true;
} else {
return false;
}
});

offcourse.appstate.model.AppState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19785__auto__,k__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mode","mode",654403691),null,new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"course-collections","course-collections",753072947),null], null), null),k__19786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19785__auto____$1),self__.__meta),k__19786__auto__);
} else {
return (new offcourse.appstate.model.AppState(self__.level,self__.mode,self__.course_collections,self__.viewmodel,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19786__auto__)),null));
}
});

offcourse.appstate.model.AppState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19783__auto__,k__19784__auto__,G__26168){
var self__ = this;
var this__19783__auto____$1 = this;
var pred__26172 = cljs.core.keyword_identical_QMARK_;
var expr__26173 = k__19784__auto__;
if(cljs.core.truth_(pred__26172.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__26173))){
return (new offcourse.appstate.model.AppState(G__26168,self__.mode,self__.course_collections,self__.viewmodel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26172.call(null,new cljs.core.Keyword(null,"mode","mode",654403691),expr__26173))){
return (new offcourse.appstate.model.AppState(self__.level,G__26168,self__.course_collections,self__.viewmodel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26172.call(null,new cljs.core.Keyword(null,"course-collections","course-collections",753072947),expr__26173))){
return (new offcourse.appstate.model.AppState(self__.level,self__.mode,G__26168,self__.viewmodel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26172.call(null,new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292),expr__26173))){
return (new offcourse.appstate.model.AppState(self__.level,self__.mode,self__.course_collections,G__26168,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.appstate.model.AppState(self__.level,self__.mode,self__.course_collections,self__.viewmodel,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19784__auto__,G__26168),null));
}
}
}
}
});

offcourse.appstate.model.AppState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19788__auto__){
var self__ = this;
var this__19788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mode","mode",654403691),self__.mode],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course-collections","course-collections",753072947),self__.course_collections],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292),self__.viewmodel],null))], null),self__.__extmap));
});

offcourse.appstate.model.AppState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19775__auto__,G__26168){
var self__ = this;
var this__19775__auto____$1 = this;
return (new offcourse.appstate.model.AppState(self__.level,self__.mode,self__.course_collections,self__.viewmodel,G__26168,self__.__extmap,self__.__hash));
});

offcourse.appstate.model.AppState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19781__auto__,entry__19782__auto__){
var self__ = this;
var this__19781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19782__auto__)){
return cljs.core._assoc.call(null,this__19781__auto____$1,cljs.core._nth.call(null,entry__19782__auto__,(0)),cljs.core._nth.call(null,entry__19782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19781__auto____$1,entry__19782__auto__);
}
});

offcourse.appstate.model.AppState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null),new cljs.core.Symbol(null,"course-collections","course-collections",-1901362822,null),new cljs.core.Symbol(null,"viewmodel","viewmodel",1624445235,null)], null);
});

offcourse.appstate.model.AppState.cljs$lang$type = true;

offcourse.appstate.model.AppState.cljs$lang$ctorPrSeq = (function (this__19810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.appstate.model/AppState");
});

offcourse.appstate.model.AppState.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"offcourse.appstate.model/AppState");
});

offcourse.appstate.model.__GT_AppState = (function offcourse$appstate$model$__GT_AppState(level,mode,course_collections,viewmodel){
return (new offcourse.appstate.model.AppState(level,mode,course_collections,viewmodel,null,null,null));
});

offcourse.appstate.model.map__GT_AppState = (function offcourse$appstate$model$map__GT_AppState(G__26170){
return (new offcourse.appstate.model.AppState(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__26170),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(G__26170),new cljs.core.Keyword(null,"course-collections","course-collections",753072947).cljs$core$IFn$_invoke$arity$1(G__26170),new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292).cljs$core$IFn$_invoke$arity$1(G__26170),null,cljs.core.dissoc.call(null,G__26170,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"course-collections","course-collections",753072947),new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292)),null));
});

offcourse.appstate.model.new_appstate = (function offcourse$appstate$model$new_appstate(){
return offcourse.appstate.model.map__GT_AppState.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"initial","initial",1854648214)], null),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"learn","learn",307520095),new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292),cljs.core.PersistentArrayMap.EMPTY], null));
});
offcourse.appstate.model.set_viewmodel = (function offcourse$appstate$model$set_viewmodel(appstate,viewmodel){
return cljs.core.assoc_in.call(null,appstate,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292)], null),viewmodel);
});
offcourse.appstate.model.update_viewmodel = (function offcourse$appstate$model$update_viewmodel(appstate,fn){
return cljs.core.update_in.call(null,appstate,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292)], null),fn);
});
offcourse.appstate.model.set_mode = (function offcourse$appstate$model$set_mode(appstate,mode){
return cljs.core.assoc_in.call(null,appstate,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691)], null),mode);
});
offcourse.appstate.model.set_level = (function offcourse$appstate$model$set_level(appstate,level){
return cljs.core.assoc.call(null,appstate,new cljs.core.Keyword(null,"level","level",1290497552),level);
});
offcourse.appstate.model.toggle_mode = (function offcourse$appstate$model$toggle_mode(appstate){
return cljs.core.update_in.call(null,appstate,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691)], null),(function (p1__26176_SHARP_){
if(cljs.core._EQ_.call(null,p1__26176_SHARP_,new cljs.core.Keyword(null,"learn","learn",307520095))){
return new cljs.core.Keyword(null,"curate","curate",976755582);
} else {
return new cljs.core.Keyword(null,"learn","learn",307520095);
}
}));
});
offcourse.appstate.model.add_checkpoint = (function offcourse$appstate$model$add_checkpoint(appstate,course){
var checkpoint = offcourse.models.checkpoint.temp_checkpoint.call(null);
var course__$1 = offcourse.models.course.add_temp_checkpoint.call(null,course,checkpoint);
return offcourse.appstate.model.set_viewmodel.call(null,appstate,offcourse.appstate.viewmodel.new_checkpoint.call(null,course__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(checkpoint)));
});
offcourse.appstate.model.refresh_checkpoint = (function offcourse$appstate$model$refresh_checkpoint(p__26177,course){
var map__26180 = p__26177;
var map__26180__$1 = ((((!((map__26180 == null)))?((((map__26180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26180):map__26180);
var appstate = map__26180__$1;
var level = cljs.core.get.call(null,map__26180__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var checkpoint_id = new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839).cljs$core$IFn$_invoke$arity$1(level);
return offcourse.appstate.model.set_viewmodel.call(null,appstate,offcourse.appstate.viewmodel.new_checkpoint.call(null,course,checkpoint_id));
});
offcourse.appstate.model.update_checkpoint = (function offcourse$appstate$model$update_checkpoint(p__26182,course){
var map__26185 = p__26182;
var map__26185__$1 = ((((!((map__26185 == null)))?((((map__26185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26185):map__26185);
var appstate = map__26185__$1;
var level = cljs.core.get.call(null,map__26185__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var checkpoint_id = new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839).cljs$core$IFn$_invoke$arity$1(level);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),checkpoint_id)){
return offcourse.appstate.model.add_checkpoint.call(null,appstate,course);
} else {
return offcourse.appstate.model.refresh_checkpoint.call(null,appstate,course);
}
});
offcourse.appstate.model.refresh_collection = (function offcourse$appstate$model$refresh_collection(p__26187,collection){
var map__26190 = p__26187;
var map__26190__$1 = ((((!((map__26190 == null)))?((((map__26190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26190):map__26190);
var appstate = map__26190__$1;
var level = cljs.core.get.call(null,map__26190__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var collection_name = new cljs.core.Keyword(null,"collection-name","collection-name",600435477).cljs$core$IFn$_invoke$arity$1(level);
return offcourse.appstate.model.set_viewmodel.call(null,appstate,offcourse.appstate.viewmodel.new_collection.call(null,collection_name,collection));
});
offcourse.appstate.model.refresh_course = (function offcourse$appstate$model$refresh_course(appstate,course){
return cljs.core.assoc_in.call(null,appstate,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292)], null),offcourse.appstate.viewmodel.new_course.call(null,course));
});
offcourse.appstate.model.highlight_collection = (function offcourse$appstate$model$highlight_collection(appstate,p__26193){
var map__26196 = p__26193;
var map__26196__$1 = ((((!((map__26196 == null)))?((((map__26196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26196):map__26196);
var course_id = cljs.core.get.call(null,map__26196__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__26196__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
var highlight = cljs.core.get.call(null,map__26196__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
return offcourse.appstate.model.update_viewmodel.call(null,appstate,((function (map__26196,map__26196__$1,course_id,checkpoint_id,highlight){
return (function (p1__26192_SHARP_){
return offcourse.appstate.viewmodel.highlight_collection.call(null,p1__26192_SHARP_,course_id,checkpoint_id,highlight);
});})(map__26196,map__26196__$1,course_id,checkpoint_id,highlight))
);
});
offcourse.appstate.model.highlight_course = (function offcourse$appstate$model$highlight_course(appstate,p__26199){
var map__26202 = p__26199;
var map__26202__$1 = ((((!((map__26202 == null)))?((((map__26202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26202):map__26202);
var checkpoint_id = cljs.core.get.call(null,map__26202__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
var highlight = cljs.core.get.call(null,map__26202__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
return offcourse.appstate.model.update_viewmodel.call(null,appstate,((function (map__26202,map__26202__$1,checkpoint_id,highlight){
return (function (p1__26198_SHARP_){
return offcourse.appstate.viewmodel.highlight_course.call(null,p1__26198_SHARP_,checkpoint_id,highlight);
});})(map__26202,map__26202__$1,checkpoint_id,highlight))
);
});

//# sourceMappingURL=model.js.map