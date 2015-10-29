// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__19162__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__19162__auto__){
return or__19162__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__19162__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34835_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34835_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34840 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34841 = null;
var count__34842 = (0);
var i__34843 = (0);
while(true){
if((i__34843 < count__34842)){
var n = cljs.core._nth.call(null,chunk__34841,i__34843);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34844 = seq__34840;
var G__34845 = chunk__34841;
var G__34846 = count__34842;
var G__34847 = (i__34843 + (1));
seq__34840 = G__34844;
chunk__34841 = G__34845;
count__34842 = G__34846;
i__34843 = G__34847;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34840);
if(temp__4425__auto__){
var seq__34840__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34840__$1)){
var c__19965__auto__ = cljs.core.chunk_first.call(null,seq__34840__$1);
var G__34848 = cljs.core.chunk_rest.call(null,seq__34840__$1);
var G__34849 = c__19965__auto__;
var G__34850 = cljs.core.count.call(null,c__19965__auto__);
var G__34851 = (0);
seq__34840 = G__34848;
chunk__34841 = G__34849;
count__34842 = G__34850;
i__34843 = G__34851;
continue;
} else {
var n = cljs.core.first.call(null,seq__34840__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34852 = cljs.core.next.call(null,seq__34840__$1);
var G__34853 = null;
var G__34854 = (0);
var G__34855 = (0);
seq__34840 = G__34852;
chunk__34841 = G__34853;
count__34842 = G__34854;
i__34843 = G__34855;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34894_34901 = cljs.core.seq.call(null,deps);
var chunk__34895_34902 = null;
var count__34896_34903 = (0);
var i__34897_34904 = (0);
while(true){
if((i__34897_34904 < count__34896_34903)){
var dep_34905 = cljs.core._nth.call(null,chunk__34895_34902,i__34897_34904);
topo_sort_helper_STAR_.call(null,dep_34905,(depth + (1)),state);

var G__34906 = seq__34894_34901;
var G__34907 = chunk__34895_34902;
var G__34908 = count__34896_34903;
var G__34909 = (i__34897_34904 + (1));
seq__34894_34901 = G__34906;
chunk__34895_34902 = G__34907;
count__34896_34903 = G__34908;
i__34897_34904 = G__34909;
continue;
} else {
var temp__4425__auto___34910 = cljs.core.seq.call(null,seq__34894_34901);
if(temp__4425__auto___34910){
var seq__34894_34911__$1 = temp__4425__auto___34910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34894_34911__$1)){
var c__19965__auto___34912 = cljs.core.chunk_first.call(null,seq__34894_34911__$1);
var G__34913 = cljs.core.chunk_rest.call(null,seq__34894_34911__$1);
var G__34914 = c__19965__auto___34912;
var G__34915 = cljs.core.count.call(null,c__19965__auto___34912);
var G__34916 = (0);
seq__34894_34901 = G__34913;
chunk__34895_34902 = G__34914;
count__34896_34903 = G__34915;
i__34897_34904 = G__34916;
continue;
} else {
var dep_34917 = cljs.core.first.call(null,seq__34894_34911__$1);
topo_sort_helper_STAR_.call(null,dep_34917,(depth + (1)),state);

var G__34918 = cljs.core.next.call(null,seq__34894_34911__$1);
var G__34919 = null;
var G__34920 = (0);
var G__34921 = (0);
seq__34894_34901 = G__34918;
chunk__34895_34902 = G__34919;
count__34896_34903 = G__34920;
i__34897_34904 = G__34921;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34898){
var vec__34900 = p__34898;
var x = cljs.core.nth.call(null,vec__34900,(0),null);
var xs = cljs.core.nthnext.call(null,vec__34900,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34900,x,xs,get_deps__$1){
return (function (p1__34856_SHARP_){
return clojure.set.difference.call(null,p1__34856_SHARP_,x);
});})(vec__34900,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34934 = cljs.core.seq.call(null,provides);
var chunk__34935 = null;
var count__34936 = (0);
var i__34937 = (0);
while(true){
if((i__34937 < count__34936)){
var prov = cljs.core._nth.call(null,chunk__34935,i__34937);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34938_34946 = cljs.core.seq.call(null,requires);
var chunk__34939_34947 = null;
var count__34940_34948 = (0);
var i__34941_34949 = (0);
while(true){
if((i__34941_34949 < count__34940_34948)){
var req_34950 = cljs.core._nth.call(null,chunk__34939_34947,i__34941_34949);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34950,prov);

var G__34951 = seq__34938_34946;
var G__34952 = chunk__34939_34947;
var G__34953 = count__34940_34948;
var G__34954 = (i__34941_34949 + (1));
seq__34938_34946 = G__34951;
chunk__34939_34947 = G__34952;
count__34940_34948 = G__34953;
i__34941_34949 = G__34954;
continue;
} else {
var temp__4425__auto___34955 = cljs.core.seq.call(null,seq__34938_34946);
if(temp__4425__auto___34955){
var seq__34938_34956__$1 = temp__4425__auto___34955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34938_34956__$1)){
var c__19965__auto___34957 = cljs.core.chunk_first.call(null,seq__34938_34956__$1);
var G__34958 = cljs.core.chunk_rest.call(null,seq__34938_34956__$1);
var G__34959 = c__19965__auto___34957;
var G__34960 = cljs.core.count.call(null,c__19965__auto___34957);
var G__34961 = (0);
seq__34938_34946 = G__34958;
chunk__34939_34947 = G__34959;
count__34940_34948 = G__34960;
i__34941_34949 = G__34961;
continue;
} else {
var req_34962 = cljs.core.first.call(null,seq__34938_34956__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34962,prov);

var G__34963 = cljs.core.next.call(null,seq__34938_34956__$1);
var G__34964 = null;
var G__34965 = (0);
var G__34966 = (0);
seq__34938_34946 = G__34963;
chunk__34939_34947 = G__34964;
count__34940_34948 = G__34965;
i__34941_34949 = G__34966;
continue;
}
} else {
}
}
break;
}

var G__34967 = seq__34934;
var G__34968 = chunk__34935;
var G__34969 = count__34936;
var G__34970 = (i__34937 + (1));
seq__34934 = G__34967;
chunk__34935 = G__34968;
count__34936 = G__34969;
i__34937 = G__34970;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34934);
if(temp__4425__auto__){
var seq__34934__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34934__$1)){
var c__19965__auto__ = cljs.core.chunk_first.call(null,seq__34934__$1);
var G__34971 = cljs.core.chunk_rest.call(null,seq__34934__$1);
var G__34972 = c__19965__auto__;
var G__34973 = cljs.core.count.call(null,c__19965__auto__);
var G__34974 = (0);
seq__34934 = G__34971;
chunk__34935 = G__34972;
count__34936 = G__34973;
i__34937 = G__34974;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34934__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34942_34975 = cljs.core.seq.call(null,requires);
var chunk__34943_34976 = null;
var count__34944_34977 = (0);
var i__34945_34978 = (0);
while(true){
if((i__34945_34978 < count__34944_34977)){
var req_34979 = cljs.core._nth.call(null,chunk__34943_34976,i__34945_34978);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34979,prov);

var G__34980 = seq__34942_34975;
var G__34981 = chunk__34943_34976;
var G__34982 = count__34944_34977;
var G__34983 = (i__34945_34978 + (1));
seq__34942_34975 = G__34980;
chunk__34943_34976 = G__34981;
count__34944_34977 = G__34982;
i__34945_34978 = G__34983;
continue;
} else {
var temp__4425__auto___34984__$1 = cljs.core.seq.call(null,seq__34942_34975);
if(temp__4425__auto___34984__$1){
var seq__34942_34985__$1 = temp__4425__auto___34984__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34942_34985__$1)){
var c__19965__auto___34986 = cljs.core.chunk_first.call(null,seq__34942_34985__$1);
var G__34987 = cljs.core.chunk_rest.call(null,seq__34942_34985__$1);
var G__34988 = c__19965__auto___34986;
var G__34989 = cljs.core.count.call(null,c__19965__auto___34986);
var G__34990 = (0);
seq__34942_34975 = G__34987;
chunk__34943_34976 = G__34988;
count__34944_34977 = G__34989;
i__34945_34978 = G__34990;
continue;
} else {
var req_34991 = cljs.core.first.call(null,seq__34942_34985__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34991,prov);

var G__34992 = cljs.core.next.call(null,seq__34942_34985__$1);
var G__34993 = null;
var G__34994 = (0);
var G__34995 = (0);
seq__34942_34975 = G__34992;
chunk__34943_34976 = G__34993;
count__34944_34977 = G__34994;
i__34945_34978 = G__34995;
continue;
}
} else {
}
}
break;
}

var G__34996 = cljs.core.next.call(null,seq__34934__$1);
var G__34997 = null;
var G__34998 = (0);
var G__34999 = (0);
seq__34934 = G__34996;
chunk__34935 = G__34997;
count__34936 = G__34998;
i__34937 = G__34999;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35004_35008 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35005_35009 = null;
var count__35006_35010 = (0);
var i__35007_35011 = (0);
while(true){
if((i__35007_35011 < count__35006_35010)){
var ns_35012 = cljs.core._nth.call(null,chunk__35005_35009,i__35007_35011);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35012);

var G__35013 = seq__35004_35008;
var G__35014 = chunk__35005_35009;
var G__35015 = count__35006_35010;
var G__35016 = (i__35007_35011 + (1));
seq__35004_35008 = G__35013;
chunk__35005_35009 = G__35014;
count__35006_35010 = G__35015;
i__35007_35011 = G__35016;
continue;
} else {
var temp__4425__auto___35017 = cljs.core.seq.call(null,seq__35004_35008);
if(temp__4425__auto___35017){
var seq__35004_35018__$1 = temp__4425__auto___35017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35004_35018__$1)){
var c__19965__auto___35019 = cljs.core.chunk_first.call(null,seq__35004_35018__$1);
var G__35020 = cljs.core.chunk_rest.call(null,seq__35004_35018__$1);
var G__35021 = c__19965__auto___35019;
var G__35022 = cljs.core.count.call(null,c__19965__auto___35019);
var G__35023 = (0);
seq__35004_35008 = G__35020;
chunk__35005_35009 = G__35021;
count__35006_35010 = G__35022;
i__35007_35011 = G__35023;
continue;
} else {
var ns_35024 = cljs.core.first.call(null,seq__35004_35018__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35024);

var G__35025 = cljs.core.next.call(null,seq__35004_35018__$1);
var G__35026 = null;
var G__35027 = (0);
var G__35028 = (0);
seq__35004_35008 = G__35025;
chunk__35005_35009 = G__35026;
count__35006_35010 = G__35027;
i__35007_35011 = G__35028;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__19162__auto__ = goog.require__;
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35029__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35029 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35030__i = 0, G__35030__a = new Array(arguments.length -  0);
while (G__35030__i < G__35030__a.length) {G__35030__a[G__35030__i] = arguments[G__35030__i + 0]; ++G__35030__i;}
  args = new cljs.core.IndexedSeq(G__35030__a,0);
} 
return G__35029__delegate.call(this,args);};
G__35029.cljs$lang$maxFixedArity = 0;
G__35029.cljs$lang$applyTo = (function (arglist__35031){
var args = cljs.core.seq(arglist__35031);
return G__35029__delegate(args);
});
G__35029.cljs$core$IFn$_invoke$arity$variadic = G__35029__delegate;
return G__35029;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35033 = cljs.core._EQ_;
var expr__35034 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35033.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35034))){
var path_parts = ((function (pred__35033,expr__35034){
return (function (p1__35032_SHARP_){
return clojure.string.split.call(null,p1__35032_SHARP_,/[\/\\]/);
});})(pred__35033,expr__35034))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35033,expr__35034){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e35036){if((e35036 instanceof Error)){
var e = e35036;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35036;

}
}})());
});
;})(path_parts,sep,root,pred__35033,expr__35034))
} else {
if(cljs.core.truth_(pred__35033.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35034))){
return ((function (pred__35033,expr__35034){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__35033,expr__35034){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35033,expr__35034))
);

return deferred.addErrback(((function (deferred,pred__35033,expr__35034){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35033,expr__35034))
);
});
;})(pred__35033,expr__35034))
} else {
return ((function (pred__35033,expr__35034){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35033,expr__35034))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35037,callback){
var map__35040 = p__35037;
var map__35040__$1 = ((((!((map__35040 == null)))?((((map__35040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35040):map__35040);
var file_msg = map__35040__$1;
var request_url = cljs.core.get.call(null,map__35040__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35040,map__35040__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35040,map__35040__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__){
return (function (state_35064){
var state_val_35065 = (state_35064[(1)]);
if((state_val_35065 === (7))){
var inst_35060 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
var statearr_35066_35086 = state_35064__$1;
(statearr_35066_35086[(2)] = inst_35060);

(statearr_35066_35086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (1))){
var state_35064__$1 = state_35064;
var statearr_35067_35087 = state_35064__$1;
(statearr_35067_35087[(2)] = null);

(statearr_35067_35087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (4))){
var inst_35044 = (state_35064[(7)]);
var inst_35044__$1 = (state_35064[(2)]);
var state_35064__$1 = (function (){var statearr_35068 = state_35064;
(statearr_35068[(7)] = inst_35044__$1);

return statearr_35068;
})();
if(cljs.core.truth_(inst_35044__$1)){
var statearr_35069_35088 = state_35064__$1;
(statearr_35069_35088[(1)] = (5));

} else {
var statearr_35070_35089 = state_35064__$1;
(statearr_35070_35089[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (6))){
var state_35064__$1 = state_35064;
var statearr_35071_35090 = state_35064__$1;
(statearr_35071_35090[(2)] = null);

(statearr_35071_35090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (3))){
var inst_35062 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35064__$1,inst_35062);
} else {
if((state_val_35065 === (2))){
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35064__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35065 === (11))){
var inst_35056 = (state_35064[(2)]);
var state_35064__$1 = (function (){var statearr_35072 = state_35064;
(statearr_35072[(8)] = inst_35056);

return statearr_35072;
})();
var statearr_35073_35091 = state_35064__$1;
(statearr_35073_35091[(2)] = null);

(statearr_35073_35091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (9))){
var inst_35050 = (state_35064[(9)]);
var inst_35048 = (state_35064[(10)]);
var inst_35052 = inst_35050.call(null,inst_35048);
var state_35064__$1 = state_35064;
var statearr_35074_35092 = state_35064__$1;
(statearr_35074_35092[(2)] = inst_35052);

(statearr_35074_35092[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (5))){
var inst_35044 = (state_35064[(7)]);
var inst_35046 = figwheel.client.file_reloading.blocking_load.call(null,inst_35044);
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35064__$1,(8),inst_35046);
} else {
if((state_val_35065 === (10))){
var inst_35048 = (state_35064[(10)]);
var inst_35054 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35048);
var state_35064__$1 = state_35064;
var statearr_35075_35093 = state_35064__$1;
(statearr_35075_35093[(2)] = inst_35054);

(statearr_35075_35093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (8))){
var inst_35044 = (state_35064[(7)]);
var inst_35050 = (state_35064[(9)]);
var inst_35048 = (state_35064[(2)]);
var inst_35049 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35050__$1 = cljs.core.get.call(null,inst_35049,inst_35044);
var state_35064__$1 = (function (){var statearr_35076 = state_35064;
(statearr_35076[(9)] = inst_35050__$1);

(statearr_35076[(10)] = inst_35048);

return statearr_35076;
})();
if(cljs.core.truth_(inst_35050__$1)){
var statearr_35077_35094 = state_35064__$1;
(statearr_35077_35094[(1)] = (9));

} else {
var statearr_35078_35095 = state_35064__$1;
(statearr_35078_35095[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22242__auto__))
;
return ((function (switch__22177__auto__,c__22242__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22178__auto__ = null;
var figwheel$client$file_reloading$state_machine__22178__auto____0 = (function (){
var statearr_35082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35082[(0)] = figwheel$client$file_reloading$state_machine__22178__auto__);

(statearr_35082[(1)] = (1));

return statearr_35082;
});
var figwheel$client$file_reloading$state_machine__22178__auto____1 = (function (state_35064){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_35064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e35083){if((e35083 instanceof Object)){
var ex__22181__auto__ = e35083;
var statearr_35084_35096 = state_35064;
(statearr_35084_35096[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35097 = state_35064;
state_35064 = G__35097;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22178__auto__ = function(state_35064){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22178__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22178__auto____1.call(this,state_35064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22178__auto____0;
figwheel$client$file_reloading$state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22178__auto____1;
return figwheel$client$file_reloading$state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__))
})();
var state__22244__auto__ = (function (){var statearr_35085 = f__22243__auto__.call(null);
(statearr_35085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_35085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__))
);

return c__22242__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35098,callback){
var map__35101 = p__35098;
var map__35101__$1 = ((((!((map__35101 == null)))?((((map__35101.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35101.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35101):map__35101);
var file_msg = map__35101__$1;
var namespace = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35101,map__35101__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35101,map__35101__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35103){
var map__35106 = p__35103;
var map__35106__$1 = ((((!((map__35106 == null)))?((((map__35106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35106):map__35106);
var file_msg = map__35106__$1;
var namespace = cljs.core.get.call(null,map__35106__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__19150__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__19150__auto__){
var or__19162__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19162__auto__)){
return or__19162__auto__;
} else {
var or__19162__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__19162__auto____$1)){
return or__19162__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__19150__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35108,callback){
var map__35111 = p__35108;
var map__35111__$1 = ((((!((map__35111 == null)))?((((map__35111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35111):map__35111);
var file_msg = map__35111__$1;
var request_url = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35111__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22242__auto___35199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto___35199,out){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto___35199,out){
return (function (state_35181){
var state_val_35182 = (state_35181[(1)]);
if((state_val_35182 === (1))){
var inst_35159 = cljs.core.nth.call(null,files,(0),null);
var inst_35160 = cljs.core.nthnext.call(null,files,(1));
var inst_35161 = files;
var state_35181__$1 = (function (){var statearr_35183 = state_35181;
(statearr_35183[(7)] = inst_35159);

(statearr_35183[(8)] = inst_35161);

(statearr_35183[(9)] = inst_35160);

return statearr_35183;
})();
var statearr_35184_35200 = state_35181__$1;
(statearr_35184_35200[(2)] = null);

(statearr_35184_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35182 === (2))){
var inst_35164 = (state_35181[(10)]);
var inst_35161 = (state_35181[(8)]);
var inst_35164__$1 = cljs.core.nth.call(null,inst_35161,(0),null);
var inst_35165 = cljs.core.nthnext.call(null,inst_35161,(1));
var inst_35166 = (inst_35164__$1 == null);
var inst_35167 = cljs.core.not.call(null,inst_35166);
var state_35181__$1 = (function (){var statearr_35185 = state_35181;
(statearr_35185[(10)] = inst_35164__$1);

(statearr_35185[(11)] = inst_35165);

return statearr_35185;
})();
if(inst_35167){
var statearr_35186_35201 = state_35181__$1;
(statearr_35186_35201[(1)] = (4));

} else {
var statearr_35187_35202 = state_35181__$1;
(statearr_35187_35202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35182 === (3))){
var inst_35179 = (state_35181[(2)]);
var state_35181__$1 = state_35181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35181__$1,inst_35179);
} else {
if((state_val_35182 === (4))){
var inst_35164 = (state_35181[(10)]);
var inst_35169 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35164);
var state_35181__$1 = state_35181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35181__$1,(7),inst_35169);
} else {
if((state_val_35182 === (5))){
var inst_35175 = cljs.core.async.close_BANG_.call(null,out);
var state_35181__$1 = state_35181;
var statearr_35188_35203 = state_35181__$1;
(statearr_35188_35203[(2)] = inst_35175);

(statearr_35188_35203[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35182 === (6))){
var inst_35177 = (state_35181[(2)]);
var state_35181__$1 = state_35181;
var statearr_35189_35204 = state_35181__$1;
(statearr_35189_35204[(2)] = inst_35177);

(statearr_35189_35204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35182 === (7))){
var inst_35165 = (state_35181[(11)]);
var inst_35171 = (state_35181[(2)]);
var inst_35172 = cljs.core.async.put_BANG_.call(null,out,inst_35171);
var inst_35161 = inst_35165;
var state_35181__$1 = (function (){var statearr_35190 = state_35181;
(statearr_35190[(12)] = inst_35172);

(statearr_35190[(8)] = inst_35161);

return statearr_35190;
})();
var statearr_35191_35205 = state_35181__$1;
(statearr_35191_35205[(2)] = null);

(statearr_35191_35205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22242__auto___35199,out))
;
return ((function (switch__22177__auto__,c__22242__auto___35199,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto____0 = (function (){
var statearr_35195 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35195[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto__);

(statearr_35195[(1)] = (1));

return statearr_35195;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto____1 = (function (state_35181){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_35181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e35196){if((e35196 instanceof Object)){
var ex__22181__auto__ = e35196;
var statearr_35197_35206 = state_35181;
(statearr_35197_35206[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35207 = state_35181;
state_35181 = G__35207;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto__ = function(state_35181){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto____1.call(this,state_35181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto___35199,out))
})();
var state__22244__auto__ = (function (){var statearr_35198 = f__22243__auto__.call(null);
(statearr_35198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto___35199);

return statearr_35198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto___35199,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35208,opts){
var map__35212 = p__35208;
var map__35212__$1 = ((((!((map__35212 == null)))?((((map__35212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35212):map__35212);
var eval_body__$1 = cljs.core.get.call(null,map__35212__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35212__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__19150__auto__ = eval_body__$1;
if(cljs.core.truth_(and__19150__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__19150__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35214){var e = e35214;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35215_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35215_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35220){
var vec__35221 = p__35220;
var k = cljs.core.nth.call(null,vec__35221,(0),null);
var v = cljs.core.nth.call(null,vec__35221,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35222){
var vec__35223 = p__35222;
var k = cljs.core.nth.call(null,vec__35223,(0),null);
var v = cljs.core.nth.call(null,vec__35223,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35227,p__35228){
var map__35475 = p__35227;
var map__35475__$1 = ((((!((map__35475 == null)))?((((map__35475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35475):map__35475);
var opts = map__35475__$1;
var before_jsload = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35475__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35476 = p__35228;
var map__35476__$1 = ((((!((map__35476 == null)))?((((map__35476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35476):map__35476);
var msg = map__35476__$1;
var files = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35476__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22242__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22243__auto__ = (function (){var switch__22177__auto__ = ((function (c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35629){
var state_val_35630 = (state_35629[(1)]);
if((state_val_35630 === (7))){
var inst_35491 = (state_35629[(7)]);
var inst_35490 = (state_35629[(8)]);
var inst_35492 = (state_35629[(9)]);
var inst_35493 = (state_35629[(10)]);
var inst_35498 = cljs.core._nth.call(null,inst_35491,inst_35493);
var inst_35499 = figwheel.client.file_reloading.eval_body.call(null,inst_35498,opts);
var inst_35500 = (inst_35493 + (1));
var tmp35631 = inst_35491;
var tmp35632 = inst_35490;
var tmp35633 = inst_35492;
var inst_35490__$1 = tmp35632;
var inst_35491__$1 = tmp35631;
var inst_35492__$1 = tmp35633;
var inst_35493__$1 = inst_35500;
var state_35629__$1 = (function (){var statearr_35634 = state_35629;
(statearr_35634[(7)] = inst_35491__$1);

(statearr_35634[(8)] = inst_35490__$1);

(statearr_35634[(9)] = inst_35492__$1);

(statearr_35634[(10)] = inst_35493__$1);

(statearr_35634[(11)] = inst_35499);

return statearr_35634;
})();
var statearr_35635_35721 = state_35629__$1;
(statearr_35635_35721[(2)] = null);

(statearr_35635_35721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (20))){
var inst_35533 = (state_35629[(12)]);
var inst_35541 = figwheel.client.file_reloading.sort_files.call(null,inst_35533);
var state_35629__$1 = state_35629;
var statearr_35636_35722 = state_35629__$1;
(statearr_35636_35722[(2)] = inst_35541);

(statearr_35636_35722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (27))){
var state_35629__$1 = state_35629;
var statearr_35637_35723 = state_35629__$1;
(statearr_35637_35723[(2)] = null);

(statearr_35637_35723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (1))){
var inst_35482 = (state_35629[(13)]);
var inst_35479 = before_jsload.call(null,files);
var inst_35480 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35481 = (function (){return ((function (inst_35482,inst_35479,inst_35480,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35224_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35224_SHARP_);
});
;})(inst_35482,inst_35479,inst_35480,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35482__$1 = cljs.core.filter.call(null,inst_35481,files);
var inst_35483 = cljs.core.not_empty.call(null,inst_35482__$1);
var state_35629__$1 = (function (){var statearr_35638 = state_35629;
(statearr_35638[(14)] = inst_35480);

(statearr_35638[(13)] = inst_35482__$1);

(statearr_35638[(15)] = inst_35479);

return statearr_35638;
})();
if(cljs.core.truth_(inst_35483)){
var statearr_35639_35724 = state_35629__$1;
(statearr_35639_35724[(1)] = (2));

} else {
var statearr_35640_35725 = state_35629__$1;
(statearr_35640_35725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (24))){
var state_35629__$1 = state_35629;
var statearr_35641_35726 = state_35629__$1;
(statearr_35641_35726[(2)] = null);

(statearr_35641_35726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (39))){
var inst_35583 = (state_35629[(16)]);
var state_35629__$1 = state_35629;
var statearr_35642_35727 = state_35629__$1;
(statearr_35642_35727[(2)] = inst_35583);

(statearr_35642_35727[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (46))){
var inst_35624 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35643_35728 = state_35629__$1;
(statearr_35643_35728[(2)] = inst_35624);

(statearr_35643_35728[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (4))){
var inst_35527 = (state_35629[(2)]);
var inst_35528 = cljs.core.List.EMPTY;
var inst_35529 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35528);
var inst_35530 = (function (){return ((function (inst_35527,inst_35528,inst_35529,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35225_SHARP_){
var and__19150__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35225_SHARP_);
if(cljs.core.truth_(and__19150__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35225_SHARP_));
} else {
return and__19150__auto__;
}
});
;})(inst_35527,inst_35528,inst_35529,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35531 = cljs.core.filter.call(null,inst_35530,files);
var inst_35532 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35533 = cljs.core.concat.call(null,inst_35531,inst_35532);
var state_35629__$1 = (function (){var statearr_35644 = state_35629;
(statearr_35644[(12)] = inst_35533);

(statearr_35644[(17)] = inst_35529);

(statearr_35644[(18)] = inst_35527);

return statearr_35644;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35645_35729 = state_35629__$1;
(statearr_35645_35729[(1)] = (16));

} else {
var statearr_35646_35730 = state_35629__$1;
(statearr_35646_35730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (15))){
var inst_35517 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35647_35731 = state_35629__$1;
(statearr_35647_35731[(2)] = inst_35517);

(statearr_35647_35731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (21))){
var inst_35543 = (state_35629[(19)]);
var inst_35543__$1 = (state_35629[(2)]);
var inst_35544 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35543__$1);
var state_35629__$1 = (function (){var statearr_35648 = state_35629;
(statearr_35648[(19)] = inst_35543__$1);

return statearr_35648;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35629__$1,(22),inst_35544);
} else {
if((state_val_35630 === (31))){
var inst_35627 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35629__$1,inst_35627);
} else {
if((state_val_35630 === (32))){
var inst_35583 = (state_35629[(16)]);
var inst_35588 = inst_35583.cljs$lang$protocol_mask$partition0$;
var inst_35589 = (inst_35588 & (64));
var inst_35590 = inst_35583.cljs$core$ISeq$;
var inst_35591 = (inst_35589) || (inst_35590);
var state_35629__$1 = state_35629;
if(cljs.core.truth_(inst_35591)){
var statearr_35649_35732 = state_35629__$1;
(statearr_35649_35732[(1)] = (35));

} else {
var statearr_35650_35733 = state_35629__$1;
(statearr_35650_35733[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (40))){
var inst_35604 = (state_35629[(20)]);
var inst_35603 = (state_35629[(2)]);
var inst_35604__$1 = cljs.core.get.call(null,inst_35603,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35605 = cljs.core.get.call(null,inst_35603,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35606 = cljs.core.not_empty.call(null,inst_35604__$1);
var state_35629__$1 = (function (){var statearr_35651 = state_35629;
(statearr_35651[(21)] = inst_35605);

(statearr_35651[(20)] = inst_35604__$1);

return statearr_35651;
})();
if(cljs.core.truth_(inst_35606)){
var statearr_35652_35734 = state_35629__$1;
(statearr_35652_35734[(1)] = (41));

} else {
var statearr_35653_35735 = state_35629__$1;
(statearr_35653_35735[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (33))){
var state_35629__$1 = state_35629;
var statearr_35654_35736 = state_35629__$1;
(statearr_35654_35736[(2)] = false);

(statearr_35654_35736[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (13))){
var inst_35503 = (state_35629[(22)]);
var inst_35507 = cljs.core.chunk_first.call(null,inst_35503);
var inst_35508 = cljs.core.chunk_rest.call(null,inst_35503);
var inst_35509 = cljs.core.count.call(null,inst_35507);
var inst_35490 = inst_35508;
var inst_35491 = inst_35507;
var inst_35492 = inst_35509;
var inst_35493 = (0);
var state_35629__$1 = (function (){var statearr_35655 = state_35629;
(statearr_35655[(7)] = inst_35491);

(statearr_35655[(8)] = inst_35490);

(statearr_35655[(9)] = inst_35492);

(statearr_35655[(10)] = inst_35493);

return statearr_35655;
})();
var statearr_35656_35737 = state_35629__$1;
(statearr_35656_35737[(2)] = null);

(statearr_35656_35737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (22))){
var inst_35546 = (state_35629[(23)]);
var inst_35547 = (state_35629[(24)]);
var inst_35543 = (state_35629[(19)]);
var inst_35551 = (state_35629[(25)]);
var inst_35546__$1 = (state_35629[(2)]);
var inst_35547__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35546__$1);
var inst_35548 = (function (){var all_files = inst_35543;
var res_SINGLEQUOTE_ = inst_35546__$1;
var res = inst_35547__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35546,inst_35547,inst_35543,inst_35551,inst_35546__$1,inst_35547__$1,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35226_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35226_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35546,inst_35547,inst_35543,inst_35551,inst_35546__$1,inst_35547__$1,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35549 = cljs.core.filter.call(null,inst_35548,inst_35546__$1);
var inst_35550 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35551__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35550);
var inst_35552 = cljs.core.not_empty.call(null,inst_35551__$1);
var state_35629__$1 = (function (){var statearr_35657 = state_35629;
(statearr_35657[(26)] = inst_35549);

(statearr_35657[(23)] = inst_35546__$1);

(statearr_35657[(24)] = inst_35547__$1);

(statearr_35657[(25)] = inst_35551__$1);

return statearr_35657;
})();
if(cljs.core.truth_(inst_35552)){
var statearr_35658_35738 = state_35629__$1;
(statearr_35658_35738[(1)] = (23));

} else {
var statearr_35659_35739 = state_35629__$1;
(statearr_35659_35739[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (36))){
var state_35629__$1 = state_35629;
var statearr_35660_35740 = state_35629__$1;
(statearr_35660_35740[(2)] = false);

(statearr_35660_35740[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (41))){
var inst_35604 = (state_35629[(20)]);
var inst_35608 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35609 = cljs.core.map.call(null,inst_35608,inst_35604);
var inst_35610 = cljs.core.pr_str.call(null,inst_35609);
var inst_35611 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35610)].join('');
var inst_35612 = figwheel.client.utils.log.call(null,inst_35611);
var state_35629__$1 = state_35629;
var statearr_35661_35741 = state_35629__$1;
(statearr_35661_35741[(2)] = inst_35612);

(statearr_35661_35741[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (43))){
var inst_35605 = (state_35629[(21)]);
var inst_35615 = (state_35629[(2)]);
var inst_35616 = cljs.core.not_empty.call(null,inst_35605);
var state_35629__$1 = (function (){var statearr_35662 = state_35629;
(statearr_35662[(27)] = inst_35615);

return statearr_35662;
})();
if(cljs.core.truth_(inst_35616)){
var statearr_35663_35742 = state_35629__$1;
(statearr_35663_35742[(1)] = (44));

} else {
var statearr_35664_35743 = state_35629__$1;
(statearr_35664_35743[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (29))){
var inst_35549 = (state_35629[(26)]);
var inst_35546 = (state_35629[(23)]);
var inst_35547 = (state_35629[(24)]);
var inst_35583 = (state_35629[(16)]);
var inst_35543 = (state_35629[(19)]);
var inst_35551 = (state_35629[(25)]);
var inst_35579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35582 = (function (){var all_files = inst_35543;
var res_SINGLEQUOTE_ = inst_35546;
var res = inst_35547;
var files_not_loaded = inst_35549;
var dependencies_that_loaded = inst_35551;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35549,inst_35546,inst_35547,inst_35583,inst_35543,inst_35551,inst_35579,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35581){
var map__35665 = p__35581;
var map__35665__$1 = ((((!((map__35665 == null)))?((((map__35665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35665):map__35665);
var namespace = cljs.core.get.call(null,map__35665__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35549,inst_35546,inst_35547,inst_35583,inst_35543,inst_35551,inst_35579,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35583__$1 = cljs.core.group_by.call(null,inst_35582,inst_35549);
var inst_35585 = (inst_35583__$1 == null);
var inst_35586 = cljs.core.not.call(null,inst_35585);
var state_35629__$1 = (function (){var statearr_35667 = state_35629;
(statearr_35667[(16)] = inst_35583__$1);

(statearr_35667[(28)] = inst_35579);

return statearr_35667;
})();
if(inst_35586){
var statearr_35668_35744 = state_35629__$1;
(statearr_35668_35744[(1)] = (32));

} else {
var statearr_35669_35745 = state_35629__$1;
(statearr_35669_35745[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (44))){
var inst_35605 = (state_35629[(21)]);
var inst_35618 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35605);
var inst_35619 = cljs.core.pr_str.call(null,inst_35618);
var inst_35620 = [cljs.core.str("not required: "),cljs.core.str(inst_35619)].join('');
var inst_35621 = figwheel.client.utils.log.call(null,inst_35620);
var state_35629__$1 = state_35629;
var statearr_35670_35746 = state_35629__$1;
(statearr_35670_35746[(2)] = inst_35621);

(statearr_35670_35746[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (6))){
var inst_35524 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35671_35747 = state_35629__$1;
(statearr_35671_35747[(2)] = inst_35524);

(statearr_35671_35747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (28))){
var inst_35549 = (state_35629[(26)]);
var inst_35576 = (state_35629[(2)]);
var inst_35577 = cljs.core.not_empty.call(null,inst_35549);
var state_35629__$1 = (function (){var statearr_35672 = state_35629;
(statearr_35672[(29)] = inst_35576);

return statearr_35672;
})();
if(cljs.core.truth_(inst_35577)){
var statearr_35673_35748 = state_35629__$1;
(statearr_35673_35748[(1)] = (29));

} else {
var statearr_35674_35749 = state_35629__$1;
(statearr_35674_35749[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (25))){
var inst_35547 = (state_35629[(24)]);
var inst_35563 = (state_35629[(2)]);
var inst_35564 = cljs.core.not_empty.call(null,inst_35547);
var state_35629__$1 = (function (){var statearr_35675 = state_35629;
(statearr_35675[(30)] = inst_35563);

return statearr_35675;
})();
if(cljs.core.truth_(inst_35564)){
var statearr_35676_35750 = state_35629__$1;
(statearr_35676_35750[(1)] = (26));

} else {
var statearr_35677_35751 = state_35629__$1;
(statearr_35677_35751[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (34))){
var inst_35598 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
if(cljs.core.truth_(inst_35598)){
var statearr_35678_35752 = state_35629__$1;
(statearr_35678_35752[(1)] = (38));

} else {
var statearr_35679_35753 = state_35629__$1;
(statearr_35679_35753[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (17))){
var state_35629__$1 = state_35629;
var statearr_35680_35754 = state_35629__$1;
(statearr_35680_35754[(2)] = recompile_dependents);

(statearr_35680_35754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (3))){
var state_35629__$1 = state_35629;
var statearr_35681_35755 = state_35629__$1;
(statearr_35681_35755[(2)] = null);

(statearr_35681_35755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (12))){
var inst_35520 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35682_35756 = state_35629__$1;
(statearr_35682_35756[(2)] = inst_35520);

(statearr_35682_35756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (2))){
var inst_35482 = (state_35629[(13)]);
var inst_35489 = cljs.core.seq.call(null,inst_35482);
var inst_35490 = inst_35489;
var inst_35491 = null;
var inst_35492 = (0);
var inst_35493 = (0);
var state_35629__$1 = (function (){var statearr_35683 = state_35629;
(statearr_35683[(7)] = inst_35491);

(statearr_35683[(8)] = inst_35490);

(statearr_35683[(9)] = inst_35492);

(statearr_35683[(10)] = inst_35493);

return statearr_35683;
})();
var statearr_35684_35757 = state_35629__$1;
(statearr_35684_35757[(2)] = null);

(statearr_35684_35757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (23))){
var inst_35549 = (state_35629[(26)]);
var inst_35546 = (state_35629[(23)]);
var inst_35547 = (state_35629[(24)]);
var inst_35543 = (state_35629[(19)]);
var inst_35551 = (state_35629[(25)]);
var inst_35554 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35556 = (function (){var all_files = inst_35543;
var res_SINGLEQUOTE_ = inst_35546;
var res = inst_35547;
var files_not_loaded = inst_35549;
var dependencies_that_loaded = inst_35551;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35549,inst_35546,inst_35547,inst_35543,inst_35551,inst_35554,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35555){
var map__35685 = p__35555;
var map__35685__$1 = ((((!((map__35685 == null)))?((((map__35685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35685):map__35685);
var request_url = cljs.core.get.call(null,map__35685__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35549,inst_35546,inst_35547,inst_35543,inst_35551,inst_35554,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35557 = cljs.core.reverse.call(null,inst_35551);
var inst_35558 = cljs.core.map.call(null,inst_35556,inst_35557);
var inst_35559 = cljs.core.pr_str.call(null,inst_35558);
var inst_35560 = figwheel.client.utils.log.call(null,inst_35559);
var state_35629__$1 = (function (){var statearr_35687 = state_35629;
(statearr_35687[(31)] = inst_35554);

return statearr_35687;
})();
var statearr_35688_35758 = state_35629__$1;
(statearr_35688_35758[(2)] = inst_35560);

(statearr_35688_35758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (35))){
var state_35629__$1 = state_35629;
var statearr_35689_35759 = state_35629__$1;
(statearr_35689_35759[(2)] = true);

(statearr_35689_35759[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (19))){
var inst_35533 = (state_35629[(12)]);
var inst_35539 = figwheel.client.file_reloading.expand_files.call(null,inst_35533);
var state_35629__$1 = state_35629;
var statearr_35690_35760 = state_35629__$1;
(statearr_35690_35760[(2)] = inst_35539);

(statearr_35690_35760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (11))){
var state_35629__$1 = state_35629;
var statearr_35691_35761 = state_35629__$1;
(statearr_35691_35761[(2)] = null);

(statearr_35691_35761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (9))){
var inst_35522 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35692_35762 = state_35629__$1;
(statearr_35692_35762[(2)] = inst_35522);

(statearr_35692_35762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (5))){
var inst_35492 = (state_35629[(9)]);
var inst_35493 = (state_35629[(10)]);
var inst_35495 = (inst_35493 < inst_35492);
var inst_35496 = inst_35495;
var state_35629__$1 = state_35629;
if(cljs.core.truth_(inst_35496)){
var statearr_35693_35763 = state_35629__$1;
(statearr_35693_35763[(1)] = (7));

} else {
var statearr_35694_35764 = state_35629__$1;
(statearr_35694_35764[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (14))){
var inst_35503 = (state_35629[(22)]);
var inst_35512 = cljs.core.first.call(null,inst_35503);
var inst_35513 = figwheel.client.file_reloading.eval_body.call(null,inst_35512,opts);
var inst_35514 = cljs.core.next.call(null,inst_35503);
var inst_35490 = inst_35514;
var inst_35491 = null;
var inst_35492 = (0);
var inst_35493 = (0);
var state_35629__$1 = (function (){var statearr_35695 = state_35629;
(statearr_35695[(7)] = inst_35491);

(statearr_35695[(8)] = inst_35490);

(statearr_35695[(9)] = inst_35492);

(statearr_35695[(10)] = inst_35493);

(statearr_35695[(32)] = inst_35513);

return statearr_35695;
})();
var statearr_35696_35765 = state_35629__$1;
(statearr_35696_35765[(2)] = null);

(statearr_35696_35765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (45))){
var state_35629__$1 = state_35629;
var statearr_35697_35766 = state_35629__$1;
(statearr_35697_35766[(2)] = null);

(statearr_35697_35766[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (26))){
var inst_35549 = (state_35629[(26)]);
var inst_35546 = (state_35629[(23)]);
var inst_35547 = (state_35629[(24)]);
var inst_35543 = (state_35629[(19)]);
var inst_35551 = (state_35629[(25)]);
var inst_35566 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35568 = (function (){var all_files = inst_35543;
var res_SINGLEQUOTE_ = inst_35546;
var res = inst_35547;
var files_not_loaded = inst_35549;
var dependencies_that_loaded = inst_35551;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35549,inst_35546,inst_35547,inst_35543,inst_35551,inst_35566,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35567){
var map__35698 = p__35567;
var map__35698__$1 = ((((!((map__35698 == null)))?((((map__35698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35698):map__35698);
var namespace = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35549,inst_35546,inst_35547,inst_35543,inst_35551,inst_35566,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35569 = cljs.core.map.call(null,inst_35568,inst_35547);
var inst_35570 = cljs.core.pr_str.call(null,inst_35569);
var inst_35571 = figwheel.client.utils.log.call(null,inst_35570);
var inst_35572 = (function (){var all_files = inst_35543;
var res_SINGLEQUOTE_ = inst_35546;
var res = inst_35547;
var files_not_loaded = inst_35549;
var dependencies_that_loaded = inst_35551;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35549,inst_35546,inst_35547,inst_35543,inst_35551,inst_35566,inst_35568,inst_35569,inst_35570,inst_35571,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35549,inst_35546,inst_35547,inst_35543,inst_35551,inst_35566,inst_35568,inst_35569,inst_35570,inst_35571,state_val_35630,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35573 = setTimeout(inst_35572,(10));
var state_35629__$1 = (function (){var statearr_35700 = state_35629;
(statearr_35700[(33)] = inst_35571);

(statearr_35700[(34)] = inst_35566);

return statearr_35700;
})();
var statearr_35701_35767 = state_35629__$1;
(statearr_35701_35767[(2)] = inst_35573);

(statearr_35701_35767[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (16))){
var state_35629__$1 = state_35629;
var statearr_35702_35768 = state_35629__$1;
(statearr_35702_35768[(2)] = reload_dependents);

(statearr_35702_35768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (38))){
var inst_35583 = (state_35629[(16)]);
var inst_35600 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35583);
var state_35629__$1 = state_35629;
var statearr_35703_35769 = state_35629__$1;
(statearr_35703_35769[(2)] = inst_35600);

(statearr_35703_35769[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (30))){
var state_35629__$1 = state_35629;
var statearr_35704_35770 = state_35629__$1;
(statearr_35704_35770[(2)] = null);

(statearr_35704_35770[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (10))){
var inst_35503 = (state_35629[(22)]);
var inst_35505 = cljs.core.chunked_seq_QMARK_.call(null,inst_35503);
var state_35629__$1 = state_35629;
if(inst_35505){
var statearr_35705_35771 = state_35629__$1;
(statearr_35705_35771[(1)] = (13));

} else {
var statearr_35706_35772 = state_35629__$1;
(statearr_35706_35772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (18))){
var inst_35537 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
if(cljs.core.truth_(inst_35537)){
var statearr_35707_35773 = state_35629__$1;
(statearr_35707_35773[(1)] = (19));

} else {
var statearr_35708_35774 = state_35629__$1;
(statearr_35708_35774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (42))){
var state_35629__$1 = state_35629;
var statearr_35709_35775 = state_35629__$1;
(statearr_35709_35775[(2)] = null);

(statearr_35709_35775[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (37))){
var inst_35595 = (state_35629[(2)]);
var state_35629__$1 = state_35629;
var statearr_35710_35776 = state_35629__$1;
(statearr_35710_35776[(2)] = inst_35595);

(statearr_35710_35776[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35630 === (8))){
var inst_35503 = (state_35629[(22)]);
var inst_35490 = (state_35629[(8)]);
var inst_35503__$1 = cljs.core.seq.call(null,inst_35490);
var state_35629__$1 = (function (){var statearr_35711 = state_35629;
(statearr_35711[(22)] = inst_35503__$1);

return statearr_35711;
})();
if(inst_35503__$1){
var statearr_35712_35777 = state_35629__$1;
(statearr_35712_35777[(1)] = (10));

} else {
var statearr_35713_35778 = state_35629__$1;
(statearr_35713_35778[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22177__auto__,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto____0 = (function (){
var statearr_35717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35717[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto__);

(statearr_35717[(1)] = (1));

return statearr_35717;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto____1 = (function (state_35629){
while(true){
var ret_value__22179__auto__ = (function (){try{while(true){
var result__22180__auto__ = switch__22177__auto__.call(null,state_35629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22180__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22180__auto__;
}
break;
}
}catch (e35718){if((e35718 instanceof Object)){
var ex__22181__auto__ = e35718;
var statearr_35719_35779 = state_35629;
(statearr_35719_35779[(5)] = ex__22181__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22179__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35780 = state_35629;
state_35629 = G__35780;
continue;
} else {
return ret_value__22179__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto__ = function(state_35629){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto____1.call(this,state_35629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22178__auto__;
})()
;})(switch__22177__auto__,c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22244__auto__ = (function (){var statearr_35720 = f__22243__auto__.call(null);
(statearr_35720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22242__auto__);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22244__auto__);
});})(c__22242__auto__,map__35475,map__35475__$1,opts,before_jsload,on_jsload,reload_dependents,map__35476,map__35476__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22242__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35783,link){
var map__35786 = p__35783;
var map__35786__$1 = ((((!((map__35786 == null)))?((((map__35786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35786):map__35786);
var file = cljs.core.get.call(null,map__35786__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35786,map__35786__$1,file){
return (function (p1__35781_SHARP_,p2__35782_SHARP_){
if(cljs.core._EQ_.call(null,p1__35781_SHARP_,p2__35782_SHARP_)){
return p1__35781_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35786,map__35786__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35792){
var map__35793 = p__35792;
var map__35793__$1 = ((((!((map__35793 == null)))?((((map__35793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35793):map__35793);
var match_length = cljs.core.get.call(null,map__35793__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35793__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35788_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35788_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args35795 = [];
var len__20220__auto___35798 = arguments.length;
var i__20221__auto___35799 = (0);
while(true){
if((i__20221__auto___35799 < len__20220__auto___35798)){
args35795.push((arguments[i__20221__auto___35799]));

var G__35800 = (i__20221__auto___35799 + (1));
i__20221__auto___35799 = G__35800;
continue;
} else {
}
break;
}

var G__35797 = args35795.length;
switch (G__35797) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35795.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35802_SHARP_,p2__35803_SHARP_){
return cljs.core.assoc.call(null,p1__35802_SHARP_,cljs.core.get.call(null,p2__35803_SHARP_,key),p2__35803_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35804){
var map__35807 = p__35804;
var map__35807__$1 = ((((!((map__35807 == null)))?((((map__35807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35807):map__35807);
var f_data = map__35807__$1;
var file = cljs.core.get.call(null,map__35807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35809,files_msg){
var map__35816 = p__35809;
var map__35816__$1 = ((((!((map__35816 == null)))?((((map__35816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35816):map__35816);
var opts = map__35816__$1;
var on_cssload = cljs.core.get.call(null,map__35816__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35818_35822 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35819_35823 = null;
var count__35820_35824 = (0);
var i__35821_35825 = (0);
while(true){
if((i__35821_35825 < count__35820_35824)){
var f_35826 = cljs.core._nth.call(null,chunk__35819_35823,i__35821_35825);
figwheel.client.file_reloading.reload_css_file.call(null,f_35826);

var G__35827 = seq__35818_35822;
var G__35828 = chunk__35819_35823;
var G__35829 = count__35820_35824;
var G__35830 = (i__35821_35825 + (1));
seq__35818_35822 = G__35827;
chunk__35819_35823 = G__35828;
count__35820_35824 = G__35829;
i__35821_35825 = G__35830;
continue;
} else {
var temp__4425__auto___35831 = cljs.core.seq.call(null,seq__35818_35822);
if(temp__4425__auto___35831){
var seq__35818_35832__$1 = temp__4425__auto___35831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35818_35832__$1)){
var c__19965__auto___35833 = cljs.core.chunk_first.call(null,seq__35818_35832__$1);
var G__35834 = cljs.core.chunk_rest.call(null,seq__35818_35832__$1);
var G__35835 = c__19965__auto___35833;
var G__35836 = cljs.core.count.call(null,c__19965__auto___35833);
var G__35837 = (0);
seq__35818_35822 = G__35834;
chunk__35819_35823 = G__35835;
count__35820_35824 = G__35836;
i__35821_35825 = G__35837;
continue;
} else {
var f_35838 = cljs.core.first.call(null,seq__35818_35832__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35838);

var G__35839 = cljs.core.next.call(null,seq__35818_35832__$1);
var G__35840 = null;
var G__35841 = (0);
var G__35842 = (0);
seq__35818_35822 = G__35839;
chunk__35819_35823 = G__35840;
count__35820_35824 = G__35841;
i__35821_35825 = G__35842;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__35816,map__35816__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__35816,map__35816__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map