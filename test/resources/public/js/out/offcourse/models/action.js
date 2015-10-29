// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.action');
goog.require('cljs.core');
goog.require('cljs.core.async');

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
offcourse.models.action.Action = (function (type,payload,__meta,__extmap,__hash){
this.type = type;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
offcourse.models.action.Action.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19776__auto__,k__19777__auto__){
var self__ = this;
var this__19776__auto____$1 = this;
return cljs.core._lookup.call(null,this__19776__auto____$1,k__19777__auto__,null);
});

offcourse.models.action.Action.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19778__auto__,k24489,else__19779__auto__){
var self__ = this;
var this__19778__auto____$1 = this;
var G__24491 = (((k24489 instanceof cljs.core.Keyword))?k24489.fqn:null);
switch (G__24491) {
case "type":
return self__.type;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24489,else__19779__auto__);

}
});

offcourse.models.action.Action.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19790__auto__,writer__19791__auto__,opts__19792__auto__){
var self__ = this;
var this__19790__auto____$1 = this;
var pr_pair__19793__auto__ = ((function (this__19790__auto____$1){
return (function (keyval__19794__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,cljs.core.pr_writer,""," ","",opts__19792__auto__,keyval__19794__auto__);
});})(this__19790__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19791__auto__,pr_pair__19793__auto__,"#offcourse.models.action.Action{",", ","}",opts__19792__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

offcourse.models.action.Action.prototype.cljs$core$IIterable$ = true;

offcourse.models.action.Action.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24488){
var self__ = this;
var G__24488__$1 = this;
return (new cljs.core.RecordIter((0),G__24488__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

offcourse.models.action.Action.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19774__auto__){
var self__ = this;
var this__19774__auto____$1 = this;
return self__.__meta;
});

offcourse.models.action.Action.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19770__auto__){
var self__ = this;
var this__19770__auto____$1 = this;
return (new offcourse.models.action.Action(self__.type,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

offcourse.models.action.Action.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19780__auto__){
var self__ = this;
var this__19780__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

offcourse.models.action.Action.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19771__auto__){
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

offcourse.models.action.Action.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19772__auto__,other__19773__auto__){
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

offcourse.models.action.Action.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19785__auto__,k__19786__auto__){
var self__ = this;
var this__19785__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"type","type",1174270348),null], null), null),k__19786__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19785__auto____$1),self__.__meta),k__19786__auto__);
} else {
return (new offcourse.models.action.Action(self__.type,self__.payload,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19786__auto__)),null));
}
});

offcourse.models.action.Action.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19783__auto__,k__19784__auto__,G__24488){
var self__ = this;
var this__19783__auto____$1 = this;
var pred__24492 = cljs.core.keyword_identical_QMARK_;
var expr__24493 = k__19784__auto__;
if(cljs.core.truth_(pred__24492.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__24493))){
return (new offcourse.models.action.Action(G__24488,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24492.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__24493))){
return (new offcourse.models.action.Action(self__.type,G__24488,self__.__meta,self__.__extmap,null));
} else {
return (new offcourse.models.action.Action(self__.type,self__.payload,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19784__auto__,G__24488),null));
}
}
});

offcourse.models.action.Action.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19788__auto__){
var self__ = this;
var this__19788__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

offcourse.models.action.Action.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19775__auto__,G__24488){
var self__ = this;
var this__19775__auto____$1 = this;
return (new offcourse.models.action.Action(self__.type,self__.payload,G__24488,self__.__extmap,self__.__hash));
});

offcourse.models.action.Action.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19781__auto__,entry__19782__auto__){
var self__ = this;
var this__19781__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19782__auto__)){
return cljs.core._assoc.call(null,this__19781__auto____$1,cljs.core._nth.call(null,entry__19782__auto__,(0)),cljs.core._nth.call(null,entry__19782__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19781__auto____$1,entry__19782__auto__);
}
});

offcourse.models.action.Action.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null);
});

offcourse.models.action.Action.cljs$lang$type = true;

offcourse.models.action.Action.cljs$lang$ctorPrSeq = (function (this__19810__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"offcourse.models.action/Action");
});

offcourse.models.action.Action.cljs$lang$ctorPrWriter = (function (this__19810__auto__,writer__19811__auto__){
return cljs.core._write.call(null,writer__19811__auto__,"offcourse.models.action/Action");
});

offcourse.models.action.__GT_Action = (function offcourse$models$action$__GT_Action(type,payload){
return (new offcourse.models.action.Action(type,payload,null,null,null));
});

offcourse.models.action.map__GT_Action = (function offcourse$models$action$map__GT_Action(G__24490){
return (new offcourse.models.action.Action(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__24490),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__24490),null,cljs.core.dissoc.call(null,G__24490,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"payload","payload",-383036092)),null));
});

offcourse.models.action.respond = (function offcourse$models$action$respond(var_args){
var args__20227__auto__ = [];
var len__20220__auto___24498 = arguments.length;
var i__20221__auto___24499 = (0);
while(true){
if((i__20221__auto___24499 < len__20220__auto___24498)){
args__20227__auto__.push((arguments[i__20221__auto___24499]));

var G__24500 = (i__20221__auto___24499 + (1));
i__20221__auto___24499 = G__24500;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return offcourse.models.action.respond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

offcourse.models.action.respond.cljs$core$IFn$_invoke$arity$variadic = (function (type,payload){
var args = cljs.core.apply.call(null,cljs.core.hash_map,payload);
var payload__$1 = (function (){var or__19162__auto__ = new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return args;
}
})();
return offcourse.models.action.map__GT_Action.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"payload","payload",-383036092),payload__$1], null));
});

offcourse.models.action.respond.cljs$lang$maxFixedArity = (1);

offcourse.models.action.respond.cljs$lang$applyTo = (function (seq24496){
var G__24497 = cljs.core.first.call(null,seq24496);
var seq24496__$1 = cljs.core.next.call(null,seq24496);
return offcourse.models.action.respond.cljs$core$IFn$_invoke$arity$variadic(G__24497,seq24496__$1);
});
offcourse.models.action._GT__GT__BANG_ = (function offcourse$models$action$_GT__GT__BANG_(var_args){
var args__20227__auto__ = [];
var len__20220__auto___24516 = arguments.length;
var i__20221__auto___24517 = (0);
while(true){
if((i__20221__auto___24517 < len__20220__auto___24516)){
args__20227__auto__.push((arguments[i__20221__auto___24517]));

var G__24518 = (i__20221__auto___24517 + (1));
i__20221__auto___24517 = G__24518;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return offcourse.models.action._GT__GT__BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

offcourse.models.action._GT__GT__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (channel,response){
var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__){
return (function (state_24507){
var state_val_24508 = (state_24507[(1)]);
if((state_val_24508 === (1))){
var inst_24503 = cljs.core.apply.call(null,offcourse.models.action.respond,response);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24507__$1,(2),channel,inst_24503);
} else {
if((state_val_24508 === (2))){
var inst_24505 = (state_24507[(2)]);
var state_24507__$1 = state_24507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24507__$1,inst_24505);
} else {
return null;
}
}
});})(c__22242__auto__))
;
return ((function (switch__22177__auto__,c__22242__auto__){
return (function() {
var offcourse$models$action$state_machine__22178__auto__ = null;
var offcourse$models$action$state_machine__22178__auto____0 = (function (){
var statearr_24512 = [null,null,null,null,null,null,null];
(statearr_24512[(0)] = offcourse$models$action$state_machine__22178__auto__);

(statearr_24512[(1)] = (1));

return statearr_24512;
});
var offcourse$models$action$state_machine__22178__auto____1 = (function (state_24507){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_24507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e24513){if((e24513 instanceof Object)){
var ex__22181__auto__ = e24513;
var statearr_24514_24519 = state_24507;
(statearr_24514_24519[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24520 = state_24507;
state_24507 = G__24520;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
offcourse$models$action$state_machine__22178__auto__ = function(state_24507){
switch(arguments.length){
case 0:
return offcourse$models$action$state_machine__22178__auto____0.call(this);
case 1:
return offcourse$models$action$state_machine__22178__auto____1.call(this,state_24507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
offcourse$models$action$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = offcourse$models$action$state_machine__22178__auto____0;
offcourse$models$action$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = offcourse$models$action$state_machine__22178__auto____1;
return offcourse$models$action$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__))
})();
var state__22244__auto__ = (function (){var statearr_24515 = f__22243__auto__.call(null);
(statearr_24515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_24515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__))
);

return c__22242__auto__;
});

offcourse.models.action._GT__GT__BANG_.cljs$lang$maxFixedArity = (1);

offcourse.models.action._GT__GT__BANG_.cljs$lang$applyTo = (function (seq24501){
var G__24502 = cljs.core.first.call(null,seq24501);
var seq24501__$1 = cljs.core.next.call(null,seq24501);
return offcourse.models.action._GT__GT__BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24502,seq24501__$1);
});

//# sourceMappingURL=action.js.map