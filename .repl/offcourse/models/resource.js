// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.resource');
goog.require('cljs.core');
goog.require('offcourse.fake_data.index');

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
offcourse.models.resource.Resource = (function (url,title,content,__meta,__extmap,__hash){
this.url = url;
this.title = title;
this.content = content;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.models.resource.Resource.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19780__auto__,k__19781__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return cljs.core._lookup.call(null,this__19780__auto____$1,k__19781__auto__,null);
});

offcourse.models.resource.Resource.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19782__auto__,k50686,else__19783__auto__){
var self__ = this;
var this__19782__auto____$1 = this;
var G__50688 = (((k50686 instanceof cljs.core.Keyword))?k50686.fqn:null);
switch (G__50688) {
case "url":
return self__.url;

break;
case "title":
return self__.title;

break;
case "content":
return self__.content;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50686,else__19783__auto__);

}
});

offcourse.models.resource.Resource.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19794__auto__,writer__19795__auto__,opts__19796__auto__){
var self__ = this;
var this__19794__auto____$1 = this;
var pr_pair__19797__auto__ = ((function (this__19794__auto____$1){
return (function (keyval__19798__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,cljs.core.pr_writer,""," ","",opts__19796__auto__,keyval__19798__auto__);
});})(this__19794__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19795__auto__,pr_pair__19797__auto__,"#offcourse.models.resource.Resource{",", ","}",opts__19796__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583),self__.title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
});

offcourse.models.resource.Resource.prototype.cljs$core$IIterable$ = true;

offcourse.models.resource.Resource.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50685){
var self__ = this;
var G__50685__$1 = this;
return (new cljs.core.RecordIter((0),G__50685__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.models.resource.Resource.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19778__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
return self__.__meta;
});

offcourse.models.resource.Resource.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return (new offcourse.models.resource.Resource(self__.url,self__.title,self__.content,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.models.resource.Resource.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19784__auto__){
var self__ = this;
var this__19784__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.models.resource.Resource.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19775__auto__){
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

offcourse.models.resource.Resource.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19776__auto__,other__19777__auto__){
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

offcourse.models.resource.Resource.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19789__auto__,k__19790__auto__){
var self__ = this;
var this__19789__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"title","title",636505583),null,new cljs.core.Keyword(null,"url","url",276297046),null], null), null),k__19790__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19789__auto____$1),self__.__meta),k__19790__auto__);
} else {
return (new offcourse.models.resource.Resource(self__.url,self__.title,self__.content,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19790__auto__)),null));
}
});

offcourse.models.resource.Resource.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19787__auto__,k__19788__auto__,G__50685){
var self__ = this;
var this__19787__auto____$1 = this;
var pred__50689 = cljs.core.keyword_identical_QMARK_;
var expr__50690 = k__19788__auto__;
if(cljs.core.truth_(pred__50689.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__50690))){
return (new offcourse.models.resource.Resource(G__50685,self__.title,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50689.call(null,new cljs.core.Keyword(null,"title","title",636505583),expr__50690))){
return (new offcourse.models.resource.Resource(self__.url,G__50685,self__.content,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50689.call(null,new cljs.core.Keyword(null,"content","content",15833224),expr__50690))){
return (new offcourse.models.resource.Resource(self__.url,self__.title,G__50685,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.models.resource.Resource(self__.url,self__.title,self__.content,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19788__auto__,G__50685),null));
}
}
}
});

offcourse.models.resource.Resource.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19792__auto__){
var self__ = this;
var this__19792__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"title","title",636505583),self__.title],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
});

offcourse.models.resource.Resource.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19779__auto__,G__50685){
var self__ = this;
var this__19779__auto____$1 = this;
return (new offcourse.models.resource.Resource(self__.url,self__.title,self__.content,G__50685,self__.__extmap,self__.__hash));
});

offcourse.models.resource.Resource.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19785__auto__,entry__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19786__auto__)){
return cljs.core._assoc.call(null,this__19785__auto____$1,cljs.core._nth.call(null,entry__19786__auto__,(0)),cljs.core._nth.call(null,entry__19786__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19785__auto____$1,entry__19786__auto__);
}
});

offcourse.models.resource.Resource.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"content","content",1656364751,null)], null);
});

offcourse.models.resource.Resource.cljs$lang$type = true;

offcourse.models.resource.Resource.cljs$lang$ctorPrSeq = (function (this__19814__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.models.resource/Resource");
});

offcourse.models.resource.Resource.cljs$lang$ctorPrWriter = (function (this__19814__auto__,writer__19815__auto__){
return cljs.core._write.call(null,writer__19815__auto__,"offcourse.models.resource/Resource");
});

offcourse.models.resource.__GT_Resource = (function offcourse$models$resource$__GT_Resource(url,title,content){
return (new offcourse.models.resource.Resource(url,title,content,null,null,null));
});

offcourse.models.resource.map__GT_Resource = (function offcourse$models$resource$map__GT_Resource(G__50687){
return (new offcourse.models.resource.Resource(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__50687),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(G__50687),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__50687),null,cljs.core.dissoc.call(null,G__50687,new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"content","content",15833224)),null));
});

offcourse.models.resource.new$ = (function offcourse$models$resource$new(var_args){
var args50693 = [];
var len__20224__auto___50698 = arguments.length;
var i__20225__auto___50699 = (0);
while(true){
if((i__20225__auto___50699 < len__20224__auto___50698)){
args50693.push((arguments[i__20225__auto___50699]));

var G__50700 = (i__20225__auto___50699 + (1));
i__20225__auto___50699 = G__50700;
continue;
} else {
}
break;
}

var G__50695 = args50693.length;
switch (G__50695) {
case 1:
return offcourse.models.resource.new$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return offcourse.models.resource.new$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return offcourse.models.resource.new$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50693.length)].join('')));

}
});

offcourse.models.resource.new$.cljs$core$IFn$_invoke$arity$1 = (function (resource){
return offcourse.models.resource.map__GT_Resource.call(null,resource);
});

offcourse.models.resource.new$.cljs$core$IFn$_invoke$arity$2 = (function (url,_){
var map__50696 = offcourse.fake_data.index.generate_content.call(null);
var map__50696__$1 = ((((!((map__50696 == null)))?((((map__50696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50696):map__50696);
var title = cljs.core.get.call(null,map__50696__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.call(null,map__50696__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return (new offcourse.models.resource.Resource(url,title,text,null,null,null));
});

offcourse.models.resource.new$.cljs$core$IFn$_invoke$arity$3 = (function (url,title,content){
return (new offcourse.models.resource.Resource(url,title,content,null,null,null));
});

offcourse.models.resource.new$.cljs$lang$maxFixedArity = 3;
offcourse.models.resource.find_resource = (function offcourse$models$resource$find_resource(collection,url){
return cljs.core.get.call(null,collection,url);
});
offcourse.models.resource.find_resources = (function offcourse$models$resource$find_resources(collection,urls){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (url){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,cljs.core.get.call(null,collection,url)], null);
}),urls));
});
