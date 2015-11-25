// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.viewmodels.course');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('offcourse.models.course');
goog.require('offcourse.models.resource');
var bad_keys__21512__auto___50660 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__21508__21513__auto__){
return schema.core.required_key_QMARK_.call(null,p1__21508__21513__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__21512__auto___50660)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__21512__auto___50660))));
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
offcourse.appstate.viewmodels.course.CourseViewmodel = (function (level,course,resources,__meta,__extmap,__hash){
this.level = level;
this.course = course;
this.resources = resources;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k50650,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__50652 = (((k50650 instanceof cljs.core.Keyword))?k50650.fqn:null);
switch (G__50652) {
case "level":
return self__.level;

break;
case "course":
return self__.course;

break;
case "resources":
return self__.resources;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50650,else__19783__auto__);

}
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.appstate.viewmodels.course.CourseViewmodel{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course","course",1455432948),self__.course],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resources","resources",1632806811),self__.resources],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IIterable$ = true;

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50649){
var self__ = this;
var G__50649__$1 = this;
return (new cljs.core.RecordIter((0),G__50649__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"resources","resources",1632806811)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(self__.level,self__.course,self__.resources,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
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

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
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

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"course","course",1455432948),null,new cljs.core.Keyword(null,"resources","resources",1632806811),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(self__.level,self__.course,self__.resources,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__50649){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__50653 = cljs.core.keyword_identical_QMARK_;
var expr__50654 = k__19788__auto__;
if(cljs.core.truth_(pred__50653.call(null,new cljs.core.Keyword(null,"level","level",1290497552),expr__50654))){
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(G__50649,self__.course,self__.resources,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50653.call(null,new cljs.core.Keyword(null,"course","course",1455432948),expr__50654))){
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(self__.level,G__50649,self__.resources,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50653.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811),expr__50654))){
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(self__.level,self__.course,G__50649,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(self__.level,self__.course,self__.resources,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__50649),null));
}
}
}
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"level","level",1290497552),self__.level],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"course","course",1455432948),self__.course],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"resources","resources",1632806811),self__.resources],null))], null),self__.__extmap));
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__50649){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(self__.level,self__.course,self__.resources,G__50649,self__.__extmap,self__.__hash));
});

offcourse.appstate.viewmodels.course.CourseViewmodel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.appstate.viewmodels.course.CourseViewmodel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Keyword","Keyword",-850065993,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"course","course",-1199002821,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"Course","Course",628923419,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"resources","resources",-1021628958,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema","Any","schema/Any",-2042263988,null)], null))], null);
});

offcourse.appstate.viewmodels.course.CourseViewmodel.cljs$lang$type = true;

offcourse.appstate.viewmodels.course.CourseViewmodel.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.appstate.viewmodels.course/CourseViewmodel");
});

offcourse.appstate.viewmodels.course.CourseViewmodel.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.appstate.viewmodels.course/CourseViewmodel");
});

offcourse.appstate.viewmodels.course.__GT_CourseViewmodel = (function offcourse$appstate$viewmodels$course$__GT_CourseViewmodel(level,course,resources){
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(level,course,resources,null,null,null));
});

offcourse.appstate.viewmodels.course.map__GT_CourseViewmodel = (function offcourse$appstate$viewmodels$course$map__GT_CourseViewmodel(G__50651){
return (new offcourse.appstate.viewmodels.course.CourseViewmodel(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(G__50651),new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(G__50651),new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(G__50651),null,cljs.core.dissoc.call(null,G__50651,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"resources","resources",1632806811)),null));
});


schema.utils.declare_class_schema_BANG_.call(null,offcourse.appstate.viewmodels.course.CourseViewmodel,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,offcourse.appstate.viewmodels.course.CourseViewmodel,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),cljs.core.Keyword,new cljs.core.Keyword(null,"course","course",1455432948),offcourse.models.course.Course,new cljs.core.Keyword(null,"resources","resources",1632806811),schema.core.Any], null),null),(function (p1__22823__22824__auto__){
return offcourse.appstate.viewmodels.course.map__GT_CourseViewmodel.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__22823__22824__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class CourseViewmodel, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
offcourse.appstate.viewmodels.course.strict_map__GT_CourseViewmodel = (function offcourse$appstate$viewmodels$course$strict_map__GT_CourseViewmodel(var_args){
var args__20231__auto__ = [];
var len__20224__auto___50662 = arguments.length;
var i__20225__auto___50663 = (0);
while(true){
if((i__20225__auto___50663 < len__20224__auto___50662)){
args__20231__auto__.push((arguments[i__20225__auto___50663]));

var G__50664 = (i__20225__auto___50663 + (1));
i__20225__auto___50663 = G__50664;
continue;
} else {
}
break;
}

var argseq__20232__auto__ = ((((1) < args__20231__auto__.length))?(new cljs.core.IndexedSeq(args__20231__auto__.slice((1)),(0))):null);
return offcourse.appstate.viewmodels.course.strict_map__GT_CourseViewmodel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20232__auto__);
});

offcourse.appstate.viewmodels.course.strict_map__GT_CourseViewmodel.cljs$core$IFn$_invoke$arity$variadic = (function (m50648,p__50658){
var vec__50659 = p__50658;
var drop_extra_keys_QMARK___21511__auto__ = cljs.core.nth.call(null,vec__50659,(0),null);
if(cljs.core.truth_((function (){var or__19166__auto__ = drop_extra_keys_QMARK___21511__auto__;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m50648),3);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"resources","resources",1632806811)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m50648)))));
}

return (new offcourse.appstate.viewmodels.course.CourseViewmodel((function (){var m__21414__auto__ = m50648;
var k__21415__auto__ = new cljs.core.Keyword(null,"level","level",1290497552);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50648;
var k__21415__auto__ = new cljs.core.Keyword(null,"course","course",1455432948);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),(function (){var m__21414__auto__ = m50648;
var k__21415__auto__ = new cljs.core.Keyword(null,"resources","resources",1632806811);
var temp__4423__auto__ = cljs.core.find.call(null,m__21414__auto__,k__21415__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__21416__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__21416__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__21415__auto__,m__21414__auto__)));
}
})(),null,null,null));
});

offcourse.appstate.viewmodels.course.strict_map__GT_CourseViewmodel.cljs$lang$maxFixedArity = (1);

offcourse.appstate.viewmodels.course.strict_map__GT_CourseViewmodel.cljs$lang$applyTo = (function (seq50656){
var G__50657 = cljs.core.first.call(null,seq50656);
var seq50656__$1 = cljs.core.next.call(null,seq50656);
return offcourse.appstate.viewmodels.course.strict_map__GT_CourseViewmodel.cljs$core$IFn$_invoke$arity$variadic(G__50657,seq50656__$1);
});
offcourse.appstate.viewmodels.course.new_course = (function offcourse$appstate$viewmodels$course$new_course(var_args){
var args50665 = [];
var len__20224__auto___50668 = arguments.length;
var i__20225__auto___50669 = (0);
while(true){
if((i__20225__auto___50669 < len__20224__auto___50668)){
args50665.push((arguments[i__20225__auto___50669]));

var G__50670 = (i__20225__auto___50669 + (1));
i__20225__auto___50669 = G__50670;
continue;
} else {
}
break;
}

var G__50667 = args50665.length;
switch (G__50667) {
case 0:
return offcourse.appstate.viewmodels.course.new_course.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return offcourse.appstate.viewmodels.course.new_course.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return offcourse.appstate.viewmodels.course.new_course.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50665.length)].join('')));

}
});

offcourse.appstate.viewmodels.course.new_course.cljs$core$IFn$_invoke$arity$0 = (function (){
return offcourse.appstate.viewmodels.course.map__GT_CourseViewmodel.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"unknown","unknown",-935977881)], null));
});

offcourse.appstate.viewmodels.course.new_course.cljs$core$IFn$_invoke$arity$1 = (function (course){
return offcourse.appstate.viewmodels.course.map__GT_CourseViewmodel.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"course","course",1455432948),course], null));
});

offcourse.appstate.viewmodels.course.new_course.cljs$core$IFn$_invoke$arity$2 = (function (course,resources){
return offcourse.appstate.viewmodels.course.map__GT_CourseViewmodel.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.Keyword(null,"course","course",1455432948),course,new cljs.core.Keyword(null,"resources","resources",1632806811),resources], null));
});

offcourse.appstate.viewmodels.course.new_course.cljs$lang$maxFixedArity = 2;
offcourse.appstate.viewmodels.course.check = (function offcourse$appstate$viewmodels$course$check(viewmodel){
return schema.core.check.call(null,offcourse.appstate.viewmodels.course.CourseViewmodel,viewmodel);
});
offcourse.appstate.viewmodels.course.highlight_checkpoint = (function offcourse$appstate$viewmodels$course$highlight_checkpoint(viewmodel,checkpoint_id,highlight){
return cljs.core.update_in.call(null,viewmodel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course","course",1455432948)], null),(function (p1__50672_SHARP_){
return offcourse.models.course.highlight.call(null,p1__50672_SHARP_,checkpoint_id,highlight);
}));
});
offcourse.appstate.viewmodels.course.refresh = (function offcourse$appstate$viewmodels$course$refresh(p__50673,p__50674){
var map__50679 = p__50673;
var map__50679__$1 = ((((!((map__50679 == null)))?((((map__50679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50679):map__50679);
var course_id = cljs.core.get.call(null,map__50679__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var map__50680 = p__50674;
var map__50680__$1 = ((((!((map__50680 == null)))?((((map__50680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50680):map__50680);
var store = map__50680__$1;
var courses = cljs.core.get.call(null,map__50680__$1,new cljs.core.Keyword(null,"courses","courses",-428279222));
var resources = cljs.core.get.call(null,map__50680__$1,new cljs.core.Keyword(null,"resources","resources",1632806811));
var collections = cljs.core.get.call(null,map__50680__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var course = cljs.core.get.call(null,courses,course_id);
var course__$1 = offcourse.models.course.add_tags.call(null,course,cljs.core.PersistentHashSet.EMPTY);
var urls = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,offcourse.models.course.get_resource_urls.call(null,course__$1));
var resources__$1 = offcourse.models.resource.find_resources.call(null,resources,urls);
return offcourse.appstate.viewmodels.course.new_course.call(null,course__$1,resources__$1);
});
