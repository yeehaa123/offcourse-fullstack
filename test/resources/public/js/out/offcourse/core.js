// Compiled by ClojureScript 1.7.145 {}
goog.provide('offcourse.core');
goog.require('cljs.core');
goog.require('offcourse.api.index');
goog.require('offcourse.user.service');
goog.require('offcourse.datastore.index');
goog.require('offcourse.appstate.index');
goog.require('offcourse.views.index');
goog.require('offcourse.logger.service');
goog.require('offcourse.routes');
goog.require('cljs.core.async');
goog.require('offcourse.history.service');
goog.require('offcourse.actions.index');
offcourse.core.init_BANG_ = (function offcourse$core$init_BANG_(){
var actions_appstate = cljs.core.async.chan.call(null);
var actions_log = cljs.core.async.chan.call(null);
var actions_out = cljs.core.async.chan.call(null);
var actions_out_mult = cljs.core.async.mult.call(null,actions_out);
var appstate_datastore = cljs.core.async.chan.call(null);
var appstate_log = cljs.core.async.chan.call(null);
var appstate_out = cljs.core.async.chan.call(null);
var appstate_out_mult = cljs.core.async.mult.call(null,appstate_out);
var user_in = cljs.core.async.chan.call(null);
var user_out = cljs.core.async.chan.call(null);
var datastore_appstate = cljs.core.async.chan.call(null);
var datastore_api = cljs.core.async.chan.call(null);
var datastore_log = cljs.core.async.chan.call(null);
var datastore_out = cljs.core.async.chan.call(null);
var datastore_out_mult = cljs.core.async.mult.call(null,datastore_out);
var api_datastore = cljs.core.async.chan.call(null);
var api_log = cljs.core.async.chan.call(null);
var api_out = cljs.core.async.chan.call(null);
var api_out_mult = cljs.core.async.mult.call(null,api_out);
var router_out = cljs.core.async.chan.call(null);
var router_log = cljs.core.async.chan.call(null);
var router_appstate = cljs.core.async.chan.call(null);
var router_out_mult = cljs.core.async.mult.call(null,router_out);
var history_in = cljs.core.async.chan.call(null);
var views_in = cljs.core.async.chan.call(null);
var views_appstate = cljs.core.async.chan.call(null);
var views_log = cljs.core.async.chan.call(null);
var views_out = cljs.core.async.chan.call(null);
var views_out_mult = cljs.core.async.mult.call(null,views_out);
var appstate_in = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [router_appstate,actions_appstate,datastore_appstate,views_appstate], null));
var datastore_in = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appstate_datastore,api_datastore], null));
var api_in = datastore_api;
var logger_in = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [actions_log,router_log,api_log,user_out,appstate_log,views_log,datastore_log], null),(10));
cljs.core.async.tap.call(null,actions_out_mult,actions_appstate);

cljs.core.async.tap.call(null,actions_out_mult,actions_log);

cljs.core.async.tap.call(null,appstate_out_mult,appstate_datastore);

cljs.core.async.tap.call(null,appstate_out_mult,history_in);

cljs.core.async.tap.call(null,appstate_out_mult,views_in);

cljs.core.async.tap.call(null,appstate_out_mult,appstate_log);

cljs.core.async.tap.call(null,datastore_out_mult,datastore_api);

cljs.core.async.tap.call(null,datastore_out_mult,datastore_appstate);

cljs.core.async.tap.call(null,datastore_out_mult,datastore_log);

cljs.core.async.tap.call(null,api_out_mult,api_datastore);

cljs.core.async.tap.call(null,api_out_mult,api_log);

cljs.core.async.tap.call(null,router_out_mult,router_log);

cljs.core.async.tap.call(null,router_out_mult,router_appstate);

cljs.core.async.tap.call(null,views_out_mult,views_appstate);

cljs.core.async.tap.call(null,views_out_mult,views_log);

offcourse.actions.index.init.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-out","channel-out",1030621906),actions_out], null));

offcourse.routes.init.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-out","channel-out",1030621906),router_out], null));

offcourse.appstate.index.init.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-in","channel-in",-470630247),appstate_in,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906),appstate_out], null));

offcourse.user.service.init.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-in","channel-in",-470630247),user_in,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906),user_out], null));

offcourse.datastore.index.init.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-in","channel-in",-470630247),datastore_in,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906),datastore_out], null));

offcourse.api.index.init.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-in","channel-in",-470630247),api_in,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906),api_out], null));

offcourse.history.service.init_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-in","channel-in",-470630247),history_in], null));

offcourse.views.index.init.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-in","channel-in",-470630247),views_in,new cljs.core.Keyword(null,"channel-out","channel-out",1030621906),views_out], null));

return offcourse.logger.service.init.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-in","channel-in",-470630247),logger_in], null));
});

//# sourceMappingURL=core.js.map