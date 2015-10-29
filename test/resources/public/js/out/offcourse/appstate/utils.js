// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.utils');
goog.require('cljs.core');
offcourse.appstate.utils.get_course = (function offcourse$appstate$utils$get_course(p__26206,p__26207){
var map__26212 = p__26206;
var map__26212__$1 = ((((!((map__26212 == null)))?((((map__26212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26212):map__26212);
var level = cljs.core.get.call(null,map__26212__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var map__26213 = p__26207;
var map__26213__$1 = ((((!((map__26213 == null)))?((((map__26213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26213):map__26213);
var courses = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"courses","courses",-428279222));
return cljs.core.get.call(null,courses,new cljs.core.Keyword(null,"course-id","course-id",-390190405).cljs$core$IFn$_invoke$arity$1(level));
});
offcourse.appstate.utils.get_checkpoint = (function offcourse$appstate$utils$get_checkpoint(checkpoint_id,course){
return cljs.core.get_in.call(null,course,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145),checkpoint_id], null));
});
offcourse.appstate.utils.get_collection = (function offcourse$appstate$utils$get_collection(p__26216,p__26217){
var map__26222 = p__26216;
var map__26222__$1 = ((((!((map__26222 == null)))?((((map__26222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26222):map__26222);
var level = cljs.core.get.call(null,map__26222__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var map__26223 = p__26217;
var map__26223__$1 = ((((!((map__26223 == null)))?((((map__26223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26223):map__26223);
var collections = cljs.core.get.call(null,map__26223__$1,new cljs.core.Keyword(null,"collections","collections",-2114643505));
var courses = cljs.core.get.call(null,map__26223__$1,new cljs.core.Keyword(null,"courses","courses",-428279222));
var collection_name = new cljs.core.Keyword(null,"collection-name","collection-name",600435477).cljs$core$IFn$_invoke$arity$1(level);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (collection_name,map__26222,map__26222__$1,level,map__26223,map__26223__$1,collections,courses){
return (function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.get.call(null,courses,id)], null);
});})(collection_name,map__26222,map__26222__$1,level,map__26223,map__26223__$1,collections,courses))
,collection_name.call(null,collections)));
});

//# sourceMappingURL=utils.js.map