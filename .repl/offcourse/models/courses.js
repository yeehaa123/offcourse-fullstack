// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.courses');
goog.require('cljs.core');
goog.require('offcourse.models.course');
offcourse.models.courses.update_course = (function offcourse$models$courses$update_course(collection,course){
return cljs.core.assoc_in.call(null,collection,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(course)], null),course);
});
offcourse.models.courses.update_courses = (function offcourse$models$courses$update_courses(collection,courses){
return cljs.core.reduce.call(null,offcourse.models.courses.update_course,collection,courses);
});
offcourse.models.courses.add_checkpoint = (function offcourse$models$courses$add_checkpoint(collection,course_id,checkpoint){
return cljs.core.update_in.call(null,collection,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id], null),(function (p1__55661_SHARP_){
return offcourse.models.course.add_checkpoint.call(null,p1__55661_SHARP_,checkpoint);
}));
});
offcourse.models.courses.toggle_done = (function offcourse$models$courses$toggle_done(collection,course_id,checkpoint_id){
return cljs.core.update_in.call(null,collection,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id], null),(function (p1__55662_SHARP_){
return offcourse.models.course.toggle_done.call(null,p1__55662_SHARP_,checkpoint_id);
}));
});
offcourse.models.courses.find_course = (function offcourse$models$courses$find_course(collection,course_id){
return cljs.core.get.call(null,collection,course_id);
});
offcourse.models.courses.highlight = (function offcourse$models$courses$highlight(collection,course_id,checkpoint_id,highlight__$1){
return cljs.core.update_in.call(null,collection,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733)], null),(function (){
return highlight__$1;
}));
});
offcourse.models.courses.find_courses = (function offcourse$models$courses$find_courses(collection,course_ids){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,(function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.call(null,collection,id)], null);
}),course_ids));
});
offcourse.models.courses.add_tags = (function offcourse$models$courses$add_tags(courses,tags){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__55666){
var map__55667 = p__55666;
var map__55667__$1 = ((((!((map__55667 == null)))?((((map__55667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55667):map__55667);
var course = map__55667__$1;
var course_id = cljs.core.get.call(null,map__55667__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,offcourse.models.course.add_tags.call(null,course,tags)], null);
}),cljs.core.vals.call(null,courses)));
});
