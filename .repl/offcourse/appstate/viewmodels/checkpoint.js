// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.viewmodels.checkpoint');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('offcourse.models.course');
goog.require('offcourse.models.resource');
var bad_keys__21512__auto___50816 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21508__21513__auto__){
return schema.core.required_key_QMARK_.call(null,p1__21508__21513__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__21512__auto___50816)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__21512__auto___50816))));
}



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
offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel = (function (level,course,checkpoint_id,__meta,__extmap,__hash){
this.level = level;
this.course = course;
this.checkpoint_id = checkpoint_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k50806,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__50808 = (((k50806 instanceof cljs.core.Keyword))?k50806.fqn:null);
switch (G__50808) {
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
return cljs.core.get.call(null,self__.__extmap,k50806,else__19783__auto__);

}
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course","course",1455432948),self__.course],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),self__.checkpoint_id],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IIterable$ = true;

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50805){
var self__ = this;
var G__50805__$1 = this;
return (new cljs.core.RecordIter((0),G__50805__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(self__.level,self__.course,self__.checkpoint_id,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
var self__ = this;
var this__19775__auto____$1 = this;
var h__19601__auto__ = self__.__hash;
if(!((h__19601__auto__ == null))){
return h__19601__auto__;
} else {
var h__19601__auto____$1 = cljs.core.hash_imap.call(null,this__19775__auto____$1);
self__.__hash = h__19601__auto____$1;

return h__19601__auto____$1;
}
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19154__auto__ = other__19777__auto__;
if(cljs.core.truth_(and__19154__auto__)){
var and__19154__auto____$1 = (this__19776__auto____$1.constructor === other__19777__auto__.constructor);
if(and__19154__auto____$1){
return cljs.core.equiv_map.call(null,this__19776__auto____$1,other__19777__auto__);
} else {
return and__19154__auto____$1;
}
} else {
return and__19154__auto__;
}
})())){
return true;
} else {
return false;
}
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"course","course",1455432948),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(self__.level,self__.course,self__.checkpoint_id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__50805){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__50809 = cljs.core.keyword_identical_QMARK_;
var expr__50810 = k__19788__auto__;
if(cljs.core.truth_(pred__50809.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__50810))){
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(G__50805,self__.course,self__.checkpoint_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50809.call(null,new cljs.core.Keyword(null,"course","course",1455432948),expr__50810))){
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(self__.level,G__50805,self__.checkpoint_id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50809.call(null,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),expr__50810))){
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(self__.level,self__.course,G__50805,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(self__.level,self__.course,self__.checkpoint_id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__50805),null));
}
}
}
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course","course",1455432948),self__.course],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),self__.checkpoint_id],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__50805){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(self__.level,self__.course,self__.checkpoint_id,G__50805,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"course","course",-1199002821,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Course","Course",628923419,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"checkpoint-id","checkpoint-id",-1836333930,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema","Int","schema/Int",-873338627,null)], null))], null);
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.cljs$lang$type = true;

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.appstate.viewmodels.checkpoint/CheckpointViewmodel");
});

offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.appstate.viewmodels.checkpoint/CheckpointViewmodel");
});

offcourse.appstate.viewmodels.checkpoint.__GT_CheckpointViewmodel = (function offcourse$appstate$viewmodels$checkpoint$__GT_CheckpointViewmodel(level,course,checkpoint_id){
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(level,course,checkpoint_id,null,null,null));
});

offcourse.appstate.viewmodels.checkpoint.map__GT_CheckpointViewmodel = (function offcourse$appstate$viewmodels$checkpoint$map__GT_CheckpointViewmodel(G__50807){
return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__50807),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(G__50807),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839).cljs$core$IFn$_invoke$arity$1(G__50807),null,cljs.core.dissoc.call(null,G__50807,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839)),null));
});


schema.utils.declare_class_schema_BANG_.call(null,offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.Keyword,new cljs.core.Keyword(null,"course","course",1455432948),offcourse.models.course.Course,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),schema.core.Int], null),null),(function (p1__22823__22824__auto__){
return offcourse.appstate.viewmodels.checkpoint.map__GT_CheckpointViewmodel.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__22823__22824__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class CheckpointViewmodel, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
offcourse.appstate.viewmodels.checkpoint.strict_map__GT_CheckpointViewmodel = (function offcourse$appstate$viewmodels$checkpoint$strict_map__GT_CheckpointViewmodel(var_args){
var args__20231__auto__ = [];
var len__20224__auto___50818 = arguments.length;
var i__20225__auto___50819 = (0);
while(true){
if((i__20225__auto___50819 < len__20224__auto___50818)){
args__20231__auto__.push((arguments[i__20225__auto___50819]));

var G__50820 = (i__20225__auto___50819 + (1));
i__20225__auto___50819 = G__50820;
continue;
} else {
}
break;
}

var argseq__20232__auto__ = ((((1) < args__20231__auto__.length))?(new cljs.core.IndexedSeq(args__20231__auto__.slice((1)),(0))):null);
return offcourse.appstate.viewmodels.checkpoint.strict_map__GT_CheckpointViewmodel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20232__auto__);
});

offcourse.appstate.viewmodels.checkpoint.strict_map__GT_CheckpointViewmodel.cljs$core$IFn$_invoke$arity$variadic = (function (m50804,p__50814){
var vec__50815 = p__50814;
var drop_extra_keys_QMARK___21511__auto__ = cljs.core.nth.call(null,vec__50815,(0),null);
if(cljs.core.truth_((function (){var or__19166__auto__ = drop_extra_keys_QMARK___21511__auto__;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m50804),3);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m50804)))));
}

return (new offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel((function (){var m__21414__auto__ = m50804;
var k__21415__auto__ = new cljs.core.Keyword(null,"level","level",1290497552);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50804;
var k__21415__auto__ = new cljs.core.Keyword(null,"course","course",1455432948);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50804;
var k__21415__auto__ = new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),null,null,null));
});

offcourse.appstate.viewmodels.checkpoint.strict_map__GT_CheckpointViewmodel.cljs$lang$maxFixedArity = (1);

offcourse.appstate.viewmodels.checkpoint.strict_map__GT_CheckpointViewmodel.cljs$lang$applyTo = (function (seq50812){
var G__50813 = cljs.core.first.call(null,seq50812);
var seq50812__$1 = cljs.core.next.call(null,seq50812);
return offcourse.appstate.viewmodels.checkpoint.strict_map__GT_CheckpointViewmodel.cljs$core$IFn$_invoke$arity$variadic(G__50813,seq50812__$1);
});
offcourse.appstate.viewmodels.checkpoint.new_checkpoint = (function offcourse$appstate$viewmodels$checkpoint$new_checkpoint(var_args){
var args50821 = [];
var len__20224__auto___50827 = arguments.length;
var i__20225__auto___50828 = (0);
while(true){
if((i__20225__auto___50828 < len__20224__auto___50827)){
args50821.push((arguments[i__20225__auto___50828]));

var G__50829 = (i__20225__auto___50828 + (1));
i__20225__auto___50828 = G__50829;
continue;
} else {
}
break;
}

var G__50823 = args50821.length;
switch (G__50823) {
case 1:
return offcourse.appstate.viewmodels.checkpoint.new_checkpoint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return offcourse.appstate.viewmodels.checkpoint.new_checkpoint.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50821.length)].join('')));

}
});

offcourse.appstate.viewmodels.checkpoint.new_checkpoint.cljs$core$IFn$_invoke$arity$1 = (function (p__50824){
var map__50825 = p__50824;
var map__50825__$1 = ((((!((map__50825 == null)))?((((map__50825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50825):map__50825);
var checkpoint = map__50825__$1;
var course_id = cljs.core.get.call(null,map__50825__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__50825__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
return offcourse.appstate.viewmodels.checkpoint.map__GT_CheckpointViewmodel.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id], null),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id], null));
});

offcourse.appstate.viewmodels.checkpoint.new_checkpoint.cljs$core$IFn$_invoke$arity$3 = (function (course,checkpoint_id,resource){
return offcourse.appstate.viewmodels.checkpoint.map__GT_CheckpointViewmodel.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),new cljs.core.Keyword(null,"course","course",1455432948),course,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),checkpoint_id], null));
});

offcourse.appstate.viewmodels.checkpoint.new_checkpoint.cljs$lang$maxFixedArity = 3;
offcourse.appstate.viewmodels.checkpoint.refresh = (function offcourse$appstate$viewmodels$checkpoint$refresh(p__50831,p__50832){
var map__50841 = p__50831;
var map__50841__$1 = ((((!((map__50841 == null)))?((((map__50841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50841):map__50841);
var course = cljs.core.get.call(null,map__50841__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var checkpoint_id = cljs.core.get.call(null,map__50841__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
var map__50842 = p__50832;
var map__50842__$1 = ((((!((map__50842 == null)))?((((map__50842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50842):map__50842);
var courses = cljs.core.get.call(null,map__50842__$1,new cljs.core.Keyword(null,"courses","courses",-428279222));
var resources = cljs.core.get.call(null,map__50842__$1,new cljs.core.Keyword(null,"resources","resources",1632806811));
var map__50845 = course;
var map__50845__$1 = ((((!((map__50845 == null)))?((((map__50845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50845):map__50845);
var course_id = cljs.core.get.call(null,map__50845__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var course__$1 = cljs.core.get.call(null,courses,course_id);
var map__50846 = offcourse.models.course.find_checkpoint.call(null,course__$1,checkpoint_id);
var map__50846__$1 = ((((!((map__50846 == null)))?((((map__50846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50846):map__50846);
var url = cljs.core.get.call(null,map__50846__$1,new cljs.core.Keyword(null,"url","url",276297046));
var course__$2 = offcourse.models.course.add_tags.call(null,course__$1,cljs.core.PersistentArrayMap.EMPTY);
var resource = offcourse.models.resource.find_resource.call(null,resources,url);
return offcourse.appstate.viewmodels.checkpoint.new_checkpoint.call(null,course__$2,checkpoint_id,resource);
});
offcourse.appstate.viewmodels.checkpoint.check = (function offcourse$appstate$viewmodels$checkpoint$check(viewmodel){
return schema.core.check.call(null,offcourse.appstate.viewmodels.checkpoint.CheckpointViewmodel,viewmodel);
});
