// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.appstate.service');
goog.require('cljs.core');
goog.require('offcourse.models.action');
offcourse.appstate.service.switch_route = (function offcourse$appstate$service$switch_route(payload){
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"requested-route","requested-route",1437225782),new cljs.core.Keyword(null,"payload","payload",-383036092),payload);
});
offcourse.appstate.service.toggle_done = (function offcourse$appstate$service$toggle_done(payload){
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"requested-toggle-done","requested-toggle-done",980972634),new cljs.core.Keyword(null,"payload","payload",-383036092),payload);
});
offcourse.appstate.service.get_data = (function offcourse$appstate$service$get_data(payload){
return offcourse.models.action.respond.call(null,new cljs.core.Keyword(null,"requested-data","requested-data",-1737870093),new cljs.core.Keyword(null,"payload","payload",-383036092),payload);
});
offcourse.appstate.service.return_to_course = (function offcourse$appstate$service$return_to_course(payload){
return offcourse.appstate.service.switch_route.call(null,cljs.core.assoc.call(null,payload,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"course","course",1455432948)));
});

//# sourceMappingURL=service.js.map