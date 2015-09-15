// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.models.course');
goog.require('cljs.core');
offcourse.models.course.find = (function offcourse$models$course$find(courses,id){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__66981_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__66981_SHARP_),id);
}),courses));
});
