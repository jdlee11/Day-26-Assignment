import Backbone from "backbone";
import settings from "../settings";

const Contact = Backbone.Model.extend({
  idAttribute: '_id',
});

window.Contact = Contact;
export default Contact;
