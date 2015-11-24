// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.datastore.services.update');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('offcourse.datastore.helpers');
goog.require('offcourse.datastore.model');
goog.require('offcourse.datastore.responder');
goog.require('offcourse.models.collection');
offcourse.datastore.services.update.init = (function offcourse$datastore$services$update$init(store){
offcourse.datastore.services.update.update_datastore_BANG_ = (function offcourse$datastore$services$update$init_$_update_datastore_BANG_(fn){
return cljs.core.swap_BANG_.call(null,store,fn);
});

offcourse.datastore.services.update.update_and_respond_BANG_ = (function offcourse$datastore$services$update$init_$_update_and_respond_BANG_(fn){
offcourse.datastore.services.update.update_datastore_BANG_.call(null,fn);

return offcourse.datastore.responder.respond_updated.call(null,store);
});

offcourse.datastore.services.update.add_and_respond_BANG_ = (function offcourse$datastore$services$update$init_$_add_and_respond_BANG_(fn,course_id){
offcourse.datastore.services.update.update_datastore_BANG_.call(null,fn);

return offcourse.datastore.responder.respond_added.call(null,store,course_id);
});

offcourse.datastore.services.update.update_tags = (function offcourse$datastore$services$update$init_$_update_tags(tags){
return offcourse.datastore.services.update.update_and_respond_BANG_.call(null,(function (p1__57278_SHARP_){
return offcourse.datastore.model.update_tags.call(null,p1__57278_SHARP_,tags);
}));
});

offcourse.datastore.services.update.update_resources = (function offcourse$datastore$services$update$init_$_update_resources(p__57319){
var map__57322 = p__57319;
var map__57322__$1 = ((((!((map__57322 == null)))?((((map__57322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57322):map__57322);
var resources = cljs.core.get.call(null,map__57322__$1,new cljs.core.Keyword(null,"resources","resources",1632806811));
return offcourse.datastore.services.update.update_and_respond_BANG_.call(null,((function (map__57322,map__57322__$1,resources){
return (function (p1__57279_SHARP_){
return offcourse.datastore.model.update_resources.call(null,p1__57279_SHARP_,resources);
});})(map__57322,map__57322__$1,resources))
);
});

offcourse.datastore.services.update.update_collections = (function offcourse$datastore$services$update$init_$_update_collections(collections){
return offcourse.datastore.services.update.update_and_respond_BANG_.call(null,(function (p1__57280_SHARP_){
return offcourse.datastore.model.update_collections.call(null,p1__57280_SHARP_,collections);
}));
});

offcourse.datastore.services.update.update_collection = (function offcourse$datastore$services$update$init_$_update_collection(collection){
return offcourse.datastore.services.update.update_and_respond_BANG_.call(null,(function (p1__57281_SHARP_){
return offcourse.datastore.model.update_collection.call(null,p1__57281_SHARP_,collection);
}));
});

offcourse.datastore.services.update.update_course = (function offcourse$datastore$services$update$init_$_update_course(course){
return offcourse.datastore.services.update.update_and_respond_BANG_.call(null,(function (p1__57282_SHARP_){
return offcourse.datastore.model.update_course.call(null,p1__57282_SHARP_,course);
}));
});

offcourse.datastore.services.update.update_courses = (function offcourse$datastore$services$update$init_$_update_courses(p__57324){
var map__57327 = p__57324;
var map__57327__$1 = ((((!((map__57327 == null)))?((((map__57327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57327):map__57327);
var courses = cljs.core.get.call(null,map__57327__$1,new cljs.core.Keyword(null,"courses","courses",-428279222));
return offcourse.datastore.services.update.update_and_respond_BANG_.call(null,((function (map__57327,map__57327__$1,courses){
return (function (p1__57283_SHARP_){
return offcourse.datastore.model.update_courses.call(null,p1__57283_SHARP_,courses);
});})(map__57327,map__57327__$1,courses))
);
});

offcourse.datastore.services.update.update_users = (function offcourse$datastore$services$update$init_$_update_users(users){
return offcourse.datastore.services.update.update_and_respond_BANG_.call(null,(function (p1__57284_SHARP_){
return offcourse.datastore.model.update_users.call(null,p1__57284_SHARP_,users);
}));
});

offcourse.datastore.services.update.toggle_done = (function offcourse$datastore$services$update$init_$_toggle_done(p__57329){
var map__57332 = p__57329;
var map__57332__$1 = ((((!((map__57332 == null)))?((((map__57332.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57332.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57332):map__57332);
var course_id = cljs.core.get.call(null,map__57332__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__57332__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
return offcourse.datastore.services.update.update_and_respond_BANG_.call(null,((function (map__57332,map__57332__$1,course_id,checkpoint_id){
return (function (p1__57285_SHARP_){
return offcourse.datastore.model.toggle_done.call(null,p1__57285_SHARP_,course_id,checkpoint_id);
});})(map__57332,map__57332__$1,course_id,checkpoint_id))
);
});

offcourse.datastore.services.update.add_checkpoint = (function offcourse$datastore$services$update$init_$_add_checkpoint(p__57334){
var map__57337 = p__57334;
var map__57337__$1 = ((((!((map__57337 == null)))?((((map__57337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57337):map__57337);
var course_id = cljs.core.get.call(null,map__57337__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint = cljs.core.get.call(null,map__57337__$1,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002));
var course = offcourse.datastore.model.find_course.call(null,cljs.core.deref.call(null,store),course_id);
return offcourse.datastore.services.update.add_and_respond_BANG_.call(null,((function (course,map__57337,map__57337__$1,course_id,checkpoint){
return (function (p1__57286_SHARP_){
return offcourse.datastore.model.add_checkpoint.call(null,p1__57286_SHARP_,course_id,checkpoint);
});})(course,map__57337,map__57337__$1,course_id,checkpoint))
,course_id);
});

offcourse.datastore.services.update.save_checkpoint = (function offcourse$datastore$services$update$init_$_save_checkpoint(store__$1,p__57339){
var map__57342 = p__57339;
var map__57342__$1 = ((((!((map__57342 == null)))?((((map__57342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57342):map__57342);
var payload = map__57342__$1;
var checkpoint_id = cljs.core.get.call(null,map__57342__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
if(cljs.core._EQ_.call(null,checkpoint_id,new cljs.core.Keyword(null,"new","new",-2085437848))){
return offcourse.datastore.services.update.add_checkpoint.call(null,payload);
} else {
return offcourse.datastore.helpers.respond_ignore.call(null);
}
});

offcourse.datastore.services.update.update_datastore = (function offcourse$datastore$services$update$init_$_update_datastore(p__57344){
var map__57348 = p__57344;
var map__57348__$1 = ((((!((map__57348 == null)))?((((map__57348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57348):map__57348);
var payload = map__57348__$1;
var type = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var course = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword(null,"course","course",1455432948));
var tags = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var users = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var collection = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
var collections = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var collection_names = cljs.core.get.call(null,map__57348__$1,new cljs.core.Keyword(null,"collection-names","collection-names",1083533386));
var G__57350 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57350) {
case "collections":
return offcourse.datastore.services.update.update_collections.call(null,collections);

break;
case "tags":
return offcourse.datastore.services.update.update_tags.call(null,tags);

break;
case "collection":
return offcourse.datastore.services.update.update_collection.call(null,collection);

break;
case "course":
return offcourse.datastore.services.update.update_course.call(null,course);

break;
case "users":
return offcourse.datastore.services.update.update_users.call(null,users);

break;
case "courses":
return offcourse.datastore.services.update.update_courses.call(null,payload);

break;
case "resources":
return offcourse.datastore.services.update.update_resources.call(null,payload);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
});
