// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.models.course');
goog.require('cljs.core');
offcourse.models.course.find_course = (function offcourse$models$course$find_course(courses,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__43156_SHARP_){
return (id === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43156_SHARP_));
}),courses));
});
