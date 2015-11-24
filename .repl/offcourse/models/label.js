// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.label');
goog.require('cljs.core');
goog.require('schema.core');
var bad_keys__25051__auto___55748 = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__25047__25052__auto__){
return schema.core.required_key_QMARK_.call(null,p1__25047__25052__auto__);
}),cljs.core.keys.call(null,null)));
if(cljs.core.not.call(null,bad_keys__25051__auto___55748)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"extra-key-schema? can not contain required keys: %s",cljs.core.vec.call(null,bad_keys__25051__auto___55748))));
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
offcourse.models.label.Label = (function (label_name,selected_QMARK_,highlighted_QMARK_,__meta,__extmap,__hash){
this.label_name = label_name;
this.selected_QMARK_ = selected_QMARK_;
this.highlighted_QMARK_ = highlighted_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.models.label.Label.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.models.label.Label.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k55738,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__55740 = (((k55738 instanceof cljs.core.Keyword))?k55738.fqn:null);
switch (G__55740) {
case "label-name":
return self__.label_name;

break;
case "selected?":
return self__.selected_QMARK_;

break;
case "highlighted?":
return self__.highlighted_QMARK_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k55738,else__19783__auto__);

}
});

offcourse.models.label.Label.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.models.label.Label{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"label-name","label-name",193032555),self__.label_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected?","selected?",-742502788),self__.selected_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),self__.highlighted_QMARK_],null))], null),self__.__extmap));
});

offcourse.models.label.Label.prototype.cljs$core$IIterable$ = true;

offcourse.models.label.Label.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__55737){
var self__ = this;
var G__55737__$1 = this;
return (new cljs.core.RecordIter((0),G__55737__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-name","label-name",193032555),new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.models.label.Label.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.models.label.Label.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.models.label.Label(self__.label_name,self__.selected_QMARK_,self__.highlighted_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.models.label.Label.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.models.label.Label.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
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

offcourse.models.label.Label.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
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

offcourse.models.label.Label.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label-name","label-name",193032555),null,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.models.label.Label(self__.label_name,self__.selected_QMARK_,self__.highlighted_QMARK_,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.models.label.Label.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__55737){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__55741 = cljs.core.keyword_identical_QMARK_;
var expr__55742 = k__19788__auto__;
if(cljs.core.truth_(pred__55741.call(null,new cljs.core.Keyword(null,"label-name","label-name",193032555),expr__55742))){
return (new offcourse.models.label.Label(G__55737,self__.selected_QMARK_,self__.highlighted_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55741.call(null,new cljs.core.Keyword(null,"selected?","selected?",-742502788),expr__55742))){
return (new offcourse.models.label.Label(self__.label_name,G__55737,self__.highlighted_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__55741.call(null,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),expr__55742))){
return (new offcourse.models.label.Label(self__.label_name,self__.selected_QMARK_,G__55737,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.models.label.Label(self__.label_name,self__.selected_QMARK_,self__.highlighted_QMARK_,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__55737),null));
}
}
}
});

offcourse.models.label.Label.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"label-name","label-name",193032555),self__.label_name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selected?","selected?",-742502788),self__.selected_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),self__.highlighted_QMARK_],null))], null),self__.__extmap));
});

offcourse.models.label.Label.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__55737){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.models.label.Label(self__.label_name,self__.selected_QMARK_,self__.highlighted_QMARK_,G__55737,self__.__extmap,self__.__hash));
});

offcourse.models.label.Label.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.models.label.Label.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"label-name","label-name",1833564082,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema","cond-pre","schema/cond-pre",51423234,null),new cljs.core.Symbol("schema","Keyword","schema/Keyword",-210481386,null),new cljs.core.Symbol("schema","Str","schema/Str",-1065401364,null))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"selected?","selected?",898028739,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema","Bool","schema/Bool",1078865095,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"highlighted?","highlighted?",988661462,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema","Bool","schema/Bool",1078865095,null)], null))], null);
});

offcourse.models.label.Label.cljs$lang$type = true;

offcourse.models.label.Label.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.models.label/Label");
});

offcourse.models.label.Label.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.models.label/Label");
});

offcourse.models.label.__GT_Label = (function offcourse$models$label$__GT_Label(label_name,selected_QMARK_,highlighted_QMARK_){
return (new offcourse.models.label.Label(label_name,selected_QMARK_,highlighted_QMARK_,null,null,null));
});

offcourse.models.label.map__GT_Label = (function offcourse$models$label$map__GT_Label(G__55739){
return (new offcourse.models.label.Label(new cljs.core.Keyword(null,"label-name","label-name",193032555).cljs$core$IFn$_invoke$arity$1(G__55739),new cljs.core.Keyword(null,"selected?","selected?",-742502788).cljs$core$IFn$_invoke$arity$1(G__55739),new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065).cljs$core$IFn$_invoke$arity$1(G__55739),null,cljs.core.dissoc.call(null,G__55739,new cljs.core.Keyword(null,"label-name","label-name",193032555),new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065)),null));
});


schema.utils.declare_class_schema_BANG_.call(null,offcourse.models.label.Label,schema.utils.assoc_when.call(null,schema.core.record_STAR_.call(null,offcourse.models.label.Label,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label-name","label-name",193032555),schema.core.cond_pre.call(null,schema.core.Keyword,schema.core.Str),new cljs.core.Keyword(null,"selected?","selected?",-742502788),schema.core.Bool,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065),schema.core.Bool], null),null),(function (p1__26408__26409__auto__){
return offcourse.models.label.map__GT_Label.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__26408__26409__auto__));
})),new cljs.core.Keyword(null,"extra-validator-fn","extra-validator-fn",1562905865),null));


/**
 * Factory function for class Label, taking a map of keywords to field values.  All keys are required, and no extra keys are allowed.  Even faster than map->
 */
offcourse.models.label.strict_map__GT_Label = (function offcourse$models$label$strict_map__GT_Label(var_args){
var args__20231__auto__ = [];
var len__20224__auto___55750 = arguments.length;
var i__20225__auto___55751 = (0);
while(true){
if((i__20225__auto___55751 < len__20224__auto___55750)){
args__20231__auto__.push((arguments[i__20225__auto___55751]));

var G__55752 = (i__20225__auto___55751 + (1));
i__20225__auto___55751 = G__55752;
continue;
} else {
}
break;
}

var argseq__20232__auto__ = ((((1) < args__20231__auto__.length))?(new cljs.core.IndexedSeq(args__20231__auto__.slice((1)),(0))):null);
return offcourse.models.label.strict_map__GT_Label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20232__auto__);
});

offcourse.models.label.strict_map__GT_Label.cljs$core$IFn$_invoke$arity$variadic = (function (m55736,p__55746){
var vec__55747 = p__55746;
var drop_extra_keys_QMARK___25050__auto__ = cljs.core.nth.call(null,vec__55747,(0),null);
if(cljs.core.truth_((function (){var or__19166__auto__ = drop_extra_keys_QMARK___25050__auto__;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.count.call(null,m55736),3);
}
})())){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Wrong number of keys: expected %s, got %s",cljs.core.sort.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label-name","label-name",193032555),new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065)], null)),cljs.core.sort.call(null,cljs.core.keys.call(null,m55736)))));
}

return (new offcourse.models.label.Label((function (){var m__24953__auto__ = m55736;
var k__24954__auto__ = new cljs.core.Keyword(null,"label-name","label-name",193032555);
var temp__4423__auto__ = cljs.core.find.call(null,m__24953__auto__,k__24954__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__24955__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__24955__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__24954__auto__,m__24953__auto__)));
}
})(),(function (){var m__24953__auto__ = m55736;
var k__24954__auto__ = new cljs.core.Keyword(null,"selected?","selected?",-742502788);
var temp__4423__auto__ = cljs.core.find.call(null,m__24953__auto__,k__24954__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__24955__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__24955__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__24954__auto__,m__24953__auto__)));
}
})(),(function (){var m__24953__auto__ = m55736;
var k__24954__auto__ = new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065);
var temp__4423__auto__ = cljs.core.find.call(null,m__24953__auto__,k__24954__auto__);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__24955__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__24955__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k__24954__auto__,m__24953__auto__)));
}
})(),null,null,null));
});

offcourse.models.label.strict_map__GT_Label.cljs$lang$maxFixedArity = (1);

offcourse.models.label.strict_map__GT_Label.cljs$lang$applyTo = (function (seq55744){
var G__55745 = cljs.core.first.call(null,seq55744);
var seq55744__$1 = cljs.core.next.call(null,seq55744);
return offcourse.models.label.strict_map__GT_Label.cljs$core$IFn$_invoke$arity$variadic(G__55745,seq55744__$1);
});
offcourse.models.label.LabelCollection = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,offcourse.models.label.Label], true, false);
offcourse.models.label.new_label = (function offcourse$models$label$new_label(var_args){
var args55753 = [];
var len__20224__auto___55756 = arguments.length;
var i__20225__auto___55757 = (0);
while(true){
if((i__20225__auto___55757 < len__20224__auto___55756)){
args55753.push((arguments[i__20225__auto___55757]));

var G__55758 = (i__20225__auto___55757 + (1));
i__20225__auto___55757 = G__55758;
continue;
} else {
}
break;
}

var G__55755 = args55753.length;
switch (G__55755) {
case 1:
return offcourse.models.label.new_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return offcourse.models.label.new_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55753.length)].join('')));

}
});

offcourse.models.label.new_label.cljs$core$IFn$_invoke$arity$1 = (function (name){
return offcourse.models.label.__GT_Label.call(null,name,false,false);
});

offcourse.models.label.new_label.cljs$core$IFn$_invoke$arity$2 = (function (name,selected){
var selected_QMARK_ = cljs.core._EQ_.call(null,name,selected);
return offcourse.models.label.__GT_Label.call(null,name,selected_QMARK_,false);
});

offcourse.models.label.new_label.cljs$lang$maxFixedArity = 2;
offcourse.models.label.from_string = (function offcourse$models$label$from_string(p__55760,tags){
var vec__55762 = p__55760;
var tag_name = cljs.core.nth.call(null,vec__55762,(0),null);
var _ = cljs.core.nth.call(null,vec__55762,(1),null);
var tag = vec__55762;
var tag_name__$1 = (((tag_name instanceof cljs.core.Keyword))?tag_name:tag);
if(!(cljs.core.empty_QMARK_.call(null,tags))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name__$1),cljs.core.keyword.call(null,tag_name__$1).call(null,tags)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name__$1),offcourse.models.label.new_label.call(null,cljs.core.keyword.call(null,tag_name__$1))], null);
}
});
offcourse.models.label.from_set = (function offcourse$models$label$from_set(var_args){
var args55763 = [];
var len__20224__auto___55766 = arguments.length;
var i__20225__auto___55767 = (0);
while(true){
if((i__20225__auto___55767 < len__20224__auto___55766)){
args55763.push((arguments[i__20225__auto___55767]));

var G__55768 = (i__20225__auto___55767 + (1));
i__20225__auto___55767 = G__55768;
continue;
} else {
}
break;
}

var G__55765 = args55763.length;
switch (G__55765) {
case 1:
return offcourse.models.label.from_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return offcourse.models.label.from_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55763.length)].join('')));

}
});

offcourse.models.label.from_set.cljs$core$IFn$_invoke$arity$1 = (function (names){
return offcourse.models.label.from_set.call(null,names,null);
});

offcourse.models.label.from_set.cljs$core$IFn$_invoke$arity$2 = (function (names,selected){
return cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.map.call(null,(function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,offcourse.models.label.new_label.call(null,name,selected)], null);
}),names));
});

offcourse.models.label.from_set.cljs$lang$maxFixedArity = 2;
offcourse.models.label.__GT_collection = (function offcourse$models$label$__GT_collection(collection,selection){
if(!(cljs.core.empty_QMARK_.call(null,collection))){
return offcourse.models.label.from_set.call(null,collection,selection);
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}
});
offcourse.models.label.highlight = (function offcourse$models$label$highlight(collection,label_name,highlight__$1){
return cljs.core.assoc_in.call(null,collection,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_name,new cljs.core.Keyword(null,"highlighted?","highlighted?",-651870065)], null),highlight__$1);
});
