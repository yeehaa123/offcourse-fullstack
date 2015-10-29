// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.store');
goog.require('cljs.core');
goog.require('offcourse.datastore.model');
goog.require('offcourse.models.course');
goog.require('clojure.set');
goog.require('offcourse.models.action');
goog.require('offcourse.datastore.helpers');
offcourse.datastore.store.store = cljs.core.atom.call(null,offcourse.datastore.model.new_datastore.call(null));
offcourse.datastore.helpers.init.call(null,offcourse.datastore.store.store);
offcourse.datastore.store.update_datastore_BANG_ = (function offcourse$datastore$store$update_datastore_BANG_(fn){
return cljs.core.swap_BANG_.call(null,offcourse.datastore.store.store,fn);
});
offcourse.datastore.store.update_and_respond_BANG_ = (function offcourse$datastore$store$update_and_respond_BANG_(fn){
offcourse.datastore.store.update_datastore_BANG_.call(null,fn);

return offcourse.datastore.helpers.respond_updated.call(null);
});
offcourse.datastore.store.add_and_respond_BANG_ = (function offcourse$datastore$store$add_and_respond_BANG_(fn,course_id){
offcourse.datastore.store.update_datastore_BANG_.call(null,fn);

return offcourse.datastore.helpers.respond_added.call(null,course_id);
});
offcourse.datastore.store.update_collections = (function offcourse$datastore$store$update_collections(p__26668){
var map__26671 = p__26668;
var map__26671__$1 = ((((!((map__26671 == null)))?((((map__26671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26671):map__26671);
var collection_name = cljs.core.get.call(null,map__26671__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var collection_ids = cljs.core.get.call(null,map__26671__$1,new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385));
var courses_ids = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,offcourse.datastore.store.store))));
var missing_ids = clojure.set.difference.call(null,collection_ids,courses_ids);
if(cljs.core.empty_QMARK_.call(null,missing_ids)){
return offcourse.datastore.store.update_and_respond_BANG_.call(null,((function (courses_ids,missing_ids,map__26671,map__26671__$1,collection_name,collection_ids){
return (function (p1__26666_SHARP_){
return offcourse.datastore.model.update_collections.call(null,p1__26666_SHARP_,collection_name,collection_ids);
});})(courses_ids,missing_ids,map__26671,map__26671__$1,collection_name,collection_ids))
);
} else {
offcourse.datastore.store.update_datastore_BANG_.call(null,((function (courses_ids,missing_ids,map__26671,map__26671__$1,collection_name,collection_ids){
return (function (p1__26667_SHARP_){
return offcourse.datastore.model.update_collections.call(null,p1__26667_SHARP_,collection_name,collection_ids);
});})(courses_ids,missing_ids,map__26671,map__26671__$1,collection_name,collection_ids))
);

return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"courses","courses",-428279222),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-ids","course-ids",-859730893),missing_ids], null));
}
});
offcourse.datastore.store.update_course = (function offcourse$datastore$store$update_course(p__26674){
var map__26677 = p__26674;
var map__26677__$1 = ((((!((map__26677 == null)))?((((map__26677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26677):map__26677);
var course = cljs.core.get.call(null,map__26677__$1,new cljs.core.Keyword(null,"course","course",1455432948));
return offcourse.datastore.store.update_and_respond_BANG_.call(null,((function (map__26677,map__26677__$1,course){
return (function (p1__26673_SHARP_){
return offcourse.datastore.model.update_course.call(null,p1__26673_SHARP_,course);
});})(map__26677,map__26677__$1,course))
);
});
offcourse.datastore.store.update_courses = (function offcourse$datastore$store$update_courses(p__26680){
var map__26683 = p__26680;
var map__26683__$1 = ((((!((map__26683 == null)))?((((map__26683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26683):map__26683);
var courses = cljs.core.get.call(null,map__26683__$1,new cljs.core.Keyword(null,"courses","courses",-428279222));
return offcourse.datastore.store.update_and_respond_BANG_.call(null,((function (map__26683,map__26683__$1,courses){
return (function (p1__26679_SHARP_){
return offcourse.datastore.model.update_courses.call(null,p1__26679_SHARP_,courses);
});})(map__26683,map__26683__$1,courses))
);
});
offcourse.datastore.store.toggle_done = (function offcourse$datastore$store$toggle_done(p__26686){
var map__26689 = p__26686;
var map__26689__$1 = ((((!((map__26689 == null)))?((((map__26689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26689):map__26689);
var course_id = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__26689__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
return offcourse.datastore.store.update_and_respond_BANG_.call(null,((function (map__26689,map__26689__$1,course_id,checkpoint_id){
return (function (p1__26685_SHARP_){
return offcourse.datastore.model.toggle_done.call(null,p1__26685_SHARP_,course_id,checkpoint_id);
});})(map__26689,map__26689__$1,course_id,checkpoint_id))
);
});
offcourse.datastore.store.augment_checkpoint = (function offcourse$datastore$store$augment_checkpoint(p__26692){
var map__26695 = p__26692;
var map__26695__$1 = ((((!((map__26695 == null)))?((((map__26695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26695):map__26695);
var course_id = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
var resource = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
return offcourse.datastore.store.update_and_respond_BANG_.call(null,((function (map__26695,map__26695__$1,course_id,checkpoint_id,resource){
return (function (p1__26691_SHARP_){
return offcourse.datastore.model.augment_checkpoint.call(null,p1__26691_SHARP_,course_id,checkpoint_id,resource);
});})(map__26695,map__26695__$1,course_id,checkpoint_id,resource))
);
});
offcourse.datastore.store.add_checkpoint = (function offcourse$datastore$store$add_checkpoint(p__26698){
var map__26701 = p__26698;
var map__26701__$1 = ((((!((map__26701 == null)))?((((map__26701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26701):map__26701);
var course_id = cljs.core.get.call(null,map__26701__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint = cljs.core.get.call(null,map__26701__$1,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002));
var course = offcourse.datastore.model.find_course.call(null,cljs.core.deref.call(null,offcourse.datastore.store.store),course_id);
return offcourse.datastore.store.add_and_respond_BANG_.call(null,((function (course,map__26701,map__26701__$1,course_id,checkpoint){
return (function (p1__26697_SHARP_){
return offcourse.datastore.model.add_checkpoint.call(null,p1__26697_SHARP_,course_id,checkpoint);
});})(course,map__26701,map__26701__$1,course_id,checkpoint))
,course_id);
});
offcourse.datastore.store.save_checkpoint = (function offcourse$datastore$store$save_checkpoint(p__26703){
var map__26706 = p__26703;
var map__26706__$1 = ((((!((map__26706 == null)))?((((map__26706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26706):map__26706);
var payload = map__26706__$1;
var checkpoint_id = cljs.core.get.call(null,map__26706__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
if(cljs.core._EQ_.call(null,checkpoint_id,new cljs.core.Keyword(null,"new","new",-2085437848))){
return offcourse.datastore.store.add_checkpoint.call(null,payload);
} else {
return offcourse.datastore.helpers.respond_ignore.call(null);
}
});
offcourse.datastore.store.get_collection = (function offcourse$datastore$store$get_collection(p__26708){
var map__26711 = p__26708;
var map__26711__$1 = ((((!((map__26711 == null)))?((((map__26711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26711):map__26711);
var collection_name = cljs.core.get.call(null,map__26711__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
var collections = new cljs.core.Keyword(null,"collections","collections",-2114643505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,offcourse.datastore.store.store));
if(cljs.core.truth_(collection_name.call(null,collections))){
return offcourse.datastore.helpers.respond_checked.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name], null));
} else {
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name], null));
}
});
offcourse.datastore.store.get_course = (function offcourse$datastore$store$get_course(p__26713){
var map__26716 = p__26713;
var map__26716__$1 = ((((!((map__26716 == null)))?((((map__26716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26716):map__26716);
var course_id = cljs.core.get.call(null,map__26716__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var course = offcourse.datastore.model.find_course.call(null,cljs.core.deref.call(null,offcourse.datastore.store.store),course_id);
if(cljs.core.truth_(course)){
return offcourse.datastore.helpers.respond_checked.call(null,new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id], null));
} else {
return offcourse.datastore.helpers.respond_not_found.call(null,new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),course_id], null));
}
});
offcourse.datastore.store.commit_data = (function offcourse$datastore$store$commit_data(p__26718){
var map__26722 = p__26718;
var map__26722__$1 = ((((!((map__26722 == null)))?((((map__26722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26722):map__26722);
var payload = map__26722__$1;
var type = cljs.core.get.call(null,map__26722__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__26724 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26724) {
case "checkpoint":
return offcourse.datastore.store.save_checkpoint.call(null,payload);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
offcourse.datastore.store.get_data = (function offcourse$datastore$store$get_data(p__26726){
var map__26730 = p__26726;
var map__26730__$1 = ((((!((map__26730 == null)))?((((map__26730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26730):map__26730);
var payload = map__26730__$1;
var type = cljs.core.get.call(null,map__26730__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__26732 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26732) {
case "collection":
return offcourse.datastore.store.get_collection.call(null,payload);

break;
case "course":
return offcourse.datastore.store.get_course.call(null,payload);

break;
case "checkpoint":
return offcourse.datastore.store.get_course.call(null,payload);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
offcourse.datastore.store.update_datastore = (function offcourse$datastore$store$update_datastore(p__26734){
var map__26738 = p__26734;
var map__26738__$1 = ((((!((map__26738 == null)))?((((map__26738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26738):map__26738);
var payload = map__26738__$1;
var type = cljs.core.get.call(null,map__26738__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__26740 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26740) {
case "collection":
return offcourse.datastore.store.update_collections.call(null,payload);

break;
case "course":
return offcourse.datastore.store.update_course.call(null,payload);

break;
case "courses":
return offcourse.datastore.store.update_courses.call(null,payload);

break;
case "resource":
return offcourse.datastore.store.augment_checkpoint.call(null,payload);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});

//# sourceMappingURL=store.js.map