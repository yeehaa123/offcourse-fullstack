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
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__46751_SHARP_){
return clojure.string.capitalize.call(null,p1__46751_SHARP_);
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
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.take.call(null,offcourse.fake_data.index.rand_int_between.call(null,(0),(5)),cljs.core.shuffle.call(null,offcourse.fake_data.buzzwords.buzzwords)));
});
offcourse.fake_data.index.course = cljs.core.rand_nth.call(null,offcourse.fake_data.courses.raw_courses);
offcourse.fake_data.index.generate_user = (function offcourse$fake_data$index$generate_user(){
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yeehaa","greg","r2j2","reika","charlotte","marijn"], null));
});
offcourse.fake_data.index.index_checkpoint = (function offcourse$fake_data$index$index_checkpoint(index,p__46752){
var map__46755 = p__46752;
var map__46755__$1 = ((((!((map__46755 == null)))?((((map__46755.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46755.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46755):map__46755);
var task = cljs.core.get.call(null,map__46755__$1,new cljs.core.Keyword(null,"task","task",-1476607993));
var completed = cljs.core.get.call(null,map__46755__$1,new cljs.core.Keyword(null,"completed","completed",-486056503));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checkpoint-id","checkpoint-id",818101839),index,new cljs.core.Keyword(null,"task","task",-1476607993),task,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.rand_nth.call(null,offcourse.fake_data.index.urls),new cljs.core.Keyword(null,"completed","completed",-486056503),completed], null)], null);
});
offcourse.fake_data.index.index_checkpoints = (function offcourse$fake_data$index$index_checkpoints(checkpoints){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (p1__46757_SHARP_,p2__46758_SHARP_){
return offcourse.fake_data.index.index_checkpoint.call(null,p1__46757_SHARP_,p2__46758_SHARP_);
}),checkpoints));
});
offcourse.fake_data.index.generate_course = (function offcourse$fake_data$index$generate_course(id,curator){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,offcourse.fake_data.index.course,new cljs.core.Keyword(null,"course-id","course-id",-390190405),id),new cljs.core.Keyword(null,"curator","curator",-553328342),curator),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"checkpoints","checkpoints",-358636145)], null),offcourse.fake_data.index.index_checkpoints);
});
offcourse.fake_data.index.courses = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (id,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,offcourse.fake_data.index.generate_course.call(null,id,offcourse.fake_data.index.generate_user.call(null))], null);
}),cljs.core.take.call(null,(20),cljs.core.iterate.call(null,cljs.core.inc,(1)))));
