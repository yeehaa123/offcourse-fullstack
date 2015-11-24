// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.collection');
goog.require('cljs.core');
goog.require('offcourse.models.course');
goog.require('schema.core');
goog.require('clojure.set');
var bad_keys__25051__auto___56987 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__25047__25052__auto__){
return schema.core.required_key_QMARK_.call(null,p1__25047__25052__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__25051__auto___56987)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__25051__auto___56987))));
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
offcourse.models.collection.Collection = (function (collection_type,collection_name,collection_ids,__meta,__extmap,__hash){
this.collection_type = collection_type;
this.collection_name = collection_name;
this.collection_ids = collection_ids;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.models.collection.Collection.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.models.collection.Collection.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k56977,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__56979 = (((k56977 instanceof cljs.core.Keyword))?k56977.fqn:null);
switch (G__56979) {
case "collection-type":
return self__.collection_type;

break;
case "collection-name":
return self__.collection_name;

break;
case "collection-ids":
return self__.collection_ids;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56977,else__19783__auto__);

}
});

offcourse.models.collection.Collection.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.models.collection.Collection{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),self__.collection_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-name","collection-name",600435477),self__.collection_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385),self__.collection_ids],null))], null),self__.__extmap));
});

offcourse.models.collection.Collection.prototype.cljs$core$IIterable$ = true;

offcourse.models.collection.Collection.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56976){
var self__ = this;
var G__56976__$1 = this;
return (new cljs.core.RecordIter((0),G__56976__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.models.collection.Collection.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.models.collection.Collection.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.models.collection.Collection(self__.collection_type,self__.collection_name,self__.collection_ids,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.models.collection.Collection.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.models.collection.Collection.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
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

offcourse.models.collection.Collection.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
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

offcourse.models.collection.Collection.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),null,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),null,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.models.collection.Collection(self__.collection_type,self__.collection_name,self__.collection_ids,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.models.collection.Collection.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__56976){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__56980 = cljs.core.keyword_identical_QMARK_;
var expr__56981 = k__19788__auto__;
if(cljs.core.truth_(pred__56980.call(null,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),expr__56981))){
return (new offcourse.models.collection.Collection(G__56976,self__.collection_name,self__.collection_ids,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56980.call(null,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),expr__56981))){
return (new offcourse.models.collection.Collection(self__.collection_type,G__56976,self__.collection_ids,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56980.call(null,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385),expr__56981))){
return (new offcourse.models.collection.Collection(self__.collection_type,self__.collection_name,G__56976,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.models.collection.Collection(self__.collection_type,self__.collection_name,self__.collection_ids,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__56976),null));
}
}
}
});

offcourse.models.collection.Collection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),self__.collection_type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-name","collection-name",600435477),self__.collection_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385),self__.collection_ids],null))], null),self__.__extmap));
});

offcourse.models.collection.Collection.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__56976){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.models.collection.Collection(self__.collection_type,self__.collection_name,self__.collection_ids,G__56976,self__.__extmap,self__.__hash));
});

offcourse.models.collection.Collection.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.models.collection.Collection.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"collection-type","collection-type",1191614409,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"collection-name","collection-name",-2054000292,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"collection-ids","collection-ids",267266142,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("schema","Num","schema/Num",1291714413,null),null], null), null)], null))], null);
});

offcourse.models.collection.Collection.cljs$lang$type = true;

offcourse.models.collection.Collection.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.models.collection/Collection");
});

offcourse.models.collection.Collection.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.models.collection/Collection");
});

offcourse.models.collection.__GT_Collection = (function offcourse$models$collection$__GT_Collection(collection_type,collection_name,collection_ids){
return (new offcourse.models.collection.Collection(collection_type,collection_name,collection_ids,null,null,null));
});

offcourse.models.collection.map__GT_Collection = (function offcourse$models$collection$map__GT_Collection(G__56978){
return (new offcourse.models.collection.Collection(new cljs.core.Keyword(null,"collection-type","collection-type",-448917118).cljs$core$IFn$_invoke$arity$1(G__56978),new cljs.core.Keyword(null,"collection-name","collection-name",600435477).cljs$core$IFn$_invoke$arity$1(G__56978),new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385).cljs$core$IFn$_invoke$arity$1(G__56978),null,cljs.core.dissoc.call(null,G__56978,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385)),null));
});


schema.utils.declare_class_schema_BANG_.call(null,offcourse.models.collection.Collection,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,offcourse.models.collection.Collection,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),cljs.core.Keyword,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),cljs.core.Keyword,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385),cljs.core.PersistentHashSet.fromArray([schema.core.Num], true)], null),null),(function (p1__26408__26409__auto__){
return offcourse.models.collection.map__GT_Collection.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__26408__26409__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class Collection, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
offcourse.models.collection.strict_map__GT_Collection = (function offcourse$models$collection$strict_map__GT_Collection(var_args){
var args__20231__auto__ = [];
var len__20224__auto___56989 = arguments.length;
var i__20225__auto___56990 = (0);
while(true){
if((i__20225__auto___56990 < len__20224__auto___56989)){
args__20231__auto__.push((arguments[i__20225__auto___56990]));

var G__56991 = (i__20225__auto___56990 + (1));
i__20225__auto___56990 = G__56991;
continue;
} else {
}
break;
}

var argseq__20232__auto__ = ((((1) < args__20231__auto__.length))?(new cljs.core.IndexedSeq(args__20231__auto__.slice((1)),(0))):null);
return offcourse.models.collection.strict_map__GT_Collection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20232__auto__);
});

offcourse.models.collection.strict_map__GT_Collection.cljs$core$IFn$_invoke$arity$variadic = (function (m56975,p__56985){
var vec__56986 = p__56985;
var drop_extra_keys_QMARK___25050__auto__ = cljs.core.nth.call(null,vec__56986,(0),null);
if(cljs.core.truth_((function (){var or__19166__auto__ = drop_extra_keys_QMARK___25050__auto__;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m56975),3);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),new cljs.core.Keyword(null,"collection-name","collection-name",600435477),new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m56975)))));
}

return (new offcourse.models.collection.Collection((function (){var m__24953__auto__ = m56975;
var k__24954__auto__ = new cljs.core.Keyword(null,"collection-type","collection-type",-448917118);
var temp__4423__auto__ = cljs.core.find.call(null,m__24953__auto__,k__24954__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__24955__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__24955__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__24954__auto__,m__24953__auto__)));
}
})(),(function (){var m__24953__auto__ = m56975;
var k__24954__auto__ = new cljs.core.Keyword(null,"collection-name","collection-name",600435477);
var temp__4423__auto__ = cljs.core.find.call(null,m__24953__auto__,k__24954__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__24955__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__24955__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__24954__auto__,m__24953__auto__)));
}
})(),(function (){var m__24953__auto__ = m56975;
var k__24954__auto__ = new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385);
var temp__4423__auto__ = cljs.core.find.call(null,m__24953__auto__,k__24954__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__24955__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__24955__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__24954__auto__,m__24953__auto__)));
}
})(),null,null,null));
});

offcourse.models.collection.strict_map__GT_Collection.cljs$lang$maxFixedArity = (1);

offcourse.models.collection.strict_map__GT_Collection.cljs$lang$applyTo = (function (seq56983){
var G__56984 = cljs.core.first.call(null,seq56983);
var seq56983__$1 = cljs.core.next.call(null,seq56983);
return offcourse.models.collection.strict_map__GT_Collection.cljs$core$IFn$_invoke$arity$variadic(G__56984,seq56983__$1);
});
offcourse.models.collection.Collections = cljs.core.PersistentArrayMap.fromArray([schema.core.Any,cljs.core.PersistentArrayMap.fromArray([schema.core.Any,offcourse.models.collection.Collection], true, false)], true, false);
offcourse.models.collection.__GT_collection = (function offcourse$models$collection$__GT_collection(collection_type,collection_name,collection_ids){
return (new offcourse.models.collection.Collection(collection_type,collection_name,collection_ids,null,null,null));
});
offcourse.models.collection.find_user_collection = (function offcourse$models$collection$find_user_collection(courses,user_name){
var collection_ids = cljs.core.reduce.call(null,(function (acc,p__56994){
var vec__56995 = p__56994;
var id = cljs.core.nth.call(null,vec__56995,(0),null);
var course = cljs.core.nth.call(null,vec__56995,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.name.call(null,user_name),new cljs.core.Keyword(null,"curator","curator",-553328342).cljs$core$IFn$_invoke$arity$1(course))){
return cljs.core.conj.call(null,acc,id);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,courses);
return offcourse.models.collection.__GT_collection.call(null,new cljs.core.Keyword(null,"users","users",-713552705),user_name,collection_ids);
});
offcourse.models.collection.named_collection = (function offcourse$models$collection$named_collection(collection_name){
var collections = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"featured","featured",1584623723),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,(10),cljs.core.iterate.call(null,cljs.core.inc,(1)))),new cljs.core.Keyword(null,"popular","popular",-752193652),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,(5),cljs.core.iterate.call(null,cljs.core.inc,(2)))),new cljs.core.Keyword(null,"new","new",-2085437848),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,(4),cljs.core.iterate.call(null,cljs.core.inc,(4))))], null);
var collection_ids = collection_name.call(null,collections);
return offcourse.models.collection.__GT_collection.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075),collection_name,collection_ids);
});
offcourse.models.collection.find_tag_collection = (function offcourse$models$collection$find_tag_collection(courses,tag){
var collection_ids = cljs.core.reduce.call(null,(function (acc,p__56998){
var vec__56999 = p__56998;
var id = cljs.core.nth.call(null,vec__56999,(0),null);
var course = cljs.core.nth.call(null,vec__56999,(1),null);
if(cljs.core.truth_(offcourse.models.course.has_tag_QMARK_.call(null,course,cljs.core.name.call(null,tag)))){
return cljs.core.conj.call(null,acc,id);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,courses);
return (new offcourse.models.collection.__GT_collection(new cljs.core.Keyword(null,"tags","tags",1771418977),tag,collection_ids));
});
offcourse.models.collection.fetch_tags = (function offcourse$models$collection$fetch_tags(collection){
return cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,(function (p1__57000_SHARP_){
return offcourse.models.course.get_tags.call(null,p1__57000_SHARP_);
}),cljs.core.vals.call(null,collection)));
});
offcourse.models.collection.fetch_users = (function offcourse$models$collection$fetch_users(collection){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__57001_SHARP_){
return offcourse.models.course.get_user.call(null,p1__57001_SHARP_);
}),cljs.core.vals.call(null,collection)));
});
offcourse.models.collection.collection_names = (function offcourse$models$collection$collection_names(collection){
return cljs.core.keys.call(null,collection);
});
