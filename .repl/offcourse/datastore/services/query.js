// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.services.query');
goog.require('cljs.core');
goog.require('offcourse.datastore.model');
goog.require('offcourse.models.collection');
goog.require('clojure.set');
goog.require('offcourse.datastore.helpers');
offcourse.datastore.services.query.init = (function offcourse$datastore$services$query$init(store){
offcourse.datastore.services.query.get_collection_names = (function offcourse$datastore$services$query$init_$_get_collection_names(){
var collection_names = offcourse.models.collection.collection_names.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,store),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collections","collections",-2114643505),new cljs.core.Keyword(null,"flags","flags",1775418075)], null)));
if(cljs.core.not.call(null,collection_names)){
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505));
} else {
return offcourse.datastore.helpers.respond_checked.call(null,new cljs.core.Keyword(null,"collections","collections",-2114643505));
}
});

offcourse.datastore.services.query.get_collection = (function offcourse$datastore$services$query$init_$_get_collection(p__56947){
var map__56950 = p__56947;
var map__56950__$1 = ((((!((map__56950 == null)))?((((map__56950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56950):map__56950);
var collection = map__56950__$1;
var collection_type = cljs.core.get.call(null,map__56950__$1,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118));
var collection_name = cljs.core.get.call(null,map__56950__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var collection_ids = cljs.core.get.call(null,map__56950__$1,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385));
var store_collection_ids = offcourse.datastore.model.get_collection_ids.call(null,cljs.core.deref.call(null,store),collection_type,collection_name);
if(cljs.core.not.call(null,(function (){var or__19166__auto__ = collection_ids;
if(cljs.core.truth_(or__19166__auto__)){
return or__19166__auto__;
} else {
return store_collection_ids;
}
})())){
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),collection);
} else {
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-ids","course-ids",-859730893),collection_ids], null));
}
});

offcourse.datastore.services.query.get_tags = (function offcourse$datastore$services$query$init_$_get_tags(){
var tags = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store));
if(cljs.core.truth_(tags)){
return offcourse.datastore.helpers.respond_checked.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977));
} else {
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"tags","tags",1771418977));
}
});

offcourse.datastore.services.query.get_users = (function offcourse$datastore$services$query$init_$_get_users(){
var users = new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store));
if(cljs.core.truth_(users)){
return offcourse.datastore.helpers.respond_checked.call(null,new cljs.core.Keyword(null,"users","users",-713552705));
} else {
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"users","users",-713552705));
}
});

offcourse.datastore.services.query.get_course = (function offcourse$datastore$services$query$init_$_get_course(p__56952){
var map__56955 = p__56952;
var map__56955__$1 = ((((!((map__56955 == null)))?((((map__56955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56955):map__56955);
var course_id = cljs.core.get.call(null,map__56955__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var course = offcourse.datastore.model.find_course.call(null,cljs.core.deref.call(null,store),course_id);
if(cljs.core.truth_(course)){
return offcourse.datastore.helpers.respond_checked.call(null,new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id], null));
} else {
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id], null));
}
});

offcourse.datastore.services.query.fetch_resources = (function offcourse$datastore$services$query$init_$_fetch_resources(course_id){
var course = offcourse.datastore.model.find_course.call(null,cljs.core.deref.call(null,store),course_id);
var checkpoints = cljs.core.vals.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145).cljs$core$IFn$_invoke$arity$1(course));
var course_urls = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"url","url",276297046),checkpoints));
var store_urls = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.vals.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,store)))));
var missing_urls = clojure.set.difference.call(null,course_urls,store_urls);
if(cljs.core.truth_(course)){
if(cljs.core.empty_QMARK_.call(null,missing_urls)){
return offcourse.datastore.helpers.respond_checked.call(null,new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(course)], null));
} else {
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"resources","resources",1632806811),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"urls","urls",-190753757),missing_urls], null));
}
} else {
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id], null));
}
});

offcourse.datastore.services.query.get_labels_data = (function offcourse$datastore$services$query$init_$_get_labels_data(labels){
var label = cljs.core.key.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__56923_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"unknown","unknown",-935977881),cljs.core.val.call(null,p1__56923_SHARP_));
}),labels)));
var G__56958 = (((label instanceof cljs.core.Keyword))?label.fqn:null);
switch (G__56958) {
case "flags":
return offcourse.datastore.services.query.get_collection_names.call(null);

break;
case "tags":
return offcourse.datastore.services.query.get_tags.call(null);

break;
case "users":
return offcourse.datastore.services.query.get_users.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(label)].join('')));

}
});

offcourse.datastore.services.query.get_data = (function offcourse$datastore$services$query$init_$_get_data(p__56959){
var map__56965 = p__56959;
var map__56965__$1 = ((((!((map__56965 == null)))?((((map__56965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56965):map__56965);
var data = cljs.core.get.call(null,map__56965__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56967 = data;
var map__56967__$1 = ((((!((map__56967 == null)))?((((map__56967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56967):map__56967);
var type = cljs.core.get.call(null,map__56967__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var course = cljs.core.get.call(null,map__56967__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var labels = cljs.core.get.call(null,map__56967__$1,new cljs.core.Keyword(null,"labels","labels",-626734591));
var G__56969 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__56969) {
case "labels":
return offcourse.datastore.services.query.get_labels_data.call(null,labels);

break;
case "collection-names":
return offcourse.datastore.services.query.get_collection_names.call(null);

break;
case "tag-names":
return offcourse.datastore.services.query.get_tags.call(null);

break;
case "user-names":
return offcourse.datastore.services.query.get_users.call(null);

break;
case "collection":
return offcourse.datastore.services.query.get_collection.call(null,type.call(null,data));

break;
case "course":
return offcourse.datastore.services.query.get_course.call(null,type.call(null,data));

break;
case "checkpoint":
return offcourse.datastore.services.query.get_course.call(null,data);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
});
