// Compiled by ClojureScript 1.7.122 {}
goog.provide('markdown.transformers');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_;
markdown.transformers._STAR_next_line_STAR_;
markdown.transformers.heading_QMARK_ = (function markdown$transformers$heading_QMARK_(text,type){
if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),cljs.core.take.call(null,(4),text))){
return null;
} else {
var trimmed = (cljs.core.truth_(text)?clojure.string.trim.call(null,text):null);
var and__34186__auto__ = cljs.core.not_empty.call(null,trimmed);
if(cljs.core.truth_(and__34186__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([type], true),trimmed);
} else {
return and__34186__auto__;
}
}
});
markdown.transformers.h1_QMARK_ = (function markdown$transformers$h1_QMARK_(text){
return markdown.transformers.heading_QMARK_.call(null,text,"=");
});
markdown.transformers.h2_QMARK_ = (function markdown$transformers$h2_QMARK_(text){
return markdown.transformers.heading_QMARK_.call(null,text,"-");
});
markdown.transformers.empty_line = (function markdown$transformers$empty_line(text,state){
if(cljs.core.truth_((function (){var or__34198__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__34198__auto__ = markdown.transformers.h1_QMARK_.call(null,text);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return markdown.transformers.h2_QMARK_.call(null,text);
}
})())?"":text),(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,text))?cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"heading","heading",-1312171873)):state)], null);
}
});
markdown.transformers.escape_code = (function markdown$transformers$escape_code(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.transformers.terminal_char_encodings = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",/\*/,"&terminal#42"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^",/\^/,"&terminal#94"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_",/\_/,"&terminal#95"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~",/\~/,"&terminal#126"], null)], null);
/**
 * Remove the terminal encodings. Should probably only do this at the very end
 * or unless you know exactly what you are doing!
 */
markdown.transformers.unescape_terminally_encoded_chars = (function markdown$transformers$unescape_terminally_encoded_chars(text){
return cljs.core.reduce.call(null,(function (text__$1,p__42392){
var vec__42393 = p__42392;
var char_str = cljs.core.nth.call(null,vec__42393,(0),null);
var _ = cljs.core.nth.call(null,vec__42393,(1),null);
var char_replacement = cljs.core.nth.call(null,vec__42393,(2),null);
return clojure.string.replace.call(null,text__$1,char_replacement,char_str);
}),text,markdown.transformers.terminal_char_encodings);
});
/**
 *  Terminally encode these chars, so that at the end we can replace them.
 *   This is so that subsequent processing does not accidentally convert these into
 *   html (like italics or bold) -- what a mess that would be!
 */
markdown.transformers.escape_terminally_encoded_chars = (function markdown$transformers$escape_terminally_encoded_chars(var_args){
var args__35263__auto__ = [];
var len__35256__auto___42397 = arguments.length;
var i__35257__auto___42398 = (0);
while(true){
if((i__35257__auto___42398 < len__35256__auto___42397)){
args__35263__auto__.push((arguments[i__35257__auto___42398]));

var G__42399 = (i__35257__auto___42398 + (1));
i__35257__auto___42398 = G__42399;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((0) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((0)),(0))):null);
return markdown.transformers.escape_terminally_encoded_chars.cljs$core$IFn$_invoke$arity$variadic(argseq__35264__auto__);
});

markdown.transformers.escape_terminally_encoded_chars.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.reduce.call(null,(function (str,p__42395){
var vec__42396 = p__42395;
var _ = cljs.core.nth.call(null,vec__42396,(0),null);
var char_regex = cljs.core.nth.call(null,vec__42396,(1),null);
var char_replacement = cljs.core.nth.call(null,vec__42396,(2),null);
return clojure.string.replace.call(null,str,char_regex,char_replacement);
}),clojure.string.join.call(null,cljs.core.apply.call(null,cljs.core.concat,xs)),markdown.transformers.terminal_char_encodings);
});

markdown.transformers.escape_terminally_encoded_chars.cljs$lang$maxFixedArity = (0);

markdown.transformers.escape_terminally_encoded_chars.cljs$lang$applyTo = (function (seq42394){
return markdown.transformers.escape_terminally_encoded_chars.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42394));
});
markdown.transformers.escaped_chars = (function markdown$transformers$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__34198__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.transformers.separator = (function markdown$transformers$separator(escape_QMARK_,text,open,close,separator__$1,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,separator__$1)),cljs.core.seq.call(null,text));
var cur_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.into.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.call(null,out,separator__$1):out),buf)),cljs.core.dissoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var G__42400 = cljs.core.vec.call(null,cljs.core.concat.call(null,out,cljs.core.seq.call(null,open),(cljs.core.truth_(escape_QMARK_)?cljs.core.seq.call(null,markdown.transformers.escape_code.call(null,clojure.string.join.call(null,buf))):buf),cljs.core.seq.call(null,close)));
var G__42401 = cljs.core.PersistentVector.EMPTY;
var G__42402 = cljs.core.rest.call(null,tokens);
var G__42403 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__42400;
buf = G__42401;
tokens = G__42402;
cur_state = G__42403;
continue;
} else {
var G__42404 = out;
var G__42405 = cljs.core.into.call(null,buf,cljs.core.first.call(null,tokens));
var G__42406 = cljs.core.rest.call(null,tokens);
var G__42407 = cur_state;
out = G__42404;
buf = G__42405;
tokens = G__42406;
cur_state = G__42407;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator__$1)){
var G__42408 = out;
var G__42409 = buf;
var G__42410 = cljs.core.rest.call(null,tokens);
var G__42411 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__42408;
buf = G__42409;
tokens = G__42410;
cur_state = G__42411;
continue;
} else {
var G__42412 = cljs.core.into.call(null,out,cljs.core.first.call(null,tokens));
var G__42413 = buf;
var G__42414 = cljs.core.rest.call(null,tokens);
var G__42415 = cur_state;
out = G__42412;
buf = G__42413;
tokens = G__42414;
cur_state = G__42415;
continue;

}
}
}
break;
}
}
});
markdown.transformers.strong = (function markdown$transformers$strong(text,state){
return markdown.transformers.separator.call(null,false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.transformers.bold = (function markdown$transformers$bold(text,state){
return markdown.transformers.separator.call(null,false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.transformers.em = (function markdown$transformers$em(text,state){
return markdown.transformers.separator.call(null,false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.transformers.italics = (function markdown$transformers$italics(text,state){
return markdown.transformers.separator.call(null,false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.transformers.inline_code = (function markdown$transformers$inline_code(text,state){
return markdown.transformers.separator.call(null,true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.transformers.strikethrough = (function markdown$transformers$strikethrough(text,state){
return markdown.transformers.separator.call(null,false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.transformers.superscript = (function markdown$transformers$superscript(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"^",null], null), null)),text);
var buf = cljs.core.PersistentVector.EMPTY;
var remaining = tokens;
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,buf),state], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,remaining),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null))){
var G__42416 = cljs.core.into.call(null,buf,cljs.core.concat.call(null,cljs.core.seq.call(null,"<sup>"),cljs.core.second.call(null,remaining),cljs.core.seq.call(null,"</sup>")));
var G__42417 = cljs.core.drop.call(null,(2),remaining);
buf = G__42416;
remaining = G__42417;
continue;
} else {
var G__42418 = cljs.core.into.call(null,buf,cljs.core.first.call(null,remaining));
var G__42419 = cljs.core.rest.call(null,remaining);
buf = G__42418;
remaining = G__42419;
continue;

}
}
break;
}
}
});
markdown.transformers.heading_text = (function markdown$transformers$heading_text(text){
return clojure.string.trim.call(null,clojure.string.join.call(null,cljs.core.take_while.call(null,(function (p1__42421_SHARP_){
return cljs.core.not_EQ_.call(null,"#",p1__42421_SHARP_);
}),cljs.core.drop_while.call(null,(function (p1__42420_SHARP_){
return (cljs.core._EQ_.call(null,"#",p1__42420_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__42420_SHARP_));
}),text))));
});
markdown.transformers.heading_level = (function markdown$transformers$heading_level(text){
var num_hashes = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__42422_SHARP_){
return cljs.core.not_EQ_.call(null," ",p1__42422_SHARP_);
}),cljs.core.take_while.call(null,(function (p1__42423_SHARP_){
return (cljs.core._EQ_.call(null,"#",p1__42423_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__42423_SHARP_));
}),cljs.core.seq.call(null,text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.transformers.make_heading = (function markdown$transformers$make_heading(text,heading_anchors){
var temp__4423__auto__ = markdown.transformers.heading_level.call(null,text);
if(cljs.core.truth_(temp__4423__auto__)){
var heading = temp__4423__auto__;
var text__$1 = markdown.transformers.heading_text.call(null,text);
return [cljs.core.str("<h"),cljs.core.str(heading),cljs.core.str(">"),cljs.core.str((cljs.core.truth_(heading_anchors)?[cljs.core.str("<a name=\""),cljs.core.str(clojure.string.replace.call(null,clojure.string.lower_case.call(null,text__$1)," ","&#95;")),cljs.core.str("\"></a>")].join(''):null)),cljs.core.str(text__$1),cljs.core.str("</h"),cljs.core.str(heading),cljs.core.str(">")].join('');
} else {
return null;
}
});
markdown.transformers.heading = (function markdown$transformers$heading(text,state){
if(cljs.core.truth_((function (){var or__34198__auto__ = new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.h1_QMARK_.call(null,markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h1>"),cljs.core.str(text),cljs.core.str("</h1>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
if(cljs.core.truth_(markdown.transformers.h2_QMARK_.call(null,markdown.transformers._STAR_next_line_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<h2>"),cljs.core.str(text),cljs.core.str("</h2>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
var temp__4423__auto__ = markdown.transformers.make_heading.call(null,text,new cljs.core.Keyword(null,"heading-anchors","heading-anchors",1713527866).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__4423__auto__)){
var heading__$1 = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [heading__$1,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"heading","heading",-1312171873),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.br = (function markdown$transformers$br(text,p__42424){
var map__42427 = p__42424;
var map__42427__$1 = ((((!((map__42427 == null)))?((((map__42427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42427):map__42427);
var state = map__42427__$1;
var code = cljs.core.get.call(null,map__42427__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var lists = cljs.core.get.call(null,map__42427__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" "," "], null),cljs.core.take_last.call(null,(2),text))) && (cljs.core.not.call(null,(function (){var or__34198__auto__ = code;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return lists;
}
})())))?[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(2),text))),cljs.core.str("<br />")].join(''):text),state], null);
});
markdown.transformers.autourl_transformer = (function markdown$transformers$autourl_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))?text:clojure.string.replace.call(null,text,/<https?:\/\/[-A-Za-z0-9+&@#\/%?=~_()|!:,.;]*[-A-Za-z0-9+&@#\/%=~_()|]>/,(function (p1__42429_SHARP_){
var url = cljs.core.subs.call(null,p1__42429_SHARP_,(1),(cljs.core.count.call(null,p1__42429_SHARP_) - (1)));
return [cljs.core.str("<a href=\""),cljs.core.str(url),cljs.core.str("\">"),cljs.core.str(url),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.autoemail_transformer = (function markdown$transformers$autoemail_transformer(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__34198__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,text,/<[\w._%+-]+@[\w.-]+\.[\w]{2,4}>/,(function (p1__42430_SHARP_){
var encoded = (cljs.core.truth_(new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403).cljs$core$IFn$_invoke$arity$1(state))?cljs.core.subs.call(null,p1__42430_SHARP_,(1),(cljs.core.count.call(null,p1__42430_SHARP_) - (1))):cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (c){
if((cljs.core.rand.call(null) > 0.5)){
return markdown.transformers.formatter.call(null,"&#x%02x;",(c | (0)));
} else {
return c;
}
}),cljs.core.subs.call(null,p1__42430_SHARP_,(1),(cljs.core.count.call(null,p1__42430_SHARP_) - (1))))));
return [cljs.core.str("<a href=\"mailto:"),cljs.core.str(encoded),cljs.core.str("\">"),cljs.core.str(encoded),cljs.core.str("</a>")].join('');
}))),state], null);
});
markdown.transformers.paragraph_text = (function markdown$transformers$paragraph_text(last_line_empty_QMARK_,text){
if(cljs.core.truth_((function (){var and__34186__auto__ = cljs.core.not.call(null,last_line_empty_QMARK_);
if(and__34186__auto__){
return cljs.core.not_empty.call(null,text);
} else {
return and__34186__auto__;
}
})())){
return [cljs.core.str(" "),cljs.core.str(text)].join('');
} else {
return text;
}
});
markdown.transformers.paragraph = (function markdown$transformers$paragraph(text,p__42431){
var map__42434 = p__42431;
var map__42434__$1 = ((((!((map__42434 == null)))?((((map__42434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42434):map__42434);
var state = map__42434__$1;
var eof = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var heading = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var hr = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"hr","hr",1377740067));
var code = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var lists = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var blockquote = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"blockquote","blockquote",372264190));
var paragraph__$1 = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"paragraph","paragraph",296707709));
var last_line_empty_QMARK_ = cljs.core.get.call(null,map__42434__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527));
if(cljs.core.truth_((function (){var and__34186__auto__ = paragraph__$1;
if(cljs.core.truth_(and__34186__auto__)){
return lists;
} else {
return and__34186__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p>"),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),false)], null);
} else {
if(cljs.core.truth_((function (){var or__34198__auto__ = heading;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
var or__34198__auto____$1 = hr;
if(cljs.core.truth_(or__34198__auto____$1)){
return or__34198__auto____$1;
} else {
var or__34198__auto____$2 = code;
if(cljs.core.truth_(or__34198__auto____$2)){
return or__34198__auto____$2;
} else {
var or__34198__auto____$3 = lists;
if(cljs.core.truth_(or__34198__auto____$3)){
return or__34198__auto____$3;
} else {
return blockquote;
}
}
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(paragraph__$1)){
if(cljs.core.truth_((function (){var or__34198__auto__ = eof;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.paragraph_text.call(null,last_line_empty_QMARK_,text)),cljs.core.str("</p>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.paragraph_text.call(null,last_line_empty_QMARK_,text),state], null);
}
} else {
if(cljs.core.truth_((function (){var and__34186__auto__ = cljs.core.not.call(null,eof);
if(and__34186__auto__){
return last_line_empty_QMARK_;
} else {
return and__34186__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<p>"),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"paragraph","paragraph",296707709),true,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.code = (function markdown$transformers$code(text,p__42436){
var map__42439 = p__42436;
var map__42439__$1 = ((((!((map__42439 == null)))?((((map__42439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42439):map__42439);
var state = map__42439__$1;
var eof = cljs.core.get.call(null,map__42439__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var lists = cljs.core.get.call(null,map__42439__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var code__$1 = cljs.core.get.call(null,map__42439__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__42439__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__34198__auto__ = lists;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(code__$1)){
if(cljs.core.truth_((function (){var or__34198__auto__ = eof;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cljs.core.not_EQ_.call(null,"    ",clojure.string.join.call(null,cljs.core.take.call(null,(4),text)));
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n</code></pre>"),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("\n"),cljs.core.str(markdown.transformers.escape_code.call(null,clojure.string.replace_first.call(null,text,/    /,"")))].join(''),state], null);
}
} else {
if(cljs.core.empty_QMARK_.call(null,clojure.string.trim.call(null,text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var num_spaces = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
if((num_spaces > (3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code>"),cljs.core.str(markdown.transformers.escape_code.call(null,clojure.string.replace_first.call(null,text,/    /,"")))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
}
});
markdown.transformers.codeblock = (function markdown$transformers$codeblock(text,state){
var trimmed = clojure.string.trim.call(null,text);
if(cljs.core.truth_((function (){var and__34186__auto__ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.call(null,(3),trimmed));
if(and__34186__auto__){
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__34186__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.call(null,cljs.core.drop.call(null,(3),trimmed)))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),false,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
if(cljs.core.truth_((function (){var and__34186__auto__ = cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take_last.call(null,(3),trimmed));
if(and__34186__auto__){
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__34186__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</code></pre>"),cljs.core.str(clojure.string.join.call(null,cljs.core.drop_last.call(null,(3),trimmed)))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),false,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),false,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`","`","`"], null),cljs.core.take.call(null,(3),trimmed))){
var vec__42442 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.drop.call(null,(3),trimmed));
var lang = cljs.core.nth.call(null,vec__42442,(0),null);
var code = cljs.core.nth.call(null,vec__42442,(1),null);
var s = cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,code));
var formatter = new cljs.core.Keyword(null,"code-style","code-style",-2144009586).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<pre><code"),cljs.core.str((cljs.core.truth_(cljs.core.not_empty.call(null,lang))?[cljs.core.str(" "),cljs.core.str((cljs.core.truth_(formatter)?formatter.call(null,clojure.string.join.call(null,lang)):[cljs.core.str("class=\""),cljs.core.str(clojure.string.join.call(null,lang)),cljs.core.str("\"")].join('')))].join(''):null)),cljs.core.str(">"),cljs.core.str(markdown.transformers.escape_code.call(null,((cljs.core.empty_QMARK_.call(null,s))?s:[cljs.core.str(s),cljs.core.str("\n")].join(''))))].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"code","code",1586293142),true,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855),true)], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.escape_code.call(null,text)),cljs.core.str("\n")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
});
markdown.transformers.hr = (function markdown$transformers$hr(text,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(((cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"*",null], null), null),text))) || (cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"-",null], null), null),text))) || (cljs.core.empty_QMARK_.call(null,cljs.core.drop_while.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [" ",null,"_",null], null), null),text)))) && ((cljs.core.count.call(null,cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [" ",null], null), null),text)) > (2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<hr/>")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"hr","hr",1377740067),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
}
});
markdown.transformers.blockquote = (function markdown$transformers$blockquote(text,p__42443){
var map__42446 = p__42443;
var map__42446__$1 = ((((!((map__42446 == null)))?((((map__42446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42446):map__42446);
var state = map__42446__$1;
var eof = cljs.core.get.call(null,map__42446__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var code = cljs.core.get.call(null,map__42446__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__42446__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var lists = cljs.core.get.call(null,map__42446__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
var trimmed = clojure.string.trim.call(null,text);
if(cljs.core.truth_((function (){var or__34198__auto__ = code;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
var or__34198__auto____$1 = codeblock;
if(cljs.core.truth_(or__34198__auto____$1)){
return or__34198__auto____$1;
} else {
return lists;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"blockquote","blockquote",372264190).cljs$core$IFn$_invoke$arity$1(state))){
if(cljs.core.truth_((function (){var or__34198__auto__ = eof;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return cljs.core.empty_QMARK_.call(null,trimmed);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p></blockquote>",cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),false)], null);
} else {
if(cljs.core._EQ_.call(null,">",trimmed)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</p><p>",state], null);
} else {
if(cljs.core._EQ_.call(null,">-",cljs.core.subs.call(null,trimmed,(0),(2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</p><footer>"),cljs.core.str(cljs.core.subs.call(null,text,(2))),cljs.core.str("</footer><p>")].join(''),state], null);
} else {
if(cljs.core._EQ_.call(null,">",cljs.core.subs.call(null,trimmed,(0),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,text,(1))),cljs.core.str(" ")].join(''),state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(text),cljs.core.str(" ")].join(''),state], null);

}
}
}
}
} else {
if(cljs.core._EQ_.call(null,">",cljs.core.first.call(null,text))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<blockquote><p>"),cljs.core.str(clojure.string.join.call(null,cljs.core.rest.call(null,text))),cljs.core.str(" ")].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"blockquote","blockquote",372264190),true)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}

}
}
});
markdown.transformers.href = (function markdown$transformers$href(title,link){
return markdown.transformers.escape_terminally_encoded_chars.call(null,cljs.core.seq.call(null,"<a href='"),link,cljs.core.seq.call(null,"'>"),title,cljs.core.seq.call(null,"</a>"));
});
markdown.transformers.img = (function markdown$transformers$img(var_args){
var args__35263__auto__ = [];
var len__35256__auto___42453 = arguments.length;
var i__35257__auto___42454 = (0);
while(true){
if((i__35257__auto___42454 < len__35256__auto___42453)){
args__35263__auto__.push((arguments[i__35257__auto___42454]));

var G__42455 = (i__35257__auto___42454 + (1));
i__35257__auto___42454 = G__42455;
continue;
} else {
}
break;
}

var argseq__35264__auto__ = ((((2) < args__35263__auto__.length))?(new cljs.core.IndexedSeq(args__35263__auto__.slice((2)),(0))):null);
return markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35264__auto__);
});

markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,p__42451){
var vec__42452 = p__42451;
var title = cljs.core.nth.call(null,vec__42452,(0),null);
return markdown.transformers.escape_terminally_encoded_chars.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")));
});

markdown.transformers.img.cljs$lang$maxFixedArity = (2);

markdown.transformers.img.cljs$lang$applyTo = (function (seq42448){
var G__42449 = cljs.core.first.call(null,seq42448);
var seq42448__$1 = cljs.core.next.call(null,seq42448);
var G__42450 = cljs.core.first.call(null,seq42448__$1);
var seq42448__$2 = cljs.core.next.call(null,seq42448__$1);
return markdown.transformers.img.cljs$core$IFn$_invoke$arity$variadic(G__42449,G__42450,seq42448__$2);
});
markdown.transformers.handle_img_link = (function markdown$transformers$handle_img_link(xs){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,(3),xs))){
var xs__$1 = cljs.core.drop.call(null,(3),xs);
var vec__42459 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.call(null,vec__42459,(0),null);
var xy = cljs.core.nth.call(null,vec__42459,(1),null);
var vec__42460 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,(2),xy));
var url_title = cljs.core.nth.call(null,vec__42460,(0),null);
var zy = cljs.core.nth.call(null,vec__42460,(1),null);
var vec__42461 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.call(null,vec__42461,(0),null);
var title = cljs.core.nth.call(null,vec__42461,(1),null);
return cljs.core.concat.call(null,"[",markdown.transformers.img.call(null,alt,url,cljs.core.not_empty.call(null,title)),cljs.core.rest.call(null,zy));
} else {
return xs;
}
});
markdown.transformers.process_link_title = (function markdown$transformers$process_link_title(title,state){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p1__42463_SHARP_,p2__42462_SHARP_){
return cljs.core.apply.call(null,p2__42462_SHARP_,p1__42463_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough], null)));
});
markdown.transformers.link = (function markdown$transformers$link(text,p__42464){
var map__42472 = p__42464;
var map__42472__$1 = ((((!((map__42472 == null)))?((((map__42472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42472):map__42472);
var state = map__42472__$1;
var code = cljs.core.get.call(null,map__42472__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__42472__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__34198__auto__ = code;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq.call(null,text);
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),state], null);
} else {
var vec__42474 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.call(null,vec__42474,(0),null);
var xs = cljs.core.nth.call(null,vec__42474,(1),null);
var xs__$1 = markdown.transformers.handle_img_link.call(null,xs);
var vec__42475 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.call(null,vec__42475,(0),null);
var ys = cljs.core.nth.call(null,vec__42475,(1),null);
var vec__42476 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.call(null,vec__42476,(0),null);
var zs = cljs.core.nth.call(null,vec__42476,(1),null);
var vec__42477 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.call(null,vec__42477,(0),null);
var tail = cljs.core.nth.call(null,vec__42477,(1),null);
if(((cljs.core.count.call(null,link__$1) < (2))) || ((cljs.core.count.call(null,tail) < (1))) || ((cljs.core.count.call(null,dud) > (1)))){
var G__42479 = cljs.core.concat.call(null,out,head,markdown.transformers.process_link_title.call(null,title,state),dud,link__$1);
var G__42480 = tail;
out = G__42479;
tokens = G__42480;
continue;
} else {
var G__42481 = cljs.core.into.call(null,out,((cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!"))?(function (){var alt = cljs.core.rest.call(null,title);
var vec__42478 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));
var url = cljs.core.nth.call(null,vec__42478,(0),null);
var title__$1 = cljs.core.nth.call(null,vec__42478,(1),null);
var title__$2 = markdown.transformers.process_link_title.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,title__$1)),state);
return cljs.core.concat.call(null,cljs.core.butlast.call(null,head),markdown.transformers.img.call(null,alt,url,title__$2));
})():cljs.core.concat.call(null,head,markdown.transformers.href.call(null,cljs.core.rest.call(null,markdown.transformers.process_link_title.call(null,title,state)),cljs.core.rest.call(null,link__$1)))));
var G__42482 = cljs.core.rest.call(null,tail);
out = G__42481;
tokens = G__42482;
continue;
}
}
break;
}
}
});
markdown.transformers.reference = (function markdown$transformers$reference(text){
return cljs.core.re_find.call(null,/^\[[a-zA-Z0-9 ]+\]:/,text);
});
markdown.transformers.parse_reference = (function markdown$transformers$parse_reference(reference,start){
return clojure.string.split.call(null,clojure.string.trim.call(null,cljs.core.subs.call(null,reference,start)),/\s+/,(2));
});
markdown.transformers.parse_reference_link = (function markdown$transformers$parse_reference_link(line,references){
var trimmed = clojure.string.trim.call(null,line);
var temp__4425__auto__ = markdown.transformers.reference.call(null,trimmed);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,references,cljs.core.assoc,cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1))),markdown.transformers.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.transformers.replace_reference_link = (function markdown$transformers$replace_reference_link(references,reference){
var vec__42485 = clojure.string.split.call(null,reference,/\]\s*/,(2));
var title = cljs.core.nth.call(null,vec__42485,(0),null);
var id = cljs.core.nth.call(null,vec__42485,(1),null);
var vec__42486 = cljs.core.get.call(null,references,id);
var link = cljs.core.nth.call(null,vec__42486,(0),null);
var alt = cljs.core.nth.call(null,vec__42486,(1),null);
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(alt)?[cljs.core.str(" title='"),cljs.core.str(cljs.core.subs.call(null,alt,(1),(cljs.core.count.call(null,alt) - (1)))),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str(cljs.core.subs.call(null,title,(1))),cljs.core.str("</a>")].join('');
});
markdown.transformers.reference_link = (function markdown$transformers$reference_link(text,p__42487){
var map__42490 = p__42487;
var map__42490__$1 = ((((!((map__42490 == null)))?((((map__42490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42490):map__42490);
var state = map__42490__$1;
var code = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"references","references",882562509));
if((references == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.transformers.reference.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__34198__auto__ = code;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return codeblock;
}
})())?text:clojure.string.replace.call(null,text,/\[[a-zA-Z0-9 ]+\]\s*\[[a-zA-Z0-9 ]+\]/,cljs.core.partial.call(null,markdown.transformers.replace_reference_link,references))),state], null);

}
}
});
markdown.transformers.close_lists = (function markdown$transformers$close_lists(lists){
return clojure.string.join.call(null,(function (){var iter__34970__auto__ = (function markdown$transformers$close_lists_$_iter__42500(s__42501){
return (new cljs.core.LazySeq(null,(function (){
var s__42501__$1 = s__42501;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__42501__$1);
if(temp__4425__auto__){
var s__42501__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42501__$2)){
var c__34968__auto__ = cljs.core.chunk_first.call(null,s__42501__$2);
var size__34969__auto__ = cljs.core.count.call(null,c__34968__auto__);
var b__42503 = cljs.core.chunk_buffer.call(null,size__34969__auto__);
if((function (){var i__42502 = (0);
while(true){
if((i__42502 < size__34969__auto__)){
var vec__42506 = cljs.core._nth.call(null,c__34968__auto__,i__42502);
var list_type = cljs.core.nth.call(null,vec__42506,(0),null);
cljs.core.chunk_append.call(null,b__42503,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name.call(null,list_type)),cljs.core.str(">")].join(''));

var G__42508 = (i__42502 + (1));
i__42502 = G__42508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42503),markdown$transformers$close_lists_$_iter__42500.call(null,cljs.core.chunk_rest.call(null,s__42501__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42503),null);
}
} else {
var vec__42507 = cljs.core.first.call(null,s__42501__$2);
var list_type = cljs.core.nth.call(null,vec__42507,(0),null);
return cljs.core.cons.call(null,[cljs.core.str("</li></"),cljs.core.str(cljs.core.name.call(null,list_type)),cljs.core.str(">")].join(''),markdown$transformers$close_lists_$_iter__42500.call(null,cljs.core.rest.call(null,s__42501__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__34970__auto__.call(null,lists);
})());
});
markdown.transformers.add_row = (function markdown$transformers$add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.call(null,(function (p1__42509_SHARP_){
return (cljs.core.second.call(null,p1__42509_SHARP_) > num_indents);
}),cljs.core.reverse.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec.call(null,cljs.core.drop_last.call(null,cljs.core.count.call(null,lists_to_close),new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.str,markdown.transformers.close_lists.call(null,lists_to_close),"</li><li>",content),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),(((num_indents > cljs.core.second.call(null,cljs.core.last.call(null,remaining_lists))))?cljs.core.conj.call(null,remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lists","lists",-884730684)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.call(null,num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("</li><li>"),cljs.core.str(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<"),cljs.core.str(cljs.core.name.call(null,row_type)),cljs.core.str("><li>"),cljs.core.str(content)].join(''),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.transformers.ul = (function markdown$transformers$ul(text,state){
var vec__42511 = cljs.core.last.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.call(null,vec__42511,(0),null);
var indents = cljs.core.nth.call(null,vec__42511,(1),null);
var num_indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
var content = clojure.string.trim.call(null,markdown.transformers._STAR_substring_STAR_.call(null,text,(num_indents + (1))));
return markdown.transformers.add_row.call(null,new cljs.core.Keyword(null,"ul","ul",-1349521403),list_type,num_indents,indents,(function (){var or__34198__auto__ = markdown.transformers.make_heading.call(null,content,false);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.ol = (function markdown$transformers$ol(text,state){
var vec__42513 = cljs.core.last.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.call(null,vec__42513,(0),null);
var indents = cljs.core.nth.call(null,vec__42513,(1),null);
var num_indents = cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text));
var content = clojure.string.trim.call(null,clojure.string.join.call(null,cljs.core.drop_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),clojure.string.trim.call(null,text))));
return markdown.transformers.add_row.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),list_type,num_indents,indents,(function (){var or__34198__auto__ = markdown.transformers.make_heading.call(null,content,false);
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return content;
}
})(),state);
});
markdown.transformers.li = (function markdown$transformers$li(text,p__42514){
var map__42517 = p__42514;
var map__42517__$1 = ((((!((map__42517 == null)))?((((map__42517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42517):map__42517);
var state = map__42517__$1;
var code = cljs.core.get.call(null,map__42517__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__42517__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var last_line_empty_QMARK_ = cljs.core.get.call(null,map__42517__$1,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527));
var eof = cljs.core.get.call(null,map__42517__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
var lists = cljs.core.get.call(null,map__42517__$1,new cljs.core.Keyword(null,"lists","lists",-884730684));
if(cljs.core.truth_((function (){var and__34186__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__34186__auto__)){
return clojure.string.blank_QMARK_.call(null,text);
} else {
return and__34186__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists.call(null,cljs.core.reverse.call(null,lists))),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
if(cljs.core.truth_((function (){var or__34198__auto__ = code;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return codeblock;
}
})())){
if(cljs.core.truth_((function (){var and__34186__auto__ = lists;
if(cljs.core.truth_(and__34186__auto__)){
var or__34198__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return eof;
}
} else {
return and__34186__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(markdown.transformers.close_lists.call(null,cljs.core.reverse.call(null,lists))),cljs.core.str(text)].join(''),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),false)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
} else {
if(cljs.core.truth_((function (){var and__34186__auto__ = cljs.core.not.call(null,eof);
if(and__34186__auto__){
var and__34186__auto____$1 = lists;
if(cljs.core.truth_(and__34186__auto____$1)){
return clojure.string.blank_QMARK_.call(null,text);
} else {
return and__34186__auto____$1;
}
} else {
return and__34186__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count.call(null,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim.call(null,text);
var in_list_QMARK_ = new cljs.core.Keyword(null,"lists","lists",-884730684).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find.call(null,/^[\*\+-] /,trimmed))){
return markdown.transformers.ul.call(null,(cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/^[0-9]+\. /,trimmed))){
return markdown.transformers.ol.call(null,(cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__34186__auto__ = (function (){var or__34198__auto__ = eof;
if(cljs.core.truth_(or__34198__auto__)){
return or__34198__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__34186__auto__)){
return cljs.core.not_empty.call(null,lists);
} else {
return and__34186__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.close_lists.call(null,cljs.core.reverse.call(null,lists)),cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"lists","lists",-884730684),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"buf","buf",-213913340),text)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});
/**
 * Terminally encoded chars are ones that we've determined should no longer be processed or evaluated
 *   Things like _ in a href for a link, for example.
 */
markdown.transformers.cleanup_terminally_encoded_chars = (function markdown$transformers$cleanup_terminally_encoded_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.unescape_terminally_encoded_chars.call(null,text),state], null);
});
markdown.transformers.transformer_vector = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.empty_line,markdown.transformers.codeblock,markdown.transformers.code,markdown.transformers.escaped_chars,markdown.transformers.inline_code,markdown.transformers.autoemail_transformer,markdown.transformers.autourl_transformer,markdown.transformers.link,markdown.transformers.reference_link,markdown.transformers.hr,markdown.transformers.li,markdown.transformers.heading,markdown.transformers.italics,markdown.transformers.em,markdown.transformers.strong,markdown.transformers.bold,markdown.transformers.strikethrough,markdown.transformers.superscript,markdown.transformers.blockquote,markdown.transformers.paragraph,markdown.transformers.br,markdown.transformers.cleanup_terminally_encoded_chars], null);
