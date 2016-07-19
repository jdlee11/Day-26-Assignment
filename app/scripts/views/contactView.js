import $ from "jquery";

function renderContact(contact){
  let $contact = $(`
    <tr>
      <td>${contact.get("fullname")}</td>
      <td>${contact.get("nickname")}</td>
      <td>${contact.get("email")}</td>
      <td>${contact.get("number")}</td>
    </tr>
  `);

  return $contact;
}

export default renderContact;
