// Compiled by ClojureScript 1.7.122 {}
goog.provide('offcourse.services.history');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
offcourse.services.history.get_token = (function offcourse$services$history$get_token(){
return [cljs.core.str(window.location.pathname),cljs.core.str(window.location.search)].join('');
});
offcourse.services.history.make_history = (function offcourse$services$history$make_history(){
var G__67440 = (new goog.history.Html5History());
G__67440.setPathPrefix([cljs.core.str(window.location.protocol),cljs.core.str("//"),cljs.core.str(window.location.host)].join(''));

G__67440.setUseFragment(false);

return G__67440;
});
offcourse.services.history.handle_url_change = (function offcourse$services$history$handle_url_change(e){
console.log(e);

console.log([cljs.core.str("Navigating: "),cljs.core.str(offcourse.services.history.get_token.call(null))].join(''));

if(cljs.core.truth_(e.isNavigation)){
} else {
console.log("Token set programmatically");

window.scrollTo((0),(0));
}

return secretary.core.dispatch_BANG_.call(null,offcourse.services.history.get_token.call(null));
});
offcourse.services.history.history;
offcourse.services.history.nav_BANG_ = (function offcourse$services$history$nav_BANG_(keyword){
var token = [cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,keyword))].join('');
return offcourse.services.history.history.setToken(token);
});
offcourse.services.history.init_BANG_ = (function offcourse$services$history$init_BANG_(){
if(typeof offcourse.services.history.history !== 'undefined'){
return null;
} else {
offcourse.services.history.history = (function (){var G__67443 = offcourse.services.history.make_history.call(null);
goog.events.listen(G__67443,goog.history.EventType.NAVIGATE,((function (G__67443){
return (function (p1__67441_SHARP_){
return offcourse.services.history.handle_url_change.call(null,p1__67441_SHARP_);
});})(G__67443))
);

G__67443.setEnabled(true);

return G__67443;
})();
}
});
