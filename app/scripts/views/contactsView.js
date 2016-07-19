import $ from "jquery";
import renderContact from "./contactView";
import Contact from "../models/contact";
import session from "../models/username";
import router from "../router";

function renderContacts(contactCollection){
  let $contactList = $(`
    <div>
      <table>
        <tr class="headers">
          <th>Name</th>
          <th>Nickname</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </table>
    </div>
  `);

  let $newContactForm = $(`
    <div class="new-contact">
      <input class="new-name" type="text" placeholder="Full name"/>
      <input class="new-nickname" type="text" placeholder="Nickname"/>
      <input class="new-email" type="text" placeholder="Email"/>
      <input class="new-number" type="text" placeholder="Phone number"/>
      <button class="make-new">Add Contact</button>
    </div>
  `);

  // add contacts created by this user
  contactCollection.forEach(function(contact){
    if (contact.get("author") === session.get("username")){
      $contactList.find("table").append(renderContact(contact));
    }
  });
  contactCollection.on("add", function(contact){
    if (contact.author === session.get("username")){
      $contactList.find("table").append(renderContact(contact));
    }
  });
  $newContactForm.find(".make-new").on("click", function(evt){
    evt.preventDefault();
    let myContact = {
      fullname: $newContactForm.find(".new-name").val(),
      nickname: $newContactForm.find(".new-nickname").val(),
      email: $newContactForm.find(".new-email").val(),
      number: $newContactForm.find(".new-number").val(),
      author: session.get("username")
    };
    contactCollection.create(myContact, {
      success: function(){
        router.navigate("temp", {trigger: false});
        router.navigate("contacts", {trigger: true});
      }
    });
  });
  $contactList.prepend($newContactForm);


  return $contactList;
}

export default renderContacts;
