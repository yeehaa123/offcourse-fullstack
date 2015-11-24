// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.helpers');
goog.require('cljs.core');
goog.require('offcourse.models.action');
offcourse.datastore.helpers.init = (function offcourse$datastore$helpers$init(store){
offcourse.datastore.helpers.respond_not_found = (function offcourse$datastore$helpers$init_$_respond_not_found(var_args){
var args57368 = [];
var len__20224__auto___57382 = arguments.length;
var i__20225__auto___57383 = (0);
while(true){
if((i__20225__auto___57383 < len__20224__auto___57382)){
args57368.push((arguments[i__20225__auto___57383]));

var G__57384 = (i__20225__auto___57383 + (1));
i__20225__auto___57383 = G__57384;
continue;
} else {
}
break;
}

var G__57370 = args57368.length;
switch (G__57370) {
case 1:
return offcourse.datastore.helpers.respond_not_found.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return offcourse.datastore.helpers.respond_not_found.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57368.length)].join('')));

}
});

offcourse.datastore.helpers.respond_not_found.cljs$core$IFn$_invoke$arity$1 = (function (type){
return offcourse.datastore.helpers.respond_not_found.call(null,type,cljs.core.PersistentArrayMap.EMPTY);
});

offcourse.datastore.helpers.respond_not_found.cljs$core$IFn$_invoke$arity$2 = (function (type,p__57371){
var map__57372 = p__57371;
var map__57372__$1 = ((((!((map__57372 == null)))?((((map__57372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57372):map__57372);
var payload = map__57372__$1;
var course_id = cljs.core.get.call(null,map__57372__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var course_ids = cljs.core.get.call(null,map__57372__$1,new cljs.core.Keyword(null,"course-ids","course-ids",-859730893));
var user_name = cljs.core.get.call(null,map__57372__$1,new cljs.core.Keyword(null,"user-name","user-name",1302913545));
var collection_type = cljs.core.get.call(null,map__57372__$1,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118));
var collection_name = cljs.core.get.call(null,map__57372__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var urls = cljs.core.get.call(null,map__57372__$1,new cljs.core.Keyword(null,"urls","urls",-190753757));
var response = cljs.core.partial.call(null,offcourse.models.action.respond,new cljs.core.Keyword(null,"not-found-data","not-found-data",-1710947388),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.deref.call(null,store));
var G__57374 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57374) {
case "tags":
return response.call(null);

break;
case "users":
return response.call(null);

break;
case "collections":
return response.call(null);

break;
case "collection":
return response.call(null,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),collection_type,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name);

break;
case "courses":
return response.call(null,new cljs.core.Keyword(null,"course-ids","course-ids",-859730893),course_ids);

break;
case "course":
return response.call(null,new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id);

break;
case "resources":
return response.call(null,new cljs.core.Keyword(null,"urls","urls",-190753757),urls);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});

offcourse.datastore.helpers.respond_not_found.cljs$lang$maxFixedArity = 2;

offcourse.datastore.helpers.respond_checked = (function offcourse$datastore$helpers$init_$_respond_checked(var_args){
var args57375 = [];
var len__20224__auto___57387 = arguments.length;
var i__20225__auto___57388 = (0);
while(true){
if((i__20225__auto___57388 < len__20224__auto___57387)){
args57375.push((arguments[i__20225__auto___57388]));

var G__57389 = (i__20225__auto___57388 + (1));
i__20225__auto___57388 = G__57389;
continue;
} else {
}
break;
}

var G__57377 = args57375.length;
switch (G__57377) {
case 1:
return offcourse.datastore.helpers.respond_checked.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return offcourse.datastore.helpers.respond_checked.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57375.length)].join('')));

}
});

offcourse.datastore.helpers.respond_checked.cljs$core$IFn$_invoke$arity$1 = (function (type){
return offcourse.datastore.helpers.respond_checked.call(null,type,cljs.core.PersistentArrayMap.EMPTY);
});

offcourse.datastore.helpers.respond_checked.cljs$core$IFn$_invoke$arity$2 = (function (type,p__57378){
var map__57379 = p__57378;
var map__57379__$1 = ((((!((map__57379 == null)))?((((map__57379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57379):map__57379);
var payload = map__57379__$1;
var course_id = cljs.core.get.call(null,map__57379__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var user_name = cljs.core.get.call(null,map__57379__$1,new cljs.core.Keyword(null,"user-name","user-name",1302913545));
var collection_name = cljs.core.get.call(null,map__57379__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var response = cljs.core.partial.call(null,offcourse.models.action.respond,new cljs.core.Keyword(null,"checked-datastore","checked-datastore",585508386),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"store","store",1512230022),cljs.core.deref.call(null,store));
var G__57381 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57381) {
case "tags":
return response.call(null);

break;
case "users":
return response.call(null);

break;
case "collections":
return response.call(null);

break;
case "collection":
return response.call(null);

break;
case "course":
return response.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});

offcourse.datastore.helpers.respond_checked.cljs$lang$maxFixedArity = 2;

offcourse.datastore.helpers.respond_ignore = (function offcourse$datastore$helpers$init_$_respond_ignore(){

return new cljs.core.Keyword(null,"ignore","ignore",-1631542033);
});
});
