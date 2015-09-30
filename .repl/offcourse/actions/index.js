// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.actions.index');
goog.require('cljs.core');
goog.require('offcourse.stores.appstate');
goog.require('ajax.core');
goog.require('reagent.session');
goog.require('offcourse.services.api');
goog.require('cljs.core.async');
goog.require('offcourse.services.history');
offcourse.actions.index.set_mode_BANG_ = (function offcourse$actions$index$set_mode_BANG_(mode){
return offcourse.stores.appstate.set_mode_BANG_.call(null,mode);
});
offcourse.actions.index.toggle_mode_BANG_ = (function offcourse$actions$index$toggle_mode_BANG_(){
return offcourse.stores.appstate.toggle_mode_BANG_.call(null);
});
offcourse.actions.index.fetch_docs_BANG_ = (function offcourse$actions$index$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__43787_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),p1__43787_SHARP_);
})], null));
});
offcourse.actions.index.check_done = (function offcourse$actions$index$check_done(course_id,checkpoint_id){
return offcourse.services.api.check_done.call(null,course_id,checkpoint_id);
});
offcourse.actions.index.get_courses = (function offcourse$actions$index$get_courses(keyword){
return offcourse.services.api.get_courses.call(null,keyword);
});
offcourse.actions.index.get_course = (function offcourse$actions$index$get_course(id){
return offcourse.services.api.get_course.call(null,id);
});
offcourse.actions.index.go_to_BANG_ = (function offcourse$actions$index$go_to_BANG_(location){
return offcourse.services.history.nav_BANG_.call(null,location);
});
offcourse.actions.index.go_to_course_BANG_ = (function offcourse$actions$index$go_to_course_BANG_(id){
var location = [cljs.core.str("courses/"),cljs.core.str(id)].join('');
return offcourse.actions.index.go_to_BANG_.call(null,location);
});
