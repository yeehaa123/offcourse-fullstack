// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.viewmodels.collection');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('offcourse.models.course');
goog.require('offcourse.models.courses');
goog.require('offcourse.models.collection');
goog.require('offcourse.models.label');
var bad_keys__21512__auto___50717 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21508__21513__auto__){
return schema.core.required_key_QMARK_.call(null,p1__21508__21513__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__21512__auto___50717)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__21512__auto___50717))));
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
offcourse.appstate.viewmodels.collection.LabelCollections = (function (flags,tags,users,__meta,__extmap,__hash){
this.flags = flags;
this.tags = tags;
this.users = users;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k50707,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__50709 = (((k50707 instanceof cljs.core.Keyword))?k50707.fqn:null);
switch (G__50709) {
case "flags":
return self__.flags;

break;
case "tags":
return self__.tags;

break;
case "users":
return self__.users;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50707,else__19783__auto__);

}
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.appstate.viewmodels.collection.LabelCollections{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flags","flags",1775418075),self__.flags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"users","users",-713552705),self__.users],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IIterable$ = true;

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50706){
var self__ = this;
var G__50706__$1 = this;
return (new cljs.core.RecordIter((0),G__50706__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"users","users",-713552705)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.appstate.viewmodels.collection.LabelCollections(self__.flags,self__.tags,self__.users,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
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

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
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

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"flags","flags",1775418075),null,new cljs.core.Keyword(null,"users","users",-713552705),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.appstate.viewmodels.collection.LabelCollections(self__.flags,self__.tags,self__.users,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__50706){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__50710 = cljs.core.keyword_identical_QMARK_;
var expr__50711 = k__19788__auto__;
if(cljs.core.truth_(pred__50710.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075),expr__50711))){
return (new offcourse.appstate.viewmodels.collection.LabelCollections(G__50706,self__.tags,self__.users,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50710.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),expr__50711))){
return (new offcourse.appstate.viewmodels.collection.LabelCollections(self__.flags,G__50706,self__.users,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50710.call(null,new cljs.core.Keyword(null,"users","users",-713552705),expr__50711))){
return (new offcourse.appstate.viewmodels.collection.LabelCollections(self__.flags,self__.tags,G__50706,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.appstate.viewmodels.collection.LabelCollections(self__.flags,self__.tags,self__.users,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__50706),null));
}
}
}
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flags","flags",1775418075),self__.flags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"users","users",-713552705),self__.users],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__50706){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.appstate.viewmodels.collection.LabelCollections(self__.flags,self__.tags,self__.users,G__50706,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodels.collection.LabelCollections.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.appstate.viewmodels.collection.LabelCollections.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"flags","flags",-879017694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"LabelCollection","LabelCollection",-1530486023,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"LabelCollection","LabelCollection",-1530486023,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"users","users",926978822,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"LabelCollection","LabelCollection",-1530486023,null)], null))], null);
});

offcourse.appstate.viewmodels.collection.LabelCollections.cljs$lang$type = true;

offcourse.appstate.viewmodels.collection.LabelCollections.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.appstate.viewmodels.collection/LabelCollections");
});

offcourse.appstate.viewmodels.collection.LabelCollections.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.appstate.viewmodels.collection/LabelCollections");
});

offcourse.appstate.viewmodels.collection.__GT_LabelCollections = (function offcourse$appstate$viewmodels$collection$__GT_LabelCollections(flags,tags,users){
return (new offcourse.appstate.viewmodels.collection.LabelCollections(flags,tags,users,null,null,null));
});

offcourse.appstate.viewmodels.collection.map__GT_LabelCollections = (function offcourse$appstate$viewmodels$collection$map__GT_LabelCollections(G__50708){
return (new offcourse.appstate.viewmodels.collection.LabelCollections(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(G__50708),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__50708),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(G__50708),null,cljs.core.dissoc.call(null,G__50708,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"users","users",-713552705)),null));
});


schema.utils.declare_class_schema_BANG_.call(null,offcourse.appstate.viewmodels.collection.LabelCollections,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,offcourse.appstate.viewmodels.collection.LabelCollections,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flags","flags",1775418075),offcourse.models.label.LabelCollection,new cljs.core.Keyword(null,"tags","tags",1771418977),offcourse.models.label.LabelCollection,new cljs.core.Keyword(null,"users","users",-713552705),offcourse.models.label.LabelCollection], null),null),(function (p1__22823__22824__auto__){
return offcourse.appstate.viewmodels.collection.map__GT_LabelCollections.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__22823__22824__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class LabelCollections, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
offcourse.appstate.viewmodels.collection.strict_map__GT_LabelCollections = (function offcourse$appstate$viewmodels$collection$strict_map__GT_LabelCollections(var_args){
var args__20231__auto__ = [];
var len__20224__auto___50719 = arguments.length;
var i__20225__auto___50720 = (0);
while(true){
if((i__20225__auto___50720 < len__20224__auto___50719)){
args__20231__auto__.push((arguments[i__20225__auto___50720]));

var G__50721 = (i__20225__auto___50720 + (1));
i__20225__auto___50720 = G__50721;
continue;
} else {
}
break;
}

var argseq__20232__auto__ = ((((1) < args__20231__auto__.length))?(new cljs.core.IndexedSeq(args__20231__auto__.slice((1)),(0))):null);
return offcourse.appstate.viewmodels.collection.strict_map__GT_LabelCollections.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20232__auto__);
});

offcourse.appstate.viewmodels.collection.strict_map__GT_LabelCollections.cljs$core$IFn$_invoke$arity$variadic = (function (m50705,p__50715){
var vec__50716 = p__50715;
var drop_extra_keys_QMARK___21511__auto__ = cljs.core.nth.call(null,vec__50716,(0),null);
if(cljs.core.truth_((function (){var or__19166__auto__ = drop_extra_keys_QMARK___21511__auto__;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m50705),3);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"users","users",-713552705)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m50705)))));
}

return (new offcourse.appstate.viewmodels.collection.LabelCollections((function (){var m__21414__auto__ = m50705;
var k__21415__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50705;
var k__21415__auto__ = new cljs.core.Keyword(null,"tags","tags",1771418977);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50705;
var k__21415__auto__ = new cljs.core.Keyword(null,"users","users",-713552705);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),null,null,null));
});

offcourse.appstate.viewmodels.collection.strict_map__GT_LabelCollections.cljs$lang$maxFixedArity = (1);

offcourse.appstate.viewmodels.collection.strict_map__GT_LabelCollections.cljs$lang$applyTo = (function (seq50713){
var G__50714 = cljs.core.first.call(null,seq50713);
var seq50713__$1 = cljs.core.next.call(null,seq50713);
return offcourse.appstate.viewmodels.collection.strict_map__GT_LabelCollections.cljs$core$IFn$_invoke$arity$variadic(G__50714,seq50713__$1);
});
var bad_keys__21512__auto___50735 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21508__21513__auto__){
return schema.core.required_key_QMARK_.call(null,p1__21508__21513__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__21512__auto___50735)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__21512__auto___50735))));
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
offcourse.appstate.viewmodels.collection.CollectionViewmodel = (function (level,labels,collection,courses,__meta,__extmap,__hash){
this.level = level;
this.labels = labels;
this.collection = collection;
this.courses = courses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k50725,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__50727 = (((k50725 instanceof cljs.core.Keyword))?k50725.fqn:null);
switch (G__50727) {
case "level":
return self__.level;

break;
case "labels":
return self__.labels;

break;
case "collection":
return self__.collection;

break;
case "courses":
return self__.courses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50725,else__19783__auto__);

}
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.appstate.viewmodels.collection.CollectionViewmodel{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"labels","labels",-626734591),self__.labels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection","collection",-683361892),self__.collection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"courses","courses",-428279222),self__.courses],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IIterable$ = true;

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50724){
var self__ = this;
var G__50724__$1 = this;
return (new cljs.core.RecordIter((0),G__50724__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"courses","courses",-428279222)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(self__.level,self__.labels,self__.collection,self__.courses,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
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

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
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

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"labels","labels",-626734591),null,new cljs.core.Keyword(null,"courses","courses",-428279222),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"collection","collection",-683361892),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(self__.level,self__.labels,self__.collection,self__.courses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__50724){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__50728 = cljs.core.keyword_identical_QMARK_;
var expr__50729 = k__19788__auto__;
if(cljs.core.truth_(pred__50728.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__50729))){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(G__50724,self__.labels,self__.collection,self__.courses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50728.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591),expr__50729))){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(self__.level,G__50724,self__.collection,self__.courses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50728.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),expr__50729))){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(self__.level,self__.labels,G__50724,self__.courses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50728.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222),expr__50729))){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(self__.level,self__.labels,self__.collection,G__50724,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(self__.level,self__.labels,self__.collection,self__.courses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__50724),null));
}
}
}
}
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"labels","labels",-626734591),self__.labels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection","collection",-683361892),self__.collection],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"courses","courses",-428279222),self__.courses],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__50724){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(self__.level,self__.labels,self__.collection,self__.courses,G__50724,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"labels","labels",1013796936,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"LabelCollections","LabelCollections",-1493403464,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"collection","collection",957169635,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Collection","Collection",-1205015095,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"courses","courses",1212252305,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("schema","Int","schema/Int",-873338627,null),new cljs.core.Symbol(null,"Course","Course",628923419,null)], null)], null))], null);
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.cljs$lang$type = true;

offcourse.appstate.viewmodels.collection.CollectionViewmodel.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.appstate.viewmodels.collection/CollectionViewmodel");
});

offcourse.appstate.viewmodels.collection.CollectionViewmodel.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.appstate.viewmodels.collection/CollectionViewmodel");
});

offcourse.appstate.viewmodels.collection.__GT_CollectionViewmodel = (function offcourse$appstate$viewmodels$collection$__GT_CollectionViewmodel(level,labels,collection,courses){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(level,labels,collection,courses,null,null,null));
});

offcourse.appstate.viewmodels.collection.map__GT_CollectionViewmodel = (function offcourse$appstate$viewmodels$collection$map__GT_CollectionViewmodel(G__50726){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__50726),new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(G__50726),new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(G__50726),new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(G__50726),null,cljs.core.dissoc.call(null,G__50726,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"courses","courses",-428279222)),null));
});


schema.utils.declare_class_schema_BANG_.call(null,offcourse.appstate.viewmodels.collection.CollectionViewmodel,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,offcourse.appstate.viewmodels.collection.CollectionViewmodel,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.Keyword,new cljs.core.Keyword(null,"labels","labels",-626734591),offcourse.appstate.viewmodels.collection.LabelCollections,new cljs.core.Keyword(null,"collection","collection",-683361892),offcourse.models.collection.Collection,new cljs.core.Keyword(null,"courses","courses",-428279222),cljs.core.PersistentArrayMap.fromArray([schema.core.Int,offcourse.models.course.Course], true, false)], null),null),(function (p1__22823__22824__auto__){
return offcourse.appstate.viewmodels.collection.map__GT_CollectionViewmodel.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__22823__22824__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class CollectionViewmodel, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
offcourse.appstate.viewmodels.collection.strict_map__GT_CollectionViewmodel = (function offcourse$appstate$viewmodels$collection$strict_map__GT_CollectionViewmodel(var_args){
var args__20231__auto__ = [];
var len__20224__auto___50737 = arguments.length;
var i__20225__auto___50738 = (0);
while(true){
if((i__20225__auto___50738 < len__20224__auto___50737)){
args__20231__auto__.push((arguments[i__20225__auto___50738]));

var G__50739 = (i__20225__auto___50738 + (1));
i__20225__auto___50738 = G__50739;
continue;
} else {
}
break;
}

var argseq__20232__auto__ = ((((1) < args__20231__auto__.length))?(new cljs.core.IndexedSeq(args__20231__auto__.slice((1)),(0))):null);
return offcourse.appstate.viewmodels.collection.strict_map__GT_CollectionViewmodel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20232__auto__);
});

offcourse.appstate.viewmodels.collection.strict_map__GT_CollectionViewmodel.cljs$core$IFn$_invoke$arity$variadic = (function (m50723,p__50733){
var vec__50734 = p__50733;
var drop_extra_keys_QMARK___21511__auto__ = cljs.core.nth.call(null,vec__50734,(0),null);
if(cljs.core.truth_((function (){var or__19166__auto__ = drop_extra_keys_QMARK___21511__auto__;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m50723),4);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"courses","courses",-428279222)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m50723)))));
}

return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel((function (){var m__21414__auto__ = m50723;
var k__21415__auto__ = new cljs.core.Keyword(null,"level","level",1290497552);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50723;
var k__21415__auto__ = new cljs.core.Keyword(null,"labels","labels",-626734591);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50723;
var k__21415__auto__ = new cljs.core.Keyword(null,"collection","collection",-683361892);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50723;
var k__21415__auto__ = new cljs.core.Keyword(null,"courses","courses",-428279222);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),null,null,null));
});

offcourse.appstate.viewmodels.collection.strict_map__GT_CollectionViewmodel.cljs$lang$maxFixedArity = (1);

offcourse.appstate.viewmodels.collection.strict_map__GT_CollectionViewmodel.cljs$lang$applyTo = (function (seq50731){
var G__50732 = cljs.core.first.call(null,seq50731);
var seq50731__$1 = cljs.core.next.call(null,seq50731);
return offcourse.appstate.viewmodels.collection.strict_map__GT_CollectionViewmodel.cljs$core$IFn$_invoke$arity$variadic(G__50732,seq50731__$1);
});
offcourse.appstate.viewmodels.collection.blank_label_collections = (new offcourse.appstate.viewmodels.collection.LabelCollections(new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"unknown","unknown",-935977881),null,null,null));
offcourse.appstate.viewmodels.collection.blank_vm = (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(new cljs.core.Keyword(null,"collection","collection",-683361892),offcourse.appstate.viewmodels.collection.blank_label_collections,new cljs.core.Keyword(null,"unknown","unknown",-935977881),new cljs.core.Keyword(null,"unknown","unknown",-935977881),null,null,null));
offcourse.appstate.viewmodels.collection.select_collection_name = (function offcourse$appstate$viewmodels$collection$select_collection_name(name,type,names){
if(cljs.core.not.call(null,name)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,names),new cljs.core.Keyword(null,"flags","flags",1775418075)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,type], null);
}
});
offcourse.appstate.viewmodels.collection.update_collection = (function offcourse$appstate$viewmodels$collection$update_collection(collection_name,collection_type,collection_names,collections){
var vec__50741 = offcourse.appstate.viewmodels.collection.select_collection_name.call(null,collection_name,collection_type,collection_names);
var collection_name__$1 = cljs.core.nth.call(null,vec__50741,(0),null);
var collection_type__$1 = cljs.core.nth.call(null,vec__50741,(1),null);
var collection_ids = cljs.core.get_in.call(null,collections,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_type__$1,collection_name__$1,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385)], null));
return offcourse.models.collection.__GT_collection.call(null,collection_type__$1,collection_name__$1,collection_ids);
});
offcourse.appstate.viewmodels.collection.create_label_collections = (function offcourse$appstate$viewmodels$collection$create_label_collections(selection,flags,tags,users){
var flag_labels = offcourse.models.label.__GT_collection.call(null,flags,selection);
var tag_labels = offcourse.models.label.__GT_collection.call(null,cljs.core.map.call(null,cljs.core.keyword,tags),selection);
var user_labels = offcourse.models.label.__GT_collection.call(null,cljs.core.map.call(null,cljs.core.keyword,users),selection);
return (new offcourse.appstate.viewmodels.collection.LabelCollections(flag_labels,tag_labels,user_labels,null,null,null));
});
offcourse.appstate.viewmodels.collection.update_courses = (function offcourse$appstate$viewmodels$collection$update_courses(courses,ids,tag_labels){
var courses__$1 = offcourse.models.courses.find_courses.call(null,courses,ids);
if(!(cljs.core.empty_QMARK_.call(null,courses__$1))){
return offcourse.models.courses.add_tags.call(null,courses__$1,tag_labels);
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}
});
offcourse.appstate.viewmodels.collection.__GT_collection = (function offcourse$appstate$viewmodels$collection$__GT_collection(var_args){
var args50742 = [];
var len__20224__auto___50745 = arguments.length;
var i__20225__auto___50746 = (0);
while(true){
if((i__20225__auto___50746 < len__20224__auto___50745)){
args50742.push((arguments[i__20225__auto___50746]));

var G__50747 = (i__20225__auto___50746 + (1));
i__20225__auto___50746 = G__50747;
continue;
} else {
}
break;
}

var G__50744 = args50742.length;
switch (G__50744) {
case 0:
return offcourse.appstate.viewmodels.collection.__GT_collection.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return offcourse.appstate.viewmodels.collection.__GT_collection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return offcourse.appstate.viewmodels.collection.__GT_collection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return offcourse.appstate.viewmodels.collection.__GT_collection.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50742.length)].join('')));

}
});

offcourse.appstate.viewmodels.collection.__GT_collection.cljs$core$IFn$_invoke$arity$0 = (function (){
return offcourse.appstate.viewmodels.collection.blank_vm;
});

offcourse.appstate.viewmodels.collection.__GT_collection.cljs$core$IFn$_invoke$arity$1 = (function (collection){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(new cljs.core.Keyword(null,"collection","collection",-683361892),offcourse.appstate.viewmodels.collection.blank_label_collections,collection,new cljs.core.Keyword(null,"unknown","unknown",-935977881),null,null,null));
});

offcourse.appstate.viewmodels.collection.__GT_collection.cljs$core$IFn$_invoke$arity$2 = (function (collection,labels){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(new cljs.core.Keyword(null,"collection","collection",-683361892),(function (){var or__19166__auto__ = labels;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return offcourse.appstate.viewmodels.collection.blank_label_collections;
}
})(),collection,new cljs.core.Keyword(null,"unknown","unknown",-935977881),null,null,null));
});

offcourse.appstate.viewmodels.collection.__GT_collection.cljs$core$IFn$_invoke$arity$3 = (function (collection,courses,labels){
return (new offcourse.appstate.viewmodels.collection.CollectionViewmodel(new cljs.core.Keyword(null,"collection","collection",-683361892),labels,offcourse.models.collection.map__GT_Collection.call(null,collection),courses,null,null,null));
});

offcourse.appstate.viewmodels.collection.__GT_collection.cljs$lang$maxFixedArity = 3;
offcourse.appstate.viewmodels.collection.highlight_checkpoint = (function offcourse$appstate$viewmodels$collection$highlight_checkpoint(viewmodel,course_id,checkpoint_id,highlight){
return cljs.core.update_in.call(null,viewmodel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"courses","courses",-428279222)], null),(function (p1__50749_SHARP_){
return offcourse.models.courses.highlight.call(null,p1__50749_SHARP_,course_id,checkpoint_id,highlight);
}));
});
offcourse.appstate.viewmodels.collection.highlight_label = (function offcourse$appstate$viewmodels$collection$highlight_label(viewmodel,label_name,label_type,highlight){
var viewmodel__$1 = cljs.core.update_in.call(null,viewmodel,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"labels","labels",-626734591),label_type], null),(function (p1__50750_SHARP_){
return offcourse.models.label.highlight.call(null,p1__50750_SHARP_,label_name,highlight);
}));
var labels = cljs.core.get_in.call(null,viewmodel__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"labels","labels",-626734591),new cljs.core.Keyword(null,"tags","tags",1771418977)], null));
var courses = cljs.core.get_in.call(null,viewmodel__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"courses","courses",-428279222)], null));
return cljs.core.update_in.call(null,viewmodel__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"courses","courses",-428279222)], null),((function (viewmodel__$1,labels,courses){
return (function (p1__50751_SHARP_){
return offcourse.models.courses.add_tags.call(null,p1__50751_SHARP_,labels);
});})(viewmodel__$1,labels,courses))
);
});
offcourse.appstate.viewmodels.collection.check = (function offcourse$appstate$viewmodels$collection$check(viewmodel){
return schema.core.check.call(null,offcourse.appstate.viewmodels.collection.CollectionViewmodel,viewmodel);
});
offcourse.appstate.viewmodels.collection.refresh = (function offcourse$appstate$viewmodels$collection$refresh(p__50752,p__50753){
var map__50760 = p__50752;
var map__50760__$1 = ((((!((map__50760 == null)))?((((map__50760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50760):map__50760);
var collection_name = cljs.core.get.call(null,map__50760__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var collection_type = cljs.core.get.call(null,map__50760__$1,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118));
var map__50761 = p__50753;
var map__50761__$1 = ((((!((map__50761 == null)))?((((map__50761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50761):map__50761);
var collections = cljs.core.get.call(null,map__50761__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var flags = cljs.core.get.call(null,map__50761__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var tags = cljs.core.get.call(null,map__50761__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var users = cljs.core.get.call(null,map__50761__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var courses = cljs.core.get.call(null,map__50761__$1,new cljs.core.Keyword(null,"courses","courses",-428279222));
var map__50764 = offcourse.appstate.viewmodels.collection.update_collection.call(null,collection_name,collection_type,flags,collections);
var map__50764__$1 = ((((!((map__50764 == null)))?((((map__50764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50764):map__50764);
var collection = map__50764__$1;
var collection_name__$1 = cljs.core.get.call(null,map__50764__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var collection_ids = cljs.core.get.call(null,map__50764__$1,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385));
var labels = offcourse.appstate.viewmodels.collection.create_label_collections.call(null,collection_name__$1,flags,tags,users);
var courses__$1 = offcourse.appstate.viewmodels.collection.update_courses.call(null,courses,collection_ids,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(labels));
return offcourse.appstate.viewmodels.collection.__GT_collection.call(null,collection,courses__$1,labels);
});
