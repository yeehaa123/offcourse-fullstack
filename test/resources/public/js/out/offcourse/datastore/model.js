// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.model');
goog.require('cljs.core');
goog.require('offcourse.models.action');
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
offcourse.datastore.model.DataStore = (function (collections,courses,__meta,__extmap,__hash){
this.collections = collections;
this.courses = courses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.datastore.model.DataStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19776__auto__,k__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
return cljs.core._lookup.call(null,this__19776__auto____$1,k__19777__auto__,null);
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19778__auto__,k26611,else__19779__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
var G__26613 = (((k26611 instanceof cljs.core.Keyword))?k26611.fqn:null);
switch (G__26613) {
case "collections":
return self__.collections;

break;
case "courses":
return self__.courses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26611,else__19779__auto__);

}
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19790__auto__,writer__19791__auto__,opts__19792__auto__){
var self__ = this;
var this__19790__auto____$1 = this;
var pr_pair__19793__auto__ = ((function (this__19790__auto____$1){
return (function (keyval__19794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,cljs.core.pr_writer,""," ","",opts__19792__auto__,keyval__19794__auto__);
});})(this__19790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,pr_pair__19793__auto__,"#offcourse.datastore.model.DataStore{",", ","}",opts__19792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collections","collections",-2114643505),self__.collections],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"courses","courses",-428279222),self__.courses],null))], null),self__.__extmap));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IIterable$ = true;

offcourse.datastore.model.DataStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26610){
var self__ = this;
var G__26610__$1 = this;
return (new cljs.core.RecordIter((0),G__26610__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.Keyword(null,"courses","courses",-428279222)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return self__.__meta;
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19770__auto__){
var self__ = this;
var this__19770__auto____$1 = this;
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19780__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19771__auto__){
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

offcourse.datastore.model.DataStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19772__auto__,other__19773__auto__){
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

offcourse.datastore.model.DataStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19785__auto__,k__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"courses","courses",-428279222),null,new cljs.core.Keyword(null,"collections","collections",-2114643505),null], null), null),k__19786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19785__auto____$1),self__.__meta),k__19786__auto__);
} else {
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19786__auto__)),null));
}
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19783__auto__,k__19784__auto__,G__26610){
var self__ = this;
var this__19783__auto____$1 = this;
var pred__26614 = cljs.core.keyword_identical_QMARK_;
var expr__26615 = k__19784__auto__;
if(cljs.core.truth_(pred__26614.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505),expr__26615))){
return (new offcourse.datastore.model.DataStore(G__26610,self__.courses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26614.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222),expr__26615))){
return (new offcourse.datastore.model.DataStore(self__.collections,G__26610,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19784__auto__,G__26610),null));
}
}
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19788__auto__){
var self__ = this;
var this__19788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collections","collections",-2114643505),self__.collections],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"courses","courses",-428279222),self__.courses],null))], null),self__.__extmap));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19775__auto__,G__26610){
var self__ = this;
var this__19775__auto____$1 = this;
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,G__26610,self__.__extmap,self__.__hash));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19781__auto__,entry__19782__auto__){
var self__ = this;
var this__19781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19782__auto__)){
return cljs.core._assoc.call(null,this__19781__auto____$1,cljs.core._nth.call(null,entry__19782__auto__,(0)),cljs.core._nth.call(null,entry__19782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19781__auto____$1,entry__19782__auto__);
}
});

offcourse.datastore.model.DataStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collections","collections",-474111978,null),new cljs.core.Symbol(null,"courses","courses",1212252305,null)], null);
});

offcourse.datastore.model.DataStore.cljs$lang$type = true;

offcourse.datastore.model.DataStore.cljs$lang$ctorPrSeq = (function (this__19810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.datastore.model/DataStore");
});

offcourse.datastore.model.DataStore.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"offcourse.datastore.model/DataStore");
});

offcourse.datastore.model.__GT_DataStore = (function offcourse$datastore$model$__GT_DataStore(collections,courses){
return (new offcourse.datastore.model.DataStore(collections,courses,null,null,null));
});

offcourse.datastore.model.map__GT_DataStore = (function offcourse$datastore$model$map__GT_DataStore(G__26612){
return (new offcourse.datastore.model.DataStore(new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(G__26612),new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(G__26612),null,cljs.core.dissoc.call(null,G__26612,new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.Keyword(null,"courses","courses",-428279222)),null));
});

offcourse.datastore.model.new_datastore = (function offcourse$datastore$model$new_datastore(){
return offcourse.datastore.model.__GT_DataStore.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
});
offcourse.datastore.model.update_collections = (function offcourse$datastore$model$update_collections(store,collection_name,collection_ids){
return cljs.core.assoc_in.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_name], null),collection_ids);
});
offcourse.datastore.model.update_cache = (function offcourse$datastore$model$update_cache(store,fn){
return cljs.core.update_in.call(null,store,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"courses","courses",-428279222)], null),fn);
});
offcourse.datastore.model.update_course = (function offcourse$datastore$model$update_course(store,course){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__26618_SHARP_){
return offcourse.models.collection.update_course.call(null,p1__26618_SHARP_,course);
}));
});
offcourse.datastore.model.update_courses = (function offcourse$datastore$model$update_courses(store,courses){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__26619_SHARP_){
return offcourse.models.collection.update_courses.call(null,p1__26619_SHARP_,courses);
}));
});
offcourse.datastore.model.add_checkpoint = (function offcourse$datastore$model$add_checkpoint(store,course_id,checkpoint){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__26620_SHARP_){
return offcourse.models.collection.add_checkpoint.call(null,p1__26620_SHARP_,course_id,checkpoint);
}));
});
offcourse.datastore.model.toggle_done = (function offcourse$datastore$model$toggle_done(store,course_id,checkpoint_id){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__26621_SHARP_){
return offcourse.models.collection.toggle_done.call(null,p1__26621_SHARP_,course_id,checkpoint_id);
}));
});
offcourse.datastore.model.augment_checkpoint = (function offcourse$datastore$model$augment_checkpoint(store,course_id,checkpoint_id,resource){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__26622_SHARP_){
return offcourse.models.collection.augment_checkpoint.call(null,p1__26622_SHARP_,course_id,checkpoint_id,resource);
}));
});
offcourse.datastore.model.find_course = (function offcourse$datastore$model$find_course(store,course_id){
return offcourse.models.collection.find_course.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(store),course_id);
});

//# sourceMappingURL=model.js.map