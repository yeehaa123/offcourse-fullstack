// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.viewmodel');
goog.require('cljs.core');
goog.require('offcourse.models.course');
goog.require('offcourse.models.collection');

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
offcourse.appstate.viewmodel.CheckpointViewmodel = (function (level,course,checkpoint_id,__meta,__extmap,__hash){
this.level = level;
this.course = course;
this.checkpoint_id = checkpoint_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19776__auto__,k__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
return cljs.core._lookup.call(null,this__19776__auto____$1,k__19777__auto__,null);
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19778__auto__,k26141,else__19779__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
var G__26143 = (((k26141 instanceof cljs.core.Keyword))?k26141.fqn:null);
switch (G__26143) {
case "level":
return self__.level;

break;
case "course":
return self__.course;

break;
case "checkpoint-id":
return self__.checkpoint_id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26141,else__19779__auto__);

}
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19790__auto__,writer__19791__auto__,opts__19792__auto__){
var self__ = this;
var this__19790__auto____$1 = this;
var pr_pair__19793__auto__ = ((function (this__19790__auto____$1){
return (function (keyval__19794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,cljs.core.pr_writer,""," ","",opts__19792__auto__,keyval__19794__auto__);
});})(this__19790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,pr_pair__19793__auto__,"#offcourse.appstate.viewmodel.CheckpointViewmodel{",", ","}",opts__19792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course","course",1455432948),self__.course],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),self__.checkpoint_id],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IIterable$ = true;

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26140){
var self__ = this;
var G__26140__$1 = this;
return (new cljs.core.RecordIter((0),G__26140__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return self__.__meta;
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19770__auto__){
var self__ = this;
var this__19770__auto____$1 = this;
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(self__.level,self__.course,self__.checkpoint_id,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19780__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19771__auto__){
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

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19772__auto__,other__19773__auto__){
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

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19785__auto__,k__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"course","course",1455432948),null], null), null),k__19786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19785__auto____$1),self__.__meta),k__19786__auto__);
} else {
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(self__.level,self__.course,self__.checkpoint_id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19786__auto__)),null));
}
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19783__auto__,k__19784__auto__,G__26140){
var self__ = this;
var this__19783__auto____$1 = this;
var pred__26144 = cljs.core.keyword_identical_QMARK_;
var expr__26145 = k__19784__auto__;
if(cljs.core.truth_(pred__26144.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__26145))){
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(G__26140,self__.course,self__.checkpoint_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26144.call(null,new cljs.core.Keyword(null,"course","course",1455432948),expr__26145))){
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(self__.level,G__26140,self__.checkpoint_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26144.call(null,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),expr__26145))){
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(self__.level,self__.course,G__26140,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(self__.level,self__.course,self__.checkpoint_id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19784__auto__,G__26140),null));
}
}
}
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19788__auto__){
var self__ = this;
var this__19788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course","course",1455432948),self__.course],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),self__.checkpoint_id],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19775__auto__,G__26140){
var self__ = this;
var this__19775__auto____$1 = this;
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(self__.level,self__.course,self__.checkpoint_id,G__26140,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodel.CheckpointViewmodel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19781__auto__,entry__19782__auto__){
var self__ = this;
var this__19781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19782__auto__)){
return cljs.core._assoc.call(null,this__19781__auto____$1,cljs.core._nth.call(null,entry__19782__auto__,(0)),cljs.core._nth.call(null,entry__19782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19781__auto____$1,entry__19782__auto__);
}
});

offcourse.appstate.viewmodel.CheckpointViewmodel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"course","course",-1199002821,null),new cljs.core.Symbol(null,"checkpoint-id","checkpoint-id",-1836333930,null)], null);
});

offcourse.appstate.viewmodel.CheckpointViewmodel.cljs$lang$type = true;

offcourse.appstate.viewmodel.CheckpointViewmodel.cljs$lang$ctorPrSeq = (function (this__19810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.appstate.viewmodel/CheckpointViewmodel");
});

offcourse.appstate.viewmodel.CheckpointViewmodel.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"offcourse.appstate.viewmodel/CheckpointViewmodel");
});

offcourse.appstate.viewmodel.__GT_CheckpointViewmodel = (function offcourse$appstate$viewmodel$__GT_CheckpointViewmodel(level,course,checkpoint_id){
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(level,course,checkpoint_id,null,null,null));
});

offcourse.appstate.viewmodel.map__GT_CheckpointViewmodel = (function offcourse$appstate$viewmodel$map__GT_CheckpointViewmodel(G__26142){
return (new offcourse.appstate.viewmodel.CheckpointViewmodel(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__26142),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(G__26142),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839).cljs$core$IFn$_invoke$arity$1(G__26142),null,cljs.core.dissoc.call(null,G__26142,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839)),null));
});


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
offcourse.appstate.viewmodel.CourseViewmodel = (function (level,course,__meta,__extmap,__hash){
this.level = level;
this.course = course;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19776__auto__,k__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
return cljs.core._lookup.call(null,this__19776__auto____$1,k__19777__auto__,null);
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19778__auto__,k26149,else__19779__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
var G__26151 = (((k26149 instanceof cljs.core.Keyword))?k26149.fqn:null);
switch (G__26151) {
case "level":
return self__.level;

break;
case "course":
return self__.course;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26149,else__19779__auto__);

}
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19790__auto__,writer__19791__auto__,opts__19792__auto__){
var self__ = this;
var this__19790__auto____$1 = this;
var pr_pair__19793__auto__ = ((function (this__19790__auto____$1){
return (function (keyval__19794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,cljs.core.pr_writer,""," ","",opts__19792__auto__,keyval__19794__auto__);
});})(this__19790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,pr_pair__19793__auto__,"#offcourse.appstate.viewmodel.CourseViewmodel{",", ","}",opts__19792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course","course",1455432948),self__.course],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IIterable$ = true;

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26148){
var self__ = this;
var G__26148__$1 = this;
return (new cljs.core.RecordIter((0),G__26148__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return self__.__meta;
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19770__auto__){
var self__ = this;
var this__19770__auto____$1 = this;
return (new offcourse.appstate.viewmodel.CourseViewmodel(self__.level,self__.course,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19780__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19771__auto__){
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

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19772__auto__,other__19773__auto__){
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

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19785__auto__,k__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"course","course",1455432948),null], null), null),k__19786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19785__auto____$1),self__.__meta),k__19786__auto__);
} else {
return (new offcourse.appstate.viewmodel.CourseViewmodel(self__.level,self__.course,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19786__auto__)),null));
}
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19783__auto__,k__19784__auto__,G__26148){
var self__ = this;
var this__19783__auto____$1 = this;
var pred__26152 = cljs.core.keyword_identical_QMARK_;
var expr__26153 = k__19784__auto__;
if(cljs.core.truth_(pred__26152.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__26153))){
return (new offcourse.appstate.viewmodel.CourseViewmodel(G__26148,self__.course,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26152.call(null,new cljs.core.Keyword(null,"course","course",1455432948),expr__26153))){
return (new offcourse.appstate.viewmodel.CourseViewmodel(self__.level,G__26148,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.appstate.viewmodel.CourseViewmodel(self__.level,self__.course,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19784__auto__,G__26148),null));
}
}
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19788__auto__){
var self__ = this;
var this__19788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course","course",1455432948),self__.course],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19775__auto__,G__26148){
var self__ = this;
var this__19775__auto____$1 = this;
return (new offcourse.appstate.viewmodel.CourseViewmodel(self__.level,self__.course,G__26148,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodel.CourseViewmodel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19781__auto__,entry__19782__auto__){
var self__ = this;
var this__19781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19782__auto__)){
return cljs.core._assoc.call(null,this__19781__auto____$1,cljs.core._nth.call(null,entry__19782__auto__,(0)),cljs.core._nth.call(null,entry__19782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19781__auto____$1,entry__19782__auto__);
}
});

offcourse.appstate.viewmodel.CourseViewmodel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"course","course",-1199002821,null)], null);
});

offcourse.appstate.viewmodel.CourseViewmodel.cljs$lang$type = true;

offcourse.appstate.viewmodel.CourseViewmodel.cljs$lang$ctorPrSeq = (function (this__19810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.appstate.viewmodel/CourseViewmodel");
});

offcourse.appstate.viewmodel.CourseViewmodel.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"offcourse.appstate.viewmodel/CourseViewmodel");
});

offcourse.appstate.viewmodel.__GT_CourseViewmodel = (function offcourse$appstate$viewmodel$__GT_CourseViewmodel(level,course){
return (new offcourse.appstate.viewmodel.CourseViewmodel(level,course,null,null,null));
});

offcourse.appstate.viewmodel.map__GT_CourseViewmodel = (function offcourse$appstate$viewmodel$map__GT_CourseViewmodel(G__26150){
return (new offcourse.appstate.viewmodel.CourseViewmodel(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__26150),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(G__26150),null,cljs.core.dissoc.call(null,G__26150,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948)),null));
});


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
offcourse.appstate.viewmodel.CollectionViewmodel = (function (level,collection,collection_name,collection_names,__meta,__extmap,__hash){
this.level = level;
this.collection = collection;
this.collection_name = collection_name;
this.collection_names = collection_names;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19776__auto__,k__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
return cljs.core._lookup.call(null,this__19776__auto____$1,k__19777__auto__,null);
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19778__auto__,k26157,else__19779__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
var G__26159 = (((k26157 instanceof cljs.core.Keyword))?k26157.fqn:null);
switch (G__26159) {
case "level":
return self__.level;

break;
case "collection":
return self__.collection;

break;
case "collection-name":
return self__.collection_name;

break;
case "collection-names":
return self__.collection_names;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26157,else__19779__auto__);

}
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19790__auto__,writer__19791__auto__,opts__19792__auto__){
var self__ = this;
var this__19790__auto____$1 = this;
var pr_pair__19793__auto__ = ((function (this__19790__auto____$1){
return (function (keyval__19794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,cljs.core.pr_writer,""," ","",opts__19792__auto__,keyval__19794__auto__);
});})(this__19790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,pr_pair__19793__auto__,"#offcourse.appstate.viewmodel.CollectionViewmodel{",", ","}",opts__19792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection","collection",-683361892),self__.collection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-name","collection-name",600435477),self__.collection_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-names","collection-names",1083533386),self__.collection_names],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IIterable$ = true;

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26156){
var self__ = this;
var G__26156__$1 = this;
return (new cljs.core.RecordIter((0),G__26156__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"collection-names","collection-names",1083533386)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return self__.__meta;
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19770__auto__){
var self__ = this;
var this__19770__auto____$1 = this;
return (new offcourse.appstate.viewmodel.CollectionViewmodel(self__.level,self__.collection,self__.collection_name,self__.collection_names,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19780__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19771__auto__){
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

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19772__auto__,other__19773__auto__){
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

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19785__auto__,k__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collection-names","collection-names",1083533386),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),null,new cljs.core.Keyword(null,"collection","collection",-683361892),null], null), null),k__19786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19785__auto____$1),self__.__meta),k__19786__auto__);
} else {
return (new offcourse.appstate.viewmodel.CollectionViewmodel(self__.level,self__.collection,self__.collection_name,self__.collection_names,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19786__auto__)),null));
}
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19783__auto__,k__19784__auto__,G__26156){
var self__ = this;
var this__19783__auto____$1 = this;
var pred__26160 = cljs.core.keyword_identical_QMARK_;
var expr__26161 = k__19784__auto__;
if(cljs.core.truth_(pred__26160.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__26161))){
return (new offcourse.appstate.viewmodel.CollectionViewmodel(G__26156,self__.collection,self__.collection_name,self__.collection_names,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26160.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),expr__26161))){
return (new offcourse.appstate.viewmodel.CollectionViewmodel(self__.level,G__26156,self__.collection_name,self__.collection_names,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26160.call(null,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),expr__26161))){
return (new offcourse.appstate.viewmodel.CollectionViewmodel(self__.level,self__.collection,G__26156,self__.collection_names,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26160.call(null,new cljs.core.Keyword(null,"collection-names","collection-names",1083533386),expr__26161))){
return (new offcourse.appstate.viewmodel.CollectionViewmodel(self__.level,self__.collection,self__.collection_name,G__26156,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.appstate.viewmodel.CollectionViewmodel(self__.level,self__.collection,self__.collection_name,self__.collection_names,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19784__auto__,G__26156),null));
}
}
}
}
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19788__auto__){
var self__ = this;
var this__19788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection","collection",-683361892),self__.collection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-name","collection-name",600435477),self__.collection_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-names","collection-names",1083533386),self__.collection_names],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19775__auto__,G__26156){
var self__ = this;
var this__19775__auto____$1 = this;
return (new offcourse.appstate.viewmodel.CollectionViewmodel(self__.level,self__.collection,self__.collection_name,self__.collection_names,G__26156,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodel.CollectionViewmodel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19781__auto__,entry__19782__auto__){
var self__ = this;
var this__19781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19782__auto__)){
return cljs.core._assoc.call(null,this__19781__auto____$1,cljs.core._nth.call(null,entry__19782__auto__,(0)),cljs.core._nth.call(null,entry__19782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19781__auto____$1,entry__19782__auto__);
}
});

offcourse.appstate.viewmodel.CollectionViewmodel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.Symbol(null,"collection","collection",957169635,null),new cljs.core.Symbol(null,"collection-name","collection-name",-2054000292,null),new cljs.core.Symbol(null,"collection-names","collection-names",-1570902383,null)], null);
});

offcourse.appstate.viewmodel.CollectionViewmodel.cljs$lang$type = true;

offcourse.appstate.viewmodel.CollectionViewmodel.cljs$lang$ctorPrSeq = (function (this__19810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.appstate.viewmodel/CollectionViewmodel");
});

offcourse.appstate.viewmodel.CollectionViewmodel.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"offcourse.appstate.viewmodel/CollectionViewmodel");
});

offcourse.appstate.viewmodel.__GT_CollectionViewmodel = (function offcourse$appstate$viewmodel$__GT_CollectionViewmodel(level,collection,collection_name,collection_names){
return (new offcourse.appstate.viewmodel.CollectionViewmodel(level,collection,collection_name,collection_names,null,null,null));
});

offcourse.appstate.viewmodel.map__GT_CollectionViewmodel = (function offcourse$appstate$viewmodel$map__GT_CollectionViewmodel(G__26158){
return (new offcourse.appstate.viewmodel.CollectionViewmodel(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__26158),new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(G__26158),new cljs.core.Keyword(null,"collection-name","collection-name",600435477).cljs$core$IFn$_invoke$arity$1(G__26158),new cljs.core.Keyword(null,"collection-names","collection-names",1083533386).cljs$core$IFn$_invoke$arity$1(G__26158),null,cljs.core.dissoc.call(null,G__26158,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"collection-names","collection-names",1083533386)),null));
});

offcourse.appstate.viewmodel.new_checkpoint = (function offcourse$appstate$viewmodel$new_checkpoint(course,checkpoint_id){
return offcourse.appstate.viewmodel.map__GT_CheckpointViewmodel.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),new cljs.core.Keyword(null,"course","course",1455432948),course,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id], null));
});
offcourse.appstate.viewmodel.new_course = (function offcourse$appstate$viewmodel$new_course(course){
return offcourse.appstate.viewmodel.map__GT_CheckpointViewmodel.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"course","course",1455432948),course], null));
});
offcourse.appstate.viewmodel.new_collection = (function offcourse$appstate$viewmodel$new_collection(collection_name,collection){
return offcourse.appstate.viewmodel.map__GT_CollectionViewmodel.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"collection","collection",-683361892),collection,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name,new cljs.core.Keyword(null,"collection-names","collection-names",1083533386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"featured","featured",1584623723),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"popular","popular",-752193652)], null)], null));
});
offcourse.appstate.viewmodel.highlight_course = (function offcourse$appstate$viewmodel$highlight_course(viewmodel,checkpoint_id,highlight){
return cljs.core.update_in.call(null,viewmodel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),(function (p1__26164_SHARP_){
return offcourse.models.course.highlight.call(null,p1__26164_SHARP_,checkpoint_id,highlight);
}));
});
offcourse.appstate.viewmodel.highlight_collection = (function offcourse$appstate$viewmodel$highlight_collection(viewmodel,course_id,checkpoint_id,highlight){
return cljs.core.update_in.call(null,viewmodel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892)], null),(function (p1__26165_SHARP_){
return offcourse.models.collection.highlight.call(null,p1__26165_SHARP_,course_id,checkpoint_id,highlight);
}));
});

//# sourceMappingURL=viewmodel.js.map