// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.model');
goog.require('cljs.core');
goog.require('offcourse.models.action');
goog.require('clojure.set');
goog.require('offcourse.models.courses');

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
offcourse.datastore.model.DataStore = (function (collections,courses,resources,tags,users,__meta,__extmap,__hash){
this.collections = collections;
this.courses = courses;
this.resources = resources;
this.tags = tags;
this.users = users;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.datastore.model.DataStore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k55575,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__55577 = (((k55575 instanceof cljs.core.Keyword))?k55575.fqn:null);
switch (G__55577) {
case "collections":
return self__.collections;

break;
case "courses":
return self__.courses;

break;
case "resources":
return self__.resources;

break;
case "tags":
return self__.tags;

break;
case "users":
return self__.users;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k55575,else__19783__auto__);

}
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.datastore.model.DataStore{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collections","collections",-2114643505),self__.collections],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"courses","courses",-428279222),self__.courses],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resources","resources",1632806811),self__.resources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"users","users",-713552705),self__.users],null))], null),self__.__extmap));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IIterable$ = true;

offcourse.datastore.model.DataStore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55574){
var self__ = this;
var G__55574__$1 = this;
return (new cljs.core.RecordIter((0),G__55574__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.Keyword(null,"courses","courses",-428279222),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"users","users",-713552705)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.resources,self__.tags,self__.users,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
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

offcourse.datastore.model.DataStore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
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

offcourse.datastore.model.DataStore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"courses","courses",-428279222),null,new cljs.core.Keyword(null,"collections","collections",-2114643505),null,new cljs.core.Keyword(null,"resources","resources",1632806811),null,new cljs.core.Keyword(null,"users","users",-713552705),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.resources,self__.tags,self__.users,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__55574){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__55578 = cljs.core.keyword_identical_QMARK_;
var expr__55579 = k__19788__auto__;
if(cljs.core.truth_(pred__55578.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505),expr__55579))){
return (new offcourse.datastore.model.DataStore(G__55574,self__.courses,self__.resources,self__.tags,self__.users,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55578.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222),expr__55579))){
return (new offcourse.datastore.model.DataStore(self__.collections,G__55574,self__.resources,self__.tags,self__.users,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55578.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811),expr__55579))){
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,G__55574,self__.tags,self__.users,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55578.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),expr__55579))){
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.resources,G__55574,self__.users,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55578.call(null,new cljs.core.Keyword(null,"users","users",-713552705),expr__55579))){
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.resources,self__.tags,G__55574,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.resources,self__.tags,self__.users,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__55574),null));
}
}
}
}
}
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"collections","collections",-2114643505),self__.collections],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"courses","courses",-428279222),self__.courses],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resources","resources",1632806811),self__.resources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"users","users",-713552705),self__.users],null))], null),self__.__extmap));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__55574){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.datastore.model.DataStore(self__.collections,self__.courses,self__.resources,self__.tags,self__.users,G__55574,self__.__extmap,self__.__hash));
});

offcourse.datastore.model.DataStore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.datastore.model.DataStore.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"collections","collections",-474111978,null),new cljs.core.Symbol(null,"courses","courses",1212252305,null),new cljs.core.Symbol(null,"resources","resources",-1021628958,null),new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.Symbol(null,"users","users",926978822,null)], null);
});

offcourse.datastore.model.DataStore.cljs$lang$type = true;

offcourse.datastore.model.DataStore.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.datastore.model/DataStore");
});

offcourse.datastore.model.DataStore.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.datastore.model/DataStore");
});

offcourse.datastore.model.__GT_DataStore = (function offcourse$datastore$model$__GT_DataStore(collections,courses,resources,tags,users){
return (new offcourse.datastore.model.DataStore(collections,courses,resources,tags,users,null,null,null));
});

offcourse.datastore.model.map__GT_DataStore = (function offcourse$datastore$model$map__GT_DataStore(G__55576){
return (new offcourse.datastore.model.DataStore(new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(G__55576),new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(G__55576),new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(G__55576),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__55576),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(G__55576),null,cljs.core.dissoc.call(null,G__55576,new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.Keyword(null,"courses","courses",-428279222),new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"users","users",-713552705)),null));
});

offcourse.datastore.model.wrap_collections = (function offcourse$datastore$model$wrap_collections(collections){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__55584){
var vec__55585 = p__55584;
var id = cljs.core.nth.call(null,vec__55585,(0),null);
var collection = cljs.core.nth.call(null,vec__55585,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,collection], null);
}),collections));
});
offcourse.datastore.model.new_datastore = (function offcourse$datastore$model$new_datastore(){
return offcourse.datastore.model.__GT_DataStore.call(null,null,null,null,null,null);
});
offcourse.datastore.model.update_tags = (function offcourse$datastore$model$update_tags(store,tags){
return cljs.core.update_in.call(null,store,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977)], null),(function (p1__55586_SHARP_){
return cljs.core.into.call(null,p1__55586_SHARP_,tags);
}));
});
offcourse.datastore.model.update_users = (function offcourse$datastore$model$update_users(store,users){
return cljs.core.update_in.call(null,store,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",-713552705)], null),(function (p1__55587_SHARP_){
return cljs.core.into.call(null,p1__55587_SHARP_,users);
}));
});
offcourse.datastore.model.update_resources = (function offcourse$datastore$model$update_resources(store,resources){
return cljs.core.update_in.call(null,store,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resources","resources",1632806811)], null),(function (p1__55588_SHARP_){
return cljs.core.into.call(null,p1__55588_SHARP_,resources);
}));
});
offcourse.datastore.model.update_collections = (function offcourse$datastore$model$update_collections(store,collections){
return cljs.core.assoc_in.call(null,store,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.Keyword(null,"flags","flags",1775418075)], null),offcourse.datastore.model.wrap_collections.call(null,collections));
});
offcourse.datastore.model.update_collection = (function offcourse$datastore$model$update_collection(store,p__55589){
var map__55592 = p__55589;
var map__55592__$1 = ((((!((map__55592 == null)))?((((map__55592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55592):map__55592);
var collection = map__55592__$1;
var collection_name = cljs.core.get.call(null,map__55592__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var collection_type = cljs.core.get.call(null,map__55592__$1,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118));
return cljs.core.assoc_in.call(null,store,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_type,collection_name], null),collection);
});
offcourse.datastore.model.update_cache = (function offcourse$datastore$model$update_cache(store,fn){
return cljs.core.update_in.call(null,store,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"courses","courses",-428279222)], null),fn);
});
offcourse.datastore.model.update_course = (function offcourse$datastore$model$update_course(store,course){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__55594_SHARP_){
return offcourse.models.courses.update_course.call(null,p1__55594_SHARP_,course);
}));
});
offcourse.datastore.model.update_courses = (function offcourse$datastore$model$update_courses(store,courses){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__55595_SHARP_){
return offcourse.models.courses.update_courses.call(null,p1__55595_SHARP_,courses);
}));
});
offcourse.datastore.model.add_checkpoint = (function offcourse$datastore$model$add_checkpoint(store,course_id,checkpoint){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__55596_SHARP_){
return offcourse.models.courses.add_checkpoint.call(null,p1__55596_SHARP_,course_id,checkpoint);
}));
});
offcourse.datastore.model.toggle_done = (function offcourse$datastore$model$toggle_done(store,course_id,checkpoint_id){
return offcourse.datastore.model.update_cache.call(null,store,(function (p1__55597_SHARP_){
return offcourse.models.courses.toggle_done.call(null,p1__55597_SHARP_,course_id,checkpoint_id);
}));
});
offcourse.datastore.model.find_course = (function offcourse$datastore$model$find_course(store,course_id){
return offcourse.models.courses.find_course.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(store),course_id);
});
offcourse.datastore.model.missing_ids = (function offcourse$datastore$model$missing_ids(store,collection_ids){
var courses_ids = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store))));
return clojure.set.difference.call(null,collection_ids,courses_ids);
});
offcourse.datastore.model.get_collection_ids = (function offcourse$datastore$model$get_collection_ids(store,collection_type,collection_name){
return cljs.core.get_in.call(null,store,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),collection_type,collection_name,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385)], null));
});
