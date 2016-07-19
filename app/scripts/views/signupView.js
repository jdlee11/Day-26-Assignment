import $ from "jquery";
import session from "../models/username";
import settings from "../settings";
import router from "../router";

function renderSignup(){
  let $signup = $(`
    <div class="signup">
      <h1>Sign up</h1>
      <input class="name" type="text" placeholder="choose username" />
      <input class="password" type="password" placeholder="choose password" />
      <button class="submit">Sign up</button>
    </div>
  `);
  $signup.find(".submit").on("click", function(evt){
    evt.preventDefault();
    let username = $signup.find(".name").val();
    let password = $signup.find(".password").val();
    session.save({ username: username, password: password }, {
      url: `https://baas.kinvey.com/user/${settings.appId}/`, // how to specify url in this format (as opposed to previous ajax format)
      success: function(response) {
        // model.unset("password");
        router.navigate("contacts", {trigger: true});
        console.log("signed up and logged in!");
      },
      error: function(){
        console.log("could not sign up");
      },
      headers: {
        Authorization: `Basic ${settings.basicAuth}`
      }
    });
  });
  return $signup;
}

export default renderSignup;
