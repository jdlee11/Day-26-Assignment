import $ from "jquery";
import Backbone from "backbone";
import renderLogin from "./views/loginView";
import renderContacts from "./views/contactsView";
import contactCollection from "./collections/contacts";
import session from "./models/username";
import renderSignup from "./views/signupView";

const Router = Backbone.Router.extend({
  routes: {
    login: "loginFunction",
    signup: "signupFunction",
    contacts: "contactFunction"
  },
  loginFunction: function(){
    $(".container").empty().append(renderLogin);
  },
  signupFunction: function(){
    $(".container").empty().append(renderSignup);
  },
  contactFunction: function(){
    contactCollection.fetch({
      headers: {
        Authorization: `Kinvey ${session.authtoken}`
      },
      success: function(response){
        $(".container").empty().append(renderContacts(response));
      }
    });
  }
});

const router = new Router();
export default router;
