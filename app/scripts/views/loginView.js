import $ from "jquery";
import settings from "../settings";
import session from "../models/username";
import router from "../router";

function renderLogin(){
  let $login = $(`
    <div class="login">
      <h1>Log in</h1>
      <input class="name" type="text" placeholder="username" />
      <input class="password" type="password" placeholder="password" />
      <button class="submit">Log in</button>
      <button class="new-user">Sign up</button>
    </div>
  `);
  $login.find(".new-user").on("click", function(evt){
    evt.preventDefault();
    router.navigate("signup", {trigger: true});
  });
  $login.find(".submit").on("click", function(evt){
    evt.preventDefault();
    let username = $login.find(".name").val();
    let password = $login.find(".password").val();
    session.save({ username: username, password: password }, {
      success: function(response) {
        console.log("logged in!");
        router.navigate("contacts", {trigger: true});
      },
      error: function(){
        console.log("could not log in");
      },
      headers: {
        Authorization: `Basic ${settings.basicAuth}`
      }
    });
  });
  return $login;
}


export default renderLogin;
