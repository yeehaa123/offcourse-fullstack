// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.views.components.logo');
goog.require('cljs.core');
goog.require('offcourse.helpers.css');
goog.require('quiescent.dom');
offcourse.views.components.logo.Logo = (function offcourse$views$components$logo$Logo(p__24792){
var map__24795 = p__24792;
var map__24795__$1 = ((((!((map__24795 == null)))?((((map__24795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24795):map__24795);
var go_to_collection = cljs.core.get.call(null,map__24795__$1,new cljs.core.Keyword(null,"go-to-collection","go-to-collection",-593537030));
return quiescent.dom.section.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"logo")], null),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),offcourse.helpers.css.classes.call(null,"textbar"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__24795,map__24795__$1,go_to_collection){
return (function (){
return go_to_collection.call(null,new cljs.core.Keyword(null,"featured","featured",1584623723));
});})(map__24795,map__24795__$1,go_to_collection))
], null),"Offcourse_"));
});

//# sourceMappingURL=logo.js.map