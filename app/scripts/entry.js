import $ from "jquery";
import Backbone from "backbone";
import router from "./router";
import settings from "./settings";
import session from "./models/username";

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (session.get("authtoken")) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + session.get("authtoken"));
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);

  }
  console.log('ajax send function ', arguments);
});

Backbone.history.start();

if (!session.get("username")) {
  router.navigate('login', {trigger: true});
}
