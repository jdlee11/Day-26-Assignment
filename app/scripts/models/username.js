import Backbone from "backbone";
import settings from "../settings";

const Session = Backbone.Model.extend({
  urlRoot: `https://baas.kinvey.com/user/${settings.appId}/login`,
  defaults: {
    username: "",
    authtoken: ""
  },
  // use parse to modify how we react to response from server
  // what we return will be used byt he model
  parse: function(response){
    if (response){
      return {
        authtoken: response._kmd.authtoken,
        username: response.username,
        userId: response._id
      };
    }
  }
});

let user = {
  username: ""
};

let session = new Session();
export default session;
