// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.models.collection');
goog.require('cljs.core');
goog.require('offcourse.models.course');
offcourse.models.collection.update_course = (function offcourse$models$collection$update_course(collection,course){
return cljs.core.assoc_in.call(null,collection,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(course)], null),course);
});
offcourse.models.collection.update_courses = (function offcourse$models$collection$update_courses(collection,courses){
return cljs.core.reduce.call(null,offcourse.models.collection.update_course,collection,courses);
});
offcourse.models.collection.add_checkpoint = (function offcourse$models$collection$add_checkpoint(collection,course_id,checkpoint){
return cljs.core.update_in.call(null,collection,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id], null),(function (p1__25151_SHARP_){
return offcourse.models.course.add_checkpoint.call(null,p1__25151_SHARP_,checkpoint);
}));
});
offcourse.models.collection.augment_checkpoint = (function offcourse$models$collection$augment_checkpoint(collection,course_id,checkpoint_id,resource){
return cljs.core.update_in.call(null,collection,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id], null),(function (p1__25152_SHARP_){
return offcourse.models.course.augment_checkpoint.call(null,p1__25152_SHARP_,checkpoint_id,resource);
}));
});
offcourse.models.collection.toggle_done = (function offcourse$models$collection$toggle_done(collection,course_id,checkpoint_id){
return cljs.core.update_in.call(null,collection,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id], null),(function (p1__25153_SHARP_){
return offcourse.models.course.toggle_done.call(null,p1__25153_SHARP_,checkpoint_id);
}));
});
offcourse.models.collection.find_course = (function offcourse$models$collection$find_course(collection,course_id){
return cljs.core.get.call(null,collection,course_id);
});
offcourse.models.collection.highlight = (function offcourse$models$collection$highlight(collection,course_id,checkpoint_id,highlight__$1){
return cljs.core.update_in.call(null,collection,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id,new cljs.core.Keyword(null,"highlighted","highlighted",1723498733)], null),(function (){
return highlight__$1;
}));
});

//# sourceMappingURL=collection.js.map