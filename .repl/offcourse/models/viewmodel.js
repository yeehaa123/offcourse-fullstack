// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.models.viewmodel');
goog.require('cljs.core');
offcourse.models.viewmodel.update_cards = (function offcourse$models$viewmodel$update_cards(courses,course){
var courses__$1 = cljs.core.remove.call(null,(function (p1__57789_SHARP_){
return (course.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)) === new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57789_SHARP_));
}),courses);
return cljs.core.conj.call(null,courses__$1,cljs.core.assoc.call(null,course,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"course","course",1455432948)));
});
offcourse.models.viewmodel.refresh_course = (function offcourse$models$viewmodel$refresh_course(name,course){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.map.call(null,(function (p1__57790_SHARP_){
return cljs.core.assoc.call(null,p1__57790_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002));
}),cljs.core.vals.call(null,course.call(null,new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)))),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),course,new cljs.core.Keyword(null,"topbar","topbar",-1854882644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [course.call(null,new cljs.core.Keyword(null,"goal","goal",-2073396501))], null)], null);
});
offcourse.models.viewmodel.refresh_courses = (function offcourse$models$viewmodel$refresh_courses(name,courses){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.map.call(null,(function (p1__57791_SHARP_){
return cljs.core.assoc.call(null,p1__57791_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"course","course",1455432948));
}),courses),new cljs.core.Keyword(null,"sidebar","sidebar",35784458),null,new cljs.core.Keyword(null,"topbar","topbar",-1854882644),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null)], null);
});
offcourse.models.viewmodel.update_course = (function offcourse$models$viewmodel$update_course(name,course,viewmodel){
var id = course.call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
var card_ids = cljs.core.map.call(null,((function (id){
return (function (p1__57792_SHARP_){
return p1__57792_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092));
});})(id))
,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(viewmodel));
var in_cards = cljs.core.some.call(null,((function (id,card_ids){
return (function (p1__57793_SHARP_){
return cljs.core._EQ_.call(null,id,p1__57793_SHARP_);
});})(id,card_ids))
,card_ids);
if(cljs.core.truth_(in_cards)){
return cljs.core.update_in.call(null,viewmodel,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),offcourse.models.viewmodel.update_cards,course);
} else {
return offcourse.models.viewmodel.refresh_course.call(null,name,course);
}
});
offcourse.models.viewmodel.update_viewmodel = (function offcourse$models$viewmodel$update_viewmodel(appstate,p__57795){
var map__57799 = p__57795;
var map__57799__$1 = ((((!((map__57799 == null)))?((((map__57799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57799):map__57799);
var type = cljs.core.get.call(null,map__57799__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__57799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.call(null,map__57799__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var G__57801 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__57801) {
case "collection":
return cljs.core.swap_BANG_.call(null,appstate,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292)], null),offcourse.models.viewmodel.refresh_courses.call(null,name,data));

break;
case "item":
return cljs.core.swap_BANG_.call(null,appstate,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292)], null),offcourse.models.viewmodel.refresh_course.call(null,name,data));

break;
case "update":
return cljs.core.swap_BANG_.call(null,appstate,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewmodel","viewmodel",-16086292)], null),((function (G__57801,map__57799,map__57799__$1,type,name,data){
return (function (p1__57794_SHARP_){
return offcourse.models.viewmodel.update_course.call(null,name,data,p1__57794_SHARP_);
});})(G__57801,map__57799,map__57799__$1,type,name,data))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
});
