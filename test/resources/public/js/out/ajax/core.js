// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.core.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7 == null)))){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__19817__auto__ = (((this$ == null))?null:this$);
var m__19818__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__19818__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.core.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__19817__auto__ = (((this$ == null))?null:this$);
var m__19818__auto__ = (ajax.core._abort[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,this$);
} else {
var m__19818__auto____$1 = (ajax.core._abort["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 * @interface
 */
ajax.core.DirectlySubmittable = function(){};


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.core.AjaxResponse = function(){};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__19817__auto__ = (((this$ == null))?null:this$);
var m__19818__auto__ = (ajax.core._status[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,this$);
} else {
var m__19818__auto____$1 = (ajax.core._status["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__19817__auto__ = (((this$ == null))?null:this$);
var m__19818__auto__ = (ajax.core._status_text[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,this$);
} else {
var m__19818__auto____$1 = (ajax.core._status_text["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format
 *  such as a blob or arraybuffer.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__19817__auto__ = (((this$ == null))?null:this$);
var m__19818__auto__ = (ajax.core._body[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,this$);
} else {
var m__19818__auto____$1 = (ajax.core._body["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__19817__auto__ = (((this$ == null))?null:this$);
var m__19818__auto__ = (ajax.core._get_response_header[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,this$,header);
} else {
var m__19818__auto____$1 = (ajax.core._get_response_header["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__19817__auto__ = (((this$ == null))?null:this$);
var m__19818__auto__ = (ajax.core._was_aborted[goog.typeOf(x__19817__auto__)]);
if(!((m__19818__auto__ == null))){
return m__19818__auto__.call(null,this$);
} else {
var m__19818__auto____$1 = (ajax.core._was_aborted["_"]);
if(!((m__19818__auto____$1 == null))){
return m__19818__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__19162__auto__ = ((!((params == null)))?(((false) || (params.ajax$core$DirectlySubmittable$))?true:(((!params.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params):false)):cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params));
if(or__19162__auto__){
return or__19162__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__29495){
var map__29496 = p__29495;
var map__29496__$1 = ((((!((map__29496 == null)))?((((map__29496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29496):map__29496);
var timeout = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__29496__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var this$__$1 = this;
var G__29498 = this$__$1;
goog.events.listen(G__29498,goog.net.EventType.COMPLETE,((function (G__29498,this$__$1,map__29496,map__29496__$1,timeout,with_credentials){
return (function (p1__29494_SHARP_){
return handler.call(null,p1__29494_SHARP_.target);
});})(G__29498,this$__$1,map__29496,map__29496__$1,timeout,with_credentials))
);

G__29498.setTimeoutInterval(timeout);

G__29498.setWithCredentials(with_credentials);

G__29498.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__29498;
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
ajax.core.ready_state = (function ajax$core$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__29500){
var map__29501 = p__29500;
var map__29501__$1 = ((((!((map__29501 == null)))?((((map__29501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29501):map__29501);
var timeout = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__29501__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__29501,map__29501__$1,timeout,with_credentials,response_format){
return (function (p1__29499_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.core.ready_state.call(null,p1__29499_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__29501,map__29501__$1,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___29509 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___29509)){
var response_type_29510 = temp__4425__auto___29509;
this$__$1.responseType = cljs.core.name.call(null,response_type_29510);
} else {
}

var seq__29503_29511 = cljs.core.seq.call(null,headers);
var chunk__29504_29512 = null;
var count__29505_29513 = (0);
var i__29506_29514 = (0);
while(true){
if((i__29506_29514 < count__29505_29513)){
var vec__29507_29515 = cljs.core._nth.call(null,chunk__29504_29512,i__29506_29514);
var k_29516 = cljs.core.nth.call(null,vec__29507_29515,(0),null);
var v_29517 = cljs.core.nth.call(null,vec__29507_29515,(1),null);
this$__$1.setRequestHeader(k_29516,v_29517);

var G__29518 = seq__29503_29511;
var G__29519 = chunk__29504_29512;
var G__29520 = count__29505_29513;
var G__29521 = (i__29506_29514 + (1));
seq__29503_29511 = G__29518;
chunk__29504_29512 = G__29519;
count__29505_29513 = G__29520;
i__29506_29514 = G__29521;
continue;
} else {
var temp__4425__auto___29522 = cljs.core.seq.call(null,seq__29503_29511);
if(temp__4425__auto___29522){
var seq__29503_29523__$1 = temp__4425__auto___29522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29503_29523__$1)){
var c__19965__auto___29524 = cljs.core.chunk_first.call(null,seq__29503_29523__$1);
var G__29525 = cljs.core.chunk_rest.call(null,seq__29503_29523__$1);
var G__29526 = c__19965__auto___29524;
var G__29527 = cljs.core.count.call(null,c__19965__auto___29524);
var G__29528 = (0);
seq__29503_29511 = G__29525;
chunk__29504_29512 = G__29526;
count__29505_29513 = G__29527;
i__29506_29514 = G__29528;
continue;
} else {
var vec__29508_29529 = cljs.core.first.call(null,seq__29503_29523__$1);
var k_29530 = cljs.core.nth.call(null,vec__29508_29529,(0),null);
var v_29531 = cljs.core.nth.call(null,vec__29508_29529,(1),null);
this$__$1.setRequestHeader(k_29530,v_29531);

var G__29532 = cljs.core.next.call(null,seq__29503_29523__$1);
var G__29533 = null;
var G__29534 = (0);
var G__29535 = (0);
seq__29503_29511 = G__29532;
chunk__29504_29512 = G__29533;
count__29505_29513 = G__29534;
i__29506_29514 = G__29535;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__19162__auto__ = body;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__29536){
var map__29537 = p__29536;
var map__29537__$1 = ((((!((map__29537 == null)))?((((map__29537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29537):map__29537);
var id = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__29537__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,ajax.core._body.call(null,xhrio));
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(var_args){
var args29539 = [];
var len__20220__auto___29542 = arguments.length;
var i__20221__auto___29543 = (0);
while(true){
if((i__20221__auto___29543 < len__20220__auto___29542)){
args29539.push((arguments[i__20221__auto___29543]));

var G__29544 = (i__20221__auto___29543 + (1));
i__20221__auto___29543 = G__29544;
continue;
} else {
}
break;
}

var G__29541 = args29539.length;
switch (G__29541) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29539.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.call(null);
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_write = (function ajax$core$transit_write(var_args){
var args29546 = [];
var len__20220__auto___29549 = arguments.length;
var i__20221__auto___29550 = (0);
while(true){
if((i__20221__auto___29550 < len__20220__auto___29549)){
args29546.push((arguments[i__20221__auto___29550]));

var G__29551 = (i__20221__auto___29550 + (1));
i__20221__auto___29550 = G__29551;
continue;
} else {
}
break;
}

var G__29548 = args29546.length;
switch (G__29548) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29546.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var args29553 = [];
var len__20220__auto___29559 = arguments.length;
var i__20221__auto___29560 = (0);
while(true){
if((i__20221__auto___29560 < len__20220__auto___29559)){
args29553.push((arguments[i__20221__auto___29560]));

var G__29561 = (i__20221__auto___29560 + (1));
i__20221__auto___29560 = G__29561;
continue;
} else {
}
break;
}

var G__29555 = args29553.length;
switch (G__29555) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29553.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__29556){
var map__29557 = p__29556;
var map__29557__$1 = ((((!((map__29557 == null)))?((((map__29557.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29557.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29557):map__29557);
var opts = map__29557__$1;
var type = cljs.core.get.call(null,map__29557__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer = cljs.core.get.call(null,map__29557__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var writer__$1 = (function (){var or__19162__auto__ = writer;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__19162__auto____$1 = type;
if(cljs.core.truth_(or__19162__auto____$1)){
return or__19162__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read = (function ajax$core$transit_read(var_args){
var args29563 = [];
var len__20220__auto___29566 = arguments.length;
var i__20221__auto___29567 = (0);
while(true){
if((i__20221__auto___29567 < len__20220__auto___29566)){
args29563.push((arguments[i__20221__auto___29567]));

var G__29568 = (i__20221__auto___29567 + (1));
i__20221__auto___29567 = G__29568;
continue;
} else {
}
break;
}

var G__29565 = args29563.length;
switch (G__29565) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29563.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var args29570 = [];
var len__20220__auto___29576 = arguments.length;
var i__20221__auto___29577 = (0);
while(true){
if((i__20221__auto___29577 < len__20220__auto___29576)){
args29570.push((arguments[i__20221__auto___29577]));

var G__29578 = (i__20221__auto___29577 + (1));
i__20221__auto___29577 = G__29578;
continue;
} else {
}
break;
}

var G__29572 = args29570.length;
switch (G__29572) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29570.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__29573){
var map__29574 = p__29573;
var map__29574__$1 = ((((!((map__29574 == null)))?((((map__29574.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29574.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29574):map__29574);
var opts = map__29574__$1;
var type = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var raw = cljs.core.get.call(null,map__29574__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader__$1 = (function (){var or__19162__auto__ = reader;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__19162__auto____$1 = type;
if(cljs.core.truth_(or__19162__auto____$1)){
return or__19162__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var args29580 = [];
var len__20220__auto___29583 = arguments.length;
var i__20221__auto___29584 = (0);
while(true){
if((i__20221__auto___29584 < len__20220__auto___29583)){
args29580.push((arguments[i__20221__auto___29584]));

var G__29585 = (i__20221__auto___29584 + (1));
i__20221__auto___29584 = G__29585;
continue;
} else {
}
break;
}

var G__29582 = args29580.length;
switch (G__29582) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29580.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var args29587 = [];
var len__20220__auto___29590 = arguments.length;
var i__20221__auto___29591 = (0);
while(true){
if((i__20221__auto___29591 < len__20220__auto___29590)){
args29587.push((arguments[i__20221__auto___29591]));

var G__29592 = (i__20221__auto___29591 + (1));
i__20221__auto___29591 = G__29592;
continue;
} else {
}
break;
}

var G__29589 = args29587.length;
switch (G__29589) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29587.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__19150__auto__ = prefix;
if(cljs.core.truth_(and__19150__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__19150__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__19150__auto__ = prefix;
if(cljs.core.truth_(and__19150__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__19150__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__19150__auto__ = prefix;
if(cljs.core.truth_(and__19150__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__19150__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__19150__auto__ = prefix;
if(cljs.core.truth_(and__19150__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__19150__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var args29594 = [];
var len__20220__auto___29600 = arguments.length;
var i__20221__auto___29601 = (0);
while(true){
if((i__20221__auto___29601 < len__20220__auto___29600)){
args29594.push((arguments[i__20221__auto___29601]));

var G__29602 = (i__20221__auto___29601 + (1));
i__20221__auto___29601 = G__29602;
continue;
} else {
}
break;
}

var G__29596 = args29594.length;
switch (G__29596) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29594.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__29597){
var map__29598 = p__29597;
var map__29598__$1 = ((((!((map__29598 == null)))?((((map__29598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29598):map__29598);
var prefix = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__29598__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args29604 = [];
var len__20220__auto___29607 = arguments.length;
var i__20221__auto___29608 = (0);
while(true){
if((i__20221__auto___29608 < len__20220__auto___29607)){
args29604.push((arguments[i__20221__auto___29608]));

var G__29609 = (i__20221__auto___29608 + (1));
i__20221__auto___29608 = G__29609;
continue;
} else {
}
break;
}

var G__29606 = args29604.length;
switch (G__29606) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29604.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.accept_entry = (function ajax$core$accept_entry(var_args){
var args29611 = [];
var len__20220__auto___29614 = arguments.length;
var i__20221__auto___29615 = (0);
while(true){
if((i__20221__auto___29615 < len__20220__auto___29614)){
args29611.push((arguments[i__20221__auto___29615]));

var G__29616 = (i__20221__auto___29615 + (1));
i__20221__auto___29615 = G__29616;
continue;
} else {
}
break;
}

var G__29613 = args29611.length;
switch (G__29613) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29611.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__19162__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__19162__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args29618 = [];
var len__20220__auto___29621 = arguments.length;
var i__20221__auto___29622 = (0);
while(true){
if((i__20221__auto___29622 < len__20220__auto___29621)){
args29618.push((arguments[i__20221__auto___29622]));

var G__29623 = (i__20221__auto___29622 + (1));
i__20221__auto___29622 = G__29623;
continue;
} else {
}
break;
}

var G__29620 = args29618.length;
switch (G__29620) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29618.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__29625){
var map__29628 = p__29625;
var map__29628__$1 = ((((!((map__29628 == null)))?((((map__29628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29628):map__29628);
var opts = map__29628__$1;
var response_format = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__19162__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args29630 = [];
var len__20220__auto___29633 = arguments.length;
var i__20221__auto___29634 = (0);
while(true){
if((i__20221__auto___29634 < len__20220__auto___29633)){
args29630.push((arguments[i__20221__auto___29634]));

var G__29635 = (i__20221__auto___29634 + (1));
i__20221__auto___29634 = G__29635;
continue;
} else {
}
break;
}

var G__29632 = args29630.length;
switch (G__29632) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29630.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__29637){
var map__29640 = p__29637;
var map__29640__$1 = ((((!((map__29640 == null)))?((((map__29640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29640):map__29640);
var opts = map__29640__$1;
var response_format = cljs.core.get.call(null,map__29640__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args29642 = [];
var len__20220__auto___29645 = arguments.length;
var i__20221__auto___29646 = (0);
while(true){
if((i__20221__auto___29646 < len__20220__auto___29645)){
args29642.push((arguments[i__20221__auto___29646]));

var G__29647 = (i__20221__auto___29646 + (1));
i__20221__auto___29646 = G__29647;
continue;
} else {
}
break;
}

var G__29644 = args29642.length;
switch (G__29644) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29642.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__29649){
var map__29652 = p__29649;
var map__29652__$1 = ((((!((map__29652 == null)))?((((map__29652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29652):map__29652);
var opts = map__29652__$1;
var response_format = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__29654,xhrio){
var map__29657 = p__29654;
var map__29657__$1 = ((((!((map__29657 == null)))?((((map__29657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29657):map__29657);
var description = cljs.core.get.call(null,map__29657__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.core._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29663 = arguments.length;
var i__20221__auto___29664 = (0);
while(true){
if((i__20221__auto___29664 < len__20220__auto___29663)){
args__20227__auto__.push((arguments[i__20221__auto___29664]));

var G__29665 = (i__20221__auto___29664 + (1));
i__20221__auto___29664 = G__29665;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((3) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20228__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq29659){
var G__29660 = cljs.core.first.call(null,seq29659);
var seq29659__$1 = cljs.core.next.call(null,seq29659);
var G__29661 = cljs.core.first.call(null,seq29659__$1);
var seq29659__$2 = cljs.core.next.call(null,seq29659__$1);
var G__29662 = cljs.core.first.call(null,seq29659__$2);
var seq29659__$3 = cljs.core.next.call(null,seq29659__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__29660,G__29661,G__29662,seq29659__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__29666,xhrio){
var map__29672 = p__29666;
var map__29672__$1 = ((((!((map__29672 == null)))?((((map__29672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29672):map__29672);
var format = map__29672__$1;
var read = cljs.core.get.call(null,map__29672__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__29675 = status;
switch (G__29675) {
case (-1):
if(cljs.core.truth_(ajax.core._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e29676){if((e29676 instanceof Object)){
var e = e29676;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e29676;

}
}
}
}catch (e29674){if((e29674 instanceof Object)){
var e = e29674;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e29674;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__29678,p__29679){
var map__29686 = p__29678;
var map__29686__$1 = ((((!((map__29686 == null)))?((((map__29686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29686):map__29686);
var uri = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__29686__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var map__29687 = p__29679;
var map__29687__$1 = ((((!((map__29687 == null)))?((((map__29687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29687):map__29687);
var content_type = cljs.core.get.call(null,map__29687__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__19162__auto__ = headers;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__29690 = ajax.core.get_request_format.call(null,format);
var map__29690__$1 = ((((!((map__29690 == null)))?((((map__29690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29690):map__29690);
var write = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type__$1 = cljs.core.get.call(null,map__29690__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?write.call(null,params):(cljs.core.truth_(ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",[cljs.core.str(content_type__$1),cljs.core.str("; charset=utf-8")].join('')], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args29692 = [];
var len__20220__auto___29695 = arguments.length;
var i__20221__auto___29696 = (0);
while(true){
if((i__20221__auto___29696 < len__20220__auto___29695)){
args29692.push((arguments[i__20221__auto___29696]));

var G__29697 = (i__20221__auto___29696 + (1));
i__20221__auto___29696 = G__29697;
continue;
} else {
}
break;
}

var G__29694 = args29692.length;
switch (G__29694) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29692.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__29699){
var map__29702 = p__29699;
var map__29702__$1 = ((((!((map__29702 == null)))?((((map__29702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29702):map__29702);
var handler = cljs.core.get.call(null,map__29702__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__29704){
var map__29708 = p__29704;
var map__29708__$1 = ((((!((map__29708 == null)))?((((map__29708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29708):map__29708);
var opts = map__29708__$1;
var method = cljs.core.get.call(null,map__29708__$1,new cljs.core.Keyword(null,"method","method",55703592));
var api = cljs.core.get.call(null,map__29708__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__29710 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__29710,(0),null);
var body = cljs.core.nth.call(null,vec__29710,(1),null);
var headers = cljs.core.nth.call(null,vec__29710,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__19162__auto__ = api;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request.call(null,api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__29712 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__29712) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_2.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__29715 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__29715) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__29717_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__29717_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args29718 = [];
var len__20220__auto___29731 = arguments.length;
var i__20221__auto___29732 = (0);
while(true){
if((i__20221__auto___29732 < len__20220__auto___29731)){
args29718.push((arguments[i__20221__auto___29732]));

var G__29733 = (i__20221__auto___29732 + (1));
i__20221__auto___29732 = G__29733;
continue;
} else {
}
break;
}

var G__29720 = args29718.length;
switch (G__29720) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29718.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__29721,p__29722){
var map__29723 = p__29721;
var map__29723__$1 = ((((!((map__29723 == null)))?((((map__29723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29723):map__29723);
var handler = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__29724 = p__29722;
var ok = cljs.core.nth.call(null,vec__29724,(0),null);
var result = cljs.core.nth.call(null,vec__29724,(1),null);
var temp__4423__auto___29735 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___29735)){
var h_29736 = temp__4423__auto___29735;
h_29736.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__29726){
var map__29727 = p__29726;
var map__29727__$1 = ((((!((map__29727 == null)))?((((map__29727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29727):map__29727);
var handler = cljs.core.get.call(null,map__29727__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__29727__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__29727__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__29727,map__29727__$1,handler,error_handler,finally$){
return (function (p__29729){
var vec__29730 = p__29729;
var ok = cljs.core.nth.call(null,vec__29730,(0),null);
var result = cljs.core.nth.call(null,vec__29730,(1),null);
var temp__4423__auto___29737 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___29737)){
var h_29738 = temp__4423__auto___29737;
h_29738.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__29727,map__29727__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__29739){
var map__29742 = p__29739;
var map__29742__$1 = ((((!((map__29742 == null)))?((((map__29742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29742):map__29742);
var opts = map__29742__$1;
var method = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__29742__$1,new cljs.core.Keyword(null,"params","params",710516235));

var needs_format = cljs.core.not.call(null,(function (){var or__19162__auto__ = ajax.core.submittable_QMARK_.call(null,params);
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return cljs.core._EQ_.call(null,method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__19162__auto__ = format;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29746 = arguments.length;
var i__20221__auto___29747 = (0);
while(true){
if((i__20221__auto___29747 < len__20220__auto___29746)){
args__20227__auto__.push((arguments[i__20221__auto___29747]));

var G__29748 = (i__20221__auto___29747 + (1));
i__20221__auto___29747 = G__29748;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25591__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__25591__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25591__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq29744){
var G__29745 = cljs.core.first.call(null,seq29744);
var seq29744__$1 = cljs.core.next.call(null,seq29744);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__29745,seq29744__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29751 = arguments.length;
var i__20221__auto___29752 = (0);
while(true){
if((i__20221__auto___29752 < len__20220__auto___29751)){
args__20227__auto__.push((arguments[i__20221__auto___29752]));

var G__29753 = (i__20221__auto___29752 + (1));
i__20221__auto___29752 = G__29753;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25591__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__25591__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25591__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq29749){
var G__29750 = cljs.core.first.call(null,seq29749);
var seq29749__$1 = cljs.core.next.call(null,seq29749);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__29750,seq29749__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29756 = arguments.length;
var i__20221__auto___29757 = (0);
while(true){
if((i__20221__auto___29757 < len__20220__auto___29756)){
args__20227__auto__.push((arguments[i__20221__auto___29757]));

var G__29758 = (i__20221__auto___29757 + (1));
i__20221__auto___29757 = G__29758;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25591__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__25591__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25591__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq29754){
var G__29755 = cljs.core.first.call(null,seq29754);
var seq29754__$1 = cljs.core.next.call(null,seq29754);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__29755,seq29754__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29761 = arguments.length;
var i__20221__auto___29762 = (0);
while(true){
if((i__20221__auto___29762 < len__20220__auto___29761)){
args__20227__auto__.push((arguments[i__20221__auto___29762]));

var G__29763 = (i__20221__auto___29762 + (1));
i__20221__auto___29762 = G__29763;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25591__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__25591__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25591__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq29759){
var G__29760 = cljs.core.first.call(null,seq29759);
var seq29759__$1 = cljs.core.next.call(null,seq29759);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__29760,seq29759__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29766 = arguments.length;
var i__20221__auto___29767 = (0);
while(true){
if((i__20221__auto___29767 < len__20220__auto___29766)){
args__20227__auto__.push((arguments[i__20221__auto___29767]));

var G__29768 = (i__20221__auto___29767 + (1));
i__20221__auto___29767 = G__29768;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25591__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__25591__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25591__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq29764){
var G__29765 = cljs.core.first.call(null,seq29764);
var seq29764__$1 = cljs.core.next.call(null,seq29764);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__29765,seq29764__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29771 = arguments.length;
var i__20221__auto___29772 = (0);
while(true){
if((i__20221__auto___29772 < len__20220__auto___29771)){
args__20227__auto__.push((arguments[i__20221__auto___29772]));

var G__29773 = (i__20221__auto___29772 + (1));
i__20221__auto___29772 = G__29773;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25591__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__25591__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25591__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq29769){
var G__29770 = cljs.core.first.call(null,seq29769);
var seq29769__$1 = cljs.core.next.call(null,seq29769);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__29770,seq29769__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29776 = arguments.length;
var i__20221__auto___29777 = (0);
while(true){
if((i__20221__auto___29777 < len__20220__auto___29776)){
args__20227__auto__.push((arguments[i__20221__auto___29777]));

var G__29778 = (i__20221__auto___29777 + (1));
i__20221__auto___29777 = G__29778;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25591__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__25591__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25591__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq29774){
var G__29775 = cljs.core.first.call(null,seq29774);
var seq29774__$1 = cljs.core.next.call(null,seq29774);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__29775,seq29774__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__20227__auto__ = [];
var len__20220__auto___29781 = arguments.length;
var i__20221__auto___29782 = (0);
while(true){
if((i__20221__auto___29782 < len__20220__auto___29781)){
args__20227__auto__.push((arguments[i__20221__auto___29782]));

var G__29783 = (i__20221__auto___29782 + (1));
i__20221__auto___29782 = G__29783;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((1) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20228__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__25591__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__25591__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__25591__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq29779){
var G__29780 = cljs.core.first.call(null,seq29779);
var seq29779__$1 = cljs.core.next.call(null,seq29779);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__29780,seq29779__$1);
});

//# sourceMappingURL=core.js.map