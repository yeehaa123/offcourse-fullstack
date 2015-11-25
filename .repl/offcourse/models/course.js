// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.course');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('offcourse.models.checkpoint');
goog.require('offcourse.fake_data.index');
var bad_keys__21512__auto___50452 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21508__21513__auto__){
return schema.core.required_key_QMARK_.call(null,p1__21508__21513__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__21512__auto___50452)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__21512__auto___50452))));
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
offcourse.models.course.Course = (function (course_id,curator,goal,flags,checkpoints,tags,__meta,__extmap,__hash){
this.course_id = course_id;
this.curator = curator;
this.goal = goal;
this.flags = flags;
this.checkpoints = checkpoints;
this.tags = tags;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.models.course.Course.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.models.course.Course.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k50442,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__50444 = (((k50442 instanceof cljs.core.Keyword))?k50442.fqn:null);
switch (G__50444) {
case "course-id":
return self__.course_id;

break;
case "curator":
return self__.curator;

break;
case "goal":
return self__.goal;

break;
case "flags":
return self__.flags;

break;
case "checkpoints":
return self__.checkpoints;

break;
case "tags":
return self__.tags;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50442,else__19783__auto__);

}
});

offcourse.models.course.Course.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.models.course.Course{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course-id","course-id",-390190405),self__.course_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curator","curator",-553328342),self__.curator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"goal","goal",-2073396501),self__.goal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flags","flags",1775418075),self__.flags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),self__.checkpoints],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags],null))], null),self__.__extmap));
});

offcourse.models.course.Course.prototype.cljs$core$IIterable$ = true;

offcourse.models.course.Course.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50441){
var self__ = this;
var G__50441__$1 = this;
return (new cljs.core.RecordIter((0),G__50441__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"curator","curator",-553328342),new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.models.course.Course.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.models.course.Course.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.models.course.Course(self__.course_id,self__.curator,self__.goal,self__.flags,self__.checkpoints,self__.tags,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.models.course.Course.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.models.course.Course.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
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

offcourse.models.course.Course.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
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

offcourse.models.course.Course.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"tags","tags",1771418977),null,new cljs.core.Keyword(null,"curator","curator",-553328342),null,new cljs.core.Keyword(null,"goal","goal",-2073396501),null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),null,new cljs.core.Keyword(null,"course-id","course-id",-390190405),null,new cljs.core.Keyword(null,"flags","flags",1775418075),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.models.course.Course(self__.course_id,self__.curator,self__.goal,self__.flags,self__.checkpoints,self__.tags,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.models.course.Course.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__50441){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__50445 = cljs.core.keyword_identical_QMARK_;
var expr__50446 = k__19788__auto__;
if(cljs.core.truth_(pred__50445.call(null,new cljs.core.Keyword(null,"course-id","course-id",-390190405),expr__50446))){
return (new offcourse.models.course.Course(G__50441,self__.curator,self__.goal,self__.flags,self__.checkpoints,self__.tags,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50445.call(null,new cljs.core.Keyword(null,"curator","curator",-553328342),expr__50446))){
return (new offcourse.models.course.Course(self__.course_id,G__50441,self__.goal,self__.flags,self__.checkpoints,self__.tags,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50445.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501),expr__50446))){
return (new offcourse.models.course.Course(self__.course_id,self__.curator,G__50441,self__.flags,self__.checkpoints,self__.tags,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50445.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075),expr__50446))){
return (new offcourse.models.course.Course(self__.course_id,self__.curator,self__.goal,G__50441,self__.checkpoints,self__.tags,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50445.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),expr__50446))){
return (new offcourse.models.course.Course(self__.course_id,self__.curator,self__.goal,self__.flags,G__50441,self__.tags,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50445.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977),expr__50446))){
return (new offcourse.models.course.Course(self__.course_id,self__.curator,self__.goal,self__.flags,self__.checkpoints,G__50441,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.models.course.Course(self__.course_id,self__.curator,self__.goal,self__.flags,self__.checkpoints,self__.tags,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__50441),null));
}
}
}
}
}
}
});

offcourse.models.course.Course.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course-id","course-id",-390190405),self__.course_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curator","curator",-553328342),self__.curator],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"goal","goal",-2073396501),self__.goal],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flags","flags",1775418075),self__.flags],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),self__.checkpoints],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags],null))], null),self__.__extmap));
});

offcourse.models.course.Course.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__50441){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.models.course.Course(self__.course_id,self__.curator,self__.goal,self__.flags,self__.checkpoints,self__.tags,G__50441,self__.__extmap,self__.__hash));
});

offcourse.models.course.Course.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.models.course.Course.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"course-id","course-id",1250341122,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema","Num","schema/Num",1291714413,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"curator","curator",1087203185,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema","Str","schema/Str",-1065401364,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"goal","goal",-432864974,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema","Str","schema/Str",-1065401364,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"flags","flags",-879017694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("schema","Keyword","schema/Keyword",-210481386,null),null], null), null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"checkpoints","checkpoints",1281895382,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("schema","Int","schema/Int",-873338627,null),new cljs.core.Symbol(null,"Checkpoint","Checkpoint",-1596211582,null)], null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tags","tags",-883016792,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema","Any","schema/Any",-2042263988,null)], null))], null);
});

offcourse.models.course.Course.cljs$lang$type = true;

offcourse.models.course.Course.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.models.course/Course");
});

offcourse.models.course.Course.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.models.course/Course");
});

offcourse.models.course.__GT_Course = (function offcourse$models$course$__GT_Course(course_id,curator,goal,flags,checkpoints,tags){
return (new offcourse.models.course.Course(course_id,curator,goal,flags,checkpoints,tags,null,null,null));
});

offcourse.models.course.map__GT_Course = (function offcourse$models$course$map__GT_Course(G__50443){
return (new offcourse.models.course.Course(new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(G__50443),new cljs.core.Keyword(null,"curator","curator",-553328342).cljs$core$IFn$_invoke$arity$1(G__50443),new cljs.core.Keyword(null,"goal","goal",-2073396501).cljs$core$IFn$_invoke$arity$1(G__50443),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(G__50443),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(G__50443),new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(G__50443),null,cljs.core.dissoc.call(null,G__50443,new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"curator","curator",-553328342),new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"tags","tags",1771418977)),null));
});


schema.utils.declare_class_schema_BANG_.call(null,offcourse.models.course.Course,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,offcourse.models.course.Course,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),schema.core.Num,new cljs.core.Keyword(null,"curator","curator",-553328342),schema.core.Str,new cljs.core.Keyword(null,"goal","goal",-2073396501),schema.core.Str,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.fromArray([schema.core.Keyword], true),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),cljs.core.PersistentArrayMap.fromArray([schema.core.Int,offcourse.models.checkpoint.Checkpoint], true, false),new cljs.core.Keyword(null,"tags","tags",1771418977),schema.core.Any], null),null),(function (p1__22823__22824__auto__){
return offcourse.models.course.map__GT_Course.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__22823__22824__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class Course, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
offcourse.models.course.strict_map__GT_Course = (function offcourse$models$course$strict_map__GT_Course(var_args){
var args__20231__auto__ = [];
var len__20224__auto___50454 = arguments.length;
var i__20225__auto___50455 = (0);
while(true){
if((i__20225__auto___50455 < len__20224__auto___50454)){
args__20231__auto__.push((arguments[i__20225__auto___50455]));

var G__50456 = (i__20225__auto___50455 + (1));
i__20225__auto___50455 = G__50456;
continue;
} else {
}
break;
}

var argseq__20232__auto__ = ((((1) < args__20231__auto__.length))?(new cljs.core.IndexedSeq(args__20231__auto__.slice((1)),(0))):null);
return offcourse.models.course.strict_map__GT_Course.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20232__auto__);
});

offcourse.models.course.strict_map__GT_Course.cljs$core$IFn$_invoke$arity$variadic = (function (m50440,p__50450){
var vec__50451 = p__50450;
var drop_extra_keys_QMARK___21511__auto__ = cljs.core.nth.call(null,vec__50451,(0),null);
if(cljs.core.truth_((function (){var or__19166__auto__ = drop_extra_keys_QMARK___21511__auto__;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m50440),6);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"curator","curator",-553328342),new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"tags","tags",1771418977)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m50440)))));
}

return (new offcourse.models.course.Course((function (){var m__21414__auto__ = m50440;
var k__21415__auto__ = new cljs.core.Keyword(null,"course-id","course-id",-390190405);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50440;
var k__21415__auto__ = new cljs.core.Keyword(null,"curator","curator",-553328342);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50440;
var k__21415__auto__ = new cljs.core.Keyword(null,"goal","goal",-2073396501);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50440;
var k__21415__auto__ = new cljs.core.Keyword(null,"flags","flags",1775418075);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50440;
var k__21415__auto__ = new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50440;
var k__21415__auto__ = new cljs.core.Keyword(null,"tags","tags",1771418977);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),null,null,null));
});

offcourse.models.course.strict_map__GT_Course.cljs$lang$maxFixedArity = (1);

offcourse.models.course.strict_map__GT_Course.cljs$lang$applyTo = (function (seq50448){
var G__50449 = cljs.core.first.call(null,seq50448);
var seq50448__$1 = cljs.core.next.call(null,seq50448);
return offcourse.models.course.strict_map__GT_Course.cljs$core$IFn$_invoke$arity$variadic(G__50449,seq50448__$1);
});
offcourse.models.course.new$ = (function offcourse$models$course$new(var_args){
var args50457 = [];
var len__20224__auto___50460 = arguments.length;
var i__20225__auto___50461 = (0);
while(true){
if((i__20225__auto___50461 < len__20224__auto___50460)){
args50457.push((arguments[i__20225__auto___50461]));

var G__50462 = (i__20225__auto___50461 + (1));
i__20225__auto___50461 = G__50462;
continue;
} else {
}
break;
}

var G__50459 = args50457.length;
switch (G__50459) {
case 1:
return offcourse.models.course.new$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return offcourse.models.course.new$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50457.length)].join('')));

}
});

offcourse.models.course.new$.cljs$core$IFn$_invoke$arity$1 = (function (curator){
return offcourse.fake_data.index.generate_course.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),curator);
});

offcourse.models.course.new$.cljs$core$IFn$_invoke$arity$2 = (function (course,course_id){
return cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id);
});

offcourse.models.course.new$.cljs$lang$maxFixedArity = 2;
offcourse.models.course.coerce_from_map = (function offcourse$models$course$coerce_from_map(p__50464){
var map__50469 = p__50464;
var map__50469__$1 = ((((!((map__50469 == null)))?((((map__50469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50469):map__50469);
var course = map__50469__$1;
var checkpoints = cljs.core.get.call(null,map__50469__$1,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145));
var checkpoints__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__50469,map__50469__$1,course,checkpoints){
return (function (p__50471){
var vec__50472 = p__50471;
var id = cljs.core.nth.call(null,vec__50472,(0),null);
var checkpoint = cljs.core.nth.call(null,vec__50472,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,offcourse.models.checkpoint.map__GT_Checkpoint.call(null,checkpoint)], null);
});})(map__50469,map__50469__$1,course,checkpoints))
,checkpoints));
var course__$1 = cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoints__$1);
return offcourse.models.course.map__GT_Course.call(null,course__$1);
});
offcourse.models.course.add_temp_checkpoint = (function offcourse$models$course$add_temp_checkpoint(course,checkpoint){
return cljs.core.assoc_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"new","new",-2085437848)], null),checkpoint);
});
offcourse.models.course.next_checkpoint_id = (function offcourse$models$course$next_checkpoint_id(course){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.keys.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course))) + (1));
});
offcourse.models.course.add_checkpoint = (function offcourse$models$course$add_checkpoint(course,checkpoint){
var checkpoint__$1 = offcourse.models.checkpoint.new$.call(null,checkpoint,offcourse.models.course.next_checkpoint_id.call(null,course));
return cljs.core.assoc_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(checkpoint__$1)], null),checkpoint__$1);
});
offcourse.models.course.find_checkpoint = (function offcourse$models$course$find_checkpoint(course,checkpoint_id){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course),checkpoint_id);
});
offcourse.models.course.get_resource_urls = (function offcourse$models$course$get_resource_urls(course){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.vals.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course))));
});
offcourse.models.course.needs_resources_QMARK_ = (function offcourse$models$course$needs_resources_QMARK_(course){
return !(cljs.core.every_QMARK_.call(null,new cljs.core.Keyword(null,"resource","resource",251898836),cljs.core.vals.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course))));
});
offcourse.models.course.toggle_done = (function offcourse$models$course$toggle_done(course,checkpoint_id){
return cljs.core.update_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id], null),(function (p1__50473_SHARP_){
return offcourse.models.checkpoint.toggle_done.call(null,p1__50473_SHARP_);
}));
});
offcourse.models.course.highlight = (function offcourse$models$course$highlight(course,checkpoint_id,highlight__$1){
return cljs.core.update_in.call(null,course,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733)], null),(function (){
return highlight__$1;
}));
});
offcourse.models.course.get_tags = (function offcourse$models$course$get_tags(p__50474){
var map__50481 = p__50474;
var map__50481__$1 = ((((!((map__50481 == null)))?((((map__50481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50481):map__50481);
var checkpoints = cljs.core.get.call(null,map__50481__$1,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145));
return cljs.core.reduce.call(null,((function (map__50481,map__50481__$1,checkpoints){
return (function (tag_acc,p__50483){
var vec__50484 = p__50483;
var _ = cljs.core.nth.call(null,vec__50484,(0),null);
var map__50485 = cljs.core.nth.call(null,vec__50484,(1),null);
var map__50485__$1 = ((((!((map__50485 == null)))?((((map__50485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50485):map__50485);
var tags = cljs.core.get.call(null,map__50485__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
return cljs.core.into.call(null,tag_acc,tags);
});})(map__50481,map__50481__$1,checkpoints))
,cljs.core.sorted_set.call(null),checkpoints);
});
offcourse.models.course.has_tag_QMARK_ = (function offcourse$models$course$has_tag_QMARK_(course,tag){
var tags = offcourse.models.course.get_tags.call(null,course);
return cljs.core.contains_QMARK_.call(null,tags,tag);
});
offcourse.models.course.has_flag_QMARK_ = (function offcourse$models$course$has_flag_QMARK_(p__50487,flag){
var map__50490 = p__50487;
var map__50490__$1 = ((((!((map__50490 == null)))?((((map__50490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50490):map__50490);
var flags = cljs.core.get.call(null,map__50490__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
return cljs.core.contains_QMARK_.call(null,flags,flag);
});
offcourse.models.course.get_user = (function offcourse$models$course$get_user(p__50492){
var map__50495 = p__50492;
var map__50495__$1 = ((((!((map__50495 == null)))?((((map__50495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50495):map__50495);
var course = map__50495__$1;
var curator = cljs.core.get.call(null,map__50495__$1,new cljs.core.Keyword(null,"curator","curator",-553328342));
return curator;
});
offcourse.models.course.get_flags = (function offcourse$models$course$get_flags(p__50497){
var map__50500 = p__50497;
var map__50500__$1 = ((((!((map__50500 == null)))?((((map__50500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50500):map__50500);
var flags = map__50500__$1;
var flags__$1 = cljs.core.get.call(null,map__50500__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
return flags__$1;
});
offcourse.models.course.add_tags = (function offcourse$models$course$add_tags(p__50502,tags){
var map__50507 = p__50502;
var map__50507__$1 = ((((!((map__50507 == null)))?((((map__50507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50507):map__50507);
var course = map__50507__$1;
var checkpoints = cljs.core.get.call(null,map__50507__$1,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145));
return cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__50507,map__50507__$1,course,checkpoints){
return (function (p__50509){
var vec__50510 = p__50509;
var id = cljs.core.nth.call(null,vec__50510,(0),null);
var checkpoint = cljs.core.nth.call(null,vec__50510,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,offcourse.models.checkpoint.convert_tags.call(null,checkpoint,tags)], null);
});})(map__50507,map__50507__$1,course,checkpoints))
,checkpoints)));
});
