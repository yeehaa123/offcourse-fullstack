// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.course');
goog.require('cljs.core');
goog.require('offcourse.models.checkpoint');

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
offcourse.models.course.Course = (function (id,goal,checkpoints,__meta,__extmap,__hash){
this.id = id;
this.goal = goal;
this.checkpoints = checkpoints;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.models.course.Course.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19776__auto__,k__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
return cljs.core._lookup.call(null,this__19776__auto____$1,k__19777__auto__,null);
});

offcourse.models.course.Course.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19778__auto__,k25134,else__19779__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
var G__25136 = (((k25134 instanceof cljs.core.Keyword))?k25134.fqn:null);
switch (G__25136) {
case "id":
return self__.id;

break;
case "goal":
return self__.goal;

break;
case "checkpoints":
return self__.checkpoints;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25134,else__19779__auto__);

}
});

offcourse.models.course.Course.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19790__auto__,writer__19791__auto__,opts__19792__auto__){
var self__ = this;
var this__19790__auto____$1 = this;
var pr_pair__19793__auto__ = ((function (this__19790__auto____$1){
return (function (keyval__19794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,cljs.core.pr_writer,""," ","",opts__19792__auto__,keyval__19794__auto__);
});})(this__19790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,pr_pair__19793__auto__,"#offcourse.models.course.Course{",", ","}",opts__19792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"goal","goal",-2073396501),self__.goal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),self__.checkpoints],null))], null),self__.__extmap));
});

offcourse.models.course.Course.prototype.cljs$core$IIterable$ = true;

offcourse.models.course.Course.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25133){
var self__ = this;
var G__25133__$1 = this;
return (new cljs.core.RecordIter((0),G__25133__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.models.course.Course.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return self__.__meta;
});

offcourse.models.course.Course.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19770__auto__){
var self__ = this;
var this__19770__auto____$1 = this;
return (new offcourse.models.course.Course(self__.id,self__.goal,self__.checkpoints,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.models.course.Course.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19780__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.models.course.Course.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19771__auto__){
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

offcourse.models.course.Course.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19772__auto__,other__19773__auto__){
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

offcourse.models.course.Course.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19785__auto__,k__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"goal","goal",-2073396501),null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null), null),k__19786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19785__auto____$1),self__.__meta),k__19786__auto__);
} else {
return (new offcourse.models.course.Course(self__.id,self__.goal,self__.checkpoints,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19786__auto__)),null));
}
});

offcourse.models.course.Course.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19783__auto__,k__19784__auto__,G__25133){
var self__ = this;
var this__19783__auto____$1 = this;
var pred__25137 = cljs.core.keyword_identical_QMARK_;
var expr__25138 = k__19784__auto__;
if(cljs.core.truth_(pred__25137.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__25138))){
return (new offcourse.models.course.Course(G__25133,self__.goal,self__.checkpoints,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25137.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501),expr__25138))){
return (new offcourse.models.course.Course(self__.id,G__25133,self__.checkpoints,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25137.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),expr__25138))){
return (new offcourse.models.course.Course(self__.id,self__.goal,G__25133,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.models.course.Course(self__.id,self__.goal,self__.checkpoints,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19784__auto__,G__25133),null));
}
}
}
});

offcourse.models.course.Course.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19788__auto__){
var self__ = this;
var this__19788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"goal","goal",-2073396501),self__.goal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),self__.checkpoints],null))], null),self__.__extmap));
});

offcourse.models.course.Course.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19775__auto__,G__25133){
var self__ = this;
var this__19775__auto____$1 = this;
return (new offcourse.models.course.Course(self__.id,self__.goal,self__.checkpoints,G__25133,self__.__extmap,self__.__hash));
});

offcourse.models.course.Course.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19781__auto__,entry__19782__auto__){
var self__ = this;
var this__19781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19782__auto__)){
return cljs.core._assoc.call(null,this__19781__auto____$1,cljs.core._nth.call(null,entry__19782__auto__,(0)),cljs.core._nth.call(null,entry__19782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19781__auto____$1,entry__19782__auto__);
}
});

offcourse.models.course.Course.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"goal","goal",-432864974,null),new cljs.core.Symbol(null,"checkpoints","checkpoints",1281895382,null)], null);
});

offcourse.models.course.Course.cljs$lang$type = true;

offcourse.models.course.Course.cljs$lang$ctorPrSeq = (function (this__19810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.models.course/Course");
});

offcourse.models.course.Course.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"offcourse.models.course/Course");
});

offcourse.models.course.__GT_Course = (function offcourse$models$course$__GT_Course(id,goal,checkpoints){
return (new offcourse.models.course.Course(id,goal,checkpoints,null,null,null));
});

offcourse.models.course.map__GT_Course = (function offcourse$models$course$map__GT_Course(G__25135){
return (new offcourse.models.course.Course(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25135),new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(G__25135),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(G__25135),null,cljs.core.dissoc.call(null,G__25135,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)),null));
});

offcourse.models.course.new_course = (function offcourse$models$course$new_course(course,id){
return cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"id","id",-1388402092),id);
});
offcourse.models.course.add_temp_checkpoint = (function offcourse$models$course$add_temp_checkpoint(course,checkpoint){
return cljs.core.assoc_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"new","new",-2085437848)], null),checkpoint);
});
offcourse.models.course.next_checkpoint_id = (function offcourse$models$course$next_checkpoint_id(course){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course))) + (1));
});
offcourse.models.course.add_checkpoint = (function offcourse$models$course$add_checkpoint(course,checkpoint){
var checkpoint__$1 = offcourse.models.checkpoint.new_checkpoint.call(null,checkpoint,offcourse.models.course.next_checkpoint_id.call(null,course));
return cljs.core.assoc_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(checkpoint__$1)], null),checkpoint__$1);
});
offcourse.models.course.find_checkpoint = (function offcourse$models$course$find_checkpoint(course,checkpoint_id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course),checkpoint_id);
});
offcourse.models.course.needs_resources_QMARK_ = (function offcourse$models$course$needs_resources_QMARK_(course){
return !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"resource","resource",251898836),cljs.core.vals.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course))));
});
offcourse.models.course.toggle_done = (function offcourse$models$course$toggle_done(course,checkpoint_id){
return cljs.core.update_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id], null),(function (p1__25141_SHARP_){
return offcourse.models.checkpoint.toggle_done.call(null,p1__25141_SHARP_);
}));
});
offcourse.models.course.augment_checkpoint = (function offcourse$models$course$augment_checkpoint(course,checkpoint_id,resource){
return cljs.core.update_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id], null),(function (p1__25142_SHARP_){
return offcourse.models.checkpoint.add_resource.call(null,p1__25142_SHARP_,resource);
}));
});
offcourse.models.course.highlight = (function offcourse$models$course$highlight(course,checkpoint_id,highlight__$1){
return cljs.core.update_in.call(null,course,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733)], null),(function (){
return highlight__$1;
}));
});

//# sourceMappingURL=course.js.map