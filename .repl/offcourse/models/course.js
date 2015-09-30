// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.models.course');
goog.require('cljs.core');
offcourse.models.course.add_course = (function offcourse$models$course$add_course(courses,course){
return cljs.core.conj.call(null,courses,course);
});
offcourse.models.course.find_course = (function offcourse$models$course$find_course(courses,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__43451_SHARP_){
return (id === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43451_SHARP_));
}),courses));
});
offcourse.models.course.remove_course = (function offcourse$models$course$remove_course(courses,id){
return cljs.core.remove.call(null,(function (p1__43452_SHARP_){
return (id === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43452_SHARP_));
}),courses);
});
offcourse.models.course.update_checkpoints = (function offcourse$models$course$update_checkpoints(course,checkpoints){
return cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoints);
});
offcourse.models.course.update_course = (function offcourse$models$course$update_course(courses,course){
var courses__$1 = cljs.core.remove.call(null,(function (p1__43453_SHARP_){
return (course.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)) === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43453_SHARP_));
}),courses);
return cljs.core.conj.call(null,courses__$1,cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"course","course",1455432948)));
});
