document.addEventListener ("DOMContentLoaded", () => {
const sendForm = document.getElementById("xyz");

xyz.addEventListener("submit", (e) => {
  e.preventDefault();

let searchUser = document.getElementById("alert_user");
let messageUser = document.getElementById("type");

if (searchUser.value == "" || messageUser.value == "") {
alert("Please input a value in both fields!");
  } else {
    alert("This form has been successfully submitted!");
    console.log(`This form has a user name of ${searchUser.value} and message of ${messageUser.value}`);

    searchUser.value = "";
    messageUser.value = "";
  }
});



});
