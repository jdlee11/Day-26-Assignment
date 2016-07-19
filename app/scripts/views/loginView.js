import $ from "jquery";
import settings from "../settings";
import user from "../models/username";

let $login = $(`
  <div class="login">
    <h1>Log in</h1>
    <input class="name" type="text" placeholder="username" />
    <input class="password" type="password" placeholder="password" />
    <button class="submit">Log in</button>
  </div>
`);
$login.find(".submit").on("click", function(evt){
  evt.preventDefault();
  let username = $login.find(".name").val();
  let password = $login.find(".password").val();
  let encrypted = btoa(settings.appId + ":" + settings.appSecret); // different from settings.basicAuth?
  console.log(settings);
  console.log(encrypted);
  $.ajax({
    type: "POST",
    url: `https://baas.kinvey.com/user/${settings.appId}/`,
    data: JSON.stringify({
      username: username,
      password: password
    }),
    headers: {
      Authorization: `Basic ${encrypted}` // keeps saying Basic undefined
    },
    contentType: 'application/json',
    success: function(response) {
      user.username = username;
      user.authtoken = response._kmd.authtoken;
      location.hash = "#contacts";
      console.log("logged in!");
    },
    error: function(){
      console.log("could not log in");
    }
  });
});


export default $login;
