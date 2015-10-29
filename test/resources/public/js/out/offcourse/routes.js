// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.routes');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('offcourse.actions.index');
goog.require('secretary.core');
goog.require('offcourse.models.action');
offcourse.routes.route_names = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"home","home",-74557309),"/",new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),"/courses/:course-id/checkpoints/:checkpoint-id",new cljs.core.Keyword(null,"course","course",1455432948),"/courses/:course-id",new cljs.core.Keyword(null,"collection","collection",-683361892),"/:collection-name"], null);
offcourse.routes.arguments$ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839)], null),new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection-name","collection-name",600435477)], null),new cljs.core.Keyword(null,"course","course",1455432948),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course-id","course-id",-390190405)], null)], null);
offcourse.routes.update_vals = (function offcourse$routes$update_vals(vals,f,map){
return cljs.core.reduce.call(null,(function (p1__27199_SHARP_,p2__27200_SHARP_){
return cljs.core.update_in.call(null,p1__27199_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__27200_SHARP_], null),f);
}),map,vals);
});
offcourse.routes.convertRouteParams = (function offcourse$routes$convertRouteParams(id){
if(cljs.core._EQ_.call(null,"new",id)){
return cljs.core.keyword.call(null,id);
} else {
if(cljs.core._EQ_.call(null,null,id)){
return null;
} else {
return parseInt(id);

}
}
});
offcourse.routes.response = (function offcourse$routes$response(var_args){
var args__20227__auto__ = [];
var len__20220__auto___27204 = arguments.length;
var i__20221__auto___27205 = (0);
while(true){
if((i__20221__auto___27205 < len__20220__auto___27204)){
args__20227__auto__.push((arguments[i__20221__auto___27205]));

var G__27206 = (i__20221__auto___27205 + (1));
i__20221__auto___27205 = G__27206;
continue;
} else {
}
break;
}

var argseq__20228__auto__ = ((((2) < args__20227__auto__.length))?(new cljs.core.IndexedSeq(args__20227__auto__.slice((2)),(0))):null);
return offcourse.routes.response.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20228__auto__);
});

offcourse.routes.response.cljs$core$IFn$_invoke$arity$variadic = (function (channel,type,args){
var payload = cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null),offcourse.routes.update_vals.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"course-id","course-id",-390190405),new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839)], null),offcourse.routes.convertRouteParams,cljs.core.zipmap.call(null,type.call(null,offcourse.routes.arguments$),args)));
return offcourse.models.action._GT__GT__BANG_.call(null,channel,new cljs.core.Keyword(null,"requested-resource","requested-resource",227481961),new cljs.core.Keyword(null,"payload","payload",-383036092),payload);
});

offcourse.routes.response.cljs$lang$maxFixedArity = (2);

offcourse.routes.response.cljs$lang$applyTo = (function (seq27201){
var G__27202 = cljs.core.first.call(null,seq27201);
var seq27201__$1 = cljs.core.next.call(null,seq27201);
var G__27203 = cljs.core.first.call(null,seq27201__$1);
var seq27201__$2 = cljs.core.next.call(null,seq27201__$1);
return offcourse.routes.response.cljs$core$IFn$_invoke$arity$variadic(G__27202,G__27203,seq27201__$2);
});
offcourse.routes.init = (function offcourse$routes$init(p__27207){
var map__27225 = p__27207;
var map__27225__$1 = ((((!((map__27225 == null)))?((((map__27225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27225):map__27225);
var output = cljs.core.get.call(null,map__27225__$1,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906));
var response = cljs.core.partial.call(null,offcourse.routes.response,output);
var action__27110__auto___27242 = ((function (response,map__27225,map__27225__$1,output){
return (function (params__27111__auto__){
if(cljs.core.map_QMARK_.call(null,params__27111__auto__)){
var map__27227 = params__27111__auto__;
var map__27227__$1 = ((((!((map__27227 == null)))?((((map__27227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27227):map__27227);
var course_id = cljs.core.get.call(null,map__27227__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__27227__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
return response.call(null,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),course_id,checkpoint_id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__27111__auto__)){
var map__27229 = params__27111__auto__;
var map__27229__$1 = ((((!((map__27229 == null)))?((((map__27229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27229):map__27229);
var course_id = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
var checkpoint_id = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839));
return response.call(null,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002),course_id,checkpoint_id);
} else {
return null;
}
}
});})(response,map__27225,map__27225__$1,output))
;
secretary.core.add_route_BANG_.call(null,new cljs.core.Keyword(null,"checkpoint","checkpoint",-694507002).cljs$core$IFn$_invoke$arity$1(offcourse.routes.route_names),action__27110__auto___27242);


var action__27110__auto___27243 = ((function (response,map__27225,map__27225__$1,output){
return (function (params__27111__auto__){
if(cljs.core.map_QMARK_.call(null,params__27111__auto__)){
var map__27231 = params__27111__auto__;
var map__27231__$1 = ((((!((map__27231 == null)))?((((map__27231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27231):map__27231);
var course_id = cljs.core.get.call(null,map__27231__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
return response.call(null,new cljs.core.Keyword(null,"course","course",1455432948),course_id);
} else {
if(cljs.core.vector_QMARK_.call(null,params__27111__auto__)){
var map__27233 = params__27111__auto__;
var map__27233__$1 = ((((!((map__27233 == null)))?((((map__27233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27233):map__27233);
var course_id = cljs.core.get.call(null,map__27233__$1,new cljs.core.Keyword(null,"course-id","course-id",-390190405));
return response.call(null,new cljs.core.Keyword(null,"course","course",1455432948),course_id);
} else {
return null;
}
}
});})(response,map__27225,map__27225__$1,output))
;
secretary.core.add_route_BANG_.call(null,new cljs.core.Keyword(null,"course","course",1455432948).cljs$core$IFn$_invoke$arity$1(offcourse.routes.route_names),action__27110__auto___27243);


var action__27110__auto___27244 = ((function (response,map__27225,map__27225__$1,output){
return (function (params__27111__auto__){
if(cljs.core.map_QMARK_.call(null,params__27111__auto__)){
var map__27235 = params__27111__auto__;
var map__27235__$1 = ((((!((map__27235 == null)))?((((map__27235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27235):map__27235);
var collection_name = cljs.core.get.call(null,map__27235__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
return response.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.keyword.call(null,collection_name));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27111__auto__)){
var map__27237 = params__27111__auto__;
var map__27237__$1 = ((((!((map__27237 == null)))?((((map__27237.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27237.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27237):map__27237);
var collection_name = cljs.core.get.call(null,map__27237__$1,new cljs.core.Keyword(null,"collection-name","collection-name",600435477));
return response.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),cljs.core.keyword.call(null,collection_name));
} else {
return null;
}
}
});})(response,map__27225,map__27225__$1,output))
;
secretary.core.add_route_BANG_.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(offcourse.routes.route_names),action__27110__auto___27244);


var action__27110__auto__ = ((function (response,map__27225,map__27225__$1,output){
return (function (params__27111__auto__){
if(cljs.core.map_QMARK_.call(null,params__27111__auto__)){
var map__27239 = params__27111__auto__;
var map__27239__$1 = ((((!((map__27239 == null)))?((((map__27239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27239):map__27239);
return response.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"featured","featured",1584623723));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27111__auto__)){
var vec__27241 = params__27111__auto__;
return response.call(null,new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.Keyword(null,"featured","featured",1584623723));
} else {
return null;
}
}
});})(response,map__27225,map__27225__$1,output))
;
secretary.core.add_route_BANG_.call(null,new cljs.core.Keyword(null,"home","home",-74557309).cljs$core$IFn$_invoke$arity$1(offcourse.routes.route_names),action__27110__auto__);

return ((function (action__27110__auto__,response,map__27225,map__27225__$1,output){
return (function() { 
var G__27245__delegate = function (args__27109__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,new cljs.core.Keyword(null,"home","home",-74557309).cljs$core$IFn$_invoke$arity$1(offcourse.routes.route_names),args__27109__auto__);
};
var G__27245 = function (var_args){
var args__27109__auto__ = null;
if (arguments.length > 0) {
var G__27246__i = 0, G__27246__a = new Array(arguments.length -  0);
while (G__27246__i < G__27246__a.length) {G__27246__a[G__27246__i] = arguments[G__27246__i + 0]; ++G__27246__i;}
  args__27109__auto__ = new cljs.core.IndexedSeq(G__27246__a,0);
} 
return G__27245__delegate.call(this,args__27109__auto__);};
G__27245.cljs$lang$maxFixedArity = 0;
G__27245.cljs$lang$applyTo = (function (arglist__27247){
var args__27109__auto__ = cljs.core.seq(arglist__27247);
return G__27245__delegate(args__27109__auto__);
});
G__27245.cljs$core$IFn$_invoke$arity$variadic = G__27245__delegate;
return G__27245;
})()
;
;})(action__27110__auto__,response,map__27225,map__27225__$1,output))
});

//# sourceMappingURL=routes.js.map