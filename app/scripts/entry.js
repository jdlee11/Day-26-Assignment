import $ from "jquery";
import Backbone from "backbone";
import router from "./router";
import settings from "./settings";
import user from "./models/username";

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (user.authtoken) {
    xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + user.authtoken);
  } else {
    xhrAjax.setRequestHeader('Authorization', 'Basic ' + user.basicAuth);

  }
  console.log('ajax send function ', arguments);
});

Backbone.history.start();

if (!user.username) {
  router.navigate('login', {trigger: true});
}
