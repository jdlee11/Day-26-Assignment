import $ from "jquery";
import Backbone from "backbone";
import $login from "./views/loginView";


const Router = Backbone.Router.extend({
  routes: {
    login: "loginFunction",
    signup: "signupFunction",
    contacts: "contactFunction"
  },
  loginFunction: function(){
    $(".container").empty().append($login);
  },
  signupFunction: function(){
    console.log("sign up, please");
  },
  contactFunction: function(){
    console.log("here are your contacts");
  }
});

const router = new Router();
export default router;
