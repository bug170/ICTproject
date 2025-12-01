document.getElementById("accountForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("Email").value.trim();
  let password = document.getElementById("Pass").value;
  let confirm = document.getElementById("Confirm").value;

  let valid = true;

  document.getElementById("nameErr").innerText = "";
  document.getElementById("EmailErr").innerText = "";
  document.getElementById("PassErr").innerText = "";
  document.getElementById("ConfirmErr").innerText = "";

  if (name === "") {
    document.getElementById("nameErr").innerText = "Please enter your name";
    valid = false;
  }

  if (email === "" || !email.includes("@")) {
    document.getElementById("EmailErr").innerText = "Enter a valid email";
    valid = false;
  }

  if (password.length < 6) {
    document.getElementById("PassErr").innerText =
      "Password must be at least 6 characters";
    valid = false;
  }

  if (confirm !== password) {
    document.getElementById("ConfirmErr").innerText = "Passwords do not match";
    valid = false;
  }

  if (valid) {
    alert("Thank you for visiting our site!");
  }
});
