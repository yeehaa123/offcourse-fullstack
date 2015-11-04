// Compiled by ClojureScript 1.7.145 {}
goog.provide('faker.lorem');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('faker.lorem_data');
/**
 * Lazy sequence of random latin words
 */
faker.lorem.words = (function faker$lorem$words(){
return cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_nth.call(null,faker.lorem_data.latin_words);
}));
});
/**
 * Lazy sequence of random latin sentences.
 * 
 *   (sentences 5) will generate a sequence of random sentences between
 *   5 and 5 + 5 words.
 *   (sentences) will generate random sentences between 4 and 4 + 5 words.
 */
faker.lorem.sentences = (function faker$lorem$sentences(var_args){
var args52866 = [];
var len__20222__auto___52869 = arguments.length;
var i__20223__auto___52870 = (0);
while(true){
if((i__20223__auto___52870 < len__20222__auto___52869)){
args52866.push((arguments[i__20223__auto___52870]));

var G__52871 = (i__20223__auto___52870 + (1));
i__20223__auto___52870 = G__52871;
continue;
} else {
}
break;
}

var G__52868 = args52866.length;
switch (G__52868) {
case 0:
return faker.lorem.sentences.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return faker.lorem.sentences.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52866.length)].join('')));

}
});

faker.lorem.sentences.cljs$core$IFn$_invoke$arity$0 = (function (){
return faker.lorem.sentences.call(null,(4));
});

faker.lorem.sentences.cljs$core$IFn$_invoke$arity$1 = (function (word_count){
return cljs.core.map.call(null,(function (n){
return [cljs.core.str(clojure.string.capitalize.call(null,clojure.string.join.call(null," ",cljs.core.take.call(null,n,faker.lorem.words.call(null))))),cljs.core.str(".")].join('');
}),cljs.core.repeatedly.call(null,(function (){
return (word_count + cljs.core.rand_int.call(null,(6)));
})));
});

faker.lorem.sentences.cljs$lang$maxFixedArity = 1;
/**
 * Lazy sequence of random latin paragraphs.
 * 
 *   (paragraphs 5) will generate a sequence of random paragraphs between
 *   5 and 5 + 2 sentences.
 *   (paragraphs) will generate random paragraphs between 3 and 3 + 2 sentences
 */
faker.lorem.paragraphs = (function faker$lorem$paragraphs(var_args){
var args52873 = [];
var len__20222__auto___52876 = arguments.length;
var i__20223__auto___52877 = (0);
while(true){
if((i__20223__auto___52877 < len__20222__auto___52876)){
args52873.push((arguments[i__20223__auto___52877]));

var G__52878 = (i__20223__auto___52877 + (1));
i__20223__auto___52877 = G__52878;
continue;
} else {
}
break;
}

var G__52875 = args52873.length;
switch (G__52875) {
case 0:
return faker.lorem.paragraphs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return faker.lorem.paragraphs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52873.length)].join('')));

}
});

faker.lorem.paragraphs.cljs$core$IFn$_invoke$arity$0 = (function (){
return faker.lorem.paragraphs.call(null,(3));
});

faker.lorem.paragraphs.cljs$core$IFn$_invoke$arity$1 = (function (sentence_count){
return cljs.core.map.call(null,(function (n){
return clojure.string.join.call(null," ",cljs.core.take.call(null,n,faker.lorem.sentences.call(null)));
}),cljs.core.repeatedly.call(null,(function (){
return (sentence_count + cljs.core.rand_int.call(null,(3)));
})));
});

faker.lorem.paragraphs.cljs$lang$maxFixedArity = 1;
