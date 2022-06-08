let users = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : [];
function addUser(e) {
  e.preventDefault();
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const emailValue = document.getElementById("emailValue");
  const password = document.getElementById("password");
  let details = {
    firstName: fname.value,
    LastName: lname.value,
    email: emailValue.value,
    password: password.value,
  };
  users.push(details);
  localStorage.setItem("user", JSON.stringify(users));
  fname.value = "";
  lname.value = "";
  emailValue.value = "";
  password.value = "";
}