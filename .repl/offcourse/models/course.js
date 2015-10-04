// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.models.course');
goog.require('cljs.core');
offcourse.models.course.add_course = (function offcourse$models$course$add_course(courses,course){
return cljs.core.conj.call(null,courses,course);
});
offcourse.models.course.find_course = (function offcourse$models$course$find_course(courses,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__57953_SHARP_){
return (id === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57953_SHARP_));
}),courses));
});
offcourse.models.course.remove_course = (function offcourse$models$course$remove_course(courses,id){
return cljs.core.remove.call(null,(function (p1__57954_SHARP_){
return (id === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57954_SHARP_));
}),courses);
});
offcourse.models.course.update_checkpoints = (function offcourse$models$course$update_checkpoints(course,checkpoints){
return cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoints);
});
offcourse.models.course.update = (function offcourse$models$course$update(path,cb,courses){
return cljs.core.update_in.call(null,courses,path,(function (p1__57955_SHARP_){
return cb.call(null,p1__57955_SHARP_);
}));
});
offcourse.models.course.toggle_done = (function offcourse$models$course$toggle_done(course_id,checkpoint_id,courses){
return offcourse.models.course.update.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id,new cljs.core.Keyword(null,"completed","completed",-486056503)], null),cljs.core.not,courses);
});
offcourse.models.course.update_goal = (function offcourse$models$course$update_goal(id,new_goal,courses){
return offcourse.models.course.update.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),(function (_){
return new_goal;
}),courses);
});
offcourse.models.course.update_task = (function offcourse$models$course$update_task(course_id,checkpoint_id,new_task,courses){
return offcourse.models.course.update.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [course_id,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id,new cljs.core.Keyword(null,"task","task",-1476607993)], null),(function (_){
return new_task;
}),courses);
});
offcourse.models.course.augment_checkpoint = (function offcourse$models$course$augment_checkpoint(p__57956,resources){
var vec__57958 = p__57956;
var id = cljs.core.nth.call(null,vec__57958,(0),null);
var checkpoint = cljs.core.nth.call(null,vec__57958,(1),null);
var resource = cljs.core.get.call(null,resources,id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.merge.call(null,checkpoint,resource)], null);
});
offcourse.models.course.augment_checkpoints = (function offcourse$models$course$augment_checkpoints(checkpoints,resources){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__57959_SHARP_){
return offcourse.models.course.augment_checkpoint.call(null,p1__57959_SHARP_,resources);
}),checkpoints));
});
offcourse.models.course.augment = (function offcourse$models$course$augment(id,resources,courses){
return offcourse.models.course.update.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)], null),(function (checkpoints){
return offcourse.models.course.augment_checkpoints.call(null,checkpoints,resources);
}),courses);
});
