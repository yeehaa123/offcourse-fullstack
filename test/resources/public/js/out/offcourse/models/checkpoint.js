// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.checkpoint');
goog.require('cljs.core');

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
offcourse.models.checkpoint.Checkpoint = (function (id,task,url,completed,__meta,__extmap,__hash){
this.id = id;
this.task = task;
this.url = url;
this.completed = completed;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19776__auto__,k__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
return cljs.core._lookup.call(null,this__19776__auto____$1,k__19777__auto__,null);
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19778__auto__,k25124,else__19779__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
var G__25126 = (((k25124 instanceof cljs.core.Keyword))?k25124.fqn:null);
switch (G__25126) {
case "id":
return self__.id;

break;
case "task":
return self__.task;

break;
case "url":
return self__.url;

break;
case "completed":
return self__.completed;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25124,else__19779__auto__);

}
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19790__auto__,writer__19791__auto__,opts__19792__auto__){
var self__ = this;
var this__19790__auto____$1 = this;
var pr_pair__19793__auto__ = ((function (this__19790__auto____$1){
return (function (keyval__19794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,cljs.core.pr_writer,""," ","",opts__19792__auto__,keyval__19794__auto__);
});})(this__19790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,pr_pair__19793__auto__,"#offcourse.models.checkpoint.Checkpoint{",", ","}",opts__19792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"completed","completed",-486056503),self__.completed],null))], null),self__.__extmap));
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IIterable$ = true;

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25123){
var self__ = this;
var G__25123__$1 = this;
return (new cljs.core.RecordIter((0),G__25123__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return self__.__meta;
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19770__auto__){
var self__ = this;
var this__19770__auto____$1 = this;
return (new offcourse.models.checkpoint.Checkpoint(self__.id,self__.task,self__.url,self__.completed,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19780__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19771__auto__){
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

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19772__auto__,other__19773__auto__){
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

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19785__auto__,k__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"task","task",-1476607993),null,new cljs.core.Keyword(null,"completed","completed",-486056503),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),k__19786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19785__auto____$1),self__.__meta),k__19786__auto__);
} else {
return (new offcourse.models.checkpoint.Checkpoint(self__.id,self__.task,self__.url,self__.completed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19786__auto__)),null));
}
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19783__auto__,k__19784__auto__,G__25123){
var self__ = this;
var this__19783__auto____$1 = this;
var pred__25127 = cljs.core.keyword_identical_QMARK_;
var expr__25128 = k__19784__auto__;
if(cljs.core.truth_(pred__25127.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__25128))){
return (new offcourse.models.checkpoint.Checkpoint(G__25123,self__.task,self__.url,self__.completed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25127.call(null,new cljs.core.Keyword(null,"task","task",-1476607993),expr__25128))){
return (new offcourse.models.checkpoint.Checkpoint(self__.id,G__25123,self__.url,self__.completed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25127.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__25128))){
return (new offcourse.models.checkpoint.Checkpoint(self__.id,self__.task,G__25123,self__.completed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25127.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),expr__25128))){
return (new offcourse.models.checkpoint.Checkpoint(self__.id,self__.task,self__.url,G__25123,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.models.checkpoint.Checkpoint(self__.id,self__.task,self__.url,self__.completed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19784__auto__,G__25123),null));
}
}
}
}
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19788__auto__){
var self__ = this;
var this__19788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"task","task",-1476607993),self__.task],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"completed","completed",-486056503),self__.completed],null))], null),self__.__extmap));
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19775__auto__,G__25123){
var self__ = this;
var this__19775__auto____$1 = this;
return (new offcourse.models.checkpoint.Checkpoint(self__.id,self__.task,self__.url,self__.completed,G__25123,self__.__extmap,self__.__hash));
});

offcourse.models.checkpoint.Checkpoint.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19781__auto__,entry__19782__auto__){
var self__ = this;
var this__19781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19782__auto__)){
return cljs.core._assoc.call(null,this__19781__auto____$1,cljs.core._nth.call(null,entry__19782__auto__,(0)),cljs.core._nth.call(null,entry__19782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19781__auto____$1,entry__19782__auto__);
}
});

offcourse.models.checkpoint.Checkpoint.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"task","task",163923534,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"completed","completed",1154475024,null)], null);
});

offcourse.models.checkpoint.Checkpoint.cljs$lang$type = true;

offcourse.models.checkpoint.Checkpoint.cljs$lang$ctorPrSeq = (function (this__19810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.models.checkpoint/Checkpoint");
});

offcourse.models.checkpoint.Checkpoint.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"offcourse.models.checkpoint/Checkpoint");
});

offcourse.models.checkpoint.__GT_Checkpoint = (function offcourse$models$checkpoint$__GT_Checkpoint(id,task,url,completed){
return (new offcourse.models.checkpoint.Checkpoint(id,task,url,completed,null,null,null));
});

offcourse.models.checkpoint.map__GT_Checkpoint = (function offcourse$models$checkpoint$map__GT_Checkpoint(G__25125){
return (new offcourse.models.checkpoint.Checkpoint(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__25125),new cljs.core.Keyword(null,"task","task",-1476607993).cljs$core$IFn$_invoke$arity$1(G__25125),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__25125),new cljs.core.Keyword(null,"completed","completed",-486056503).cljs$core$IFn$_invoke$arity$1(G__25125),null,cljs.core.dissoc.call(null,G__25125,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"task","task",-1476607993),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"completed","completed",-486056503)),null));
});

offcourse.models.checkpoint.temp_checkpoint = (function offcourse$models$checkpoint$temp_checkpoint(){
return offcourse.models.checkpoint.map__GT_Checkpoint.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"task","task",-1476607993),"Do Something Different",new cljs.core.Keyword(null,"url","url",276297046),"bla.com",new cljs.core.Keyword(null,"completed","completed",-486056503),false], null));
});
offcourse.models.checkpoint.new_checkpoint = (function offcourse$models$checkpoint$new_checkpoint(checkpoint,checkpoint_id){
return offcourse.models.checkpoint.map__GT_Checkpoint.call(null,cljs.core.assoc.call(null,checkpoint,new cljs.core.Keyword(null,"id","id",-1388402092),checkpoint_id));
});
offcourse.models.checkpoint.toggle_done = (function offcourse$models$checkpoint$toggle_done(checkpoint){
return cljs.core.update_in.call(null,checkpoint,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.not);
});
offcourse.models.checkpoint.add_resource = (function offcourse$models$checkpoint$add_resource(checkpoint,resource){
return cljs.core.assoc.call(null,checkpoint,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(resource),new cljs.core.Keyword(null,"resource","resource",251898836),resource);
});

//# sourceMappingURL=checkpoint.js.map