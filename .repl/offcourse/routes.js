// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.routes');
goog.require('cljs.core');
goog.require('offcourse.actions.index');
goog.require('secretary.core');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__37187__auto___57226 = (function (params__37188__auto__){
if(cljs.core.map_QMARK_.call(null,params__37188__auto__)){
var map__57223 = params__37188__auto__;
var map__57223__$1 = ((((!((map__57223 == null)))?((((map__57223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57223):map__57223);
return offcourse.actions.index.set_text_BANG_.call(null,"Hello World");
} else {
if(cljs.core.vector_QMARK_.call(null,params__37188__auto__)){
var vec__57225 = params__37188__auto__;
return offcourse.actions.index.set_text_BANG_.call(null,"Hello World");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__37187__auto___57226);

