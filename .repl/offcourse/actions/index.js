// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.actions.index');
goog.require('cljs.core');
goog.require('reagent.session');
goog.require('ajax.core');
offcourse.actions.index.get_mode = (function offcourse$actions$index$get_mode(){
return reagent.session.get.call(null,new cljs.core.Keyword(null,"mode","mode",654403691));
});
offcourse.actions.index.set_mode_BANG_ = (function offcourse$actions$index$set_mode_BANG_(mode){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691),mode);
});
offcourse.actions.index.toggle_mode_BANG_ = (function offcourse$actions$index$toggle_mode_BANG_(){
var current_mode = reagent.session.get.call(null,new cljs.core.Keyword(null,"mode","mode",654403691));
if(cljs.core._EQ_.call(null,current_mode,new cljs.core.Keyword(null,"learn","learn",307520095))){
return offcourse.actions.index.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"curate","curate",976755582));
} else {
return offcourse.actions.index.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"learn","learn",307520095));
}
});
offcourse.actions.index.set_page_BANG_ = (function offcourse$actions$index$set_page_BANG_(page){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),page);
});
offcourse.actions.index.get_page = (function offcourse$actions$index$get_page(){
return reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397));
});
offcourse.actions.index.fetch_docs_BANG_ = (function offcourse$actions$index$fetch_docs_BANG_(){
return ajax.core.GET.call(null,"/docs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__48812_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),p1__48812_SHARP_);
})], null));
});
