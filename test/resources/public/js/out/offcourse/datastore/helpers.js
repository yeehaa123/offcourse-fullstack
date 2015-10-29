// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.helpers');
goog.require('cljs.core');
goog.require('offcourse.models.action');
offcourse.datastore.helpers.init = (function offcourse$datastore$helpers$init(store){
offcourse.datastore.helpers.respond_updated = (function offcourse$datastore$helpers$init_$_respond_updated(){
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"updated-data","updated-data",-1759098368),new cljs.core.Keyword(null,"store","store",1512230022),store);
});

offcourse.datastore.helpers.respond_added = (function offcourse$datastore$helpers$init_$_respond_added(course_id){
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"added-checkpoint","added-checkpoint",-1192635317),new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"store","store",1512230022),store);
});

offcourse.datastore.helpers.respond_not_found = (function offcourse$datastore$helpers$init_$_respond_not_found(type,p__26592){
var map__26596 = p__26592;
var map__26596__$1 = ((((!((map__26596 == null)))?((((map__26596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26596):map__26596);
var course_id = cljs.core.get.call(null,map__26596__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var course_ids = cljs.core.get.call(null,map__26596__$1,new cljs.core.Keyword(null,"course-ids","course-ids",-859730893));
var collection_name = cljs.core.get.call(null,map__26596__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var G__26598 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26598) {
case "collection":
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"not-found-data","not-found-data",-1710947388),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name,new cljs.core.Keyword(null,"store","store",1512230022),store);

break;
case "courses":
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"not-found-data","not-found-data",-1710947388),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"course-ids","course-ids",-859730893),course_ids,new cljs.core.Keyword(null,"store","store",1512230022),store);

break;
case "course":
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"not-found-data","not-found-data",-1710947388),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"store","store",1512230022),store);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});

offcourse.datastore.helpers.respond_checked = (function offcourse$datastore$helpers$init_$_respond_checked(type,p__26599){
var map__26603 = p__26599;
var map__26603__$1 = ((((!((map__26603 == null)))?((((map__26603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26603):map__26603);
var course_id = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var collection_name = cljs.core.get.call(null,map__26603__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var G__26605 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26605) {
case "collection":
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"checked-datastore","checked-datastore",585508386),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name,new cljs.core.Keyword(null,"store","store",1512230022),store);

break;
case "course":
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"checked-datastore","checked-datastore",585508386),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id,new cljs.core.Keyword(null,"store","store",1512230022),store);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});

offcourse.datastore.helpers.respond_ignore = (function offcourse$datastore$helpers$init_$_respond_ignore(){

return new cljs.core.Keyword(null,"ignore","ignore",-1631542033);
});
});

//# sourceMappingURL=helpers.js.map