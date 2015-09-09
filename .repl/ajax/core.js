// Compiled by ClojureScript 1.7.122 {}
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
var x__34853__auto__ = (((this$ == null))?null:this$);
var m__34854__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__34854__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
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
var x__34853__auto__ = (((this$ == null))?null:this$);
var m__34854__auto__ = (ajax.core._abort[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,this$);
} else {
var m__34854__auto____$1 = (ajax.core._abort["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,this$);
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
var x__34853__auto__ = (((this$ == null))?null:this$);
var m__34854__auto__ = (ajax.core._status[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,this$);
} else {
var m__34854__auto____$1 = (ajax.core._status["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,this$);
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
var x__34853__auto__ = (((this$ == null))?null:this$);
var m__34854__auto__ = (ajax.core._status_text[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,this$);
} else {
var m__34854__auto____$1 = (ajax.core._status_text["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,this$);
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
var x__34853__auto__ = (((this$ == null))?null:this$);
var m__34854__auto__ = (ajax.core._body[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,this$);
} else {
var m__34854__auto____$1 = (ajax.core._body["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,this$);
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
var x__34853__auto__ = (((this$ == null))?null:this$);
var m__34854__auto__ = (ajax.core._get_response_header[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,this$,header);
} else {
var m__34854__auto____$1 = (ajax.core._get_response_header["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,this$,header);
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
var x__34853__auto__ = (((this$ == null))?null:this$);
var m__34854__auto__ = (ajax.core._was_aborted[goog.typeOf(x__34853__auto__)]);
if(!((m__34854__auto__ == null))){
return m__34854__auto__.call(null,this$);
} else {
var m__34854__auto____$1 = (ajax.core._was_aborted["_"]);
if(!((m__34854__auto____$1 == null))){
return m__34854__auto____$1.call(null,this$);
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
var or__34198__auto__ = ((!((params == null)))?(((false) || (params.ajax$core$DirectlySubmittable$))?true:(((!params.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params):false)):cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params));
if(or__34198__auto__){
return or__34198__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__42873){
var map__42874 = p__42873;
var map__42874__$1 = ((((!((map__42874 == null)))?((((map__42874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42874):map__42874);
var timeout = cljs.core.get.call(null,map__42874__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__42874__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var this$__$1 = this;
var G__42876 = this$__$1;
goog.events.listen(G__42876,goog.net.EventType.COMPLETE,((function (G__42876,this$__$1,map__42874,map__42874__$1,timeout,with_credentials){
return (function (p1__42872_SHARP_){
return handler.call(null,p1__42872_SHARP_.target);
});})(G__42876,this$__$1,map__42874,map__42874__$1,timeout,with_credentials))
);

G__42876.setTimeoutInterval(timeout);

G__42876.setWithCredentials(with_credentials);

G__42876.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__42876;
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

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__42878){
var map__42879 = p__42878;
var map__42879__$1 = ((((!((map__42879 == null)))?((((map__42879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42879):map__42879);
var timeout = cljs.core.get.call(null,map__42879__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__42879__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__42879__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__42879,map__42879__$1,timeout,with_credentials,response_format){
return (function (p1__42877_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.core.ready_state.call(null,p1__42877_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__42879,map__42879__$1,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___42887 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___42887)){
var response_type_42888 = temp__4425__auto___42887;
this$__$1.responseType = cljs.core.name.call(null,response_type_42888);
} else {
}

var seq__42881_42889 = cljs.core.seq.call(null,headers);
var chunk__42882_42890 = null;
var count__42883_42891 = (0);
var i__42884_42892 = (0);
while(true){
if((i__42884_42892 < count__42883_42891)){
var vec__42885_42893 = cljs.core._nth.call(null,chunk__42882_42890,i__42884_42892);
var k_42894 = cljs.core.nth.call(null,vec__42885_42893,(0),null);
var v_42895 = cljs.core.nth.call(null,vec__42885_42893,(1),null);
this$__$1.setRequestHeader(k_42894,v_42895);

var G__42896 = seq__42881_42889;
var G__42897 = chunk__42882_42890;
var G__42898 = count__42883_42891;
var G__42899 = (i__42884_42892 + (1));
seq__42881_42889 = G__42896;
chunk__42882_42890 = G__42897;
count__42883_42891 = G__42898;
i__42884_42892 = G__42899;
continue;
} else {
var temp__4425__auto___42900 = cljs.core.seq.call(null,seq__42881_42889);
if(temp__4425__auto___42900){
var seq__42881_42901__$1 = temp__4425__auto___42900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42881_42901__$1)){
var c__35001__auto___42902 = cljs.core.chunk_first.call(null,seq__42881_42901__$1);
var G__42903 = cljs.core.chunk_rest.call(null,seq__42881_42901__$1);
var G__42904 = c__35001__auto___42902;
var G__42905 = cljs.core.count.call(null,c__35001__auto___42902);
var G__42906 = (0);
seq__42881_42889 = G__42903;
chunk__42882_42890 = G__42904;
count__42883_42891 = G__42905;
i__42884_42892 = G__42906;
continue;
} else {
var vec__42886_42907 = cljs.core.first.call(null,seq__42881_42901__$1);
var k_42908 = cljs.core.nth.call(null,vec__42886_42907,(0),null);
var v_42909 = cljs.core.nth.call(null,vec__42886_42907,(1),null);
this$__$1.setRequestHeader(k_42908,v_42909);

var G__42910 = cljs.core.next.call(null,seq__42881_42901__$1);
var G__42911 = null;
var G__42912 = (0);
var G__42913 = (0);
seq__42881_42889 = G__42910;
chunk__42882_42890 = G__42911;
count__42883_42891 = G__42912;
i__42884_42892 = G__42913;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__34198__auto__ = body;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
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

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__42914){
var map__42915 = p__42914;
var map__42915__$1 = ((((!((map__42915 == null)))?((((map__42915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42915):map__42915);
var id = cljs.core.get.call(null,map__42915__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__42915__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__42915__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__42915__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
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
var args42917 = [];
var len__35256__auto___42920 = arguments.length;
var i__35257__auto___42921 = (0);
while(true){
if((i__35257__auto___42921 < len__35256__auto___42920)){
args42917.push((arguments[i__35257__auto___42921]));

var G__42922 = (i__35257__auto___42921 + (1));
i__35257__auto___42921 = G__42922;
continue;
} else {
}
break;
}

var G__42919 = args42917.length;
switch (G__42919) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42917.length)].join('')));

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
var args42924 = [];
var len__35256__auto___42927 = arguments.length;
var i__35257__auto___42928 = (0);
while(true){
if((i__35257__auto___42928 < len__35256__auto___42927)){
args42924.push((arguments[i__35257__auto___42928]));

var G__42929 = (i__35257__auto___42928 + (1));
i__35257__auto___42928 = G__42929;
continue;
} else {
}
break;
}

var G__42926 = args42924.length;
switch (G__42926) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42924.length)].join('')));

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
var args42931 = [];
var len__35256__auto___42937 = arguments.length;
var i__35257__auto___42938 = (0);
while(true){
if((i__35257__auto___42938 < len__35256__auto___42937)){
args42931.push((arguments[i__35257__auto___42938]));

var G__42939 = (i__35257__auto___42938 + (1));
i__35257__auto___42938 = G__42939;
continue;
} else {
}
break;
}

var G__42933 = args42931.length;
switch (G__42933) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42931.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__42934){
var map__42935 = p__42934;
var map__42935__$1 = ((((!((map__42935 == null)))?((((map__42935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42935):map__42935);
var opts = map__42935__$1;
var type = cljs.core.get.call(null,map__42935__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer = cljs.core.get.call(null,map__42935__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var writer__$1 = (function (){var or__34198__auto__ = writer;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__34198__auto____$1 = type;
if(cljs.core.truth_(or__34198__auto____$1)){
return or__34198__auto____$1;
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
var args42941 = [];
var len__35256__auto___42944 = arguments.length;
var i__35257__auto___42945 = (0);
while(true){
if((i__35257__auto___42945 < len__35256__auto___42944)){
args42941.push((arguments[i__35257__auto___42945]));

var G__42946 = (i__35257__auto___42945 + (1));
i__35257__auto___42945 = G__42946;
continue;
} else {
}
break;
}

var G__42943 = args42941.length;
switch (G__42943) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42941.length)].join('')));

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
var args42948 = [];
var len__35256__auto___42954 = arguments.length;
var i__35257__auto___42955 = (0);
while(true){
if((i__35257__auto___42955 < len__35256__auto___42954)){
args42948.push((arguments[i__35257__auto___42955]));

var G__42956 = (i__35257__auto___42955 + (1));
i__35257__auto___42955 = G__42956;
continue;
} else {
}
break;
}

var G__42950 = args42948.length;
switch (G__42950) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42948.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__42951){
var map__42952 = p__42951;
var map__42952__$1 = ((((!((map__42952 == null)))?((((map__42952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42952):map__42952);
var opts = map__42952__$1;
var type = cljs.core.get.call(null,map__42952__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader = cljs.core.get.call(null,map__42952__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var raw = cljs.core.get.call(null,map__42952__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader__$1 = (function (){var or__34198__auto__ = reader;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__34198__auto____$1 = type;
if(cljs.core.truth_(or__34198__auto____$1)){
return or__34198__auto____$1;
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
var args42958 = [];
var len__35256__auto___42961 = arguments.length;
var i__35257__auto___42962 = (0);
while(true){
if((i__35257__auto___42962 < len__35256__auto___42961)){
args42958.push((arguments[i__35257__auto___42962]));

var G__42963 = (i__35257__auto___42962 + (1));
i__35257__auto___42962 = G__42963;
continue;
} else {
}
break;
}

var G__42960 = args42958.length;
switch (G__42960) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42958.length)].join('')));

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
var args42965 = [];
var len__35256__auto___42968 = arguments.length;
var i__35257__auto___42969 = (0);
while(true){
if((i__35257__auto___42969 < len__35256__auto___42968)){
args42965.push((arguments[i__35257__auto___42969]));

var G__42970 = (i__35257__auto___42969 + (1));
i__35257__auto___42969 = G__42970;
continue;
} else {
}
break;
}

var G__42967 = args42965.length;
switch (G__42967) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42965.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__34186__auto__ = prefix;
if(cljs.core.truth_(and__34186__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__34186__auto__;
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
var text__$1 = (cljs.core.truth_((function (){var and__34186__auto__ = prefix;
if(cljs.core.truth_(and__34186__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__34186__auto__;
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
var text__$1 = (cljs.core.truth_((function (){var and__34186__auto__ = prefix;
if(cljs.core.truth_(and__34186__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__34186__auto__;
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
var text__$1 = (cljs.core.truth_((function (){var and__34186__auto__ = prefix;
if(cljs.core.truth_(and__34186__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__34186__auto__;
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
var args42972 = [];
var len__35256__auto___42978 = arguments.length;
var i__35257__auto___42979 = (0);
while(true){
if((i__35257__auto___42979 < len__35256__auto___42978)){
args42972.push((arguments[i__35257__auto___42979]));

var G__42980 = (i__35257__auto___42979 + (1));
i__35257__auto___42979 = G__42980;
continue;
} else {
}
break;
}

var G__42974 = args42972.length;
switch (G__42974) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42972.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__42975){
var map__42976 = p__42975;
var map__42976__$1 = ((((!((map__42976 == null)))?((((map__42976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42976):map__42976);
var prefix = cljs.core.get.call(null,map__42976__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__42976__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__42976__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var args42982 = [];
var len__35256__auto___42985 = arguments.length;
var i__35257__auto___42986 = (0);
while(true){
if((i__35257__auto___42986 < len__35256__auto___42985)){
args42982.push((arguments[i__35257__auto___42986]));

var G__42987 = (i__35257__auto___42986 + (1));
i__35257__auto___42986 = G__42987;
continue;
} else {
}
break;
}

var G__42984 = args42982.length;
switch (G__42984) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42982.length)].join('')));

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
var args42989 = [];
var len__35256__auto___42992 = arguments.length;
var i__35257__auto___42993 = (0);
while(true){
if((i__35257__auto___42993 < len__35256__auto___42992)){
args42989.push((arguments[i__35257__auto___42993]));

var G__42994 = (i__35257__auto___42993 + (1));
i__35257__auto___42993 = G__42994;
continue;
} else {
}
break;
}

var G__42991 = args42989.length;
switch (G__42991) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42989.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__34198__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__34198__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var args42996 = [];
var len__35256__auto___42999 = arguments.length;
var i__35257__auto___43000 = (0);
while(true){
if((i__35257__auto___43000 < len__35256__auto___42999)){
args42996.push((arguments[i__35257__auto___43000]));

var G__43001 = (i__35257__auto___43000 + (1));
i__35257__auto___43000 = G__43001;
continue;
} else {
}
break;
}

var G__42998 = args42996.length;
switch (G__42998) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42996.length)].join('')));

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
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__43003){
var map__43006 = p__43003;
var map__43006__$1 = ((((!((map__43006 == null)))?((((map__43006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43006):map__43006);
var opts = map__43006__$1;
var response_format = cljs.core.get.call(null,map__43006__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__34198__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var args43008 = [];
var len__35256__auto___43011 = arguments.length;
var i__35257__auto___43012 = (0);
while(true){
if((i__35257__auto___43012 < len__35256__auto___43011)){
args43008.push((arguments[i__35257__auto___43012]));

var G__43013 = (i__35257__auto___43012 + (1));
i__35257__auto___43012 = G__43013;
continue;
} else {
}
break;
}

var G__43010 = args43008.length;
switch (G__43010) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43008.length)].join('')));

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
ajax.core.accept_header = (function ajax$core$accept_header(p__43015){
var map__43018 = p__43015;
var map__43018__$1 = ((((!((map__43018 == null)))?((((map__43018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43018):map__43018);
var opts = map__43018__$1;
var response_format = cljs.core.get.call(null,map__43018__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var args43020 = [];
var len__35256__auto___43023 = arguments.length;
var i__35257__auto___43024 = (0);
while(true){
if((i__35257__auto___43024 < len__35256__auto___43023)){
args43020.push((arguments[i__35257__auto___43024]));

var G__43025 = (i__35257__auto___43024 + (1));
i__35257__auto___43024 = G__43025;
continue;
} else {
}
break;
}

var G__43022 = args43020.length;
switch (G__43022) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43020.length)].join('')));

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
ajax.core.get_response_format = (function ajax$core$get_response_format(p__43027){
var map__43030 = p__43027;
var map__43030__$1 = ((((!((map__43030 == null)))?((((map__43030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43030):map__43030);
var opts = map__43030__$1;
var response_format = cljs.core.get.call(null,map__43030__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
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
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__43032,xhrio){
var map__43035 = p__43032;
var map__43035__$1 = ((((!((map__43035 == null)))?((((map__43035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43035):map__43035);
var description = cljs.core.get.call(null,map__43035__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
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
var args__35263__auto__ = [];
var len__35256__auto___43041 = arguments.length;
var i__35257__auto___43042 = (0);
while(true){
if((i__35257__auto___43042 < len__35256__auto___43041)){
args__35263__auto__.push((arguments[i__35257__auto___43042]));

var G__43043 = (i__35257__auto___43042 + (1));
i__35257__auto___43042 = G__43043;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((3) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35264__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq43037){
var G__43038 = cljs.core.first.call(null,seq43037);
var seq43037__$1 = cljs.core.next.call(null,seq43037);
var G__43039 = cljs.core.first.call(null,seq43037__$1);
var seq43037__$2 = cljs.core.next.call(null,seq43037__$1);
var G__43040 = cljs.core.first.call(null,seq43037__$2);
var seq43037__$3 = cljs.core.next.call(null,seq43037__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__43038,G__43039,G__43040,seq43037__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__43044,xhrio){
var map__43050 = p__43044;
var map__43050__$1 = ((((!((map__43050 == null)))?((((map__43050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43050):map__43050);
var format = map__43050__$1;
var read = cljs.core.get.call(null,map__43050__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__43053 = status;
switch (G__43053) {
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
}catch (e43054){if((e43054 instanceof Object)){
var e = e43054;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e43054;

}
}
}
}catch (e43052){if((e43052 instanceof Object)){
var e = e43052;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e43052;

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
ajax.core.process_inputs = (function ajax$core$process_inputs(p__43056,p__43057){
var map__43064 = p__43056;
var map__43064__$1 = ((((!((map__43064 == null)))?((((map__43064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43064):map__43064);
var uri = cljs.core.get.call(null,map__43064__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__43064__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__43064__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__43064__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__43064__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var map__43065 = p__43057;
var map__43065__$1 = ((((!((map__43065 == null)))?((((map__43065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43065):map__43065);
var content_type = cljs.core.get.call(null,map__43065__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__34198__auto__ = headers;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__43068 = ajax.core.get_request_format.call(null,format);
var map__43068__$1 = ((((!((map__43068 == null)))?((((map__43068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43068):map__43068);
var write = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type__$1 = cljs.core.get.call(null,map__43068__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?write.call(null,params):(cljs.core.truth_(ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",[cljs.core.str(content_type__$1),cljs.core.str("; charset=utf-8")].join('')], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var args43070 = [];
var len__35256__auto___43073 = arguments.length;
var i__35257__auto___43074 = (0);
while(true){
if((i__35257__auto___43074 < len__35256__auto___43073)){
args43070.push((arguments[i__35257__auto___43074]));

var G__43075 = (i__35257__auto___43074 + (1));
i__35257__auto___43074 = G__43075;
continue;
} else {
}
break;
}

var G__43072 = args43070.length;
switch (G__43072) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43070.length)].join('')));

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
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__43077){
var map__43080 = p__43077;
var map__43080__$1 = ((((!((map__43080 == null)))?((((map__43080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43080):map__43080);
var handler = cljs.core.get.call(null,map__43080__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__43082){
var map__43086 = p__43082;
var map__43086__$1 = ((((!((map__43086 == null)))?((((map__43086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43086):map__43086);
var opts = map__43086__$1;
var method = cljs.core.get.call(null,map__43086__$1,new cljs.core.Keyword(null,"method","method",55703592));
var api = cljs.core.get.call(null,map__43086__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__43088 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__43088,(0),null);
var body = cljs.core.nth.call(null,vec__43088,(1),null);
var headers = cljs.core.nth.call(null,vec__43088,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__34198__auto__ = api;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
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
var G__43090 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__43090) {
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
var G__43093 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__43093) {
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
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__43095_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__43095_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(var_args){
var args43096 = [];
var len__35256__auto___43109 = arguments.length;
var i__35257__auto___43110 = (0);
while(true){
if((i__35257__auto___43110 < len__35256__auto___43109)){
args43096.push((arguments[i__35257__auto___43110]));

var G__43111 = (i__35257__auto___43110 + (1));
i__35257__auto___43110 = G__43111;
continue;
} else {
}
break;
}

var G__43098 = args43096.length;
switch (G__43098) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43096.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__43099,p__43100){
var map__43101 = p__43099;
var map__43101__$1 = ((((!((map__43101 == null)))?((((map__43101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43101):map__43101);
var handler = cljs.core.get.call(null,map__43101__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__43101__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__43101__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__43102 = p__43100;
var ok = cljs.core.nth.call(null,vec__43102,(0),null);
var result = cljs.core.nth.call(null,vec__43102,(1),null);
var temp__4423__auto___43113 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___43113)){
var h_43114 = temp__4423__auto___43113;
h_43114.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__43104){
var map__43105 = p__43104;
var map__43105__$1 = ((((!((map__43105 == null)))?((((map__43105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43105):map__43105);
var handler = cljs.core.get.call(null,map__43105__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__43105__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__43105__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__43105,map__43105__$1,handler,error_handler,finally$){
return (function (p__43107){
var vec__43108 = p__43107;
var ok = cljs.core.nth.call(null,vec__43108,(0),null);
var result = cljs.core.nth.call(null,vec__43108,(1),null);
var temp__4423__auto___43115 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___43115)){
var h_43116 = temp__4423__auto___43115;
h_43116.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__43105,map__43105__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__43117){
var map__43120 = p__43117;
var map__43120__$1 = ((((!((map__43120 == null)))?((((map__43120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43120):map__43120);
var opts = map__43120__$1;
var method = cljs.core.get.call(null,map__43120__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__43120__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__43120__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__43120__$1,new cljs.core.Keyword(null,"params","params",710516235));

var needs_format = cljs.core.not.call(null,(function (){var or__34198__auto__ = ajax.core.submittable_QMARK_.call(null,params);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cljs.core._EQ_.call(null,method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__34198__auto__ = format;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
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
var args__35263__auto__ = [];
var len__35256__auto___43124 = arguments.length;
var i__35257__auto___43125 = (0);
while(true){
if((i__35257__auto___43125 < len__35256__auto___43124)){
args__35263__auto__.push((arguments[i__35257__auto___43125]));

var G__43126 = (i__35257__auto___43125 + (1));
i__35257__auto___43125 = G__43126;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36401__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__36401__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36401__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq43122){
var G__43123 = cljs.core.first.call(null,seq43122);
var seq43122__$1 = cljs.core.next.call(null,seq43122);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__43123,seq43122__$1);
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
var args__35263__auto__ = [];
var len__35256__auto___43129 = arguments.length;
var i__35257__auto___43130 = (0);
while(true){
if((i__35257__auto___43130 < len__35256__auto___43129)){
args__35263__auto__.push((arguments[i__35257__auto___43130]));

var G__43131 = (i__35257__auto___43130 + (1));
i__35257__auto___43130 = G__43131;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36401__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__36401__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36401__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq43127){
var G__43128 = cljs.core.first.call(null,seq43127);
var seq43127__$1 = cljs.core.next.call(null,seq43127);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__43128,seq43127__$1);
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
var args__35263__auto__ = [];
var len__35256__auto___43134 = arguments.length;
var i__35257__auto___43135 = (0);
while(true){
if((i__35257__auto___43135 < len__35256__auto___43134)){
args__35263__auto__.push((arguments[i__35257__auto___43135]));

var G__43136 = (i__35257__auto___43135 + (1));
i__35257__auto___43135 = G__43136;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36401__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__36401__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36401__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq43132){
var G__43133 = cljs.core.first.call(null,seq43132);
var seq43132__$1 = cljs.core.next.call(null,seq43132);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__43133,seq43132__$1);
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
var args__35263__auto__ = [];
var len__35256__auto___43139 = arguments.length;
var i__35257__auto___43140 = (0);
while(true){
if((i__35257__auto___43140 < len__35256__auto___43139)){
args__35263__auto__.push((arguments[i__35257__auto___43140]));

var G__43141 = (i__35257__auto___43140 + (1));
i__35257__auto___43140 = G__43141;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36401__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__36401__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36401__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq43137){
var G__43138 = cljs.core.first.call(null,seq43137);
var seq43137__$1 = cljs.core.next.call(null,seq43137);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__43138,seq43137__$1);
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
var args__35263__auto__ = [];
var len__35256__auto___43144 = arguments.length;
var i__35257__auto___43145 = (0);
while(true){
if((i__35257__auto___43145 < len__35256__auto___43144)){
args__35263__auto__.push((arguments[i__35257__auto___43145]));

var G__43146 = (i__35257__auto___43145 + (1));
i__35257__auto___43145 = G__43146;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36401__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__36401__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36401__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq43142){
var G__43143 = cljs.core.first.call(null,seq43142);
var seq43142__$1 = cljs.core.next.call(null,seq43142);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__43143,seq43142__$1);
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
var args__35263__auto__ = [];
var len__35256__auto___43149 = arguments.length;
var i__35257__auto___43150 = (0);
while(true){
if((i__35257__auto___43150 < len__35256__auto___43149)){
args__35263__auto__.push((arguments[i__35257__auto___43150]));

var G__43151 = (i__35257__auto___43150 + (1));
i__35257__auto___43150 = G__43151;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36401__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__36401__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36401__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq43147){
var G__43148 = cljs.core.first.call(null,seq43147);
var seq43147__$1 = cljs.core.next.call(null,seq43147);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__43148,seq43147__$1);
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
var args__35263__auto__ = [];
var len__35256__auto___43154 = arguments.length;
var i__35257__auto___43155 = (0);
while(true){
if((i__35257__auto___43155 < len__35256__auto___43154)){
args__35263__auto__.push((arguments[i__35257__auto___43155]));

var G__43156 = (i__35257__auto___43155 + (1));
i__35257__auto___43155 = G__43156;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36401__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__36401__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36401__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq43152){
var G__43153 = cljs.core.first.call(null,seq43152);
var seq43152__$1 = cljs.core.next.call(null,seq43152);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__43153,seq43152__$1);
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
var args__35263__auto__ = [];
var len__35256__auto___43159 = arguments.length;
var i__35257__auto___43160 = (0);
while(true){
if((i__35257__auto___43160 < len__35256__auto___43159)){
args__35263__auto__.push((arguments[i__35257__auto___43160]));

var G__43161 = (i__35257__auto___43160 + (1));
i__35257__auto___43160 = G__43161;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((1) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35264__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__36401__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__36401__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__36401__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq43157){
var G__43158 = cljs.core.first.call(null,seq43157);
var seq43157__$1 = cljs.core.next.call(null,seq43157);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__43158,seq43157__$1);
});
