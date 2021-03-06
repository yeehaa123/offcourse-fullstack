// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.fake_data.index');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('faker.lorem');
goog.require('offcourse.fake_data.buzzwords');
goog.require('offcourse.fake_data.courses');
offcourse.fake_data.index.checkpoint = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"task","task",-1476607993),"Do Something Different",new cljs.core.Keyword(null,"url","url",276297046),"bla.com",new cljs.core.Keyword(null,"completed","completed",-486056503),false], null);
offcourse.fake_data.index.urls = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["facebook.com","google.com","yahoo.com","offcourse.io"], null);
offcourse.fake_data.index.rand_int_between = (function offcourse$fake_data$index$rand_int_between(min,max){
var dev = (max - min);
return (cljs.core.rand_int.call(null,dev) + min);
});
offcourse.fake_data.index.make_title = (function offcourse$fake_data$index$make_title(){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__50513_SHARP_){
return clojure.string.capitalize.call(null,p1__50513_SHARP_);
}),cljs.core.take.call(null,offcourse.fake_data.index.rand_int_between.call(null,(3),(8)),faker.lorem.words.call(null))));
});
offcourse.fake_data.index.body = cljs.core.take.call(null,offcourse.fake_data.index.rand_int_between.call(null,(10),(40)),faker.lorem.paragraphs.call(null,offcourse.fake_data.index.rand_int_between.call(null,(8),(15))));
offcourse.fake_data.index.make_text = (function offcourse$fake_data$index$make_text(title){
return clojure.string.join.call(null,"\n\n",cljs.core.conj.call(null,offcourse.fake_data.index.body,[cljs.core.str("# "),cljs.core.str(title)].join('')));
});
offcourse.fake_data.index.generate_content = (function offcourse$fake_data$index$generate_content(){
var title = offcourse.fake_data.index.make_title.call(null);
var text = offcourse.fake_data.index.make_text.call(null,title);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"text","text",-1790561697),text], null);
});
offcourse.fake_data.index.set_of_buzzwords = (function offcourse$fake_data$index$set_of_buzzwords(min,max){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__50514_SHARP_){
return clojure.string.lower_case.call(null,p1__50514_SHARP_);
}),cljs.core.take.call(null,offcourse.fake_data.index.rand_int_between.call(null,min,max),cljs.core.shuffle.call(null,offcourse.fake_data.buzzwords.buzzwords))));
});
offcourse.fake_data.index.course = (function offcourse$fake_data$index$course(){
return cljs.core.rand_nth.call(null,offcourse.fake_data.courses.raw_courses);
});
offcourse.fake_data.index.flags = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"featured","featured",1584623723),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"popular","popular",-752193652)], null);
offcourse.fake_data.index.generate_flags = (function offcourse$fake_data$index$generate_flags(){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,cljs.core.rand_int.call(null,(4)),cljs.core.shuffle.call(null,offcourse.fake_data.index.flags)));
});
offcourse.fake_data.index.users = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yeehaa","greg","r2j2","reika","charlotte","marijn"], null);
offcourse.fake_data.index.generate_user = (function offcourse$fake_data$index$generate_user(){
return cljs.core.rand_nth.call(null,offcourse.fake_data.index.users);
});
offcourse.fake_data.index.index_checkpoint = (function offcourse$fake_data$index$index_checkpoint(index,p__50515){
var map__50518 = p__50515;
var map__50518__$1 = ((((!((map__50518 == null)))?((((map__50518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50518):map__50518);
var task = cljs.core.get.call(null,map__50518__$1,new cljs.core.Keyword(null,"task","task",-1476607993));
var completed = cljs.core.get.call(null,map__50518__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),index,new cljs.core.Keyword(null,"task","task",-1476607993),task,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.rand_nth.call(null,offcourse.fake_data.index.urls),new cljs.core.Keyword(null,"completed","completed",-486056503),completed,new cljs.core.Keyword(null,"tags","tags",1771418977),offcourse.fake_data.index.set_of_buzzwords.call(null,(0),(5))], null)], null);
});
offcourse.fake_data.index.index_checkpoints = (function offcourse$fake_data$index$index_checkpoints(checkpoints){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (p1__50520_SHARP_,p2__50521_SHARP_){
return offcourse.fake_data.index.index_checkpoint.call(null,p1__50520_SHARP_,p2__50521_SHARP_);
}),checkpoints));
});
offcourse.fake_data.index.generate_course = (function offcourse$fake_data$index$generate_course(id,curator){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,offcourse.fake_data.index.course.call(null),new cljs.core.Keyword(null,"course-id","course-id",-390190405),id),new cljs.core.Keyword(null,"curator","curator",-553328342),curator),new cljs.core.Keyword(null,"flags","flags",1775418075),offcourse.fake_data.index.generate_flags.call(null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)], null),offcourse.fake_data.index.index_checkpoints);
});
offcourse.fake_data.index.courses = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (id,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,offcourse.fake_data.index.generate_course.call(null,id,offcourse.fake_data.index.generate_user.call(null))], null);
}),cljs.core.take.call(null,(30),cljs.core.iterate.call(null,cljs.core.inc,(1)))));
offcourse.fake_data.index.raw_collections = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"featured","featured",1584623723),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,(10),cljs.core.iterate.call(null,cljs.core.inc,(1))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popular","popular",-752193652),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,(5),cljs.core.iterate.call(null,cljs.core.inc,(2))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new","new",-2085437848),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,(4),cljs.core.iterate.call(null,cljs.core.inc,(4))))], null)], null);
offcourse.fake_data.index.named_collections = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__50522){
var vec__50523 = p__50522;
var collection_name = cljs.core.nth.call(null,vec__50523,(0),null);
var collection_ids = cljs.core.nth.call(null,vec__50523,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [collection_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"collection-name","collection-name",600435477),collection_name,new cljs.core.Keyword(null,"collection-type","collection-type",-448917118),new cljs.core.Keyword(null,"flag-collection","flag-collection",1174801399),new cljs.core.Keyword(null,"collection-ids","collection-ids",-1373265385),collection_ids], null)], null);
}),offcourse.fake_data.index.raw_collections));
offcourse.fake_data.index.named_collection = (function offcourse$fake_data$index$named_collection(collection_name){
return collection_name.call(null,offcourse.fake_data.index.named_collections);
});
